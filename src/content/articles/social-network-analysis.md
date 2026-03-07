---
title: "What Is Social Network Analysis?"
slug: social-network-analysis
description: "Social network analysis maps and measures relationships between people, groups, or organizations. Learn about its methods, metrics, and real-world uses."
category: science
tags: ["social network analysis", "graph theory", "sociology", "data science", "network science", "research methods"]
heroImage: "/images/articles/social-network-analysis.webp"
heroAlt: "Network graph visualization showing interconnected nodes and edges representing social relationships"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 10
wordCount: 2622
tier: "2"
relatedArticles: ["graph-theory", "data-science", "data-visualization", "sociology", "algorithms"]
externalSources:
  - title: "Stanford Large Network Dataset Collection"
    url: "https://snap.stanford.edu/data/"
  - title: "International Network for Social Network Analysis (INSNA)"
    url: "https://www.insna.org/"
  - title: "NIH: Social Network Analysis in Public Health"
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3737783/"
  - title: "MIT: Introduction to Social Network Analysis"
    url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/"
faq:
  - q: "What is the difference between social network analysis and social media analytics?"
    a: "Social network analysis studies the structure and patterns of relationships between entities — who is connected to whom, how information flows, and who holds influence. Social media analytics focuses specifically on metrics from platforms like Twitter or Instagram (likes, shares, engagement rates). SNA can analyze social media data, but it also applies to offline networks, organizational structures, criminal networks, disease transmission, and more."
  - q: "What tools are used for social network analysis?"
    a: "Popular tools include Gephi (open-source visualization software), NodeXL (an Excel plugin), UCINET (widely used in academic research), NetworkX (a Python library), and igraph (available in R and Python). For large-scale analysis, researchers often use graph databases like Neo4j or distributed computing frameworks."
  - q: "What is a node and an edge in social network analysis?"
    a: "A node (also called a vertex) represents an entity in the network — a person, organization, website, or any unit being studied. An edge (also called a tie or link) represents a relationship or connection between two nodes, such as a friendship, email exchange, business transaction, or citation. Edges can be directed (one-way, like following someone on Twitter) or undirected (mutual, like a Facebook friendship)."
  - q: "How is social network analysis used in business?"
    a: "Businesses use SNA to map informal communication patterns within organizations, identify key influencers for marketing campaigns, detect fraud rings in financial transactions, optimize supply chain relationships, and improve team collaboration. Companies like Google and Facebook have built entire business models on understanding and leveraging network structures."
---

# What Is Social Network Analysis?

Social network analysis (SNA) is a method for studying the structure of relationships between entities — people, organizations, computers, or any connected units — by mapping them as networks of nodes and edges and measuring their properties mathematically. It reveals patterns that are invisible when you look at individuals in isolation.

## Why Relationships Matter More Than You Think

Most social science traditionally studied individuals. Surveys asked people about their attitudes, demographics, and behaviors. Economists modeled individual actors making rational choices. Psychologists examined personal traits and cognitions.

Social network analysis flips this approach. Instead of asking "what kind of person does X?" it asks "what kind of position in a network does person X occupy?" The insight — backed by decades of research — is that your position in a network often predicts your behavior, opportunities, and outcomes better than your individual characteristics do.

Consider a simple example. Two employees at a company have identical qualifications, work ethic, and talent. One is connected to people across multiple departments. The other knows only people within their own team. Who gets promoted faster? Research consistently shows it's the person with the broader network — not because they're better at their job, but because their network position gives them access to more information, more opportunities, and more visibility.

This is the fundamental claim of social network analysis: structure matters. *Where* you sit in a web of relationships shapes *what* you can do.

## The Building Blocks: Nodes, Edges, and Graphs

Social network analysis borrows its mathematical foundation from [graph theory](/graph-theory), a branch of mathematics developed by Leonhard Euler in 1736 when he proved you couldn't walk across all seven bridges of Konigsberg exactly once. The vocabulary is straightforward.

### Nodes (Vertices)

