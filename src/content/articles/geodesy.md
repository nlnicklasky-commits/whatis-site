---
title: "What Is Geodesy?"
slug: geodesy
description: "Geodesy is the science of measuring and understanding Earth's shape, gravity field, and orientation in space — the foundation of GPS, mapping, and surveying."
category: science
tags: ["geodesy", "earth science", "gps", "mapping", "gravity", "geophysics", "spatial data"]
heroImage: "/images/articles/geodesy-hero.webp"
heroAlt: "Editorial photograph representing the concept of geodesy"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 8
wordCount: 2246
tier: "2"
relatedArticles: ["astronomy", "cartography", "climatology", "computational-physics", "data-analysis"]
externalSources:
  - title: "National Geodetic Survey — NOAA"
    url: "https://geodesy.noaa.gov/"
  - title: "International Association of Geodesy"
    url: "https://www.iag-aig.org/"
  - title: "Geodesy — NASA"
    url: "https://science.nasa.gov/earth-science/geodesy/"
  - title: "European Space Agency — Geodesy"
    url: "https://www.esa.int/Applications/Observing_the_Earth/Geodesy"
  - title: "IERS — International Earth Rotation and Reference Systems Service"
    url: "https://www.iers.org/"
faq:
  - q: "Is Earth a perfect sphere?"
    a: "No. Earth is an oblate spheroid — slightly flattened at the poles and bulging at the equator due to its rotation. The equatorial radius is about 21 kilometers larger than the polar radius. But even 'oblate spheroid' is an approximation. Earth's actual shape (the geoid) has bumps and dips caused by uneven mass distribution, deviating from a perfect ellipsoid by up to 100 meters."
  - q: "How does geodesy relate to GPS?"
    a: "GPS is built on a geodetic reference frame — a precisely defined coordinate system that specifies where every point on Earth is in three-dimensional space. Without geodesy establishing this framework, GPS coordinates would be meaningless. Geodesists also monitor and correct for effects like crustal motion, Earth orientation changes, and gravitational variations that affect GPS accuracy."
  - q: "Why does sea level vary from place to place?"
    a: "Mean sea level varies by up to 200 meters globally relative to a reference ellipsoid because the ocean surface follows the geoid — Earth's gravitational equipotential surface. Areas with more mass beneath them (dense rock, mountain roots) have stronger gravity that pulls water higher, while areas with less subsurface mass have lower sea level. Ocean currents and temperature also create variations."
  - q: "How accurately can geodesy measure the Earth?"
    a: "Modern geodetic techniques can measure distances between continents to within 1-2 millimeters, track sea level changes of less than 1 millimeter per year, and detect crustal movements of fractions of a millimeter. Satellite missions like GRACE measure changes in Earth's gravity field sensitive enough to detect groundwater depletion in individual aquifer systems."
---

# What Is Geodesy?

Geodesy is the science of accurately measuring and understanding the Earth's geometric shape, orientation in space, and gravitational field. It provides the reference frameworks and coordinate systems that underpin GPS [navigation](/navigation), satellite positioning, [cartography](/cartography), land [surveying](/surveying), and the monitoring of Earth's active systems including sea level rise, tectonic motion, and ice sheet changes.

## Earth Isn't What You Think It Is

Most people imagine Earth as a sphere. It's a reasonable first guess — from space, it looks pretty round. But geodesy reveals that Earth's shape is surprisingly complicated, and those complications matter enormously for anything requiring precise positioning.

First complication: Earth isn't a sphere. It's an oblate spheroid — flattened at the poles and bulging at the equator. The equatorial radius (6,378.1 kilometers) is about 21 kilometers longer than the polar radius (6,356.8 kilometers). That's a 0.3% difference. Doesn't sound like much, but ignoring it would introduce positioning errors of kilometers.

Second complication: even the oblate spheroid is an approximation. Earth's actual gravitational shape — what geodesists call the geoid — is lumpy. Dense rock formations pull the gravitational field slightly stronger in some areas, while less dense regions create weaker spots. If you could fill the entire Earth with a connected ocean ([tunneling](/tunneling) through continents), the water surface would follow the geoid — and it would have bumps and valleys of up to 100 meters relative to the ellipsoid.

