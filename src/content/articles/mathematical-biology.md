---
title: "What Is Mathematical Biology?"
slug: mathematical-biology
description: "Mathematical biology uses equations and models to understand living systems, from disease spread to population dynamics and cell division. Discover the key f..."
category: science
tags: ["mathematical biology", "biomathematics", "modeling", "population dynamics", "epidemiology", "ecology", "mathematics"]
heroImage: "/images/articles/mathematical-biology-hero.webp"
heroAlt: "Editorial photograph representing the concept of mathematical biology"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2770
tier: "2"
relatedArticles: ["biology", "ecology", "calculus", "differential-equations", "computational-biology"]
externalSources:
  - title: "Society for Mathematical Biology"
    url: "https://www.smb.org/"
  - title: "Bulletin of Mathematical Biology (Springer)"
    url: "https://link.springer.com/journal/11538"
  - title: "Mathematical Biology — MIT OpenCourseWare"
    url: "https://ocw.mit.edu/courses/mathematics/"
  - title: "European Society for Mathematical and Theoretical Biology"
    url: "https://www.esmtb.org/"
faq:
  - q: "What is the difference between mathematical biology and computational biology?"
    a: "Mathematical biology emphasizes building mathematical models (often using differential equations, probability theory, or dynamical systems) to understand biological phenomena. Computational biology emphasizes using algorithms and computing power to analyze biological data — genome assembly, protein structure prediction, phylogenetic analysis. In practice, there's huge overlap, and many researchers work in both areas. The distinction is more about emphasis: math-first vs. computation-first."
  - q: "Do you need a biology degree to work in mathematical biology?"
    a: "Not necessarily. Many mathematical biologists have degrees in mathematics, physics, or engineering and learned biology through collaboration and self-study. Others have biology degrees with strong mathematical training. The field is inherently interdisciplinary, so what matters is competence in both areas. Graduate programs in mathematical biology typically accept students from either background and supplement their weaker area."
  - q: "What math do you need for mathematical biology?"
    a: "At minimum: calculus, linear algebra, ordinary differential equations, and probability/statistics. Beyond the basics, useful areas include partial differential equations (for spatial models), stochastic processes (for random biological events), dynamical systems theory (for stability and bifurcation analysis), and numerical methods (for solving equations computers must handle). Game theory, graph theory, and information theory appear in specific subfields."
  - q: "Can mathematical models really predict biological outcomes?"
    a: "Sometimes remarkably well, sometimes not. Epidemic models predicted COVID-19 spread patterns with useful accuracy when parameterized with good data. Population models have guided successful fisheries management. But biology is complex, and models are simplifications. The best models identify qualitative behaviors (will the population grow or shrink? will the epidemic peak or fade?) rather than predicting exact numbers. Their value is in understanding mechanisms and exploring 'what if' scenarios."
  - q: "What careers use mathematical biology?"
    a: "Epidemiological modeling (public health agencies, WHO, CDC), pharmaceutical research (drug dosing models, clinical trial design), ecological consulting (population viability analysis, conservation planning), academic research and teaching, biotech companies (systems biology, metabolic engineering), and increasingly, data science roles in healthcare and life sciences. The quantitative skills transfer well to finance, tech, and other industries too."
---

# What Is Mathematical Biology?

Mathematical biology is the application of mathematical techniques to understand biological systems. It takes the messy, complicated reality of living things — cells dividing, diseases spreading, populations fluctuating, hearts beating, neurons firing — and translates that reality into equations, models, and formal frameworks that reveal patterns invisible to pure observation.

Here's why it matters: [biology](/biology) is arguably the most complex science. A single cell contains billions of interacting molecules. An ecosystem involves millions of interacting organisms. The human brain has 86 billion neurons forming trillions of connections. You can't understand systems this complex by looking at them, no matter how carefully. You need mathematics to track the interactions, identify the dominant forces, and predict what happens next.

