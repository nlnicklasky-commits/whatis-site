---
title: "What Is Data Structures?"
slug: data-structures
description: "Data structures are ways of organizing information in a computer for efficient access and modification. Learn arrays, trees, graphs, and when to use each."
category: technology
tags: ["data structures", "computer science", "programming", "algorithms", "software engineering", "arrays", "linked lists"]
heroImage: "/images/articles/data-structures-hero.webp"
heroAlt: "Editorial photograph representing the concept of data structures"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3006
tier: "1"
relatedArticles: ["algorithms", "data-science", "app-development", "machine-learning", "database-design"]
externalSources:
  - title: "Wikipedia - Data Structure"
    url: "https://en.wikipedia.org/wiki/Data_structure"
  - title: "MIT OpenCourseWare - Introduction to Algorithms"
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
  - title: "GeeksforGeeks - Data Structures"
    url: "https://www.geeksforgeeks.org/data-structures/"
  - title: "NIST Dictionary of Algorithms and Data Structures"
    url: "https://xlinux.nist.gov/dads/"
faq:
  - q: "Which data structure is the most important to learn?"
    a: "Arrays and hash tables (dictionaries) are used most frequently in everyday programming. If you're preparing for technical interviews, trees and graphs are tested most often. But honestly, understanding the tradeoffs between structures matters more than memorizing any single one—knowing when to use a hash table versus a tree versus an array is the real skill."
  - q: "Do I need to know data structures if I use a high-level language like Python?"
    a: "Yes. High-level languages provide built-in implementations (Python's list, dict, set), but understanding the underlying structures helps you write efficient code. A Python developer who doesn't understand hash tables won't know why dictionary lookups are fast or why certain operations cause unexpected slowdowns. The language handles the implementation, but you still make the design decisions."
  - q: "How are data structures different from algorithms?"
    a: "Data structures organize and store data. Algorithms are step-by-step procedures that operate on data. They're deeply connected—most algorithms require specific data structures to work efficiently, and each data structure supports certain operations better than others. You rarely study one without the other."
  - q: "Are data structures still relevant with modern hardware being so fast?"
    a: "Absolutely. Modern hardware is fast, but modern data is massive. A poorly chosen data structure can turn a millisecond operation into one that takes hours when scaled to millions of records. Google, Facebook, and Amazon process billions of operations per second—at that scale, the difference between O(n) and O(log n) is the difference between possible and impossible."
---

# What Is Data Structures?

A data structure is a specialized format for organizing, storing, and accessing data in a computer so that it can be used efficiently. Just as a library organizes books by genre, author, and catalog number to make finding them practical, data structures organize digital information so that programs can access and modify it quickly—and choosing the right structure for the job is one of the most consequential decisions a programmer makes.

## Why Data Structures Matter

Here's a thought experiment. You have a phone book with 1 million names. You need to find "Smith, John." With no organization at all—names in random order—you'd need to check every single entry. That's potentially 1 million comparisons. With an alphabetically sorted list, you can use binary search and find the name in about 20 comparisons. Same data. Same hardware. The only difference is how the data is organized.

That's the entire argument for data structures, in miniature. The right structure makes the difference between a program that runs in milliseconds and one that runs for hours. Between a search engine that returns results instantly and one that takes a coffee break to process your query.

Niklaus Wirth, the computer scientist who designed Pascal, titled his famous 1976 textbook *Algorithms + Data Structures = Programs*. That equation still holds. You can't write effective [algorithms](/algorithms) without understanding the data structures they operate on, and a data structure without algorithms to manipulate it is just inert storage.

## The Fundamentals: How We Measure Efficiency

Before [diving](/diving) into specific structures, you need to understand Big O notation—the standard way computer scientists measure how an operation's time or space requirements grow as the input size increases.

- **O(1)** — Constant time. The operation takes the same time regardless of data size. Looking up an element in an array by its index is O(1).
- **O(log n)** — Logarithmic time. The time grows logarithmically as data increases. Binary search is O(log n)—doubling the data only adds one more step.
- **O(n)** — Linear time. Time grows proportionally with data size. Scanning through every item in a list is O(n).
- **O(n log n)** — The sweet spot for efficient sorting algorithms like mergesort and heapsort.
- **O(n²)** — Quadratic time. Time grows with the square of the input. Nested loops over the same data. Things get slow fast.
- **O(2ⁿ)** — Exponential time. Time doubles with each additional element. Essentially unusable for large inputs.

The difference is dramatic at scale. For 1 million elements: O(1) = 1 operation, O(log n) = 20 operations, O(n) = 1,000,000 operations, O(n²) = 1,000,000,000,000 operations. That last number is why choosing the right data structure isn't academic—it's the difference between a program that works and one that doesn't.

