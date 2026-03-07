---
title: What Is Design Patterns?
slug: design-patterns
description: "Design patterns are reusable solutions to common software problems. Learn the Gang of Four patterns, when to use them, and when to skip them."
category: technology
tags: ["design patterns", "software engineering", "programming", "object-oriented", "architecture", "code reuse", "best practices"]
heroImage: "/images/articles/design-patterns-hero.webp"
heroAlt: "Editorial photograph representing the concept of design patterns"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3075
tier: "1"
relatedArticles: ["algorithms", "app-development", "agile-software-development", "machine-learning"]
externalSources:
  - title: "Design Patterns: Elements of Reusable Object-Oriented Software"
    url: "https://en.wikipedia.org/wiki/Design_Patterns"
  - title: "Refactoring Guru - Design Patterns"
    url: "https://refactoring.guru/design-patterns"
  - title: "Source Making - Design Patterns"
    url: "https://sourcemaking.com/design_patterns"
  - title: "Martin Fowler - Patterns of Enterprise Application Architecture"
    url: "https://martinfowler.com/eaaCatalog/"
faq:
  - q: "How many design patterns are there?"
    a: "The original Gang of Four book describes 23 patterns divided into creational, structural, and behavioral categories. But many more patterns have been documented since then for specific domains like enterprise applications, microservices, and concurrent programming. The number keeps growing as developers encounter new recurring problems."
  - q: "Do I need to memorize all design patterns?"
    a: "No. Most working developers regularly use maybe 5-8 patterns. Focus on understanding the underlying principles—encapsulation, loose coupling, composition over inheritance—and you'll naturally recognize when a pattern fits. Trying to memorize all of them without context is counterproductive."
  - q: "Are design patterns only for object-oriented programming?"
    a: "The original Gang of Four patterns were written for object-oriented languages, but the concept of reusable solutions applies everywhere. Functional programming has its own patterns like monads and functors. Even database design and system architecture have documented patterns. The idea transcends any single programming style."
  - q: "Can design patterns hurt your code?"
    a: "Absolutely. Over-engineering with unnecessary patterns is one of the most common mistakes intermediate developers make. Adding a Strategy pattern when a simple if-else works fine creates complexity without benefit. Patterns should simplify your code, not complicate it. If a pattern makes things harder to understand, you probably don't need it."
  - q: "What's the most important design pattern to learn first?"
    a: "Observer and Strategy are great starting points because they solve problems you've likely already encountered. Observer handles event-driven communication, which is everywhere in modern software. Strategy lets you swap algorithms at runtime, which teaches you a lot about good object-oriented thinking."
---

# What Is Design Patterns?

A design pattern is a reusable, generalized solution to a commonly occurring problem in software design. It is not finished code you can copy-paste into your project, but rather a template or blueprint describing how to solve a particular type of problem in a way that has been tested and refined by thousands of developers over decades.

## Where This All Started

In 1994, four authors—Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides—published a book that would reshape how programmers think about code. *Design Patterns: Elements of Reusable Object-Oriented Software* introduced 23 patterns organized into three categories. These four became known as the "Gang of Four" (GoF), and their book became one of the most influential programming texts ever written.

But here's the thing most people don't realize: the Gang of Four didn't invent patterns. They borrowed the concept from Christopher Alexander, an architect (the building kind, not the software kind) who noticed that the same spatial arrangements kept solving the same human problems across cultures and centuries. A window seat that catches afternoon light. A courtyard that encourages gathering. Alexander called these recurring solutions "patterns" and argued they could be documented and reused.

The Gang of Four applied this thinking to software. And it stuck—hard. By the early 2000s, knowing your design patterns was practically a job requirement. Sometimes that was helpful. Sometimes it led to absurd over-[engineering](/engineering). More on that later.

## The Three Categories

The original 23 patterns fall into three buckets based on what kind of problem they solve.

### Creational Patterns: Making Things

