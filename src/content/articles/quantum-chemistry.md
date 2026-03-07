---
title: "What Is Quantum Chemistry?"
slug: quantum-chemistry
description: "Quantum chemistry applies quantum mechanics to chemical systems, explaining molecular bonds, reactions, and properties through math and computation."
category: science
tags: ["quantum chemistry", "quantum mechanics", "chemistry", "molecular orbitals", "computational chemistry", "electronic structure"]
heroImage: "/images/articles/quantum-chemistry-hero.webp"
heroAlt: "Editorial photograph representing the concept of quantum chemistry"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2681
tier: "2"
relatedArticles: ["chemistry", "computational-physics", "physics", "mathematics", "biochemistry"]
externalSources:
  - title: "NIST Computational Chemistry Comparison"
    url: "https://www.nist.gov/programs-projects/computational-chemistry-comparison-and-benchmark-database"
  - title: "Nobel Prize in Chemistry 1998 - Quantum Chemistry"
    url: "https://www.nobelprize.org/prizes/chemistry/1998/summary/"
  - title: "American Chemical Society - Quantum Chemistry"
    url: "https://www.acs.org/education/resources/undergraduate/quantum-chemistry.html"
  - title: "LibreTexts - Quantum Chemistry"
    url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Quantum_Chemistry"
faq:
  - q: "How is quantum chemistry different from regular chemistry?"
    a: "Regular chemistry often treats atoms and bonds using simplified models and empirical rules. Quantum chemistry goes deeper by applying the mathematical framework of quantum mechanics to calculate exactly how electrons behave in molecules, giving precise predictions of molecular properties from first principles."
  - q: "Do you need to be a math genius to understand quantum chemistry?"
    a: "You need comfort with calculus, linear algebra, and differential equations. The math is demanding, but modern computational tools handle the heaviest calculations. Understanding the concepts behind the equations matters more than solving them by hand."
  - q: "What software do quantum chemists use?"
    a: "Popular quantum chemistry software packages include Gaussian, ORCA, VASP, Q-Chem, and Psi4. Many are available to academic researchers, and some like ORCA and Psi4 are free for academic use. These programs solve quantum mechanical equations for molecular systems."
  - q: "Can quantum chemistry predict new drugs?"
    a: "Yes. Quantum chemistry calculations can predict how drug molecules interact with biological targets, estimate binding energies, and screen millions of candidate molecules computationally before any lab work begins. This saves enormous time and money in pharmaceutical research."
  - q: "What is the difference between quantum chemistry and computational chemistry?"
    a: "Quantum chemistry is the theoretical framework that uses quantum mechanics to describe chemical systems. Computational chemistry is the broader field of using computers to solve chemical problems, which includes quantum chemistry methods but also classical simulations, molecular dynamics, and statistical approaches."
---

# What Is Quantum Chemistry?

Quantum chemistry is the branch of chemistry that applies quantum mechanics — the physics of the very small — to understand how atoms bond, how molecules behave, and why chemical reactions happen the way they do. It replaces the ball-and-stick models from your intro [chemistry](/chemistry) class with precise mathematical descriptions of where electrons actually are (or, more accurately, where they probably are).

## Why Chemistry Needed Quantum Mechanics

Here's the problem classical physics ran into: it couldn't explain the most basic chemical facts. Why does hydrogen form H2 but helium doesn't bond at all? Why do carbon atoms form exactly four bonds? Why does iron absorb certain colors of light? Classical models — treating electrons as tiny billiard balls orbiting a nucleus — gave wrong answers or no answers at all.

The breakthrough came in the 1920s and 1930s. When Erwin Schrodinger published his wave equation in 1926, physicists suddenly had a mathematical tool that could describe electron behavior with stunning accuracy. But applying it to chemistry? That was a different beast entirely.

Walter Heitler and Fritz London made the first real attempt in 1927, using quantum mechanics to explain why two hydrogen atoms form a bond. Their calculation showed that when two hydrogen atoms approach each other, their electron wavefunctions overlap, creating a lower energy state — a bond. It was the first time anyone had explained a chemical bond from first principles rather than just observing that it exists.

Linus Pauling and others ran with this idea throughout the 1930s. Pauling's 1939 book "The Nature of the Chemical Bond" essentially founded quantum chemistry as a discipline, and it's still cited today. He won the Nobel Prize for this work in 1954.

## The Schrodinger Equation: The Heart of Everything

Every calculation in quantum chemistry starts with the Schrodinger equation. In its time-independent form, it looks deceptively simple:

**H psi = E psi**

Where H is the Hamiltonian operator (describing total energy), psi is the wavefunction (describing the quantum state), and E is the energy. Solve for psi, and you know essentially everything about your molecular system — bond lengths, bond angles, reaction energies, spectral properties, you name it.

