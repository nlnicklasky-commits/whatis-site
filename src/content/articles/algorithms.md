---
title: "What Is an Algorithm?"
slug: algorithms
description: "Algorithms are step-by-step instructions for solving problems. Learn how they work, why they matter, and how they shape everything from search engines to AI."
category: technology
tags: ["algorithms", "computer science", "programming", "data structures", "technology", "coding", "software"]
heroImage: "/images/articles/algorithms-hero.webp"
heroAlt: "Flowchart diagram showing branching algorithmic decision paths"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 12
wordCount: 3196
tier: "1"
relatedArticles: ["machine-learning", "blockchain", "agile-software-development", "abstract-algebra"]
externalSources:
  - title: "Khan Academy - Intro to Algorithms"
    url: "https://www.khanacademy.org/computing/computer-science/algorithms"
  - title: "MIT OpenCourseWare - Introduction to Algorithms"
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
  - title: "NIST Dictionary of Algorithms and Data Structures"
    url: "https://xlinux.nist.gov/dads/"
  - title: "Stanford Encyclopedia of Philosophy - Computability and Complexity"
    url: "https://plato.stanford.edu/entries/computability/"
  - title: "ACM Computing Surveys"
    url: "https://dl.acm.org/journal/csur"
faq:
  - q: "What is the simplest example of an algorithm?"
    a: "A recipe is one of the simplest real-world algorithms. It gives you a list of ingredients (inputs), a sequence of steps (the procedure), and produces a finished dish (output). In computing, adding two numbers together—take number A, take number B, return A + B—is about as simple as it gets."
  - q: "Do you need to know math to understand algorithms?"
    a: "Not for the basics. You can understand what algorithms are and how common ones work without any advanced math. But if you want to analyze algorithm efficiency formally, prove correctness, or design new algorithms for hard problems, you'll need comfort with discrete math, probability, and logic."
  - q: "What programming language is best for learning algorithms?"
    a: "Python is the most popular choice for beginners because its syntax reads almost like English. But algorithms are language-independent—they're ideas, not code. You can implement the same sorting algorithm in Python, Java, C++, or JavaScript. Pick whatever language you're most comfortable with."
  - q: "How are algorithms different from artificial intelligence?"
    a: "All AI systems run on algorithms, but not all algorithms are AI. Traditional algorithms follow explicit, predetermined steps. AI algorithms—especially machine learning ones—learn patterns from data and adjust their behavior over time. AI is a subset of algorithmic problem-solving, not a replacement for it."
  - q: "Can an algorithm be wrong?"
    a: "Absolutely. An algorithm can contain bugs, produce incorrect results for certain inputs, or solve the wrong problem entirely. Algorithms can also be technically correct but biased—producing unfair outcomes because of the data they were trained on or the assumptions baked into their design."
---

# What Is an Algorithm?

An algorithm is a finite sequence of well-defined instructions designed to perform a specific task or solve a particular problem. Every Google search you run, every route your GPS calculates, every recommendation Netflix serves you—there's an algorithm behind it.

## Older Than Computers, Surprisingly

Most people associate algorithms with computers. Reasonable assumption, wrong history. The word itself comes from the name of the 9th-century Persian mathematician Muhammad ibn Musa al-Khwarizmi, whose work on arithmetic and algebra laid foundations that mathematicians still build on today. His name was Latinized to "Algoritmi," and eventually we got "algorithm."

But the concept goes back even further. Euclid's algorithm for finding the greatest common divisor of two numbers dates to around 300 BCE. That's over 2,300 years ago. The ancient Babylonians used algorithmic procedures for calculating square roots. Long division? That's an algorithm you probably learned in elementary school without anyone calling it one.

The point is this: algorithms aren't a computer science invention. They're a human invention. Computers just happen to be extraordinarily good at executing them—billions of operations per second, without getting bored or making arithmetic mistakes.

## What Makes Something an Algorithm

Not every set of instructions qualifies. An algorithm has specific properties that separate it from vague advice like "just figure it out."

