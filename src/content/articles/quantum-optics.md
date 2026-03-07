---
title: "What Is Quantum Optics?"
slug: quantum-optics
description: "Quantum optics studies light at the single-photon level, where quantum weirdness rules. It powers lasers, quantum computing, and teleportation experiments."
category: science
tags: ["quantum optics", "photons", "quantum mechanics", "lasers", "quantum information", "optics", "physics"]
heroImage: "/images/articles/quantum-optics-hero.webp"
heroAlt: "Editorial photograph representing the concept of quantum optics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2534
tier: "2"
relatedArticles: ["electromagnetism", "fiber-optics", "optical-engineering", "quantum-chemistry", "experimental-physics"]
externalSources:
  - title: "Nobel Prize in Physics 2022 - Quantum Entanglement Experiments"
    url: "https://www.nobelprize.org/prizes/physics/2022/summary/"
  - title: "NIST - Quantum Optics"
    url: "https://www.nist.gov/topics/quantum-optics"
  - title: "Max Planck Institute for Quantum Optics"
    url: "https://www.mpq.mpg.de/en"
  - title: "Optical Society - Quantum Optics"
    url: "https://www.optica.org/en-us/get_involved/technical_groups/quantum_optics/"
faq:
  - q: "What's the difference between regular optics and quantum optics?"
    a: "Classical optics treats light as electromagnetic waves and works perfectly for everyday phenomena like lenses, mirrors, and rainbows. Quantum optics treats light as individual photons with quantum properties like superposition and entanglement. Classical optics is accurate when dealing with large numbers of photons; quantum optics matters when you're working with single photons or need to exploit quantum correlations."
  - q: "Is quantum teleportation real?"
    a: "Yes, but it's not what science fiction depicts. Quantum teleportation transfers the quantum state of a particle (like a photon's polarization) to another particle at a distant location, destroying the original state in the process. It requires a classical communication channel and cannot transmit information faster than light. It has been experimentally demonstrated over distances exceeding 1,200 km using satellites."
  - q: "How are single photons generated?"
    a: "Several methods exist. Spontaneous parametric down-conversion splits one high-energy photon into two lower-energy entangled photons using a nonlinear crystal. Quantum dots (semiconductor nanostructures) emit single photons on demand when electrically triggered. Single atoms or ions in optical cavities emit photons one at a time. Each method has tradeoffs in purity, rate, and wavelength flexibility."
  - q: "What practical technologies use quantum optics?"
    a: "Lasers (the most impactful quantum optics technology), quantum key distribution for secure communication, quantum random number generators, gravitational wave detectors like LIGO (which uses squeezed light), atomic clocks, quantum computing with photonic qubits, and precision sensors for medical imaging and navigation. Quantum optics is one of the most practically productive areas of quantum physics."
---

# What Is Quantum Optics?

Quantum optics is the branch of physics that studies the quantum mechanical behavior of light and its interaction with matter at the level of individual photons. While classical optics describes light as electromagnetic waves -- and does so brilliantly for everyday purposes -- quantum optics reveals that light is fundamentally composed of discrete particles (photons) that exhibit quantum properties like superposition, entanglement, and uncertainty.

This isn't just an academic distinction. Quantum optics has produced some of the most practically important technologies in modern life (lasers, which underlie everything from fiber-optic internet to eye surgery), some of the most precise measurements ever achieved (gravitational wave detection at LIGO), and some of the most mind-bending experimental demonstrations in all of science (quantum teleportation across 1,200 km).

## The Origin Story: When Light Got Quantized

The quantum nature of light was the very first quantum discovery -- and it happened almost by accident.

### Planck's Reluctant Revolution (1900)

In December 1900, Max Planck was trying to explain the spectrum of light emitted by a hot object (blackbody radiation). Classical physics predicted that the intensity should increase without limit at short wavelengths -- the "ultraviolet catastrophe." Experiment showed the intensity actually peaked and then decreased.