Creational patterns deal with object creation—how you instantiate things, who controls the process, and how you hide the messy details from the rest of your code.

**Singleton** is probably the most famous (and most debated) pattern. It ensures a class has exactly one instance and provides global access to it. Database connections, configuration managers, logging systems—these are classic Singleton candidates. You don't want five different database connection pools floating around.

The problem? Singletons introduce global state, which makes testing painful and creates hidden dependencies. Many experienced developers consider Singleton an anti-pattern at this point. Use it sparingly and deliberately.

**Factory Method** lets you create objects without specifying their exact class. You call a factory method, and it decides which concrete class to instantiate based on some input. This is incredibly useful when your code needs to work with objects that share an interface but differ in implementation. Think about a document editor that needs to create different types of documents—PDF, Word, HTML—without the rest of the code caring which type it gets.

**Abstract Factory** takes this further by providing an interface for creating families of related objects. A UI toolkit might have a Windows factory that produces Windows-style buttons, scrollbars, and menus, and a Mac factory that produces Mac-style equivalents. Your application code works with abstract interfaces and never knows which platform it's running on.

**Builder** separates the [construction](/construction) of a complex object from its representation. If you've ever dealt with constructors that take 15 parameters, Builder is your friend. Instead of `new Pizza(true, false, true, "large", "thin", true, false, 3)`, you get `Pizza.builder().large().thinCrust().pepperoni().mushrooms().build()`. Much more readable. Much harder to mess up.

**Prototype** creates new objects by cloning existing ones. When object creation is expensive—maybe it involves database queries or complex calculations—you can create a prototype once and copy it whenever you need a similar object. JavaScript's prototype-based inheritance is a language-level implementation of this idea.

### Structural Patterns: Organizing Things

Structural patterns are about composition—how you assemble objects and classes into larger structures while keeping those structures flexible and efficient.

**Adapter** (sometimes called Wrapper) lets incompatible interfaces work together. You've got a square peg and a round hole? Build an adapter. In practice, this shows up constantly when integrating third-party libraries or legacy systems. Your code expects one interface, the library provides another, and the Adapter bridges the gap.

**Decorator** adds behavior to individual objects without affecting other objects of the same class. Think of a coffee shop: you start with basic coffee, then add milk (decorator), then add sugar (decorator), then add whipped cream (decorator). Each decorator wraps the previous one, adding new behavior while preserving the original interface. Java's I/O streams use this pattern extensively—`BufferedReader` wrapping `InputStreamReader` wrapping `FileInputStream`.

**Facade** provides a simplified interface to a complex subsystem. Your media player might have separate subsystems for audio decoding, video rendering, subtitle parsing, and screen [management](/management). A Facade wraps all of that behind a simple `play()`, `pause()`, `stop()` interface. The complexity still exists, but callers don't need to know about it.

**Composite** lets you treat individual objects and groups of objects uniformly. File systems use this: a directory can contain files and other directories, but you can ask any of them for their size, name, or permissions using the same interface. UI frameworks use Composite constantly—a panel contains buttons and other panels, and you can render, resize, or hide any of them the same way.

**Proxy** provides a stand-in for another object, controlling access to it. A virtual proxy might delay expensive object creation until the object is actually needed. A protection proxy might check permissions before allowing method calls. A remote proxy might represent an object on another server, handling network communication transparently.

**Bridge** separates an abstraction from its implementation so they can vary independently. This one is harder to grasp intuitively, but it prevents the combinatorial explosion you get when you have multiple dimensions of variation. Instead of WindowsCircle, WindowsSquare, LinuxCircle, LinuxSquare (four classes for two shapes and two platforms), you have Shape and Renderer as independent hierarchies connected by a bridge.

**Flyweight** shares common state between multiple objects to save memory. If you're rendering a document with thousands of characters, you don't need a separate object storing font, size, and color for every single character. The Flyweight pattern lets identical characters share that data, dramatically reducing memory usage.

