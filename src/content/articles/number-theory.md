---
title: "What Is Number Theory?"
slug: number-theory
description: "Number theory studies the properties of integers, primes, and divisibility. Learn why this pure math branch powers modern cryptography and computing."
category: science
tags: ["number theory", "mathematics", "integers", "prime numbers", "cryptography", "algebra", "divisibility"]
heroImage: "/images/articles/number-theory-hero.webp"
heroAlt: "Prime numbers spiraling outward in an abstract mathematical visualization"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2640
tier: "2"
relatedArticles: ["algebra", "algorithms", "cryptography", "abstract-algebra", "applied-mathematics"]
externalSources:
  - title: "Number Theory - Stanford Encyclopedia of Philosophy"
    url: "https://plato.stanford.edu/entries/philosophy-mathematics/"
  - title: "Clay Mathematics Institute - Millennium Problems"
    url: "https://www.claymath.org/millennium-problems"
  - title: "OEIS - Online Encyclopedia of Integer Sequences"
    url: "https://oeis.org/"
  - title: "AMS - American Mathematical Society"
    url: "https://www.ams.org/"
faq:
  - q: "Why is number theory called the queen of mathematics?"
    a: "Carl Friedrich Gauss called number theory the queen of mathematics because it deals with the most fundamental mathematical objects — integers — and because its problems are often easy to state but extraordinarily difficult to prove. It has also influenced virtually every other branch of mathematics."
  - q: "How does number theory relate to cryptography?"
    a: "Modern cryptography relies heavily on number theory. RSA encryption, used to secure internet communications, depends on the difficulty of factoring large numbers into primes. Elliptic curve cryptography uses the arithmetic of special curves over finite fields. Without number theory, secure online banking and communication would not exist."
  - q: "What is the Riemann Hypothesis?"
    a: "The Riemann Hypothesis, proposed in 1859, conjectures that all non-trivial zeros of the Riemann zeta function have a real part equal to 1/2. It remains unproven and is considered the most important unsolved problem in mathematics. A proof would have profound implications for understanding the distribution of prime numbers."
  - q: "Is number theory useful in the real world?"
    a: "Absolutely. Beyond cryptography, number theory has applications in error-correcting codes (used in CDs, DVDs, and data transmission), random number generation for simulations, hash functions in computer science, and even music theory. Its applications continue to expand."
---

# What Is Number Theory?

Number theory is the branch of mathematics devoted to studying integers — whole numbers and their properties, patterns, and relationships. It asks questions that sound deceptively simple: Which numbers are prime? How are primes distributed? Can every even number greater than 2 be expressed as the sum of two primes? These questions are easy to ask, often easy to understand, and frequently extraordinarily hard to answer.

Carl Friedrich Gauss — arguably the greatest mathematician who ever lived — called number theory the "queen of mathematics." That's not just poetic flattery. Number theory sits at the foundation of mathematics itself, and its problems have driven the development of entirely new mathematical fields. It's also, somewhat ironically for a branch of "pure" math, responsible for the security of every online transaction you've ever made.

## The Deep Roots

Number theory is ancient. Genuinely ancient. The Babylonians knew about Pythagorean triples (like 3, 4, 5) around 1800 BCE — over a thousand years before Pythagoras was born. Egyptian mathematicians worked with fractions in ways that reveal an intuitive understanding of divisibility. But the Greeks formalized things.

Euclid's *Elements*, written around 300 BCE, contains results that remain fundamental today. His proof that there are infinitely many prime numbers is still taught in every introductory number theory course. It's elegant enough to reproduce here:

Assume there are finitely many primes. Multiply them all together and add 1. This new number isn't divisible by any of the primes on your list (dividing by any of them leaves a remainder of 1). So either it's prime itself, or it's divisible by a prime not on your list. Either way, your list was incomplete. Contradiction. Therefore there must be infinitely many primes.

Twenty-three centuries later, that proof hasn't been improved upon. That's how good it is.

Diophantus of Alexandria (around 250 CE) studied equations that require integer solutions — now called Diophantine equations in his honor. His *Arithmetica* influenced mathematics for over a millennium. When Pierre de Fermat scribbled his famous margin note about x^n + y^n = z^n having no integer solutions for n > 2, he was reading Diophantus.

