---
title: "What Is a Large Language Model?"
slug: large-language-model
description: "A large language model (LLM) is a neural network trained on huge text data to predict and generate language. How LLMs work, what they can do, and limits."
category: technology
tags: ["large language model", "llm", "ai", "machine learning", "deep learning", "transformer", "technology"]
heroImage: "/images/articles/large-language-model-hero.webp"
heroAlt: "A large language model is a neural network trained on massive text data to predict and generate human language"
author: "WhatIs Editorial"
datePublished: "2026-05-13"
dateModified: "2026-05-13"
readingTime: 8
wordCount: 1850
tier: "3"
relatedArticles: ["artificial-intelligence", "machine-learning", "deep-learning", "neural-networks", "generative-ai"]
externalSources:
  - title: "Attention Is All You Need (original transformer paper)"
    url: "https://arxiv.org/abs/1706.03762"
  - title: "Stanford HAI — AI Index Report 2025"
    url: "https://aiindex.stanford.edu/report/"
  - title: "Language Models are Few-Shot Learners (GPT-3 paper)"
    url: "https://arxiv.org/abs/2005.14165"
faq:
  - q: "What is a large language model in simple terms?"
    a: "A large language model is a neural network with hundreds of millions to hundreds of billions of parameters, trained on huge amounts of text to predict the next word given the words before. By repeatedly predicting and sampling, it can generate paragraphs, answer questions, write code, and translate."
  - q: "What does LLM stand for?"
    a: "LLM stands for Large Language Model. 'Large' refers to the number of parameters (the tunable weights inside the neural network), which has grown from millions in early models to hundreds of billions in current frontier models."
  - q: "How is an LLM different from earlier AI chatbots?"
    a: "Older chatbots used hand-written rules or shallow statistical methods that couldn't handle conversation outside narrow scripts. LLMs use deep neural networks trained on essentially all the writing on the internet, giving them broad world knowledge and the ability to handle open-ended conversation."
  - q: "What are examples of large language models?"
    a: "GPT-4 and GPT-4o (OpenAI), Claude 3.5 and Claude 4 (Anthropic), Gemini (Google), Llama 3 (Meta), Mistral, DeepSeek-V3, and Qwen are all current LLMs. Each is a transformer-based neural network trained on text and fine-tuned for conversation."
  - q: "Are LLMs intelligent?"
    a: "It depends on your definition. LLMs can produce text that reads as intelligent on a wide range of tasks and they often match or exceed average human performance on standardized tests. But they lack persistent memory, embodied experience, and reliable reasoning under shifts away from their training distribution. Most researchers classify them as 'narrow' AI."
---

# What Is a Large Language Model?

A large language model (LLM) is a [neural network](/neural-networks) — typically built on the transformer architecture — trained on massive amounts of text to predict the next word (or "token") given the words before. From that one simple training objective, modern LLMs learn to write coherent essays, answer factual questions, translate languages, summarize documents, and generate working code.

Current frontier LLMs — GPT-4o, Claude 3.5 and 4, Gemini, Llama 3, Mistral, DeepSeek — are the engine behind every chatbot, AI writing tool, and code assistant you've encountered since late 2022. For the current numbers on adoption and capability, see our [AI Statistics 2026](/artificial-intelligence-statistics-2026) roundup. The technology is one specific subtype of [generative AI](/generative-ai), focused on text rather than images, audio, or video.

## Why "Large"

The "large" in LLM refers to the **number of parameters** in the model — the tunable weights inside the neural network that the training process adjusts. Parameters store everything the model has learned. More parameters generally means more capacity to capture patterns in the training data.

Scale history, roughly:

| Year | Model | Approximate parameters |
|------|-------|------------------------|
| 2018 | BERT (base) | ~110 million |
| 2019 | GPT-2 | 1.5 billion |
| 2020 | GPT-3 | 175 billion |
| 2022 | PaLM | 540 billion |
| 2023 | GPT-4 (estimated) | ~1.7 trillion (mixture-of-experts) |
| 2024–2026 | Frontier models | Many use mixture-of-experts; reported and effective parameter counts diverge |

The "more parameters = better" trend has slowed since around 2023. Frontier labs are now investing as much in training data quality, architecture refinements, and reinforcement learning from human feedback as in raw parameter count.

## How an LLM Is Trained

The training process for a modern LLM has three main phases:

### Phase 1: Pretraining

Take a transformer neural network with the desired number of parameters. Feed it a massive corpus of text — typically hundreds of billions to tens of trillions of tokens covering essentially all the readable English (and increasingly multilingual) content on the indexable web, plus books, academic papers, and code.

Train the network on a self-supervised objective: given a sequence of tokens, predict the next one. Calculate the error, backpropagate, adjust weights, repeat for weeks or months on thousands of GPUs.

By the end of pretraining, the model can complete text in ways that look fluent but doesn't yet follow instructions well. Ask GPT-3 base model a question and you might get more questions back, because question-answering wasn't yet a salient pattern.

### Phase 2: Instruction tuning (supervised fine-tuning)

Take the pretrained model and continue training it on a smaller, curated dataset of instruction-following examples — "user asks X, ideal response is Y." This teaches the model to behave like an assistant.

### Phase 3: RLHF (reinforcement learning from human feedback)

Human raters compare multiple model outputs and rank them. A separate "reward model" is trained to predict human preferences. The main LLM is then fine-tuned using reinforcement learning to maximize the predicted human preference score.