## The Fundamental Approach: Building Models

Mathematical biology works by constructing models — simplified mathematical representations of biological systems. A model captures what the modeler believes are the most important features of a system while ignoring less important details.

This sounds obvious, but the art of modeling is choosing the right simplifications. Include too little and your model is useless. Include too much and it becomes as complicated as the real system, defeating the purpose.

### The SIR Model: A Perfect Example

The SIR model of infectious disease is one of the most elegant and useful models in mathematical biology. It was developed by Kermack and McKendrick in 1927 and remains the foundation of epidemiological modeling nearly a century later.

The idea is simple. Divide a population into three groups:

- **S** (Susceptible): People who can catch the disease
- **I** (Infected): People who currently have the disease and can spread it
- **R** (Recovered): People who've recovered and are immune

Then write [differential equations](/differential-equations) describing how people move between these groups:

- Susceptible people become infected at a rate proportional to the number of contacts between S and I individuals
- Infected people recover at a constant rate

That's it. Two equations with two parameters (infection rate and recovery rate) capture the essential dynamics of an epidemic. From this minimal model, you can derive:

- **The basic reproduction number R0**: The average number of new infections caused by one infected person in a fully susceptible population. If R0 > 1, the epidemic grows. If R0 < 1, it fades.
- **Herd immunity threshold**: The fraction of the population that must be immune to prevent epidemic spread (1 - 1/R0).
- **Epidemic curve shape**: The characteristic rise-peak-decline pattern that every epidemic follows.

During COVID-19, every public health discussion about "flattening the curve," R0 values, and herd immunity thresholds traced directly back to this 1927 model. The basic framework was nearly a century old — what changed was the parameterization (what are the actual rates for this specific virus?) and the complications (age structure, spatial spread, behavioral changes, vaccination).

This illustrates the power and limitations of mathematical biology simultaneously. The SIR model captures real dynamics that matter for policy decisions. But it also simplifies enormously — it ignores age structure, spatial heterogeneity, behavioral changes, asymptomatic transmission, and dozens of other real-world complications. More sophisticated models add these features, but they also become harder to analyze and harder to parameterize with real data.

## Population Dynamics: Where Mathematical Biology Began

The study of how populations grow, decline, and interact is where mathematical biology has the longest history and some of its greatest successes.

### Exponential and Logistic Growth

Thomas Malthus observed in 1798 that populations grow exponentially when unchecked. The mathematical expression is simple: dN/dt = rN, where N is population size and r is the per-capita growth rate. This gives exponential growth — doubling, then doubling again, then again.

But exponential growth can't continue forever. Pierre-Francois Verhulst added a carrying capacity K in 1838, creating the logistic equation: dN/dt = rN(1 - N/K). As the population approaches K, growth slows and eventually stops. This single equation captures the essential dynamics of a population limited by resources.

The logistic equation and its extensions remain workhorses of [ecology](/ecology), fisheries management, and conservation biology. They're simple enough to analyze mathematically but realistic enough to guide practical decisions about harvest rates and conservation targets.

### Predator-Prey Dynamics

In the 1920s, Alfred Lotka and Vito Volterra independently developed equations describing predator-prey interactions. Their model produces oscillations — prey populations grow, predators respond by increasing, prey decline, predators then decline from lack of food, and the cycle repeats.

These Lotka-Volterra oscillations were strikingly confirmed by data from fur trading records — the Hudson's Bay Company's century-long records of lynx and snowshoe hare pelts showed clear oscillating patterns matching the model's predictions.

Modern predator-prey models are far more sophisticated, incorporating factors like spatial structure, age classes, multiple prey species, and environmental variability. But the Lotka-Volterra insight — that simple predator-prey interactions inherently generate oscillations — remains fundamental.

### Competition and Coexistence

When two species compete for the same resources, mathematical models predict outcomes that observation alone might miss. The competitive exclusion principle — derived mathematically by Vito Volterra and confirmed experimentally by Georgyi Gause — states that two species competing for exactly the same resource cannot coexist indefinitely. One will outcompete the other.