### The Modern Era Begins

Number theory transformed from a collection of clever observations into a rigorous mathematical discipline in the 17th-19th centuries. Fermat, Euler, Gauss, Legendre, Dirichlet, and Riemann each advanced the field dramatically.

Gauss's *Disquisitiones Arithmeticae* (1801) was a turning point. Written when Gauss was just 24, it systematized modular arithmetic, proved the law of quadratic reciprocity, and established number theory as a serious mathematical discipline. The book is still readable today — which, for a 225-year-old math textbook, is remarkable.

## Prime Numbers: The Atoms of Arithmetic

If number theory has a central obsession, it's prime numbers. A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. The first few: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

The fundamental theorem of arithmetic states that every integer greater than 1 can be expressed as a unique product of prime numbers. This is why primes are called the "building blocks" or "atoms" of the integers. Just as every molecule is built from atoms, every integer is built from primes.

84 = 2 × 2 × 3 × 7. That factorization is unique — no other combination of primes multiplies to 84. This seems obvious, but proving it rigorously requires careful work, and the theorem is genuinely foundational.

### How Primes Are Distributed

Here's where things get weird and wonderful. Primes don't follow an obvious pattern. They thin out as numbers get larger — there are 25 primes below 100, but only 21 between 100 and 200. Yet they never stop appearing entirely. And occasionally they cluster in surprising ways.

The prime number theorem, proven independently by Hadamard and de la Vallée Poussin in 1896, states that the number of primes less than a given number N is approximately N/ln(N). So roughly speaking, a random number near N has about a 1/ln(N) chance of being prime. Near 1,000, that's about 1 in 7. Near 1,000,000, it's about 1 in 14. Near 10^100, it's about 1 in 230.

But within this gradual thinning, primes behave erratically at the local level. Sometimes they cluster close together (twin primes like 11 and 13, or 41 and 43). Sometimes there are long gaps with no primes at all. You can find a gap of any length you want — just look at the numbers from n!+2 through n!+n, which are all composite.

### The Riemann Hypothesis

The most famous unsolved problem in mathematics is the Riemann Hypothesis, proposed by Bernhard Riemann in 1859. It concerns the Riemann zeta function, defined as the sum of 1/n^s for all positive integers n (where s is a complex number).

The zeta function has "trivial" zeros at negative even integers (-2, -4, -6, ...) and "non-trivial" zeros that all appear to have real part equal to exactly 1/2. Riemann conjectured that every non-trivial zero falls on this "critical line." Over 10 trillion zeros have been computed, and all of them lie on the critical line. But nobody has been able to prove it must always be so.

Why does this matter? Because the zeta function's zeros encode information about the distribution of prime numbers. If the Riemann Hypothesis is true, it gives the tightest possible bounds on how primes are distributed. If it's false — well, that would be equally interesting, because it would mean primes behave even more strangely than we think.

The Clay Mathematics Institute has offered a $1 million prize for a proof (or disproof). It's been open since 2000. Nobody has collected.

## Modular Arithmetic: Clock Math

Modular arithmetic is one of number theory's most useful tools, and you already understand it intuitively. What time is it 5 hours after 10 o'clock? 3 o'clock. You just did arithmetic modulo 12.

In modular arithmetic, numbers "wrap around" after reaching a modulus. We write 15 ≡ 3 (mod 12), meaning 15 and 3 leave the same remainder when divided by 12. We say they're congruent modulo 12.

Gauss developed this notation and worked out its properties systematically. Modular arithmetic turns out to be incredibly powerful because it lets you study properties of integers by examining their remainders.

For example: is 2^100 divisible by 3? You could compute 2^100 (a 31-digit number) and check. Or you could note that 2 ≡ -1 (mod 3), so 2^100 ≡ (-1)^100 ≡ 1 (mod 3). Not divisible by 3. Done.

Modular arithmetic is also the mathematical backbone of [cryptography](/cryptography). RSA encryption, which protects your bank transactions, credit card numbers, and passwords, relies on arithmetic in modular systems where the modulus is a product of two large primes.

## How Number Theory Powers the Internet

