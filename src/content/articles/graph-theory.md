---
title: "What Is Graph Theory?"
slug: graph-theory
description: "Graph theory studies networks of nodes and edges. Learn how this math field powers social networks, GPS routing, internet search, and more."
category: science
tags: ["graph theory", "mathematics", "graphs", "networks", "algorithms", "computer science", "discrete mathematics"]
heroImage: "/images/articles/graph-theory-hero.webp"
heroAlt: "Abstract network of interconnected nodes and edges representing a mathematical graph"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2541
tier: "2"
relatedArticles: ["algorithms", "computer-science", "data-structures", "computer-networking", "complexity-theory"]
externalSources:
  - title: "Graph Theory - Encyclopedia Britannica"
    url: "https://www.britannica.com/topic/graph-theory"
  - title: "Graph Theory - Stanford Encyclopedia of Philosophy"
    url: "https://plato.stanford.edu/entries/mathematics-graph-theory/"
  - title: "Introduction to Graph Theory - MIT OpenCourseWare"
    url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/"
  - title: "NetworkX - Python Graph Library"
    url: "https://networkx.org/"
faq:
  - q: "What is a graph in graph theory?"
    a: "A graph is a mathematical structure consisting of vertices (also called nodes) and edges (connections between vertices). Unlike the graphs you see in statistics (bar charts, line plots), a graph theory graph looks like a network diagram—dots connected by lines. It's a way of modeling relationships between objects."
  - q: "What is the difference between a graph and a network?"
    a: "Mathematically, they're essentially the same thing. 'Graph' is the mathematical term, while 'network' is often used in applied contexts—social networks, computer networks, transportation networks. A network is a graph with real-world meaning attached to its nodes and edges."
  - q: "Why is graph theory important in computer science?"
    a: "Many computational problems are naturally modeled as graphs: finding shortest paths, detecting communities, ranking web pages, scheduling tasks, and routing data through networks. Graph algorithms are among the most fundamental tools in computer science, and graph databases are increasingly used for complex data relationships."
  - q: "What was the first problem in graph theory?"
    a: "The Seven Bridges of Konigsberg, solved by Leonhard Euler in 1736. The city had seven bridges connecting two islands and two riverbanks. Euler proved it was impossible to walk through the city crossing each bridge exactly once, and in doing so created the first theorem in graph theory."
---

# What Is Graph Theory?

Graph theory is the branch of mathematics that studies graphs—structures made up of vertices (nodes) connected by edges (links). It provides the formal framework for analyzing relationships, connections, and networks of all kinds, from social media friendships to airline routes to molecular bonds. As one of the most widely applied areas of [mathematics](/applied-mathematics), graph theory underpins search engines, social networks, GPS navigation, and much of modern [computer science](/computer-science).

## The Seven Bridges That Started It All

Graph theory has one of the best origin stories in all of mathematics.

In 1736, the Prussian city of Konigsberg (now Kaliningrad, Russia) had seven bridges connecting two islands in the Pregel River with the riverbanks. A popular puzzle asked: can you walk through the city, crossing each bridge exactly once, and return to your starting point?

The Swiss mathematician Leonhard Euler proved the answer was no—and more importantly, he explained *why*. He stripped away every irrelevant detail (street names, building positions, distances) and reduced the problem to its essence: four land masses (vertices) connected by seven bridges (edges). He then showed that such a walk is possible only if every vertex has an even number of edges. Since all four vertices in the Konigsberg graph had odd numbers of edges, the walk was impossible.

This was the first theorem in graph theory. Euler's insight—that you could solve a problem about physical geography by abstracting it into a pure mathematical structure—created an entirely new field. The problems Euler was tackling look nothing like traditional geometry or [algebra](/algebra). They're about connectivity, paths, and structure rather than distances and equations.

## Graphs: The Basics

A **graph** G consists of a set of **vertices** (V) and a set of **edges** (E), where each edge connects two vertices. That's it. The definition is beautifully simple, which is partly why graphs are so versatile.

### Types of Graphs

**Undirected graphs** have edges with no direction—if Alice is friends with Bob, Bob is friends with Alice. Facebook friendships are modeled by undirected graphs.