## Linear Data Structures

Linear structures store elements in a sequential order. You can traverse them from start to end in a single run.

### Arrays

An array is the simplest and most fundamental data structure—a contiguous block of memory where elements are stored side by side, each accessible by a numeric index. Arrays are the bedrock of programming, and virtually every other data structure can be built using arrays.

**Strengths:**
- O(1) access by index—if you know the position, retrieval is instant
- Excellent cache performance because elements are stored contiguously in memory (modern CPUs love this)
- Simple to implement and understand

**Weaknesses:**
- Fixed size in most languages (you declare the size upfront and can't change it)
- Inserting or deleting in the middle requires shifting all subsequent elements—O(n)
- Searching for a value without knowing its position is O(n) unless the array is sorted

**Active arrays** (like Python's list, Java's ArrayList, or C++'s vector) solve the fixed-size problem by automatically resizing when they fill up. They allocate extra capacity and copy elements to a larger array when needed. This amortizes the cost of resizing across many insertions, giving an amortized O(1) for appending elements.

Arrays are the right choice when you know the size of your data, need fast access by position, and primarily add or remove elements at the end rather than the middle.

### Linked Lists

A linked list stores elements in nodes, where each node contains a value and a pointer (reference) to the next node. Unlike arrays, elements aren't stored contiguously—they can be scattered throughout memory, connected only by their pointers.

**Singly linked lists** have nodes that point only forward. **Doubly linked lists** have nodes pointing both forward and backward, allowing traversal in either direction. **Circular linked lists** connect the last node back to the first.

**Strengths:**
- O(1) insertion and deletion at any position (once you've found it)—just rearrange pointers
- Active size—no need to preallocate or resize
- Efficient for frequent insertions and deletions in the middle of the sequence

**Weaknesses:**
- O(n) access—to reach the 500th element, you must traverse 499 nodes
- Poor cache performance because nodes are scattered in memory
- Extra memory overhead for storing pointers alongside data

Linked lists are the right choice when you frequently insert or remove elements from the middle and don't need random access. In practice, arrays and active arrays have largely displaced linked lists for most common use cases because cache performance matters enormously on modern hardware. But linked lists remain important as building blocks for more complex structures like stacks, queues, and certain tree implementations.

### Stacks

A stack is a Last-In, First-Out (LIFO) structure. Think of a stack of plates—you add to the top and remove from the top. The last plate you put on is the first one you take off.

Two fundamental operations:
- **Push**: Add an element to the top
- **Pop**: Remove the element from the top

Both operations are O(1). Peeking at the top element without removing it is also O(1).

Stacks are everywhere in computing. Your web browser's back button uses a stack—each page you visit gets pushed onto the stack, and clicking back pops the most recent one. Function call [management](/management) in [programming languages](/programming-languages) uses a call stack. Expression parsing (balancing parentheses, evaluating mathematical expressions) uses stacks. The undo feature in text editors uses stacks.

### Queues

A queue is a First-In, First-Out (FIFO) structure. Like a line at a store—the first person in line is the first one served.

Two fundamental operations:
- **Enqueue**: Add an element to the back
- **Dequeue**: Remove the element from the front

Both are O(1). Queues manage anything that needs first-come, first-served processing: print job management, breadth-first search in graphs, request handling in web servers, and message passing between systems.

**Priority queues** are a variant where elements have priorities, and the highest-priority element is dequeued first regardless of insertion order. These are typically implemented using heaps (covered below) rather than simple arrays or linked lists.

**Double-ended queues (deques)** allow insertion and removal at both ends, combining aspects of stacks and queues.

## Hash-Based Structures

### Hash Tables

Hash tables (called dictionaries in Python, HashMaps in Java, objects in JavaScript) are arguably the most useful data structure in everyday programming. They store key-value pairs with O(1) average-case lookup, insertion, and deletion. That's astonishingly fast.

The magic is the hash function—a function that converts any key into an array index. When you store the pair ("name", "Alice"), the hash function converts "name" into an index, say 42, and the value "Alice" is stored at position 42 in an underlying array. When you look up "name", the same hash function produces 42 again, and you retrieve "Alice" directly.

**The collision problem**: Different keys can hash to the same index. This is inevitable when you have more possible keys than array positions. Two main strategies handle this:

- **Chaining**: Each array position holds a linked list of all entries that hashed to that index. Lookups check the list at the hashed position.
- **Open addressing**: When a collision occurs, probe for the next available slot using a deterministic pattern (linear probing, quadratic probing, or double hashing).

**Strengths:**
- O(1) average case for lookup, insertion, and deletion—hard to beat
- Extremely flexible—any hashable type can be a key
- The backbone of countless [algorithms](/algorithms) and applications

**Weaknesses:**
- O(n) worst case if many keys collide (rare with a good hash function)
- No ordering of elements
- Hash function quality matters enormously
- Higher memory usage than arrays due to empty slots and overhead

Hash tables power database indexes, caches, symbol tables in compilers, counting and frequency analysis, deduplication, and basically any problem that requires fast lookups by key. If you only learn one data structure beyond arrays, make it hash tables.

### Sets

A set stores unique elements with O(1) membership testing. It's essentially a hash table without values—just keys. When you need to know "is this element in my collection?" a set answers in constant time.

Sets also support mathematical set operations: union, intersection, difference, and symmetric difference. These are surprisingly useful for problems like finding common friends between users, identifying shared tags between articles, or eliminating duplicates from a list.

## Tree Structures

Trees organize data hierarchically, with a root node at the top and child nodes branching downward. They're natural for representing hierarchical relationships—file systems, organizational charts, HTML document structure.

### Binary Trees

A binary tree is a tree where each node has at most two children—conventionally called "left" and "right." This simplicity enables powerful operations.

A **Binary Search Tree (BST)** adds a ordering rule: every node in the left subtree has a smaller value, and every node in the right subtree has a larger value. This enables O(log n) search, insertion, and deletion—if the tree is balanced.

The "if balanced" caveat matters. An unbalanced BST degrades to a linked list, with O(n) operations. If you insert already-sorted data into a BST, every node goes to the right, creating a lopsided chain.

### Self-Balancing Trees

Self-balancing trees solve the degradation problem by automatically restructuring themselves to maintain balance after insertions and deletions.

**AVL trees** maintain a strict balance where the heights of any node's two subtrees differ by at most 1. They rotate nodes during insertion and deletion to maintain this property. The result: guaranteed O(log n) for all operations, but more overhead per operation due to frequent rotations.

**Red-black trees** are slightly less strict—they allow some imbalance but guarantee that no path from root to leaf is more than twice as long as any other. They're used in Java's TreeMap, C++'s std::map, and the Linux kernel's process scheduler because they provide good worst-case guarantees with less rotation overhead than AVL trees.

**B-trees** are designed for systems that read and write large blocks of data—like hard drives and databases. Instead of having two children per node, a B-tree node can have hundreds or thousands of children. This reduces the number of disk reads needed to find a record, which is why virtually every [database](/database-design) uses B-trees (or their variant, B+ trees) for indexing.

### Heaps

A heap is a complete binary tree where each node satisfies the heap property: in a max-heap, every parent is greater than or equal to its children; in a min-heap, every parent is less than or equal to its children.

The root of a max-heap is always the largest element. The root of a min-heap is always the smallest. This makes heaps perfect for priority queues—finding the highest (or lowest) priority element is O(1), and inserting a new element is O(log n).

Heapsort, one of the classic sorting [algorithms](/algorithms), uses a heap to sort an array in O(n log n) time without requiring additional memory. Dijkstra's shortest-path algorithm uses a min-heap to efficiently process vertices. Operating system schedulers use heaps to determine which process runs next.

### Tries

A trie (pronounced "try," from "retrieval") is a tree where each node represents a character, and paths from root to nodes spell out strings. Tries are optimized for prefix-based operations on strings.

Searching for a word in a trie takes O(m) time, where m is the word's length—completely independent of how many words are stored. This makes tries ideal for autocomplete systems (type "prog" and instantly find all words starting with "prog"), spell [checkers](/checkers), IP routing tables, and dictionary implementations.

The tradeoff is memory. A naive trie can use enormous amounts of space because each node potentially has one child per character in the alphabet. Compressed tries (Patricia tries, radix trees) reduce this overhead by merging chains of single-child nodes.

## Graph Structures

Graphs represent relationships between entities. They consist of vertices (nodes) and edges (connections between nodes). Graphs are arguably the most general data structure—arrays, linked lists, and trees are all special cases of graphs.

### Representation

Two primary ways to represent graphs in code:

**Adjacency matrix**: A 2D array where entry [i][j] indicates whether an edge exists between vertex i and vertex j. Great for dense graphs (many edges) and checking whether two nodes are connected (O(1)), but wastes memory for sparse graphs.

**Adjacency list**: Each vertex stores a list of its neighbors. Memory-efficient for sparse graphs (most real-world graphs are sparse) and efficient for iterating over a node's neighbors.

### Directed vs. Undirected

**Undirected graphs** have edges that go both ways—if Alice is friends with Bob, Bob is friends with Alice. **Directed graphs** (digraphs) have one-way edges—Alice follows Bob on Twitter, but Bob doesn't necessarily follow Alice back.

**Weighted graphs** assign values to edges—road distances, network bandwidths, relationship strengths.

### Graph Algorithms

Graph [algorithms](/algorithms) solve some of computing's most important problems:

- **Breadth-First Search (BFS)** explores all neighbors before moving deeper. Used for shortest paths in unweighted graphs and level-order traversal.
- **Depth-First Search (DFS)** explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and connected component identification.
- **Dijkstra's Algorithm** finds the shortest path between vertices in a weighted graph.
- **Minimum Spanning Tree** (Kruskal's, Prim's) finds the cheapest way to connect all vertices.
- **PageRank** (yes, the Google algorithm) determines the importance of nodes based on the structure of incoming edges.

Social networks, road maps, internet routing, dependency management in [software engineering](/app-development), recommendation systems, and biological networks all use graph structures.

## Advanced and Specialized Structures

### Bloom Filters

A Bloom filter tests whether an element is possibly in a set or definitely not in a set. It uses multiple hash functions and a bit array, requiring very little memory but allowing false positives (never false negatives).

Web browsers use Bloom filters to check URLs against lists of known malicious sites. Database systems use them to avoid unnecessary disk reads. Spell checkers use them. When you need fast, memory-efficient membership testing and can tolerate occasional false positives, Bloom filters are remarkable.

### Skip Lists

A skip list is a probabilistic data structure that provides O(log n) search, insertion, and deletion—similar to a balanced BST but simpler to implement. It works by maintaining multiple layers of linked lists, with higher layers skipping over more elements.

Redis, the popular in-memory data store, uses skip lists for its sorted set implementation. They're easier to implement than self-balancing trees and perform well in practice.

### Disjoint Set (Union-Find)

This structure tracks a collection of non-overlapping sets. Two operations: **find** (which set does this element belong to?) and **union** (merge two sets). With path compression and union by rank, both operations are nearly O(1).

Union-Find is used in Kruskal's minimum spanning tree algorithm, network connectivity analysis, and [image processing](/image-processing) (identifying connected components).

## Choosing the Right Data Structure

This is the real skill—not memorizing structures, but knowing when to use which one.

| Need | Best Structure |
|------|---------------|
| Fast lookup by key | Hash table |
| Sorted data with fast search | Balanced BST or skip list |
| FIFO processing | Queue |
| LIFO processing | Stack |
| Fast access by position | Array |
| Frequent mid-sequence insertions | Linked list |
| Priority-based processing | Heap |
| Prefix matching on strings | Trie |
| Relationship modeling | Graph |
| Database indexing | B-tree |
| Membership testing (space-constrained) | Bloom filter |

But real-world decisions involve tradeoffs. A hash table gives O(1) lookups but uses more memory. A sorted array gives O(log n) search with less memory but O(n) insertion. A balanced BST gives O(log n) everything but with pointer overhead and cache-unfriendly memory access.

The context—data size, operation frequency, memory constraints, concurrency requirements—determines the right choice. There's rarely a universally "best" structure. There's only the best structure for your specific problem.

## Data Structures in Practice

Understanding data structures isn't just for technical interviews (though they dominate interview questions at companies like Google, Amazon, and Meta). They shape real systems:

- **Databases** use B-trees for indexes, hash tables for in-memory lookups, and write-ahead logs (essentially queues) for durability.
- **Operating systems** use trees for file systems, queues for process [scheduling](/scheduling), and hash tables for page tables.
- **Compilers** use hash tables for symbol tables, trees for [syntax](/syntax) parsing, and stacks for expression evaluation.
- **Search engines** use inverted indexes (a form of hash table), tries for autocomplete, and graphs for link analysis.
- **Social networks** are fundamentally graph structures with hash tables for user lookups and queues for news feed generation.

## Key Takeaways

Data structures are the organizational backbone of all software. They determine how efficiently programs store, access, and modify data—and choosing the right structure for the job is one of the most impactful decisions in software development.

The fundamental structures—arrays, linked lists, stacks, queues, hash tables, trees, and graphs—each optimize for different access patterns. Arrays for position-based access. Hash tables for key-based lookup. Trees for sorted data and hierarchical relationships. Graphs for arbitrary connections between entities.

Understanding Big O notation lets you reason about tradeoffs: time versus space, insertion speed versus search speed, simplicity versus efficiency. The best programmers don't memorize every structure—they understand the principles well enough to pick the right tool and, when needed, combine or adapt structures for novel problems. That understanding is what separates code that works from code that works *well*.