The catch? For anything beyond a hydrogen atom, you can't solve this equation exactly. A helium atom has two electrons, and their mutual repulsion creates a "three-body problem" with no closed-form solution. A molecule like caffeine has 96 electrons. The exact solution is mathematically impossible.

So quantum chemists spend their careers developing clever approximations. And frankly, those approximations are where the real intellectual action is.

## The Born-Oppenheimer Approximation: A Critical Shortcut

The first and most important simplification is the Born-Oppenheimer approximation, introduced in 1927. The idea is straightforward: protons and neutrons are roughly 1,836 times heavier than electrons. Because of this mass difference, nuclei move much more slowly than electrons. So you can separate the problem — fix the nuclei in place, solve for the electrons, then let the nuclei adjust.

This sounds like a minor technical trick, but it's absolutely essential. Without it, you'd need to solve for the coupled motion of every electron and every nucleus simultaneously. With it, you solve a purely electronic problem at fixed nuclear positions, then map out how the energy changes as you move the nuclei around. That energy map is called a "potential energy surface," and it tells you everything about molecular geometry and reaction pathways.

The approximation works remarkably well for most [chemistry](/chemistry). It breaks down in special cases — certain photochemical reactions, for instance, where electronic and nuclear motions are strongly coupled. But for ground-state chemistry, it's the foundation everything else builds on.

## Molecular Orbital Theory: Where Electrons Live

One of quantum chemistry's greatest contributions is molecular orbital (MO) theory. Instead of thinking of electrons as belonging to individual atoms (the Lewis dot structure approach), MO theory describes electrons as occupying orbitals that extend over the entire molecule.

### Atomic Orbitals as Building Blocks

It starts with atomic orbitals — the s, p, d, and f orbitals you might remember from general chemistry. These are solutions to the Schrodinger equation for a single atom. Each orbital has a specific shape, energy, and capacity for electrons.

### LCAO: Combining Atomic Orbitals

The most common approach to building molecular orbitals is Linear Combination of Atomic Orbitals (LCAO). You take the atomic orbitals of each atom in the molecule and combine them mathematically. When atomic orbitals combine constructively (wavefunctions add up), you get a bonding orbital — lower energy, more electron density between nuclei. When they combine destructively (wavefunctions cancel), you get an antibonding orbital — higher energy, a node between nuclei.

The number of molecular orbitals always equals the number of atomic orbitals you started with. Fill them with electrons from lowest energy to highest, and you've described the electronic structure of your molecule.

### Why This Matters

MO theory explains things that simpler models can't. Take oxygen, O2. Lewis structures predict it should have all paired electrons and be diamagnetic. But experimentally, oxygen is paramagnetic — it has two unpaired electrons. MO theory correctly predicts this because when you fill the molecular orbital diagram for O2, the highest occupied orbitals are degenerate (same energy), and by Hund's rule, the last two electrons go into separate orbitals with parallel spins.

That's a detail that matters enormously. Liquid oxygen is attracted to magnets — a fact that only MO theory among simple bonding models can explain.

## Hartree-Fock: The Workhorse Method

The Hartree-Fock (HF) method, developed over the 1920s and 1930s by Douglas Hartree and Vladimir Fock, is the starting point for most quantum chemistry calculations. Here's the core idea: each electron moves in an average field created by all the other electrons, rather than tracking the instantaneous position of every electron simultaneously.

The method uses a self-consistent field (SCF) approach. You guess initial orbitals, calculate the average electron-electron repulsion, solve for new orbitals, recalculate the repulsion, and repeat until the answer stops changing. This iterative process typically converges in 10-30 cycles.

Hartree-Fock captures about 99% of the total electronic energy. That sounds impressive until you realize that the remaining 1% — called the "correlation energy" — often determines whether your prediction of a chemical reaction is right or wrong. A bond energy might be 400 kJ/mol, and the correlation energy correction could be 40 kJ/mol. That's the difference between predicting a stable molecule and a reactive one.

## Beyond Hartree-Fock: Capturing Electron Correlation

The quest to capture that missing correlation energy has driven quantum chemistry for decades. Several families of methods exist:

### Post-Hartree-Fock Methods

**Moller-Plesset Perturbation Theory (MP2, MP3, MP4):** Treats correlation as a small perturbation to the Hartree-Fock solution. MP2 is the most commonly used — it recovers a large fraction of correlation energy at reasonable computational cost. But it can fail badly for certain systems, particularly those with near-degenerate orbitals.

**Configuration Interaction (CI):** Instead of a single arrangement of electrons in orbitals, CI considers many possible arrangements (configurations) and finds the best linear combination. Full CI — considering every possible configuration — gives the exact answer for a given set of orbitals but is computationally feasible only for very small molecules. Truncated versions (CISD, CISDT) are practical but lose the systematic improvability.

