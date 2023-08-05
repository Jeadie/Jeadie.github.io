---
title: Deep Reinforcement Learning from Human Preferences
---
- [Paper](https://arxiv.org/pdf/1706.03741.pdf)

# Overview
 - Designing reward functions in RL is hard.
 - Human feedback (i.e. a human manually designating a reward for an action or state) is an intutive reward function (i.e. we may be able to recognise desirable behaviour without demonstrating or explaining it). Unfortunately this is excessively laborious for what is needed in RL.
 - Instead of training the RL system on human feedback, learn a reward function via human feedback.
   - Policy, pi $\pi : O \to A$
   - Reward function, $r : O \times A \to \mathbb{R}$

- Then, the RLHF algorithm is 
  1. Train policy pi via standard RL algorithm.
  2. From step 1, take segments (i.e. subtrajectories) of policy-action trajectories (i.e. ${(o_i, a_i)}_{i=1}^n)$ from the policy. Get comparisons (A comparator value -1, 0, 1) from a human for two segments, e.g. $(s_1, s_2, {-1, 0, 1})$. 
  3. Use data from 2. ${(s_{i1}, s_{i2}, {-1, 0, 1})}_{i=1}^k$ to optimise reward function $r$,  via supervised learning.

## Implementation

### Learning the Reward Function
- We _"assume that the human’s probability of preferring a segment σi depends exponentially on the value of the latent reward summed over the length of the clip."_ 
$$
\begin{align*}
P(s_1 > s_2) &\approx e^{\left(\sum_{t=1}^n r(o_{t1}, \, a_{t1})\right)} \\ 
P(s_1 > s_2) &= \frac{e^{\sum_{t=1}^n r(o_{t1}, a_{t1})}}{e^{\sum_{t=1}^n r(o_{t1}, a_{t1})} + e^{\sum_{t=1}^n r(o_{t2}, a_{t2})}}
\end{align*}
$$
- Then its a binary cross entropy between $P(s1 > s2)$ and our human preference labels.
  - Our distribution is bernoulli for +-1, but if we get $(s_1, s_2, {-1, 0, 1}) == (a, b, 0)$, then we set p=0.5.
- Practical improvements:
  - Use a bagging of classifiers $r : O \times  A -> \R$, Equal weighted sampling
  - L2 regularization to keep validation loss, per predictor (on 1/e of the data), between (1.1-1.5)*training loss
  - 10% random chance to softmax to soften error in reward function (errors in preferencing when loss -> 0).

### Selecting Segments for Human preferencing
 - Create many segments of length, k.
 - Select a subset based on those segments with largest reward variance across ensemble of reward predictors.

## Regularisation
 - We don't want the new language model to stray to far from the original model (i.e. before human preference). Add regularisation term proportional to KL divergence between original and updated LLM model.