**Finiteness.** An algorithm must terminate. It can't run forever. If your instructions create an infinite loop with no exit condition, that's a bug, not an algorithm. Every well-designed algorithm reaches a conclusion in a finite number of steps.

**Definiteness.** Each step must be precisely defined. "Mix until it looks right" isn't definite. "Mix for 3 minutes at 200 RPM" is. In computing, this means every instruction must be unambiguous—the computer should never have to guess what you meant.

**Input.** An algorithm takes zero or more inputs. A random number generator might take no input. A sorting algorithm takes a list of items. A search engine takes your query plus an index of billions of web pages.

**Output.** It must produce at least one output. Otherwise, what's the point? The output could be a sorted list, a yes/no answer, a calculated value, or even just a confirmation that something was done.

**Effectiveness.** Every operation must be basic enough that it can, in principle, be carried out exactly and in finite time. You can't have a step that says "determine the meaning of life"—that's not a basic operation with a known procedure.

These five properties come from the work of Donald Knuth, whose multi-volume *The Art of Computer Programming* (first published in 1968 and still being written) is arguably the most important work on algorithms ever produced.

## The Big Ones: Algorithm Types You Should Know

There are thousands of algorithms. Entire university courses cover just subcategories. But a handful of families show up everywhere, and understanding them gives you a framework for the rest.

### Sorting Algorithms

Sorting is the bread and butter of computer science. You've got a pile of things. You need them in order. Sounds simple. It's not—at least, not if you care about doing it fast.

**Bubble Sort** is the one professors teach first because it's easy to understand. Compare two adjacent items, swap them if they're out of order, repeat. It works, but it's painfully slow for large datasets. If you have a million items, bubble sort will take roughly a trillion comparisons in the worst case. Nobody uses it in production.

**Merge Sort** is far smarter. It splits the list in half, sorts each half separately, then merges the two sorted halves together. This divide-and-conquer strategy runs in O(n log n) time—which, for a million items, means about 20 million operations instead of a trillion. That's the difference between a few seconds and a few days.

**Quick Sort** is the workhorse of the real world. It picks a "pivot" element, partitions everything into "smaller than pivot" and "bigger than pivot" groups, then recursively sorts each group. Its average performance is O(n log n), and it's typically faster than merge sort in practice because it uses memory more efficiently. Most programming language standard libraries use some variant of quick sort.

Here's what's fascinating: in 2006, Google engineer Joshua Bloch discovered a bug in the binary search implementation used in virtually every [programming](/agile-software-development) language—a bug that had existed for nearly two decades. Sorting and searching algorithms seem simple, but subtle errors hide in even the most well-studied code.

### Search Algorithms

Finding things efficiently is just as important as sorting them.

**Linear Search** checks every item one by one until it finds what you're looking for. If the item is last in a list of a million things, you check all million. Simple but slow.

**Binary Search** is dramatically better—but only works on sorted data. It checks the middle item. If your target is larger, it discards the bottom half. If smaller, it discards the top half. Then it repeats on the remaining half. For a million items, binary search needs at most 20 checks. Twenty. Not a million. That's logarithmic time in action.

**Hash Tables** take a completely different approach. They compute a mathematical function on your search key to jump directly to where the item should be stored. Average case? O(1)—constant time, regardless of how many items exist. This is why looking something up in a Python dictionary or a JavaScript object feels instantaneous even with millions of entries.

### Graph Algorithms

A graph in computer science isn't a bar chart. It's a network—nodes connected by edges. Social networks, road maps, the internet, molecular structures—they're all graphs.

**Dijkstra's Algorithm** finds the shortest path between two nodes in a graph with weighted edges. Every time you ask Google Maps for directions, a descendant of Dijkstra's 1956 algorithm is doing the heavy lifting. Edsger Dijkstra reportedly designed it in about 20 minutes while sitting at a cafe in Amsterdam. Sometimes brilliance comes with coffee.