**Coupled Cluster (CC):** Often considered the gold standard of quantum chemistry. CCSD(T) — coupled cluster with single, double, and perturbative triple excitations — gives remarkably accurate results for most chemical systems. The accuracy is typically within 1 kcal/mol of experimental values, which is often called "chemical accuracy." The downside? Computational cost scales as N^7 with system size, so it's limited to small-to-medium molecules (roughly 20-30 atoms with modern hardware).

### Density Functional Theory: The Practical Revolution

Density Functional Theory (DFT) changed quantum chemistry more than any other development since Hartree-Fock. Instead of working with the many-electron wavefunction (a function of 3N coordinates for N electrons), DFT works with the electron density — a function of just three spatial coordinates, regardless of how many electrons you have.

The Hohenberg-Kohn theorems (1964) proved that the ground-state electron density uniquely determines all molecular properties. Walter Kohn shared the 1998 Nobel Prize in Chemistry for this work. The Kohn-Sham formalism (1965) made DFT practical by introducing a set of orbital equations similar to Hartree-Fock but including an exchange-correlation functional that (in principle) captures all the electron correlation.

The catch is that nobody knows the exact exchange-correlation functional. Hundreds of approximate functionals exist — B3LYP, PBE, omega-B97X-D, M06-2X — each with different strengths and weaknesses. Choosing the right functional for your problem is part art, part science, and part reading the literature to see what's worked before.

DFT's computational cost scales as roughly N^3, compared to N^7 for CCSD(T). This means DFT can handle molecules with hundreds or even thousands of atoms. It's the method that made quantum chemistry relevant to real-world problems in [biochemistry](/biochemistry), materials science, and drug design.

## Basis Sets: Describing Orbitals Numerically

Every quantum chemistry calculation needs a basis set — a mathematical representation of the atomic orbitals. Think of it like choosing the resolution of a digital image. A small basis set (like STO-3G) is fast but blurry. A large basis set (like cc-pVQZ) is sharp but expensive.

Common basis set families include:

- **Pople basis sets** (6-31G, 6-311G): Named for John Pople, who shared the 1998 Nobel Prize. The notation describes how many Gaussian functions represent each orbital. Adding polarization functions (6-31G*) and diffuse functions (6-31+G*) improves accuracy for specific properties.

- **Dunning correlation-consistent sets** (cc-pVDZ, cc-pVTZ, cc-pVQZ): Designed to systematically converge toward the complete basis set limit. The "DZ/TZ/QZ" refers to double/triple/quadruple-zeta quality.

- **Karlsruhe basis sets** (def2-SVP, def2-TZVP): Popular in European research groups, generally well-balanced and efficient.

The basis set choice can matter as much as the method choice. A great method with a terrible basis set gives terrible results. A decent method with a well-chosen basis set often outperforms a "better" method with an inadequate basis set.

## Applications: Where Quantum Chemistry Meets Reality

### Drug Discovery and Pharmaceutical Research

Pharmaceutical companies routinely use quantum chemistry to understand drug-receptor interactions. Calculating binding energies between a drug candidate and its protein target — with accuracy down to a few kcal/mol — can predict whether a molecule will be an effective drug before anyone synthesizes it. Given that bringing a single drug to market costs around $2.6 billion on average, any computational shortcut is enormously valuable.

### Materials Science

Designing new materials — solar cell components, battery electrodes, superconductors — requires understanding electronic structure at the quantum level. Quantum chemistry predictions of band gaps, conductivities, and optical properties guide experimentalists toward promising candidates. The discovery of new photovoltaic materials, for instance, increasingly relies on high-throughput quantum chemistry screening of thousands of candidate structures.

### Catalysis

Understanding how catalysts work — and designing better ones — is a natural application for quantum chemistry. Transition-state theory, developed using quantum chemical methods, predicts reaction rates and mechanisms. Industrial catalysis, worth hundreds of billions of dollars annually, depends on these insights for process optimization and the development of new [materials-science](/materials-science) applications.

### Atmospheric and Environmental Chemistry

The chemical reactions happening in Earth's atmosphere — ozone depletion, smog formation, greenhouse gas chemistry — involve short-lived radicals and excited states that are difficult to study experimentally but accessible to quantum chemistry calculation. Models predicting atmospheric [chemistry](/chemistry) under various conditions feed directly into [climatology](/climatology) and environmental policy.

### Spectroscopy

Quantum chemistry predicts spectroscopic properties — what frequencies of light a molecule absorbs or emits. This works in reverse, too: comparing calculated spectra with experimental measurements helps identify unknown molecules. This is particularly useful in [astronomy](/astronomy) and [astrophysics](/astrophysics), where molecules in distant nebulae or planetary atmospheres are identified by matching observed spectra to quantum chemical predictions.