**Directed graphs** (digraphs) have edges with direction—if Alice follows Bob on Twitter, that doesn't mean Bob follows Alice. Web links, one-way streets, and food chains are all directed.

**Weighted graphs** assign numbers (weights) to edges. In a road network, weights might represent distances or travel times. In a social network, weights might represent how often two people interact.

**Simple graphs** have at most one edge between any pair of vertices and no edges from a vertex to itself. **Multigraphs** allow multiple edges between the same vertices (like multiple roads between two cities). **Hypergraphs** allow edges that connect more than two vertices at once.

### Key Vocabulary

- **Degree**: The number of edges connected to a vertex. In the Konigsberg problem, Euler showed that an Eulerian circuit (visiting every edge exactly once) requires all vertices to have even degree.
- **Path**: A sequence of edges connecting a series of vertices, with no vertex repeated.
- **Cycle**: A path that starts and ends at the same vertex.
- **Connected graph**: A graph where you can reach any vertex from any other vertex by following edges.
- **Tree**: A connected graph with no cycles. Trees are minimal connected graphs—remove any edge and the graph becomes disconnected.
- **Subgraph**: A graph formed from a subset of the vertices and edges of another graph.
- **Complete graph**: A graph where every pair of vertices is connected by an edge. The complete graph on *n* vertices (written K_n) has n(n-1)/2 edges.

## Classic Problems

Graph theory is driven by problems—many of which sound simple but turn out to be deeply difficult.

### The Traveling Salesman Problem

Given a list of cities and the distances between each pair, what's the shortest route that visits every city exactly once and returns to the starting city? This is the Traveling Salesman Problem (TSP), and it's one of the most famous problems in all of mathematics and [computer science](/computer-science).

The TSP is easy to state and insanely hard to solve. For a small number of cities, you can check all possible routes. But the number of possible routes grows factorially—for 20 cities, there are over 60 quadrillion possible routes. For 100 cities, the number exceeds the number of atoms in the observable universe.

TSP belongs to the class of NP-hard problems (part of [complexity theory](/complexity-theory)), meaning no known algorithm can solve all instances efficiently. But approximate solutions and clever heuristics can find routes that are within a few percent of optimal. TSP-like problems arise in logistics (delivery routing), manufacturing (circuit board drilling), and even DNA sequencing.

### Graph Coloring

How many colors do you need to color a map so that no two adjacent regions share the same color? This is the graph coloring problem—each region is a vertex, each shared border is an edge, and you need to assign colors (numbers) to vertices so that no two connected vertices have the same color.

The **Four Color Theorem** states that any planar graph (a graph that can be drawn on a flat surface without edges crossing) can be colored with at most four colors. This was conjectured in 1852 and not proved until 1976—and the proof required a computer to check thousands of cases, making it the first major theorem proved with computer assistance. Some mathematicians were uncomfortable with this. Others shrugged and accepted it.

Graph coloring has practical applications beyond cartography. Register allocation in compilers (assigning variables to CPU registers) is a graph coloring problem. Scheduling exams so that no student has two exams at the same time is a graph coloring problem. Frequency assignment in wireless networks—assigning channels to transmitters so nearby transmitters don't interfere—is a graph coloring problem.

### Eulerian and Hamiltonian Paths

Euler's original question—can you traverse every edge exactly once?—defines **Eulerian paths and circuits**. A graph has an Eulerian circuit if and only if every vertex has even degree. Clean, simple, elegant.

The related question—can you visit every vertex exactly once?—defines **Hamiltonian paths and circuits**. Despite sounding similar, this problem is vastly harder. There's no simple criterion for determining whether a Hamiltonian path exists. The problem is NP-complete, meaning it's among the hardest problems that can be verified efficiently.

This contrast—Eulerian vs. Hamiltonian—illustrates something profound about graph theory. Tiny changes in problem formulation can produce enormous changes in difficulty. "Every edge once" is easy. "Every vertex once" is, as far as we know, fundamentally hard.

### Planarity

