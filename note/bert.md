# BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
[link](https://arxiv.org/pdf/1810.04805.pdf)

## Overview
BERT introduces two new pre-training mechanism that provides an excellent base model for fine-tuning on down stream tasks. Importantly, for specific downstream tasks, only a finely-tuned output layer is required - the code bidirectional transformer learned in pre-training is kept. The two pre-training methods introduced are:
1. Masked language model: Input tokens are randomly masked and the transformers model is tasked to output the input sequence, learning the masked input tokens.
2. Nest sentence prediction: A binary classification task where the model is given an input sentence and must predict if the following sentence given is either a) the following sentence from the corpus, or b) a random sentence from the corpus.

## Architecture
Standard bidirectional transformer. Added segment embedding.

![](bert-input-tokenizer.png)
Three parts:
 1. Token Embedding
 2. Segment Embedding (important because so pretraining can handle the concept of segments in downstream tasks (e.g. Q+A))
 3. Position Embeddings, in the same fashion as [Attention is all you Need](https://jeadie.github.io/notes/attention-is-all-you-need#positional-encoding)
