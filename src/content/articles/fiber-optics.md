---
title: "What Is Fiber Optics?"
slug: fiber-optics
description: "Fiber optics transmits data as light pulses through thin glass strands. Learn how it works, why it's faster than copper, and where the technology is heading."
category: technology
tags: ["telecommunications", "data transmission", "internet", "light", "optics", "broadband"]
heroImage: "/images/articles/fiber-optics-hero.webp"
heroAlt: "Editorial photograph representing the concept of fiber optics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2874
tier: "2"
relatedArticles: ["computer-networking", "cloud-computing", "digital-signal-processing", "acoustics", "computer-hardware"]
externalSources:
  - title: "The Fiber Optic Association"
    url: "https://www.thefoa.org/"
  - title: "IEEE Photonics Society"
    url: "https://www.photonicssociety.org/"
  - title: "Corning - Fiber Optics Inventor"
    url: "https://www.corning.com/worldwide/en/innovation/the-glass-age/science-of-glass/fiber-optics.html"
  - title: "ITU Telecommunication Standards"
    url: "https://www.itu.int/en/ITU-T/Pages/default.aspx"
faq:
  - q: "Is fiber optics faster than Wi-Fi?"
    a: "Yes, significantly. Fiber optic connections offer speeds of 1-10 Gbps for residential service and up to 100+ Tbps on backbone networks. Wi-Fi typically delivers 100-600 Mbps in practice. Fiber also has much lower latency and is not affected by interference from walls, other devices, or weather."
  - q: "How long do fiber optic cables last?"
    a: "Fiber optic cables typically last 25-50 years. The glass fiber itself doesn't degrade meaningfully, but the protective coatings and connectors may need maintenance over time. Many fiber cables installed in the 1980s are still in service today."
  - q: "Can fiber optics be hacked?"
    a: "Fiber optics is inherently more secure than copper cable because it doesn't emit electromagnetic signals that can be intercepted. However, it's not impossible to tap—a determined attacker can bend the fiber to leak light and intercept data. Encryption remains important for sensitive communications regardless of the medium."
  - q: "Why doesn't everyone have fiber internet?"
    a: "Cost. Running fiber to every home (called FTTH—Fiber to the Home) requires digging trenches or stringing cables, which costs $1,000-$3,000 per home in urban areas and much more in rural areas. As of 2025, about 45% of U.S. homes have access to fiber, with deployment accelerating due to government subsidies."
  - q: "Does fiber optics use electricity?"
    a: "The fiber cable itself doesn't use electricity—it carries light, not electrical current. However, the equipment at each end (transmitters, receivers, amplifiers, routers) requires power. Fiber networks use less electricity overall than equivalent copper networks because signals travel farther without amplification."
---

# What Is Fiber Optics?

Fiber [optics](/optics) is a technology that transmits information as pulses of light through thin, flexible strands of glass or plastic, each roughly the diameter of a human hair. A single fiber optic cable can carry data at speeds exceeding 100 terabits per second over distances of hundreds of kilometers—making it the backbone of the modern internet and the fastest data transmission technology in widespread commercial use.

## How Light Carries Your Data

The fundamental principle is beautifully simple: shine a light down a glass tube and it bounces along the inside until it reaches the other end. That's it. Everything else is [engineering](/engineering).

But let's get into that engineering, because it's remarkable.

### Total Internal Reflection

When light passes from a denser material (like glass) to a less dense material (like air) at a shallow enough angle, it doesn't pass through—it bounces back entirely. This is called total internal reflection, and it's the physical phenomenon that makes fiber optics possible.

A fiber optic strand has two layers: the **core** (where light travels) and the **cladding** (a surrounding layer of glass with a slightly lower refractive index). The difference in refractive index between core and cladding creates a boundary that traps light inside the core. As long as light hits this boundary at an angle shallower than the "critical angle," it reflects perfectly and continues bouncing down the fiber.

