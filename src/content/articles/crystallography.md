---
title: "What Is Crystallography?"
slug: crystallography
description: "Crystallography determines crystal atomic structure using X-ray diffraction. Learn how it works and why it shapes modern science. Discover the key facts, his..."
category: science
tags: ["crystallography", "crystals", "atomic structure", "x-ray diffraction", "materials science", "chemistry", "physics"]
heroImage: "/images/articles/crystallography-hero.webp"
heroAlt: "Editorial photograph representing the concept of crystallography"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2502
tier: "2"
relatedArticles: ["cosmology", "anatomy", "algorithms", "acoustics"]
externalSources:
  - title: "International Union of Crystallography"
    url: "https://www.iucr.org/"
  - title: "Nobel Prize - Bragg Father and Son (1915)"
    url: "https://www.nobelprize.org/prizes/physics/1915/summary/"
  - title: "Protein Data Bank"
    url: "https://www.rcsb.org/"
  - title: "Cambridge Crystallographic Data Centre"
    url: "https://www.ccdc.cam.ac.uk/"
  - title: "American Crystallographic Association"
    url: "https://www.amercrystalassn.org/"
faq:
  - q: "What is the difference between a crystal and an amorphous solid?"
    a: "A crystal has atoms arranged in a regular, repeating three-dimensional pattern (a lattice) that extends throughout the material. An amorphous solid—like glass, rubber, or plastic—has atoms arranged randomly with no long-range order. This structural difference affects physical properties: crystals have sharp melting points and can split along flat planes, while amorphous solids soften gradually and break irregularly."
  - q: "How small can crystallography see?"
    a: "X-ray crystallography can resolve atomic positions to approximately 0.5 to 2.0 angstroms (0.05 to 0.2 nanometers). For comparison, a carbon-carbon bond is about 1.5 angstroms long. Electron crystallography and cryo-EM can achieve similar or slightly lower resolutions. This is sufficient to determine the positions of individual atoms within a molecule."
  - q: "Do you need a large crystal for crystallography?"
    a: "Traditional X-ray crystallography requires crystals large enough to diffract X-rays measurably—typically at least 0.1 millimeters in each dimension for laboratory sources. Synchrotron radiation sources can work with smaller crystals. Serial crystallography using X-ray free-electron lasers can analyze microcrystals just a few micrometers across. Powder diffraction doesn't need single crystals at all."
  - q: "What is the most important discovery made using crystallography?"
    a: "The determination of DNA's double helix structure by James Watson and Francis Crick in 1953, based on Rosalind Franklin's X-ray diffraction images, is widely considered the most significant. However, crystallography has enabled numerous other foundational discoveries, including the structures of penicillin, insulin, hemoglobin, ribosomes, and thousands of other biological molecules essential to medicine and biology."
  - q: "Can crystallography be used on non-crystalline materials?"
    a: "Related techniques can analyze non-crystalline materials. Small-angle X-ray scattering (SAXS) studies the overall shape and size of molecules in solution. Pair distribution function (PDF) analysis examines local atomic arrangements in amorphous materials and liquids. Cryo-electron microscopy determines structures of biological molecules without crystallization. But classical X-ray crystallography specifically requires crystalline samples."
---

# What Is Crystallography?

Crystallography is the scientific discipline that determines the arrangement of atoms within crystalline solids by analyzing how electromagnetic radiation---typically X-rays---diffracts when passing through a crystal lattice. It reveals three-dimensional atomic structures with precision measured in fractions of a nanometer, providing the foundational structural data for fields ranging from drug design to semiconductor engineering.

## Why Atoms Arranged in Patterns Changed Everything

There's a reason crystallography has produced 29 Nobel Prizes---more than any other single scientific technique. Before crystallography, chemistry was essentially blind. Scientists knew which atoms were in a molecule and roughly how many, but they couldn't see how those atoms were arranged in three-dimensional space.

Imagine trying to understand how an engine works if you could only weigh the parts but never see them assembled. That was chemistry before crystallography. You knew the ingredients but not the recipe.

Max von Laue changed this in 1912 when he demonstrated that X-rays passing through a copper sulfate crystal produced a distinct pattern of spots on a photographic plate. This proved two things simultaneously: that X-rays were electromagnetic waves (their wavelength was previously unknown) and that crystals were made of regularly repeating arrangements of atoms. He won the 1914 Nobel Prize in Physics.

The following year, William Henry Bragg and his 22-year-old son William Lawrence Bragg developed the mathematics for interpreting those diffraction patterns---Bragg's Law. The younger Bragg remains the youngest Nobel laureate in physics, winning at age 25 in 1915. Their equation, nλ = 2d sin θ, relates the wavelength of X-rays (λ), the spacing between crystal planes (d), and the angle of diffraction (θ). Simple. Elegant. And it unlocked the atomic world.

