---
title: "What Is Photolithography?"
slug: photolithography
description: "Photolithography is the process used to pattern microchips by projecting light through masks onto silicon wafers. Learn how it makes modern electronics."
category: everyday-concepts
tags: ["photolithography", "semiconductors", "microchips", "manufacturing", "silicon", "technology"]
heroImage: "/images/articles/photolithography.webp"
heroAlt: "A silicon wafer being processed inside a photolithography machine with ultraviolet light"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 4
wordCount: 1036
tier: "3"
relatedArticles: ["algorithms", "neural-networks", "physical-chemistry", "engineering"]
externalSources:
  - title: "ASML - How Microchips Are Made"
    url: "https://www.asml.com/en/technology/lithography-principles"
  - title: "IEEE - Lithography"
    url: "https://spectrum.ieee.org/"
  - title: "NIST - Semiconductor Manufacturing"
    url: "https://www.nist.gov/semiconductors"
faq:
  - q: "Why is photolithography important?"
    a: "Photolithography is the single most critical process in semiconductor manufacturing. Every transistor on every microchip — in your phone, computer, car, and appliances — was patterned using photolithography. Without it, modern electronics wouldn't exist. The ability to print smaller and smaller features through advances in photolithography has driven Moore's Law and the exponential growth of computing power over the past 60 years."
  - q: "What is EUV lithography?"
    a: "EUV (Extreme Ultraviolet) lithography uses light with a wavelength of 13.5 nanometers — far shorter than the 193nm wavelength used in previous-generation systems. Shorter wavelengths can print smaller features. EUV machines, made exclusively by the Dutch company ASML, cost over $200 million each and are required for manufacturing chips at 7nm and below. They are among the most complex machines ever built."
  - q: "How small can photolithography print?"
    a: "As of 2024, leading-edge photolithography can produce features as small as about 2-3 nanometers in chip manufacturing (using EUV with multiple patterning techniques). For perspective, a strand of human DNA is about 2.5 nanometers wide. The theoretical limits of optical lithography are being approached, and the industry is researching next-generation techniques including high-NA EUV and directed self-assembly."
---

# What Is Photolithography?

Photolithography is the manufacturing process that prints microscopic patterns onto silicon wafers to create the transistors and circuits inside computer chips. Think of it as an absurdly precise version of photography — instead of capturing an image of a field, you're projecting a circuit pattern onto a surface coated with light-sensitive material, then etching that pattern into silicon. Every microprocessor, memory chip, and sensor in every electronic device you own was made this way.

## Why It Matters

Here's a number to wrap your head around: a modern smartphone processor contains roughly 15 billion transistors. Each transistor is a tiny switch, a few nanometers across — smaller than a virus. Photolithography is what makes it physically possible to create billions of those switches on a chip the size of your fingernail.

Without photolithography, there are no computers, no smartphones, no internet infrastructure, no modern cars, no medical imaging equipment, no GPS. The entire digital world rests on the ability to print impossibly small patterns onto silicon — and photolithography is how we do it.

## The Basic Process

The core concept is straightforward even if the execution is staggeringly complex.

**Step 1: Coat the wafer.** A silicon wafer (a thin, polished disc of crystalline silicon, typically 300mm in diameter) is coated with a thin layer of photoresist — a light-sensitive polymer. Where light hits the photoresist, it changes chemically.

**Step 2: Expose.** Light is projected through a photomask (or reticle) — essentially a stencil of the circuit pattern — onto the photoresist. The mask blocks light in some areas and allows it through in others, creating a precise pattern of exposed and unexposed photoresist on the wafer. Modern systems don't project at 1:1 scale — they use reduction lenses that shrink the mask pattern by 4x, allowing even more precise features.

**Step 3: Develop.** The wafer is treated with a developing solution that dissolves either the exposed photoresist (positive resist) or the unexposed photoresist (negative resist), leaving behind a patterned template on the wafer surface.

**Step 4: Etch or deposit.** With the photoresist pattern in place, the exposed silicon beneath can be etched away (removing material) or new material can be deposited into the openings. The photoresist protects the areas you don't want changed.

**Step 5: Strip.** The remaining photoresist is removed, leaving the pattern permanently transferred into the silicon or deposited material.

**Step 6: Repeat.** A modern chip requires 60-100 of these photolithography cycles, each adding a new layer of circuitry. The layers must align with each other to within a few nanometers — over the entire wafer surface. The precision is mind-boggling.

## The Light Problem

Photolithography's fundamental challenge is resolution — how small a feature can you print? Resolution is governed by the wavelength of light. You can't reliably print features much smaller than the wavelength you're using, for the same reason you can't paint fine details with a thick brush.

Early photolithography used visible light (wavelengths around 400-700 nanometers). As chips needed smaller features, the industry moved to shorter wavelengths: mercury lamp g-line (436nm) in the 1980s, i-line (365nm) in the late 1980s, deep ultraviolet KrF (248nm) in the 1990s, and ArF (193nm) starting around 2000.

By the 2010s, the industry was stuck at 193nm and needed to print features below 20nm — more than 10 times smaller than the wavelength. Engineers achieved this through increasingly elaborate tricks: immersion lithography (placing water between the lens and wafer to effectively shorten the wavelength), multiple patterning (printing the pattern in multiple passes with offset masks), and computational lithography (using software to pre-distort the mask pattern so the printed result comes out correct).

These workarounds were brilliant but expensive and complex. Each new chip generation required more masks, more passes, and more processing time.

## EUV: The Game Changer

The solution the industry had been working toward since the 1990s finally arrived commercially around 2019: Extreme Ultraviolet (EUV) lithography, using light at 13.5nm wavelength — more than 14 times shorter than the ArF lasers it replaced.

EUV machines are among the most complex devices humans have ever built. The light source works by firing a powerful laser at tiny droplets of molten tin, generating a plasma that emits EUV light. Because EUV light is absorbed by virtually everything — including air and glass — the entire optical path must be in a vacuum, and mirrors coated with atomically precise multilayer films replace conventional lenses.

Each EUV machine weighs about 180 tons, contains over 100,000 parts, requires multiple 747-sized shipping containers to transport, and costs upward of $200 million. Only one company in the world — ASML, based in the Netherlands — makes them. ASML's monopoly on EUV technology gives the company (and the countries that host its supply chain) enormous geopolitical significance.

## The Numbers Are Absurd

The precision involved in modern photolithography defies intuition. Features are measured in nanometers — a human hair is about 80,000 nanometers wide. Overlay accuracy (how precisely layers align) is below 2nm. That's like printing a pattern across a football field where every feature is in the right place to within the width of a blade of grass.

A single leading-edge fabrication facility (fab) costs $15-20 billion to build. A single EUV mask set can cost $10-15 million. A single wafer passes through hundreds of processing steps over 2-3 months before the finished chips are cut apart and packaged.

## What Comes Next

The industry is already pushing EUV further. High-NA (Numerical Aperture) EUV systems, which ASML began shipping in 2024, use larger mirrors to improve resolution further — enabling features at 2nm and below. These machines cost roughly $380 million each.

Beyond that, researchers are exploring alternatives: directed self-assembly (letting molecules arrange themselves into patterns), nanoimprint lithography (physically stamping patterns), and even electron beam lithography for specialized applications. But for high-volume manufacturing, no technology has come close to displacing optical lithography.

For over 60 years, photolithography has been the workhorse behind Moore's Law — the observation that transistor density doubles roughly every two years. Every time experts predicted it would hit physical limits, engineers found ways around them. Whether that streak can continue is one of the most important technological questions of our time.
