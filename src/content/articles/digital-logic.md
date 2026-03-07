---
title: "What Is Digital Logic?"
slug: digital-logic
description: "Digital logic is the foundation of computing, using binary signals and logic gates to process information. Learn how ones and zeros run the world. Discover t..."
category: everyday-concepts
tags: ["digital logic", "everyday-concepts"]
heroImage: "/images/articles/digital-logic-hero.webp"
heroAlt: "Editorial photograph representing the concept of digital logic"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 4
wordCount: 1100
tier: "3"
relatedArticles: ["computer-science", "electronics", "algorithms", "electricity"]
externalSources:
  - title: "MIT OpenCourseWare - Digital Systems"
    url: "https://ocw.mit.edu/"
  - title: "IEEE - Institute of Electrical and Electronics Engineers"
    url: "https://www.ieee.org/"
  - title: "Computer History Museum"
    url: "https://computerhistory.org/"
faq:
  - q: "What are logic gates?"
    a: "Logic gates are the fundamental building blocks of digital circuits. The basic types are AND (output is 1 only when all inputs are 1), OR (output is 1 when any input is 1), NOT (inverts the input), NAND (opposite of AND), NOR (opposite of OR), and XOR (output is 1 when inputs differ). Every computation your computer performs — from loading a webpage to rendering a video — ultimately reduces to combinations of these simple gates."
  - q: "Why does digital use binary instead of decimal?"
    a: "Binary (base-2) uses only two states: on and off, 1 and 0. This maps perfectly to electrical switches, which are either conducting or not. Building reliable circuits with only two states is far easier than building circuits that must distinguish between ten voltage levels (for decimal). Claude Shannon proved in his 1937 master's thesis that Boolean algebra could be implemented with electrical switches, establishing the theoretical foundation for all digital computing."
  - q: "What is the difference between digital and analog?"
    a: "Analog signals are continuous — they can take any value within a range, like the smooth sweep of a clock's hands. Digital signals are discrete — they snap to specific values, like a digital clock showing exact numbers. Digital signals resist noise better because small disturbances don't change a 1 to a 0. This noise resistance is why digital technology replaced analog in most applications, from music (CDs replaced vinyl) to television (digital broadcast replaced analog)."
---

# What Is Digital [Logic](/logic)?

Digital logic is the system of rules and circuits that processes information using binary signals — ones and zeros, on and off, true and false. Every smartphone, laptop, car computer, and smart thermostat runs on digital logic. It's the invisible foundation beneath all modern computing, and it boils down to a surprisingly simple idea: you can build anything computable from circuits that answer yes-or-no questions.

## The Big Idea

Here's the core concept. An electrical signal is either on or off. Call "on" a 1 and "off" a 0. Now build tiny circuits that combine these signals according to logical rules — if both inputs are on, output on (that's an AND gate). If either input is on, output on (that's an OR gate). Flip the signal (that's a NOT gate).

That's it. Three basic operations. From these, you can build [arithmetic](/algebra), memory, decision-making, and every computation a modern processor performs. Your phone's chip contains billions of these gates, switching trillions of times per second, and the whole thing works because the underlying logic is rock-solid.

## Claude Shannon's Breakthrough

The person who made all of this possible was a 21-year-old master's student at MIT named Claude Shannon. In 1937, Shannon submitted what's been called "the most important master's thesis of the 20th century." He demonstrated that Boolean algebra — a system of logic developed by mathematician George Boole in 1854 — could be implemented with electrical relay circuits.

Before Shannon, circuit designers built complex switching networks through trial and error. After Shannon, they had a mathematical framework. If you could express a problem in Boolean algebra, you could build a circuit to solve it. This single insight bridges the gap between abstract [mathematics](/mathematics) and physical [electronics](/electricity), and it's the reason we have computers.

## The Building Blocks

**AND gates** output 1 only when all inputs are 1. Think of it as two switches in series — current only flows when both are closed. In everyday logic: "I'll go to the party if I finish work AND find a ride."

