---
title: "What Is Satellite Communication?"
slug: satellite-communication
description: "Satellite communication transmits signals via orbiting spacecraft. Learn how it works, orbit types, frequencies, and real-world uses from GPS to broadband."
category: technology
tags: ["satellite", "communication", "telecommunication", "space technology", "global connectivity", "broadcasting"]
heroImage: "/images/articles/satellite-communication-hero.webp"
heroAlt: "Communication satellite orbiting Earth with signal beams connecting to ground stations"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3022
tier: "1"
relatedArticles: ["aerospace-engineering", "amateur-radio", "digital-signal-processing", "cloud-computing", "communication-theory"]
externalSources:
  - title: "NASA Satellite Communication Overview"
    url: "https://www.nasa.gov/smallsat-institute/sst-soa/satellite-communications"
  - title: "ITU Radio Regulations"
    url: "https://www.itu.int/pub/R-REG-RR"
  - title: "ESA Telecommunications"
    url: "https://www.esa.int/Applications/Telecommunications_Integrated_Applications"
  - title: "FCC Satellite Division"
    url: "https://www.fcc.gov/space"
faq:
  - q: "How fast is satellite internet?"
    a: "Satellite internet speeds vary dramatically by system. Traditional geostationary satellite internet offers 25-150 Mbps download speeds with 600+ milliseconds of latency. Newer low-Earth orbit constellations like Starlink deliver 50-250 Mbps with latency around 20-40 milliseconds—much closer to terrestrial broadband. Upload speeds are typically lower, ranging from 3-20 Mbps depending on the service."
  - q: "Why is there a delay in satellite phone calls?"
    a: "The delay comes from the enormous distance signals must travel. A geostationary satellite orbits 35,786 km above Earth. A signal must travel up to the satellite and back down—a round trip of about 71,572 km. At the speed of light, this creates roughly 240 milliseconds of one-way delay, or about half a second for a full round trip. Low-Earth orbit satellites reduce this to 20-40 milliseconds because they're only 550-2,000 km up."
  - q: "How many satellites are orbiting Earth?"
    a: "As of early 2026, over 10,000 active satellites orbit Earth, with SpaceX's Starlink constellation alone accounting for more than 6,000. The total number of tracked objects in orbit—including defunct satellites and debris—exceeds 35,000. The number of active satellites has roughly tripled since 2020, driven primarily by large broadband constellations."
  - q: "Can satellites work in bad weather?"
    a: "Weather affects satellite signals, particularly at higher frequencies. Heavy rain can attenuate (weaken) Ku-band and Ka-band signals significantly—a phenomenon called rain fade. Lower frequencies like C-band are more resistant to weather effects but offer less bandwidth. Satellite operators compensate with techniques like adaptive coding, power boosting during storms, and geographic diversity of ground stations."
  - q: "What happens when a satellite dies?"
    a: "Operators are supposed to move satellites to a 'graveyard orbit' above the geostationary belt or deorbit them into Earth's atmosphere where they burn up. In practice, not all dead satellites get properly disposed of. Defunct satellites become space debris, posing collision risks to active spacecraft. International guidelines now push for satellites in LEO to deorbit within 5 years of end-of-life, though compliance is still imperfect."
---

# What Is Satellite Communication?

Satellite communication is the transmission of information between points on Earth (or between Earth and space) using artificial satellites as relay stations. A ground station sends a signal up to an orbiting satellite, the satellite amplifies it and shifts its frequency, then beams it back down to another location on Earth. This basic relay concept—called a bent pipe—lets you send voice, video, data, and navigation signals to places that cables and cell towers simply cannot reach.

About 60% of the world's international phone calls in the 1990s traveled through satellites. That share has dropped as undersea fiber optic cables took over bulk traffic, but satellites remain irreplaceable for broadcasting, maritime and aviation communication, military operations, rural broadband, and—increasingly—as the backbone of new global internet constellations.

## The Physics of Getting a Signal to Space

Before we talk about satellite types and orbits, it helps to understand what's actually happening when your satellite TV dish picks up a signal from 36,000 kilometers away. It's kind of remarkable when you think about it.

### The Uplink and Downlink