This is the part that makes number theory one of the most practically important branches of mathematics, despite centuries of being considered the purest and most abstract.

### RSA Encryption

RSA (named after Rivest, Shamir, and Adleman, who published it in 1977) works because of a fundamental asymmetry in number theory: multiplying two large prime numbers is easy, but factoring their product back into those primes is, as far as we know, computationally intractable for sufficiently large numbers.

Here's the basic idea. Pick two large primes, p and q (each hundreds of digits long). Multiply them to get n = p × q. Then choose specific numbers based on Euler's totient function. The public key (which you share) lets anyone encrypt a message. But decrypting requires knowing p and q separately — and factoring n to find them would take longer than the age of the universe with current [algorithms](/algorithms).

Every time you see the padlock icon in your browser, number theory is at work. Every secure email, every online purchase, every encrypted message depends on the difficulty of a problem that Euclid would have recognized.

### Elliptic Curve Cryptography

Elliptic curves — equations of the form y² = x³ + ax + b — have deep connections to number theory. Points on these curves form a group under a geometrically defined addition operation, and the arithmetic of these groups over finite fields provides even stronger cryptographic security with shorter key lengths than RSA.

A 256-bit elliptic curve key provides security comparable to a 3,072-bit RSA key. This efficiency matters for devices with limited computing power, like smart cards and IoT sensors. Most modern [computer security](/computer-security) systems use elliptic curve cryptography.

### Hash Functions and Error Correction

Number-theoretic concepts underpin hash functions (used in data integrity, digital signatures, and [blockchain](/blockchain) technology), error-correcting codes (Reed-Solomon codes use polynomial arithmetic over finite fields to let your CD player recover from scratches), and pseudorandom number generators.

## Famous Problems and Conjectures

Number theory is famous for problems that a bright 10-year-old can understand but the world's best mathematicians can't solve.

### Goldbach's Conjecture (1742)

Every even integer greater than 2 can be expressed as the sum of two primes. Examples: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 100 = 3+97. This has been verified for all even numbers up to 4 × 10^18. Nobody has found a counterexample. Nobody has proven it either. It's been open for nearly 300 years.

### The Twin Prime Conjecture

Are there infinitely many pairs of primes that differ by exactly 2? (Like 11 and 13, or 29 and 31.) Almost certainly yes, but proving it remains elusive. In 2013, Yitang Zhang shocked the mathematical world by proving that there are infinitely many pairs of primes that differ by at most 70 million. That bound has since been reduced to 246 through collaborative work, but getting it down to 2 remains open.

Zhang's story is remarkable on its own terms. He was a relatively unknown mathematician in his late 50s, working as a lecturer at the University of New Hampshire, when he proved a result that the world's leading analytic number theorists hadn't managed. Talent doesn't care about your CV.

### Fermat's Last Theorem

Pierre de Fermat claimed in 1637 that x^n + y^n = z^n has no integer solutions for n > 2. He wrote in his copy of Diophantus: "I have discovered a truly marvelous proof of this, which this margin is too narrow to contain." That margin note launched 358 years of mathematical effort.

Andrew Wiles finally proved it in 1995 using techniques from [abstract algebra](/abstract-algebra), algebraic geometry, and the theory of modular forms — mathematical machinery that didn't exist in Fermat's time. Almost no mathematician believes Fermat actually had a correct proof. But his conjecture inspired three and a half centuries of extraordinary mathematics.

### The abc Conjecture

Proposed in 1985 by Joseph Oesterlé and David Masser, the abc conjecture relates the prime factors of three integers a, b, c where a + b = c. In 2012, Shinichi Mochizuki claimed a proof using a new framework called Inter-universal Teichmüller Theory, spanning over 500 pages. As of 2025, the proof remains controversial — many leading number theorists say they cannot verify it, while Mochizuki and his supporters maintain its correctness.

## Branches of Number Theory

The field has grown enormously and now encompasses several distinct sub-areas.

### Analytic Number Theory

Uses tools from calculus and complex analysis to study the distribution of primes and other arithmetic functions. The prime number theorem and the Riemann Hypothesis both belong here. Dirichlet's theorem that every arithmetic progression a, a+d, a+2d, ... (where a and d share no common factor) contains infinitely many primes is a classic result.

