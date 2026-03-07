---
title: "What Is Hydrodynamics?"
slug: hydrodynamics
description: "Hydrodynamics studies how fluids flow and the forces they produce. Explore its equations, real-world applications, and why it shapes engineering today."
category: science
tags: ["hydrodynamics", "fluid dynamics", "fluid mechanics", "water", "engineering", "oceanography", "physics"]
heroImage: "/images/articles/hydrodynamics-hero.webp"
heroAlt: "Editorial photograph representing the concept of hydrodynamics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2382
tier: "2"
relatedArticles: ["classical-mechanics", "aerodynamics", "civil-engineering", "acoustics", "computational-physics"]
externalSources:
  - title: "MIT OpenCourseWare — Fluid Dynamics"
    url: "https://ocw.mit.edu/courses/2-06-fluid-dynamics-spring-2013/"
  - title: "Annual Review of Fluid Mechanics"
    url: "https://www.annualreviews.org/journal/fluid"
  - title: "American Physical Society — Division of Fluid Dynamics"
    url: "https://engage.aps.org/dfd/home"
  - title: "NASA Glenn Research Center — Fluid Dynamics"
    url: "https://www.grc.nasa.gov/www/k-12/airplane/bga.html"
faq:
  - q: "What is the difference between hydrodynamics and fluid dynamics?"
    a: "Hydrodynamics specifically studies the motion of liquids (historically water), while fluid dynamics is the broader field covering both liquids and gases. In modern usage, the terms often overlap because the governing equations (Navier-Stokes) apply to all fluids. Aerodynamics is the gas-focused counterpart to hydrodynamics."
  - q: "What is turbulence and why is it hard to predict?"
    a: "Turbulence is chaotic, irregular fluid motion with eddies and vortices across many scales. It's hard to predict because small changes in initial conditions lead to vastly different outcomes (sensitive dependence), the motion involves interactions across many length scales simultaneously, and no general analytical solution to the Navier-Stokes equations exists for turbulent flow. Richard Feynman called turbulence 'the most important unsolved problem of classical physics.'"
  - q: "Why does hydrodynamics matter in everyday life?"
    a: "Water supply systems, drainage, swimming, boating, plumbing, weather prediction, blood flow in your body, and even how you stir your coffee all involve hydrodynamic principles. Engineers use hydrodynamics to design ships, bridges, dams, pipelines, pumps, and water treatment systems. Without it, modern infrastructure would be impossible."
  - q: "What is the Reynolds number?"
    a: "The Reynolds number is a dimensionless ratio comparing inertial forces to viscous forces in a fluid flow. Low Reynolds numbers (below ~2,300 for pipe flow) indicate smooth, orderly laminar flow. High Reynolds numbers indicate turbulent flow. It's calculated as Re = (density x velocity x length) / viscosity and is one of the most important parameters in fluid mechanics."
---

# What Is Hydrodynamics?

Hydrodynamics is the branch of physics and engineering that studies fluids in motion — how they flow, what forces they exert, and how objects moving through fluids experience resistance, lift, and pressure. While the term historically referred specifically to water (from the Greek *hydro*, water, and *dynamis*, power), modern hydrodynamics applies to all liquids and shares mathematical foundations with [aerodynamics](/aerodynamics), its gas-phase counterpart.

## Why Fluid Motion Is Surprisingly Hard to Understand

You might think flowing water is simple. It's not. Not even close.

Here's the problem: in a solid, each particle stays in a fixed position relative to its neighbors. In a fluid, particles are free to move in any direction, at any speed, and their motion is coupled to the motion of every other particle around them. A tiny change upstream can produce dramatically different flow patterns downstream. The equations governing fluid motion — the Navier-Stokes equations — are among the most difficult in all of physics. Proving whether solutions to them always exist and behave smoothly is one of the seven Clay Mathematics Institute Millennium Prize Problems, carrying a $1 million bounty. As of 2026, it remains unsolved.

Richard Feynman, one of the 20th century's greatest physicists, described turbulence as "the most important unsolved problem of classical physics." Werner Heisenberg reportedly said on his deathbed that he would ask God two questions: "Why relativity? And why turbulence?" He expected God to have an answer to the first.