**Breadth-First Search (BFS)** explores a graph level by level, like ripples expanding from a stone dropped in water. It finds the shortest path in unweighted graphs and is used in everything from social network friend suggestions to solving puzzles.

**Depth-First Search (DFS)** goes deep before going wide—it follows one path as far as it can before backtracking. It's essential for detecting cycles, topological sorting, and solving mazes.

### Recursive Algorithms

Recursion is when a function calls itself with a smaller version of the same problem. It sounds like circular logic, but it works—as long as you have a base case that stops the recursion.

The classic example is calculating a factorial. 5! = 5 x 4!. And 4! = 4 x 3!. And so on, until you hit 1! = 1. Each call reduces the problem until you reach something trivially solvable, then the answers cascade back up.

Recursion is elegant but dangerous. Without a proper base case, your program eats memory until it crashes. Every recursive solution can be rewritten iteratively (using loops), though the recursive version is often cleaner and easier to reason about.

### Active Programming

Here's where things get genuinely clever. Active programming solves complex problems by breaking them into overlapping subproblems and storing the results so you never solve the same subproblem twice.

Consider calculating Fibonacci numbers. The naive recursive approach recalculates the same values over and over—computing fib(50) requires over a trillion recursive calls. A active programming approach stores each result as it's calculated and looks it up when needed. Suddenly, fib(50) takes 50 steps instead of a trillion. That's not an incremental improvement. That's the difference between a microsecond and centuries.

Active programming powers everything from spell checkers (edit distance calculations) to bioinformatics (DNA sequence alignment) to logistics (route optimization). It's one of those techniques that separates programmers who can solve hard problems from those who can't.

## Big O Notation: How Fast Is Fast?

You can't talk about algorithms without talking about Big O notation. It's how computer scientists describe how an algorithm's performance scales as the input grows.

**O(1)** — Constant time. The algorithm takes the same amount of time regardless of input size. Hash table lookups. Checking if a number is even or odd.

**O(log n)** — Logarithmic time. The algorithm gets slower as input grows, but barely. Binary search. Each doubling of input adds just one extra step.

**O(n)** — Linear time. Double the input, double the time. Scanning through a list once. Reading a file line by line.

**O(n log n)** — The sweet spot for comparison-based sorting. Merge sort, quick sort (average case). You mathematically cannot sort faster than this using comparisons alone—it's a proven lower bound.

**O(n^2)** — Quadratic time. Double the input, quadruple the time. Bubble sort, selection sort, insertion sort. Acceptable for small inputs, miserable for large ones.

**O(2^n)** — Exponential time. Each additional input element doubles the total work. Brute-force solutions to many optimization problems. A problem of size 30 takes a billion steps. Size 50? Over a quadrillion.

**O(n!)** — Factorial time. Generating every permutation. Brute-forcing the traveling salesman problem. For 20 items, that's 2.4 quintillion operations. Your computer will finish approximately never.

The practical takeaway: if your algorithm is O(n^2) or worse, it might work fine on small inputs but become unusable as your data grows. This isn't theoretical—it's why Facebook can't use bubble sort on 3 billion users, and why Google needs highly optimized algorithms to search billions of web pages in under a second.

## Algorithms in the Wild

Algorithms aren't just academic exercises. They're running your life—whether you realize it or not.

### Search Engines

Google's PageRank algorithm (named after co-founder Larry Page, not "web page") treats the web as a graph. Each link from one page to another is like a vote of confidence. Pages with more links from high-quality pages rank higher. The original 1998 paper described it as a random surfer model—imagine someone clicking links randomly and the algorithm calculates the probability of ending up on any given page.

Modern search involves hundreds of additional algorithms layered on top: natural language processing, user intent detection, spam filtering, personalization. But the graph-based ranking idea remains central.

### Social Media Feeds

When you open Instagram or TikTok, an algorithm decides what you see. These recommendation algorithms analyze your past behavior—what you liked, how long you watched, what you scrolled past—and predict what will keep you engaged. They're optimizing for attention, which is why your feed feels eerily personalized.