### Behavioral Patterns: Coordinating Things

Behavioral patterns manage communication and responsibility between objects. These tend to be the most practically useful in day-to-day programming.

**Observer** defines a subscription mechanism where objects (observers) register to be notified when another object (the subject) changes state. This is everywhere—event listeners in UI frameworks, pub/sub messaging, reactive programming. When you add a click handler to a button in JavaScript, you're using Observer. When you subscribe to state changes in a Redux store, Observer again.

**Strategy** lets you define a family of [algorithms](/algorithms) and swap them at runtime. A sorting function might accept different comparison strategies. A payment system might support multiple payment processors. A [navigation](/navigation) app might switch between driving, walking, and transit route calculations. The key insight: extract the varying behavior into its own interface, and inject the specific implementation you need.

**Command** encapsulates a request as an object, letting you parameterize, queue, log, and undo operations. Every undo/redo system you've ever used is built on Command. Each action becomes an object with `execute()` and `undo()` methods. Store them in a stack, and you've got undo history.

**Iterator** provides a way to access elements of a collection sequentially without exposing the underlying representation. Python's `for item in collection` syntax, Java's `Iterator` interface, JavaScript's `for...of` loops—these are all Iterator implementations. You don't care whether the underlying data is an array, linked list, tree, or database cursor. You just ask for the next element.

**State** lets an object alter its behavior when its internal state changes. A TCP connection behaves differently when it's listening, connected, or closed. A vending machine responds differently to coin insertion when it's idle, has-money, or dispensing. Instead of massive switch statements, State encapsulates each behavior in its own class.

**Template Method** defines the skeleton of an [algorithm](/algorithms) in a base class but lets subclasses override specific steps. A data processing pipeline might always read, transform, and write data—but the specifics of each step vary. Template Method lets you lock down the overall structure while allowing customization of individual steps.

**Mediator** reduces chaotic dependencies between objects by forcing them to communicate through a central coordinator. In a chat room, users don't message each other directly—they send messages to the room, which routes them appropriately. Air traffic control is a mediator between aircraft. Without it, every plane would need to coordinate with every other plane.

**Chain of Responsibility** passes a request along a chain of handlers, each deciding whether to process it or pass it along. Exception handling in most languages works this way—if the current catch block doesn't handle the exception, it propagates to the next one. Middleware in web frameworks like Express.js follows this pattern too.

## When Patterns Actually Help

Patterns shine in specific situations, and recognizing those situations is more valuable than memorizing pattern catalogs.

**When you're building something that will change.** If your [app-development](/app-development) project has requirements that shift frequently—and when don't they?—patterns like Strategy and Observer make it easier to swap behavior without rewriting everything. The upfront cost of abstraction pays off when the third change request comes in.

**When multiple developers work on the same codebase.** Patterns provide shared vocabulary. Saying "this is an Observer" immediately communicates the structure to anyone who knows patterns. Compare that to explaining your custom event system from scratch. In [agile-software-development](/agile-software-development) teams, this shared language accelerates code reviews and onboarding.

**When you're integrating systems.** Adapter, Facade, and Proxy are workhorses for making incompatible systems talk to each other. Legacy integration, third-party library wrapping, API gateway design—structural patterns handle these constantly.

**When you're solving a problem someone else has already solved.** This sounds obvious, but it's the whole point. If you're building an undo system, reach for Command. If you're building a plugin [architecture](/architecture), reach for Strategy or Observer. Don't reinvent the wheel with a custom solution when a well-tested pattern exists.

## When Patterns Hurt

Here's the part the pattern evangelists don't emphasize enough: patterns can actively damage your code.

**Premature abstraction.** Adding patterns before you need them creates complexity without benefit. You build a Strategy pattern for algorithm selection when you only have one algorithm. You create an Abstract Factory when you only manufacture one type of object. This isn't good design—it's speculation about future requirements that may never arrive.