The geoid surface is highest over places like Iceland and New Guinea (about 80 meters above the ellipsoid) and lowest south of India (about 106 meters below). These variations reflect density differences deep in the mantle.

Third complication: Earth's shape keeps changing. Tectonic plates move. Ice sheets grow and shrink. Tides deform the solid Earth by tens of centimeters twice daily. Post-glacial rebound is still lifting Scandinavia and Canada — rising by up to 1 centimeter per year — as the land recovers from the weight of ice sheets that melted 10,000 years ago.

Geodesy tracks all of this. It has to, because modern positioning demands millimeter accuracy.

## A Brief History of Measuring the Earth

Humans have been trying to measure the Earth for over 2,000 years.

### Eratosthenes and the First Measurement

Around 240 BCE, Eratosthenes — a Greek scholar in Alexandria — calculated Earth's circumference with remarkable accuracy. He knew that at noon on the summer solstice, the Sun was directly overhead in Syene (modern Aswan, Egypt), casting no shadow. In Alexandria, about 800 kilometers north, a vertical stick cast a shadow indicating the Sun was about 7.2 degrees from vertical.

Since 7.2 degrees is 1/50 of a full circle, and the distance between the cities was about 5,000 stadia, Earth's circumference was approximately 250,000 stadia. Depending on which definition of "stadion" he used, this translates to roughly 39,000-46,000 kilometers. The actual value is about 40,075 kilometers at the equator. Not bad for a guy with a stick and some [geometry](/geometry).

### Triangulation Networks

By the 17th and 18th centuries, geodesy became serious business — partly because navigating the expanding colonial empires required accurate maps. Triangulation — measuring the angles of connected triangles across landscapes — allowed surveyors to determine positions over large areas from relatively few baseline measurements.

France's Cassini family spent four generations (1683-1793) creating the first detailed, scientifically-based map of an entire country using triangulation. In India, the Great Trigonometric Survey (started 1802) measured the entire subcontinent, including the height of Mount Everest — first calculated in 1856 at 29,002 feet (remarkably close to the currently accepted 29,032 feet).

These triangulation networks were impressive achievements, but they were slow, expensive, and limited by line-of-sight between survey stations.

### The Satellite Revolution

Everything changed with satellites. When Sputnik launched in 1957, geodesists quickly realized they could use satellite orbits to measure Earth's shape and gravity field with unprecedented accuracy. A satellite's orbit is determined by Earth's gravity field — track the orbit precisely, and you can infer the gravity field.

The Transit satellite navigation system (1960s) gave the first satellite-based positioning. GPS (fully operational 1995) revolutionized geodesy — and everyday life. Today, satellite geodesy achieves millimeter-level positioning accuracy across global distances.

## How Modern Geodesy Works

Modern geodesy relies on four primary space-based techniques, each with different strengths.

### GNSS (Global Navigation Satellite Systems)

GPS is the most famous, but it's one of several GNSS constellations — Russia's GLONASS, Europe's Galileo, China's BeiDou, and regional systems from Japan and India. These systems work by trilateration: measuring the travel time of radio signals from multiple satellites to determine your three-dimensional position.

For geodetic applications, civilian GPS alone isn't precise enough. Geodesists use dual-frequency receivers, long observation times, and sophisticated processing that accounts for atmospheric delays, satellite clock errors, and Earth orientation effects. Permanent GNSS stations around the world continuously track satellite signals, producing daily position solutions accurate to about 1 millimeter horizontally and 3 millimeters vertically.

These stations form the backbone of the International Terrestrial Reference Frame (ITRF) — the global coordinate system against which everything else is measured.

### Satellite Laser Ranging (SLR)

SLR stations fire short laser pulses at satellites equipped with retroreflectors — corner cubes that bounce the light directly back. By measuring the round-trip travel time (with picosecond precision), scientists determine the satellite's distance to about 1-2 millimeters.