**OR gates** output 1 when any input is 1. Two switches in parallel — current flows if either is closed. "I'll be happy if it's sunny OR if there's cake."

**NOT gates** (inverters) flip the signal. Input 1 becomes output 0, and vice versa. "If it's NOT raining, I'll walk."

**NAND gates** are AND followed by NOT — they output 0 only when all inputs are 1. Here's a remarkable fact: you can build any logical function using only NAND gates. Every AND, OR, NOT, and complex function can be constructed from NANDs alone. This makes NAND gates the universal building block of digital logic, and they're the most commonly used gate in modern chip design.

**XOR gates** (exclusive or) output 1 when inputs differ. This is how computers add numbers — the XOR of two binary digits gives the sum digit, while the AND gives the carry digit. Addition is literally just XOR and AND, chained together.

## From Gates to Processors

Individual gates are useless on their own. The magic happens when you combine them.

**Adders** chain XOR and AND gates to perform binary addition. A "full adder" handles one bit of addition (including a carry from the previous bit). Chain 64 full adders together and you have a 64-bit adder — the kind inside your [computer's](/computer-science) processor.

**Multiplexers** act as signal selectors — given multiple inputs and a selection signal, they route the chosen input to the output. They're the switching stations of digital circuits.

**Flip-flops** are circuits that remember. A flip-flop can store one bit of information — it stays at 0 or 1 until deliberately changed. Chain billions of flip-flops together and you have computer memory. Your RAM is essentially an enormous organized collection of flip-flops (or their capacitor-based equivalents in DRAM).

**Registers** group flip-flops to store multi-bit values — a 64-bit register holds 64 bits, enough to represent numbers up to about 18.4 quintillion. The processor's registers are where active computation happens.

**The ALU (Arithmetic Logic Unit)** combines adders, logic gates, and control circuits to perform arithmetic and logical operations on command. Tell it to add, subtract, compare, AND, OR, or shift, and it executes using the same basic gate components. The ALU is the computational heart of every processor.

## How a Processor Works (Simplified)

A modern processor runs a cycle billions of times per second:

1. **Fetch** an instruction from memory
2. **Decode** it — figure out what operation is requested
3. **Execute** it using the ALU and registers
4. **Store** the result back in memory or a register

Every step is implemented in digital logic. The decoder is a circuit that recognizes instruction patterns. The ALU is a circuit that performs operations. The memory interface is a circuit that reads and writes data. It's gates all the way down.

Intel's first commercial processor, the 4004 (1971), contained 2,300 transistors. Apple's M2 chip (2022) contains about 20 billion. The logic hasn't changed — the same AND, OR, NOT combinations that powered the 4004 power the M2. We just have spectacularly more of them, switching spectacularly faster.

## Digital vs. Analog

The digital revolution succeeded because digital signals are resilient. An analog signal carrying music might be a smooth wave varying between 0 and 5 volts. Any noise — electromagnetic interference, temperature drift, component aging — distorts that wave, and the distortion is permanent. Copy an analog signal ten times and it degrades noticeably.

A digital signal carrying the same music is a stream of 1s and 0s. A "1" might be 5 volts and a "0" might be 0 volts. Noise might shift a 5-volt signal to 4.7 volts — but the receiver still reads it as 1. Copy a digital signal ten million times and it's identical to the original. This noise immunity is why digital replaced analog in telecommunications, audio, video, and nearly every information technology.

## Where Digital Logic Lives

Digital logic isn't just in computers. It's in your car's engine [management](/management) system (dozens of processors), your microwave's control panel, your washing machine's cycle timer, traffic light controllers, elevator systems, and medical devices. A modern car contains 100+ microprocessors, all [running](/running) digital logic.

The field continues evolving. [Quantum computing](/quantum-computing) challenges binary logic with qubits that can be 0, 1, or both simultaneously. Neuromorphic chips mimic brain [architecture](/architecture) instead of traditional gate-based design. But for now — and for the foreseeable future — the digital logic that Claude Shannon formalized in 1937 remains the foundation of the information age. Ones and zeros, running the world.
