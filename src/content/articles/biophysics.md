---
title: "What Is Biophysics?"
slug: biophysics
description: "Biophysics uses physics methods to study biological systems. Learn about protein folding, cell membranes, molecular motors, and sensory perception. Discover ..."
category: science
tags: ["biophysics", "physics", "biology", "molecular biology", "protein folding", "cell membrane", "sensory perception"]
heroImage: "/images/articles/biophysics-hero.webp"
heroAlt: "Editorial photograph representing the concept of biophysics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2572
tier: "2"
relatedArticles: ["biomechanics", "biochemistry", "biology", "bioengineering", "acoustics"]
externalSources:
  - title: "Biophysical Society"
    url: "https://www.biophysics.org/"
  - title: "Annual Review of Biophysics"
    url: "https://www.annualreviews.org/journal/biophys"
  - title: "RCSB Protein Data Bank"
    url: "https://www.rcsb.org/"
  - title: "NIH National Institute of General Medical Sciences — Biophysics"
    url: "https://www.nigms.nih.gov/education/fact-sheets/Pages/biophysics.aspx"
faq:
  - q: "What's the difference between biophysics and biochemistry?"
    a: "Biochemistry focuses on the chemical reactions and molecular transformations in living systems — enzyme kinetics, metabolic pathways, and molecular structures. Biophysics focuses on the physical principles governing biological systems — forces, energy, thermodynamics, and the physical behavior of biomolecules. In practice, the fields overlap significantly, but a biochemist might ask 'what chemical reaction does this enzyme catalyze?' while a biophysicist might ask 'what physical forces cause this protein to fold into its specific shape?'"
  - q: "What do biophysicists study?"
    a: "Biophysicists study how proteins fold, how cell membranes organize, how molecular motors generate force, how nerves transmit electrical signals, how photosynthesis captures light energy, how DNA is read and copied, how cells sense their environment, and how radiation interacts with biological tissue. The common thread is applying physics — thermodynamics, mechanics, electromagnetism, optics — to biological questions."
  - q: "What careers are available in biophysics?"
    a: "Biophysicists work in pharmaceutical research (drug design using structural biology), medical device development, academic research, biotechnology companies, government research labs (like NIH or national laboratories), and scientific instrument companies. Computational biophysicists are in high demand for molecular simulation and drug discovery. Most research positions require a PhD, but bachelor's and master's degrees can lead to industry positions in instrumentation, quality control, and technical sales."
  - q: "How did biophysics contribute to understanding COVID-19?"
    a: "Biophysics was central to the COVID-19 response. Cryo-electron microscopy (a biophysical technique) revealed the detailed structure of the SARS-CoV-2 spike protein within weeks of the virus being identified. This structural information was critical for designing vaccines (both mRNA and protein-based) and therapeutic antibodies. Molecular dynamics simulations helped researchers understand how the spike protein binds to the ACE2 receptor, guiding drug development efforts."
---

# What Is Biophysics?

Biophysics is the interdisciplinary science that applies the theories, methods, and mathematical tools of [physics](/physics) to understand how biological systems work. It asks questions like: What forces hold a protein in its functional shape? How does a nerve cell generate an electrical signal? Why does DNA form a double helix? How can a single photon of light trigger a cascade of molecular events that lets you see? The answer to each of these questions requires physics — not just [biology](/biology) or [chemistry](/biochemistry), but the quantitative understanding of energy, force, and matter that physics provides.

## Why Biology Needs Physics

Biology is full of phenomena that look like [engineering](/engineering) problems in disguise. Cells pump ions against concentration gradients — that's [thermodynamics](/thermodynamics). DNA stores information in a linear code — that's [information theory](/information-theory). Muscles convert chemical energy to mechanical work — that's a heat engine. Photoreceptors detect individual photons — that's [quantum mechanics](/quantum-mechanics).

For most of biology's history, these physical aspects were acknowledged but not deeply explored. Biologists focused on identifying the molecules and describing what they did. Biophysicists go further, asking how and why the physics makes it work.

Here's a concrete example. Every biology student learns that hemoglobin carries oxygen in the blood. A biochemist can tell you the molecular structure of hemoglobin and the [chemistry](/chemistry) of oxygen binding. A biophysicist asks: Why does hemoglobin bind oxygen cooperatively — why does binding the first oxygen molecule make binding the second, third, and fourth progressively easier? The answer involves allosteric conformational changes, free energy landscapes, and [statistical mechanics](/statistical-mechanics). Understanding this physics explains why hemoglobin is so efficient at loading oxygen in the lungs and unloading it in the tissues — a property that a simple "it binds oxygen" description completely misses.