Those are physicists joking — sort of. The difficulty is real.

## The Fundamental Equations

### Conservation Laws

All of hydrodynamics rests on three conservation principles borrowed from [classical mechanics](/classical-mechanics):

**Conservation of mass** — fluid can't appear from nowhere or vanish. What flows into a region must either flow out or accumulate. For an incompressible fluid (a reasonable approximation for most liquids), this simplifies to the continuity equation: if a pipe narrows, the fluid must speed up proportionally. A garden hose nozzle works this way — squeeze the opening, and water exits faster.

**Conservation of momentum** — Newton's second law applied to fluids. The forces on a fluid element (pressure, viscosity, gravity) determine how it accelerates. This gives the Navier-Stokes equations — the governing equations of [fluid dynamics](/fluid-dynamics). For an incompressible Newtonian fluid:

The left side describes acceleration (how the fluid velocity changes in time and space). The right side lists the forces: pressure gradient, viscous stress, and body forces (gravity). Simple in principle. Impossibly complex in practice for most real flows.

**Conservation of energy** — the first law of [thermodynamics](/thermodynamics) applied to flowing fluid. Energy exists as kinetic energy (motion), potential energy (height), pressure energy, and internal energy (heat). Bernoulli's equation — one of hydrodynamics' most useful results — is a simplified energy conservation statement for steady, inviscid (frictionless) flow along a streamline: total pressure (static + active + elevation) remains constant.

### Bernoulli's Principle in Action

Daniel Bernoulli published his principle in 1738, and it remains one of the most practically useful results in fluid mechanics. The basic idea: in a flowing fluid, faster flow means lower pressure.

This explains a startling number of phenomena:

- **Why a shower curtain blows inward** when water flows. Fast-moving water drops entrain air, creating a fast flow inside the curtain (lower pressure) compared to still air outside (higher pressure). The pressure difference pushes the curtain in.

- **How carburetors work.** Air flowing through a narrow throat (venturi) speeds up, its pressure drops, and fuel gets sucked in from a reservoir at atmospheric pressure.

- **How airplane wings generate lift** — partially. Air flowing faster over the curved upper surface creates lower pressure than the slower flow beneath. (The full explanation involves circulation and angle of attack, not Bernoulli alone, but the pressure difference is real.)

- **Why a spinning ball curves.** A ball spinning in flight drags air faster around one side (where spin and airflow align) than the other (where they oppose). The pressure difference pushes the ball sideways. This Magnus effect is why curveballs curve and why soccer players can bend free kicks around walls.

### The Reynolds Number: Order and Chaos

Osborne Reynolds, working in Manchester in the 1880s, identified the single most important parameter in fluid mechanics — now called the Reynolds number (Re).

Re = (density × velocity × characteristic length) / viscosity

This dimensionless number compares inertial forces (which push fluid to keep moving in its current direction) to viscous forces (which resist motion and impose order). When viscous forces dominate (low Re), flow is smooth and orderly — **laminar**. When inertial forces dominate (high Re), flow becomes chaotic — **turbulent**.

The transition happens at roughly Re = 2,300 for flow in a pipe. Below that, dye injected into a pipe stays in a neat stream. Above it, the dye disperses chaotically.

This matters enormously because laminar and turbulent flows behave completely differently. Laminar flow is predictable — engineers can calculate pressure drops, velocities, and forces analytically. Turbulent flow is statistical — you can describe average properties but not predict exact behavior at any given instant and location. Turbulent flow also transfers heat and mixes substances far more effectively than laminar flow, which is why stirring (creating turbulence) mixes your coffee faster than waiting for diffusion.

Most flows in engineering and nature are turbulent. River flows, ocean currents, atmospheric winds, flow around vehicles and aircraft, blood flow in the aorta — all turbulent. This is why hydrodynamics is hard.

## Waves: Where Hydrodynamics Gets Visible

Ocean waves are probably the most visible hydrodynamic phenomenon. Understanding them requires distinguishing several types.

### Surface Gravity Waves

These are the familiar wind-driven waves on oceans and lakes. Wind transfers energy to the water surface, creating oscillations that propagate as waves. Water particles in a surface wave don't travel with the wave — they move in circular orbits, returning roughly to their starting position after each wave passes. (This is why a floating duck bobs up and down but doesn't travel with the waves, unless wind or current pushes it.)

