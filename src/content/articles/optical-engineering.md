---
title: "What Is Optical Engineering?"
slug: optical-engineering
description: "Optical engineering designs systems that control light. Learn how lenses, lasers, fiber optics, and imaging systems shape technology you use every day."
category: technology
tags: ["optical engineering", "optics", "photonics", "laser", "fiber optics", "lens design", "optical instruments"]
heroImage: "/images/articles/optical-engineering-hero.webp"
heroAlt: "Precision optical lens assembly with laser beams passing through engineered glass elements"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2831
tier: "2"
relatedArticles: ["optics", "photonics", "laser-technology", "physics", "electrical-engineering"]
externalSources:
  - title: "SPIE - The International Society for Optics and Photonics"
    url: "https://spie.org/about-spie"
  - title: "Optica (formerly OSA)"
    url: "https://www.optica.org/"
  - title: "MIT Lincoln Laboratory - Optical Engineering"
    url: "https://www.ll.mit.edu/r-d/technology-office/optical-engineering"
  - title: "Britannica - Optics"
    url: "https://www.britannica.com/science/optics"
faq:
  - q: "What is the difference between optical engineering and optics?"
    a: "Optics is the branch of physics studying light behavior. Optical engineering is the applied discipline that uses optical principles to design and build real systems — cameras, telescopes, fiber optic networks, laser systems. Think of optics as the science and optical engineering as the practice."
  - q: "What degree do you need for optical engineering?"
    a: "Most optical engineers hold a bachelor's or master's degree in optical engineering, physics, electrical engineering, or a related field. The University of Arizona and University of Rochester have particularly well-known optical engineering programs. Some positions in research require a PhD."
  - q: "How much do optical engineers earn?"
    a: "In the United States, optical engineers earn a median salary of approximately $95,000-$110,000 per year as of 2025. Senior engineers and those in specialized fields like semiconductor lithography or defense optics can earn significantly more, often exceeding $150,000."
  - q: "Is optical engineering a growing field?"
    a: "Yes. Growth in autonomous vehicles (LIDAR), augmented reality, telecommunications (fiber optics), medical imaging, and semiconductor manufacturing is driving strong demand for optical engineers. The photonics industry alone is valued at over $800 billion globally."
---

# What Is Optical Engineering?

Optical engineering is the branch of engineering concerned with designing, building, and testing systems that generate, control, or detect light. If a device uses lenses, mirrors, lasers, fiber optics, cameras, or sensors — an optical engineer probably had a hand in making it work.

## More Than Just Lenses

When most people hear "optical engineering," they picture someone grinding lenses for glasses. And sure, that's part of it — but it's like saying electrical engineering is about wiring houses. The field is vastly bigger.

Your smartphone camera? Optical engineering. Those tiny lenses — often five or six stacked together, each thinner than a millimeter — are precision-designed to correct for color distortion, field curvature, and diffraction. The fact that a phone camera in 2025 can rival a professional camera from 2010 is an optical engineering triumph.

The internet runs on light. Fiber optic cables carry 99% of intercontinental data as pulses of laser light bouncing through glass fibers thinner than a human hair. Optical engineers design the fibers, the lasers, the amplifiers, and the detectors that make this possible.

Medical imaging — MRI machines, endoscopes, OCT (optical coherence tomography) for eye exams — all require optical systems designed to exacting specifications. Semiconductor manufacturing uses extreme ultraviolet lithography, where light with a wavelength of just 13.5 nanometers etches circuits onto silicon chips. Without optical engineering, your computer wouldn't exist.

## The Physics Foundation

Optical engineering builds on [optics](/optics) — the branch of physics that studies how light behaves. You need to understand the fundamentals before you can engineer with them.

### How Light Travels

Light is electromagnetic radiation. It behaves as both a wave and a particle (photon), depending on the experiment — a duality that confused physicists for centuries and still feels strange today. For most optical engineering applications, the wave model works perfectly. Light has a wavelength (which determines its color), an amplitude (which determines its brightness), and a phase (which determines how waves interact with each other).

When light hits an interface between two materials — say, air and glass — three things happen: some reflects back, some transmits through, and some absorbs. The exact proportions depend on the wavelength, the angle, and the optical properties of both materials. Snell's law, published in 1621, describes how light bends (refracts) when crossing between materials. It's one of the first equations every optical engineer memorizes.

### Diffraction: Light's Stubbornness

Light doesn't travel in perfectly straight lines. When it passes through a small opening or around an edge, it spreads out — this is diffraction. The smaller the opening relative to the wavelength, the more the spreading.

