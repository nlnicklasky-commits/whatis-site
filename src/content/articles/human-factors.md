---
title: "What Is Human Factors?"
slug: human-factors
description: "Human factors engineering designs systems around human abilities and limits. Learn about ergonomics, error prevention, and cognitive design principles."
category: technology
tags: ["human factors", "ergonomics", "user-centered design", "usability", "safety", "cognitive psychology", "system design"]
heroImage: "/images/articles/human-factors-hero.webp"
heroAlt: "Editorial photograph representing the concept of human factors"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2747
tier: "2"
relatedArticles: ["cognitive-psychology", "biomechanics", "computer-science", "aerospace-engineering", "aviation"]
externalSources:
  - title: "Human Factors and Ergonomics Society"
    url: "https://www.hfes.org/"
  - title: "NIOSH — Ergonomics and Musculoskeletal Disorders"
    url: "https://www.cdc.gov/niosh/topics/ergonomics/"
  - title: "FAA Human Factors Division"
    url: "https://www.faa.gov/about/office_org/headquarters_offices/ang/offices/tc/about/campus/faa_702a"
  - title: "International Ergonomics Association"
    url: "https://iea.cc/"
faq:
  - q: "What is the difference between human factors and ergonomics?"
    a: "In practice, they're the same discipline — 'human factors' is the preferred term in North America, while 'ergonomics' is more common in Europe and internationally. The International Ergonomics Association uses both terms interchangeably. Technically, ergonomics sometimes emphasizes physical aspects (chair design, workstation layout) while human factors may emphasize cognitive aspects (decision-making, error prevention), but most practitioners use the terms synonymously."
  - q: "What industries hire human factors professionals?"
    a: "Aviation, healthcare, defense/military, automotive, consumer electronics, software, nuclear power, oil and gas, manufacturing, and transportation are the primary employers. Any industry where human error can cause safety incidents or significant losses needs human factors expertise. The median salary for human factors engineers in the US is approximately $90,000-$110,000."
  - q: "How does human factors differ from UX design?"
    a: "UX design focuses primarily on digital product experiences — apps, websites, software. Human factors encompasses a broader scope: physical environments, safety-critical systems, workstation design, shift scheduling, team dynamics, and any system where humans interact with technology or processes. Human factors also draws more heavily on cognitive psychology and emphasizes error prevention in safety-critical contexts."
  - q: "Can you give an example of a human factors failure?"
    a: "The Three Mile Island nuclear accident (1979) is a classic case. Operators received over 100 simultaneous alarms with no prioritization. Critical indicator lights were obscured by maintenance tags. A valve status indicator showed the command sent to the valve rather than the valve's actual position. Operators made reasonable decisions based on misleading information — the system design failed, not the humans."
---

# What Is Human Factors?

Human factors is the scientific discipline that studies human capabilities, limitations, and behaviors, then applies that knowledge to design systems, products, and environments that fit the people who use them — rather than forcing people to adapt to poorly designed systems. Also known as [ergonomics](/ergonomics) (particularly outside North America), the field draws on [cognitive psychology](/cognitive-psychology), [engineering](/engineering), [physiology](/physiology), and design to reduce errors, improve safety, and make complex systems manageable for the humans operating them.

## The Core Idea: Humans Aren't the Problem

Here's the most important thing to understand about human factors: when a person makes an error using a system, the usual instinct is to blame the person. They weren't paying attention. They were careless. They need more training.

Human factors rejects this framing. If multiple trained, competent people keep making the same error with the same system, the system is the problem — not the people. Humans are predictable. We have consistent cognitive limitations: limited working memory, susceptibility to distraction, tendency toward pattern-based thinking, difficulty maintaining vigilance over long periods. Good system design accounts for these characteristics. Bad system design ignores them and then blames operators when things go wrong.

This isn't a soft, feel-good [philosophy](/philosophy). It's an engineering approach backed by decades of accident investigation. When you redesign a system to prevent a specific error, that error stops happening. When you just retrain the same operators on the same flawed system, the error reoccurs. The data on this is overwhelming.

## A History Written in Accidents

Human factors emerged largely from catastrophic failures — events where the gap between system design and human capability had deadly consequences.

### World War II: The Birth of the Discipline

During WWII, pilots were crashing perfectly functional aircraft at alarming rates. Not in combat — during routine operations. They were landing with wheels up, retracting flaps instead of landing gear, and misreading instruments.

