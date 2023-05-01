# Open Domain Image Generation and Editing with Natural Language Guidance
> [Link](https://arxiv.org/pdf/2204.08583.pdf)
TODO: https://ljvmiranda921.github.io/notebook/2021/08/08/clip-vqgan/#training
## Key Part
- For image generation or editing, [CLIP](https://jeadie.github.io/notes/clip) can be used to do per-example fine tuning onto a GAN's latent space.
1. Start with text prompt and random noise
2. Random noise --[VQGAN encoder]-> latent representation --[VCGAN decoder] -> generate image
3. Use clip model to find loss of (generate image, text prompt)
4. Backpropagate loss into latent representation (I think this would require setting the
5. Minimise CLIP similarity, at threshold, use generated image of `latent representation --[VCGAN decoder] -> generate image` as generated image.

For image editing,