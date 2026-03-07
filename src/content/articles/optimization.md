---
title: "What Is Optimization?"
slug: optimization
description: "Optimization is finding the best solution from a set of possibilities given constraints. Learn about its methods, applications, and why it matters."
category: everyday-concepts
tags: ["optimization", "mathematics", "operations research", "algorithms", "decision making", "efficiency"]
heroImage: "/images/articles/optimization.webp"
heroAlt: "Editorial photograph representing the concept of optimization"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 4
wordCount: 980
tier: "3"
relatedArticles: ["algorithms", "mathematics", "operations-management", "data-analysis"]
externalSources:
  - title: "MIT - Optimization Methods"
    url: "https://ocw.mit.edu/"
  - title: "INFORMS - Operations Research"
    url: "https://www.informs.org/"
  - title: "Stanford - Convex Optimization"
    url: "https://web.stanford.edu/~boyd/cvxbook/"
faq:
  - q: "What is the difference between optimization and maximization?"
    a: "Maximization is a type of optimization — finding the highest possible value of something. Optimization is the broader concept that includes both maximizing (profit, efficiency, output) and minimizing (cost, waste, error). The goal depends on the problem. Mathematically, minimizing f(x) is equivalent to maximizing -f(x), so they're two sides of the same coin."
  - q: "What is a local optimum vs. a global optimum?"
    a: "A local optimum is the best solution in its immediate neighborhood — like the highest point on a nearby hill. A global optimum is the best solution overall — the highest point on the entire mountain range. Many optimization methods can get stuck at local optima, missing the global best. Advanced techniques like simulated annealing and genetic algorithms are designed to escape local optima."
  - q: "Where is optimization used in everyday life?"
    a: "GPS navigation optimizes your route for time or distance. Airlines optimize flight schedules and pricing. Streaming services optimize content recommendations. Your phone's battery management optimizes power usage. Supply chains optimize inventory and shipping. Financial portfolios are optimized for risk and return. Optimization is everywhere, usually invisible."
---

# What Is Optimization?

Optimization is the process of finding the best possible solution to a problem from a set of available alternatives, usually subject to constraints. Maximize profit. Minimize cost. Find the shortest route. Allocate resources most effectively. Schedule tasks most efficiently. It's one of the most widely applied branches of [mathematics](/mathematics), touching everything from airline [scheduling](/scheduling) and investment portfolios to [machine learning](/machine-learning) and bridge design.

## The Basic Framework

Every optimization problem has three components:

**An objective function** — the thing you're trying to maximize or minimize. Profit. Distance. Time. Error. Energy consumption. Weight. Whatever matters most.

**Decision variables** — the things you can control or adjust. Prices. Production quantities. Route choices. Material thicknesses. Portfolio allocations.

**Constraints** — the limits you can't violate. Budget caps. Physical laws. Time deadlines. Regulatory requirements. Resource availability.

The goal is to find values of the decision variables that make the objective function as good as possible while staying within all constraints.

A simple example: you're planning a road trip and want to minimize driving time. Your decision variables are the route choices at each intersection. Your constraints are that you must use actual roads, can't exceed speed limits, and need to arrive by 6 PM. The optimization problem is finding the route that gets you there fastest within those limits. Your GPS solves this kind of problem in seconds.

## Why It's Hard

Simple optimization problems — finding the minimum of a smooth function with two variables — are straightforward. But real-world problems are messy.

**Combinatorial explosion.** A delivery company with 20 stops has 20! (about 2.4 quintillion) possible route orderings. Checking every possibility isn't feasible even for the fastest computers. The Traveling Salesman Problem — finding the shortest route visiting each city exactly once — is one of the most famous unsolved problems in [computer science](/computer-science). Nobody knows if an efficient exact solution exists.

**Multiple objectives.** You want to minimize cost AND maximize quality AND reduce environmental impact. These objectives often conflict. Improving quality usually costs more. Reducing emissions might slow production. Multi-objective optimization finds the set of trade-off solutions (called the Pareto frontier) where you can't improve one objective without worsening another.

**Uncertainty.** Real decisions involve unknowns. Customer demand fluctuates. Weather changes. Equipment breaks. Stochastic optimization accounts for randomness, finding solutions that perform well across a range of possible scenarios rather than perfectly in one.

**Nonlinearity.** Many real systems aren't linear — doubling inputs doesn't double outputs. Nonlinear optimization is harder because the solution field can have multiple peaks and valleys, making it easy to get stuck in a local optimum that isn't the global best.

## The Major Methods

**[Linear programming](/linear-programming) (LP)** handles problems where both the objective function and constraints are linear. Despite the restrictive-sounding name, LP is extraordinarily useful. Airlines use it to schedule crews. Oil refineries use it to determine optimal product mixes. Supply chains use it for transportation and distribution planning. The simplex method (George Dantzig, 1947) and interior point methods solve LP problems efficiently even with thousands of variables.

**[Integer programming](/integer-programming)** adds the requirement that some or all variables must be whole numbers. Scheduling problems, facility location decisions, and yes/no decisions naturally involve integers. These problems are much harder than continuous LP — technically NP-hard in general — but modern solvers handle surprisingly large instances.

**Nonlinear programming** addresses problems with curved objective functions or constraints. Gradient descent — repeatedly moving in the direction that improves the objective fastest — is the workhorse method. It powers machine learning training, where the "objective" is minimizing prediction error across millions of data points.

**Active programming** breaks complex problems into simpler subproblems and solves them recursively. It's used in resource allocation over time, [inventory management](/inventory-[management](/management)), and sequence alignment in bioinformatics.

**Metaheuristics** — genetic algorithms, simulated annealing, particle swarm optimization — are general-purpose methods inspired by natural processes. They don't guarantee the best possible answer, but they find good solutions to problems that are too complex for exact methods. They're popular in [engineering](/engineering) design, scheduling, and [logistics](/logistics).

## Where Optimization Shows Up

**Logistics and transportation.** UPS saved 10 million gallons of fuel annually by optimizing delivery routes to minimize left turns (right turns are faster and safer). Airlines use optimization to set ticket prices, schedule flights, assign aircraft, and plan crew rotations — problems with millions of variables.

**[Finance](/finance).** Modern portfolio theory (Harry Markowitz, 1952) frames investment as an optimization problem: maximize expected return for a given level of risk. Every robo-advisor and institutional fund manager uses optimization algorithms.

**Machine learning.** Training a neural network is fundamentally an optimization problem: find the model parameters that minimize prediction error on training data. Gradient descent and its variants (SGD, Adam) are the optimization engines behind modern AI.

**Engineering design.** Structural engineers optimize beam dimensions to minimize weight while maintaining strength. Aerospace engineers optimize wing shapes for lift-to-drag ratio. Circuit designers optimize layouts for performance and power consumption.

**Healthcare.** Hospitals optimize operating room schedules, staff assignments, and patient flow. Radiation therapy plans optimize beam angles and intensities to maximize tumor dose while minimizing damage to healthy tissue.

**Energy.** Power grid operators optimize the mix of generation sources minute by minute to meet demand at minimum cost while satisfying reliability and emission constraints.

## The Practical Takeaway

You don't need to be a mathematician to think in optimization terms. Any time you're making a decision — choosing between options, allocating limited resources, trying to improve a process — you're solving an optimization problem, even if you're doing it intuitively.

The formal discipline gives you tools to handle problems too complex for intuition. But the mindset is what matters most: define what you're trying to achieve, identify what you can control, understand your constraints, and search systematically for the best answer. That's optimization, whether you're running a linear program or just figuring out the best way to pack your car for a road trip.
