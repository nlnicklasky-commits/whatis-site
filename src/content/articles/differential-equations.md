---
title: What Is Differential Equations?
slug: differential-equations
description: "Differential equations describe how things change using rates of change. Learn ODEs, PDEs, solution methods, and real-world applications."
category: science
tags: ["differential equations", "mathematics", "calculus", "modeling", "physics", "engineering", "applied math"]
heroImage: "/images/articles/differential-equations-hero.webp"
heroAlt: "Mathematical equations and graphs showing curves representing solutions to differential equations"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2342
tier: "2"
relatedArticles: ["algebra", "abstract-algebra", "algorithms", "acoustics", "aerodynamics"]
externalSources:
  - title: "MIT OpenCourseWare - Differential Equations"
    url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/"
  - title: "Khan Academy - Differential Equations"
    url: "https://www.khanacademy.org/math/differential-equations"
  - title: "Paul's Online Math Notes - Differential Equations"
    url: "https://tutorial.math.lamar.edu/Classes/DE/DE.aspx"
  - title: "Wolfram MathWorld - Ordinary Differential Equation"
    url: "https://mathworld.wolfram.com/OrdinaryDifferentialEquation.html"
faq:
  - q: "Do I need to know calculus before learning differential equations?"
    a: "Yes. Differential equations are built on calculus concepts, particularly derivatives and integrals. You should be comfortable with single-variable calculus (differentiation, integration, chain rule, substitution) before starting ODEs, and multivariable calculus (partial derivatives, multiple integrals) before tackling PDEs. A solid foundation in algebra is also essential."
  - q: "What's the difference between ordinary and partial differential equations?"
    a: "Ordinary differential equations (ODEs) involve functions of a single variable and their derivatives. Partial differential equations (PDEs) involve functions of multiple variables and their partial derivatives. An ODE might describe how a population changes over time alone. A PDE might describe how temperature varies across both space and time simultaneously."
  - q: "Can all differential equations be solved analytically?"
    a: "No. In fact, most differential equations encountered in practice cannot be solved with exact analytical formulas. Many real-world equations require numerical methods—algorithms that compute approximate solutions step by step. This isn't a failure of mathematics; it's the nature of the problems. Numerical solutions can be made extremely accurate and are essential tools in science and engineering."
  - q: "Why are differential equations so important in physics?"
    a: "Because physics describes how things change, and differential equations are the mathematical language of change. Newton's second law (F=ma) is a differential equation. Maxwell's equations describing electromagnetism are differential equations. The Schrodinger equation in quantum mechanics is a differential equation. Essentially every fundamental law of physics is expressed as a differential equation."
---

# What Is Differential Equations?

A differential equation is a mathematical equation that relates a function to its derivatives—that is, to its rates of change. Where ordinary [algebra](/algebra) asks "what number satisfies this relationship?", a differential equation asks "what function satisfies this relationship involving the function and how fast it's changing?" Differential equations are the primary mathematical tool for modeling any system that evolves over time or varies across space.

## Why Should You Care?

Here's the honest pitch: differential equations describe how everything changes. Not metaphorically. Literally everything in physics, engineering, biology, economics, and chemistry that involves change over time or variation across space is described by differential equations.