A node is anything you're studying. In a friendship network, each person is a node. In a citation network, each paper is a node. In a trade network, each country is a node. The choice of what counts as a node defines the scope of your analysis.

### Edges (Ties)

An edge connects two nodes and represents some kind of relationship. Edges come in several varieties:

**Directed vs. undirected.** A Twitter follow is directed — you can follow someone who doesn't follow you back. A Facebook friendship is undirected — if you're friends, the connection goes both ways. This distinction matters enormously for analysis because directed and undirected networks have different mathematical properties.

**Weighted vs. unweighted.** You might simply record whether two people are connected (unweighted) or measure the strength of their connection — how many emails they exchange per month, how much trade flows between two countries, how often two authors cite each other (weighted). Weighted networks capture nuance that binary connections miss.

**Signed.** Some networks include positive and negative ties. You might like some people and dislike others. International relations networks include both alliances and hostilities. Signed network analysis gets mathematically complex but captures important dynamics — like the finding that "the enemy of my enemy is my friend" tends to hold in real networks.

### The Network as a Whole

A network (or graph) is the complete collection of nodes and edges. It can be visualized as a diagram — circles connected by lines — or represented mathematically as an adjacency matrix, where each cell indicates whether two nodes are connected. For a network with *n* nodes, the adjacency matrix is *n* by *n*.

Small networks are easy to visualize. Large networks — Facebook has over 3 billion users — require [computational methods](/algorithms) to analyze.

## The Metrics That Tell the Story

Raw network diagrams are interesting to look at, but the real power of SNA comes from quantitative measures that capture specific aspects of network structure.

### Degree Centrality

The simplest measure: how many connections does a node have? In an undirected network, this is just the number of edges attached to the node. In a directed network, you distinguish between in-degree (how many connections point toward you — your followers, your citations) and out-degree (how many connections you initiate).

High degree centrality means you're well-connected. But it doesn't necessarily mean you're powerful or important — you might be connected to a bunch of people who are themselves disconnected from everyone else.

### Betweenness Centrality

This measure identifies nodes that sit on the shortest paths between other nodes. If removing you would force people to take longer routes through the network to reach each other, you have high betweenness centrality. These are the brokers, the gatekeepers, the people who connect otherwise separate groups.

The concept was formalized by sociologist Linton Freeman in 1977, and it captures something genuinely important. People with high betweenness centrality control information flow. They can bridge different communities, translate between groups, and spot opportunities that people trapped within a single cluster would miss.

### Closeness Centrality

How quickly can a node reach everyone else in the network? Closeness centrality measures the average shortest path from a node to all other nodes. High closeness means you're close to everyone — information reaches you quickly, and your influence spreads efficiently.

In a public health context, a person with high closeness centrality in a contact network would be among the first to catch — and spread — a contagious disease. This insight has practical implications for vaccination strategies.

### Eigenvector Centrality and PageRank

Not all connections are equal. Being connected to important people makes you more important than being connected to nobodies. Eigenvector centrality captures this recursive logic — your centrality score depends on the centrality scores of your connections, which depend on the centrality scores of *their* connections, and so on.

Google's PageRank algorithm, which made the search engine dominant in the early 2000s, is essentially eigenvector centrality applied to web pages. A page is important if important pages link to it. This [algorithm](/algorithms) generated what was arguably the most commercially successful application of network analysis in history.

### Clustering Coefficient

How tightly connected is your local neighborhood? If your friends are also friends with each other, you have a high clustering coefficient. If your friends don't know each other at all, your clustering coefficient is zero.

High clustering creates dense, cohesive groups — cliques, if you will. These clusters tend to produce trust, shared norms, and strong social support, but they can also create echo chambers and groupthink.

### Network Density

What fraction of all possible connections actually exist? In a network of 100 people, there are 4,950 possible undirected connections. If 500 of them exist, the density is about 10%. Dense networks spread information (and disease) quickly but are expensive to maintain — you only have so many hours in a day for relationships.

## A Brief History of the Field

Social network analysis didn't emerge from a single discipline. It grew from the convergence of sociology, anthropology, mathematics, and — eventually — computer science.