This is the phase that produces the polished, helpful, refusal-when-appropriate behavior of ChatGPT and Claude. The base model is intelligent. The RLHF tuning makes it useful.

## The Transformer Architecture

Modern LLMs are built on transformers, introduced in the 2017 paper "Attention Is All You Need." The defining innovation is the **attention mechanism**, which lets the model weigh the importance of different earlier tokens when predicting the next one — without the sequential bottleneck that plagued earlier RNN-based language models.

The simplified picture:

- The input text is broken into tokens (rough chunks of text, typically 3–4 characters each)
- Each token is mapped to a vector (numerical representation)
- The vectors flow through stacked "transformer blocks," each containing a self-attention layer (lets every token see every other token) and a feed-forward layer
- After all the blocks, the model outputs a probability distribution over the vocabulary for the next token
- Sample a token from that distribution, append it to the input, repeat

Transformers parallelize well on GPUs, which is the main reason they scaled. RNN-based predecessors hit ceilings well below 1 billion parameters because training was inherently sequential.

## What LLMs Can Do

Three years after ChatGPT, the capability picture is clear and well-mapped:

- **Drafting and editing** — emails, blog posts, marketing copy, code comments, fiction. Quality varies but the "70% draft fast" pattern is reliable.
- **Summarization** — turning long documents into shorter ones, fairly reliably for well-structured input.
- **Question answering** — at human-expert level on many topics, but with caveats about hallucination.
- **Translation** — between major languages at near-professional quality; less reliable for low-resource languages.
- **Code generation and review** — completing functions, refactoring, writing tests, explaining unfamiliar code.
- **Tutoring and explanation** — restating concepts in different ways, generating practice problems, answering follow-up questions.
- **Conversational interfaces** — replacing or augmenting traditional search and helpdesk experiences.
- **Reasoning at modest scale** — chain-of-thought prompting and "reasoning models" like OpenAI's o-series and Anthropic's extended-thinking modes have substantially improved performance on math, logic, and multi-step problems.

## What LLMs Still Can't Do Reliably

- **Hallucinate factual errors confidently.** Especially on niche topics, the model produces plausible-sounding but false output, with no internal signal that it's making things up.
- **Long-horizon planning.** Multi-step tasks where each step depends on the last tend to drift or lose track.
- **Genuinely novel reasoning.** LLMs are extremely good at recombining patterns from training; less good at producing ideas that aren't anchored in something they've seen before.
- **Arithmetic and logical rigor** without tool use. They make calculation errors a calculator would not. Modern systems compensate by calling out to actual code interpreters and math libraries.
- **Persistent memory.** Within a single conversation, LLMs only know what's in the context window. Once the conversation ends, they retain nothing. Various "memory" features in products are bolt-on engineering, not native model capabilities.
- **Embodied or sensorimotor tasks.** LLMs have never touched a physical object.

## Context Windows and Inference

The **context window** is how many tokens of input an LLM can consider at once. As of 2026:

- Most production LLMs support 100,000–200,000-token context windows (roughly 75,000 to 150,000 words)
- Gemini 1.5 and 2 support up to 1–2 million tokens
- Claude has a 200,000-token standard context window and 1-million-token tier for some customers

Bigger context lets you feed the model entire books or codebases. But long-context performance often degrades — the model is technically able to read 200,000 tokens but doesn't always *use* the middle of long inputs as well as the start and end.

**Inference** — running the trained model to generate a response — has gotten roughly 280× cheaper per million tokens between late 2022 and late 2024 (Stanford AI Index). That price collapse is the single biggest reason LLMs went from a research demo to embedded in office software in three years.

## The Open vs. Closed Model Split

A major story of 2024–2026 is the rise of open-weight models:

- **Closed frontier models** — GPT-4o, Claude 3.5/4, Gemini. Best raw quality, accessed only through APIs.
- **Open-weight frontier models** — Llama 3.1/3.2/3.3 (Meta), DeepSeek-V3, Qwen 2.5, Mistral Large. Weights are released; anyone can run them locally or on their own infrastructure.

The gap between open and closed has been narrowing steadily. On many benchmarks, the best open-weight models are within a few percentage points of the best closed models — and they cost dramatically less to run.

## How LLMs Are Used Today

The deployment patterns that have emerged:

1. **API-driven embedding** — software products call out to OpenAI, Anthropic, or Google APIs to add chat, draft, or summarization features.
2. **Direct consumer products** — ChatGPT, Claude, Gemini, Copilot as standalone chat interfaces.
3. **Code assistance** — Cursor, GitHub Copilot, Claude Code. Some of the most concrete productivity impact.
4. **Customer service** — first-line support agents handling tier-1 issues before escalating to humans.
5. **Search and knowledge** — Perplexity, Google AI Overviews, You.com — search interfaces that synthesize answers rather than returning links.
6. **Agents** — early-stage systems that string together LLM calls and tool use to complete multi-step tasks. The reliability frontier of 2026.

## Related explainers

- [What Is Artificial Intelligence?](/artificial-intelligence) — the broader field
- [What Is Generative AI?](/generative-ai) — the category LLMs belong to
- [What Is Machine Learning?](/machine-learning) — the technique LLMs grew out of
- [What Is Deep Learning?](/deep-learning) — the technique LLMs are built on
- [What Are Neural Networks?](/neural-networks) — the building blocks of LLMs
- [AI Statistics 2026](/artificial-intelligence-statistics-2026) — current capability, cost, and adoption data
