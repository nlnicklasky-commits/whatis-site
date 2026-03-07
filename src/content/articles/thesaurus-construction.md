---
title: "What Is Thesaurus Construction?"
slug: thesaurus-construction
description: "Thesaurus construction is the process of building structured vocabularies that map relationships between terms for information retrieval and knowledge."
category: technology
tags: ["thesaurus construction", "information retrieval", "knowledge organization"]
heroImage: "/images/articles/thesaurus-construction-hero.webp"
heroAlt: "Editorial photograph representing the concept of thesaurus construction"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 7
wordCount: 2006
tier: "2"
relatedArticles: ["algorithms", "data-structures", "artificial-intelligence", "computational-linguistics", "machine-learning"]
externalSources:
  - title: "ANSI/NISO Z39.19 - Guidelines for Construction of Controlled Vocabularies"
    url: "https://www.niso.org/publications/ansiniso-z3919-2005-r2010"
  - title: "Library of Congress Subject Headings"
    url: "https://www.loc.gov/aba/cataloging/subject/"
  - title: "W3C - SKOS (Simple Knowledge Organization System)"
    url: "https://www.w3.org/2004/02/skos/"
  - title: "UNESCO Thesaurus"
    url: "https://vocabularies.unesco.org/thesaurus"
faq:
  - q: "What is the difference between a thesaurus and a dictionary?"
    a: "A dictionary defines words — it tells you what they mean. A thesaurus maps relationships between terms — it tells you which terms are synonyms, which are broader or narrower, and which are related. In information science, a thesaurus is more specialized: it's a controlled vocabulary with a formal structure showing hierarchical (broader/narrower), equivalence (preferred/non-preferred terms), and associative (related) relationships. A library thesaurus helps you find the right search term; a dictionary helps you understand what that term means."
  - q: "How is a thesaurus different from an ontology?"
    a: "A thesaurus defines terms and the relationships between them (broader, narrower, related, synonym). An ontology goes further — it defines classes of things, their properties, and logical rules about how they relate. A thesaurus might say 'dogs' is narrower than 'mammals.' An ontology would define what properties a dog has (number of legs, has fur, is a carnivore), what class it belongs to, and logical inferences (if something is a dog, it is also a mammal, and therefore also an animal). Ontologies are more expressive but harder to build and maintain."
  - q: "Why do we still need thesauri when we have full-text search?"
    a: "Full-text search finds documents containing exact words. But a user searching for 'heart attack' might miss documents about 'myocardial infarction' or 'cardiac arrest.' A thesaurus maps these equivalent terms, ensuring complete retrieval. Thesauri also handle ambiguity — 'mercury' could mean a planet, an element, or a car brand. Thesauri resolve this with scope notes and hierarchical placement. Studies consistently show that controlled vocabulary searching outperforms free-text searching for precision and recall in specialized collections."
  - q: "How long does it take to build a thesaurus?"
    a: "A small domain-specific thesaurus (500-2,000 terms) typically takes 6-12 months for a team of 2-3 people. A large thesaurus (10,000+ terms) can take several years. The Library of Congress Subject Headings, with over 340,000 records, has been under continuous development since 1898. Building a thesaurus involves domain analysis, term collection, relationship assignment, expert review, testing, and iterative refinement. The initial build is only the beginning — maintenance is ongoing and typically requires dedicated staff."
---

# What Is Thesaurus Construction?

Thesaurus construction is the systematic process of creating a structured vocabulary — called a thesaurus — that defines preferred terms within a subject area and maps the hierarchical, equivalence, and associative relationships between them. These thesauri are used primarily in [information retrieval](/information-retrieval) systems, libraries, archives, and databases to improve the precision and completeness of searching.

## Not Your English Class Thesaurus

When most people hear "thesaurus," they think of Roget's — that book you used in school to find fancier words for your essays. An information science thesaurus is a different animal entirely.

Roget's Thesaurus groups words by concept and lets you browse. It's organized for writers looking for the right word. An information retrieval thesaurus is built for machines and indexers. It has strict rules, formal relationships, and a specific purpose: making sure that when you search for something, you find everything relevant — and only what's relevant.

The difference matters. Roget's might tell you that "big," "large," "enormous," and "massive" are related. An information retrieval thesaurus would tell you which term is *preferred* for indexing, which terms are treated as synonyms, and where those concepts sit in a hierarchy. It's a control mechanism for language, not a creative tool.

## Why Bother? The Vocabulary Problem

Here's the problem thesauri solve. People are inconsistent. Wildly, creatively, stubbornly inconsistent.

One researcher writes about "kidney failure." Another writes about "renal failure." A third uses "kidney insufficiency." A fourth says "end-stage renal disease." They're all talking about roughly the same thing, but a simple keyword search on any one of those terms misses the documents using the other terms.

