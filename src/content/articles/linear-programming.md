---
title: "What Is Linear Programming?"
slug: linear-programming
description: "Linear programming optimizes outcomes under constraints. Learn about the simplex method, real-world uses, and how LP shapes billion-dollar decisions."
category: science
tags: ["linear programming", "optimization", "mathematics", "operations research", "simplex method", "constraints", "decision making"]
heroImage: "/images/articles/linear-programming-hero.webp"
heroAlt: "Geometric illustration of a feasible region with optimal solution point highlighted"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2519
tier: "2"
relatedArticles: ["algebra", "algorithms", "calculus", "data-analysis", "economics"]
externalSources:
  - title: "MIT Introduction to Linear Optimization"
    url: "https://ocw.mit.edu/courses/6-251j-introduction-to-mathematical-programming-fall-2009/"
  - title: "Wikipedia Linear Programming"
    url: "https://en.wikipedia.org/wiki/Linear_programming"
  - title: "NIST Guide to Linear Programming"
    url: "https://www.nist.gov/publications/guide-available-mathematical-software"
  - title: "Khan Academy Linear Programming"
    url: "https://www.khanacademy.org/math/ap-college-statistics"
faq:
  - q: "What is the difference between linear and nonlinear programming?"
    a: "Linear programming requires that both the objective function and all constraints are linear (no squared terms, no products of variables, no logarithms). Nonlinear programming handles problems where the objective or constraints involve nonlinear functions, which makes them generally much harder to solve."
  - q: "Is linear programming still used today?"
    a: "Absolutely. Airlines use it to schedule crews and routes, logistics companies optimize delivery paths, manufacturers plan production schedules, and financial institutions optimize portfolios. Modern LP solvers handle problems with millions of variables and are used in virtually every major industry."
  - q: "Can linear programming have no solution?"
    a: "Yes. An LP problem can be infeasible (no point satisfies all constraints simultaneously), unbounded (the objective can be improved infinitely), or it can have a unique optimal solution or infinitely many optimal solutions along an edge of the feasible region."
  - q: "Who invented linear programming?"
    a: "George Dantzig developed the simplex method in 1947 while working for the U.S. Air Force. Leonid Kantorovich independently developed similar ideas in 1939 in the Soviet Union and later received the Nobel Prize in Economics for his work on resource allocation."
---

# What Is Linear Programming?

Linear programming (LP) is a mathematical method for finding the best outcome — maximum profit, minimum cost, shortest route — when you have limited resources and a set of constraints that must be satisfied. Every variable, every constraint, and the objective you're optimizing must be expressible as linear equations or inequalities.

That sounds dry. But consider this: linear programming decides how airlines schedule 50,000 flights per month, how Amazon routes millions of packages, and how energy companies allocate power across electrical grids. It's the invisible math behind an enormous chunk of the global economy.

## The Basic Setup

Every linear programming problem has three components:

**Decision variables**: The things you control. How many units of Product A to manufacture. How many trucks to send on Route B. How many hours to allocate to Task C.

**Objective function**: What you're trying to maximize or minimize. Profit, cost, distance, time, waste — some quantity expressed as a linear combination of the decision variables. For example: Maximize 5x + 3y, where x and y are the quantities of two products and 5 and 3 are the profit per unit.

**Constraints**: The limits on your resources. You only have 100 hours of machine time. You can't produce negative quantities. Your budget is capped at $50,000. Each constraint is a linear inequality: 2x + y <= 100, x >= 0, y >= 0.

### A Concrete Example

Suppose you run a bakery. You make cakes and cookies. Each cake requires 3 hours of labor and 2 kg of flour, earning $40 profit. Each batch of cookies requires 1 hour and 3 kg of flour, earning $30 profit. You have 12 hours of labor and 12 kg of flour available.

Variables: x = number of cakes, y = batches of cookies.
Objective: Maximize 40x + 30y.
Constraints: 3x + y <= 12 (labor), 2x + 3y <= 12 (flour), x >= 0, y >= 0.

