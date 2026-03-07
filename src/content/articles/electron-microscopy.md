---
title: "What Is Electron Microscopy?"
slug: electron-microscopy
description: "Electron microscopy uses focused electron beams to image structures far smaller than light can reveal. Learn about TEM, SEM, and nanoscale imaging. Discover ..."
category: technology
tags: ["electron microscopy", "microscopy", "science", "nanotechnology", "materials science", "biology", "tem"]
heroImage: "/images/articles/electron-microscopy-hero.webp"
heroAlt: "Editorial photograph representing the concept of electron microscopy"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2731
tier: "2"
relatedArticles: ["biology", "chemistry", "biotechnology", "cell-biology", "crystallography"]
externalSources:
  - title: "Electron Microscopy - Britannica"
    url: "https://www.britannica.com/technology/electron-microscope"
  - title: "NIST Electron Microscopy"
    url: "https://www.nist.gov/programs-projects/electron-microscopy"
  - title: "Nobel Prize - Cryo-EM (2017)"
    url: "https://www.nobelprize.org/prizes/chemistry/2017/summary/"
  - title: "Microscopy Society of America"
    url: "https://www.microscopy.org/"
faq:
  - q: "How much more powerful is an electron microscope than a light microscope?"
    a: "The best light microscopes can resolve details down to about 200 nanometers. Transmission electron microscopes can resolve features below 0.1 nanometers — about 2,000 times finer. This means electron microscopes can image individual atoms in some cases, while light microscopes are limited to structures roughly the size of a bacterium."
  - q: "Can you see living cells with an electron microscope?"
    a: "Traditional electron microscopy requires samples to be in a vacuum and often chemically fixed or frozen, so you cannot observe living cells in real time. However, cryo-electron microscopy preserves biological samples in a near-native frozen state, and some environmental SEM techniques allow imaging of hydrated samples under limited conditions."
  - q: "How much does an electron microscope cost?"
    a: "A basic scanning electron microscope starts around $50,000 to $100,000 for tabletop models. Full-size research SEMs cost $200,000 to $1 million. Transmission electron microscopes range from $500,000 to over $5 million. Aberration-corrected TEMs and cryo-EM systems can exceed $10 million. Operating costs for maintenance, liquid nitrogen, and trained personnel add significantly."
  - q: "Why do electron microscope images appear in grayscale?"
    a: "Electrons don't have color — color is a property of visible light at different wavelengths. Electron microscopes detect electrons, not photons, so the raw images are inherently grayscale. The false-color images you often see in magazines and textbooks have been digitally colorized after the fact for visual clarity or to highlight different structures."
---

# What Is Electron Microscopy?

Electron microscopy is an imaging technique that uses focused beams of electrons instead of light to examine specimens at extremely high magnification and resolution, revealing structural details far too small for any optical microscope to detect. Modern electron microscopes can resolve features smaller than 0.1 nanometers — small enough to image individual atoms in a crystal lattice.

## Why Electrons? The Problem With Light

Here's the fundamental issue with regular microscopes: light has a wavelength, and you can't see anything smaller than about half that wavelength. Visible light wavelengths range from roughly 400 to 700 nanometers. No matter how perfect your lenses, no matter how clever your optics, a light microscope can't resolve details finer than about 200 nanometers. This is the diffraction limit, established by Ernst Abbe in 1873.

Two hundred nanometers sounds tiny, but it's enormous compared to the things scientists want to see. A virus is typically 20-300 nm. A protein molecule is 2-10 nm. The spacing between atoms in a crystal is around 0.1-0.5 nm. To see these structures, you need a "light" with a much shorter wavelength.

Enter electrons. In 1924, Louis de Broglie proposed that particles, including electrons, behave like waves, with wavelength inversely proportional to their momentum. An electron accelerated through 100,000 volts has a wavelength of about 0.004 nm — roughly 100,000 times shorter than visible light. In theory, an electron microscope should be able to resolve details 100,000 times finer than an optical one.

In practice, imperfections in electron lenses limit the actual resolution to much less than this theoretical limit, but even so, modern electron microscopes achieve sub-angstrom resolution (less than 0.1 nm). That's good enough to see individual atoms.

## The Two Main Types

Electron microscopes come in two principal varieties, each optimized for different kinds of information.

### Transmission Electron Microscopy (TEM)

A TEM works conceptually like a slide projector: electrons pass *through* the specimen, and the transmitted beam creates an image. Dense regions of the specimen scatter or absorb more electrons, appearing darker. Less dense regions transmit more electrons, appearing lighter.