### The Sociometry Era (1930s-1950s)

Jacob Moreno, a Romanian-American psychiatrist, is generally credited as the founder of sociometry — the quantitative study of social relationships. In the 1930s, Moreno created "sociograms," hand-drawn maps of who liked whom in schools, prisons, and communities. He literally invented the network diagram.

Moreno's work was motivated by practical concerns. At a New York state training school for girls, he mapped friendship and conflict patterns and used the results to reassign girls to housing units in ways that reduced conflict. It worked. This was network analysis as intervention, not just observation.

### The Harvard Breakthrough (1960s-1970s)

Harrison White and his students at Harvard's Department of Social Relations transformed SNA from a descriptive tool into a rigorous analytical framework. They developed mathematical models for blockmodeling (identifying structurally equivalent positions in networks), algebraic approaches to role analysis, and methods for analyzing large networks.

White's 1970 book *Chains of Opportunity* analyzed how people find jobs through network connections, foreshadowing Mark Granovetter's famous work.

### The Strength of Weak Ties (1973)

Mark Granovetter's 1973 paper "The Strength of Weak Ties" is probably the most cited work in all of social network analysis. His finding seems paradoxical: weak acquaintances are more useful for finding jobs and accessing new information than close friends are.

Why? Because your close friends know the same people and the same things you do. Your weak ties — the person you chat with at a conference, your college roommate's cousin — connect you to entirely different social circles with different information. Granovetter showed that most people who found jobs through contacts found them through weak ties, not strong ones.

This insight has been replicated across dozens of contexts. Weak ties bridge clusters. Strong ties reinforce them. Both matter, but they serve different functions.

### The Small World Problem

Stanley Milgram's 1967 experiment asked people in Nebraska to send letters to a target person in Boston by forwarding them to someone they knew personally who might be "closer" to the target. The letters that arrived took an average of about six steps — giving rise to the popular notion of "six degrees of separation."

Duncan Watts and Steven Strogatz formalized this in 1998 with their small-world network model, showing that adding just a few random long-range connections to a locally clustered network dramatically reduces the average path length. Most real-world networks — social, biological, technological — exhibit this small-world property: high clustering plus short average paths.

### Scale-Free Networks (1999)

Albert-Laszlo Barabasi and Reka Albert discovered that many real networks have a specific structure: most nodes have few connections, but a small number of hubs have an enormous number. The distribution follows a power law — hence "scale-free."

The internet's structure is scale-free. So are citation networks, airline route maps, and many social networks. This structure makes networks resilient to random failures (removing random nodes rarely disrupts the network) but vulnerable to targeted attacks on hubs (take out a major airport and the whole system suffers).

## Real-World Applications

SNA has moved far beyond academic sociology. Here's where it actually gets used.

### Public Health and Epidemiology

Disease spreads through contact networks. Understanding network structure helps epidemiologists predict outbreak patterns, identify super-spreaders, and design targeted intervention strategies.

During the COVID-19 pandemic, contact tracing was essentially network analysis in real time — mapping who infected whom, identifying clusters, and targeting containment efforts. Research published in journals like *Nature* showed that roughly 10-20% of infected individuals were responsible for 80% of secondary infections — a pattern that network analysis predicted based on the scale-free properties of social contact networks.

Needle exchange programs, HIV prevention campaigns, and vaccination strategies have all been improved by network-based targeting — focusing resources on highly connected individuals rather than treating the population uniformly.

### Criminal and Terrorist Network Analysis

Law enforcement and intelligence agencies use SNA to map criminal organizations, identify leaders, and find vulnerabilities. The basic approach: map the network of communication, financial transactions, and known associations among suspected members, then analyze the structure.

Removing nodes with high betweenness centrality (brokers between subgroups) can fragment a criminal network more effectively than removing the nominal "leader" who might have high degree centrality but be structurally replaceable. The capture of Saddam Hussein in 2003 reportedly used network analysis of tribal and family connections to narrow the search.

### Organizational Analysis