These systems use collaborative filtering (people similar to you liked X, so you might like X), content-based filtering (you watched cooking videos, here's another cooking video), and increasingly, deep [machine learning](/machine-learning) models that find patterns humans can't articulate.

### Navigation and Maps

Finding the fastest route between two points on a road network with millions of intersections requires sophisticated graph algorithms. Services like Google Maps and Waze use variations of Dijkstra's algorithm combined with heuristics (A* search), real-time traffic data, and precomputed hierarchical shortcuts. The result: optimal routes calculated in milliseconds.

### Cryptography and Security

Every secure connection on the internet relies on cryptographic algorithms. RSA encryption, used in HTTPS connections, depends on the mathematical fact that multiplying two large prime numbers is easy, but factoring the result back into those primes is computationally infeasible. The security of your bank account, your email, and your [blockchain](/blockchain) wallet all rest on algorithmic guarantees.

### Machine Learning and AI

[Machine learning](/machine-learning) algorithms are a special class that learn from data rather than following predetermined rules. A spam filter doesn't have a hardcoded list of spam words—it learns patterns from millions of labeled examples. A self-driving car doesn't have explicit instructions for every possible scenario—it learns from millions of miles of driving data.

The key [machine learning](/machine-learning) algorithms include linear regression, decision trees, neural networks, and gradient descent (the optimization algorithm that trains most modern AI systems). These algorithms are why AI can now translate languages, generate images, and beat humans at complex games.

## The Hard Problems: When Algorithms Hit a Wall

Not every problem has an efficient solution. Some of the most important open questions in computer science are about whether efficient algorithms exist for certain types of problems.

### P vs NP

This is the biggest unsolved problem in computer science—and one of the seven Millennium Prize Problems, with a $1 million bounty for a solution.

**P** is the class of problems solvable in polynomial time (efficient algorithms exist). Sorting a list? That's in P.

**NP** is the class of problems where a proposed solution can be *verified* in polynomial time, even if finding the solution might take much longer. Think of a Sudoku puzzle: checking if a completed grid is valid is fast, but solving it from scratch is much harder.

The question "does P equal NP?" asks whether every problem whose solution can be quickly verified can also be quickly solved. Most computer scientists believe the answer is no—but nobody has proven it. If P did equal NP, it would break most modern cryptography, because the hard mathematical problems protecting your data would suddenly have efficient solutions.

### NP-Complete Problems

Some problems are known to be "as hard as anything in NP." These NP-complete problems include the traveling salesman problem (find the shortest route visiting every city exactly once), the knapsack problem (choose items with maximum value that fit in a weight limit), and Boolean satisfiability (find variable assignments that make a logical formula true).

No one has found polynomial-time algorithms for any of these. If you find one for any single NP-complete problem, you've proven P = NP and solved them all. You'd also break the internet's security infrastructure. So, mixed blessing.

In practice, we handle NP-hard problems with approximation algorithms (get close to the optimal answer quickly), heuristics (educated guesses that work well in practice), and [machine learning](/machine-learning) approaches that find good-enough solutions for specific instances.

## Algorithmic Ethics: The Part That Gets Uncomfortable

Algorithms don't have opinions. But the people who design them do—and those opinions get baked in, sometimes invisibly.

### Bias in Algorithmic Systems

In 2016, ProPublica reported that a widely-used criminal risk assessment algorithm called COMPAS was nearly twice as likely to falsely label Black defendants as high-risk compared to white defendants. The algorithm didn't explicitly use race as an input—but it used proxies like zip code and employment history that correlated with race.

Hiring algorithms trained on historical data learn that successful employees "look like" the people who were previously hired—perpetuating existing biases around gender, ethnicity, and educational background. Amazon scrapped an AI recruiting tool in 2018 after discovering it systematically penalized resumes containing the word "women's."

### The Black Box Problem

Many modern algorithms—especially deep neural networks—are so complex that even their creators can't fully explain why they make specific decisions. A loan approval algorithm might deny your application, and nobody, not even the engineers who built it, can point to exactly why. This opacity creates accountability problems. How do you appeal a decision nobody can explain?

### Algorithmic Amplification

Social media recommendation algorithms optimize for engagement. Engagement, it turns out, correlates with outrage, fear, and controversy. Studies have shown that content provoking strong emotional reactions spreads faster. The algorithms aren't designed to radicalize people—but maximizing engagement can have that effect as a side product.

## How to Think Algorithmically

You don't need to be a programmer to benefit from algorithmic thinking. The core ideas transfer everywhere.

**Break big problems into smaller ones.** This is divide-and-conquer, and it works for planning a wedding, organizing a move, or writing a book. You can't solve a massive problem in one step, but you can break it into pieces that are each manageable.

**Eliminate the unnecessary.** Binary search's genius is that it throws away half the possibilities with each step. In decision-making, ask: what information would eliminate the most options? Start there.

**Recognize patterns you've solved before.** Active programming stores solutions to subproblems. In life, this means building on past experience rather than solving every problem from scratch. If you've negotiated one contract, the next one shares subproblems you've already solved.

**Consider worst cases.** Big O analysis asks: what happens when things scale? If your organization's process works for 10 employees but would collapse at 100, you have a scalability problem—an O(n^2) process masquerading as manageable at small scale.

**Know when good enough beats perfect.** For NP-hard problems, approximate solutions delivered quickly beat optimal solutions delivered never. The same principle applies to business decisions, meal planning, and choosing a career path.

## The Algorithms Shaping Tomorrow

Algorithmic development isn't slowing down. Several frontiers are actively being pushed.

**Quantum algorithms** like Shor's algorithm (for factoring large numbers) and Grover's algorithm (for searching unsorted databases) promise dramatic speedups for specific problem types. Shor's algorithm would break RSA encryption—which is why cryptographers are already developing post-quantum cryptographic algorithms designed to resist quantum attacks.

**Algorithmic fairness** is becoming a field of its own. Researchers are developing formal mathematical definitions of fairness and building algorithms that satisfy them. This isn't just ethics—it's engineering. Regulators in the EU and US are increasingly requiring algorithmic transparency and accountability.

**Biological algorithms** take inspiration from nature. Genetic algorithms mimic evolution—populations of candidate solutions "breed" and "mutate" over generations, with the fittest surviving. Ant colony optimization mimics how ants find shortest paths to food. Simulated annealing mimics the cooling of metals. These approaches excel at optimization problems where traditional methods struggle.

**Distributed algorithms** coordinate work across thousands or millions of machines. Google's MapReduce (and its successor frameworks) enabled processing datasets too large for any single computer. [Blockchain](/blockchain) consensus algorithms solve the problem of getting untrusted computers to agree on a shared truth. As computing becomes increasingly distributed, these algorithms become more critical.

## Why This All Matters to You

Here's the thing—even if you never write a line of code, algorithms affect your daily life in ways you might not notice. The interest rate on your mortgage, whether your resume gets seen by a human recruiter, what news stories appear in your feed, how long you wait at a traffic light, whether your insurance claim gets flagged for review. Algorithms.

Understanding them—even at a high level—gives you something valuable: the ability to ask better questions. When a company says "our algorithm determined..." you can ask: What data does it use? How was it tested? What are its failure modes? Who audits it?

You don't need to understand the math behind gradient descent to recognize that an algorithm trained on biased data will produce biased results. You don't need to implement Dijkstra's algorithm to appreciate that your GPS is solving a genuinely hard optimization problem in real time.

Algorithms are tools. They're extraordinarily powerful tools that can process information at scales no human brain can match. But they're still tools—designed by people, reflecting the assumptions and priorities of their creators. The more you understand about how they work, the better equipped you are to live in a world increasingly shaped by them.

And frankly, once you start seeing algorithms everywhere—in traffic patterns, in how a barista makes drinks for a line of customers, in how you instinctively organize your grocery shopping route—you can't unsee it. The world runs on procedures. Algorithms just make that explicit.