A graph is **planar** if it can be drawn on a flat surface with no edges crossing. The complete graph K4 (four vertices, all connected) is planar—you can arrange it so no edges cross. K5 (five vertices, all connected) is not.

Kuratowski's theorem (1930) gives a clean characterization: a graph is planar if and only if it doesn't contain a subdivision of K5 or K3,3 (the complete bipartite graph with three vertices on each side). This is one of those theorems that's both surprising and deeply satisfying—planarity reduces to checking for two specific forbidden structures.

Planarity matters for circuit board design (where crossing wires require extra layers), for graph visualization (crossing edges make diagrams harder to read), and for theoretical graph theory itself.

## Graphs in the Real World

Graph theory would be worth studying purely for its mathematical beauty. But its practical applications are staggering.

### Social Networks

Facebook, Twitter/X, LinkedIn, Instagram—every social network is a graph. Users are vertices, connections (friendships, follows, interactions) are edges.

Graph [algorithms](/algorithms) power social network features: "People You May Know" uses graph proximity (how many mutual friends you share). Community detection algorithms identify groups of densely connected users. Influence measurement identifies the most connected or important users.

The "small world" phenomenon—the idea that any two people on Earth are connected by about six degrees of separation—is a graph theory concept. Stanley Milgram's famous 1967 experiment and subsequent studies suggest that global social networks have surprisingly short average path lengths. Facebook's internal analysis found that the average distance between any two of its users was about 3.57 in 2016.

### The Internet and Web

The internet is a graph—computers and routers are vertices, physical connections are edges. Data routing algorithms use graph theory to find efficient paths through the network.

The World Wide Web is a different graph—web pages are vertices, hyperlinks are edges (directed, since links go one way). Google's original PageRank algorithm, which made Google dominant, was fundamentally a graph theory algorithm. It ranked pages based on the structure of the web graph—pages linked to by many important pages were themselves considered important.

This recursive definition (importance depends on the importance of your linkers, which depends on the importance of their linkers...) is essentially computing the eigenvector centrality of the web graph. [Data science](/data-science) and search engines run on graph theory.

### Transportation and Logistics

GPS navigation uses graph [algorithms](/algorithms) to find shortest paths. The road network is a graph (intersections are vertices, roads are edges, distances or travel times are weights), and your navigation app runs a shortest-path algorithm—typically a variant of Dijkstra's algorithm or A* search—every time you request directions.

Airline route networks are graphs. Logistics companies model their distribution networks as graphs. Public transit planning uses graph algorithms to optimize routes and schedules. The graph-theoretic perspective turns complex spatial problems into well-studied algorithmic problems.

### Biology and Chemistry

Molecular structures are naturally represented as graphs—atoms are vertices, chemical bonds are edges. Graph theory helps chemists enumerate possible molecular structures, predict properties, and search for drugs with specific characteristics.

Biological networks—protein interaction networks, gene regulatory networks, metabolic networks, neural networks—are all studied using graph theory. The structure of these networks reveals functional organization that isn't apparent from studying individual components.

In epidemiology, disease transmission is modeled as a graph process—infections spread along edges of a contact network. Understanding the structure of social contact networks helps predict how diseases will spread and which interventions (like targeted vaccination of highly connected individuals) will be most effective.

### Computer Science

Graph theory is so fundamental to [computer science](/computer-science) that it's hard to overstate its importance. [Data structures](/data-structures) like trees, heaps, and hash tables are graph structures. Compilers use graphs to represent program structure. Operating systems use graphs to manage resource allocation and detect deadlocks.

[Algorithms](/algorithms) for graph problems—shortest path, minimum spanning tree, maximum flow, matching, topological sort—form a core part of computer science education. Many problems that don't obviously involve graphs can be reduced to graph problems, making graph algorithms universally applicable tools.

## Key Algorithms

Let's look at some of the most important graph algorithms—the workhorses that make graph theory practical.

### Breadth-First Search and Depth-First Search

BFS explores a graph level by level—first visiting all vertices one edge away from the start, then all vertices two edges away, and so on. It finds shortest paths in unweighted graphs.

DFS explores as far as possible along each branch before backtracking. It's useful for detecting cycles, finding connected components, and topological sorting.