This is a completely solvable LP problem. And the answer — the combination of cakes and cookies that maximizes profit given your constraints — can be found exactly.

## The Feasible Region: Where Geometry Meets Algebra

Here's where it gets visual. Each constraint defines a half-plane on a graph. The feasible region is the intersection of all these half-planes — a polygon (in 2D) or polytope (in higher dimensions) containing every combination of variables that satisfies all constraints.

The feasible region for our bakery problem is a polygon with corners at (0, 0), (4, 0), (0, 4), and some other points determined by where constraint lines intersect.

The **fundamental theorem of linear programming** says: if an optimal solution exists, it occurs at a vertex (corner point) of the feasible region. You don't need to check every point inside the polygon — just the corners.

This is a huge insight. For a 2D problem with 4 corners, you check 4 points. But real problems have thousands of variables and millions of constraints, creating polytopes with an astronomical number of vertices. You need smarter methods than brute-force checking.

## The Simplex Method: Dantzig's Masterpiece

George Dantzig invented the simplex method in 1947, and it changed the world. Literally — it's one of the top 10 most important [algorithms](/algorithms) of the 20th century.

The simplex method doesn't check every vertex. Instead, it starts at one vertex of the feasible region and moves along edges to adjacent vertices, always improving the objective function. It keeps moving until it reaches a vertex where no neighboring vertex is better. That's the optimal solution.

Think of it like walking along the edges of a diamond, always going uphill. You stop when every direction leads downhill.

### How It Works (Simplified)

