---
title: "What Is Fluid Dynamics?"
slug: fluid-dynamics
description: "Fluid dynamics studies how liquids and gases move, from airplane wings and ocean currents to blood flow and weather systems."
category: science
tags: ["physics", "engineering", "fluid mechanics", "aerodynamics", "hydrodynamics", "computational fluid dynamics"]
heroImage: "/images/articles/fluid-dynamics-hero.webp"
heroAlt: "Editorial photograph representing the concept of fluid dynamics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3085
tier: "1"
relatedArticles: ["aerodynamics", "classical-mechanics", "chemical-engineering", "calculus", "computational-physics"]
externalSources:
  - title: "NASA Glenn Research Center — Fluid Dynamics"
    url: "https://www.grc.nasa.gov/www/k-12/airplane/bga.html"
  - title: "MIT OpenCourseWare — Fluid Dynamics"
    url: "https://ocw.mit.edu/courses/18-355-fluid-mechanics-fall-2017/"
  - title: "American Physical Society — Division of Fluid Dynamics"
    url: "https://www.aps.org/units/dfd/"
  - title: "Annual Review of Fluid Mechanics"
    url: "https://www.annualreviews.org/journal/fluid"
faq:
  - q: "What is the difference between fluid dynamics and fluid mechanics?"
    a: "Fluid mechanics is the broader field that covers both fluids at rest (fluid statics) and fluids in motion (fluid dynamics). Fluid dynamics is the subfield specifically concerned with how fluids move, including the forces that cause and result from that motion."
  - q: "Why is turbulence so hard to predict?"
    a: "Turbulence involves chaotic fluid motion across a vast range of scales simultaneously — from large eddies meters wide to tiny vortices fractions of a millimeter across. The Navier-Stokes equations that govern fluid motion become extremely sensitive to initial conditions in turbulent regimes, making long-term prediction practically impossible. This is one of the great unsolved problems in physics."
  - q: "Is air a fluid?"
    a: "Yes. In physics, a fluid is any substance that flows and deforms continuously under applied shear stress. Both liquids and gases qualify. Air, despite being invisible, follows the same fundamental equations of fluid dynamics as water, though with different density and viscosity values."
  - q: "What is computational fluid dynamics used for?"
    a: "CFD uses numerical methods and computers to solve fluid flow problems. It is used in aircraft and car design, weather prediction, blood flow modeling, building ventilation design, chemical reactor optimization, and virtually any engineering application where fluid behavior matters. CFD allows engineers to test thousands of design variations digitally before building physical prototypes."
  - q: "Can the Navier-Stokes equations be solved exactly?"
    a: "Only for a handful of simplified cases. For most real-world flows, exact analytical solutions do not exist. This is why the Clay Mathematics Institute listed the existence and smoothness of Navier-Stokes solutions as one of its seven Millennium Prize Problems, offering $1 million for a proof."
---

# What Is Fluid Dynamics?

Fluid dynamics is the branch of physics that studies how fluids — both liquids and gases — move and the forces acting on them during that motion. It describes everything from water flowing through a pipe to air rushing over an airplane wing, from blood circulating through your arteries to hurricanes forming over warm ocean water.

## The Basics: What Counts as a Fluid?

Before we go any further, let's clear up a common misconception. When physicists say "fluid," they don't just mean liquids. A fluid is any substance that deforms continuously when you apply a force to it — technically, a shear stress. Water is a fluid. So is honey, even though it flows slowly. And so is air, helium, and every other gas.

The distinction that matters isn't liquid versus gas. It's fluid versus solid. Push on a solid and it deforms to a point, then holds its shape. Push on a fluid and it keeps deforming as long as the force is applied. That continuous deformation is what makes fluid dynamics its own field — and what makes it so mathematically interesting.

Fluids also do something solids generally don't: they transmit pressure equally in all directions. Squeeze a balloon and the pressure increases everywhere inside it, not just where your fingers push. This property, described by Pascal's principle, is fundamental to everything from hydraulic brakes to the way ocean pressure increases with depth.

## The Governing Equations