This raises a paradox: the ocean contains thousands of phytoplankton species all apparently competing for the same nutrients and light. How do they coexist? G. Evelyn Hutchinson called this the "paradox of the plankton" in 1961. Mathematical models have proposed various solutions — environmental fluctuations, spatial heterogeneity, chaotic dynamics, and trade-offs between competitive ability and vulnerability to predation.

This kind of dialogue between mathematical prediction and biological observation is exactly how mathematical biology advances understanding.

### Chaos in Biology

Robert May showed in 1976 that even the simplest population models can exhibit chaotic behavior. The discrete logistic equation — the logistic model applied in discrete time steps rather than continuously — generates periodic oscillations at moderate growth rates but full-blown deterministic chaos at high growth rates.

This was genuinely shocking. It meant that wild population fluctuations didn't necessarily require external disturbances (weather, disease, human interference). Simple population dynamics could generate unpredictable behavior from purely deterministic rules.

May's work connected mathematical biology to the broader field of nonlinear dynamics and chaos theory, showing that [calculus](/calculus) and dynamical systems theory had deep implications for understanding biological variability.

## Epidemiology: Math Saves Lives

Mathematical epidemiology — modeling how diseases spread — is the branch of mathematical biology with the most direct impact on human welfare.

### Beyond SIR

The basic SIR model has been extended in dozens of ways to capture real-world disease dynamics:

- **SEIR models** add an Exposed class for diseases with incubation periods (you're infected but not yet infectious)
- **SIS models** remove the Recovered class for diseases without lasting immunity (you can be reinfected)
- **Age-structured models** account for different contact patterns and susceptibility by age
- **Spatial models** track disease spread across geographic regions
- **Network models** capture the structure of human contact networks — who actually interacts with whom

Each extension adds realism but also complexity. The art is choosing which extensions matter for a specific disease and policy question.

### Vaccination Strategy

Mathematical models guide vaccination policy directly. The herd immunity threshold (1 - 1/R0) tells you what fraction of the population needs immunity to prevent epidemics. For measles (R0 roughly 12-18), that's about 92-95% — explaining why even small drops in vaccination rates can trigger outbreaks.

But herd immunity thresholds assume uniform mixing, which isn't realistic. Mathematical models that incorporate age structure, spatial heterogeneity, and social networks give more detailed predictions. They can identify which groups to prioritize for vaccination, how to allocate limited vaccine supplies, and what happens if coverage drops in specific communities.

During the COVID-19 pandemic, mathematical models informed decisions about lockdowns, school closures, vaccine distribution priorities, and booster timing. The models weren't perfect — biological reality always surprises — but they provided the best available framework for making decisions under uncertainty.

### Drug Resistance

Mathematical models of pathogen evolution predict how drug resistance spreads and identify strategies to slow it. The basic insight: using a drug creates selection pressure favoring resistant organisms. Models quantify this pressure and explore alternatives — combination therapies, cycling between drugs, and dosing strategies that minimize resistance evolution.

This connects mathematical biology to [genetics](/genetics) and evolutionary biology — modeling how populations evolve under selection pressure requires both mathematical and biological expertise.

## Cellular and Molecular Biology: The Newest Frontier

Mathematical biology has expanded from population-level phenomena to cellular and molecular scales.

### Reaction Kinetics and Metabolic Networks

Enzyme kinetics — how fast biochemical reactions proceed — has been mathematical since Michaelis and Menten derived their famous equation in 1913. Modern systems biology extends this to entire metabolic networks, modeling hundreds or thousands of interacting biochemical reactions simultaneously.

Flux balance analysis, for example, models metabolism as a linear programming problem — finding the metabolic fluxes (reaction rates) that maximize growth given available nutrients and thermodynamic constraints. This approach has been remarkably successful for predicting bacterial growth in different environments and for guiding metabolic [engineering](/engineering) efforts to produce biofuels, pharmaceuticals, and industrial chemicals.

The mathematics here involves linear algebra, optimization, and [differential equations](/differential-equations) — tools from [applied mathematics](/applied-mathematics) applied to [biochemistry](/biochemistry) problems.

### Gene Regulatory Networks

Genes don't act independently — they regulate each other in complex networks. Gene A might activate Gene B, which represses Gene C, which activates Gene A. These feedback loops generate complex dynamical behavior.

Mathematical models of gene regulation use ordinary differential equations (for continuous approximation), stochastic models (for the inherent randomness of molecular events in single cells), and Boolean networks (for simplified on/off representations).

A famous result: genetic toggle switches and oscillators predicted by mathematical models were later constructed synthetically, confirming that the mathematical framework captures real biological dynamics. The synthetic biology field — designing biological systems from scratch — relies heavily on mathematical modeling.

### Pattern Formation

How does a leopard get its spots? How does an embryo develop distinct regions — head versus tail, left versus right? Alan Turing (yes, the [computer science](/computer-science) pioneer) proposed a mathematical mechanism in 1952: reaction-diffusion equations where interacting chemicals diffuse at different rates can spontaneously generate spatial patterns from uniform initial conditions.

Turing patterns have been found in diverse biological systems — skin pigmentation, hair follicle spacing, digit formation in limb development. The mathematical framework predicts what kinds of patterns are possible (stripes, spots, labyrinths) and how they depend on system parameters.

This is mathematical biology at its best: a mathematical framework predicts qualitative biological behaviors that are then confirmed experimentally.

## Neuroscience and Mathematical Biology

The brain is perhaps the most mathematically challenging biological system.

### Neural Models

The Hodgkin-Huxley model (1952) describes how neurons generate electrical impulses (action potentials) through voltage-gated ion channels. It's a system of four coupled differential equations that quantitatively reproduces neural firing behavior. Alan Hodgkin and Andrew Huxley won the Nobel Prize for this work.

Simpler models — FitzHugh-Nagumo, integrate-and-fire, and more recent abstractions — capture essential neural dynamics with fewer equations, making large-scale neural network modeling computationally feasible.

Mathematical neuroscience now models everything from individual synapses to entire brain regions, using tools from dynamical systems theory, stochastic processes, information theory, and [machine learning](/machine-learning). The connection between biological neural networks and artificial neural networks used in [deep learning](/deep-learning) is not coincidental — both fields inform each other.

### Decision-Making and Behavior

Mathematical models of animal decision-making draw on game theory, optimal foraging theory, and Bayesian inference. When should a bird leave a depleting food patch and search for a new one? Game theory predicts evolutionarily stable strategies for conflicts between animals. Bayesian models describe how animals update beliefs based on evidence.

These models connect to [behavioral psychology](/behavioral-psychology) and [animal behavior](/animal-behavior) research, providing quantitative frameworks for understanding why organisms behave the way they do.

## Evolution and Mathematical Biology

Evolutionary biology has been mathematical since Ronald Fisher, J.B.S. Haldane, and Sewall Wright developed population genetics theory in the early 20th century.

### Population Genetics

Mathematical models track how gene frequencies change across generations under the influence of selection, mutation, genetic drift, and migration. The Hardy-Weinberg equilibrium — the null model of population genetics — predicts stable gene frequencies in the absence of evolutionary forces. Deviations from Hardy-Weinberg expectations reveal which evolutionary forces are operating.

Coalescent theory (developed by John Kingman in 1982) works backward in time, modeling how current genetic variation arose from ancestral populations. This framework is the basis for inferring population history from DNA sequence data — estimating when populations split, how population sizes changed, and how much gene flow occurred.

### Evolutionary Game Theory

John Maynard Smith applied game theory to evolution in the 1970s, introducing the concept of evolutionarily stable strategies (ESS). An ESS is a strategy that, once adopted by a population, cannot be invaded by any alternative strategy.

This framework explains many biological phenomena: why do animals fight with ritualized displays rather than lethal combat? Why do some organisms cooperate rather than compete? Why do parasites evolve specific levels of virulence? Mathematical game theory provides answers grounded in evolutionary logic.

## The Tools of Mathematical Biology

### Differential Equations

Ordinary differential equations (ODEs) are the most common mathematical tool in the field. Population growth, epidemic dynamics, enzyme kinetics, neural dynamics — all are typically modeled with ODEs.

Partial differential equations (PDEs) add spatial dimensions — modeling diffusion of chemicals, spread of populations across landscapes, or wave propagation in neural tissue.

### Stochastic Models

Biological systems are inherently noisy. Gene expression involves random molecular collisions. Small populations experience demographic stochasticity. Environmental variation is unpredictable. Stochastic models — based on probability theory and random processes — capture this randomness.

The Gillespie algorithm, for example, simulates biochemical reaction networks by tracking individual molecular events probabilistically. It reveals behaviors that deterministic models miss, such as bimodal gene expression distributions in genetically identical cells.

### Agent-Based Models

When individual variation matters — and in biology, it often does — agent-based models simulate individual organisms with unique properties, tracking their interactions and emergent collective behavior. These models complement equation-based approaches and connect to [algorithms](/algorithms) and [computational biology](/computational-biology).

### Statistical Methods

Fitting models to data requires statistical techniques — parameter estimation, model selection, uncertainty quantification. Bayesian methods are increasingly popular in mathematical biology because they naturally handle uncertainty and incorporate prior knowledge.

## Challenges and Limitations

Mathematical biology is powerful but not omnipotent. Several challenges persist.

**Parameter estimation** is often the bottleneck. A beautiful model is useless if you can't determine its parameter values from available data. Biological parameters are frequently difficult to measure directly.

**Model selection** — choosing among alternative models — is conceptually and statistically challenging. Multiple models with different assumptions may fit the same data equally well.

**Biological complexity** sometimes defeats simplification. When a system involves dozens of interacting components with nonlinear dynamics and stochastic variation, even sophisticated mathematical models may fail to capture essential behavior.

**Communication gap** between mathematicians and biologists remains a real obstacle. Mathematical biologists must translate between two cultures with different training, vocabulary, and standards of evidence.

## Where the Field Is Going

Mathematical biology is expanding rapidly, driven by the explosion of biological data (genomics, imaging, sensor data), increasing computational power, and growing recognition that biological understanding requires quantitative frameworks.

**Multi-scale modeling** — connecting molecular dynamics to cellular behavior to tissue function to organ physiology — is a grand challenge. The mathematics needed to bridge these scales is still being developed.

**Machine learning** is entering mathematical biology both as a modeling tool (learning dynamics from data) and as a subject of biological inspiration (how do biological learning systems work?). The intersection of [data science](/data-science), [machine learning](/machine-learning), and mathematical biology is especially active.

**Synthetic biology** — designing biological systems — depends on mathematical models to predict behavior before building. As synthetic biology becomes more ambitious, the demand for accurate predictive models intensifies.

**Personalized medicine** aims to tailor treatments to individual patients, requiring mathematical models of drug metabolism, disease progression, and immune response parameterized with individual patient data.

## The Essential Point

Mathematical biology translates the complexity of living systems into mathematical language, enabling understanding, prediction, and design that observation alone cannot achieve. It's a field that demands fluency in both mathematics and biology — and rewards that fluency with insights that neither discipline could reach independently.

From predicting epidemics to understanding how your brain processes information, from managing fisheries to designing gene circuits, mathematical biology sits at the intersection of the life sciences and the mathematical sciences. If you find both fascinating and want to work at the boundary where they meet, this field has no shortage of unsolved problems waiting for someone who speaks both languages.
