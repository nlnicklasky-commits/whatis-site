---
title: "What Is Statistics?"
slug: statistics
description: "Statistics is the science of collecting, analyzing, and interpreting data to make decisions under uncertainty. Learn its methods, concepts, and applications."
category: science
tags: ["statistics", "mathematics", "probability", "data analysis", "hypothesis testing", "regression"]
heroImage: "/images/articles/statistics-hero.webp"
heroAlt: "Editorial photograph representing the concept of statistics"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 9
wordCount: 2584
tier: "2"
relatedArticles: ["mathematics", "data-analysis", "probability", "algorithms", "machine-learning"]
externalSources:
  - title: "American Statistical Association"
    url: "https://www.amstat.org/"
  - title: "Census Bureau: Statistical Methodology"
    url: "https://www.census.gov/topics/research/stat-research.html"
  - title: "NIH National Library of Medicine: Statistics Primer"
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3271154/"
  - title: "Khan Academy: Statistics and Probability"
    url: "https://www.khanacademy.org/math/statistics-probability"
faq:
  - q: "What is the difference between descriptive and inferential statistics?"
    a: "Descriptive statistics summarize data you already have — means, medians, standard deviations, histograms. Inferential statistics use sample data to draw conclusions about a larger population you haven't fully measured, using techniques like hypothesis tests, confidence intervals, and regression models. Descriptive tells you what happened; inferential helps you generalize."
  - q: "What is a p-value?"
    a: "A p-value is the probability of observing data at least as extreme as what you actually got, assuming the null hypothesis is true. It is NOT the probability that the null hypothesis is true. A small p-value (typically below 0.05) suggests the data is unlikely under the null hypothesis, giving reason to reject it. But p-values say nothing about effect size or practical importance."
  - q: "What is the difference between correlation and causation?"
    a: "Correlation means two variables move together — when one increases, the other tends to increase (or decrease). Causation means one variable actually causes the change in the other. Correlation does not imply causation because both variables might be driven by a third hidden variable, or the relationship might be coincidental. Establishing causation typically requires controlled experiments or advanced causal inference methods."
  - q: "What is a confidence interval?"
    a: "A 95% confidence interval is a range of values calculated from sample data such that, if you repeated the sampling process many times, about 95% of the intervals would contain the true population parameter. It does NOT mean there's a 95% probability the true value is in any specific interval — the true value is fixed, not random. Wider intervals indicate more uncertainty."
  - q: "Why is sample size important in statistics?"
    a: "Larger samples give more precise estimates with narrower confidence intervals and more statistical power to detect real effects. The precision improves with the square root of the sample size — to halve your margin of error, you need four times as many observations. However, large samples can also detect trivially small effects that aren't practically meaningful, so sample size should be chosen based on the effect size you care about."
---

# What Is Statistics?

Statistics is the science of collecting, organizing, analyzing, and interpreting data to make informed decisions in the face of uncertainty. It provides the mathematical framework for learning from data — and since nearly every field from medicine to [marketing](/marketing) now runs on data, statistics has become one of the most practically important branches of [mathematics](/mathematics).

## Why Statistics Exists

Humans are terrible at intuitively processing uncertainty. We see patterns in random noise, overweight dramatic anecdotes, and ignore base rates. Statistics exists because our brains can't be trusted to draw valid conclusions from data on their own.

Consider a simple question: does a new drug reduce headaches? You give it to 100 people and 60 report improvement. Sounds good — 60%! But wait. About 30-40% of headache sufferers improve with a sugar pill (the placebo effect). So is 60% actually meaningful, or is it just placebo plus normal variation? You can't answer this by staring at the numbers. You need a formal framework for separating signal from noise.

That framework is statistics. And honestly, the fact that it took humanity until the 17th and 18th centuries to start developing it — when gambling had existed for millennia — says something about how unnatural statistical thinking really is.

## Descriptive Statistics: Summarizing What You Have

Before you analyze anything, you need to describe it. Descriptive statistics reduce a pile of raw numbers into a few meaningful summaries.

### Measures of Center

The **mean** (arithmetic average) adds up all values and divides by the count. It's intuitive but sensitive to extreme values — one billionaire walks into a bar and the average net worth of patrons skyrockets.