This is called the vocabulary problem, and it's been studied extensively since the 1980s. George Furnas and colleagues at Bell Labs showed in a famous 1987 study that the probability of two people using the same word for the same concept is less than 20%. That means a free-text search using one person's terminology will miss about 80% of relevant documents.

Thesauri fix this by establishing one preferred term (called a descriptor) and linking all the alternatives to it. Search for "kidney failure," and the system automatically includes "renal failure," "kidney insufficiency," and other equivalents. The user doesn't need to know all the terminology — the thesaurus handles it.

## The Anatomy of a Thesaurus

An information retrieval thesaurus has three types of relationships:

### Equivalence Relationships (USE/UF)

These connect preferred terms to their synonyms, near-synonyms, abbreviations, spelling variants, and other non-preferred forms.

Example:
- Automobiles USE Cars
- Cars UF Automobiles
- Cars UF Motor vehicles
- Cars UF Autos

Here, "Cars" is the preferred term (descriptor). "Automobiles," "Motor vehicles," and "Autos" are non-preferred terms (entry terms or lead-in terms). If a user searches for "automobiles," the system redirects to "cars" and retrieves everything indexed under that term.

Choosing which synonym becomes the preferred term involves judgment. Common guidelines: use the most commonly used form in the domain, prefer the spelled-out form over abbreviations, and prefer the natural language form over jargon — though in specialized fields, technical terms often win.

### Hierarchical Relationships (BT/NT)

These show broader-narrower (parent-child) connections between concepts:

- Vehicles BT (broader term of)
  - Cars NT (narrower term of)
    - Sedans
    - SUVs
    - Electric cars
  - Trucks
  - Motorcycles

Hierarchical relationships must follow logical rules. The narrower term must be a true subtype (or "is-a" relationship) of the broader term. A sedan *is a* car. A car *is a* vehicle. This seems obvious, but getting hierarchies right in ambiguous domains is harder than you'd think.

Three types of hierarchical relationships are recognized:

1. **Generic (genus-species):** Dogs → Poodles, Retrievers, Terriers
2. **Whole-part (partitive):** Brain → Cerebrum, Cerebellum, Brain Stem
3. **Instance:** Mountains → Everest, Kilimanjaro, Denali

### Associative Relationships (RT)

These connect terms that aren't synonyms and don't have a hierarchical relationship but are conceptually related enough that a user searching for one might want to know about the other:

- Cars RT Traffic
- Cars RT Highways
- Cars RT [Automotive engineering](/automotive-engineering)
- Cars RT Driving

Associative relationships are the hardest to assign consistently. The standard guideline: if a user searching for term A would likely want to see documents about term B, and the two aren't already linked by equivalence or hierarchy, an associative relationship is appropriate.

### Scope Notes

Scope notes are brief definitions or usage instructions that clarify exactly what a term covers:

- **Mercury** SN "Use for the chemical element (Hg, atomic number 80). For the planet, use Mercury (Planet). For the automobile brand, use Mercury (Automobile)."

Scope notes are essential for ambiguous terms. Without them, indexers might apply the term inconsistently, undermining the whole system.

## How to Build One — The Process

Thesaurus construction follows a well-established methodology, documented in standards like ANSI/NISO Z39.19 and ISO 25964.

### Step 1: Define the Scope

What domain does this thesaurus cover? Who will use it? For what purpose? A thesaurus for a medical library has very different requirements than one for a museum collection or an environmental database. Scope determines everything — which terms to include, how deep to go, and how many relationships to define.

### Step 2: Collect Terms

Term collection draws on multiple sources:

- Existing documents in the collection (what terms do authors actually use?)
- Existing thesauri and classification schemes in the domain
- Subject experts and reference librarians
- User search logs (what are people looking for?)
- Textbooks and reference works

Automated term extraction — using [natural language processing](/natural-language-processing) to pull candidate terms from large text corpora — has become standard. Tools can identify frequently occurring noun phrases, multi-word terms, and co-occurring concepts. But automated extraction still requires human review; not every frequent term belongs in the thesaurus.

### Step 3: Establish Preferred Terms

For each concept, choose one term as the descriptor and designate the rest as non-preferred entry terms. This is where domain expertise matters most. Should the preferred term be "climate change" or "global warming"? "[Artificial intelligence](/artificial-intelligence)" or "AI"? "Heart attack" or "myocardial infarction"? The choice affects usability.

Standards recommend using the most common form in the relevant [literature](/literature) and user community, but institutional preferences, cultural context, and evolving usage all influence the decision.

### Step 4: Build Hierarchies

Organize terms into tree structures, from broad to narrow. This step often reveals conceptual gaps — you might discover that there's no appropriate broader term for a concept, indicating a missing node. Or you might find that a term logically belongs under two broader terms (polyhierarchy), which most modern thesauri allow.

### Step 5: Add Associative Relationships

Link terms that are meaningfully related but not hierarchically connected. This step requires systematic review — for each term, consider what other terms a user might want to see. Cross-discipline connections are particularly valuable (linking "diabetes" to "insulin" to "blood glucose monitoring" to "nutrition").