## The Physics of Protein Folding

Proteins are linear chains of amino acids that must fold into specific three-dimensional shapes to function. This folding problem — how does a chain of hundreds or thousands of amino acids reliably find its correct shape among the astronomically large number of possible configurations? — is one of the deepest questions in biophysics.

### Levinthal's Paradox

Cyrus Levinthal pointed out in 1969 that a protein of 100 amino acids has roughly 3^100 (about 5 x 10^47) possible conformations. If the protein sampled each one at the fastest possible rate — one per picosecond — it would take longer than the age of the universe to find the right fold by random search. Yet real proteins fold in milliseconds to seconds. Something must be guiding the process.

### The Energy Field

The biophysical solution: proteins don't search randomly. The energy field — a high-dimensional surface where each point represents a possible conformation and its associated free energy — is funnel-shaped. The native (correct) fold sits at the bottom of the funnel. From most starting configurations, the protein "rolls downhill" energetically, sampling progressively lower-energy states until it reaches the native structure.

This funnel isn't smooth — it has local minima (metastable states) where proteins can get temporarily trapped. Misfolded proteins that get stuck in wrong energy minima are implicated in diseases: Alzheimer's (amyloid-beta and tau), Parkinson's (alpha-synuclein), and prion diseases (PrP^Sc).

The forces driving folding include:

**Hydrophobic effect** — nonpolar amino acid side chains are driven to the protein's interior, away from water. This is the dominant driving force for folding and is fundamentally entropic: burying hydrophobic residues allows water molecules to be more disordered, increasing total system entropy.

**Hydrogen bonds** — weak but numerous attractions between polar groups. Alpha helices and beta sheets — the two most common structural elements in proteins — are stabilized by hydrogen bonds between backbone atoms.

**Van der Waals interactions** — very weak attractions between all atoms at close range. Individually negligible, but a tightly packed protein has thousands of these interactions, and they add up.

**Electrostatic interactions** — charged amino acids attract opposite charges and repel like charges. Salt bridges (ionic bonds between positively and negatively charged residues) can stabilize specific structural features.

### AlphaFold and Computational Prediction

DeepMind's AlphaFold system, which uses [deep learning](/deep-learning) to predict protein structures from amino acid sequences, effectively solved the structure prediction problem in 2020-2021. AlphaFold's predictions match experimental structures with remarkable accuracy for most proteins. This was a biophysics milestone — and it was enabled by training on decades of experimentally determined structures from [X-ray crystallography](/x-ray-crystallography) and cryo-EM.

But structure prediction isn't the same as understanding folding. AlphaFold tells you what the final shape is; it doesn't explain the physics of how the protein gets there. Understanding the folding pathway — including misfolding and aggregation — still requires biophysical approaches like molecular dynamics simulation, single-molecule experiments, and [computational modeling](/algorithms).

## Membranes: The Physics of Cellular Boundaries

Cell membranes are astonishing physical structures. They're only about 5-10 nanometers thick — roughly 10,000 times thinner than a sheet of paper — yet they form a continuous, self-healing barrier that separates the cell's interior from the outside world while selectively allowing specific molecules to pass.

### Self-Assembly

Membranes form spontaneously. Phospholipids — molecules with a hydrophilic (water-loving) head and two hydrophobic (water-fearing) tails — automatically arrange into bilayers in aqueous solution. No external energy or templates required. This is driven entirely by the hydrophobic effect: the tails avoid water by clustering together, and the heads face the water on both sides.

The resulting bilayer is a two-dimensional fluid. Individual lipid molecules move laterally within their layer at speeds of several micrometers per second — about 10^7 times per second, a lipid molecule swaps places with its neighbor. But flipping from one layer to the other (called "flip-flop") is extremely rare without enzyme assistance, because the hydrophilic head would have to cross the hydrophobic core.

### Membrane Biophysics

The mechanical properties of membranes are fascinating:

**Bending rigidity** determines how easily a membrane can curve. Cell membranes have a bending modulus of about 10-20 kT (where kT is thermal energy at body temperature). This is stiff enough to maintain cell shape but flexible enough to allow vesicle formation, endocytosis, and cell division.

**Lateral tension** in the membrane affects protein function. Mechanosensitive ion channels — proteins that open or close in response to membrane stretching — detect mechanical stimuli using this principle. This is how your sense of touch works at the molecular level: pressure on the skin stretches cell membranes, opening mechanosensitive channels, triggering nerve impulses.