1. **Start** at a feasible vertex (often the origin, if it's feasible).
2. **Look at neighboring vertices** connected by edges.
3. **Move to the neighbor** that improves the objective function the most.
4. **Repeat** until no improvement is possible.

The method uses a systematic algebraic procedure involving "pivot operations" — essentially Gaussian elimination applied to a structured table called a **tableau**. Each pivot moves you from one vertex to an adjacent one.

### Why It's Fast (Usually)

In the worst case, the simplex method might visit every vertex — and a polytope with n constraints can have exponentially many vertices. So theoretically, the simplex method is not "efficient" in the computer science sense.

But in practice? It's extraordinarily fast. For typical problems, the number of pivots grows roughly linearly with the number of constraints, not exponentially. A problem with 10,000 constraints might require only 20,000-30,000 pivots. Nobody fully understands why the simplex method works so well in practice — it's one of the enduring mysteries of [computational mathematics](/applied-mathematics).

## Interior Point Methods: The Alternative

In 1984, Narendra Karmarkar published an algorithm that approaches the optimal solution differently. Instead of walking along the boundary of the feasible region (like the simplex method), interior point methods travel *through the interior*.

Imagine the feasible region as a bowl. The simplex method walks along the rim, looking for the lowest point on the edge. Interior point methods drop a ball inside the bowl and let it roll to the bottom.

Interior point methods have polynomial worst-case complexity — meaning they're provably efficient, unlike the simplex method. For very large, sparse problems (millions of variables), interior point methods often outperform the simplex method. For smaller, denser problems, the simplex method is usually faster.

Modern LP solvers typically implement both algorithms and choose between them based on problem characteristics.

## Duality: Every Problem Has a Mirror

One of the deepest ideas in linear programming is duality. Every LP problem (the "primal") has a corresponding "dual" problem. If the primal maximizes profit subject to resource constraints, the dual minimizes the cost of those resources subject to profitability constraints.

The **strong duality theorem** says: if the primal has an optimal solution, so does the dual, and their optimal values are equal. The maximum profit in the primal equals the minimum resource cost in the dual.

This isn't just an elegant mathematical fact. It has practical implications:

**Shadow prices**: The dual variables tell you how much the objective function would improve if you relaxed a constraint by one unit. In our bakery, the dual variable for the flour constraint tells you exactly how much additional profit you'd earn from one more kilogram of flour. This is invaluable for resource planning.

**Economic interpretation**: Duality connects optimization with market pricing. The dual prices represent the fair market value of scarce resources. If you can buy extra flour for less than its shadow price, you should — the extra profit exceeds the cost.

**Computational shortcuts**: Sometimes the dual problem is easier to solve than the primal. Solving either one gives you the solution to both.

## Sensitivity Analysis: What If Things Change?

Real-world parameters aren't fixed. Prices fluctuate. Resource availability changes. Customer demand shifts. Sensitivity analysis asks: how much can parameters change before the optimal solution changes?

**Ranging**: For each coefficient in the objective function or right-hand side of a constraint, you can compute the range over which the current optimal basis remains optimal. If cake profit drops from $40 to $35, is the solution still the same? Sensitivity analysis answers this without re-solving the problem.

**Parametric programming**: What happens if a parameter changes continuously? You can trace how the optimal solution evolves as a parameter varies, identifying breakpoints where the solution structure changes.

This matters enormously in business. Managers don't just want one answer — they want to know how strong that answer is. "Produce 3 cakes and 2 batches of cookies" is less useful than "produce 3 cakes and 2 batches, and this remains optimal as long as cake profit stays above $25 and flour availability stays below 18 kg."

## Integer and Mixed-Integer Programming

Pure linear programming assumes variables can take any real value: 3.7 cakes, 2.4 trucks. But often, variables must be integers. You can't send half a truck.

**Integer programming (IP)** adds the constraint that some or all variables must be whole numbers. **Mixed-integer programming (MIP)** allows some variables to be continuous and others to be integers.

This seemingly small change — requiring integers — makes problems dramatically harder. LP can be solved in polynomial time; integer programming is NP-hard. The feasible region is no longer a smooth polytope but a scattered collection of integer points.

Solvers attack MIP problems using **branch and bound**: solve the LP relaxation (ignore integer constraints), then systematically explore integer possibilities, pruning branches that can't improve on the best solution found so far. Modern MIP solvers like Gurobi and CPLEX can handle problems with millions of variables through sophisticated combinations of cutting planes, heuristics, and branch-and-bound.

## Real-World Applications

### Transportation and Logistics

[Logistics](/logistics) companies solve LP problems constantly. FedEx and UPS optimize package routing across their networks — deciding which packages go on which planes and trucks, minimizing fuel cost while meeting delivery deadlines. Airlines solve crew scheduling problems: assigning pilots and flight attendants to flights while respecting labor regulations, qualifications, and rest requirements.

The U.S. military used LP for supply chain planning during World War II — that's actually where Dantzig developed it. Today, the same math routes Amazon packages and optimizes Uber driver assignments.

### Manufacturing and Production

A factory producing multiple products with shared resources is a textbook LP problem. How much of each product should you make to maximize profit, given limited machine time, raw materials, and labor? Production planning at scale involves thousands of products, hundreds of resources, and time-phased scheduling over weeks or months.

### Finance and Portfolio Optimization

Harry Markowitz's mean-variance portfolio optimization — which won the Nobel Prize — is a quadratic programming problem, but LP variants are widely used. Minimizing transaction costs, matching asset-liability durations for insurance companies, and optimizing bond portfolios all use LP formulations.

[Financial planning](/financial-planning) at institutional scale relies heavily on these techniques.

### Energy and Utilities

Power companies solve LP problems to determine which generators to run at what levels, minimizing fuel costs while meeting demand and transmission constraints. The "unit commitment" problem — deciding which power plants to turn on and off over time — is a massive mixed-integer programming challenge solved daily by grid operators worldwide.

### Agriculture and Nutrition

The original "diet problem" — one of the first LP applications — asked: what's the cheapest combination of foods that meets all nutritional requirements? Animal feed companies solve this exact problem today to minimize feed costs while ensuring livestock get proper nutrition. It also appears in [agriculture](/agriculture) for crop planning and resource allocation.

### Telecommunications

Network routing — deciding how data flows through a telecommunications network to minimize congestion and maximize throughput — is an LP problem. Internet service providers and cellular networks solve these problems continuously as traffic patterns shift.

## The Standard Form

Most textbooks and solvers require LP problems in **standard form**:

Maximize c^T x, subject to Ax <= b, x >= 0.

Any LP problem can be converted to standard form through simple transformations:
- Minimization becomes maximization by negating the objective.
- Equality constraints become two inequality constraints.
- Unrestricted variables are split into the difference of two non-negative variables.

This standardization lets solver developers focus on one canonical problem type.

## Computational Complexity

LP has polynomial-time complexity — meaning the time to solve grows as a polynomial function of problem size, not exponentially. The ellipsoid method (Khachiyan, 1979) proved this theoretically, and interior point methods (Karmarkar, 1984) made it practical.

The simplex method, despite its exponential worst case, remains competitive because its average-case behavior is excellent. Smoothed analysis (Spielman and Teng, 2004) provides theoretical justification: slightly perturbing a worst-case problem makes the simplex method efficient with high probability. This won them the Godel Prize.

Modern solvers exploit problem structure aggressively. **Presolve** routines simplify problems before solving — eliminating redundant constraints, fixing variables, and tightening bounds. **Decomposition** methods break large problems into smaller subproblems. **Parallel computing** distributes work across multiple processor cores.

State-of-the-art commercial solvers like Gurobi, CPLEX, and MOSEK can solve LP problems with tens of millions of variables and constraints. Open-source alternatives like GLPK, CLP, and HiGHS are capable for smaller problems.

## Extensions and Related Techniques

**Network flow problems** are special LP problems on graphs — finding maximum flow, minimum cost flow, or shortest paths. They have dedicated [algorithms](/algorithms) (like Ford-Fulkerson and Dijkstra's) that are much faster than general LP solvers.

**Goal programming** handles multiple objectives simultaneously, setting targets for each and minimizing deviation from targets.

**Stochastic programming** handles uncertainty by incorporating probability distributions into the LP framework. Instead of one set of parameters, you optimize over multiple scenarios weighted by their probabilities.

**Strong optimization** takes a worst-case approach: find a solution that performs well under any realization of uncertain parameters within a specified uncertainty set.

## A Brief History

The origins of LP trace to Leonid Kantorovich, who in 1939 formulated resource allocation problems for the Soviet government. His work went largely unrecognized in the West for decades.

George Dantzig independently developed LP and the simplex method in 1947 while working for the U.S. Air Force on logistics planning. The method spread rapidly through military, industrial, and academic applications.

In 1975, Kantorovich (jointly with Tjalling Koopmans) received the Nobel Prize in [Economics](/economics) for contributions to the theory of optimal resource allocation. Dantzig, despite his monumental contribution, never received the Nobel — a widely lamented omission.

John von Neumann contributed duality theory. The development of interior point methods by Karmarkar in 1984 sparked a computational revolution. Since then, LP solvers have improved by a factor of roughly a billion — through a combination of algorithmic advances and hardware improvements, each contributing roughly equally.

## Learning Linear Programming

If you're new to LP, start with the graphical method — solving 2-variable problems by hand on a graph. This builds geometric intuition that carries over to higher dimensions.

Then move to the simplex method on small problems (3-4 variables). Work through the tableau calculations by hand at least once. It's tedious, but understanding the mechanics is essential.

For practical work, learn a modeling language like Python's PuLP, or AMPL, or Google's OR-Tools. These let you specify LP problems naturally and pass them to optimized solvers.

For deeper understanding, study [calculus](/calculus)-based optimization theory — Lagrange multipliers and the KKT conditions generalize the duality concepts from LP to nonlinear problems.

## Key Takeaways

Linear programming is the mathematical art of optimizing a linear objective subject to linear constraints. The simplex method finds optimal solutions by walking along vertices of the feasible region. Interior point methods provide a polynomial-time alternative. Duality theory reveals deep connections between optimization and pricing.

LP isn't just an academic exercise. It allocates billions of dollars in resources daily across industries from airlines to energy to telecommunications. It's one of those mathematical tools that most people have never heard of but that profoundly shapes the world they live in.

The fundamental insight — that real-world optimization problems with constraints can be formulated mathematically and solved exactly — remains as powerful today as when Dantzig first demonstrated it nearly 80 years ago.