The military's initial response was predictable: better [pilot training](/pilot-training). But psychologist Alphonse Chapanis noticed something that training couldn't fix: the controls for flaps and landing gear looked and felt identical, and they were located right next to each other. Pilots under stress were grabbing the wrong lever.

Chapanis's solution was elegant: shape-code the controls. Put a small wheel shape on the landing gear lever and a flap shape on the flap lever. Pilots could tell which was which by touch alone. Landing gear accidents dropped dramatically. No retraining needed — just a design change that matched the system to human capabilities.

This was the founding insight of human factors: design for the human, not the idealized, never-makes-mistakes human that doesn't exist.

### Three Mile Island (1979)

The partial nuclear meltdown at Three Mile Island is a human factors case study taught in every HF program. When the accident began:

- Over 100 alarms activated simultaneously. There was no prioritization — critical warnings were mixed with trivial ones.
- A pressure relief valve stuck open, but its status indicator showed the command sent (close), not the actual position (open). Operators believed the valve was closed because the indicator said so.
- Critical instrument readings scrolled off a printer — operators had to leaf through printout paper to find relevant data.
- The control room layout required operators to turn their backs to critical displays to reach certain controls.

Every operator decision during the accident was rational given the information available to them. The system presented misleading information through a poorly designed interface. Better training couldn't have prevented the accident — only better design could have.

### The Challenger Disaster (1986)

The Space Shuttle Challenger broke apart 73 seconds after launch, killing seven crew members. The technical cause was O-ring failure in cold temperatures. But the human factors story is about decision-making.

Engineers at Morton Thiokol (the O-ring manufacturer) argued against launching in cold weather. Their data showed temperature-dependent O-ring damage. But their presentation to NASA decision-makers was poorly organized — critical data was buried in dense tables rather than presented clearly. Under schedule pressure, NASA managers approved the launch.

Edward Tufte later analyzed the situation and demonstrated that a simple scatter plot of temperature vs. O-ring damage — data the engineers had but didn't present clearly — would have made the danger obvious. The information existed. The display of that information failed.

This illustrates a key human factors principle: having correct information isn't enough. Information must be presented in a way that supports good decision-making under the conditions decision-makers actually face.

### Medical Errors

The Institute of Medicine's landmark 1999 report *To Err Is Human* estimated that 44,000-98,000 Americans died annually from preventable medical errors — more than car accidents, breast cancer, or AIDS at the time. Many of these errors had human factors roots:

- Drug names that look or sound alike (chlorpromazine vs. chlorpropamide)
- Infusion pumps with confusing decimal point entry
- Alarm fatigue — ICU nurses hearing hundreds of alarms per shift, most false
- Handoff failures during shift changes
- Poorly designed medical records that bury critical information

Healthcare has been slow to adopt human factors principles compared to [aviation](/aviation), but the field is catching up. Standardized handoff protocols, barcode medication verification, and improved medical device interfaces have measurably reduced error rates where implemented.

## The Three Pillars of Human Factors

### Physical Ergonomics

Physical ergonomics studies how the body interacts with tools, workstations, and environments. It addresses questions like: How high should a desk be? How much force can a worker exert repeatedly without injury? What posture minimizes back strain?

Musculoskeletal disorders (MSDs) — injuries to muscles, tendons, nerves, and joints from repetitive motion, awkward postures, or excessive force — cost US employers over $20 billion annually in workers' compensation claims. Carpal tunnel syndrome, tendinitis, and chronic back pain are classic ergonomic injuries.

Workspace design follows anthropometric data — body measurements from large populations. The "5th to 95th percentile" design range aims to accommodate 90% of users. This means a workstation designed for Americans should adjust to fit someone 5'0" tall and someone 6'2" tall. The remaining 5% at each extreme may need specialized accommodations.

Chair design illustrates the complexity. A good office chair supports the lumbar curve, allows seat height adjustment, provides adjustable armrests, permits reclining, and distributes pressure evenly. Each feature addresses a specific [biomechanics](/biomechanics) concern: lumbar support prevents disc compression, adjustable height ensures feet rest flat with thighs parallel to the floor, and pressure distribution prevents ischemia (restricted blood flow) in the buttocks.

### Cognitive Ergonomics

This branch studies how humans process information, make decisions, maintain attention, and form mental models of systems. It's where human factors overlaps most with [cognitive psychology](/cognitive-psychology).

**Attention** is limited. Despite popular belief, multitasking is largely a myth — humans don't do two cognitive tasks simultaneously; they switch between them rapidly, with performance costs at each switch. Studies show that task-switching can reduce [productivity](/productivity) by up to 40%. For safety-critical operations, the implication is clear: design systems to minimize required multitasking.