Both run in linear time (proportional to the number of vertices plus edges), making them extremely efficient. They're the foundation for more sophisticated graph algorithms.

### Dijkstra's Algorithm

Edsger Dijkstra's 1959 algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph (with non-negative weights). It's the basis for GPS navigation and network routing protocols.

The algorithm works by maintaining a set of vertices whose shortest distances are known, repeatedly selecting the unknown vertex with the smallest tentative distance, and updating its neighbors. With a priority queue, it runs in O((V + E) log V) time—fast enough for real-time navigation on large road networks.

### Minimum Spanning Trees

A spanning tree connects all vertices of a graph using the minimum total edge weight. Think of it as the cheapest way to connect all points in a network. Kruskal's and Prim's algorithms find minimum spanning trees efficiently.

Applications: designing communication networks, laying cable or pipe, and clustering data points. When you want to connect everything at minimum cost, you want a minimum spanning tree.

### Maximum Flow

How much "stuff" (data, water, traffic) can flow from a source to a sink through a network with capacity-limited edges? The Ford-Fulkerson algorithm and its improvements solve this problem.

Maximum flow algorithms apply to network bandwidth planning, airline scheduling, supply chain optimization, and surprisingly, to bipartite matching problems (like assigning students to dorm rooms or workers to tasks).

## Advanced Topics

Graph theory goes deep. Here are some areas where current research is active.

### Random Graphs

The Erdos-Renyi model generates random graphs by including each possible edge with some probability *p*. These random graphs exhibit fascinating phase transitions—as *p* increases past a critical threshold, the graph suddenly goes from being fragmented into small pieces to containing one giant connected component. This mirrors real phenomena like the spread of epidemics through populations.

### Spectral Graph Theory

The eigenvalues and eigenvectors of matrices associated with a graph (like the adjacency matrix or Laplacian matrix) reveal deep structural properties. Spectral methods are used for graph partitioning, community detection, and dimensionality reduction in [machine learning](/machine-learning).

Google's PageRank is essentially a spectral method—it computes the dominant eigenvector of a modified adjacency matrix of the web graph.

### Graph Neural Networks

[Deep learning](/deep-learning) has recently embraced graphs. Graph Neural Networks (GNNs) can learn from graph-structured data, making predictions about nodes, edges, or entire graphs. Applications include drug discovery (predicting molecular properties), recommendation systems (predicting user preferences in user-item graphs), and fraud detection (identifying suspicious patterns in transaction networks).

### Extremal Graph Theory

How many edges can a graph have while avoiding certain substructures? The Turan problem, the Ramsey problem, and the Szemeredi regularity lemma are central results in this area. These problems connect graph theory to combinatorics, number theory, and probability.

## The Beauty of Abstraction

What makes graph theory special—and what Euler recognized in 1736—is the effect of abstraction. By stripping away irrelevant details and focusing on connection structure, graph theory reveals deep similarities between seemingly unrelated problems.

A social network, a road map, a molecular structure, and a web page link structure look nothing alike physically. But as graphs, they share structural properties—degree distributions, clustering coefficients, path lengths—that can be analyzed with the same mathematical tools.

This is why graph theory is one of the fastest-growing areas of mathematics. As our world becomes more connected and more data-rich, the science of connections becomes more essential. Every time you search the web, get driving directions, scroll through social media recommendations, or use any app that involves relationships between things, you're benefiting from graph theory.

## Key Takeaways

Graph theory is the mathematical study of networks—vertices connected by edges. Born from Euler's 1736 analysis of the Konigsberg bridges, it has grown into one of the most applied areas of mathematics.

Its fundamental problems—shortest paths, coloring, planarity, traversal—have elegant theoretical solutions and massive practical applications. Graph [algorithms](/algorithms) power search engines, social networks, navigation systems, and logistics. Graph models appear in biology, chemistry, sociology, and engineering.

The field thrives because of its abstraction: by reducing complex systems to their connection structure, graph theory reveals patterns and enables solutions that would be invisible without this mathematical lens. In a world defined by connections—between people, computers, molecules, and ideas—graph theory provides the language for understanding how those connections work.