### Step 6: Add Scope Notes

Write brief definitions for ambiguous, technical, or potentially confusing terms. Good scope notes are specific about what the term covers and — equally important — what it doesn't cover.

### Step 7: Review and Test

Subject experts review the thesaurus for accuracy and completeness. Test indexing — applying the thesaurus to a sample of documents — reveals practical problems: terms that are too broad, too narrow, missing, or poorly placed. User testing reveals whether the thesaurus helps or hinders search behavior.

### Step 8: Maintain

A thesaurus is never finished. New concepts emerge, terminology changes, and usage patterns shift. The Library of Congress adds or modifies thousands of headings every year. A thesaurus without active maintenance becomes increasingly obsolete — and an obsolete thesaurus is worse than no thesaurus at all, because it creates a false sense of order.

## Famous Thesauri and Controlled Vocabularies

**Library of Congress Subject Headings (LCSH):** The most widely used general-purpose controlled vocabulary in the world, with over 340,000 authority records. Used by most English-language academic libraries. It's been continuously maintained since 1898 — over 125 years of ongoing development.

**Medical Subject Headings (MeSH):** Maintained by the National Library of Medicine, MeSH contains about 30,000 descriptors organized in 16 hierarchical trees. It's used to index articles in MEDLINE/PubMed, the primary biomedical literature database. When you search PubMed, MeSH is working behind the scenes to expand your query and map synonyms.

**Art & [Architecture](/architecture) Thesaurus (AAT):** Maintained by the Getty Research Institute, the AAT contains about 400,000 terms for describing art, architecture, and material culture. It's used by museums, galleries, and cultural heritage organizations worldwide.

**ERIC Thesaurus:** Used for [education](/education) literature, maintained by the Institute of Education Sciences. Contains about 11,000 terms covering educational topics, [research methods](/research-methods), and populations.

**UNESCO Thesaurus:** A multilingual thesaurus covering education, science, culture, communication, and social sciences. Available in English, French, Spanish, Russian, and Arabic.

## Thesauri in the Digital Age

You might wonder whether thesauri are obsolete. Full-text search engines like Google seem to do fine without them. But the picture is more subtle than that.

Google uses something very much like a thesaurus — its Knowledge Graph contains entities, relationships, and synonyms that help it understand queries. When you search for "Eiffel Tower height," Google doesn't just match keywords — it understands that "Eiffel Tower" is a specific entity with a "height" property. That understanding is built on structured knowledge that functions much like a thesaurus.

In specialized domains — medicine, law, science, cultural heritage — thesauri remain essential. A PubMed search using MeSH terms consistently outperforms a free-text search on the same database for both precision (proportion of relevant results) and recall (proportion of all relevant documents found). When accuracy matters — and in medicine, it always matters — controlled vocabularies are worth the investment.

### SKOS and Linked Data

The W3C's Simple Knowledge Organization System (SKOS) provides a standard way to represent thesauri and other knowledge organization systems on the web. SKOS uses RDF (Resource Description Framework) to express concepts, labels, and relationships in a machine-readable format that can be linked to other datasets across the web.

This means thesauri can now participate in the linked data ecosystem. A MeSH concept can be linked to its equivalent in SNOMED CT (a clinical terminology), which can be linked to its Wikipedia article, which can be linked to Wikidata — creating a web of interconnected knowledge. The thesaurus concept has evolved from a card catalog tool into a node in a global knowledge network.

### Automated Thesaurus Construction

[Machine learning](/machine-learning) and natural language processing have opened new approaches to thesaurus building. Word embedding models (Word2Vec, GloVe, BERT) can identify semantic relationships between terms by analyzing how words co-occur in large text corpora. Two words that appear in similar contexts are likely to be semantically related.

These tools can suggest candidate synonyms, related terms, and even hierarchical relationships. But they're aids, not replacements. Automated methods produce noisy results — they can't distinguish between "related" and "opposite," and they miss domain-specific nuances that expert judgment catches. The current best practice combines computational term extraction with human editorial review.

## The Deeper Point

Thesaurus construction might seem like a narrow, technical activity. It is, on the surface. But underneath, it grapples with a fundamental problem: human language is messy, ambiguous, and constantly evolving, while [information systems](/algorithms) need precision, consistency, and stability.

Every thesaurus is an attempt to impose order on linguistic chaos without losing the richness that makes language useful. That's a balancing act — too rigid, and the thesaurus can't adapt to how people actually talk; too loose, and it fails to solve the vocabulary problem that justified its existence.

The people who build thesauri are, in a real sense, trying to map human thought — to chart the territory of what we know and how we name it. It's painstaking work, often invisible to end users, and never truly finished. But without it, information retrieval would be a much rougher experience — full of missed connections, false matches, and the persistent frustration of knowing that the answer exists somewhere but not being able to find it.
