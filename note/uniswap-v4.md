---
title: Proposed Uniswap V4 
---
- [Paper](https://github.com/Uniswap/v4-core/blob/main/whitepaper-v4-draft.pdf)
- [Blog](https://blog.uniswap.org/uniswap-v4)


## Overview
 - Hooks triggered on actions related to the lifecycle of the pool
    - E.g. Store price index for trade to track time-weighted-geometric-mean
- Singleton Contract
- Native ETH.
    - V3 required (un)wrapping of WETH<->ETH
    - Native ETH transfers ~50% cost.
- ERC1155 Accounting
  - Instead of: Convert ERC-1155 to ERC-20, store ERC-20 in Uniswap contract, retrieve ERC-20 tokens, convert back to ERC-1155
  - Just: store ERC-1155 in Uniswap contract, retrieve ERC-1155 tokens

## Hooks
 - Events: before/after Initialize, before/after ModifyPosition, before/after swap, before/after donate
 - Hooks must be chosen at pool creation time.
 - Fees are now managed by hooks
    - Allows for V3 styled static fees
    - Dynamically set fees
    - Hook contract can receive fees, and allocated arbitrarily by hooks code (e.g. to address, to swappers, to LPs )

## Singleton Contract
 - Allows for cheaper multi-hop swaps (don't need to swap between pools).
 - Initial estimate 99% reduction in pool cost creation
 
## Flash Accounting
  - Must net out tokens owed before end of usage (transient storage). Can be used inside & out of singleton
    - _"In v4, each operation updates an internal net balance, known as a delta, only making external transfers at the end of the lock."_
  - Reduce gas costs, especially for multiple swaps
  - [EIP-1153](https://eips.ethereum.org/EIPS/eip-1153) transient storage for flash accounting 
    - Internal accounting data is never serialised (all balances must be zero at end of transaction), users **would have to** pay those same costs once the storage refund cap is exceeded"_. EIP-1153 solves this cost.
 - 