This matters enormously in engineering. It sets a fundamental limit on how sharp an image can be. No matter how perfect your lens, diffraction prevents you from resolving details smaller than roughly half the wavelength of light being used. For visible light (400-700 nm), that's around 200-350 nanometers.

This is why semiconductor manufacturers switched to extreme ultraviolet (EUV) light at 13.5 nm — shorter wavelengths diffract less and allow finer features on chips. It's also why radio telescopes need to be enormous — radio waves are long, so you need massive dishes to achieve useful resolution.

### Interference: When Waves Meet

When two light waves overlap, they can reinforce each other (constructive interference) or cancel each other out (destructive interference). This is the basis for anti-reflective coatings on glasses and camera lenses — a thin film creates a reflected wave that destructively interferes with the original reflection, reducing glare.

Interferometry uses this principle for incredibly precise measurements. LIGO, the gravitational wave detector, uses laser interferometry to detect length changes of 10^-19 meters — about one ten-thousandth the diameter of a proton. That's optical engineering at its most extreme.

## Lens Design: The Classic Challenge

Designing a lens system is where art meets physics. A single lens bends light, but it also introduces aberrations — errors that blur, distort, or color-shift the image. The goal of lens design is to use multiple elements to cancel out each other's aberrations.

### The Seven Deadly Aberrations

Optical engineers traditionally deal with seven primary aberrations:

**Spherical aberration** occurs when light near the edge of a lens focuses at a different point than light near the center. It's why cheap magnifying glasses produce blurry images.

**Coma** causes off-axis point sources to appear comet-shaped rather than round. The name literally comes from "comet."

**Astigmatism** means the lens focuses horizontal and vertical lines at different distances. (Yes, the eye condition is named after the optical phenomenon.)

**Field curvature** means the focus surface is curved rather than flat. This was a major problem for early photography — the edges of film were at a different distance from the lens than the center.

**Distortion** — either barrel (bulging outward) or pincushion (pinching inward) — warps straight lines. Wide-angle lenses are notorious for barrel distortion.

**Chromatic aberration** happens because different wavelengths of light refract by different amounts. Red light focuses at a different point than blue light, creating colored fringes around objects.

**Lateral color** is similar but affects magnification rather than focus — different colors produce slightly different-sized images.

A modern camera lens might use 10-15 glass elements of different shapes, thicknesses, and glass types, all meticulously calculated to minimize these aberrations simultaneously. The math is brutal — optical engineers use ray-tracing software like Zemax or Code V to model how millions of light rays propagate through the system.

### Aspheric and Freeform Optics

Traditional lenses have spherical surfaces because spheres are easy to manufacture — you just grind two surfaces against each other and they naturally become spherical. But spherical surfaces aren't ideal for all applications.

Aspheric lenses have surfaces that deviate from a sphere, allowing better aberration correction with fewer elements. Your phone camera uses aspheric plastic lenses — they'd be impossibly heavy if they needed as many spherical elements to achieve the same image quality.

Freeform optics take this further. These surfaces have no axis of symmetry at all. They're computationally designed and precision-manufactured using diamond turning or mold injection. Freeform optics are enabling next-generation AR/VR headsets, head-up displays, and compact spectrometers.

## Laser Engineering

Lasers are among the most important tools in an optical engineer's arsenal. The word stands for Light Amplification by Stimulated Emission of Radiation, and the concept — first demonstrated by Theodore Maiman in 1960 — changed engineering forever.

### How Lasers Work

Every laser has three core components: a gain medium (the material that amplifies light), a pump source (energy input that excites the gain medium), and a resonant cavity (mirrors that bounce light back and forth through the gain medium, amplifying it with each pass).

The magic of stimulated emission is that the emitted photon has the same wavelength, phase, and direction as the photon that triggered it. This produces coherent light — all the waves marching in lockstep. That coherence is what makes laser light so special. It stays collimated over long distances, can be focused to incredibly tiny spots, and interferes cleanly.

### Types and Applications

Different gain media produce different wavelengths:

- **CO2 lasers** (10.6 micrometers, infrared) — industrial cutting and welding. A 4-kilowatt CO2 laser can cut through 20mm steel plate.
- **Nd:YAG lasers** (1064 nm, near-infrared) — medical procedures, material processing, military range-finding.
- **Excimer lasers** (193 nm, ultraviolet) — LASIK eye surgery and semiconductor lithography.
- **Fiber lasers** — telecommunications, increasingly replacing CO2 for industrial cutting because they're more efficient and reliable.
- **Semiconductor diode lasers** — barcode scanners, optical disc drives, fiber optic communications, laser pointers.