The **median** is the middle value when data is sorted. It's more resistant to outliers. Median household income is a better measure of "typical" than mean household income precisely because the distribution of incomes is heavily skewed — a handful of extremely high earners pull the mean up but barely affect the median.

The **mode** is the most frequent value. It's the only measure of center that works for categorical data (what's the "average" eye color? — the question is meaningless, but the most common eye color is a valid question).

### Measures of Spread

Knowing the center isn't enough. A temperature average of 20°C could mean stable, pleasant weather — or it could mean alternating between -10°C and 50°C. Spread matters.

**Variance** measures the average squared deviation from the mean. Squaring ensures negative deviations don't cancel positive ones. **Standard deviation** is the square root of variance, which puts the measure back in the original units. About 68% of data in a normal distribution falls within one standard deviation of the mean, 95% within two, and 99.7% within three.

**Range** (max minus min) is simple but misleading — it depends entirely on the two most extreme points. **Interquartile range** (Q3 minus Q1) captures the spread of the middle 50% and is much more stable.

### Distributions and Shape

Data has shape. Income distributions are right-skewed (long tail of high earners). Test scores often form a bell curve. Earthquake magnitudes follow a power law. The shape tells you which statistical tools are appropriate and which will mislead you.

The **normal distribution** (Gaussian distribution, bell curve) is the most famous distribution in statistics. It shows up everywhere — heights, measurement errors, stock returns (approximately), IQ scores — because of the Central Limit Theorem, which we'll get to shortly. It's completely characterized by just two numbers: the mean and standard deviation.

But plenty of real-world data isn't normal. Financial returns have "fat tails" — extreme events happen more often than the bell curve predicts. The 2008 financial crisis involved market moves that the normal distribution said should happen roughly once in several billion years. This mismatch between model and reality had consequences measured in trillions of dollars.

## Inferential Statistics: Drawing Conclusions

Descriptive statistics tell you about the data in hand. Inferential statistics help you say something about the world beyond your data. This is where statistics gets both powerful and dangerous.

### Populations and Samples

You want to know the average height of all American adults. Measuring every single one — about 260 million people — is impossible. So you measure a sample: maybe 10,000 people selected carefully. Inferential statistics tells you how to generalize from that sample to the population, and — critically — how confident you should be in that generalization.

The key requirement is that your sample must be representative. A biased sample gives biased conclusions, no matter how sophisticated your statistical methods. The 1936 Literary Digest poll predicted Alf Landon would crush Franklin Roosevelt based on a survey of 2.4 million people. They got it catastrophically wrong because their sample — drawn from telephone directories and automobile registrations — skewed wealthy during the Great Depression. George Gallup predicted Roosevelt's victory using a much smaller but properly constructed sample.

### Sampling Distributions and the Central Limit Theorem

Here's one of the most surprising facts in all of mathematics: if you repeatedly take samples from *any* distribution and compute the sample mean, the distribution of those means approaches a normal distribution as the sample size increases. Any distribution. It doesn't matter if the original data is skewed, bimodal, uniform, or shaped like a drunken camel. The means will be normally distributed.

This is the **Central Limit Theorem** (CLT), and it's why the normal distribution is everywhere in statistics. It's also why statistics works at all — it gives us a predictable, well-understood distribution for sample statistics even when the underlying data distribution is unknown.

The CLT also tells you that the standard deviation of sample means (called the **standard error**) is σ/√n, where σ is the population standard deviation and n is the sample size. This is why bigger samples give more precise estimates — the standard error shrinks as n grows, but with diminishing returns (square root scaling).

### Hypothesis Testing

Hypothesis testing is the bread and butter of scientific research, and also the source of more confusion and misuse than any other statistical concept.

The [logic](/logic) works like this:

1. State a **null hypothesis** (H₀) — usually "there's no effect" or "no difference."
2. State an **alternative hypothesis** (H₁) — "there is an effect" or "there is a difference."
3. Collect data and compute a **test statistic** that measures how far your data deviates from what H₀ predicts.
4. Calculate the **p-value** — the probability of getting data at least as extreme as yours if H₀ were true.
5. If the p-value is below your chosen significance level (conventionally α = 0.05), reject H₀.