## Computational Challenges and Modern Solutions

### The Scaling Problem

The fundamental challenge in quantum chemistry is scaling. The exact solution grows exponentially with system size. Even approximate methods scale steeply: HF as N^4, MP2 as N^5, CCSD(T) as N^7, where N is roughly the number of basis functions.

For context: doubling the molecular size makes a CCSD(T) calculation 128 times more expensive. A calculation that takes an hour for a small molecule would take over five days for one twice as large.

### Linear-Scaling Methods

Modern approaches tackle this by exploiting the locality of electronic interactions. Electrons on one side of a large molecule don't interact strongly with electrons on the other side. Methods like DLPNO-CCSD(T) and local MP2 exploit this fact, achieving near-linear scaling while retaining most of the accuracy of their parent methods.

### Machine Learning in Quantum Chemistry

The most exciting recent development is the application of [machine-learning](/machine-learning) to quantum chemistry. Neural network potentials trained on quantum chemistry data can predict molecular energies and forces thousands of times faster than direct quantum calculations. The ANI, SchNet, and PhysNet models, among others, are achieving DFT-level accuracy at a fraction of the computational cost.

Google DeepMind's FermiNet and PauliNet use neural networks to directly represent the electronic wavefunction, potentially offering a new path to accurate quantum chemistry that bypasses traditional approximation hierarchies entirely.

### Quantum Computing for Quantum Chemistry

There's a certain elegance to using quantum computers for quantum chemistry — simulating quantum systems on quantum hardware. [Algorithms](/algorithms) like the Variational Quantum Eigensolver (VQE) and Quantum Phase Estimation could, in principle, solve the electronic structure problem efficiently on a quantum computer.

As of 2025, quantum computers remain too noisy and too small for practical quantum chemistry beyond very simple systems. But the field is progressing rapidly, and quantum chemistry is widely considered one of the most promising near-term applications of quantum computing.

## The People Behind the Science

Quantum chemistry has an unusually rich Nobel Prize history. Key laureates include:

- **Linus Pauling** (Chemistry, 1954): The nature of the chemical bond
- **Robert Mulliken** (Chemistry, 1966): Molecular orbital theory
- **Roald Hoffmann and Kenichi Fukui** (Chemistry, 1981): Orbital symmetry in reactions
- **John Pople and Walter Kohn** (Chemistry, 1998): Computational quantum chemistry and DFT
- **Martin Karplus, Michael Levitt, and Arieh Warshel** (Chemistry, 2013): Multiscale models combining quantum and classical mechanics

The 1998 Nobel Prize to Pople and Kohn effectively recognized quantum chemistry as a mature, practical science. Their methods are now used by tens of thousands of researchers worldwide, and quantum chemistry calculations appear in the majority of chemistry research papers published today.

## Current Frontiers

### Excited States and Photochemistry

Ground-state quantum chemistry is relatively mature. Excited states — relevant to photosynthesis, solar energy, and photochemistry — remain much harder. Methods like Time-Dependent DFT (TD-DFT), Equation-of-Motion Coupled Cluster (EOM-CC), and Multireference methods are actively being improved to handle these challenging problems.

### Strongly Correlated Systems

Some systems — transition metal complexes, certain organic diradicals, high-temperature superconductors — have electronic structures where multiple electron configurations are equally important. Standard single-reference methods fail here. Multireference methods like CASSCF and DMRG are computationally expensive but necessary for these systems.

### Combining Scales

Real chemistry happens in solution, at surfaces, in biological environments — not in the idealized gas phase where most quantum chemistry calculations live. QM/MM (quantum mechanics/molecular mechanics) methods embed a quantum chemistry calculation inside a classical simulation of the environment. This hybrid approach, recognized by the 2013 Nobel Prize, continues to be refined and expanded.

## How to Get Started

If quantum chemistry interests you, the typical path runs through undergraduate [mathematics](/mathematics) (especially [linear-algebra](/linear-algebra) and [differential-equations](/differential-equations)), physical chemistry, and then graduate-level quantum chemistry courses. Textbook staples include Szabo and Ostlund's "Modern Quantum Chemistry" and Levine's "Quantum Chemistry."

For hands-on experience, free software like Psi4 and ORCA lets you run real quantum chemistry calculations on a laptop. Starting with small molecules — H2, water, methane — and building up gives you intuition for how different methods and basis sets behave.

The field sits at the intersection of [physics](/physics), chemistry, mathematics, and [computer-science](/computer-science). That breadth is what makes it both challenging and rewarding. If you want to understand why molecules do what they do — not just observe that they do it — quantum chemistry is where you end up.
