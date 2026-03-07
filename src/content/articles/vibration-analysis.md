---
title: "What Is Vibration Analysis?"
slug: vibration-analysis
description: "Vibration analysis detects machinery faults by measuring mechanical oscillations. Learn techniques, sensors, signal processing, and predictive maintenance."
category: technology
tags: ["vibration analysis", "mechanical engineering", "predictive maintenance", "signal processing"]
heroImage: "/images/articles/vibration-analysis-hero.webp"
heroAlt: "Editorial photograph representing the concept of vibration analysis"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 10
wordCount: 2424
tier: '1'
relatedArticles: ["mechanical-engineering", "signal-processing", "acoustics", "digital-signal-processing", "electrical-engineering"]
externalSources:
  - title: "ISO 10816 - Mechanical Vibration Standards"
    url: "https://www.iso.org/standard/75637.html"
  - title: "NASA Technical Reports - Vibration Testing"
    url: "https://ntrs.nasa.gov/"
  - title: "Vibration Institute"
    url: "https://www.vi-institute.org/"
  - title: "NIST - Mechanical Vibration and Shock"
    url: "https://www.nist.gov/calibrations/mechanical-vibration-and-shock-calibrations"
faq:
  - q: "What is the most common cause of machine vibration?"
    a: "Imbalance is the most common cause of machine vibration, accounting for roughly 40% of all vibration problems. It occurs when the mass centerline of a rotating part doesn't coincide with its rotational axis, creating centrifugal forces that increase with speed."
  - q: "How often should vibration measurements be taken?"
    a: "It depends on the criticality of the equipment. Critical machines may be monitored continuously with permanently installed sensors. Less critical equipment is typically measured monthly or quarterly using portable data collectors. The key is establishing a consistent schedule to detect trends."
  - q: "Can vibration analysis detect bearing failures before they happen?"
    a: "Yes — this is one of its strongest applications. Vibration analysis can detect bearing defects months before failure by identifying characteristic frequencies produced by damage on the inner race, outer race, rolling elements, or cage. Early detection allows planned replacement instead of emergency breakdowns."
  - q: "What qualifications do vibration analysts need?"
    a: "The Vibration Institute and ISO 18436-2 define four certification levels. Category I is the entry level (basic data collection and trending). Category IV is the expert level (advanced diagnosis and program management). Most working analysts hold Category II or III certification."
  - q: "Is vibration analysis only for rotating equipment?"
    a: "Primarily, yes — rotating machines like motors, pumps, fans, turbines, and compressors are the main focus. But vibration analysis also applies to structural health monitoring (bridges, buildings), automotive testing, aerospace components, and even medical devices."
---

# What Is Vibration Analysis?
Vibration analysis is the process of measuring and interpreting the mechanical oscillations of machinery to detect faults, predict failures, and optimize performance. By analyzing the frequency, amplitude, and patterns of vibration signals, engineers can identify problems like bearing wear, shaft misalignment, and rotor imbalance long before a machine breaks down.

Think of it as listening to a machine's heartbeat — except with instruments that are far more sensitive than any human ear.

## Why Machines Vibrate (And Why That Matters)

Every rotating machine vibrates. Every single one. A perfectly balanced motor spinning on perfectly aligned bearings in a perfectly rigid frame would theoretically produce zero vibration — but that machine doesn't exist. Real machines have manufacturing tolerances, wear patterns, and operational stresses that produce vibration.

The question isn't whether a machine vibrates. It's whether the vibration is normal or abnormal, and if abnormal, what's causing it.

Here's where it gets interesting: different faults produce different vibration patterns. A worn bearing creates high-frequency vibrations at specific characteristic frequencies. A misaligned shaft produces vibration predominantly at 1x and 2x the [running](/running) speed. An unbalanced rotor vibrates at exactly 1x running speed. Looseness creates a messy spectrum with many harmonics.

These patterns are as distinctive as fingerprints. A trained vibration analyst can look at a frequency spectrum and say, "That's an outer race bearing defect on the drive end of motor number 7" — months before anyone would notice anything wrong by ear or feel.

## The Physics of Vibration

To understand vibration analysis, you need a quick grounding in the physics. Don't worry — it's more intuitive than it sounds.