SLR provides an independent check on GNSS results and is particularly important for determining the center of mass of the Earth (the origin of the reference frame) and validating satellite orbits.

### Very Long Baseline Interferometry (VLBI)

VLBI uses radio telescopes on different continents to simultaneously observe distant quasars — incredibly distant, point-like radio sources. By precisely timing the difference in signal arrival at each telescope, scientists determine the baseline distance between them with sub-millimeter accuracy across thousands of kilometers.

VLBI is the primary technique for measuring Earth's orientation in space — including the rate of rotation, polar motion (the wobble of Earth's rotation axis), and precession. Without VLBI, we wouldn't know that Earth's rotation rate fluctuates by milliseconds per day due to atmospheric and oceanic effects, or that the rotation axis wanders in a circle about 10 meters wide over roughly 14 months (the Chandler wobble).

### Satellite Gravity Missions

Gravity satellites have transformed our understanding of Earth's mass distribution.

**GRACE** (Gravity Recovery and Climate Experiment, 2002-2017) and its successor **GRACE-FO** (2018-present) consist of two satellites flying 220 kilometers apart and continuously measuring the distance between them with micrometer precision. As they fly over areas of slightly stronger or weaker gravity, the lead satellite speeds up or slows down relative to the trailing satellite. These tiny distance changes reveal the gravity field — and, crucially, how it changes over time.

GRACE has measured ice sheet mass loss in Greenland and Antarctica (about 280 billion tons per year combined), groundwater depletion in the Central Valley of California and the Middle East, and post-glacial rebound rates in Scandinavia.

**GOCE** (Gravity field and steady-state Ocean Circulation Explorer, 2009-2013) measured the static gravity field with unprecedented resolution, refining the geoid to better than 2 centimeters at 100-kilometer spatial resolution.

## Reference Frames and Datums

Here's something most people never think about: coordinates are meaningless without a reference system. Saying a point is at 40.7128 degrees North, 74.0060 degrees West (New York City) requires that everyone agrees on what those numbers mean — where the equator is, where the prime meridian is, and what shape they're measured on.

### The Ellipsoid

An ellipsoid is the mathematical surface that best approximates Earth's shape. The current standard — WGS84 (World Geodetic System 1984), used by GPS — defines an ellipsoid with specific dimensions, centered at Earth's center of mass, with its axes aligned to Earth's rotation axis and the Greenwich meridian.

But WGS84 is a global best fit. In any given region, a locally-fitted ellipsoid might match the actual ground surface more closely. That's why many countries historically used their own geodetic datums — local reference surfaces optimized for their territory. Converting between datums can shift positions by hundreds of meters, which is why getting the datum right matters for [cartography](/cartography) and surveying.

### The Geoid and Heights

Height is trickier than latitude and longitude. GPS gives you height above the ellipsoid (a mathematical surface). But the height you actually care about — the one that determines which way water flows — is height above the geoid (the gravitational equipotential surface that approximates mean sea level).

The difference between ellipsoidal height and geoidal height — called the geoid undulation — varies from about -106 meters to +85 meters globally. If you use GPS height directly without correcting for the geoid, your "elevation" could be off by tens of meters. That matters for flood mapping, [engineering](/engineering), and any application where "downhill" needs to be correct.

## Geodesy and Sea Level

Sea level monitoring is one of geodesy's most critical modern applications. Sea level rise threatens hundreds of millions of people in coastal areas worldwide.

Tide gauges have measured sea level relative to the land since the 18th century. But they mix actual sea level change with vertical land motion — land subsidence makes sea level appear to rise faster, and post-glacial uplift makes it appear to rise slower.

Satellite altimetry changed the game. Missions like TOPEX/Poseidon (1992), Jason-1/2/3, and Sentinel-6 measure the distance from satellite to ocean surface using radar, achieving precision of about 2-3 centimeters per measurement. Combined with precise satellite orbit determination (thanks to geodesy), these missions reveal that global mean sea level has been rising at about 3.4 millimeters per year since 1993 — accelerating from the 20th-century rate of about 1.5 millimeters per year.

