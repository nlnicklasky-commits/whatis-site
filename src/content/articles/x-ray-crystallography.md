---
title: "What Is X-ray Crystallography?"
slug: x-ray-crystallography
description: "X-ray crystallography is a technique that determines the atomic structure of crystals by measuring how X-ray beams diffract through crystalline materials."
category: science
tags: ["crystallography", "x-rays", "chemistry", "biology"]
heroImage: "/images/articles/x-ray-crystallography.webp"
heroAlt: "A colorful diffraction pattern of dots projected on a detector from an X-ray crystallography experiment"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 9
wordCount: 2358
tier: "2"
relatedArticles: ["chemistry", "crystallography", "molecular-biology", "physics", "biochemistry"]
externalSources:
  - title: "Nobel Prize - X-ray Crystallography"
    url: "https://www.nobelprize.org/prizes/physics/1914/laue/facts/"
  - title: "International Union of Crystallography"
    url: "https://www.iucr.org/"
  - title: "Protein Data Bank"
    url: "https://www.rcsb.org/"
  - title: "Nature - Milestones in Crystallography"
    url: "https://www.nature.com/milestones/crystallography"
faq:
  - q: "Why do you need crystals for X-ray crystallography?"
    a: "A single molecule scatters X-rays too weakly to produce a measurable signal. A crystal contains billions of identical molecules arranged in a regular, repeating pattern. When X-rays hit the crystal, the scattered waves from all these molecules add up constructively in specific directions, creating a measurable diffraction pattern. Without this amplification effect from the repeating crystal lattice, the signal would be too faint to detect."
  - q: "How long does an X-ray crystallography experiment take?"
    a: "The actual X-ray data collection can take from minutes to hours with modern synchrotron sources. However, the hardest and most time-consuming part is usually growing suitable crystals, which can take weeks, months, or even years for difficult proteins. Data processing and structure determination add days to weeks depending on complexity."
  - q: "What is the difference between X-ray crystallography and cryo-EM?"
    a: "X-ray crystallography requires the molecule to be crystallized and determines structure by analyzing diffraction patterns. Cryo-electron microscopy (cryo-EM) flash-freezes molecules in solution and images them directly with an electron beam, avoiding the need for crystals. Cryo-EM works better for large, flexible molecules, while crystallography typically achieves higher resolution for smaller, rigid molecules."
  - q: "Has X-ray crystallography won any Nobel Prizes?"
    a: "X-ray crystallography is connected to over 29 Nobel Prizes across physics, chemistry, and physiology/medicine. Max von Laue won the physics prize in 1914 for discovering X-ray diffraction. The Braggs (father and son) won in 1915 for crystal structure analysis. Dorothy Hodgkin won the chemistry prize in 1964 for determining the structures of penicillin and vitamin B12. Watson and Crick's 1962 Nobel Prize for DNA structure relied on Rosalind Franklin's crystallographic data."
---

# What Is X-ray Crystallography?

X-ray crystallography is an experimental technique that determines the three-dimensional arrangement of atoms within a crystal by measuring how X-ray beams scatter (diffract) when they pass through crystalline material. It has been the primary method for solving atomic and molecular structures since its development in the early 20th century, revealing the structures of everything from simple salts to DNA to complex protein machines.

## The Discovery That Changed Science

The story starts with Wilhelm Rontgen's accidental discovery of X-rays in 1895 -- he noticed that a fluorescent screen across his lab glowed when he was experimenting with cathode rays, even though the tube was shielded. X-rays earned their name because Rontgen didn't know what they were. The "X" literally means unknown.

For the next 17 years, scientists debated whether X-rays were particles or waves. Max von Laue settled the question in 1912 with a beautifully elegant experiment. He reasoned that if X-rays were waves with very short wavelengths, and if crystals were regular arrangements of atoms (as suspected but not proven), then a crystal should diffract X-rays the way a grating diffracts visible light. He aimed an X-ray beam at a copper sulfate crystal and captured the diffraction pattern on a photographic plate.

The result was stunning: a symmetric pattern of spots that proved both that X-rays are waves AND that crystals have regular atomic structures. One experiment, two breakthroughs. Laue won the Nobel Prize in [Physics](/physics) in 1914.