## How X-Ray Diffraction Actually Works

Let's walk through the process, because understanding the mechanism reveals why crystallography is so powerful.

### The Crystal as a Diffraction Grating

A crystal is a repeating arrangement of atoms in three dimensions. The smallest repeating unit---called the unit cell---tiles through space like bricks in a wall (but in 3D). This regularity is the key to everything.

When X-rays hit a crystal, each atom scatters the X-rays in all directions. In most directions, the scattered waves from different atoms are out of phase and cancel each other out (destructive interference). But in specific directions---determined by the spacing between atomic planes and the X-ray wavelength---the scattered waves line up perfectly (constructive interference), producing intense spots of diffracted X-rays.

These spots, recorded on a detector, form a pattern that encodes the crystal's atomic structure. The positions of the spots reveal the dimensions and symmetry of the unit cell. The intensities of the spots contain information about where atoms are located within the unit cell.

### From Pattern to Structure

Converting a diffraction pattern into an atomic structure is a multi-step process. And here's where it gets tricky.

The diffraction spots give you the amplitude of each diffracted wave (from the spot's intensity) but not its phase (the wave's timing relative to other waves). This is the famous "phase problem" in crystallography---you're trying to reconstruct a 3D image from data that's missing half the information.

Solutions to the phase problem include:

**Molecular replacement**: If the structure of a similar molecule is already known, its diffraction pattern can be used as a starting model. This works well for protein variants and related molecules.

**Isomorphous replacement**: Heavy atoms (mercury, platinum, gold) are soaked into the crystal without disturbing its structure. The differences in diffraction between native and heavy-atom crystals reveal phase information. This method solved the first protein crystal structures in the 1950s and 1960s.

**Anomalous scattering**: Certain atoms scatter X-rays anomalously at specific wavelengths, creating measurable differences that provide phase information. Selenium-substituted proteins are commonly used for this approach.

**Direct methods**: For small molecules, mathematical relationships between diffraction intensities can determine phases directly. This approach, developed by Jerome Karle and Herbert Hauptman (Nobel Prize 1985), revolutionized small-molecule crystallography.

Once phases are determined, an electron density map is calculated---a three-dimensional map showing where electrons are concentrated. Since electrons surround atoms, the peaks in this map reveal atomic positions. A molecular model is built into the electron density and refined iteratively until it best explains the observed diffraction data.

## The Seven Crystal Systems

All crystals belong to one of seven crystal systems, defined by the relationships between the unit cell's edges and angles.

**Cubic**: All edges equal, all angles 90 degrees. Diamond, table salt, and gold crystallize in cubic systems. Highly symmetric.

**Tetragonal**: Two edges equal, one different, all angles 90 degrees. Think of a stretched or compressed cube. Tin and zircon are tetragonal.

**Orthorhombic**: All three edges different, all angles 90 degrees. Like a rectangular brick. Sulfur and topaz crystallize here.

**Hexagonal**: Two equal edges at 120 degrees, one different edge at 90 degrees. Beryl (emerald) and graphite belong here.

**Trigonal**: Similar to hexagonal but with three-fold rotational symmetry. Quartz and calcite are trigonal.

**Monoclinic**: All edges different, one angle not 90 degrees. The most common system for organic and pharmaceutical crystals. Gypsum is monoclinic.

**Triclinic**: All edges different, no angles 90 degrees. The lowest symmetry. Albite feldspar is triclinic.

Within these seven systems, there are 14 Bravais lattices (accounting for face-centered and body-centered variations) and 230 space groups (incorporating all possible symmetry operations). Every crystal that has ever existed or will ever exist belongs to one of these 230 space groups.

## Crystallography's Greatest Hits

The history of crystallography is a highlight reel of scientific breakthroughs.

### DNA's Double Helix

In 1952, Rosalind Franklin produced "Photo 51"---an X-ray diffraction image of DNA that became one of the most important photographs in scientific history. The X-shaped pattern in the image immediately revealed DNA's helical structure. The spacing of the features indicated the helix's dimensions.

James Watson and Francis Crick used this data (along with chemical knowledge from Erwin Chargaff about base pairing) to build their famous double helix model in 1953. Watson, Crick, and Maurice Wilkins received the 1962 Nobel Prize. Franklin had died of ovarian cancer in 1958 at age 37---likely caused by her extensive X-ray exposure---and Nobel Prizes aren't awarded posthumously.

The DNA structure revealed how genetic information is stored and copied, launching the [molecular biology](/molecular-biology) revolution.

### Protein Structures

Max Perutz and John Kendrew solved the first protein crystal structures in the late 1950s---hemoglobin and myoglobin, respectively. These were monumental achievements. Proteins contain thousands of atoms in specific 3D arrangements, and determining those arrangements from diffraction data required years of work with room-sized computers.

