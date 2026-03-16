---
title: "What Is Integer Programming?"
slug: integer-programming
description: "Integer programming is an optimization method where variables must be whole numbers, used to solve scheduling and logistics problems. Discover the key facts,..."
category: technology
tags: ["integer programming", "optimization", "operations research", "mathematical modeling", "discrete optimization", "linear programming"]
heroImage: "/images/articles/integer-programming-hero.webp"
heroAlt: "Editorial photograph representing the concept of integer programming"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2514
tier: "2"
relatedArticles: ["algorithms", "calculus", "applied-mathematics", "machine-learning", "graph-theory"]
externalSources:
  - title: "INFORMS - Institute for Operations Research and Management Sciences"
    url: "https://www.informs.org/"
  - title: "MIT OpenCourseWare - Integer Programming and Combinatorial Optimization"
    url: "https://ocw.mit.edu/courses/15-083j-integer-programming-and-combinatorial-optimization-fall-2009/"
  - title: "COIN-OR - Open Source Optimization Software"
    url: "https://www.coin-or.org/"
  - title: "Gurobi Optimization Resources"
    url: "https://www.gurobi.com/resources/"
faq:
  - q: "What is the difference between linear programming and integer programming?"
    a: "Linear programming allows variables to take any value (including fractions), while integer programming requires some or all variables to be whole numbers. This constraint makes integer programming much harder to solve computationally. Linear programs can be solved efficiently in polynomial time, but integer programs are NP-hard in general — solving them can take exponentially longer as problem size increases."
  - q: "Where is integer programming used in real life?"
    a: "Integer programming is used extensively in airline crew scheduling, delivery route optimization, supply chain management, telecommunications network design, financial portfolio selection, sports scheduling, factory production planning, and military logistics. Any situation where you need to make yes-or-no decisions or allocate indivisible resources is a candidate for integer programming."
  - q: "Is integer programming hard to learn?"
    a: "The basic concepts are accessible to anyone comfortable with algebra. Formulating a simple integer program — defining variables, an objective function, and constraints — is straightforward. However, solving large problems efficiently requires understanding specialized algorithms and often commercial solver software. Most practitioners use tools like Gurobi, CPLEX, or open-source solvers rather than coding algorithms from scratch."
  - q: "How long does it take to solve an integer program?"
    a: "It varies enormously. Small problems with a few hundred variables solve in milliseconds. Large real-world problems with millions of variables and constraints can take hours, days, or may not solve to optimality at all within practical time limits. Solver performance depends on problem structure, formulation quality, and available computing power."
---

# What Is Integer Programming?

Integer programming is a type of mathematical [optimization](/optimization) where some or all of the decision variables are restricted to whole numbers. That restriction — which sounds minor — actually makes problems dramatically harder to solve than their continuous counterparts, and it's also what makes integer programming so useful for real-world decisions.

Think about it this way. If you're deciding how many trucks to send on delivery routes, the answer needs to be a whole number. You can't send 3.7 trucks. If you're deciding whether to build a factory at a particular location, the answer is yes or no — 1 or 0. If you're [scheduling](/scheduling) airline crews, each pilot is a complete human being, not a fraction of one.

These are the kinds of problems integer programming was built to solve.

## Starting from [Linear Programming](/linear-programming)

To understand integer programming, you first need to understand linear programming (LP) — its continuous-variable cousin.

### What Linear Programming Does

A linear program has three components:

1. **Decision variables** — the quantities you're trying to determine (how many units to produce, how much of each ingredient to use)
2. **An objective function** — what you're trying to maximize or minimize (profit, cost, time), expressed as a linear combination of the variables
3. **Constraints** — limitations expressed as linear inequalities (budget limits, capacity restrictions, demand requirements)

Here's a simple example. You make two products. Product A earns $40 profit and requires 2 hours of machine time and 1 hour of labor. Product B earns $30 profit and requires 1 hour of machine time and 2 hours of labor. You have 100 hours of machine time and 80 hours of labor available. How many of each should you produce?