**How it works**: An electron gun (typically a heated filament or a field-emission source) generates electrons. Electromagnetic lenses — coils producing precisely controlled magnetic fields — focus and steer the beam, just as glass lenses focus light. The focused beam passes through an ultra-thin specimen (typically 50-100 nm thick), and the transmitted electrons are magnified by additional electromagnetic lenses before hitting a detector (historically a phosphorescent screen, now usually a digital camera).

**What it shows**: Internal structure at extremely high resolution. TEM can reveal crystal lattice planes, grain boundaries, dislocations, nanoparticles embedded in matrices, and — with aberration correction — individual atomic columns. In [biology](/biology), TEM shows the internal structure of cells, organelles, viruses, and protein complexes.

**The catch**: Specimens must be extremely thin. Preparing a TEM sample is often the hardest part of the experiment. For metals and ceramics, this typically involves mechanical thinning followed by ion beam milling. For biological samples, it involves chemical fixation, dehydration, embedding in resin, and slicing with an ultramicrotome — a precision instrument that cuts sections just 50-100 nm thick using a glass or diamond knife.

### [Scanning Electron Microscopy](/scanning-electron-microscopy) (SEM)

An SEM works differently: instead of transmitting through the specimen, it scans a focused electron beam across the surface and collects the signals generated at each point. The result is an image of the specimen's surface topography — what it looks like from the outside.

