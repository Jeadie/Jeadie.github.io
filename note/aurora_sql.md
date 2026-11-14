---
title: "Aurora DSQL: Scalable, Multi-Region OLTP"
---

[link](https://arxiv.org/pdf/2607.13276)

## Overview

Disaggregate storage, compute & (interestingly) transaction coordination.
Multi-region active-active & strongly consistent!
MicroVms for query load
MVCC and precision timestamps reads.
OCC writes
Coordination at commit time avoids cross region latency.

### Architecture
          +-----------------+       ⌢
          | Query Processor | --( clock )
          +-----------------+ 


        +-----+     +-----+
        | adj |     | adj |
        +-----+     +-----+

        +---+        +---+
        | J |        | J |
        | o |        | o |
        | u |        | u |
        | r |        | r |
        | n |        | n |
        | a |        | a |
        | l |        | l |
        +---+        +---+

        +---------------+
        |   crossbar    |
        +---------------+  

+---------+  +---------+  +---------+        
| Storage |