The semiconductor laser diode is probably the most ubiquitous laser. Billions are manufactured annually. They're in your Blu-ray player, your fiber internet connection, your computer mouse, and your phone's face-recognition system.

## Fiber Optics: Light as Information

Fiber optics might be optical engineering's greatest gift to the modern world. The idea is simple: trap light inside a thin glass fiber using total internal reflection, and use it to carry information.

A single optical fiber can carry terabits of data per second — more bandwidth than thousands of copper wires combined. Modern fibers use wavelength-division multiplexing (WDM), sending dozens of different wavelengths of light through the same fiber simultaneously. Each wavelength carries its own data stream. It's like having multiple lanes on a highway, except each lane is a different color of light.

The fiber itself is remarkable. The core is ultra-pure silica glass — so transparent that if the ocean were made of the same material, you could see the bottom from the surface. Losses are measured in fractions of a decibel per kilometer. Submarine cables span thousands of kilometers with optical amplifiers (erbium-doped fiber amplifiers) boosting the signal every 60-80 km.

The global undersea fiber optic network carries roughly 95% of intercontinental data traffic. Without optical engineering, the internet as you know it simply wouldn't exist. Those cat videos travel as pulses of light across ocean floors before reaching your screen.

## Imaging Systems

Optical engineers design the imaging systems that let us see what our eyes can't.

### Telescopes

Astronomical telescopes are optical engineering at grand scale. The James Webb Space Telescope's primary mirror is 6.5 meters across, made of 18 gold-coated beryllium segments. It observes infrared light from the earliest galaxies, some 13 billion light-years away. The optical alignment requirements are insane — each mirror segment must be positioned to within 10 nanometers.

Ground-based telescopes face an additional challenge: atmospheric turbulence. Adaptive optics systems measure atmospheric distortion hundreds of times per second and deform a flexible mirror to compensate in real time. This technology, developed in the 1990s, essentially removed the atmosphere as a limitation for ground-based astronomy.

### Microscopes

Going the other direction, optical engineers build microscopes that approach and even exceed the classical diffraction limit. Super-resolution techniques like STED, PALM, and SIM (which earned the 2014 Nobel Prize in Chemistry) can image biological structures at resolutions below 50 nanometers — shattering what was thought to be a fundamental physical limit.

Confocal microscopy, two-photon microscopy, and light-sheet microscopy allow three-dimensional imaging of living cells and tissues. These aren't just better versions of what Antonie van Leeuwenhoek used in the 1670s — they're fundamentally different instruments that happen to share the name "microscope."

### Medical Imaging

Optical coherence tomography (OCT) creates cross-sectional images of tissue using light interference. It's standard in ophthalmology — your eye doctor uses it to image your retina with micrometer resolution. Newer versions image at speeds exceeding 100,000 depth scans per second.

Endoscopes use fiber bundles to carry images from inside the body. Modern capsule endoscopes — pill-sized cameras you swallow — wirelessly transmit thousands of images as they pass through your digestive tract. The optical design challenges of fitting a useful camera into something that small are formidable.

## Photonics: The Modern Frontier

Photonics — the technology of generating, controlling, and detecting photons — has become nearly synonymous with modern optical engineering. While classical optical engineering dealt mainly with imaging, photonics encompasses communications, sensing, energy, and computing.

### LIDAR

Light Detection and Ranging (LIDAR) uses laser pulses to build 3D maps of the environment. It's the primary sensor for many autonomous vehicle platforms. A LIDAR unit sends out thousands of laser pulses per second, measures the time for each to return, and builds a point cloud of its surroundings. The engineering challenge is making these systems cheap, reliable, and compact enough for mass-market cars.

Solid-state LIDAR — with no moving parts — is the holy grail. Flash LIDAR illuminates the entire scene at once and uses a detector array to capture the returns. Optical phased arrays steer the laser beam electronically, like a phased-array radar but with light. These technologies are driving a revolution in autonomous [robotics](/robotics) and vehicles.

### Photonic Integrated Circuits

Just as electronic circuits shrank from room-sized to chip-sized, optical systems are following the same path. Photonic integrated circuits (PICs) put lasers, modulators, detectors, and waveguides on a single chip. They're already used in telecommunications transceivers, and research is pushing toward general-purpose photonic computing.

The appeal of photonic computing is speed and energy efficiency. Light travels faster than electrons, and optical operations can be performed in parallel across wavelengths. For specific workloads — matrix multiplication used in [machine-learning](/machine-learning), signal processing — photonic chips could be dramatically faster and more energy-efficient than electronic processors.

