---
title: "What Is Information Theory?"
slug: information-theory
description: "Information theory is the math behind data compression and transmission. Learn about entropy, Shannon's theorems, and how they enable modern technology."
category: everyday-concepts
tags: ["information theory", "mathematics", "data", "entropy", "Claude Shannon"]
heroImage: "/images/articles/information-theory.webp"
heroAlt: "Binary code streaming through fiber optic cables representing data transmission"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 2
wordCount: 625
tier: "3"
relatedArticles: ["algorithms", "cryptography", "data-structures", "deep-learning"]
externalSources:
  - title: "A Mathematical Theory of Communication – Bell Labs"
    url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf"
  - title: "Information Theory – Stanford Encyclopedia of Philosophy"
    url: "https://plato.stanford.edu/entries/information/"
  - title: "IEEE Information Theory Society"
    url: "https://www.itsoc.org/"
faq:
  - q: "What is entropy in information theory?"
    a: "Entropy measures the average information or surprise in a message. A coin flip has maximum entropy (1 bit) because the outcome is completely uncertain. A loaded coin that lands heads 99% of the time has low entropy because the outcome is predictable. Entropy defines the theoretical minimum number of bits needed to encode a message."
  - q: "Who invented information theory?"
    a: "Claude Shannon, a mathematician at Bell Labs, published 'A Mathematical Theory of Communication' in 1948. This paper founded the entire field, defining information mathematically and proving fundamental limits on data compression and transmission. It is considered one of the most important scientific papers of the 20th century."
  - q: "How does information theory affect everyday life?"
    a: "Every digital technology depends on it. Cell phones, Wi-Fi, streaming video, file compression (ZIP, MP3, JPEG), error correction in hard drives, QR codes, and internet protocols all rely on principles Shannon established in 1948. Without information theory, the digital age would not exist."
---

# What Is Information Theory?

Information theory is the mathematical framework for quantifying, storing, and communicating information. Founded by Claude Shannon in a single 1948 paper, it answers fundamental questions: How much can data be compressed? How fast can data be transmitted over a noisy channel? What are the absolute physical limits of communication?

## Shannon's Insight

Before Shannon, "information" was vague. Shannon made it precise by defining information in terms of uncertainty. The more uncertain you are about a message before receiving it, the more information it contains.

A coin flip carries exactly one **bit** of information — one binary decision with equal probability. A roll of a six-sided die carries about 2.58 bits. A letter from the English alphabet (accounting for frequency differences) carries about 4.7 bits on average.

The key measure is **entropy** — the average information content per symbol. High entropy means high uncertainty and high information content. Low entropy means predictability — and predictable content can be compressed.

This is why ZIP files work. English text has redundancy — patterns, common letters, predictable sequences. Shannon calculated that English has an entropy of about 1 to 1.5 bits per character versus a theoretical maximum of about 4.7 bits. Compression algorithms exploit that gap.

## The Two Big Theorems

**Source Coding Theorem** (compression): you can compress data down to its entropy rate but no further without losing information. This sets hard limits on lossless compression. It also proves that optimal compression exists, even if finding it is computationally difficult.

**Channel Coding Theorem** (transmission): every communication channel has a maximum reliable data rate called **channel capacity**. Below this rate, error-free communication is possible with clever encoding. Above it, errors are unavoidable.

Shannon's capacity formula for a Gaussian channel: C = B log2(1 + S/N). C is capacity in bits per second, B is bandwidth in hertz, S/N is signal-to-noise ratio. This explains why Wi-Fi slows when devices share bandwidth, why rural cell service is poor, and why fiber optic is fast.

## Applications Everywhere

**Data compression.** MP3, JPEG, H.264, and ZIP all use information-theoretic principles. Lossy compression discards information your senses are less sensitive to. Lossless compression exploits redundancy without losing anything.

**Error correction.** Hard drives, internet transmissions, QR codes, and DVDs include redundant bits that detect and correct errors. Reed-Solomon codes, turbo codes, and LDPC codes ensure your data survives noise and damage.

**Cryptography.** Shannon proved that perfectly secure encryption requires a key as long as the message (the one-time pad). Modern cryptography seeks practical approximations of this theoretical ideal.

**Machine learning.** Cross-entropy loss — the standard training objective for neural networks — comes directly from information theory. Mutual information and KL divergence are used throughout AI research.

**Telecommunications.** Each wireless generation (2G through 5G) has pushed closer to Shannon's capacity limit. 5G operates within a few percent of the theoretical maximum — meaning future gains require more bandwidth, not cleverer encoding.

## Claude Shannon

Shannon (1916-2001) was extraordinary beyond his scientific work. He built a rocket-powered frisbee, a maze-solving mechanical mouse (one of the first machine learning demonstrations, in 1950), and could juggle while riding a unicycle through Bell Labs.

His approach was playful but rigorous. He said the most important quality in a mathematician was "a constructive dissatisfaction with existing solutions." He formalized problems nobody else thought to ask and produced solutions so elegant they seemed obvious afterward.

## The Deepest Lesson

Information theory reveals that communication has hard physical limits. You cannot transmit data faster than the channel allows. You cannot compress below entropy. These are mathematical certainties, as firm as thermodynamic laws. Knowing the limits lets engineers design systems that approach them efficiently — which is exactly what every phone call, video stream, and text message depends on.