Simple enough in principle. In practice, it's a minefield.

The p-value is NOT the probability that the null hypothesis is true. Repeating for emphasis: the p-value is NOT the probability that your result happened by chance. It's the probability of observing data as extreme as yours *in a world where the null hypothesis is true*. The distinction is subtle but critical.

A p-value of 0.03 doesn't mean there's a 3% chance your result is a fluke. It means that IF the null hypothesis were true, you'd see data this extreme about 3% of the time. Whether the null hypothesis is actually true depends on prior probability, effect size, and dozens of other factors.

### Type I and Type II Errors

You can mess up hypothesis testing in two ways:

**Type I error** (false positive): rejecting the null hypothesis when it's actually true. You conclude the drug works, but it doesn't. The significance level α is the probability of making this error.

**Type II error** (false negative): failing to reject the null hypothesis when it's actually false. The drug works, but you don't detect it. The probability of this error is β, and 1 - β is called **statistical power** — the probability of correctly detecting a real effect.

There's a [trade](/trade)-off. Lower your α to reduce false positives, and you increase false negatives. The only way to reduce both simultaneously is to increase your sample size.

### Confidence Intervals

A confidence interval gives a range of plausible values for a population parameter, not just a single point estimate. A 95% confidence interval for the mean, for instance, is constructed so that if you repeated the experiment many times, about 95% of the intervals you'd compute would contain the true mean.

Confidence intervals convey uncertainty in a way that p-values don't. A drug that reduces blood pressure by 5 mmHg with a 95% CI of [1, 9] tells you the effect is probably somewhere between 1 and 9 — useful for deciding if the effect matters clinically. A p-value alone tells you almost nothing about the size of the effect.

## Regression: Finding Relationships

Regression analysis models the relationship between variables. It's probably the most widely used statistical technique in practice.

### Linear Regression

The simplest version: fit a straight line through data points. You have an outcome variable (Y) and one or more predictor variables (X₁, X₂, ...), and you find the line (or plane, or hyperplane) that minimizes the squared distances between predicted and actual Y values.

The equation Y = β₀ + β₁X + ε looks simple, but it encodes a lot. β₀ is the intercept, β₁ is the slope (how much Y changes per unit change in X), and ε is the error term — the unexplained variation. Regression tells you the strength and direction of associations, and (with appropriate study design) can suggest causal relationships.

### Beyond Linear Regression

Not all relationships are linear. **Logistic regression** handles binary outcomes (yes/no, alive/dead) by modeling the probability of an event. It's the workhorse of medical research and [machine learning](/machine-learning) classification.

**Polynomial regression** fits curves instead of straight lines. **Multiple regression** handles many predictors simultaneously, controlling for confounding variables. **Mixed-effects models** account for grouped data (students within schools, patients within hospitals). The regression family tree is enormous.

### Regression Pitfalls

Regression is powerful but abusable. **Overfitting** — fitting the noise in your data rather than the signal — produces models that look great on training data but fail on new data. **Multicollinearity** — when predictors are highly correlated with each other — makes individual coefficients unreliable. **Confounding** — when an unmeasured variable drives both X and Y — can create phantom relationships.

And the classic warning: regression shows association, not causation. Ice cream [sales](/sales) and drowning deaths are positively correlated. Nobody thinks ice cream causes drowning. (Both increase in summer.)

## Bayesian Statistics

Everything described so far is **frequentist** statistics — probability is defined as long-run frequency, and parameters are fixed but unknown. **[Bayesian statistics](/bayesian-statistics)** takes a fundamentally different approach.

In Bayesian statistics, probability represents degree of belief. Parameters aren't fixed — they have probability distributions that update as you collect data. The update follows Bayes' theorem:

**P(hypothesis|data) ∝ P(data|hypothesis) × P(hypothesis)**

The posterior probability (what you believe after seeing data) is proportional to the likelihood (how well the hypothesis explains the data) times the prior probability (what you believed before).

This approach has several advantages. It naturally incorporates prior knowledge. It gives direct probability statements about hypotheses ("there's a 94% probability the drug works" — something frequentist statistics literally cannot say). And it handles small samples more gracefully because the prior regularizes the estimates.