### Quantum Optics

Quantum optics — manipulating individual photons — is enabling new technologies. Quantum key distribution uses the principles of quantum mechanics to create theoretically unbreakable encryption. If anyone intercepts the photons, the quantum state is disturbed, and the eavesdropping is detected.

Quantum computing with photons is another active frontier. Companies like PsiQuantum and Xanadu are building photonic quantum computers, betting that photons' natural resistance to decoherence makes them superior qubits compared to superconducting or ion-trap approaches.

## Optical Coatings and Materials

An optical surface without coatings reflects about 4% of incident light. Stack a dozen lenses and you've lost nearly half your light to reflections. Anti-reflective coatings — thin films precisely designed to create destructive interference of reflected waves — reduce this to fractions of a percent.

Multilayer dielectric coatings can create mirrors with 99.999% reflectivity, filters that pass only a narrow wavelength band, or beam splitters that divide light exactly 50/50. The coating design involves optimizing layer thicknesses (typically quarter-wave) for the desired spectral response. Modern coating machines deposit dozens of layers with sub-nanometer precision.

Glass selection matters enormously too. Different glass types have different refractive indices, dispersions (how much the index varies with wavelength), and transmission ranges. The Schott glass catalog lists hundreds of optical glasses, each with specific properties. Choosing the right combination of glasses is crucial for correcting chromatic aberration and achieving the desired optical performance.

## Computational Imaging

One of the most exciting developments in optical engineering is the realization that you can shift complexity from optics to computation. Instead of building a perfect lens that forms an ideal image, you build a simpler optical system and use [algorithms](/algorithms) to reconstruct the image computationally.

Your phone camera does this constantly. The optical system is tiny and imperfect, but computational photography — HDR stacking, multi-frame noise reduction, portrait mode with depth estimation, night mode — produces images that look astonishing.

Coded apertures, light-field cameras, and single-pixel cameras all exploit this principle. By encoding information about the scene into the measurement (using structured illumination or programmable apertures), you can recover information that a traditional camera couldn't capture — 3D depth, spectral content, or resolution beyond the diffraction limit.

This blurs the boundary between optical engineering and [computer-science](/computer-science). The best imaging systems today are co-designed: optics and algorithms optimized together as a unified system.

## The Manufacturing Challenge

Designing an optical system is one thing. Building it is another. Optical manufacturing requires extraordinary precision.

Telescope mirrors are polished to surface accuracies of a few nanometers — thousandths of a wavelength of light. A surface error of 50 nanometers would noticeably degrade image quality. If the Hubble Space Telescope's 2.4-meter mirror were scaled up to the size of the United States, the tallest bump would be about 6 inches.

The Hubble's initial flaw — its primary mirror was ground to the wrong shape by 2.2 micrometers — demonstrated how little margin for error exists. That tiny error cost NASA a mission to install corrective optics. Today, interferometric testing during manufacturing catches such errors before they leave the factory.

For consumer optics, the challenge is different: precision at scale. Injection-molded plastic aspheric lenses for phone cameras must be produced by the billions while maintaining tight tolerances. The molds themselves are diamond-turned to nanometer precision.

## Where the Field Is Heading

Several trends are shaping optical engineering's future:

**AR/VR displays** need compact, lightweight optics that project wide-field images directly into your eyes. Waveguide-based displays, holographic optical elements, and metalenses (flat lenses made of nanostructures) are all being explored.

**Metalenses** — flat optical elements made of arrays of nanopillars — could replace traditional curved lenses in some applications. They're manufactured using semiconductor fabrication techniques, which means they could be mass-produced cheaply. The technology is young but advancing rapidly.

**Optical neural networks** perform certain AI computations using light, potentially at much higher speeds and lower power than electronic processors. Early demonstrations show promise for inference workloads.

**Space-based optical systems** continue to push boundaries. Future space telescopes with even larger apertures, satellite-based LIDAR for climate monitoring, and optical communications between satellites (laser crosslinks) are all in development.

## Key Takeaways

Optical engineering is the discipline of designing and building systems that generate, control, and detect light. From the lenses in your phone to the fiber optic cables carrying the internet to the LIDAR sensors on autonomous vehicles, optical engineering shapes modern technology at nearly every level. The field combines deep [physics](/physics) knowledge with practical engineering skills, and it's growing rapidly as photonics becomes essential to computing, communications, medicine, and transportation. If a device interacts with light in any deliberate way, an optical engineer was probably involved.