Companies use SNA to understand how information actually flows — as opposed to how the org chart says it should flow. The formal hierarchy often tells you very little about who people actually go to for advice, information, or decisions.

Cross-boundary connector analysis identifies employees who bridge departments and facilitate collaboration. If those people leave, the organizational impact is far greater than their job title suggests. Some companies now use SNA proactively to improve knowledge sharing, identify isolated teams, and design better physical workspaces.

### Marketing and Influence

Influencer identification is essentially [network analysis](/data-analysis) applied to marketing. Instead of targeting the largest audience, network-aware marketing targets the most structurally influential people — those whose adoption of a product will cascade through their network.

The "two-step flow" model (information flows from media to opinion leaders to the broader public) was proposed by Paul Lazarsfeld in the 1940s. Modern SNA has refined this into multi-step models that account for network topology, tie strength, and community structure.

### Online Social Networks

Facebook, Twitter, LinkedIn, and other platforms are essentially massive social network datasets. Researchers (and the platforms themselves) analyze these networks to understand information diffusion, polarization, community formation, and influence dynamics.

Studies of Twitter networks during political events have revealed sharp polarization — left and right clusters that rarely interact, with few bridging ties. This structural polarization helps explain why people can look at the same event and come away with entirely different understandings of what happened.

## The Ethics of Mapping Relationships

SNA raises significant privacy and ethical concerns. Mapping someone's social network reveals intimate details about their life — who they associate with, how central they are, whether they're isolated or well-connected.

The 2014 Facebook "emotional contagion" study — where researchers manipulated users' news feeds to test whether emotional content spread through networks — provoked widespread outrage because participants didn't give informed consent. Government surveillance programs that collect "metadata" (who called whom, when, and for how long) are performing social network analysis on entire populations.

Researchers working with network data face a particularly tricky anonymization problem: even if you remove names, the structure of someone's connections can be unique enough to identify them. De-anonymizing network data has been demonstrated repeatedly by [computer security](/computer-security) researchers.

## How to Actually Do Social Network Analysis

If you want to conduct your own SNA, here's the basic workflow.

**Define your question.** What network are you studying, and why? Who counts as a node? What counts as a connection?

**Collect data.** Sources include surveys (asking people who they interact with), archives (email logs, phone records, meeting schedules), observation, or digital trace data (social media connections, website links, co-authorship records).

**Build the network.** Enter your data into an adjacency matrix or edge list and import it into analysis software. Gephi is great for visualization. NetworkX (Python) or igraph (R/Python) are better for computation. For very large networks, you'll need [distributed computing](/cloud-computing).

**Calculate metrics.** Compute the centrality measures, clustering coefficients, community structure, and other properties relevant to your question.

**Visualize.** Layout algorithms (force-directed layouts like Fruchterman-Reingold are the most common) position nodes so that connected nodes appear closer together. Color-code by community, size by centrality, and you've got a revealing picture of your network's structure.

**Interpret.** This is the hard part. Numbers and pretty graphs don't interpret themselves. What does it mean that a particular person has high betweenness centrality? What are the implications of having two clearly separate communities with few bridging ties? This is where domain expertise meets method.

## Where the Field Is Heading

Network science — the broader interdisciplinary field that grew from SNA, physics, biology, and [computer science](/computer-science) — is expanding rapidly.

Temporal network analysis studies how networks change over time, not just their static structure. Multilayer network analysis handles the reality that people are connected through multiple types of relationships simultaneously (friendship, work, family, online). Network neuroscience applies graph theory to brain connectivity data, mapping how regions of the brain communicate.

Machine learning on graphs — using [deep learning](/deep-learning) techniques adapted for network data — is one of the hottest areas in [data science](/data-science) right now. Graph neural networks can predict missing links, classify nodes, and detect communities in ways that traditional SNA metrics cannot.

The fundamental insight remains the same one Jacob Moreno had in the 1930s: relationships matter. Where you sit in a web of connections shapes what you know, what you can do, and who you become. Social network analysis just gives you the tools to see it clearly.