**How it works**: A focused electron beam scans across the specimen in a raster pattern (like an old CRT television). At each point, the beam interacts with the specimen, generating several types of signals. Secondary electrons (knocked out of the specimen's surface atoms) are collected to form the primary image. Backscattered electrons (beam electrons bounced back by heavy atoms) provide compositional contrast. X-rays emitted by excited atoms identify which elements are present at each point.

**What it shows**: Surface morphology with remarkable depth of field. SEM images have a distinctly three-dimensional quality because the depth of field is roughly 100 times greater than an optical microscope at the same magnification. Fracture surfaces, biological structures, microelectronics, pollen grains, insect anatomy — SEM excels at showing how things look up close.

**Resolution**: Modern SEMs resolve features down to about 1 nm, though 5-10 nm is more typical for routine imaging. This is considerably less than TEM, but for surface imaging, SEM is far more versatile and requires much less sample preparation.

## Sample Preparation: The Unsung Challenge

Ask any electron microscopist what the hardest part of their work is, and most will say sample preparation. The microscope itself is (relatively) straightforward to operate. Getting a sample that accurately represents the material without introducing artifacts? That's the art.

### For TEM

The sample must be electron-transparent — thin enough for the electron beam to pass through. For most materials, this means less than 100 nm. Creating such thin specimens without damaging them requires considerable skill:

- **Mechanical polishing** thins bulk samples to ~10-20 micrometers
- **Ion milling** uses argon ion beams to thin further to electron transparency
- **Focused ion beam (FIB)** can extract specific regions of interest and thin them precisely — essential for semiconductor failure analysis
- **Ultramicrotomy** cuts thin sections of embedded biological or polymer samples

Each method introduces potential artifacts. Ion milling can cause amorphization of crystalline surfaces. Chemical fixation in biology can alter structures. The art is minimizing these artifacts while achieving adequate thinness.

### For SEM

SEM preparation is generally simpler, but non-conductive samples (most biological specimens, many ceramics, polymers) must be coated with a thin conductive layer — typically gold, platinum, or carbon sputtered onto the surface in a vacuum coater. Without this coating, the electron beam charges the surface, causing image distortion and beam deflection.

Biological specimens also require dehydration (since water evaporates instantly in the vacuum), typically through a series of ethanol or acetone baths followed by critical-point drying — a process that replaces the liquid with supercritical CO2 to prevent surface tension from collapsing delicate structures during drying.

## Analytical Techniques: More Than Pretty Pictures

Modern electron microscopes don't just make images — they analyze composition and structure at the nanoscale.

### Energy-Dispersive X-ray Spectroscopy (EDS/EDX)

When the electron beam strikes a specimen, it knocks inner-shell electrons out of atoms. As outer-shell electrons fall to fill the vacancy, they emit X-rays at energies characteristic of each element. By measuring these X-ray energies, EDS identifies which elements are present and in what proportions — effectively a chemical analysis at the nanometer scale.

EDS can map elemental distributions across a surface or cross-section, showing exactly where specific elements concentrate. This is invaluable in [chemistry](/chemistry), metallurgy, semiconductor quality control, and failure analysis.

### Electron Diffraction

When electrons pass through a crystalline material in a TEM, they diffract — their wave nature causes them to scatter at specific angles determined by the crystal structure. The resulting diffraction pattern (a pattern of spots) reveals the crystal structure, orientation, and lattice parameters of the specimen.

This connects electron microscopy to [crystallography](/crystallography) and is essential for identifying phases in multi-phase materials, characterizing crystal defects, and determining orientation relationships between grains.

### Electron Energy-Loss Spectroscopy (EELS)

Some electrons passing through a specimen lose energy by exciting electronic transitions in specimen atoms. The energy lost corresponds to specific electronic transitions, providing information about chemical bonding, oxidation states, and electronic structure — more detailed chemical information than EDS.

EELS is particularly powerful for light elements (carbon, nitrogen, oxygen) where EDS sensitivity is limited, and for mapping chemical bonding states at the atomic scale.

## Cryo-Electron Microscopy: The Revolution in Biology

Cryo-EM earned the 2017 Nobel Prize in Chemistry for Jacques Dubochet, Joachim Frank, and Richard Henderson because it solved a problem that had frustrated biologists for decades: how to see the 3D structure of proteins and other biological molecules without crystallizing them.

### The Problem With Biological Electron Microscopy

Traditional TEM requires specimens in a vacuum, which means biological samples must be dehydrated and chemically fixed — processes that inevitably alter the native structure. [X-ray crystallography](/x-ray-crystallography) could determine protein structures, but only if you could grow crystals, and many important proteins stubbornly refuse to crystallize. Membrane proteins, large complexes, and flexible molecules were particularly resistant.

### The Cryo-EM Solution

Flash-freeze a thin film of protein solution so quickly (plunging into liquid ethane at -180 degrees Celsius) that water vitrifies — becomes amorphous glass rather than crystalline ice. Crystalline ice damages biological structures; vitreous ice preserves them. The frozen specimen is then imaged at cryogenic temperatures in a modified TEM.

Individual proteins appear as faint, noisy blobs in each image. But by collecting hundreds of thousands of images of the same protein in different orientations, sophisticated software can reconstruct the 3D structure at near-atomic resolution (better than 3 angstroms for many structures).

### The Impact

Cryo-EM has been called the "resolution revolution." Before 2013, cryo-EM could barely achieve 1 nm resolution — interesting but not competitive with X-ray crystallography. Then direct electron detectors (far more sensitive than previous CCD cameras) and improved computational methods pushed resolution below 3 angstroms, and suddenly cryo-EM could determine structures that crystallography couldn't.

The SARS-CoV-2 spike protein — the key to developing COVID-19 vaccines — was solved by cryo-EM within weeks of the virus's genome being published in January 2020. Moderna and BioNTech used this structure to design their mRNA vaccines. Without cryo-EM, the vaccine development timeline would have been significantly longer.

Today, about half of all new protein structures in the Protein Data Bank are determined by cryo-EM, up from less than 5% a decade ago. The technique has fundamentally changed structural [biology](/biology) and drug discovery.

## Aberration Correction: Seeing Atoms Clearly

The electromagnetic lenses in electron microscopes are imperfect. They suffer from aberrations — analogous to the distortions in cheap camera lenses — that blur the image and limit resolution far below the theoretical wavelength limit.

The dominant aberration in round electron lenses is spherical aberration: electrons passing through the outer parts of the lens focus at different points than those passing through the center. Otto Scherzer proved in 1936 that spherical aberration in round electron lenses is fundamentally unavoidable (Scherzer's theorem). This seemed to place a permanent ceiling on resolution.

But Scherzer's proof had a loophole: it applied only to static, round lenses. Non-round (multipole) elements could correct spherical aberration in principle. Building such correctors took another 60 years — requiring mechanical precision, electronic stability, and computational control that didn't exist until the late 1990s.

When aberration-corrected microscopes finally arrived around 2000, the improvement was immediate and dramatic. Resolution jumped from about 1.5 angstroms to below 0.5 angstroms. Individual atoms became clearly visible. Scientists could see exactly where every atom sat in a crystal lattice, identify atomic-scale defects, and map chemical composition column by column.

Aberration correction has since become standard on high-end TEMs, and the technique continues to improve. Sub-0.5-angstrom resolution is now routine on the best instruments, pushing toward the fundamental limits set by thermal vibration of the atoms themselves.

## Electron Microscopy in Industry

### Semiconductor Manufacturing

The semiconductor industry is arguably the largest industrial user of electron microscopy. As transistors have shrunk below 5 nm, optical microscopy is completely inadequate for quality control. SEMs inspect wafer patterns for defects. TEMs verify that gate oxide layers are the correct thickness (often just a few atoms). Focused ion beam instruments prepare cross-sections through specific transistors for inspection.

Without electron microscopy, modern chip manufacturing would be impossible — you can't make what you can't see, and you can't see 3-nm features with visible light.

### Materials Failure Analysis

When a bridge component cracks, an engine part fails, or a medical implant breaks, electron microscopy reveals why. The fracture surface under SEM tells an expert whether failure was ductile or brittle, whether fatigue was involved, whether corrosion contributed, and often where the crack initiated.

SEM with EDS can identify contaminating inclusions that may have nucleated the crack. TEM can reveal microstructural defects that weakened the material. This forensic capability makes electron microscopy essential in [civil engineering](/civil-engineering), aerospace, and product liability investigations.

### Pharmaceutical and Biotech

Drug developers use cryo-EM to determine the structures of drug targets (proteins, enzymes, receptors) and visualize how drug candidates bind to them. This structure-based drug design accelerates the development process enormously — you can see exactly where a drug molecule fits and design modifications rationally rather than by trial and error.

Vaccine development, antibody characterization, and gene therapy vector analysis all rely on electron microscopy to visualize structures that no other technique can reveal.

## Limitations and Challenges

### Vacuum Requirement

Electrons scatter off gas molecules, so all electron microscopes operate in vacuum (typically 10^-5 to 10^-8 Pa). This prevents imaging of wet or volatile samples in their natural state. Environmental SEM (ESEM) allows limited-pressure imaging with water vapor, and cryo methods preserve hydrated structures, but true in-liquid, in-atmosphere imaging at high resolution remains extremely difficult.

### Beam Damage

The electron beam carries significant energy, and sensitive specimens — particularly biological samples and many polymers — can be damaged by the beam itself. Radiation damage limits the total electron dose a specimen can receive, which in turn limits the achievable signal-to-noise ratio and resolution for sensitive materials.

Cryo-EM partially addresses this by keeping specimens frozen (which slows radiation damage) and by spreading the total dose across many identical particles. But beam damage remains a fundamental constraint, especially for in-situ experiments where you want to watch processes happen in real time.

### Cost and Expertise

High-end electron microscopes are expensive instruments. An aberration-corrected TEM with analytical capabilities might cost $5-10 million, plus ongoing costs for maintenance, liquid nitrogen, and specialist operators. The barrier to entry is high, which is why electron microscopy facilities are typically shared resources at universities and national labs.

Operating an electron microscope effectively requires substantial training. Aligning the electron-optical column, optimizing imaging conditions, preparing specimens, and interpreting results all demand expertise that takes years to develop.

## The Future of Electron Microscopy

### In-Situ and Operando Microscopy

Specialized specimen holders now allow scientists to observe materials while they're being heated, cooled, strained, exposed to gases, or electrochemically cycled — inside the microscope. You can watch a [battery technology](/battery-technology) electrode degrade in real time, see catalytic nanoparticles change shape during reactions, or observe crystal growth atom by atom.

This transition from post-mortem analysis to real-time observation is one of the most exciting frontiers in the field.

### Machine Learning and Automated Analysis

Modern electron microscopes generate enormous datasets — a single cryo-EM session can produce terabytes of images. Machine learning is increasingly used to automate particle picking, image classification, and 3D reconstruction. In SEM, automated defect detection algorithms scan wafer images far faster than human operators.

### 4D-STEM

Scanning the electron beam across a specimen while recording a full diffraction pattern at each pixel (rather than just a single signal) creates a four-dimensional dataset that contains vastly more information than conventional images. This "4D-STEM" approach enables strain mapping, electric field measurement, and phase identification at the nanoscale — opening analysis capabilities that didn't exist five years ago.

## Why It Matters

Electron microscopy has shaped modern science and technology more than most people realize. The structure of [cell biology](/cell-biology) — organelles, membranes, cytoskeleton — was revealed by TEM. The mechanisms of material failure are understood through SEM. Semiconductor manufacturing depends on electron microscopy for quality control. Drug development increasingly relies on cryo-EM for [structural biology](/structural-biology).

Whenever you need to see something too small for light — and in science and engineering, you need this constantly — electron microscopy is how it gets done. It transformed our understanding of the nanoscale world and continues to push the boundaries of what we can observe and measure.

## Key Takeaways

Electron microscopy uses focused electron beams to achieve imaging resolution far beyond the limits of optical microscopy — down to individual atoms with modern aberration-corrected instruments. TEM reveals internal structure by transmitting electrons through thin specimens, while SEM maps surface topography by scanning a focused beam. Cryo-EM has transformed structural biology by enabling near-atomic-resolution imaging of proteins without crystallization. Combined with analytical techniques like EDS, EELS, and electron diffraction, electron microscopy provides both structural and chemical information at the nanoscale, making it indispensable across [materials science](/materials-science), biology, semiconductor manufacturing, and medicine.