No light escapes through the sides. Virtually all of it reaches the other end. A beam of light can travel about 100 kilometers through modern fiber before losing enough intensity to need amplification—compared to about 5 kilometers for electrical signals in copper cable.

### The Structure of Fiber

Individual fiber strands are tiny—the core is typically 8-62.5 micrometers in diameter (a human hair is about 70 micrometers). The cladding brings the total to 125 micrometers. Protective coatings, strength members (usually aramid yarn—the same material as Kevlar), and an outer jacket bring a typical fiber cable to a few millimeters in diameter.

A single undersea cable might contain hundreds of individual fiber pairs, each carrying its own data stream. The total capacity of a modern submarine cable—like Google's Grace Hopper cable connecting the U.S. to the UK and Spain—exceeds 340 terabits per second. That's enough to stream about 17 million 4K Netflix videos simultaneously.

### Single-Mode vs. Multi-Mode

There are two main types of optical fiber, and the difference matters.

**Multi-mode fiber** has a larger core (50 or 62.5 micrometers) that allows light to travel along multiple paths (modes) simultaneously. It's cheaper, easier to work with, and uses less expensive light sources (LEDs instead of lasers). But the different modes arrive at slightly different times, causing signal dispersion that limits both distance and bandwidth. Multi-mode is used for short distances—within buildings, data centers, and campus networks. Typical range: 300 meters to 2 kilometers.

**Single-mode fiber** has a much smaller core (8-10 micrometers) that allows only one mode of light propagation. This eliminates modal dispersion, allowing signals to travel much farther at higher bandwidths. Single-mode requires more expensive laser transmitters and precision connectors, but it's the standard for long-distance telecommunications, submarine cables, and backbone networks. Range: up to 100+ kilometers without amplification.

The choice between them is straightforward: short distance and cost-sensitive? Multi-mode. Long distance or high bandwidth? Single-mode. Most of the fiber in the ground today is single-mode.

## Encoding Data as Light

A fiber optic cable doesn't know what data it's carrying. It just transmits light pulses. The magic is in how those pulses represent information.

### On-Off Keying

The simplest method: light on = 1, light off = 0. Flash the laser billions of times per second and you've got a data stream. Early fiber systems used this approach, and it still works fine for moderate speeds. A laser toggling at 10 billion times per second gives you 10 Gbps—fast, but modern systems do much better.

### Wavelength Division Multiplexing (WDM)

Here's where it gets clever. Instead of using one color of light, you use many. Each "wavelength" (color) of light travels independently through the same fiber, carrying its own data stream. This is like having dozens of separate highways sharing the same physical road without interfering with each other.

Dense Wavelength Division Multiplexing (DWDM) packs 80, 96, or even 160 separate wavelength channels into a single fiber. If each channel carries 100 Gbps, a single fiber can carry 8-16 terabits per second. Multiply by the hundreds of fibers in a cable, and you begin to understand why fiber optics handles the entire internet's backbone traffic.

### Coherent Detection and Advanced Modulation

Modern long-haul fiber systems use coherent detection, which measures both the amplitude and phase of light waves. Combined with advanced modulation formats—quadrature amplitude modulation (QAM) can encode multiple bits per symbol—this pushes individual wavelength channel rates to 400 Gbps and beyond.

[Digital signal processing](/digital-signal-processing) at the transmitter and receiver compensates for impairments like chromatic dispersion and polarization mode dispersion that would otherwise limit performance. The math is intense, but the result is extraordinary: single fibers carrying data at rates that would have seemed impossible just a decade ago.

## The Infrastructure Underneath Your Feet

The global fiber optic network is one of the largest infrastructure projects in human history, and most people have no idea it exists.

### Submarine Cables

About 99% of intercontinental data traffic travels through undersea fiber optic cables. Not satellites—cables. Roughly 550 submarine cable systems span the world's ocean floors, totaling over 1.4 million kilometers of cable. That's enough to circle the Earth 35 times.

