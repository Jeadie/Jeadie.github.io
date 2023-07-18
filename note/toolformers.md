---
title: Toolformer:= Language Models Can Teach Themselves to Use Tools
---

- [link](https://arxiv.org/pdf/2302.04761.pdf)
- [Pytorch implementation](https://github.com/lucidrains/toolformer-pytorch)

# Overview
 - Teach LLMs to use external tools. 
   - When to call them, which to call, What to call with, how to interpret/integrate the results.
 - Avoid human annotation of tool use by creating self-labelled dataset. Use LM itself to annotate original dataset.
 - Few-shot self-supervised learning for each marginal tool.
    ```
    Prompt: Your task is to add calls to a Question Answering API to a piece of text. The questions should help you get information required to complete the text. You can call the API by writing "[QA(question)]" where "question" is the question you want to ask. Here are some examples of API calls:
        Input: Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company.
        Output: Coca-Cola, or [QA("What other name is Coca-Cola known by?")] Coke, is a carbonated soft drink manufactured by [QA("who manufactures Coca-Cola")] the Coca-Cola Company
    ```
 - Tool-use dataset can be built from the original LLM model dataset. Avoids hurting the models performance on underlying task.
   - _"Implementation idea: One could use a better/larger model to create the self-supervised dataset. For example a large foundation model (e.g. GPT4) to create the dataset, then train a toolformer on this dataset, but with an open-source model."_
  - 

# Implementation
- Create dataset C* from C
  1. In-context learning of our original LLM M, to smaple large number of possible API calls
  2. Call APIs with given input
  3. See which result from API provides best predictive value to LLM.
- We can then finetune our LLM M, on the new dataset C*, creating M*
- At inference, when M* produces a '->' token, we then call given API with provided input and insert in sequence. 