---
title: Ideas
permalink: /ideas
---

## Potential Businesses 
- Open-source alternate software platforms tooling that are (at least) one of: {10x cheaper (e.g. use cloud storage), 10x faster (e.g. rewritten in Rust, better threading/SIMD)}.
  - Current examples
    - [Dragonfly DB](https://www.dragonflydb.io/): better threading, caching and other decisions make it 25x more throughout than redis.
    - [Redpanda]: Simpler, 10x better tail latency and 1/6 cost of Apache kafka (via object store, C++, thread/core )
    - [OpenObserve](https://openobserve.ai/): ElasticSearch but 140x cheaper via object store, stateless nodes, Rust. 
    - 
  - Possible opportunities:
    - [kdb](https://kx.com/): Implement KDB's [q](https://code.kx.com/q/learn) programming language, backed on clickhouse or other open source tools. Sell enterprise support, or common cloud platform with the self-hosted data. Apparantly the price of KDB starts at 25k for 2 cores, 100-200k/core ([source](https://news.ycombinator.com/item?id=5020425)).
- App ["once"](once.com) Store for Open Source, [full](ideas/once-store.md)
- Grandparents will be early adopters for Web3 products.
- Farcaster for Real estate 
  - Two parts:
    - Farcaster protocol: Build core protocol and network for real estate interactions (i.e. houses as NFTs, interactions with properties, user identity, signature and verification)
    - Warpcaster: Boostrap protocol by building the first commercial application that provides value. Encourage others to build on the protocol. 
  - Current Real estate DeFI build projects/products that aren't sufficiently decentralised --> don't scale. 
- Robotic arm (or 3D printer like) painting
  - Simpliest process: Image, k-means, for each k: paint a dot per pixel in cluster, change to next colour. Optimise colour order and choice to minimise paint reuse.
- Generative AI version of unsplash.com but with proper credit/profit assignment.
- Sports "asset" marketplace for a new betting paradigm
  - e.g. $8.2 / stock of NBA team, 10c dividend per win
- Use generative AI for "live" sports matches.
  - Revenue via betting
  - Start with simpler dynamics with good betting markets (e.g. horse/dog racing)
- Platform for valuable aggregate data that individuals have already made, e.g:
  - Applications to ycombinator (un/successful)
  - College applications
  - Amazon purchasing history, used-goods marketplace
  - In sum: Any platform/monopoly that gets data from individuals that could be valuable to other businesses.
- Parameteric climate insurance for individuals + SMBs
- Proof-of-work email spam prevention 
- QR code coffee cup advertising marketplace
- Introducing a 'LLMLIKE' SQL operator for text embedding search
- ~~Edge distributed, AI search engine service~~
  - ~~Search query/results highly cacheable (~1% search terms -> ~60% search frequency)~~
  - ~~LLM model size can be reduced, and will continue to.~~
  - ~~Large tail of customers do not have large data; traditional/current vector search engines are going after large enterprise.~~
  - ~~Read only on cache, async write~~
- ~~Low earth satelite cattle tracking ear tags~~
- ~~Hand curated tech news platform~~
- ~~AI podcasting tools~~
- ~~Realtime satelite camera data for:~~
  - ~~Wild Animal Tracking~~
  - ~~Wildfire Detection~~
- ~~Ecommerce Recs-as-a-Service~~
- ~~P2P Coupon exchange platform~~
- ~~Beer-to-good-people beer-company advertising campaign~~


## Open-source
- IaC framework for automatic SOC 2 compliance. 
  - E.g. A terraform provider/plugin such that all infrastructure provisioned is SOC2 compliant by default. May have to be more than just IaC.
 