These cables sit on the ocean floor at depths of up to 8,000 meters, protected by steel armoring in shallow waters and laid bare on the deep seabed where the main threats are earthquakes, [fishing](/fishing) trawlers, and the occasional shark bite (sharks have been observed biting submarine cables, possibly attracted by electrical fields from power-feeding equipment).

Laying submarine cable costs $30,000-$50,000 per kilometer, and a trans-Atlantic cable runs about 6,000 kilometers. Total project costs for major submarine cables routinely exceed $300 million. Companies like SubCom, NEC, and Alcatel Submarine Networks specialize in this work, using purpose-built cable ships that can carry thousands of kilometers of cable and lay it at depths humans could never work at directly.

### Terrestrial Networks

On land, fiber runs through underground conduits, along utility poles, and through buildings. The "last mile" problem—getting fiber from the backbone network to individual homes—remains the biggest deployment challenge. Digging trenches through city streets is expensive and disruptive. Newer techniques like microtrenching (cutting narrow, shallow trenches in existing pavement) and aerial deployment (stringing fiber on existing utility poles) are reducing costs.

In the U.S., federal programs like the Broadband Equity, Access, and Deployment (BEAD) program have allocated $42.5 billion to expand fiber access, particularly in rural areas where the [economics](/economics) of private deployment don't work without subsidies.

### Data Centers

Inside data centers—the physical buildings that house [cloud computing](/cloud-computing) infrastructure—fiber optics connects servers, switches, and storage systems at enormous bandwidths. A large hyperscale data center might contain hundreds of kilometers of fiber optic cable connecting thousands of servers. The shift to 400G and 800G connections within data centers is driving demand for new fiber types and connectors optimized for short-reach, high-speed links.

## Fiber vs. Copper: The Real Comparison

Copper cable (specifically coaxial cable and twisted-pair Ethernet) served telecommunications well for over a century. But fiber optics outperforms copper on nearly every metric.

**Speed**: Fiber residential service typically offers 1-10 Gbps. Cable internet (copper coax) tops out around 1-2 Gbps downstream with current DOCSIS 3.1 technology, and real-world speeds are often much lower due to shared bandwidth.

**Latency**: Light in fiber travels at about 200,000 kilometers per second (roughly two-thirds the speed of light in vacuum). Electrical signals in copper travel at about 200,000 km/s too—but fiber's advantage comes from less [signal processing](/signal-processing) overhead and fewer repeaters needed over distance.

**Distance**: Fiber signals travel 100+ km without amplification. Copper signals degrade significantly after a few hundred meters for high-speed data. This matters enormously for backbone networks.

**Bandwidth capacity**: A single fiber can carry terabits per second. Copper cables max out at a few gigabits. There's simply no comparison for high-capacity applications.

**Electromagnetic interference**: Fiber is immune to EMI because it carries light, not electrical current. Copper cables can pick up interference from nearby power lines, motors, and other electronic equipment. This makes fiber preferred in industrial environments and for security-sensitive applications.

**Weight and size**: Fiber cables are lighter and thinner than copper cables carrying equivalent bandwidth. A fiber cable carrying 100 Tbps weighs far less than the copper infrastructure needed for the same capacity—which matters for submarine cables, aircraft, and data center floor loading.