Wave speed depends on wavelength. In deep water (depth > half the wavelength), speed equals approximately 1.25 times the square root of the wavelength in meters. Longer waves travel faster — which is why a distant storm's swell arrives at the beach as long, evenly-spaced waves (the long, fast waves outrun the short, slow ones).

As waves approach shore and the water shallows, they slow down, steepen, and eventually break. The physics of wave breaking — still not fully described analytically — is important for coastal engineering, surfing (obviously), and understanding sediment transport.

### Tsunamis

Tsunamis aren't ordinary waves — they're shallow-water waves generated by earthquakes, volcanic eruptions, or underwater landslides. "Shallow-water" here means the wavelength (often 100+ miles) is much greater than the ocean depth. In the open ocean, a tsunami might be only 1-2 feet tall but traveling at 500+ mph — jet aircraft speed. Sailors in deep water wouldn't notice one passing.

As a tsunami enters shallow coastal water, it slows down and its energy concentrates vertically — the wave height can grow to 30+ feet or more. The 2004 Indian Ocean tsunami was generated by a magnitude 9.1 earthquake and killed approximately 230,000 people across 14 countries. Hydrodynamic modeling now drives tsunami warning systems that detect these waves and predict coastal arrival times and heights.

### Internal Waves

Invisible from the surface, internal waves form at boundaries between water layers of different density (temperature or salinity). They can be enormous — some internal waves in the South China Sea are over 500 feet tall. They affect submarine navigation, ocean mixing, and nutrient transport. Satellite imagery can detect their surface signatures (slight changes in surface roughness caused by the internal wave's influence on near-surface currents).

## Practical Applications

### Ship Design and [Naval Architecture](/naval-architecture)

Designing efficient ships is a hydrodynamic problem. A ship moving through water creates wave drag (energy lost to generating waves) and viscous drag (friction between the hull and water). The relative importance of each depends on speed and hull shape.

Hull design optimization has been ongoing for centuries. Bulbous bows — the rounded protrusions below the waterline on modern ships — create a wave that partially cancels the bow wave, reducing wave drag by up to 15%. Computer-aided hydrodynamic simulation allows testing thousands of hull shapes before building a single model.

The [Froude number](/classical-mechanics) (Fr = velocity / sqrt(g × length)) is the key parameter for ship resistance. Below Fr ≈ 0.4, wave drag is manageable. Above it, wave drag increases sharply. This is why ships have practical speed limits — and why making a ship faster requires dramatically more power. Doubling a ship's speed roughly octuples its drag.

### Pipeline Engineering

Moving water, oil, and gas through pipes is a massive industry. Pipeline hydrodynamics determines pressure drops (which set pump requirements), flow rates, and the feasibility of long-distance transport.

The Hagen-Poiseuille equation describes laminar flow in pipes: flow rate is proportional to the pressure drop and the fourth power of the pipe radius. That fourth-power relationship is powerful — doubling pipe diameter increases flow capacity 16-fold at the same pressure. This is why water main sizing is critical in [civil engineering](/civil-engineering) — an undersized pipe can't be fixed by just pumping harder.

For turbulent flow (most practical pipe flows), the Moody diagram relates friction factor to Reynolds number and pipe roughness. This tool, published in 1944, remains one of the most-used references in hydraulic engineering.

### Hydropower

Converting the kinetic and potential energy of flowing water to electricity requires hydrodynamic design of turbines. Francis turbines (for medium head, medium flow), Kaplan turbines (low head, high flow), and Pelton wheels (high head, low flow) each optimize for different hydrodynamic conditions.

Hydropower provides about 16% of global electricity. The Three Gorges Dam in China — the world's largest hydroelectric facility — generates 22,500 MW from 32 Francis turbines, each designed through extensive hydrodynamic analysis to maximize energy extraction while minimizing cavitation damage.

### Biofluid Dynamics

Blood flow in the cardiovascular system follows hydrodynamic principles. The heart generates pulsatile flow (not steady), arteries are elastic (not rigid), and blood is non-Newtonian (its viscosity changes with shear rate). These complications make cardiovascular hydrodynamics particularly challenging.

Arterial aneurysms, atherosclerotic plaque formation, and artificial heart valve design all involve hydrodynamic analysis. Computational fluid dynamics (CFD) simulations of blood flow help surgeons plan complex vascular procedures and help engineers design better artificial hearts and valves.

### [Oceanography](/oceanography)

Ocean circulation — driven by wind, temperature gradients, salinity differences, and Earth's rotation — distributes heat, nutrients, and dissolved gases globally. The Gulf Stream alone transports about 30 sverdrups (30 million cubic meters per second) of warm water northward, keeping Western Europe significantly warmer than comparable latitudes in North America.

Understanding ocean hydrodynamics is critical for climate science. Changes in thermohaline circulation (driven by temperature and salinity) could alter global weather patterns. Models of ocean-atmosphere interaction underpin [climatology](/climatology) predictions.

## Computational Hydrodynamics: Solving the Unsolvable

Since analytical solutions to the Navier-Stokes equations exist for only a few simple cases (steady laminar flow in pipes, flow between parallel plates, and a handful of others), [computational physics](/computational-physics) has become essential.

Computational Fluid Dynamics (CFD) discretizes the flow domain into millions of small cells and solves the governing equations numerically at each cell. Modern CFD simulations might use 100 million+ cells and require supercomputer-level computation.

Three main approaches exist:

**Direct Numerical Simulation (DNS)** resolves all scales of turbulent motion — from the largest eddies to the smallest dissipative scales. It's the most accurate but most computationally expensive. DNS of flow around a full-scale aircraft remains computationally infeasible with current technology.

**Large Eddy Simulation (LES)** resolves large-scale turbulent structures and models the effect of small scales using subgrid-scale models. It's a practical compromise for many engineering flows.

**Reynolds-Averaged Navier-Stokes (RANS)** models all turbulent fluctuations and solves only for average flow quantities. It's the least computationally expensive and most widely used in [industrial design](/industrial-design) — but its turbulence models introduce significant approximations.

The progression from RANS to LES to DNS as computational power increases is one of [computational physics'](/computational-physics) clearest trend lines. Each decade brings previously infeasible simulations into practical reach.

## Experimental Methods

Despite computational advances, experiments remain essential. Key techniques:

**Flow visualization** — using dye, smoke, particles, or hydrogen bubbles to make flow patterns visible. Particle Image Velocimetry (PIV) uses lasers and high-speed cameras to measure velocity fields across entire flow regions simultaneously — producing the beautiful false-color flow maps you see in fluid dynamics publications.

**Wind and water tunnels** — controlled environments for measuring forces on models. The US Navy's David Taylor Model Basin has tested ship hull models since 1899. Towing tank facilities worldwide test ship designs at model scale (typically 1:20 to 1:50), using Froude scaling to translate model results to full-scale predictions.

**Pressure measurements** — using arrays of pressure taps on model surfaces to map pressure distributions. Combined with flow visualization and force measurements, pressure data reveals where separation occurs, where vortices form, and where energy is lost.

## The Turbulence Problem

I've mentioned turbulence multiple times because it really is the field's central challenge. Despite 150+ years of study, no complete theory of turbulence exists. What we know:

- Turbulence is inherently three-dimensional and time-dependent
- It contains structures (eddies, vortices) across a wide range of scales
- Energy cascades from large scales to small scales (Kolmogorov's 1941 theory)
- Small-scale turbulence has universal statistical properties independent of how it was generated
- Large-scale turbulence depends strongly on geometry and boundary conditions

What we don't know: how to predict turbulent flow from first principles without either resolving every scale (DNS) or using empirical models (RANS, LES).

This gap between mathematical theory and practical prediction makes hydrodynamics perpetually humbling. The equations are known. The boundary conditions are known. Yet for most practical flows, exact solutions remain out of reach. Progress comes through better computational methods, better experimental techniques, and — occasionally — better physical insight. The field is old but far from finished.

Every glass of water you pour, every river you cross, every rainstorm that floods a street — hydrodynamics is at work. The science behind flowing water is one of the oldest in human inquiry, and one of the few where fundamental questions remain genuinely open.