William Henry Bragg and his son William Lawrence Bragg then figured out how to go from diffraction patterns back to crystal structures. The younger Bragg, just 22 years old, derived Bragg's Law: n*lambda* = 2d sin *theta* -- the mathematical relationship between X-ray wavelength, the spacing between crystal planes, and the angles at which diffraction peaks occur. They won the Nobel Prize in 1915, making W.L. Bragg the youngest-ever Nobel laureate in physics at age 25.

## How It Actually Works

The basic principle is deceptively simple. The execution is anything but.

### Step 1: Grow a Crystal

Before you can shoot X-rays at something, you need a crystal of it. A crystal is a solid where atoms, ions, or molecules are arranged in a repeating three-dimensional pattern called a lattice. This regularity is the whole point -- billions of identical units arranged the same way amplify the weak scattering from individual atoms into a measurable signal.

For simple minerals and salts, crystals occur naturally or grow easily from solution. For proteins and other biological molecules, crystal growth is the hardest part of the entire process. Protein crystallization is sometimes called "the bottleneck" because many proteins resist forming ordered crystals.

The basic approach is to slowly reduce a protein's solubility in solution until it precipitates -- but in an ordered way rather than as an amorphous clump. Crystallographers screen hundreds of conditions: different salt concentrations, pH values, temperatures, and precipitating agents. They use tiny drops (often just 1-2 microliters) in multi-well plates, and success can take months of patient optimization.

Some proteins have resisted crystallization for decades. Membrane proteins -- which sit in the oily cell membrane rather than floating in water -- are notoriously difficult because they need detergents to stay soluble, and those detergents interfere with crystal packing.

### Step 2: Shoot X-rays at the Crystal

With a crystal in hand, you mount it (often on a tiny loop or fiber) and place it in the path of an X-ray beam. Modern experiments typically use one of two X-ray sources:

**Rotating anode generators** are laboratory-scale X-ray sources where electrons accelerated onto a spinning metal target produce X-rays. They're convenient but relatively weak.

**Synchrotrons** are particle accelerators where electrons traveling near the speed of light are steered around a circular path by magnets. When the electrons change direction, they emit extremely intense, tightly focused X-ray beams. Synchrotron X-rays can be 100 billion times brighter than laboratory sources. Major synchrotrons include the Advanced Photon Source at Argonne National Laboratory, Diamond Light Source in the UK, and SPring-8 in Japan.

The crystal is rotated in the beam while a detector records the pattern of diffracted X-rays. Each image captures reflections at one orientation; a complete dataset requires rotating the crystal through many angles, collecting thousands of individual reflection measurements.

### Step 3: The Diffraction Pattern

The diffraction pattern -- the array of spots captured by the detector -- encodes the crystal's atomic structure, but not in a straightforward way. Each spot's position tells you about the crystal's unit cell dimensions and symmetry. Each spot's intensity relates to the positions of atoms within the unit cell.

Here's the catch -- and it's a big one. The detector records the intensity of each diffracted beam but not its phase (the timing of the wave). Reconstructing a three-dimensional structure from intensities alone is like trying to reconstruct a photograph knowing the brightness of each pixel but not the color. This is called the "phase problem," and solving it consumed crystallographers for decades.

### The Phase Problem and Its Solutions

Several methods solve the phase problem:

**Molecular replacement** uses a known structure of a similar molecule as a starting model. If you're solving the structure of a protein that's 60% identical to one already in the database, you can use the known structure to estimate initial phases. This is now the most common method because the Protein Data Bank contains over 200,000 structures to use as models.

**Isomorphous replacement** involves soaking the crystal in solutions of heavy atoms (mercury, platinum, gold) that bind to specific sites without disrupting the crystal structure. Comparing diffraction patterns with and without heavy atoms provides phase information. This method was used to solve the first protein structures in the 1950s and 1960s.

**Anomalous scattering** exploits the fact that atoms absorb and re-emit X-rays differently at certain wavelengths. By collecting data at wavelengths near an atom's absorption edge (often using selenium or sulfur atoms in proteins), crystallographers can extract phase information from the differences.