**Phase behavior** — at different temperatures and compositions, membranes can exist in ordered (gel) or disordered (fluid) phases. The cell modulates membrane fluidity by adjusting lipid composition, particularly the ratio of saturated to unsaturated fatty acids and the cholesterol content. Cholesterol acts as a bidirectional fluidity buffer: it rigidifies fluid membranes and fluidizes ordered ones.

### Membrane Proteins

Roughly 30% of all genes encode membrane proteins, and they perform most of the membrane's active functions: transport, signaling, energy conversion, and cell adhesion. Studying membrane proteins biophysically is difficult because removing them from their lipid environment often destroys their structure and function.

Ion channels — membrane proteins that allow specific ions to cross the membrane — are a prime biophysics subject. The selectivity filter of a potassium channel allows potassium ions (radius 1.33 angstroms) to pass while blocking sodium ions (radius 0.95 angstroms) — even though sodium is smaller. The biophysical explanation, worked out by Roderick MacKinnon (2003 Nobel Prize in Chemistry), involves the precise arrangement of carbonyl oxygen atoms in the filter that perfectly mimic the hydration shell of potassium but not sodium. This is physics determining biology at the atomic level.

## Molecular Motors and Mechanical Work

Living cells contain molecular machines that convert chemical energy (usually from ATP hydrolysis) into mechanical work. These are genuine motors — they generate force and produce directed motion, just like macroscopic motors, but at the nanometer scale.

### Kinesin: Walking Along Microtubules

Kinesin is a motor protein that "walks" along microtubule tracks inside cells, carrying cargo (vesicles, organelles, chromosomes) from one location to another. Each step is 8 nanometers — the spacing between tubulin subunits in the microtubule — and each step consumes one ATP molecule.

The biophysics of kinesin [walking](/walking) has been studied using optical traps (focused laser beams that can hold and manipulate individual molecules) and single-molecule fluorescence. These experiments revealed that kinesin moves in a hand-over-hand manner, with its two "heads" alternately stepping forward, and generates a force of about 6 piconewtons. It can take about 100 steps before detaching — walking roughly 800 nanometers on a single run.

### Myosin and Muscle Contraction

The sliding filament theory of muscle contraction, proposed by Andrew Huxley and Hugh Huxley in 1954, is fundamentally a biophysics model. Myosin motor proteins bind to actin filaments, undergo a conformational change (the "power stroke") that slides the filaments past each other, then detach and reset. Billions of these molecular events, happening simultaneously and in coordination, produce the macroscopic force you feel when you flex your biceps.

The efficiency of muscle contraction — about 25% for converting chemical energy to mechanical work — is comparable to a gasoline engine. The remaining energy becomes heat, which is why exercise warms you up.

### ATP Synthase: The World's Smallest Rotary Motor

ATP synthase is literally a rotary motor embedded in the mitochondrial membrane. Protons flow through it driven by the electrochemical gradient across the membrane (established by the electron transport chain), causing a rotor subunit to spin at about 100 revolutions per second. This rotation drives conformational changes in the catalytic subunits that synthesize ATP from ADP and phosphate.

The mechanism was worked out by Paul Boyer and John Walker (1997 Nobel Prize in Chemistry). Single-molecule experiments by Masasuke Yoshida's group directly visualized the rotation using a fluorescent actin filament attached to the rotor — you could literally watch the motor spin under a microscope. This remains one of the most visually stunning demonstrations in all of [molecular biology](/biochemistry).

## Biophysics of the Senses

How do you see, hear, taste, smell, and feel? Each sensory modality involves converting a physical stimulus into a neural signal — a process called transduction — and the mechanisms are pure biophysics.

### Vision

Vision begins when a photon of light is absorbed by retinal, a small molecule bound to the protein rhodopsin in rod cells of the retina. Photon absorption causes retinal to change shape (from 11-cis to all-trans), which triggers a conformational change in rhodopsin, which activates a G-protein signaling cascade, which ultimately closes ion channels in the cell membrane, changing the cell's electrical state.

The sensitivity is remarkable: a dark-adapted rod cell can detect a single photon. The quantum efficiency of the first step — photon absorption causing retinal isomerization — is about 67%, better than most human-made photodetectors. The amplification cascade that follows means a single photon can prevent the flow of about a million sodium ions, producing a measurable electrical signal from one quantum of light.