**Working memory** holds about 4 items for about 20 seconds without rehearsal. Any interface that requires users to remember more than 4 pieces of information simultaneously is overloading working memory. Phone numbers, social security numbers, and credit card numbers are all chunked into groups of 3-4 digits for this reason.

**Mental models** are internal representations of how systems work. When your mental model matches the actual system, you can predict what will happen and interpret what you see. When there's a mismatch, errors occur. A user who thinks "closing a program" and "minimizing a program" are the same thing has an incorrect mental model that will lead to confusion.

**Decision-making under stress** deteriorates predictably. People narrow their attention (tunnel vision), rely more on habitual responses (even when inappropriate), and have difficulty considering alternative explanations. System design for high-stress environments must account for this — using checklists, forcing functions, and simplified displays.

### Organizational Ergonomics

The third pillar addresses how organizations, teams, and work processes affect human performance. Shift [scheduling](/scheduling) is a prime example: humans have circadian rhythms that make alertness lowest between 2-6 AM. Accidents peak during night shifts — Chernobyl, Three Mile Island, and Bhopal all began during night shifts.

Research shows that 12-hour shifts increase error rates compared to 8-hour shifts, that rotating shifts (alternating between day and night) are more disruptive than fixed schedules, and that sleep debt accumulates and cannot be recovered on a single night off.

Team communication is another organizational factor. Crew [Resource Management](/resource-management) (CRM) in aviation — a structured approach to team communication, workload management, and authority gradient flattening — has measurably reduced aviation accidents. Before CRM, junior crew members sometimes failed to speak up about problems because of authority dynamics. CRM explicitly trains crews to voice concerns and captains to listen to them.

## Design Principles That Save Lives

### Error Prevention vs. Error Tolerance

The best approach prevents errors from occurring. The second-best approach tolerates errors when they happen by making them recoverable.

**Forcing functions** physically prevent errors. A microwave door interlock prevents the oven from operating when open. A car's shift interlock requires the brake pedal to be pressed before shifting out of park. A nuclear plant's rod interlock prevents certain rod configurations that could cause criticality.

**Confirmations** add a decision point before irreversible actions. "Are you sure you want to delete these 3,000 files?" This seems annoying when you did mean to delete them, but the one time you accidentally selected the wrong folder, it saves you.

**Undo** provides recovery after errors. Email unsend. Word processor undo. Database transaction rollback. The ability to reverse mistakes changes how people interact with systems — they're more willing to explore and experiment when errors are reversible.

**Defaults** prevent errors by pre-selecting the safest or most common option. Drug dosage fields that default to the most common dose. Settings that default to "safe" rather than "maximum performance." Defaults are enormously powerful — research consistently shows that most users accept defaults, making the default value essentially a design decision.

### Alarm Design

Poor alarm design kills people. This isn't hyperbole.

ICU nurses hear an average of 150-400 alarms per shift. Studies show that 85-99% of these are false or clinically insignificant. The result is alarm fatigue — nurses become desensitized and may ignore or delay responding to genuine emergencies.

Good alarm design follows principles that human factors research has established:

- **Prioritize**: Critical alarms must be distinct from advisory alarms. Use different sounds, colors, and response requirements.
- **Reduce false alarms**: Each false alarm erodes trust in the system. Target a false positive rate below 5%.
- **Make alarms actionable**: An alarm should tell the operator what's wrong and suggest a response, not just announce that something needs attention.
- **Avoid alarm floods**: When a major failure occurs, dozens of cascading alarms help nobody. Intelligent alarm systems should suppress downstream alarms and highlight root causes.

### Display Design

How information is displayed directly affects how well humans can use it. Key principles:

**Proximity compatibility**: Information that's used together should be displayed together. If an operator needs to compare temperature and pressure readings to assess system status, those readings should be adjacent — not on different screens or different pages.

**Signal detection theory**: Any display requires users to distinguish signals (real information) from noise (irrelevant data). Maximizing the signal-to-noise ratio — through visual hierarchy, color coding, filtering, and progressive disclosure — helps users find what matters.

**Situation awareness**: Displays should support users' understanding of what's happening now, what it means, and what will happen next. Flight displays that show not just current altitude but altitude trend (climbing, descending, and how fast) support prediction — the third and most valuable level of situation awareness.

## Human Factors in Everyday Life