Today, the Protein Data Bank (PDB) contains over 215,000 experimentally determined structures, mostly from crystallography. These structures are the foundation of [structural biology](/structural-biology) and drug design. When pharmaceutical companies design drugs to fit into a protein's active site, they're using crystallographic data to visualize that molecular pocket.

### Penicillin and Drug Design

Dorothy Hodgkin determined the structure of penicillin in 1945 and vitamin B12 in 1956---both using [X-ray crystallography](/x-ray-crystallography). She won the 1964 Nobel Prize in Chemistry. Her work on penicillin's structure was initially controversial (the four-membered beta-lactam ring was considered too strained to exist), but the crystal structure settled the debate definitively.

Structure-based drug design---designing drugs to fit the 3D shape of their target---is now standard in pharmaceutical development. HIV protease inhibitors, developed in the 1990s, were among the first major successes. Crystallographers determined the protease's structure, medicinal chemists designed molecules to block its active site, and the resulting drugs transformed HIV from a death sentence into a manageable condition.

### The Ribosome

The ribosome---the molecular machine that translates genetic code into proteins---was crystallized and its structure determined in 2000. Venkatraman Ramakrishnan, Thomas Steitz, and Ada Yonath shared the 2009 Nobel Prize for this achievement. The ribosome structure revealed how [anatomy](/anatomy) at the molecular level---the precise arrangement of RNA and proteins---creates a functional machine.

Understanding the ribosome's structure also explained how many antibiotics work: they bind to specific sites on bacterial ribosomes, disrupting protein synthesis. This knowledge guides the design of new antibiotics---critically important as antibiotic resistance grows.

## Beyond X-Rays: Modern Crystallographic Techniques

While X-ray diffraction remains the primary method, several related techniques have expanded crystallography's reach.

### Neutron Diffraction

Neutrons diffract off atomic nuclei rather than electrons. This makes neutron diffraction particularly valuable for locating hydrogen atoms (which have very few electrons and are nearly invisible to X-rays), distinguishing between elements with similar numbers of electrons, and studying magnetic structures.

Neutron sources are expensive---they require nuclear reactors or spallation sources---so neutron crystallography is less common than X-ray work. But for specific problems, particularly in [materials science](/materials-science) and chemistry, it provides information X-rays can't.

### Electron Diffraction

Electrons interact much more strongly with matter than X-rays, allowing very small crystals to be studied. Electron diffraction is particularly useful for nanocrystalline materials and thin films.

The revolution in cryo-[electron microscopy](/electron-microscopy) (cryo-EM) has transformed structural biology since about 2013. Cryo-EM determines structures of biological molecules frozen in thin films of ice---no crystals required. This bypasses crystallography's biggest bottleneck: growing good crystals.

Single-particle cryo-EM now routinely achieves resolutions below 3 angstroms for large protein complexes, and the 2017 Nobel Prize in Chemistry recognized the technique's development. For large, flexible molecular complexes that resist crystallization, cryo-EM has become the method of choice.

### X-Ray Free-Electron Lasers

X-ray free-electron lasers (XFELs) produce X-ray pulses so intense and brief (femtoseconds---millionths of a billionth of a second) that they can capture diffraction patterns from tiny crystals before radiation damage destroys them. This "diffraction before destruction" approach enables serial femtosecond crystallography, where thousands of microcrystals are exposed one at a time, and the data from all of them is merged.

XFELs have been particularly valuable for studying membrane proteins (which are notoriously difficult to grow as large crystals), time-resolved structural changes during chemical reactions, and structures of radiation-sensitive materials.

### Powder Diffraction

Not everything forms nice single crystals. Powder diffraction analyzes polycrystalline samples---materials composed of many tiny, randomly oriented crystallites. The diffraction pattern is a series of concentric rings rather than discrete spots.

Powder diffraction is indispensable in industry. It identifies crystalline phases in geological samples, pharmaceutical formulations, cement, ceramics, and metals. Every batch of pharmaceutical product is checked by powder diffraction to confirm the drug crystallized in the correct form---because different crystal forms (polymorphs) can have dramatically different bioavailability. A famous case: ritonavir, an HIV drug, had to be reformulated in 1998 when an unexpected polymorph appeared during manufacturing, rendering the original formulation useless.

## Crystallography in Materials Science

Beyond biological molecules, crystallography is fundamental to understanding materials.

**Semiconductors**: The electronic properties of silicon, germanium, and compound semiconductors depend entirely on their crystal structure. Semiconductor manufacturing requires exquisite control over crystal perfection---a single misplaced atom per million can affect device performance. Crystallographic techniques monitor crystal quality throughout the manufacturing process.