The principle is clear: don't add a pattern until you have evidence you need it. Wait for the second or third time you encounter the problem before abstracting.

**Pattern-itis.** Some developers, especially after first learning patterns, try to apply them everywhere. Every class becomes a Singleton. Every method call goes through a Command. Every conditional becomes a State machine. The result is code that's harder to read, harder to debug, and harder to modify—the exact opposite of what patterns are supposed to achieve.

**Wrong pattern for the problem.** Patterns solve specific problems. Using Observer when you need simple method calls, or Decorator when you need inheritance, creates unnecessary indirection. The code does the same thing but takes three times as many classes and five times as much reading to understand.

## Patterns in Modern Programming

The original Gang of Four patterns were designed for statically-typed, object-oriented languages like C++ and Java. Modern programming has shifted, and patterns have shifted with it.

### Patterns in Active Languages

In languages like Python, JavaScript, and Ruby, some patterns become trivially simple. Strategy? Just pass a function. Observer? Built into the language's event system. Factory? A function that returns objects. First-class functions and duck typing eliminate much of the boilerplate that patterns required in Java or C++.

This doesn't mean patterns are irrelevant in active languages—it means they're often implemented differently. The *concept* of separating concerns, managing dependencies, and controlling object creation still applies. The implementation just looks different.

### Patterns in [Functional Programming](/functional-programming)

Functional programming brings its own pattern vocabulary. Monads handle side effects and chaining operations. Functors map operations over wrapped values. Higher-order functions replace most behavioral patterns entirely. If you're working in Haskell, Scala, or even modern JavaScript with a functional style, the GoF patterns are less directly applicable—but the underlying principles remain.

### Architectural Patterns

As software grew more complex, patterns scaled up from class-level to system-level. Model-View-Controller (MVC) separates data, presentation, and logic. Microservices decompose monoliths into independently deployable services. Event sourcing records all state changes as a sequence of events. CQRS separates read and write operations.

These architectural patterns borrow heavily from the GoF principles—separation of concerns, loose coupling, single responsibility—but apply them at a much larger scale. If you understand the small patterns, the big ones feel natural.

## Patterns and [Machine Learning](/machine-learning)

An interesting development: [machine learning](/machine-learning) systems have spawned their own pattern vocabulary. The Pipeline pattern chains preprocessing, feature extraction, model training, and evaluation. The Feature Store pattern centralizes feature computation and storage. The Model Registry pattern tracks model versions and deployments.

These aren't GoF patterns, but they follow the same philosophy: identify recurring problems, document proven solutions, and give them names so teams can communicate efficiently.

## The SOLID Connection

Design patterns and SOLID principles are deeply intertwined. SOLID—Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion—provides the theoretical foundation that makes patterns work.

**Single Responsibility** is why patterns extract specific behaviors into separate classes. Strategy extracts algorithms. Observer extracts notification logic. Command extracts operations.

**Open/Closed** is why patterns use composition and interfaces rather than modifying existing code. You extend behavior by adding new Strategy implementations, not by editing existing conditionals.

**Dependency Inversion** is why patterns work with abstractions rather than concrete classes. Your code depends on an interface, and patterns provide different concrete implementations of that interface.

Understanding SOLID principles lets you reason about *why* patterns work, not just *how*. That understanding is far more valuable than memorizing pattern catalogs, because it lets you create appropriate solutions even when no cataloged pattern fits perfectly.

## Practical Advice for Learning Patterns

If you're just starting with design patterns, here's what actually works.

**Start with problems, not solutions.** Don't study the pattern catalog sequentially. Instead, wait until you hit a real problem—"I need to undo user actions" or "I need to support multiple payment methods"—and then find the pattern that addresses it. Learning from need creates lasting understanding.

**Read real code.** Open-source projects implement patterns constantly. Study how Django uses Template Method, how React uses Observer, how Spring uses Factory. Seeing patterns in real, battle-tested code teaches you things that UML diagrams never will.