You encounter human factors design — good and bad — constantly.

**Traffic systems**: Stop signs are octagonal worldwide so they're recognizable even when the text is obscured. Traffic lights use position (top, middle, bottom) in addition to color, accommodating color-blind drivers. Road curves are banked based on calculations of vehicle speed and tire friction — [classical mechanics](/classical-mechanics) applied to human safety.

**Consumer products**: Prescription bottle caps that require pushing down while turning prevent children from opening them (while frustrating adults with arthritis — a design tradeoff). Power tool dead-man switches require continuous grip to operate, stopping the tool if the user loses control.

**Software**: The [algorithms](/algorithms) behind autocorrect, predictive text, and search suggestions are human factors applications. They anticipate human input errors and reduce the cost of mistakes. Email systems that detect the word "attached" but no attachment prompt you before sending — a simple forcing function that prevents a common error.

**[Architecture](/architecture)**: Building codes that require push bars on exit doors (not pull handles) reflect decades of data on panic behavior. During fires, panicked crowds push toward exits. If the door requires pulling, people crush against it. Push bars ensure the crowd's natural behavior opens the door.

## The Economics of Getting It Wrong

Poor human factors design is expensive. Some numbers:

- US workplace injuries cost employers approximately $170 billion annually, with ergonomic injuries comprising about one-third.
- Medical errors cost the US healthcare system an estimated $17-29 billion per year.
- The automotive industry spends billions on recall campaigns for interface-related defects (confusing controls, misleading displays).
- Software companies lose an estimated 50% of engineering time to fixing problems that usability testing would have caught earlier.

The cost of retrofitting human factors improvements after deployment is 10-100 times higher than incorporating them during design. A military aircraft that requires a cockpit redesign to fix an interface problem might cost hundreds of millions of dollars. Catching the same problem during a design review would cost almost nothing.

## Current Challenges

### Automation and Human Oversight

As systems become more automated, a paradox emerges: automation handles routine operations perfectly, but humans must intervene when automation fails — precisely when the situation is most confusing and urgent. Pilots who haven't hand-flown an approach in months must suddenly take over when the autopilot disconnects in bad weather. Operators monitoring an automated factory must diagnose a failure in a system they don't fully understand because they've never had to operate it manually.

This "automation paradox" is a central concern in modern human factors. Solutions include keeping humans actively involved (not just monitoring), providing clear system state information, designing graceful degradation (systems that fail incrementally rather than catastrophically), and maintaining human skill through regular practice.

### Distraction and Technology

Smartphones have created a distraction crisis. Distracted driving kills over 3,000 people annually in the US. Distracted [walking](/walking) leads to emergency room visits for falls and collisions. Workplace interruptions from notifications fragment attention and increase errors.

Human factors research shows that even the presence of a smartphone on a desk — face down, silent — measurably reduces cognitive performance. The mere possibility of notification is enough to consume attentional resources. This finding has implications for workplace design, [education](/education), and safety-critical operations.

### Aging Populations

As populations age globally, designing for older users becomes increasingly important. Age-related changes — reduced visual acuity, hearing loss, slower reaction times, decreased grip strength, cognitive slowing — mean that systems designed for 25-year-olds may be unusable for 75-year-olds.

Age-inclusive design benefits younger users too. Larger text, better contrast, simpler [navigation](/navigation), and more forgiving input methods improve usability for everyone, not just older adults.

## The Future of Human Factors

**Human-AI teaming** is the field's most pressing frontier. As [artificial intelligence](/artificial-intelligence) systems take on more decision-making roles, human factors must determine how to divide responsibilities between humans and AI, how to calibrate trust (neither over-trusting nor under-trusting AI recommendations), and how to maintain meaningful human control over automated systems.

**Neuroergonomics** combines [neuroscience](/neuroscience) with ergonomics, using brain imaging and physiological measures to assess cognitive workload, fatigue, and stress in real time. Future systems could detect when an operator is overloaded and redistribute tasks accordingly.

**Resilience engineering** shifts focus from preventing failures to building systems that can adapt when unexpected situations arise. Rather than designing for every foreseeable scenario, resilience engineering designs for adaptability — giving humans the tools, authority, and information to improvise when things go wrong in ways nobody predicted.

The field that began with shape-coding aircraft levers has grown into a discipline that shapes everything from surgical suites to smartphone interfaces to autonomous vehicle controls. Its fundamental insight remains unchanged: humans are predictable, fallible, and adaptable — and the best systems are designed with all three of those truths in mind.
