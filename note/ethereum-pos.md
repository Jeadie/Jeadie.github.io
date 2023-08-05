---
title: Ethereum Proof-of-stake
---

## Overview
- Have a set of validators, who have staked >= 32 ETH into a deposit contract. 
- On a fixed schedule (12s slots, 32 slots in an epoch), a validator collections transactions and proposes a block. 
  - This is the _"beacon block"_ that contains a proposed ETH block, plus information about: rewards, penalties, slashings, attestations etc.
- Randomly, a set of validators are chosen to verify/validate the results of the proposed block.
  - Validators _"attest"_ that the block is both 1. valid, 2. the logical next block/state of the chain (i.e. resolve forks ).
- Transactions are confirmed when:
  - Two checkpoints, start of each epoch
  - _"Supermajority link"_ between two checkpoints, i.e. both checkpoints must have attestations from >2/3 of staked ETH.
- Various details (i.e. who are validators, proposed blocks, withdrawal accounts, etc) are stored on chain. 

## Staking Economics
 - Validators get ETH for honestly proposing and validating blocks.
 - 32 ETH are collatoral for dishonest behaviour (and are _"slashed"_, or lose some fraction of their staked ETH, accordingly). Namely
    - Equivocating: Propose >1 block per slot
    - Contradictory attestations: I.e. beacon block is valid, but attesting to it being invalid.
- Badly behaving validators will be slashed, and eventually removed from the network after 36 days. 
  - On day 18, they receive a dynamic penality, a  _"correlation penalty"_, depending on how correlated their slasheable activities correlated with the slashing volume on the network. 
- The economic incentives of staked ethereum attempt to make attacks expensive.


## Details
### Forks
 - POS can still have forks. For example, from standard distributed systems unreliability (e.g. network delays), or equivocating.
 - Fork resolution via [LMD GHOST](https://arxiv.org/pdf/2003.03052.pdf), essentially looking for fork with greatest historical attestations. 
   - Interestingly, this means attempts at 51% attacks may be costly, but can still win. Honest minority validators could split off and try to attract back apps/exchanges/etc. With support, they could then, again, make the 51% attackers lose their staked ETH.