**Where copper still wins**: Cost for short runs. Simplicity. Power delivery (copper can carry both data and power; fiber can't deliver power to devices). Ethernet copper cables are cheap, easy to terminate, and work fine for the 1-10 Gbps speeds that most end devices actually need. For the run from your wall jack to your laptop, copper is perfectly adequate.

## Applications Beyond Internet

Fiber optics isn't just for internet access. The technology appears in surprising places.

### Medicine

Fiber optic endoscopes allow doctors to see inside the human body without [surgery](/surgery). A bundle of optical fibers carries light into the body and returns an image—through your esophagus, colon, airways, or joints. Modern medical fiber optics can be thinner than a millimeter, reaching into tiny blood vessels.

Fiber lasers are used in surgery for precise cutting with minimal damage to surrounding tissue. Fiber optic sensors monitor physiological parameters like blood oxygen levels (pulse oximeters use fiber optic principles) and intracranial pressure.

### Sensors

Fiber optic sensors measure temperature, pressure, strain, and vibration with extraordinary sensitivity. A technology called distributed acoustic sensing (DAS) turns an ordinary fiber optic cable into thousands of individual vibration sensors along its entire length. This is used to monitor oil and gas pipelines for leaks, detect earthquakes, track vehicle traffic, and even monitor wildlife activity.

The [physics](/physics) is elegant: send a laser pulse down the fiber and analyze the light that scatters back. Vibrations cause tiny changes in the backscattered light—changes that sophisticated signal processing can detect and locate to within meters along cables that may be tens of kilometers long.

### Military and Defense

Military communications rely heavily on fiber optics because of its immunity to electromagnetic interference and difficulty of tapping. Guided missiles use fiber optic links between the launcher and the missile for real-time control. Military aircraft use fiber optic data buses instead of copper wiring to save weight and eliminate electromagnetic vulnerability.

### Lighting and Decoration

Fiber optic lighting delivers light from a remote source through fibers to illuminate hard-to-reach areas. This is useful in museums (light without heat or UV, protecting artifacts), [swimming](/swimming) pools ([electricity](/electricity) kept away from water), and decorative installations. Those fiber optic "starfield" ceilings in home theaters? That's real fiber optics—just used for pretty lights instead of data.

## The History of Fiber Optics

The idea of guiding light isn't new. In the 1840s, Daniel Colladon demonstrated that light could follow a curved path through a stream of water—the same total internal reflection principle that fiber optics uses.

The modern era began in 1966 when Charles Kao and George Hockham at Standard Telecommunications Laboratories published a paper arguing that optical fiber could be used for long-distance communication if glass purity could be improved enough to reduce signal loss below 20 decibels per kilometer. At the time, the best glass fibers lost about 1,000 dB/km—making them useless beyond a few meters.

Corning Glass Works (now Corning Incorporated) achieved the breakthrough in 1970, producing fiber with losses below 20 dB/km using fused silica with precise dopant control. By the late 1970s, losses were down to 0.2 dB/km—close to the theoretical minimum for silica glass. Charles Kao received the 2009 Nobel Prize in Physics for his foundational work.

The first commercial fiber optic communication system was deployed in 1977 by GTE and AT&T in Chicago and Long Beach, respectively. By the 1980s, long-haul fiber networks were being built across continents. The first transatlantic fiber optic cable (TAT-8) went live in 1988, carrying 280 Mbps—a capacity that seemed enormous then and is laughably small now.

The 1990s brought two revolutionary developments. Erbium-doped fiber amplifiers (EDFAs) could amplify optical signals without converting them to electrical signals first—eliminating expensive electronic repeaters and dramatically reducing the cost of long-haul networks. And WDM technology allowed multiple wavelength channels to share a single fiber, multiplying capacity without laying new cable.

These innovations coincided with the internet boom, and fiber deployment exploded. Between 1998 and 2001, companies laid so much fiber that a massive oversupply (the "dark fiber" glut) contributed to the dot-com crash. Much of that fiber sat unused for years—but eventually, traffic caught up. Today, nearly all of it is lit and carrying data.

## Challenges and Limitations

Fiber optics isn't perfect. Several challenges persist.

### The Last Mile

Getting fiber to every home is the biggest practical challenge. It's not a technology problem—it's an economics problem. In dense urban areas, the cost per home is manageable because many customers share the infrastructure investment. In rural areas, [running](/running) fiber miles to reach a handful of homes doesn't pencil out without subsidies.

This is why [computer networking](/computer-networking) approaches like fixed wireless (using 5G or point-to-point radio) and satellite internet (Starlink) are competing with fiber in rural deployments. They're slower than fiber, but dramatically cheaper to deploy in low-density areas.

### Physical Vulnerability

Fiber cables are physically fragile compared to copper. A backhoe digging into a buried cable can sever it, cutting communications for thousands or millions of users. Submarine cables are occasionally damaged by anchors, fishing equipment, or [natural disasters](/natural-disasters). Repairing them requires specialized ships and can take weeks.

Redundancy is the answer—important connections have multiple fiber paths so that cutting one doesn't take down the whole link. But not all connections have adequate redundancy, and cable cuts still cause real disruptions.

### Bending and Handling

Fiber can't be bent too sharply without light escaping the core (violating the total internal reflection condition). Standard single-mode fiber has a minimum bend radius of about 30mm. Newer bend-insensitive fibers (ITU-T G.657) can handle tighter bends, which is important for installations inside buildings and homes where cable must work through tight corners.

Splicing and connecting fiber requires precision equipment and skilled technicians. Fusion splicing—melting two fiber ends together—creates the lowest-loss connections but requires a $3,000-$15,000 fusion splicer. Mechanical splices and pre-polished connectors offer cheaper alternatives with slightly higher loss.

## What's Coming Next

Fiber optic technology continues advancing rapidly.

**Hollow-core fiber** replaces the solid glass core with air (or vacuum), allowing light to travel at nearly the speed of light in vacuum (about 50% faster than in solid glass). This reduces latency—critical for financial trading, real-time [gaming](/gaming), and other latency-sensitive applications. Commercial hollow-core fiber is beginning to ship as of 2025, though costs remain high.

**Space-division multiplexing (SDM)** uses fibers with multiple cores or multiple modes in a single fiber to multiply capacity. A 19-core fiber carries 19 times the data of a single-core fiber in the same physical space. Lab demonstrations have exceeded 10 petabits per second—10,000 terabits—through a single cable.

**Quantum key distribution (QKD)** uses fiber optics to distribute encryption keys using [quantum mechanics](/quantum-mechanics). Any attempt to intercept the key changes the quantum state, alerting the communicating parties. China has deployed a 2,000-kilometer QKD network between Beijing and Shanghai, and several European and Asian networks are operational.

**Photonic computing** aims to perform computation using light rather than electrons. Fiber optics would serve as both interconnect and processing medium. While still largely experimental, photonic processors for [machine learning](/machine-learning) inference are beginning to appear commercially.

**Fiber to the room** is emerging in large buildings, replacing copper Ethernet runs with fiber all the way to individual workstations. As data demands increase and fiber installation costs decrease, the economic crossover point where fiber beats copper for in-building [networking](/networking) is approaching.

## The Invisible Infrastructure

Here's the weird part about fiber optics: it's the most important infrastructure technology most people never think about. Every Google search, every video call, every streaming movie, every financial transaction—virtually all of it travels through fiber optic cables at some point. The entire cloud isn't in the sky. It's in glass strands thinner than hair, buried in the ground and laid across the ocean floor.

When you send a message from New York to London, it doesn't bounce off a satellite. It travels as light pulses through a glass fiber under the Atlantic Ocean, arriving in about 60 milliseconds. The infrastructure that makes the modern internet possible is physical, fragile, and astonishingly well-engineered.

## Key Takeaways

Fiber optics transmits data as pulses of light through glass strands using total internal reflection. It offers speed, bandwidth, distance, and security advantages over copper that make it irreplaceable for backbone telecommunications, submarine cables, and increasingly for direct-to-home connections. The technology has evolved from Kao's 1966 theoretical paper to networks carrying hundreds of terabits per second across oceans. Challenges remain in last-mile deployment economics and physical vulnerability, but ongoing advances in hollow-core fiber, space-division multiplexing, and quantum communication promise to extend fiber's dominance for decades to come.