Vibration is oscillatory motion around an equilibrium point. The simplest model is a mass on a spring. Pull the mass down, release it, and it bounces up and down. That oscillation has three fundamental properties:

**Frequency** — how many times per second the mass completes a full cycle. Measured in Hertz (Hz) or, in rotating machinery, often expressed as cycles per minute (CPM) or orders of running speed. A motor spinning at 1,800 RPM has a fundamental frequency of 30 Hz (1,800/60).

**Amplitude** — how far the mass moves from its resting position. This indicates severity — bigger amplitude means more energy and more force. Amplitude can be expressed as displacement (distance), velocity (speed of the motion), or acceleration (rate of change of velocity).

**Phase** — where in the cycle the vibration is at a given moment. Phase relationships between measurement points tell you whether parts are vibrating together (in-phase) or against each other (out-of-phase), which is critical for diagnosing certain faults.

Real machines don't vibrate at a single frequency. They vibrate at many frequencies simultaneously — the running speed, bearing frequencies, gear mesh frequencies, structural resonances, and more. The measured vibration signal is the sum of all these components, which is why you need [signal processing](/signal-processing) tools to separate them.

## The Fourier Transform: From Time to Frequency

This is the single most important concept in vibration analysis. The raw vibration signal — what the sensor measures — is a time waveform, a squiggly line showing amplitude versus time. It's the sum of many sinusoidal components, and it's nearly impossible to interpret directly.

The Fast Fourier Transform (FFT) mathematically decomposes this complex waveform into its individual frequency components. The result is a frequency spectrum — a plot showing amplitude at each frequency. This is where the diagnostic magic happens.

Looking at a time waveform is like listening to an orchestra and trying to identify each instrument by ear. Looking at a frequency spectrum is like having a printout showing exactly which instruments are playing and how loud each one is. Suddenly, diagnosis becomes systematic rather than guesswork.

Jean-Baptiste Joseph Fourier developed the underlying [mathematics](/mathematics) in the early 1800s while studying heat conduction. He probably didn't imagine it would be used to diagnose bearing faults in industrial pumps two centuries later, but here we are. The FFT algorithm (a computationally efficient version developed by Cooley and Tukey in 1965) made real-time frequency analysis practical and is the backbone of modern [digital signal processing](/digital-signal-processing).

## Common Vibration Faults and Their Signatures

Each mechanical fault produces a characteristic vibration signature. Learning to recognize these patterns is what separates a data collector from a diagnostician.

### Imbalance

The most common vibration problem. Imbalance occurs when the center of mass of a rotating component doesn't coincide with its axis of rotation. The result: a centrifugal force that rotates with the shaft, producing vibration at exactly 1x running speed.

The vibration amplitude increases with the square of the speed — double the RPM and the vibration force quadruples. In the frequency spectrum, you see a dominant peak at 1x running speed with minimal harmonics. Phase is stable and consistent.

Causes include uneven material distribution, buildup of deposits (like ice on fan blades), missing balance weights, and eccentricity in rotors. The fix is balancing — adding or removing weight at specific locations to bring the center of mass onto the rotational axis.

### Misalignment

Misalignment occurs when connected shafts aren't properly aligned. There are two types: angular misalignment (shaft centerlines intersect at an angle) and offset misalignment (shaft centerlines are parallel but offset). Most real cases involve both.

The signature: vibration at 1x and 2x running speed, often with elevated axial vibration. The ratio of 1x to 2x amplitudes and the phase relationships between measurement locations help distinguish angular from offset misalignment.

Misalignment is the second most common vibration problem after imbalance and is responsible for premature bearing and coupling failures, excess energy consumption, and shaft fatigue. Precision laser alignment tools have made correction much more accurate than the old dial indicator methods.

### Bearing Defects

Rolling element bearings (ball bearings, roller bearings) produce characteristic defect frequencies based on their [geometry](/geometry) — the number of rolling elements, the contact angle, and the bearing dimensions.

Four defect frequencies correspond to four possible fault locations:
- **BPFO** (Ball Pass Frequency, Outer race) — a defect on the outer ring
- **BPFI** (Ball Pass Frequency, Inner race) — a defect on the inner ring
- **BSF** (Ball Spin Frequency) — a defect on a rolling element
- **FTF** (Fundamental Train Frequency) — a cage defect