The trajectory of a thrown ball? A differential equation (Newton's second law). The spread of a disease? A differential equation (the SIR model). The vibration of a guitar string? A differential equation (the wave equation). The decay of radioactive atoms? A differential equation (exponential decay). The flow of current in a circuit? Differential equations. The price of options on Wall Street? Differential equations (the Black-Scholes equation).

If calculus is the mathematics of change, differential equations are the mathematics of *how things change based on their current state*. That feedback loop—where the rate of change depends on the current value—is what makes them so powerful and so hard.

## The Basic Idea

Let's start with something concrete. Imagine you have a bank account earning 5% annual interest, compounded continuously. The rate at which your money grows depends on how much money you currently have. If you have $1,000, you earn $50/year. If you have $10,000, you earn $500/year. More money means faster growth.

Mathematically: dM/dt = 0.05M, where M is your money and t is time. This is a differential equation. It says "the rate of change of M with respect to time equals 0.05 times M."

The solution? M(t) = M₀ × e^(0.05t), where M₀ is your starting balance. This exponential function is the only function whose rate of change is always proportional to its current value. And that makes intuitive sense—continuous compound interest produces exponential growth.

That's the whole game: write an equation relating a function to its rates of change, then find the function that satisfies the relationship.

## Ordinary Differential Equations (ODEs)

ODEs involve functions of a single independent variable—usually time. They're the starting point for most differential equations courses and the most commonly encountered type in applications.

### First-Order ODEs

A first-order ODE involves only the first derivative. The general form is dy/dx = f(x, y). These equations describe processes where the rate of change depends on the current state and possibly the current time.

**Separable equations** are the simplest type. If you can write dy/dx = g(x)h(y), you can separate the variables—put all y terms on one side, all x terms on the other—and integrate both sides. The population growth equation dP/dt = rP is separable and gives exponential growth.

**Linear first-order equations** have the form dy/dx + P(x)y = Q(x). These are solved using an integrating factor—multiplying both sides by a carefully chosen function that turns the left side into a perfect derivative. The technique is mechanical: compute the integrating factor, multiply through, integrate, and solve for y.

**Exact equations** arise when the equation can be written as the total differential of some function F(x,y). Finding the solution means reconstructing F from its partial derivatives—essentially running the chain rule backward.

### Second-Order ODEs

Second-order ODEs involve the second derivative and are especially important in physics because Newton's second law (F = ma) is second-order—acceleration is the second derivative of position.

**Constant-coefficient linear ODEs** are the bread and butter of engineering. The equation ay'' + by' + cy = f(t) describes an enormous range of physical systems: mass-spring systems, electrical circuits, mechanical vibrations, simple models of building sway during earthquakes.

The solution method involves the **characteristic equation**: ar² + br + c = 0. The roots of this [algebra](/algebra) equation determine the behavior of the system:

- Two real distinct roots: overdamped (gradual return to equilibrium)
- Repeated real root: critically damped (fastest return without oscillation)
- Complex conjugate roots: underdamped (oscillation with decay)

This classification isn't just mathematical bookkeeping. It describes physically different behaviors. A car's suspension is engineered to be slightly underdamped—you want it to absorb bumps quickly but not bounce. A closing door should be critically damped—close smoothly without slamming or bouncing. These engineering decisions come directly from the characteristic equation.

**Forced oscillations** add an external driving force: ay'' + by' + cy = F₀cos(ωt). This models everything from speakers reproducing sound to bridges responding to wind. The terrifying phenomenon of **resonance** occurs when the driving frequency matches the system's natural frequency—the oscillations grow without bound (in the idealized model) or to dangerous amplitudes (in reality). The Tacoma Narrows Bridge collapse in 1940 is the famous cautionary tale, though the actual physics is more subtle than simple resonance.

### Systems of ODEs

Real-world problems rarely involve a single changing quantity. Predator-prey dynamics involve both predator and prey populations changing simultaneously, each affecting the other. The Lotka-Volterra equations—dx/dt = αx - βxy, dy/dt = δxy - γy—describe this interaction. Foxes eat rabbits, so more foxes means fewer rabbits. But fewer rabbits means less food for foxes, so foxes decline too. Then rabbits recover, and the cycle repeats.

Systems of ODEs are often analyzed using **phase portraits**—plots in the space of state variables that show how the system evolves from any initial condition. These reveal fixed points (equilibrium states), limit cycles (sustained oscillations), and the stability of each—whether nearby trajectories approach or flee.

## Partial Differential Equations (PDEs)

When quantities depend on multiple variables—temperature depends on both position and time, for instance—you need partial differential equations. PDEs are where differential equations get simultaneously more powerful and more challenging.

### The Big Three

Three PDEs appear so frequently that they've earned special status.

**The heat equation** (∂u/∂t = k∂²u/∂x²) describes how temperature distributes over time. Heat flows from hot regions to cold regions at a rate proportional to the temperature difference. This equation applies far beyond literal heat—it describes diffusion of chemicals, spread of information, even certain financial models.

**The wave equation** (∂²u/∂t² = c²∂²u/∂x²) describes [acoustics](/acoustics), light, water waves, vibrating strings, and electromagnetic radiation. It's the mathematical foundation of everything from guitar design to antenna engineering. The parameter c is the wave speed—change it, and you change whether you're describing sound in air (343 m/s) or light in vacuum (3 × 10⁸ m/s).

**Laplace's equation** (∂²u/∂x² + ∂²u/∂y² = 0) describes steady-state systems—situations where things have stopped changing in time. Electrostatic fields, steady fluid flow, gravitational potential—all governed by Laplace's equation. Its solutions (called harmonic functions) have beautiful mathematical properties and appear throughout physics and engineering.

### Solving PDEs

PDEs are generally much harder to solve than ODEs. The primary technique is **separation of variables**: assume the solution is a product of functions, each depending on a single variable. u(x,t) = X(x)T(t), for instance. This converts the PDE into separate ODEs, which you already know how to solve.

**Fourier series** and **Fourier transforms** are essential companions. Joseph Fourier discovered that any reasonable function can be expressed as a sum (possibly infinite) of sines and cosines. This means you can break a complex initial condition into simple sinusoidal components, solve the equation for each component separately, and add the results. This insight—decompose, solve, reassemble—is one of the most powerful ideas in applied mathematics.

**Boundary conditions** specify what happens at the edges of the domain (the temperature at both ends of a metal rod, the displacement of a string at its fixed endpoints). **Initial conditions** specify the starting state. Together, they make the solution unique—without them, a PDE typically has infinitely many solutions.

## Numerical Methods: When Exact Solutions Don't Exist

Most differential equations encountered in real applications can't be solved with pen and paper. Turbulent fluid flow, complex biological systems, nonlinear dynamics—these require numerical methods that compute approximate solutions using computers.

**Euler's method** is the simplest: take small steps along the tangent line. If you know the solution at time t and the derivative tells you the slope, advance to t + Δt by following that slope. The smaller the step, the more accurate the result—and the more computation required.

**Runge-Kutta methods** (particularly the fourth-order version, RK4) dramatically improve accuracy by sampling the slope at multiple points within each step. RK4 is the workhorse of scientific computing—accurate enough for most applications, simple enough to implement, efficient enough to run in reasonable time.

**Finite element methods** tackle PDEs by dividing the spatial domain into small elements (triangles, tetrahedra) and solving on each element. This approach handles complex geometries—airplane wings, human organs, building structures—that analytical methods can't touch. Most modern engineering simulation software uses finite elements.

**Adaptive methods** automatically adjust step sizes based on how the solution is behaving. Where the solution changes rapidly, they take tiny steps for accuracy. Where it changes slowly, they take large steps for efficiency. This is crucial for stiff equations—systems with both fast and slow dynamics—where fixed-step methods either waste computation on the slow parts or lose accuracy on the fast parts.

## Differential Equations in the Real World

### Physics

Essentially every fundamental law of physics is a differential equation. Newton's laws of motion. Maxwell's equations of electromagnetism. The Schrodinger equation of quantum mechanics. Einstein's field equations of general relativity. The Navier-Stokes equations of fluid dynamics. Understanding physics *is* understanding differential equations—there's no separating them.

The Navier-Stokes equations deserve special mention. They describe fluid flow—water, air, blood, magma—and are so difficult that proving they always have smooth solutions is one of the seven Millennium Prize Problems, carrying a $1 million reward. We use numerical approximations of these equations every day for weather forecasting and [aerodynamics](/aerodynamics) simulation, but their fundamental mathematical properties remain partially unknown.

### Engineering

Engineers use differential equations constantly. Circuit analysis relies on ODEs relating voltage, current, resistance, capacitance, and inductance. Control systems (thermostats, cruise control, autopilots) use differential equations to model and regulate active systems. Structural analysis uses PDEs to predict how buildings and bridges respond to loads, vibrations, and earthquakes.

[Aerospace engineering](/aerospace-engineering) is essentially applied differential equations. Orbital mechanics, aerodynamic forces, propulsion dynamics, structural loading—every aspect of spacecraft and aircraft design involves solving differential equations under specific constraints.

### Biology and Medicine

Population dynamics—growth, competition, predation, disease spread—are modeled with systems of ODEs. The SIR model (Susceptible-Infected-Recovered) that informed COVID-19 policy decisions is a system of three differential equations. Pharmacokinetics—how drugs are absorbed, distributed, metabolized, and excreted—uses compartment models based on ODEs.

The Hodgkin-Huxley equations describe how neurons fire, modeling the flow of ions through membrane channels. This work won the 1963 Nobel Prize and laid the mathematical foundation for computational neuroscience.

### Economics and Finance

The Black-Scholes equation—a PDE describing how option prices evolve—revolutionized financial markets and earned its creators the 1997 Nobel Prize in Economics. Economic growth models, inflation dynamics, and market equilibrium analysis all use differential equations.

Interest rate models, portfolio optimization, and risk assessment rely on stochastic differential equations—differential equations with random noise terms that capture the inherent uncertainty of financial markets.

## Chaos and Nonlinear Dynamics

Linear differential equations are (relatively) well-behaved: small changes in initial conditions produce small changes in solutions. Nonlinear equations can be wildly different.

Edward Lorenz discovered in 1963 that a simple system of three nonlinear ODEs—modeling atmospheric convection—exhibited extreme sensitivity to initial conditions. Tiny differences in starting values produced completely different trajectories after enough time. This sensitivity became popularly known as the "butterfly effect" and launched the field of chaos theory.

Chaotic systems are deterministic—they follow exact equations with no randomness—yet they're effectively unpredictable beyond a certain time horizon because measurement precision is always finite. This has deep implications: weather is governed by known equations but is inherently unpredictable beyond about two weeks because small measurement errors amplify exponentially.

The Lorenz attractor—the geometric shape traced by solutions of Lorenz's equations—became an icon of chaos theory. It's a strange attractor: solutions stay within a bounded region but never repeat exactly, tracing out an infinitely complex, never-repeating pattern. Beautiful mathematics born from differential equations.

## Learning Differential Equations

If you're approaching differential equations for the first time, here's practical advice.

**Get calculus solid first.** Differential equations assume fluency with derivatives, integrals, partial derivatives, and series. Shaky calculus foundations make differential equations unnecessarily painful.

**Focus on meaning, not just mechanics.** Anyone can learn to apply the integrating factor technique. Understanding *why* the technique works and *what the equation is saying physically* is where genuine learning happens. Always ask: what does this equation describe? What behavior does the solution predict?

**Use computational tools.** Software like MATLAB, Python (with SciPy), or Mathematica lets you visualize solutions, experiment with parameters, and build intuition. Plotting a family of solutions to see how they change with different initial conditions teaches more than solving ten textbook problems.

**Connect to applications.** Differential equations make much more sense when tied to physical systems you can visualize. A mass on a spring. Current flowing through a circuit. Heat spreading through a metal bar. The [algorithms](/algorithms) that solve these equations become meaningful when you understand what they're computing.

## Key Takeaways

Differential equations are the mathematical language for describing how things change. They relate functions to their rates of change, capturing the feedback loops that drive physical, biological, economic, and engineering systems. ODEs handle single-variable change; PDEs handle multi-variable change; systems of equations handle interacting quantities.

Analytical solutions exist for important special cases—and those solutions reveal deep truths about the behavior of physical systems. But most real-world differential equations require numerical methods, making computation an essential complement to theory.

From Newton's laws to weather prediction to financial modeling to disease spread, differential equations are the invisible mathematical machinery behind our understanding of the world. You may never solve one by hand after finishing a math course, but the systems those equations describe surround you constantly. Understanding the language of change—even conceptually—gives you a deeper appreciation for how the physical world works and why scientists and engineers think the way they do.