Fluid dynamics runs on a set of equations that are deceptively simple to write down and ferociously difficult to solve. Understanding them — even conceptually — unlocks why this field has fascinated physicists for centuries.

### Conservation of Mass (Continuity)

Fluid can't just appear or vanish. What flows into a region must either flow out or accumulate there. This is the continuity equation, and it's the simplest of the governing laws.

Here's the practical consequence: when a river narrows, the water speeds up. When a pipe widens, flow slows down. You've experienced this every time you've put your thumb over a garden hose to create a faster jet. The same volume of water must pass through a smaller area, so it accelerates. This is actually a direct result of mass conservation.

### Conservation of Momentum (Navier-Stokes)

The Navier-Stokes equations are the crown jewels of fluid dynamics. They're essentially Newton's second law (F = ma) applied to fluid — but the math gets wild because every tiny parcel of fluid interacts with its neighbors through pressure and viscous forces.

Written out, they look manageable — a few terms for acceleration, pressure gradient, viscous forces, and external forces like gravity. But solving them for real-world problems is another matter entirely. The nonlinear terms (where the fluid's velocity appears multiplied by itself) create feedback loops that can generate turbulence, vortices, and chaotic behavior.

Nobody has proven whether smooth solutions to the Navier-Stokes equations always exist in three dimensions. This question is literally a million-dollar problem — one of the Clay [Mathematics](/mathematics) Institute's seven Millennium Prize Problems, with a $1 million reward for a proof. It's been open since 2000.

### Conservation of Energy

The energy equation accounts for [heat transfer](/heat-transfer) within the fluid and between the fluid and its surroundings. It matters whenever temperature variations drive flow (like hot air rising) or when compressibility effects become important (like shock waves in supersonic flight).

For many everyday flows — water in a pipe, wind around a building — temperature effects are small enough to ignore. But try to design a jet engine or predict weather patterns, and the energy equation becomes essential.

## Laminar vs. Turbulent Flow

This is one of the most important distinctions in all of fluid dynamics, and you can observe it in your kitchen.

### Laminar Flow

Turn your faucet to a slow, gentle stream. The water flows smoothly, in parallel layers that slide over each other without mixing. That's laminar flow. It's predictable, orderly, and mathematically tractable. Each fluid particle follows a smooth path called a streamline.

Laminar flow happens when viscous forces dominate — when the fluid's internal friction keeps everything organized. Think of honey pouring from a spoon. It's so viscous that it almost always flows in smooth, laminar layers.

### Turbulent Flow

Now open that faucet all the way. The stream becomes chaotic, with eddies, swirls, and unpredictable fluctuations. That's turbulence. Fluid particles no longer follow smooth paths — they zigzag chaotically, mixing vigorously.

Turbulence occurs when inertial forces overpower viscous forces. The fluid has too much momentum for friction to keep it orderly. Turbulent flow is the norm in nature — river rapids, atmospheric winds, ocean currents, the air behind a moving car. Laminar flow is the exception.

### The Reynolds Number

Osborne Reynolds, a 19th-century engineer, quantified the transition between laminar and turbulent flow with a dimensionless number that now bears his name. The Reynolds number (Re) is the ratio of inertial forces to viscous forces in a flow.

Low Reynolds number (below roughly 2,300 for pipe flow): laminar. High Reynolds number (above roughly 4,000 for pipe flow): turbulent. In between: a messy transitional regime where the flow can't decide what it wants to be.

The Reynolds number depends on flow velocity, a characteristic length (like pipe diameter), and the fluid's viscosity. This is why honey flowing slowly through a wide pipe is laminar, while water shooting through a narrow nozzle is turbulent.

Here's the remarkable thing about the Reynolds number: it allows scaling. A one-tenth-scale model airplane in a wind tunnel will behave like the real aircraft — if you match the Reynolds number. This principle underlies virtually all wind tunnel testing in [aerodynamics](/aerodynamics).

## Bernoulli's Principle and Why It's Misunderstood

You've probably heard this one: airplane wings work because air moves faster over the curved top, creating lower pressure. This is Bernoulli's principle, and while the physics is real, the popular explanation of how it applies to wings is mostly wrong.

Bernoulli's principle states that in a steady, incompressible, inviscid flow, an increase in fluid speed occurs simultaneously with a decrease in pressure. This is actually just conservation of energy applied to flowing fluid — kinetic energy goes up, pressure energy goes down.

It's genuinely useful. It explains why a shower curtain gets sucked inward when you turn on the water (fast-moving air from the shower creates low pressure). It explains how a carburetor mixes fuel and air. It explains why roofs blow off in hurricanes (fast wind over the roof creates low pressure above, while still air inside the house pushes at normal atmospheric pressure from below).

But the common wing explanation — that air must travel faster over the longer top surface to "meet up" with air going under the shorter bottom surface — is physically incorrect. There's no reason those two parcels of air need to arrive at the trailing edge simultaneously. In fact, they don't. The air over the top arrives first.

Wings actually generate lift through a combination of flow deflection (Newton's third law — the wing pushes air down, so air pushes the wing up) and the pressure distribution created by the wing's angle and shape. Bernoulli's principle describes part of this mechanism, but the "equal transit time" story taught in many schools is a myth.

## Viscosity: The Friction of Fluids

Viscosity is a fluid's resistance to deformation — essentially, internal friction. It's why honey pours slowly and water pours fast. It's why you can stir coffee easily but struggle with cold peanut butter.

Viscosity has enormous practical consequences. It determines how much energy you need to pump oil through a pipeline. It affects how quickly sediment settles in a river. It controls the thickness of the boundary layer — the thin region near any surface where the fluid velocity goes from the free-stream value to zero at the wall.

That boundary layer deserves special attention. Every surface in contact with a moving fluid has one. It's where most of the interesting physics happens — friction drag, heat transfer, flow separation. When a boundary layer separates from a surface (like airflow detaching from a wing at too steep an angle), you get stall, vortices, and dramatically increased drag.

Some fluids — called Newtonian fluids — have viscosity that stays constant regardless of how fast you shear them. Water and air are Newtonian. But plenty of common substances aren't. Ketchup gets less viscous when you shake it (shear-thinning). Cornstarch mixed with water gets more viscous under impact (shear-thickening — this is why you can run across a pool of it but sink if you stand still). Blood is shear-thinning, which actually helps it flow through narrow capillaries.

## Compressible vs. Incompressible Flow

When a fluid moves slowly compared to the speed of sound in that fluid, density changes are negligible — the fluid is effectively incompressible. Water is nearly always treated as incompressible. Air at low speeds (below about Mach 0.3, or roughly 230 mph at sea level) is too.

But crank the speed up, and compressibility effects become dominant. This is the area of high-speed [aerodynamics](/aerodynamics) — supersonic and hypersonic flow.

### Shock Waves

When an object moves faster than sound, the pressure disturbances it creates can't propagate ahead of it. They pile up into a shock wave — an extremely thin region (fractions of a millimeter) across which pressure, temperature, and density jump dramatically. The sonic boom you hear when a supersonic jet passes overhead is the shock wave reaching you.

Shock waves are violent. The temperature jump across a strong shock can be thousands of degrees. The pressure jump can crush structures. Managing shock waves is one of the central challenges in designing supersonic and hypersonic vehicles.

### Supersonic and Hypersonic Regimes

**Transonic flow** (roughly Mach 0.8 to 1.2) is particularly tricky because some regions of the flow are subsonic while others are supersonic. The Boeing 787 cruises in this regime, and its wing is carefully designed to manage the shock waves that form on the upper surface.

**Supersonic flow** (Mach 1 to 5) is actually more mathematically tractable than transonic flow because the entire field is supersonic. But the [engineering](/engineering) challenges — heat, structural loads from shock waves, engine design — are enormous.

**Hypersonic flow** (above Mach 5) adds extreme heating. At Mach 10, air temperatures can exceed 3,000°C. The Space Shuttle's tiles, ablative heat shields on re-entry capsules — these exist because hypersonic fluid dynamics turns air into a plasma torch.

## Computational Fluid Dynamics (CFD)

Since analytical solutions to the Navier-Stokes equations are rare, engineers turn to computers. CFD divides the fluid domain into millions (sometimes billions) of tiny cells and solves approximate versions of the governing equations at each one.

### How CFD Works

The basic process is conceptually straightforward:

1. **Geometry creation**: Define the shape of the object and the fluid domain around it.
2. **Meshing**: Divide the domain into a grid of cells. This is arguably the most critical step — a bad mesh gives bad results regardless of everything else. Near surfaces, the mesh must be extremely fine to capture boundary layer behavior.
3. **Setting boundary conditions**: What's the incoming flow speed? What pressure exists at the outlet? Is the wall heated? These conditions define the problem.
4. **Solving**: The computer iterates through the equations, updating velocity, pressure, and temperature at each cell until the solution converges (stops changing significantly).
5. **Post-processing**: Visualize and analyze the results — pressure maps, streamlines, force coefficients.

### The Turbulence Modeling Problem

Here's the dirty secret of CFD: we can't directly simulate turbulence for most engineering problems. Turbulent eddies span a range of scales from meters down to fractions of a millimeter. Resolving all of them (called Direct Numerical Simulation, or DNS) requires so many grid cells that even the fastest supercomputers can only handle simple geometries at low Reynolds numbers.

Instead, engineers use turbulence models — mathematical approximations that estimate the effects of turbulence without resolving every eddy. Models like k-epsilon, k-omega SST, and Reynolds Stress Models each have strengths and weaknesses. Choosing the right model for your problem is as much art as science, and using the wrong one can give completely incorrect results.

Large Eddy Simulation (LES) splits the difference: it directly resolves large eddies and models only the smallest ones. It's more accurate than traditional models but far more computationally expensive. As computer power grows, LES is becoming feasible for more engineering applications.

### CFD Applications

CFD is everywhere in modern engineering. Aircraft designers use it to optimize wing shapes for fuel efficiency — Airbus and Boeing test thousands of digital wing variants before committing to wind tunnel testing. Automotive engineers simulate airflow around car bodies to reduce drag and improve fuel economy. Formula 1 teams use CFD so extensively that the sport's regulations limit how much computing power each team can use.

Beyond vehicles, CFD models blood flow through artificial heart valves, optimizes the mixing in [chemical engineering](/chemical-engineering) reactors, predicts wind loads on skyscrapers, and simulates ocean currents for climate research. Weather forecasting is fundamentally a CFD problem — the atmosphere is a fluid, and predicting its behavior means solving the equations of fluid dynamics on a planetary scale.

## Fluid Dynamics in Nature

Nature is full of stunning fluid dynamics — and studying natural flows has repeatedly inspired engineering solutions.

### Biological Flows

Your circulatory system is a fluid dynamics system. Blood — a non-Newtonian fluid — flows through a network of vessels with diameters ranging from the centimeter-scale aorta to capillaries just 5-10 micrometers wide. The heart generates pulsatile flow (pressure waves, not steady flow), and the elasticity of artery walls creates wave propagation effects.

Understanding blood flow matters medically. Atherosclerosis (plaque buildup) preferentially occurs in regions of disturbed flow — arterial branches and curves where the flow separates and recirculates. Artificial heart valves must be designed to produce flow patterns that don't damage blood cells or promote clotting.

Fish and dolphins exploit fluid dynamics with remarkable efficiency. Dolphins' skin may suppress turbulence, reducing drag. Schooling fish draft off each other like cyclists in a peloton, with trailing fish benefiting from vortices shed by leaders. Humpback whale flippers have tubercles (bumps) on their leading edges that delay stall — a discovery that's been applied to wind turbine blade design.

### Atmospheric and Oceanic Flows

Weather is fluid dynamics at planetary scale. The atmosphere and oceans are both fluids driven by solar heating, Earth's rotation (Coriolis effect), and interactions with the land surface.

The jet stream — a river of fast-moving air at about 30,000 feet — exists because of temperature differences between the equator and poles combined with Earth's rotation. Understanding its behavior is critical for aviation routing and weather prediction.

Ocean currents distribute heat around the planet. The Gulf Stream carries warm water from the Gulf of Mexico to Northern Europe, which is why London has milder winters than Labrador despite being at a similar latitude. Climate change's effect on these circulation patterns is a major concern — and modeling them requires some of the most sophisticated CFD simulations in existence.

### Astrophysical Flows

Fluid dynamics extends far beyond Earth. The interiors of stars are fluid, and stellar convection transports energy from the nuclear furnace at the core to the radiating surface. Accretion disks around black holes are fluid dynamics problems. Galaxy formation involves the gravitational collapse and rotation of enormous gas clouds.

The solar wind — a stream of charged particles flowing from the Sun — follows magnetohydrodynamic equations, which combine fluid dynamics with [electromagnetism](/electromagnetism). Understanding this flow matters for predicting space weather and protecting satellites.

## Historical Development

Fluid dynamics has a rich [intellectual history](/intellectual-history) stretching back centuries.

**Archimedes** (287-212 BC) described buoyancy: an object immersed in fluid experiences an upward force equal to the weight of fluid displaced. He reportedly discovered this in the bath and ran through Syracuse naked shouting "Eureka."

**Leonardo da Vinci** (1452-1519) made detailed observations of water flow, sketching vortices and turbulence with remarkable accuracy. His notebooks contain some of the earliest systematic studies of fluid motion.

**Isaac Newton** contributed the concept of viscosity as a linear relationship between stress and strain rate — the defining characteristic of Newtonian fluids.

**Daniel Bernoulli** (1738) published *Hydrodynamica*, establishing the relationship between fluid speed and pressure.

**Leonhard Euler** derived the equations of inviscid fluid flow in 1757 — essentially the Navier-Stokes equations without viscosity.

**Claude-Louis Navier** (1822) and **George Gabriel Stokes** (1845) independently added viscous terms, producing the equations that now bear both their names.

**Osborne Reynolds** (1883) systematically studied the transition from laminar to turbulent flow, introducing his famous dimensionless number.

**Ludwig Prandtl** (1904) introduced boundary layer theory, which finally made it possible to understand how viscous effects near surfaces produce drag. This was arguably the most important practical advance in the field's history — it bridged the gap between mathematical theory and engineering reality.

## Modern Challenges and Frontiers

Despite centuries of work, fluid dynamics still holds unsolved problems. Turbulence remains the big one — physicist Richard Feynman called it "the most important unsolved problem of [classical mechanics](/classical-mechanics)." We can simulate it, model it approximately, and observe it. But a complete theoretical understanding of how and why turbulent structures form and evolve remains elusive.

Other frontiers include:

**Microfluidics**: Fluid behavior at the micrometer scale, where surface tension dominates and viscous forces overwhelm inertia. Applications include lab-on-a-chip diagnostic devices and targeted drug delivery.

**Multiphase flows**: Mixtures of liquid and gas (like bubbles in a liquid or droplets in air) are extraordinarily complex. Spray combustion in engines, cloud formation, boiling heat transfer — all involve multiphase fluid dynamics.

**Active matter**: Fluids containing self-propelled particles — bacteria swimming in water, for instance — exhibit collective behavior that doesn't follow traditional fluid dynamics rules.

**Climate modeling**: Predicting Earth's climate requires coupling atmospheric fluid dynamics with ocean dynamics, ice sheet dynamics, and chemical processes across timescales from hours to millennia.

## Key Takeaways

Fluid dynamics studies the motion of liquids and gases using conservation laws expressed as partial [differential equations](/differential-equations) — primarily the Navier-Stokes equations. The field divides roughly into laminar (smooth, predictable) and turbulent (chaotic, mixing) flows, with the Reynolds number marking the transition. Computational fluid dynamics allows engineers to simulate flows numerically when analytical solutions don't exist, which is most of the time. Applications span [aerodynamics](/aerodynamics), medicine, weather prediction, ocean science, [astrophysics](/astrophysics), and virtually every branch of engineering. And turbulence — despite centuries of study and enormous computational resources — remains one of the deepest unsolved problems in physics.
