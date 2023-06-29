---
title: Zero-Copy Reads, Apache Arrow and Flight
---

## Zero-Copy Reads
Imagine a simple server retrieving files from disk (e.g. CDN, file server, object storage ). A naive implemntation looks roughly like
```golang
func getFile(w http.ResponseWriter, r *http.Request) {
    path := strings.TrimPrefix(r.URL.Path, "/get-file/")
	data, err := ioutil.ReadFile(path)
	if err != nil {
		http.Error(w, "File not found", 404)
		return
	}

	w.Header().Set("Content-Type", "application/octet-stream")
	w.Write(data)
}
```
Simple enough, but on a low-level it's doing alot:
1. Request the kernel to load the data from disk to a kernel buffer
2. Read from kernel buffer to user space.
3. Write the data from user space back to the socket's buffer (within `w.Write`)
4. Independently, the kernel will write the data from the socket's buffer to the NIC's buffer.

When `len(data) <= sizeof(kernel buffer)`, this actually helps as an optimistic readahead cache (see [link](https://lwn.net/Articles/372384/)), but as `len(data)` gets increasingly large, all we get is additional CPU overhead and context switches. 

This is the value of zero-copy reads. Instead of multiple buffers and passing data into and out of user space: read data into a single kernel space buffer and pass it directly to the NIC buffer (by adding the buffer's descriptor to the socket buffer). This achieves:
1. Keep operations and buffers entirely in kernel space.
2. Reduce number of reads, remove all copies.

## Apache Arrow
- Columnar, in-memory data format
  - Data adjacency for scans
  - O(1) random access
  - SIMD and vectorisation friendly (from columnar nature and O(1) access)
  - Zero-copy without [pointer swizzling](https://en.wikipedia.org/wiki/Pointer_swizzling). 
- Standardisation format across databases, frameworks and languages
- Data representation of a database/data table is in batches:
  - Parallel read/write
  - heterogenous and multiple data sources for a data table (i.e. each source has own batches)

## Apache Flight
Client-server framework for Arrow
- Arrow is an “on-the-wire” representation; doesn't require deserialization when used over the network
- Since Arrow is batch-native, can easily stream in parallel, and from multiple sources.
- Optimised gRPC implementation for improved Protobuf wire format serialisation/deserialisation
  - Performance improvements whilst maintaining interoperability with standard gRPC clients + servers.
- Support for parallel and partitioned data access.
  - Use a coordinator node to get an "access plan" for the full dataset, which returns data like
  ```json
    [
        {
            "endpoint": "localhost:8000",
            "ticket": "751ba1be-87f2-44da-8eb3-f1405d14e66d"
        },
        {
            "endpoint": "https://remote.host",
            "ticket": "789a3ccc-da7b-464c-8bc9-e4f10ce226c9"
        },
    ]
  ```
  - Client call each endpoints which understand what data to return based on ticket. 
  - No unnecessary data transport
  - Parallel data transfer
  - Heterogenous data sources/access
- Out of box SSL encrypthon (from gRPC)
- Extensible authentication handling
- gRPC has the concept of “interceptors” for middleware