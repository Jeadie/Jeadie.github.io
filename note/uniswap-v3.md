---
title: Uniswap V3
---
- [Paper](https://uniswap.org/whitepaper-v3.pdf)

## Overview
- Move from providing constant (across the price distribution) liquidity, to concentrated liquidity (i.e. providers can state the price bounds for their liquidity).
    - In essence, a Uniswap V2 liquidity pool per tick section.
    - Because liquidity is not constant, cannot use ERC20 as liquidity tokens. Each positions receives an NFT.

- Tiered fee levels, per token pair
    - LPs are incentivised to give liquidity to higher fee pools, but lower fee swaps may have larger volume.
- Built in oracles:
    - Recent price accumulators
        - Circular buffer for price*time@price. Updated on calls to contract at start of block
        - Can be used to compute time weighted average price
        - Track cumulative sum of current tick index ($log_{1.0001}(P)$), because it gives you a nice way to derive the time-weighted geometric price between two time points
        $$
        a_t = \sum_{i=1}^t log_{1.0001}(P_i); \\
        P_{t1 \to t2} = (\prod_{i=t1}^{t2} P_i)^{\frac{1}{t2-t1}}; \\
        log_{1.0001}(P_{t1 \to t2}) \to  P_{t1 \to t2} = 1.0001^{\frac{a_{t2}-a_{t1}}{t_2-t1}}
        $$

    - Liquidity
        - Second-weighted accumulated of $1/L$, L being liquditiy in current tick
        - Helps rewarding liquidity pooling
        - Decide on which fee-tier swap contract to use