**Refactor toward patterns.** Don't design with patterns from the start. Write simple code first. When you notice duplication, rigidity, or coupling problems, refactor toward the appropriate pattern. This teaches you to recognize the symptoms that patterns cure.

**Learn the principles behind the patterns.** If you understand encapsulation, composition, polymorphism, and the SOLID principles, you can derive most patterns from first principles. The pattern names become convenient shortcuts rather than mysterious incantations.

**Don't use patterns to impress.** Code that's simple and clear beats code that's pattern-laden and complex. Every. Single. Time. The best developers use patterns judiciously—when they genuinely simplify the solution—and write straightforward code everywhere else.

## The Anti-Patterns

Equally valuable as knowing good patterns is recognizing bad ones. Anti-patterns are common solutions that seem reasonable but actually create more problems than they solve.

**God Object** (or God Class) is an object that knows too much or does too much. It violates Single Responsibility so completely that it becomes the gravitational center of your entire codebase. Everything depends on it. Changing anything in it risks breaking everything.

**Lava Flow** describes code that's hardened into place—nobody understands it, nobody dares change it, but it keeps running. Dead code, obsolete workarounds, and abandoned experiments accumulate like geological layers. Everyone routes around it.

**Golden Hammer** is the tendency to use a familiar tool for every problem. "I know the Observer pattern, therefore every problem is an event notification problem." This leads to spectacularly inappropriate solutions.

**Copy-Paste Programming** avoids abstraction entirely, duplicating code whenever something similar is needed. It works short-term but creates a maintenance nightmare as duplicated logic diverges over time.

Recognizing anti-patterns in your own code is a skill that often matters more than recognizing where to apply good patterns.

## Patterns in Interviews and Career Growth

Let's be practical for a moment. Design pattern knowledge shows up in technical interviews regularly, especially at larger companies. Interviewers don't expect you to recite all 23 patterns—they want to see that you can recognize problems and propose structured solutions.

The patterns that come up most in interviews: Singleton, Factory, Observer, Strategy, and Decorator. Understanding these five deeply will handle most interview scenarios. More importantly, understanding the *principles* behind them lets you discuss tradeoffs intelligently, which is what experienced interviewers actually evaluate.

Beyond interviews, pattern fluency accelerates your career because it accelerates your communication. Senior developers and architects speak in pattern language. Understanding that language lets you participate in design discussions earlier in your career and contribute more effectively.

## What Patterns Are Really About

Strip away the UML diagrams, the Java examples, and the academic vocabulary, and design patterns come down to a few key ideas.

**Favor composition over inheritance.** Most patterns use object composition—combining simple objects to build complex behavior—rather than class inheritance. Composition is more flexible, more testable, and less fragile.

**Program to interfaces, not implementations.** Most patterns define abstract interfaces and work with those, allowing different concrete implementations to be swapped in. This is the foundation of loose coupling.

**Encapsulate what varies.** Identify the parts of your code that change and separate them from the parts that stay the same. Strategy encapsulates varying algorithms. State encapsulates varying behavior. Observer encapsulates varying reactions to events.

These three principles explain virtually every pattern in the catalog. Master them, and patterns become intuitive rather than memorized.

## Key Takeaways

Design patterns are proven solutions to recurring software problems, first cataloged by the Gang of Four in 1994 but drawing from architectural theory that's much older. They fall into creational patterns (how you make objects), structural patterns (how you organize objects), and behavioral patterns (how objects communicate).

The patterns themselves matter less than the principles behind them: composition over inheritance, programming to interfaces, and encapsulating variation. In modern programming—with active languages, functional paradigms, and microservice architectures—the original 23 patterns have evolved, but the underlying ideas remain as relevant as they were 30 years ago.

Use patterns when they genuinely simplify your code. Skip them when they don't. That judgment—knowing when a pattern helps versus when it hurts—is the real skill, and it only comes from writing code, making mistakes, and learning from both.