A linear program can solve this efficiently. The answer might be: produce 36.67 units of A and 21.67 units of B. If these are barrels of chemical or pounds of flour, fractional answers are fine — you can actually produce 36.67 barrels.

But what if Product A is a car? You can't sell two-thirds of a car.

### The Integer Constraint Changes Everything

Integer programming adds the requirement that some or all variables must be whole numbers. In a **pure integer program**, every variable is integer. In a **mixed-integer program** (MIP), some variables are integer and others are continuous. In a **binary integer program** (also called 0-1 programming), variables can only be 0 or 1.

That binary case is especially powerful. A 0-1 variable perfectly represents yes/no decisions: Should we open this warehouse? Should this crew fly this route? Should this job run on this machine?

The computational difference between LP and IP is staggering. Linear programs with millions of variables can be solved in seconds using the simplex method or interior point methods. Integer programs with a few thousand variables can take hours. The reason is fundamental: LP has a smooth, convex solution space that [algorithms](/algorithms) can work through efficiently, while IP has a discrete, combinatorial solution space where the number of possible solutions explodes exponentially.

## Why Rounding Doesn't Work

The obvious shortcut is tempting: solve the LP relaxation (ignoring the integer constraint), then round the answer to the nearest whole numbers. Simple, right?

Wrong. Rounding can produce terrible results — or even infeasible ones.

Consider a simple problem: you have a $100 budget and two projects. Project 1 costs $60 and returns $90. Project 2 costs $60 and returns $80. The LP relaxation says: invest 0.833 in Project 1 and 0.833 in Project 2, for a return of $141.67. But rounding both up to 1 exceeds your budget (cost = $120 > $100). Rounding both down to 0 gives zero return. Rounding to one of each works but gives $170 — wait, that exceeds budget too. The actual optimal integer solution is to pick one project (Project 1 for $90 return), which looks nothing like the rounded LP solution.

For larger problems with hundreds of interacting constraints, rounding can miss the optimal solution by enormous margins. This is why dedicated integer programming methods exist.

## How Integer Programs Are Solved

Solving integer programs requires sophisticated algorithms. The two most important are branch and bound and cutting planes, often combined into a hybrid called branch and cut.

### Branch and Bound

Branch and bound works by systematically exploring the space of possible solutions, [pruning](/pruning) away regions that can't contain the optimal solution.

Start by solving the LP relaxation (ignoring integer constraints). If the solution happens to be all integers, you're done — that's your answer. Usually it won't be. So you pick a variable with a fractional value (say, x₁ = 3.7) and create two subproblems: one where x₁ ≤ 3 and one where x₁ ≥ 4. Each subproblem is solved as an LP.

The LP solution of each subproblem provides a bound on the best integer solution in that branch. If a subproblem's bound is worse than the best integer solution found so far, you prune that entire branch — no need to explore it further.

This creates a tree of subproblems. The algorithm explores branches, finds integer solutions (which update the best known answer), and prunes branches that can't improve on it. For well-structured problems, this eliminates most of the exponential search space. For poorly structured problems... it doesn't, and you're in for a long wait.

### Cutting Planes

Cutting planes take a different approach. Instead of branching, they add new constraints (cuts) that tighten the LP relaxation without eliminating any integer solutions.

Imagine the LP feasible region as a blob shape, and the integer solutions are the grid points inside it. The LP optimum is somewhere on the boundary of the blob, probably not at a grid point. A cutting plane slices off part of the blob that contains the LP optimum but no integer points, forcing the LP solution closer to an integer point.