A satellite communication link has two halves. The **uplink** is the signal traveling from a ground station up to the satellite. The **downlink** is the signal coming back down. These use different frequencies to avoid interference—if the satellite transmitted on the same frequency it received, it would just be talking to itself.

The satellite contains a device called a **transponder** that does three things: receives the uplink signal, amplifies it (because it's been weakened by traveling through 36,000 km of space and atmosphere), and shifts it to a different frequency for the downlink. Modern satellites carry dozens or even hundreds of transponders, each handling a separate channel of communication.

### Signal Strength and the Link Budget

Here's where the math gets humbling. A signal weakens with the square of the distance it travels. By the time your satellite TV signal reaches your dish from geostationary orbit, it's been attenuated by roughly 200 dB—that's a factor of 10^20. If the satellite transmitted 100 watts, your dish receives something like 10^-18 watts. That's a billionth of a billionth of a watt.

How does this work at all? Two things: highly directional antennas (both on the satellite and your dish) that concentrate energy into narrow beams, and extremely sensitive receivers that can extract useful information from incredibly weak signals. The engineering required to close a satellite link is genuinely impressive. [Digital signal processing](/digital-signal-processing) techniques like forward error correction add redundancy to the signal so the receiver can reconstruct data even when some of it is lost in transit.

### Frequency Bands

Satellite communication uses several designated frequency bands, each with different characteristics:

**L-band (1-2 GHz)**: Used for mobile satellite phones (Iridium, Thuraya) and GPS. Lower frequencies penetrate weather better and work with small, omnidirectional antennas. But limited bandwidth means lower data rates.

**S-band (2-4 GHz)**: Used for some mobile services and NASA's communications with the Space Station. Similar advantages and limitations to L-band.

**C-band (4-8 GHz)**: The original satellite TV and telephone band. Resistant to rain fade but requires larger dishes (1.8-3.5 meters). Still used extensively in tropical regions where rain is heavy and frequent.

**Ku-band (12-18 GHz)**: The workhorse of direct-to-home satellite TV and VSAT (Very Small Aperture Terminal) data services. Higher frequencies mean more bandwidth and smaller dishes (60-90 cm), but greater vulnerability to rain fade.

**Ka-band (26-40 GHz)**: The high-capacity band used by modern broadband satellites. Enormous bandwidth enables hundreds of spot beams per satellite, each delivering high-speed internet to a specific geographic area. Rain fade is a significant concern.

**V-band (40-75 GHz)**: The frontier. Some next-generation constellations are beginning to use V-band for inter-satellite links and high-throughput ground connections, though atmospheric absorption poses challenges.

## Orbits: Where Satellites Live

The orbit a satellite occupies determines everything about how it performs. Orbit selection is one of the most fundamental design decisions in any satellite system, and the tradeoffs are stark.

### Geostationary Earth Orbit (GEO)

At exactly 35,786 km above the equator, a satellite's orbital period matches Earth's rotation. It appears to hang motionless in the sky. This is incredibly useful—you can point a dish at it once and never move it again. Three GEO satellites, spaced 120 degrees apart, can cover almost the entire Earth's surface (minus the extreme poles).

GEO is where you'll find most TV broadcast satellites, weather satellites like GOES, and traditional communications satellites. The geostationary belt is prime real estate. Orbital positions are allocated by the International Telecommunication Union (ITU) and they're in high demand. Only about 1,800 slots exist (spaced 0.1 degrees apart), and many of the best positions are already taken.

The downside of GEO? That 36,000 km distance creates roughly 600 milliseconds of round-trip latency. For video broadcasting, this doesn't matter—you don't notice a half-second delay watching CNN. For a voice call, it's noticeable but manageable. For online gaming or video conferencing, it's painful. And for high-frequency financial trading, it's completely unacceptable.

### Low Earth Orbit (LEO)

LEO satellites orbit between 200 and 2,000 km altitude. They zip around Earth in about 90-120 minutes, which means they're only visible from any given ground location for a few minutes at a time. To provide continuous coverage, you need a constellation—dozens to thousands of satellites in coordinated orbits.

The advantage is proximity. A satellite at 550 km (Starlink's altitude) creates only 3-4 milliseconds of one-way signal delay. That's comparable to terrestrial fiber. The signal path loss is also dramatically lower, meaning you can use smaller, cheaper ground terminals.

The disadvantage is complexity. You need far more satellites, they move across the sky constantly (requiring ground terminals that track them or electronically steer their beams), and they have shorter lifetimes due to atmospheric drag. LEO satellites at 550 km experience enough drag that they'll deorbit naturally within 5-7 years without orbit-raising maneuvers.

SpaceX's Starlink (6,000+ satellites as of early 2026), OneWeb (~648 satellites), and Amazon's Project Kuiper are building massive LEO constellations for broadband internet. This has created genuine controversy—astronomers complain about light pollution from satellite trains, space debris experts worry about collision cascades, and traditional satellite operators worry about radio frequency interference.

### Medium Earth Orbit (MEO)

MEO is the middle ground—literally. Satellites at 2,000-35,786 km altitude have moderate latency (about 100-150 ms round trip) and require fewer satellites than LEO for global coverage. GPS operates in MEO at about 20,200 km with just 31 active satellites covering the entire planet. The O3b/SES constellation at 8,000 km provides broadband to maritime and remote customers with lower latency than GEO but fewer satellites than LEO.

### Highly Elliptical Orbits (HEO)

Some satellites use elliptical orbits that swing close to Earth at one point (perigee) and far away at another (apogee). Russia's Molniya orbits, for example, spend most of their time high above the Northern Hemisphere—providing coverage to high-latitude regions that GEO satellites can't reach well because the equatorial geometry creates low elevation angles at polar latitudes.

## How a Satellite Is Built

Satellites are among the most precisely engineered objects humans make. They need to operate in a vacuum, endure temperature swings from -150C to +150C, resist radiation, and function perfectly for 15-20 years without maintenance. [Aerospace engineering](/aerospace-engineering) doesn't get much more demanding than this.

### The Bus and Payload

Every satellite has two main sections. The **bus** provides the basics: power (solar panels and batteries), attitude control (reaction wheels and thrusters to keep the satellite pointed correctly), thermal management, propulsion for orbit maintenance, and a command system for ground operators. The **payload** is the communications equipment—transponders, antennas, amplifiers, and processors that actually handle your signals.

Modern GEO communications satellites weigh 3,000-6,500 kg at launch and generate 15-25 kilowatts of electrical power from solar panels spanning 30-40 meters tip to tip. They're the size of a school bus with wings.

LEO constellation satellites are much smaller—Starlink satellites weigh about 260 kg each and are flat-packed for launch, unfolding their single solar panel once in orbit. Their smaller size is essential because you're launching thousands of them.

### Antenna Technology

Satellite antennas have evolved dramatically. Early satellites used broad-beam antennas covering huge areas—an entire ocean, say—with relatively low signal strength everywhere. Modern satellites use **spot beams**: tight, focused beams that concentrate power on smaller areas, providing much higher capacity per beam.

A modern high-throughput satellite might have 200+ spot beams, each covering an area 300-700 km across. The same frequency can be reused across non-adjacent beams (just like cell towers reuse frequencies), multiplying total capacity. A single modern Ka-band satellite can deliver 100+ Gbps of total throughput—more than the entire satellite fleet of the 1990s combined.

Phased array antennas—used on both satellites and ground terminals—electronically steer beams without moving parts. This is critical for LEO constellations where the geometry changes constantly. Starlink ground terminals use flat phased array antennas that track satellites across the sky entirely through electronic beam steering.

## The Major Applications

### Television Broadcasting

Satellite TV was the original killer app. A single GEO satellite can broadcast hundreds of TV channels to an entire continent. Every home with a small dish and a receiver can access the same content. This was revolutionary in the 1990s, bringing TV to rural areas that cable couldn't reach.

Direct Broadcast Satellite (DBS) services like DirecTV, Dish Network, and Sky reach tens of millions of subscribers. The economics are uniquely favorable: the cost of delivering content is independent of the number of viewers. Whether 1 person or 100 million watch, the satellite's cost is the same. That's fundamentally different from streaming services where each viewer consumes bandwidth.

### Global Broadband Internet

This is the current frontier. Traditional GEO satellite internet (HughesNet, Viasat) served rural customers for years but suffered from high latency and limited capacity. LEO constellations are changing the equation dramatically.

Starlink, as of 2026, serves over 4 million subscribers in 75+ countries. Performance varies but typically delivers 50-250 Mbps download and 10-20 Mbps upload with 20-40 ms latency—good enough for video calls, streaming, and even online gaming. It's not fiber, but for someone in rural Montana or a village in sub-Saharan Africa, it's life-changing.

The challenge is capacity. Even with thousands of satellites, each one serves a limited geographic area and a limited number of simultaneous users. Dense urban areas can overwhelm satellite capacity quickly. That's why satellite broadband works best as a complement to terrestrial networks, filling gaps where cables and towers don't reach. [Cloud computing](/cloud-computing) services now route traffic through satellite backhaul for remote data collection and IoT applications.

### Maritime and Aviation

Ships at sea and aircraft over oceans have no access to terrestrial networks. Satellites are their only communication option. Maritime VSAT systems provide broadband to cruise ships, cargo vessels, and offshore platforms. Inmarsat and Iridium provide safety communications required by international maritime law.

Aviation has embraced satellite connectivity aggressively. Most major airlines now offer in-flight Wi-Fi via satellite, with newer systems providing speeds comparable to home broadband. The technical challenge is maintaining a link while the aircraft moves at 900 km/h and switches between satellite beams. [Amateur radio](/amateur-radio) operators were among the first to experiment with amateur satellite communication, building small "CubeSat" satellites for hobby communication.

### Navigation: GPS and Beyond

The Global Positioning System is arguably the most impactful satellite system ever built. Operated by the U.S. Space Force, 31 MEO satellites transmit precise timing signals that your phone or car uses to triangulate your position to within a few meters.

GPS isn't alone anymore. Russia's GLONASS, Europe's Galileo, and China's BeiDou provide independent global navigation. Modern receivers use signals from multiple constellations simultaneously, improving accuracy and reliability. With augmentation systems like WAAS (Wide Area Augmentation System) and Real-Time Kinematic (RTK) corrections, centimeter-level positioning is now routine for surveying, agriculture, and autonomous vehicles.

### Earth Observation and Weather

Weather satellites save lives—that's not an exaggeration. NOAA's GOES satellites in GEO provide the continuous imagery you see in weather forecasts. Polar-orbiting weather satellites map the entire globe twice daily with different instruments. Hurricane tracking, severe storm warnings, and climate monitoring all depend on satellite observation.

Commercial Earth observation satellites capture imagery at resolutions down to 30 cm—enough to identify individual vehicles. This data feeds into agriculture monitoring, urban planning, disaster response, environmental monitoring, and (controversially) intelligence gathering.

### Military and Government

Military satellite communication is a massive and largely hidden industry. The U.S. Department of Defense operates its own satellite constellations (MILSTAR, AEHF, WGS) for secure, jam-resistant communications. Protected military satellite links use techniques like frequency hopping, spread spectrum, and nuclear-hardened components to function during conflicts.

Intelligence satellites—the details of which are mostly classified—provide signals intelligence (intercepting communications) and imagery intelligence. The relationship between military and commercial satellite capabilities continues to blur, with militaries increasingly using commercial satellite services alongside dedicated systems.

## The Space Debris Problem

Here's the uncomfortable truth about the satellite boom: every satellite we launch is a potential piece of space junk.

The Kessler Syndrome, proposed by NASA scientist Donald Kessler in 1978, describes a nightmare scenario: enough debris accumulates in orbit that collisions generate more debris, which causes more collisions, in a cascading chain reaction that could render entire orbital bands unusable. We're not there yet, but the trajectory is concerning.

As of 2026, over 35,000 objects larger than 10 cm are tracked in orbit. Millions of smaller pieces—paint flecks, bolt fragments, bits of insulation—orbit at 7-8 km/s. At that speed, a 1 cm fragment carries the kinetic energy of a hand grenade. In 2009, an active Iridium satellite and a defunct Russian Cosmos satellite collided, generating over 2,000 trackable debris fragments that remain in orbit today.

The mega-constellations amplify this risk. SpaceX argues that Starlink satellites are low enough that they'll deorbit naturally within 5 years if they fail. But "within 5 years" still means years of potential collision risk. The space sustainability community is pushing for active debris removal missions, better tracking systems, and mandatory deorbiting requirements. [Communication theory](/communication-theory) research is also exploring how to maintain network reliability as the orbital environment becomes more congested.

## Satellite Economics

Building and launching satellites is breathtakingly expensive—but the economics have shifted dramatically in the last decade.

A traditional GEO communications satellite costs $150-400 million to build and $50-100 million to launch. Its useful life is 15-20 years, during which it generates revenue by leasing transponder capacity to TV broadcasters, telecom operators, and internet service providers. At scale, these are profitable businesses—SES, Intelsat, and Eutelsat have operated as publicly traded companies for years.

LEO constellation economics are entirely different. Individual Starlink satellites cost an estimated $250,000-$500,000 each (manufacturing costs have dropped as production scaled up), but you need thousands of them. SpaceX's vertically integrated model—designing the satellites, building them in-house, and launching them on their own rockets—gives them cost advantages that competitors struggle to match.

The cost of launch has plummeted. SpaceX's Falcon 9, with its reusable first stage, reduced per-kilogram launch costs by roughly 80% compared to pre-SpaceX pricing. The Starship vehicle, when fully operational, promises another order-of-magnitude reduction. This is making previously uneconomical satellite missions viable.

## Interference and Coordination

The radio spectrum is finite, and satellites share it with terrestrial services. This creates coordination challenges that get more complex every year.

The ITU allocates spectrum bands to different services and coordinates between satellite operators to prevent interference. When two GEO satellites sit close together in the same orbital slot, their ground stations need to distinguish between them using polarization, frequency separation, or precise antenna pointing.

5G terrestrial networks created particular tension. The C-band frequencies that 5G uses are adjacent to frequencies used by satellite services, and early deployments caused interference with some aircraft altimeters—a serious safety concern that required equipment upgrades and buffer zones around airports.

## What's Coming Next

Satellite communication is in the middle of its biggest transformation since the original geosynchronous satellites of the 1960s.

**Inter-satellite laser links** allow satellites to relay data to each other without touching the ground. Starlink satellites already use this, enabling transcontinental data routing that can actually beat fiber optic latency over long distances (because light travels faster in vacuum than in glass). This is attracting interest from financial trading firms where milliseconds translate to millions.

**Direct-to-smartphone connectivity** is emerging through partnerships between satellite operators and mobile carriers. AST SpaceMobile and T-Mobile, for example, are testing satellites that connect directly to standard smartphones without any modification. If this works at scale, it means cell coverage everywhere on Earth—no dead zones, ever.

**Software-defined satellites** can reconfigure their frequency plans, coverage areas, and capacity allocation on the fly via software updates. Traditional satellites are built with fixed configurations that can't change for their 15-year lifespan. Flexible satellites adapt to changing markets and demands.

**Optical ground stations** using laser links between satellites and ground terminals promise higher bandwidth and lower probability of interception than radio frequency links. Atmospheric turbulence and clouds are challenges, but adaptive optics and site diversity are making ground-based laser links increasingly practical.

## Should You Care About Satellite Communication?

You already depend on satellites more than you realize. Your phone's GPS, your weather forecast, the live news broadcast from a remote location, the credit card transaction processed on a ship at sea—satellites make all of these possible.

For most people in well-connected urban areas, satellite communication works invisibly in the background. But if you live in a rural area, travel to remote locations, or simply want to understand how the world stays connected, satellite communication is worth understanding.

The current wave of LEO broadband constellations is genuinely changing the connectivity equation for hundreds of millions of people who live beyond the reach of cables and towers. That's not hype—it's happening right now, and it's one of the more meaningful technological shifts of this decade.

The infrastructure orbiting above your head right now—thousands of active satellites, each a small miracle of engineering and physics—represents one of humanity's most impressive achievements. We've turned empty space into a communications network that connects every corner of the planet. The fact that this seems ordinary says more about how quickly we take extraordinary things for granted than about the technology itself.