**Metals and alloys**: Crystal structure determines a metal's strength, ductility, hardness, and fatigue resistance. Steel's properties, for instance, depend on whether the iron is in a body-centered cubic (ferrite), face-centered cubic (austenite), or body-centered tetragonal (martensite) arrangement. Metallurgists use crystallographic analysis to optimize heat treatments and alloy compositions.

**Ceramics**: High-temperature superconductors, piezoelectric materials, battery electrode materials---all are crystalline, and their properties depend on crystal structure. The discovery of high-temperature [superconductivity](/superconductivity) in ceramic oxides (Nobel Prize 1987) was a crystallographic story: understanding the layered perovskite structure was essential to finding new superconducting compositions.

**Minerals and geology**: Crystallography is the foundation of mineralogy. There are approximately 5,900 known mineral species, each defined by its chemical composition and crystal structure. Geological processes---magma crystallization, metamorphism, weathering---produce specific crystal structures under specific conditions, and crystallographic analysis reveals the conditions under which rocks formed.

## The Computational Revolution

Modern crystallography is inseparable from computation. Determining a crystal structure requires processing enormous datasets and solving complex mathematical problems.

In the early days, structure determination could take years of manual calculation. Dorothy Hodgkin spent years on the insulin structure. Today, a routine small-molecule structure can be determined in hours, from data collection through refinement.

**Structure prediction**: [Algorithms](/algorithms) like AlphaFold (developed by DeepMind, published 2020) can predict protein structures from amino acid sequences with remarkable accuracy. AlphaFold2's performance at the CASP14 competition was called a "solution" to the protein structure prediction problem---an assessment that's partly true and partly overstated. AlphaFold predictions are incredibly useful but don't replace experimental structures for drug design and mechanistic studies.

**Automated data collection**: Modern synchrotron beamlines collect diffraction data automatically, with robotic sample changers processing hundreds of crystals per day. Software pipelines process the data in real time, flagging promising datasets for detailed analysis.

**Database mining**: The Cambridge Structural Database (over 1.2 million small-molecule structures) and the Protein Data Bank (over 215,000 macromolecular structures) are invaluable research resources. Machine learning applied to these databases identifies structural trends, predicts crystal packing, and guides materials design.

## Growing Crystals: The Art Behind the Science

Here's the dirty secret of crystallography: the hardest part usually isn't collecting data or solving the structure. It's growing the crystal.

Crystallization requires a solution to become supersaturated---meaning it contains more dissolved material than it can stably hold. Crystals nucleate and grow as the excess material comes out of solution. But achieving this in a controlled way that produces single crystals of sufficient size and quality is fiendishly difficult.

For small molecules, methods include slow evaporation, vapor diffusion, cooling, and sublimation. For proteins, the standard approach is vapor diffusion: a drop containing protein and precipitant is sealed in a chamber, and as water slowly evaporates from the drop, the protein concentration increases until crystallization occurs.

Protein crystallization is notoriously unpredictable. Many proteins resist crystallization entirely. Those that do crystallize may require months of screening hundreds of different solution conditions---varying pH, salt concentration, precipitant type, temperature, and additives. Robots now automate this screening, but the process remains partly empirical.

Some biological molecules---membrane proteins, large flexible complexes, intrinsically disordered proteins---are particularly resistant to crystallization. This is where cryo-EM's advantage as a crystal-free technique becomes decisive.

## The Future

Crystallography continues evolving. Time-resolved crystallography captures structural changes as they happen---watching chemical bonds break and form in real time. Micro-electron diffraction determines structures from crystals smaller than a micrometer. Machine learning accelerates every stage from crystal growth [optimization](/optimization) to structure solution.

The integration of experimental crystallography with computational prediction---using tools like AlphaFold as starting models for experimental refinement---is creating a feedback loop that accelerates structural discovery.

One thing remains constant: if you want to understand how matter behaves, you need to know how its atoms are arranged. Crystallography answers that question with unmatched precision. After more than a century, it remains one of science's most powerful tools for revealing the hidden [architecture](/architecture) of the physical world.

## Key Takeaways

Crystallography determines atomic structures by analyzing how X-rays (or neutrons, or electrons) diffract through crystalline materials. Its fundamental equation---Bragg's Law---connects diffraction angles to atomic spacings. The technique has produced 29 Nobel Prizes and enabled discoveries from DNA's double helix to HIV drug design. Modern methods include synchrotron X-ray sources, X-ray free-electron lasers, cryo-electron microscopy, and powder diffraction, each suited to different materials and problems. Computational advances---from structure prediction algorithms to database mining---have accelerated the field dramatically. Crystallography remains essential across chemistry, biology, materials science, geology, and pharmaceutical development, providing the structural foundation on which much of modern science is built.