### Hearing

The [physics of hearing](/acoustics) involves mechanical vibrations being converted to neural signals. Sound waves vibrate the eardrum, which moves three tiny bones (the ossicles) in the middle ear, which push on the oval window of the cochlea. Inside the cochlea, the vibrations create traveling waves in the basilar membrane. Different frequencies peak at different positions along the membrane — high frequencies near the base, low frequencies near the apex — creating a spatial frequency map.

At each position, inner hair cells detect the membrane's motion. Tiny projections on the hair cells (stereocilia) are deflected by the fluid motion, mechanically opening ion channels. This is among the fastest sensory transduction mechanisms known — the channels can open and close in microseconds, which is why you can hear frequencies up to 20,000 Hz.

### Touch

Mechanoreception in the skin involves specialized nerve endings with ion channels that open in response to membrane deformation. Merkel cells detect sustained pressure. Meissner's corpuscles detect light touch and texture. Pacinian corpuscles detect vibration. The biophysics varies — Pacinian corpuscles, for example, have a layered onion-like structure that mechanically filters out sustained pressure, allowing only vibrations to reach the nerve ending.

## Radiation Biophysics

How ionizing radiation (X-rays, gamma rays, particle radiation) damages biological tissue is a biophysics question with enormous practical importance for cancer treatment, radiation protection, and space travel.

Radiation damages DNA through two mechanisms: direct hits (the radiation breaks chemical bonds in DNA) and indirect damage (radiation splits water molecules into free radicals that then attack DNA). The relative importance depends on the radiation type: densely ionizing radiation (alpha particles, heavy ions) causes more direct damage, while sparsely ionizing radiation (X-rays, gamma rays) causes more indirect damage.

The dose-response relationship for radiation effects — how much damage occurs at different exposure levels — has been studied extensively. For cancer radiotherapy, understanding the biophysics of how different tissues respond to radiation allows oncologists to maximize the dose to the tumor while minimizing damage to surrounding healthy tissue. Techniques like proton therapy exploit the physics of charged particles (which deposit most of their energy at a specific depth, the "Bragg peak") to precisely target tumors.

## Emerging Frontiers

**Cryo-[electron microscopy](/electron-microscopy) (cryo-EM)** has revolutionized [structural biology](/structural-biology) over the past decade. By flash-freezing molecules in solution and imaging them with an electron microscope, researchers can determine structures at near-atomic resolution without crystallization. The 2017 Nobel Prize in Chemistry was awarded for cryo-EM development. It has become the go-to method for large molecular complexes and membrane proteins that are difficult to crystallize.

**Optogenetics** uses light-sensitive proteins (originally from algae) genetically inserted into neurons to control neural activity with light. A flash of blue light can activate a specific set of neurons; a flash of yellow light can silence them. This has transformed [neuroscience](/neuroscience) by allowing researchers to establish causal relationships between neural activity and behavior.

**Mechanobiology** — the study of how mechanical forces affect biological processes — is a rapidly growing intersection of biophysics and [cell biology](/cell-biology). Cells sense and respond to the stiffness of their surroundings, the forces applied to them, and the mechanical properties of neighboring cells. Cancer cells, for instance, are typically softer than normal cells and respond differently to mechanical stress. Understanding this opens new avenues for [diagnostics and therapy](/bioengineering).

**[Quantum biology](/quantum-biology)** asks whether quantum mechanical effects play functional roles in biological systems. Evidence suggests that quantum coherence may influence photosynthesis efficiency, that quantum [tunneling](/tunneling) occurs in enzyme catalysis, and that birds may work through using quantum effects in cryptochrome proteins in their eyes. The field is young and controversial, but the questions are genuinely exciting.

## Why Biophysics Matters

Biology without physics is description without mechanism. You can catalog every protein in a cell, but without understanding the forces that fold them, the thermodynamics that drive their interactions, and the mechanics that produce their functions, you don't really understand how the system works.

Biophysics provides that understanding — and it does so quantitatively. Not "this protein binds to that receptor" but "the binding affinity is 10 nanomolar, the binding is entropy-driven, and the conformational change occurs in 50 microseconds." Those numbers matter because they determine whether a drug works, whether a signaling pathway is activated, and whether a molecular machine runs at the right speed.

The field stands at a remarkable point. Experimental tools can now track single molecules in real time, simulate molecular dynamics at atomistic resolution, and image structures at near-atomic detail. The gap between physics and biology — between understanding matter and understanding life — has never been narrower.