Planck found he could match the experimental data perfectly if he assumed that energy was emitted and absorbed in discrete chunks, or "quanta," with energy E = hf (where h is Planck's constant and f is the frequency). He considered this a mathematical trick. He was wrong -- it was the beginning of quantum physics.

### Einstein's Photon (1905)

Einstein took Planck's idea seriously and proposed that light itself was quantized -- composed of individual particles he called "light quanta" (later named photons). He used this to explain the photoelectric effect: light shining on a metal ejects electrons, but only if the light frequency exceeds a threshold. Below that frequency, no electrons emerge, regardless of intensity.

Classical wave theory couldn't explain this. Einstein's photon picture explained it immediately: each photon carries energy hf, and an electron can only be ejected if a single photon has enough energy. More photons (higher intensity) means more electrons, but only if each photon has the minimum required energy.

Einstein won the Nobel Prize in 1921 for this work -- not for relativity.

### The Paradox of Light

So is light a wave or a particle? Both, and neither. This wave-particle duality sits at the heart of quantum optics. Light propagates as a wave (exhibiting interference, diffraction, and polarization) but interacts with matter as particles (the photoelectric effect, Compton scattering, single-photon detection).

The [electromagnetic field](/electromagnetism) is both a continuous field and a collection of discrete quanta. Quantum optics is the field that takes this duality seriously and works out its consequences.

## Coherent States and the Quantum Theory of Lasers

### What Makes a Laser Special?

A laser (Light Amplification by Stimulated Emission of Radiation) produces light that's fundamentally different from other sources. The light from a lightbulb consists of photons emitted randomly with random phases and directions. Laser light consists of photons in a coherent state -- all marching in lockstep with the same frequency, phase, and direction.

Roy Glauber developed the quantum theory of optical coherence in the 1960s, for which he won the Nobel Prize in 2005. He showed that laser light is described by "coherent states" -- quantum states that most closely resemble classical electromagnetic waves while still being fully quantum mechanical.

A coherent state has a well-defined average number of photons but quantum uncertainty in the exact number. If a laser beam has an average of 1,000 photons, the actual number fluctuates following a Poisson distribution -- sometimes 998, sometimes 1,003, rarely 950 or 1,050. These are "shot noise" fluctuations, and they're a fundamental quantum limit.

### Beyond Coherent Light: Squeezed States

Here's where quantum optics gets really clever. The uncertainty principle says you can't simultaneously know both the amplitude and phase of a light field with arbitrary precision. But it doesn't say you can't sacrifice precision in one to gain it in the other.

Squeezed states do exactly this. You "squeeze" the quantum uncertainty in one variable (say, amplitude) at the expense of increased uncertainty in the other (phase). The total uncertainty still satisfies the uncertainty principle, but you've concentrated the precision where you need it.

This isn't just theoretical cleverness. LIGO, the gravitational wave detector that made the first direct detection of gravitational waves in 2015, uses squeezed light to push its sensitivity beyond the standard quantum limit. By injecting squeezed vacuum states into the interferometer, LIGO increased its detection range by about 40% -- allowing it to observe gravitational wave events that would otherwise be undetectable. That's quantum optics directly enabling one of the greatest scientific achievements of the century.

## Single-Photon Physics: Where Quantum Gets Weird

The strangest results in quantum optics emerge when you work with individual photons. At this level, quantum weirdness is impossible to ignore.

### The Double-Slit Experiment with Single Photons

Send a single photon toward a screen with two slits. On the other side, detect where it arrives. Repeat with many individual photons, one at a time.

Classical particle prediction: two bright bands, one behind each slit.
Classical wave prediction: an interference pattern with many bright and dark bands.
What actually happens: an interference pattern builds up -- even though each photon passes through the slits individually.

Each single photon somehow "interferes with itself," as if it passed through both slits simultaneously. But if you add detectors to determine which slit the photon went through, the interference pattern disappears. The act of gaining which-path information destroys the quantum superposition.

This experiment, simple in concept and staggering in implications, has been performed thousands of times in quantum [optics](/optical-engineering) labs worldwide. The results are always the same. Photons exhibit wave behavior when unobserved and particle behavior when measured.

### Photon Antibunching: Proof That Photons Are Real

One of quantum optics' most important experimental achievements was demonstrating photon antibunching -- the fact that a single quantum emitter (like a single atom) emits photons one at a time, never two simultaneously.

Classically, light intensity fluctuations should sometimes produce "bunches" of photons arriving together. A single atom, however, must re-excite before emitting another photon, creating a minimum time gap between emissions. This was first observed by Kimble, Dagenais, and Mandel in 1977.

Photon antibunching has no classical explanation. It's direct proof that the electromagnetic field is quantized -- that photons are real, discrete particles, not just a mathematical convenience.

## Entanglement: Quantum Optics' Most Famous Product

Quantum entanglement was first clearly articulated in the EPR paradox paper by Einstein, Podolsky, and Rosen in 1935. But it was quantum optics that turned entanglement from a philosophical puzzle into an experimental tool.

### Creating Entangled Photons

The most common method is spontaneous parametric down-conversion (SPDC). A high-energy photon enters a special nonlinear crystal (like beta barium borate, or BBO) and spontaneously converts into two lower-energy photons. Conservation of energy and momentum ensures these "daughter" photons are correlated in wavelength, direction, and polarization.

The key quantum feature: the two photons can be entangled in polarization. Neither photon has a definite polarization until measured, but the two measurements are always correlated. If you measure one photon's polarization as vertical, the other will be horizontal (for type-I entanglement). This correlation holds regardless of the distance between the photons.

### Bell Tests: Ruling Out Classical Explanations

Could the correlations be explained classically -- maybe the photons had definite polarizations all along, and we just didn't know them? John Bell showed in 1964 that this "hidden variable" explanation makes different predictions from [quantum mechanics](/quantum-mechanics). Specifically, classical hidden variables obey Bell's inequality, while quantum mechanics violates it.

Starting with Alain Aspect's experiments in 1982 and continuing through increasingly sophisticated tests, quantum optics experiments have consistently violated Bell's inequality, ruling out classical explanations. The 2022 Nobel Prize in Physics went to Alain Aspect, John Clauser, and Anton Zeilinger for exactly these experiments.

These tests closed progressively more loopholes: the detection loophole (what if only correlated photons are detected?), the locality loophole (what if the measurement settings are communicated faster than light?), and the freedom-of-choice loophole (what if the measurement settings aren't truly random?). By 2015, all major loopholes were closed in a single experiment. The conclusion is strong: quantum entanglement is real, and no local classical theory can explain it.

## Quantum Teleportation

Quantum teleportation, first proposed by Bennett and colleagues in 1993 and first demonstrated by Zeilinger's group in 1997, uses entanglement to transfer a quantum state from one location to another.

### How It Works

Alice wants to send the quantum state of a photon (say, its polarization) to Bob. They share a pair of entangled photons.

1. Alice performs a joint measurement (Bell measurement) on her photon-to-be-teleported and her half of the entangled pair.
2. This measurement gives one of four possible results, which Alice sends to Bob over a classical channel (phone, internet -- nothing quantum).
3. Based on Alice's message, Bob applies one of four simple operations to his half of the entangled pair.
4. Bob's photon now has the exact quantum state that Alice's original photon had. The original is destroyed (as required by the no-cloning theorem).

This is genuine teleportation of a quantum state, not science fiction teleportation of matter. It's been demonstrated over distances exceeding 1,200 km (using China's Micius satellite) and is a key building block for quantum networks and distributed [quantum computing](/quantum-computing).

### Why It Doesn't Enable Faster-Than-Light Communication

Despite using "instantaneous" entanglement correlations, quantum teleportation cannot transmit information faster than light. Bob's photon is in a completely random state until he receives Alice's classical message, which travels at light speed. Without that message, he can't reconstruct the original state. The classical channel is essential, and it's limited by the speed of light.

## Cavity [Quantum Electrodynamics](/quantum-electrodynamics)

Cavity QED studies the interaction between light and atoms inside optical cavities -- tiny resonant chambers that confine photons. When a single atom is placed in a very high-quality cavity, the coupling between atom and cavity photon can become so strong that they form a hybrid quantum system.

### Strong Coupling: When One Photon Matters

In the strong coupling regime, a single photon bouncing back and forth in the cavity interacts with the atom so intensely that they exchange energy back and forth coherently -- a process called vacuum Rabi oscillation. The atom absorbs the photon, re-emits it, absorbs it again, and so on, before either the photon escapes the cavity or the atom decays.

Serge Haroche (Nobel Prize 2012) demonstrated exquisite control of single photons in microwave cavities, performing "quantum non-demolition" measurements that observed photons without destroying them. His group could count the exact number of photons in a cavity and watch them disappear one by one.

Cavity QED has become a platform for testing fundamental quantum mechanics and for building quantum information processing devices.

## Applications: Where Quantum Optics Meets the Real World

### Quantum Key Distribution

Quantum optics provides the hardware for quantum [cryptography](/cryptography). Single-photon sources, entangled photon pairs, and single-photon detectors are all quantum optics technologies. Every QKD system -- from commercial bank security to satellite-based networks -- is built on quantum optics.

### Quantum Computing with Photons

Several approaches to quantum computing use photons as qubits. Photonic qubits have advantages: they don't need cooling, they travel at the speed of light (useful for communication), and they're relatively strong against decoherence. Companies like PsiQuantum and Xanadu are building photonic quantum computers using quantum optics techniques.

The challenge is making photons interact with each other. Photons don't naturally interact (unlike electrons), so creating the two-qubit gates necessary for universal quantum computation requires either nonlinear optics (using special materials), measurement-based schemes, or hybrid approaches.

### Gravitational Wave Detection

LIGO's interferometers are essentially quantum optics experiments on a 4-km scale. They measure distance changes of 10^-19 meters -- one ten-thousandth the diameter of a proton -- by detecting phase shifts in laser light. Squeezed light injection, quantum noise analysis, and single-photon-level sensitivity are all quantum optics contributions to this technology.

### Precision Measurement and Sensing

Quantum optics enables measurements at or below the standard quantum limit:

**Atomic clocks** use quantum optics techniques (laser cooling, optical frequency combs) to achieve time measurement accuracy of 1 second in 30 billion years.

**Quantum sensors** measure magnetic fields, gravity gradients, and accelerations with sensitivity far beyond classical instruments. Applications include medical brain imaging (magnetoencephalography), underground mineral detection in [geology](/geology), and inertial navigation for submarines.

**Optical frequency combs** (Nobel Prize 2005, awarded to John Hall and Theodor Hansch) produce a "ruler" of evenly spaced optical frequencies that enables precision measurement of light frequencies. They're essential for optical atomic clocks, spectroscopy, and telecommunications.

### Quantum Imaging

Quantum optics enables imaging techniques impossible with classical light:

**Ghost imaging** creates an image using photons that never interacted with the object. You send one photon from an entangled pair toward an object and its partner toward a camera. Correlating the two detectors produces an image, even though the camera photon never "saw" the object.

**Quantum illumination** uses entangled photons to detect objects in noisy environments (like radar in heavy jamming). Even when entanglement is destroyed by noise, residual quantum correlations provide a detection advantage over classical light.

## The Frontier: What's Next in Quantum Optics

The field is moving fast in several directions:

**Quantum networks.** Connecting quantum systems over long distances using photons. This requires quantum memories (devices that store quantum states of light), quantum repeaters (that extend entanglement over long distances), and efficient photon-matter interfaces.

**Integrated quantum photonics.** Shrinking quantum optics experiments from laboratory-filling setups to silicon chips. This is essential for practical quantum [computing](/computer-science) and communication systems. Companies and labs are fabricating waveguides, beam splitters, phase shifters, and single-photon detectors on chips smaller than a thumbnail.

**Topological photonics.** Using topological principles (borrowed from condensed matter physics) to create photonic systems where light flows are protected against disorder and defects. This could lead to more strong photonic devices.

**Non-Gaussian quantum states.** Most quantum optics works with Gaussian states (coherent states, squeezed states). Non-Gaussian states -- like photon-subtracted states or "Schrodinger cat" states of light -- are necessary for universal quantum computation and are an active research frontier.

## Key Takeaways

Quantum optics is the science of light at the quantum level -- individual photons, their quantum states, and their interactions with matter. It began with Planck and Einstein's discovery that light is quantized and has evolved into one of the most productive branches of modern physics.

The field has produced technologies that pervade modern life (lasers, [fiber-optic](/fiber-optics) communications) and enabled some of the most precise measurements ever achieved (gravitational wave detection, atomic clocks). It's the experimental foundation for quantum information science, providing the tools for [quantum cryptography](/quantum-cryptography), photonic quantum computing, and quantum teleportation.

Perhaps most importantly, quantum optics has provided the clearest experimental demonstrations of quantum mechanics' strangest features: wave-particle duality, entanglement, and the measurement problem. Through increasingly precise and ingenious experiments, quantum opticians have shown that the quantum description of light isn't just mathematically convenient -- it's how the universe actually works. And from that understanding, an entire technological revolution is emerging.