**Direct methods** use mathematical relationships between the phases of strong reflections to determine all phases simultaneously. These methods work brilliantly for small molecules (up to a few hundred atoms) and earned Herbert Hauptman and Jerome Karle the Nobel Prize in [Chemistry](/chemistry) in 1985.

### Step 4: Build the Model

Once you have both intensities and phases, you can calculate an electron density map -- a three-dimensional picture showing where electrons are concentrated in the crystal. Since electrons surround atoms, the electron density map reveals where the atoms are.

For small molecules, the atomic positions jump out clearly from a good electron density map. For proteins, the process is more involved. You fit the known amino acid sequence into the electron density, adjusting bond angles, torsion angles, and side chain positions to match the observed density. Modern software like Coot and Phenix assists with this, but crystallographers still spend considerable time manually inspecting and adjusting their models.

The final model is validated by comparing calculated diffraction patterns (from the model) against observed diffraction patterns. The R-factor measures this agreement; values below 0.20 (20% disagreement) are generally considered good for protein structures.

## Resolution: How Sharp Is the Picture?

Resolution in crystallography measures the finest detail visible in the electron density map. It's reported in angstroms (A) -- one angstrom is 10^-10 meters, roughly the diameter of a hydrogen atom.

- **Better than 1.0 A**: Individual atoms are clearly resolved. You can see hydrogen atoms. This is rare for proteins but common for small molecules.
- **1.0-2.0 A**: Excellent for proteins. Side chains and water molecules are clearly visible. Bond lengths and angles are reliable.
- **2.0-3.0 A**: Good. The overall fold of the protein is clear, and most side chains can be placed confidently. Some ambiguity exists for flexible regions.
- **3.0-4.0 A**: Moderate. Secondary structure (helices and sheets) is visible, but individual side chains may be difficult to place.
- **Worse than 4.0 A**: Low resolution. Useful for seeing overall shape but limited for atomic-level interpretation.

Resolution depends primarily on crystal quality. Well-ordered crystals with tight, regular packing diffract to high resolution. Crystals with disorder, high solvent content, or flexible regions diffract poorly.

## Landmark Structures

### DNA (1953)

The structure of DNA is crystallography's most famous achievement -- and its most complicated origin story. Rosalind Franklin and Raymond Gosling produced the iconic "Photo 51," an X-ray diffraction image of DNA that clearly showed its helical structure and key dimensions. James Watson and Francis Crick used this data (controversially obtained without Franklin's direct knowledge) along with other chemical information to build their famous double helix model.

The discovery revealed how genetic information is stored and copied, launching [molecular biology](/molecular-biology) as a field. Watson, Crick, and Maurice Wilkins shared the 1962 Nobel Prize. Franklin, who died of ovarian cancer in 1958 at age 37, was not included -- the Nobel Prize is not awarded posthumously. Her contribution to one of science's greatest discoveries is now widely recognized as having been undervalued.

### Penicillin (1945) and Vitamin B12 (1956)

Dorothy Crowfoot Hodgkin solved the structures of penicillin and vitamin B12 at a time when these molecules were considered too complex for crystallographic analysis. Her determination of penicillin's structure confirmed the unusual beta-lactam ring that gives the antibiotic its activity -- a result that chemists had refused to believe based on chemical arguments alone.

Vitamin B12, with nearly 100 non-hydrogen atoms, was the most complex molecule ever solved by crystallography at the time. Hodgkin won the Nobel Prize in Chemistry in 1964 and remains one of only five women to have received that award.

### Protein Structures

John Kendrew solved the first protein structure -- myoglobin -- in 1958. Max Perutz solved hemoglobin shortly after. Both shared the 1962 Nobel Prize in Chemistry. These structures revealed that proteins fold into specific three-dimensional shapes that determine their function, confirming decades of speculation.

Since then, over 200,000 structures have been deposited in the Protein Data Bank (PDB), which was established in 1971 and now contains structures of proteins, nucleic acids, and their complexes. The PDB is freely accessible to anyone and has become one of the most important resources in [biology](/biology) and medicine.