These frequencies are typically non-synchronous (not exact multiples of running speed) and appear in the high-frequency range. As bearing damage progresses, the defect frequencies produce sidebands (additional peaks spaced at running speed intervals), and eventually the entire high-frequency noise floor rises.

The progression from early defect to catastrophic failure takes months in most cases — giving vibration analysts plenty of warning if they're monitoring regularly.

### Looseness

Mechanical looseness — loose bolts, excessive bearing clearance, cracked frames — produces a messy vibration spectrum with many harmonics of running speed. You might see peaks at 1x, 2x, 3x, 4x, and so on, sometimes out to 10x or more. The time waveform often looks chaotic and may show truncation (flat spots where the machine contacts a stop).

Looseness also creates subharmonics — fractional multiples of running speed like 0.5x — which are a reliable indicator of severe mechanical looseness.

### Gear Defects

Gears produce vibration at the gear mesh frequency (number of teeth times RPM) and its harmonics. Healthy gears show clean mesh frequency peaks with low-level sidebands. Damaged teeth produce elevated sidebands spaced at the shaft speed of the damaged gear. A broken tooth creates a strong impact once per revolution of the affected shaft, visible as high-amplitude sidebands.

## Sensors and Measurement Equipment

Vibration analysis depends on good data, which requires appropriate sensors and proper measurement techniques.

### Accelerometers

Piezoelectric accelerometers are the workhorse of vibration measurement. They contain a crystal that generates an electrical charge proportional to the force (and therefore acceleration) applied to it. They're small, rugged, operate over a wide frequency range (typically 2 Hz to 10,000 Hz or more), and can be permanently mounted or temporarily attached with magnets.

The frequency range matters. For low-speed machines (below 600 RPM), you need sensors with good low-frequency response. For high-speed gear and bearing analysis, you need high-frequency capability. Choosing the wrong sensor is a common beginner mistake.

### Proximity Probes

Eddy current proximity probes measure shaft displacement directly. They're mounted in the bearing housing and measure the gap between the probe tip and the shaft surface. These are essential for large rotating equipment like turbines and compressors where shaft orbit analysis (plotting the actual path the shaft takes inside the bearing) provides critical diagnostic information.

### Velocity Sensors

Electromagnetic velocity sensors were the original vibration transducers. They contain a coil and a permanent magnet — relative motion between them generates a voltage proportional to velocity. They're largely being replaced by accelerometers, but you'll still find them in some older monitoring systems.

### Data Collectors and Analyzers

Portable data collectors are handheld instruments that connect to sensors, digitize the signal, compute FFTs, and store measurements. Modern units include route-based data collection (predefined measurement sequences), automated alarm checking, and wireless connectivity.

Permanently installed online monitoring systems use wired or wireless sensors that continuously stream data to a central system. These are used on critical equipment where unexpected failure would be catastrophic — turbines, large compressors, and critical process pumps.

## Advanced Analysis Techniques

Beyond basic FFT analysis, several advanced techniques extract more information from vibration signals.

### Envelope Analysis (Demodulation)

Bearing defect signals are often weak and buried under stronger vibration from imbalance, misalignment, and gear mesh. Envelope analysis isolates the high-frequency region where bearing impacts excite structural resonances, then demodulates (extracts the envelope of) those signals to reveal the underlying bearing defect frequencies. This technique can detect bearing faults much earlier than standard FFT analysis.

### Order Analysis

For variable-speed machines, standard FFT analysis produces smeared spectra because the frequencies change with speed. Order analysis resamples the signal based on a tachometer reference, converting from the time domain to the angular domain. This produces sharp spectral peaks regardless of speed changes. It's essential for analyzing gearboxes, engines, and any equipment that operates at varying speeds.

### Modal Analysis

Modal analysis determines a structure's natural frequencies, mode shapes, and damping values. You excite the structure (with an impact hammer or shaker) and measure the response at multiple locations. The results show exactly how the structure wants to vibrate, which is critical for avoiding resonance — the condition where an excitation frequency matches a natural frequency, causing dramatically amplified vibration.