Geodesy separates this total rise into components: thermal expansion of warming water (about 40%), melting glaciers and ice caps (about 25%), Greenland ice sheet loss (about 20%), and Antarctic ice sheet loss (about 15%). Each component is measured independently using satellite gravity (GRACE/GRACE-FO), altimetry, and ground-based observations.

## Geodesy and Tectonic Motion

The same GNSS stations that define the reference frame also track tectonic plate motion. And the numbers are striking.

North America moves away from Europe at about 25 millimeters per year. Australia migrates northeast at about 70 millimeters per year — making it the fastest-moving continent. India plows into Asia at about 40 millimeters per year, building the Himalayas. The Pacific plate slides past North America along the San Andreas fault at about 46 millimeters per year.

Geodesy doesn't just measure average rates. It detects the elastic strain accumulating on locked faults, the slow slip events that release some of that strain without earthquakes, and the sudden displacements during earthquakes. The 2011 Tohoku earthquake in Japan moved the coast up to 5 meters eastward and shifted Earth's rotation axis by about 17 centimeters. Geodetic instruments measured all of this in real time.

This geodetic monitoring directly supports earthquake hazard assessment. By measuring where strain is accumulating along fault lines, scientists can identify segments most likely to produce future earthquakes — even if they can't predict exactly when.

## Practical Applications You Use Every Day

Geodesy might sound abstract, but it underlies technologies you depend on daily.

**Navigation**: Every GPS fix on your phone relies on a geodetic reference frame. The [algorithms](/algorithms) that convert satellite signals into your location use geodetic parameters — Earth's shape, gravity model, satellite orbits — computed by geodesists.

**[Construction](/construction) and engineering**: Buildings, bridges, tunnels, and roads are surveyed using geodetic coordinates. Large structures — like the 50-kilometer Large Hadron Collider — require geodetic precision to align components within fractions of a millimeter over vast distances.

**Precision [agriculture](/agriculture)**: GPS-guided tractors plant seeds, apply fertilizer, and harvest crops with centimeter accuracy. This reduces waste, increases yields, and is enabled by geodetic reference networks that provide the needed accuracy via real-time kinematic (RTK) corrections.

**[Aviation](/aviation)**: Aircraft navigation, instrument landing systems, and air traffic [management](/management) all depend on geodetic coordinate systems. The vertical accuracy is particularly critical — knowing your altitude precisely is the difference between a smooth landing and a catastrophe.

**Legal boundaries**: Property boundaries, national borders, and maritime territorial limits are defined by coordinates in geodetic reference frames. Shifts in the reference frame or improvements in measurement accuracy can — and occasionally do — create legal complications.

## The Future of Geodesy

Geodesy continues advancing, driven by ever-more-precise measurement technology and growing societal demands.

**Next-generation GNSS** systems promise centimeter-level accuracy directly from satellites, without ground-based corrections. This would democratize precision positioning for [data analysis](/data-analysis), autonomous vehicles, drone operations, and augmented reality.

**Quantum sensors** — atom interferometer gravimeters and atomic clocks — promise to measure gravity and time with revolutionary precision. Gravity gradients measured by quantum instruments could detect underground voids, water table changes, and magma movements with sensitivity impossible today.

**Optical clocks** are so precise they can detect the gravitational redshift from a height difference of just 1 centimeter — effectively using Einstein's [general relativity](/general-relativity) to measure elevation. This "chronometric leveling" could eventually replace traditional surveying for height determination.

**Satellite constellations** with thousands of small satellites may provide continuous, high-resolution monitoring of Earth's gravity field, surface deformation, and atmosphere — creating a real-time geodetic monitoring system for the entire planet.

Geodesy sits at the foundation of how we measure, map, and monitor our planet. It's invisible to most people — you don't think about reference frames when you open Google Maps. But every coordinate, every elevation, every satellite orbit, and every sea level measurement rests on geodetic science. It's the quiet infrastructure that makes our positioned, connected, precisely-mapped world possible.