### Ribosome (2000s)

The ribosome -- the molecular machine that translates genetic information into proteins -- was solved by Venkatraman Ramakrishnan, Thomas Steitz, and Ada Yonath, who shared the 2009 Nobel Prize in Chemistry. The ribosome structure, containing hundreds of thousands of atoms, pushed crystallography to its limits and revealed the atomic details of how proteins are manufactured in every living cell.

## Applications Beyond Basic Science

### Drug Design

If you know the three-dimensional structure of a disease-related protein, you can design drugs that fit precisely into its active site -- like designing a key to fit a specific lock. This approach, called structure-based drug design, has produced numerous successful medications.

HIV protease inhibitors (saquinavir, ritonavir, and others) were designed using crystallographic structures of the HIV protease enzyme. These drugs transformed AIDS from a death sentence into a manageable chronic condition. The anticancer drug imatinib (Gleevec) was optimized using crystallographic data showing how it binds to its target kinase.

Today, pharmaceutical companies routinely use crystallography during drug development. Determining how a drug candidate binds to its target helps medicinal chemists optimize the compound for potency, selectivity, and drug-like properties.

### Materials Science

[Crystallography](/crystallography) is essential for understanding material properties. The arrangement of atoms in a metal determines its strength, ductility, and conductivity. Semiconductor physics depends on knowing exact crystal structures. Ceramic, polymer, and composite material properties all relate to their crystalline or semi-crystalline structures.

The development of new materials -- from stronger alloys to better solar cells to superconductors -- relies on crystallographic characterization at every stage.

### Forensics and Geology

Mineral identification, soil analysis, and gemstone characterization use powder X-ray diffraction, where polycrystalline samples produce characteristic patterns that serve as "fingerprints" for different minerals. Geologists use diffraction to identify minerals in rock samples, understand the conditions under which they formed, and track geological processes.

## Cryo-EM: The New Kid on the Block

Cryo-electron microscopy (cryo-EM) has emerged as a powerful alternative to X-ray crystallography, especially for large biological molecules. In cryo-EM, molecules are flash-frozen in a thin layer of ice and imaged directly by an electron microscope. Computational averaging of thousands of images produces three-dimensional reconstructions.

Cryo-EM's big advantage: no crystals needed. This opens up structures that have resisted crystallization for decades -- membrane proteins in their native lipid environments, large multi-component complexes, and flexible molecules that don't pack neatly into crystal lattices.

The "resolution revolution" in cryo-EM (recognized with the 2017 Nobel Prize in Chemistry, awarded to Jacques Dubochet, Joachim Frank, and Richard Henderson) was driven by better electron detectors and image processing algorithms. Modern cryo-EM routinely achieves resolutions below 3 A, approaching crystallographic quality.

Does this mean crystallography is obsolete? Not yet. For small molecules, crystallography remains faster, cheaper, and higher resolution. For drug-protein interactions that require atomic-level detail, crystal structures are still the gold standard. And the two techniques are increasingly complementary -- crystallographic and cryo-EM data are sometimes combined to solve the same structure.

## The Future of Structural Biology

AI-based structure prediction -- particularly AlphaFold, developed by DeepMind and released publicly in 2021 -- has disrupted the field. AlphaFold can predict protein structures from amino acid sequences with remarkable accuracy, producing models for nearly every known protein.

But prediction hasn't replaced experiment. AlphaFold models don't show drug binding, conformational changes, or the effects of mutations as reliably as experimental structures. Crystallography and cryo-EM remain essential for validating predictions and answering questions that sequence-based prediction can't address.

The field is also pushing into time-resolved crystallography, where ultrafast X-ray pulses from free-electron lasers capture molecular motions on femtosecond (10^-15 second) timescales. Instead of static snapshots, researchers are beginning to make molecular movies -- watching enzymes catalyze reactions, photoreceptors respond to light, and proteins undergo conformational changes in real time.

From Laue's first diffraction photograph in 1912 to femtosecond molecular movies in the 2020s, X-ray crystallography has given us the ability to see the invisible architecture of matter. Over a century later, it's still revealing structures that surprise us.