Resonance can be destructive. The classic example is the Tacoma Narrows Bridge collapse in 1940, where wind-excited resonance caused catastrophic structural failure. In industrial settings, resonance causes premature fatigue failure, excessive noise, and poor machine performance.

### Time Waveform Analysis

Sometimes the time waveform itself tells you things the spectrum can't. Impacting (repetitive sharp peaks) indicates bearing faults, broken gear teeth, or loose components. Modulation (periodic changes in amplitude) indicates eccentricity or varying loads. Truncation (flat tops or bottoms) indicates contact with a stop or hard limit.

Experienced analysts look at both the spectrum and the time waveform. They complement each other — the spectrum tells you what frequencies are present; the waveform tells you what's happening in the time domain.

## Predictive Maintenance: The Business Case

Vibration analysis is the foundation of predictive maintenance (PdM) — maintaining equipment based on its actual condition rather than on fixed time intervals.

The alternatives are worse:

**Reactive maintenance** (run to failure) — you fix it when it breaks. This is the most expensive approach because failures are unplanned, cause collateral damage, and halt production unexpectedly. A $200 bearing failure can cause $50,000 in downtime, shaft damage, and production losses.

**Preventive maintenance** (time-based) — you replace components on a schedule regardless of condition. This wastes perfectly good parts and still doesn't prevent all failures because not all failures follow predictable time patterns.

**Predictive maintenance** (condition-based) — you monitor equipment condition and intervene only when evidence indicates a developing problem. Vibration analysis is the primary technology for rotating equipment, and studies consistently show 8-12x return on investment for well-implemented programs.

The numbers are compelling. According to the US Department of Energy, predictive maintenance typically reduces maintenance costs by 25-30%, eliminates 70-75% of breakdowns, reduces downtime by 35-45%, and increases production by 20-25%. These aren't theoretical — they're based on documented industrial programs.

## Setting Up a Vibration Analysis Program

Implementing a vibration program involves more than buying sensors and software.

**Equipment prioritization.** Not every machine justifies monitoring. Focus on critical equipment where failure causes significant production loss, safety hazards, or environmental impact. A risk-based approach — considering failure probability, consequences, and detection difficulty — guides resource allocation.

**Measurement point selection.** Each bearing location typically gets three measurement points — horizontal, vertical, and axial. Motor-driven equipment might have 6-12 measurement points total. Sensor mounting method (stud mount, magnet, adhesive) affects data quality.

**Baseline measurements.** Before you can detect changes, you need to know what "normal" looks like. Take baseline measurements on known-good machines and establish alarm thresholds based on standards (ISO 10816, API 670) and machine-specific experience.

**Route-based data collection.** Organize measurement points into routes — logical sequences that technicians follow on a regular schedule. Consistency is critical — same sensor, same location, same operating conditions. Otherwise you're comparing apples to oranges.

**Trending and analysis.** Track measurements over time. A slow upward trend in vibration amplitude at a bearing defect frequency is the early warning you're looking for. Software tools automate trending, alarming, and reporting.

**Corrective action.** Analysis without action is useless. The program needs clear communication channels between analysts and maintenance planners so that identified problems actually get fixed.

## The Human Element

For all the sophisticated technology, vibration analysis ultimately depends on human expertise. Software can compute FFTs and flag alarm exceedances, but interpreting the results — deciding whether that spectral pattern indicates a bearing defect, a resonance, or an instrumentation artifact — requires trained analysts.

The best vibration analysts combine technical knowledge with machine knowledge. They know the bearing part numbers, the gear ratios, the operating speeds, and the maintenance history. They understand the physics behind each fault pattern and can recognize when something doesn't fit the expected patterns.

Certification programs (ISO 18436-2, Vibration Institute) establish competency standards. But certification is the beginning, not the end. It takes years of practical experience — hundreds or thousands of machines analyzed — to develop the [pattern recognition](/pattern-recognition) skills that distinguish a competent analyst from an expert.

Vibration analysis sits at the intersection of physics, [mechanical engineering](/mechanical-engineering), signal processing, and practical maintenance knowledge. It's one of those fields where the math matters, the technology matters, but ultimately the skill of the person interpreting the data makes the difference between a successful program and an expensive data collection exercise.