The disadvantage? Choosing priors is subjective. Two analysts with different priors can reach different conclusions from the same data. Frequentists argue this subjectivity is a bug; Bayesians argue it's a feature — all analysis involves assumptions, and Bayesian methods force you to state yours explicitly.

The Bayesian-frequentist [debate](/debate) has raged for decades. In practice, most working statisticians use both approaches, choosing whichever is more appropriate for the problem at hand.

## Common Misuses and Pitfalls

Statistics is misused constantly, sometimes deliberately, sometimes through ignorance. Here are the biggest offenders.

### P-Hacking

Run enough statistical tests on a dataset, and you'll find a "significant" result by chance alone. At α = 0.05, one in every 20 tests of a true null hypothesis will produce a false positive. Researchers who test dozens of hypotheses and only report the significant ones — without adjusting for multiple comparisons — are p-hacking. It's endemic in social science and has contributed to the [replication crisis](/cognitive-bias).

### Cherry-Picking

Selecting data that supports your conclusion and ignoring data that doesn't. Related: choosing which analysis to report based on which gives the best-looking results ("garden of forking paths"). Pre-registration — publicly committing to your analysis plan before collecting data — is the best defense.

### Simpson's Paradox

A trend that appears in several different groups of data can reverse when those groups are combined. A real example: UC Berkeley was sued for gender bias in graduate admissions because women had a lower overall acceptance rate. But department by department, women were admitted at equal or higher rates. The paradox: women applied disproportionately to competitive departments with low acceptance rates, while men applied more to departments with high acceptance rates.

### Survivorship Bias

Analyzing only the data that survived some selection process. Studying successful companies to find what they have in common tells you nothing if you don't also study the failed companies that had those same traits. During WWII, Abraham Wald recognized that the bullet holes on returning aircraft showed where planes could be hit and survive — the missing holes (on planes that didn't return) showed where armor was actually needed.

## Statistics in the Modern World

Statistics drives virtually every data-driven decision being made today.

**Medicine** relies on clinical trials — randomized controlled experiments analyzed with statistical methods — to determine which treatments work. The entire evidence-based medicine movement is built on statistical thinking.

**Technology** companies run thousands of A/B tests simultaneously, using statistics to determine whether changing a button color, rewording a headline, or adjusting an [algorithm](/algorithms) actually improves user behavior.

**[Government](/government)** uses statistics for census data, economic indicators (GDP, unemployment rate, inflation), [public health](/public-health) surveillance, and evidence-based policy. The Bureau of Labor Statistics, the Census Bureau, and the CDC all exist because of the need for systematic [data analysis](/data-analysis).

**[Sports analytics](/sports-analytics)** uses regression models, Bayesian methods, and simulation to evaluate players, optimize strategies, and make draft picks. [Baseball](/baseball)'s "Moneyball" revolution was fundamentally a statistical revolution.

**Climate science** uses statistical models to detect warming trends, attribute changes to specific causes, and project future scenarios. The signal of human-caused warming was identified through statistical analysis of temperature records, natural variability patterns, and forcing factors.

## The Future of Statistics

The boundary between statistics and [computer science](/computer-science) is blurring. Machine learning techniques — random forests, [neural networks](/neural-networks), gradient boosting — are essentially statistical models with the focus shifted from inference (understanding relationships) to prediction (forecasting outcomes).

Causal inference — figuring out what causes what from observational data — is one of the hottest areas in modern statistics. Judea Pearl's do-[calculus](/calculus) and the potential outcomes framework of Donald Rubin provide formal tools for answering causal questions without randomized experiments, when experiments are impractical or unethical.

Automated statistics — algorithms that choose models, tune parameters, and validate results with minimal human input — is growing rapidly. But this creates its own dangers: automating a process you don't understand makes it easier to make mistakes you can't detect.

The deepest challenge may be communication. Statistical results are meaningless if decision-makers can't understand them. Risk literacy — the ability to interpret probabilities, understand uncertainty, and recognize common fallacies — is arguably as important as traditional literacy in a data-saturated world. And frankly, we're not there yet.