The art is finding cuts that are both valid (don't exclude any integer solutions) and effective (significantly tighten the relaxation). Gomory cuts, derived directly from the LP solution, are guaranteed to work but sometimes converge slowly. Problem-specific cuts — like subtour elimination constraints for the traveling salesman problem — can be dramatically more effective.

### Branch and Cut: The Modern Approach

Modern solvers combine both approaches. They solve the LP relaxation, add cutting planes to tighten the formulation, then branch on fractional variables. At each node in the branch-and-bound tree, they look for additional cuts. This hybrid approach — branch and cut — is what makes commercial solvers like Gurobi, CPLEX, and open-source solvers like SCIP remarkably powerful.

The progress in solver technology has been extraordinary. A problem that took 1 computer-year to solve in 1991 could be solved in about 1 second by 2015. That's a speedup of roughly 800 billion times, split between algorithmic improvements (about a 2 million-fold speedup) and faster hardware (about a 400,000-fold speedup). The algorithm improvements contributed more than the hardware.

### Heuristics and Approximations

For problems too large or too difficult to solve optimally, heuristic methods find good (but not provably optimal) solutions quickly. Common approaches include:

**Greedy [heuristics](/heuristics)** make the locally best choice at each step. Fast but often suboptimal.

**Local search** starts with a feasible solution and iteratively improves it by making small changes. Simulated annealing, tabu search, and genetic [algorithms](/algorithms) are variations on this theme.

**Matheuristics** combine heuristic methods with mathematical programming — for instance, using a heuristic to find a good starting solution, then applying integer programming to improve a subset of the variables.

In practice, many real-world integer programs are solved using a combination of exact methods (for guaranteed optimality) and heuristics (for speed). The solver might find a solution within 1% of optimal in minutes, then spend hours trying to close that last 1% gap.

## Formulation: The Art of Modeling

The real skill in integer programming isn't [running](/running) the solver — it's formulating the model. The same real-world problem can be expressed as different mathematical programs, and some formulations solve dramatically faster than others.

### Decision Variables

Choosing the right variables is crucial. For a scheduling problem, should your variables represent "Is person P assigned to shift S?" (binary) or "How many people work shift S?" (integer)? Both can model the same problem, but they lead to very different formulations with very different solve times.

### Big-M Constraints

When you need to model logical conditions (if X happens, then Y must be true), you often use "big-M" constraints — constraints that use a large constant M to activate or deactivate conditions based on binary variables.

For example: "If we build a warehouse (y = 1), we can ship up to 1,000 units from it" becomes: ship ≤ 1000 × y. When y = 0 (no warehouse), shipping is forced to 0. When y = 1 (warehouse built), shipping can be up to 1,000.

Choosing the right value of M matters more than you'd think. Too large, and the LP relaxation is weak (leading to slow solving). Too small, and you might accidentally cut off feasible solutions. Finding tight big-M values is one of the most impactful things a modeler can do.

### Symmetry Breaking

If your problem has symmetry — multiple equivalent solutions that a solver explores redundantly — adding symmetry-breaking constraints can massively speed up solving. If you have 5 identical trucks, the solver might waste time exploring all 120 ways to assign them to routes, when only the assignment matters, not which specific truck goes where.

## Real-World Applications

Integer programming is quietly running behind the scenes of many operations you interact with daily.

### Airline Operations

Airlines use integer programming for flight scheduling, crew assignment, gate assignment, and fleet routing. American Airlines' crew scheduling system reportedly saves the company over $20 million per year compared to manual scheduling. The problems are massive — a large airline might have 10,000+ flights per month, thousands of crew members, and millions of possible pairings to consider.

### Supply Chain and Logistics

Where should we locate warehouses? How should we route delivery trucks? Which suppliers should we use? How much inventory should we stock at each location? These are all integer programming problems.

UPS famously uses optimization software (ORION) for delivery route planning, reportedly saving 100 million miles per year and 10 million gallons of fuel. Amazon's warehouse network optimization involves integer programs with millions of variables.

### Sports Scheduling

Professional sports leagues use integer programming to create schedules that balance home/away games, minimize travel, avoid conflicts with venue scheduling, and satisfy television broadcast requirements. The NFL's schedule is generated using integer programming — it takes weeks of computation to produce the final schedule from billions of possibilities.

### Telecommunications

Designing a telecommunications network — deciding where to place cell towers, how to route traffic, which frequencies to assign — involves large-scale integer programming. The variables include tower locations (binary: build or don't build), frequency assignments (integer), and traffic routing (continuous), making these mixed-integer programs.

### Healthcare

Hospital staff scheduling, operating room allocation, patient assignment, and ambulance positioning all use integer programming. During COVID-19, researchers used IP models to optimize ventilator allocation, vaccine distribution, and testing strategies.

### Energy Systems

Power grid operators use mixed-integer programming for unit commitment — deciding which power plants to turn on at each hour of the day to meet expected demand at minimum cost while satisfying reliability constraints. The binary variables (on/off for each generator at each time period) make this a classic MIP application.

### Finance

Portfolio optimization with minimum lot sizes (you can't buy half a share — well, now you can, but traditionally you couldn't), cardinality constraints (hold at most 20 stocks), and transaction costs all require integer variables. Capital [budgeting](/budgeting) — choosing which projects to fund given a limited budget — is a textbook binary programming problem and a practical application of [financial modeling](/financial-modeling).

## The Computational Frontier

Integer programming sits at the intersection of [mathematics](/mathematics), [computer science](/computer-science), and [applied mathematics](/applied-mathematics). Several research frontiers are pushing the field forward.

### Decomposition Methods

Very large problems can sometimes be decomposed into smaller, more manageable pieces. Benders decomposition separates integer and continuous variables. Dantzig-Wolfe decomposition exploits problem structure to generate manageable subproblems. Column generation handles problems where the number of variables is too large to enumerate explicitly.

### Parallel and Distributed Computing

Branch-and-bound trees are naturally parallelizable — different processors can explore different branches simultaneously. Modern solvers exploit multi-core processors, and research into distributed computing across clusters of machines continues. But the irregular structure of branch-and-bound trees makes load balancing challenging.

### Machine Learning Integration

This is the hot frontier. Can [machine learning](/machine-learning) learn to make better decisions within integer programming solvers? Which variable should we branch on? Which cuts should we generate? When should we switch from cutting to branching? ML models trained on thousands of solved instances can predict good answers to these questions, potentially accelerating solving by orders of magnitude.

Google's DeepMind published influential work in 2021 showing that [neural networks](/neural-networks) could learn branching strategies that outperformed hand-crafted heuristics. This area is evolving rapidly.

### [Quantum Computing](/quantum-computing)

Certain optimization problems map naturally onto quantum computing architectures. Quantum annealing (used by D-Wave systems) directly solves binary optimization problems. Gate-based quantum computers could theoretically provide speedups for some IP formulations. As of 2026, practical quantum advantage for integer programming hasn't been convincingly demonstrated for problems of realistic size, but the potential is there.

## Learning Integer Programming

If you want to get into integer programming, here's a practical path.

**Start with linear programming.** You need to understand LP before IP makes sense. Any [operations research](/operations-research) textbook covers the basics — the simplex method, duality, sensitivity analysis. [Calculus](/calculus) and [linear algebra](/linear-algebra) background helps but isn't strictly necessary for applied work.

**Learn to formulate models.** The skill of translating a word problem into mathematical variables, constraints, and an objective function is the core competency. Practice with classic problems: knapsack, assignment, traveling salesman, facility location.

**Use a solver.** Don't implement branch and bound from scratch (unless you're learning). Use Python with PuLP, Pyomo, or Google OR-Tools for free options. For large problems, Gurobi offers free academic licenses and is arguably the fastest solver available.

**Study problem structure.** Understanding why some formulations solve faster than others — LP relaxation strength, symmetry, decomposability — separates good modelers from great ones.

## Key Takeaways

Integer programming is a mathematical optimization technique that handles problems where decision variables must be whole numbers — representing real-world constraints like yes/no decisions, indivisible resources, and discrete choices. It's dramatically harder to solve than continuous linear programming due to its combinatorial nature, but modern algorithms and solvers have made previously intractable problems routinely solvable.

The field is the foundation of [logistics](/logistics), scheduling, network design, energy systems, and [financial planning](/financial-planning) across every major industry. Solver technology has improved by a factor of roughly 2 million through algorithmic advances alone over the past three decades, and integration with machine learning promises further acceleration.

If optimization interests you, integer programming is where theory meets practice in the most impactful way. The problems are mathematically deep, computationally challenging, and practically everywhere.