### Algebraic Number Theory

Extends number theory beyond ordinary integers to algebraic number fields — systems that include numbers like √2 or the fifth root of unity. This is where unique factorization can fail (a disturbing discovery), leading to the development of ideal theory by Kummer and Dedekind. It connects deeply to [abstract algebra](/abstract-algebra) and [group theory](/group-theory).

### Computational Number Theory

Focuses on [algorithms](/algorithms) for number-theoretic computations: primality testing, integer factoring, computing discrete logarithms. The AKS algorithm (2002) proved that primality testing can be done in polynomial time — a theoretical breakthrough. In practice, probabilistic tests like Miller-Rabin are used because they're faster.

### Additive Number Theory

Studies questions about representing numbers as sums. Goldbach's conjecture belongs here. So does Waring's problem: can every positive integer be expressed as the sum of a bounded number of k-th powers? (Yes — Hilbert proved this in 1909.)

### Arithmetic Geometry

Combines number theory with algebraic geometry. Wiles's proof of Fermat's Last Theorem used tools from this area. The Langlands Program — sometimes called a "grand unified theory of mathematics" — connects number theory, algebra, geometry, and analysis in ways that are still being explored.

## Number Theory and Computer Science

The connections between number theory and [computer science](/computer-science) run deep.

**Complexity theory** cares about number-theoretic problems because they provide natural examples of problems that appear hard but whose difficulty hasn't been proven. Integer factoring, for instance, is believed to be hard for classical computers but not NP-complete. It's in a mysterious computational no-man's-land.

**Quantum computing** threatens to upend number-theoretic cryptography. Shor's algorithm, running on a sufficiently powerful quantum computer, could factor large integers in polynomial time, breaking RSA. This is why the cryptographic community is developing post-quantum cryptographic systems — many of which, interestingly, are based on different number-theoretic structures (like lattice problems) believed to resist quantum attacks.

**Coding theory** uses number-theoretic constructions for error detection and correction. The check digits on your credit card, ISBN, and UPC codes all use modular arithmetic.

**Hash tables**, the workhorse data structure of software engineering, rely on modular arithmetic to distribute data evenly across memory locations.

## How to Study Number Theory

If this has sparked your curiosity, here's the good news: number theory is one of the most accessible branches of [mathematics](/applied-mathematics). You don't need calculus to start. You need comfort with integers, patience with proofs, and a willingness to spend time on problems that resist easy solutions.

*An Introduction to the Theory of Numbers* by Hardy and Wright remains a classic, though its style is old-fashioned. For a more modern approach, *Elementary Number Theory* by Kenneth Rosen is widely used in university courses. *Number Theory: A Very Short Introduction* by Robin Wilson offers an overview for curious non-specialists.

The subject rewards experimentation. Many number-theoretic patterns become visible when you compute examples by hand. Try computing the first 50 primes. Look for patterns. Try Goldbach's conjecture on the first 100 even numbers. Explore modular arithmetic with small moduli. Number theory rewards the pattern-seekers and the experimenters.

## Why Number Theory Matters

Here's the thing about number theory that makes it unique among mathematical disciplines: it manages to be simultaneously the most ancient, the most abstract, the most beautiful, and the most practically important branch of mathematics.

When G.H. Hardy wrote in 1940 that number theory was "gentle and clean" precisely because it had no practical applications, he was spectacularly wrong. RSA encryption was 37 years away. Hardy would have been horrified — he explicitly celebrated number theory's uselessness. But the history of mathematics repeatedly shows that abstract work, pursued for its own beauty, eventually finds applications nobody predicted.

The integers are the simplest mathematical objects. The questions we ask about them are often the simplest mathematical questions. And yet these simple questions lead to the deepest mathematics humans have ever conceived. That combination of accessibility and depth — problems a child can state that a genius can't solve — is what gives number theory its special place in [mathematics](/applied-mathematics) and in human intellectual culture.

Every time you buy something online, send an encrypted message, or use a credit card, number theory — this ancient, "useless," beautiful subject — is quietly keeping your information safe. The queen of mathematics turns out to be an excellent bodyguard.
