---
title: "What Is Mapmaking?"
slug: mapmaking
description: "Mapmaking (cartography) is the art and science of creating maps, from ancient hand-drawn charts to modern GIS and satellite-powered digital mapping systems."
category: technology
tags: ["mapmaking", "cartography", "maps", "geography", "gis", "surveying", "spatial data"]
heroImage: "/images/articles/mapmaking-hero.webp"
heroAlt: "Editorial photograph representing the concept of mapmaking"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 12
wordCount: 3176
tier: "1"
relatedArticles: ["cartography", "geography", "geographic-information-systems-gis", "geodesy", "geomatics"]
externalSources:
  - title: "International Cartographic Association"
    url: "https://icaci.org/"
  - title: "USGS — Map Projections"
    url: "https://www.usgs.gov/publications/map-projections-working-manual"
  - title: "Library of Congress — Map Collections"
    url: "https://www.loc.gov/maps/"
  - title: "British Cartographic Society"
    url: "https://www.cartography.org.uk/"
faq:
  - q: "What is the difference between mapmaking and cartography?"
    a: "They're essentially the same thing. Cartography is the formal, academic term for the science and art of making maps. Mapmaking is the plain-English equivalent. Both cover the full range of map creation — from surveying and data collection to design, projection selection, and final production."
  - q: "How accurate are modern digital maps?"
    a: "Modern digital maps can be extraordinarily accurate. GPS-corrected satellite imagery achieves sub-meter accuracy. Professional survey-grade equipment can hit centimeter precision. However, accuracy varies by area — dense urban zones and remote regions may have less precise data. Consumer maps like Google Maps are generally accurate within a few meters for well-mapped areas."
  - q: "Can anyone make a map today?"
    a: "Yes. Tools like QGIS (free), Google My Maps, and Mapbox make it possible for anyone to create maps without formal training. OpenStreetMap is an entire community-driven mapping project where volunteers create and maintain map data. That said, making a good map — one that communicates clearly and represents data accurately — still requires understanding cartographic principles."
  - q: "Why do all flat maps distort the Earth?"
    a: "Because the Earth is roughly spherical, and you can't flatten a sphere onto a plane without distortion. This is a mathematical certainty, proven by Carl Friedrich Gauss. Every map projection makes tradeoffs — preserving area but distorting shape, preserving angles but distorting size, or splitting the difference. The Mercator projection, for instance, makes Greenland look as large as Africa when it's actually 14 times smaller."
  - q: "What is GIS and how does it relate to mapmaking?"
    a: "GIS (Geographic Information Systems) is software for capturing, storing, analyzing, and visualizing spatial data. It's the primary tool modern mapmakers use. While traditional cartography focused on creating a single visual map, GIS lets you layer multiple datasets, run spatial analyses, and generate many different map views from the same underlying data. Think of GIS as a database that understands location."
---

# What Is Mapmaking?

Mapmaking — formally called [cartography](/cartography) — is the science, art, and technology of creating maps. It's the process of representing spatial relationships on a flat surface (or increasingly, on a digital screen), transforming the messy, three-dimensional reality of Earth's surface into something humans can read, understand, and use to make decisions.

Maps are so woven into daily life that you probably used one today without thinking about it. Checked your phone for directions? That's a map. Looked at a weather forecast? Map. Scrolled through a real estate listing? Map. Each of those required someone — or some system — to collect spatial data, choose what to include and exclude, pick a visual representation, and handle the unavoidable distortions that come from projecting a sphere onto a flat surface.

## The Problem Every Mapmaker Faces

Here's the fundamental challenge of mapmaking, and it's one that hasn't changed in thousands of years: the Earth is round-ish, and maps are flat. You cannot perfectly represent a curved surface on a flat plane. Period. This isn't a technology limitation — it's a mathematical impossibility, proven by Gauss in the early 19th century.

Every flat map distorts something. The only question is what you choose to distort and by how much.

### Map Projections: The Unavoidable Compromise

A map projection is a mathematical formula that converts points on a sphere (latitude and longitude) to points on a flat surface (x and y coordinates). There are hundreds of projections, each making different tradeoffs.

**Conformal projections** preserve local angles and shapes but distort area. The Mercator projection is the most famous example — it's great for navigation because straight lines represent constant compass bearings, but it makes high-latitude regions look absurdly oversized. Greenland appears roughly the same size as Africa on a Mercator map, but Africa is actually 14 times larger.

**Equal-area projections** preserve area but distort shapes. The Mollweide projection shows every region at its correct relative size, but countries near the edges look squished and warped.

**Compromise projections** don't perfectly preserve anything but keep all distortions moderate. The Robinson projection, used by National Geographic for decades, looks "right" to most people even though it's technically wrong in every measurable way.

**Azimuthal projections** preserve directions from a central point. They're used for polar maps and for aviation charts showing great-circle routes.

This is where mapmaking intersects with [geometry](/geometry) and mathematics. Choosing a projection is a technical decision with real consequences. A humanitarian organization mapping refugee movements needs an equal-area projection — showing distorted sizes could mislead resource allocation. A marine navigator needs a conformal projection for accurate bearing readings. A general reference atlas might use a compromise.

### Scale: What Gets Left Out

Every map has a scale — the ratio between distances on the map and distances in reality. A 1:100,000 scale map means 1 centimeter on the map represents 1 kilometer on the ground.

But scale isn't just about distances. It determines what you can show. At 1:100,000, you can show major roads and city outlines. At 1:1,000,000, you can only show major highways and general landforms. At 1:10,000, you can show individual buildings.

This means every map is an act of selection. The mapmaker decides what's important enough to include and what gets left out. That decision — generalization, in cartographic jargon — is one of the most consequential parts of mapmaking. A map that includes everything is unusable. A map that excludes the wrong things is misleading.

## A Brief History of Mapping the World

Humans have been making maps for a very long time. The oldest known map is a clay tablet from Babylon, dated around 600 BCE, showing the world as a flat disc surrounded by water. It's wrong about almost everything, but it represents a genuine attempt to understand spatial relationships.

### Ancient and Classical Mapping

The Greeks made serious advances. Eratosthenes calculated Earth's circumference around 240 BCE with remarkable accuracy — he was off by roughly 2%, using nothing but geometry, shadows, and the distance between two cities. Ptolemy's *Geographia* (circa 150 CE) introduced the coordinate system of latitude and longitude that we still use today.

But Greek maps were limited by the fundamental problem of data collection. You can't map places you've never been, and most of the world was unknown to Mediterranean civilizations.

### Medieval Maps

European medieval maps — the famous mappae mundi — weren't really trying to be geographically accurate. They were theological documents, showing Jerusalem at the center of a symbolic world. They communicated spiritual meaning, not spatial relationships.

Meanwhile, Islamic cartographers like al-Idrisi (1154) were producing remarkably accurate maps based on systematic data collection from travelers and merchants. Chinese cartographers developed their own sophisticated traditions, including gridded maps for military planning.

### The Age of Exploration

The 15th through 17th centuries transformed mapmaking because exploration provided data. Portuguese navigators mapped African coastlines. Columbus (accidentally) mapped Caribbean islands. Magellan's expedition proved the Earth was round by sailing around it.

Mercator's famous 1569 projection was a practical tool — it let sailors plot straight-line courses on a chart. Its distortions were well understood and accepted as the price for navigational utility.

This era also saw the emergence of national mapping programs. France's Cassini family produced the first map of an entire nation based on triangulation surveys — a project that took four generations and 150 years.

### Scientific Surveying

The 18th and 19th centuries introduced trigonometric surveying — using carefully measured baselines and angles to establish precise geographic positions. Britain's Ordnance Survey, India's Great Trigonometric Survey, and similar programs worldwide created the foundational data for accurate national maps.

These surveys were extraordinary feats of [engineering](/engineering) and endurance. The Great Trigonometric Survey of India took decades, mapped the Himalayas, and accurately measured the height of Mount Everest — all using theodolites carried by teams of surveyors through some of the most difficult terrain on Earth.

This work connects to [geodesy](/geodesy), the science of measuring Earth's shape and size, which provides the mathematical framework that mapmaking depends on.

## Modern Mapmaking Technologies

The tools of mapmaking have changed almost beyond recognition in the past fifty years, but the fundamental challenges remain the same.

### Satellite Remote Sensing

Earth observation satellites capture imagery of the entire planet's surface repeatedly. Landsat, first launched in 1972, provides continuous coverage at 30-meter resolution. Commercial satellites now achieve sub-meter resolution — you can see individual cars from orbit.

Different satellite sensors capture different information. Visible-light imagery shows what the surface looks like. Infrared sensors detect vegetation health, urban heat islands, and geological features invisible to the eye. Radar sensors map terrain even through clouds and at night.

This data is the raw material for modern mapmaking. But raw satellite imagery isn't a map — it needs to be georeferenced (aligned to a coordinate system), classified (what's forest? what's urban? what's water?), and symbolized (how should each feature be displayed?).

### GPS and GNSS

The Global Positioning System — and its international equivalents (GLONASS, Galileo, BeiDou) — made precise location determination accessible to everyone. Survey-grade GNSS receivers achieve centimeter accuracy. Consumer smartphones hit 3-5 meter accuracy.

This technology didn't just improve professional surveying. It enabled entirely new forms of mapmaking. Crowdsourced mapping projects like OpenStreetMap rely on volunteers with GPS-equipped smartphones collecting data as they move through the world. Ride-sharing apps create real-time traffic maps from the GPS traces of millions of drivers.

### Geographic Information Systems (GIS)

[GIS](/geographic-information-systems-gis) is the technology that arguably transformed mapmaking more than anything else. A GIS is essentially a database that understands geography — it stores, manages, analyzes, and visualizes spatial data.

Before GIS, making a map was a production process. You created a physical artifact — drawn, printed, published. Changing the map meant creating a new one. With GIS, the map is just one possible view of underlying data. You can change what's displayed, how it's symbolized, what scale is shown, and what analysis is applied — all without recreating anything from scratch.

GIS also enables spatial analysis that wasn't practical with paper maps. Buffer analysis (what's within 500 meters of this river?), overlay analysis (where do flood zones intersect with residential areas?), network analysis (what's the fastest route between these points?) — these operations transform mapping from description to analysis.

Modern GIS connects to [data visualization](/data-visualization), [data science](/data-science), and [computer science](/computer-science) in fundamental ways. The spatial algorithms underlying GIS operations are sophisticated computer science — spatial indexing, computational geometry, graph theory applied to road networks.

### LiDAR and Photogrammetry

LiDAR (Light Detection and Ranging) fires laser pulses at the ground and measures the reflected light to create precise 3D models of terrain and structures. Airborne LiDAR surveys can penetrate forest canopy to map the ground underneath — archaeologists have used it to discover ancient cities hidden under jungle.

Photogrammetry extracts 3D information from overlapping photographs. Drone-based photogrammetry has become a standard tool for mapping construction sites, agricultural fields, and disaster areas. You fly a drone over an area, it captures hundreds of overlapping photos, and software stitches them into a detailed 3D model and orthophoto map.

Both technologies produce point clouds — millions or billions of individual 3D points that represent surfaces. Processing these massive datasets requires serious [algorithms](/algorithms) and computational power.

## The Art Side of Mapmaking

Mapmaking isn't purely technical. A map that's geographically accurate but visually confusing fails its purpose. Design decisions profoundly affect how maps communicate.

### Visual Hierarchy

The most important information should visually dominate. Major roads should be thicker or more saturated than minor roads. City names should be larger than village names. The visual hierarchy guides the reader's eye to what matters, and it's harder to get right than most people think.

This is where mapmaking becomes design. The principles overlap with graphic design and [data visualization](/data-visualization) — using color, size, position, and typography to communicate meaning clearly.

### Color in Maps

Color choices in maps carry meaning. Blue means water — universally. Green suggests vegetation. Contour lines show elevation. But beyond these conventions, color decisions involve perception science.

Can colorblind users distinguish your land-use categories? (About 8% of men have some form of color vision deficiency.) Does your color scheme work when printed in grayscale? Do your color gradients create a clear visual progression from low to high values?

Mapmakers use perceptually uniform color scales — where equal numeric differences produce equal visual differences — because the human eye perceives color changes nonlinearly. A color scheme that looks evenly spaced in RGB values might look lumpy to actual human eyes.

### Typography

Map labels are deceptively challenging. Every label needs to be readable, positioned near its feature without overlapping other labels, oriented to suggest the extent of the feature (a river name might curve along the river), and styled to indicate the type of feature (water names in italic, city names in roman).

Automatic label placement is an NP-hard computational problem — meaning there's no efficient algorithm guaranteed to find the optimal solution. Practical label placement algorithms use heuristics, and skilled cartographers still manually adjust labels for important maps.

### Generalization

When you zoom out on a digital map, the map doesn't just shrink — it simplifies. Roads that were visible at high zoom disappear. City outlines are replaced by dots. Coastlines lose detail.

This generalization must preserve the essential character of features while reducing complexity. A simplified coastline should still look like that coastline. A generalized road network should still show the overall connectivity pattern.

Algorithmic generalization is an active research area. The Douglas-Peucker algorithm (1973) simplifies lines by removing points that deviate less than a threshold from the simplified line. More sophisticated algorithms consider context — you can't simplify a road into a river, or merge two distinct islands into one.

## Map Types and Their Purposes

Different maps serve radically different purposes, and mapmaking expertise lies partly in choosing the right type.

### Topographic Maps

Topographic maps show terrain shape using contour lines — lines connecting points of equal elevation. Reading contour lines is a skill: closely spaced lines mean steep slopes, widely spaced lines mean gentle terrain, closed circles indicate hilltops.

The USGS has been producing topographic maps of the United States since 1879. These maps are used by hikers, land managers, engineers, and the military. They show natural features (rivers, forests, elevation) and human features (roads, buildings, boundaries).

### Thematic Maps

Thematic maps display specific data overlaid on a geographic base. Election results maps, disease prevalence maps, climate maps, [ecology](/ecology) habitat maps — these all show thematic data distributed across space.

**Choropleth maps** color regions according to a data value — darker shading for higher unemployment, for instance. They're ubiquitous but easily misleading. A large, sparsely populated county might visually dominate a small, densely populated city, distorting the reader's perception of the data.

**Proportional symbol maps** use differently sized symbols to represent quantities at specific locations. Larger circles for more earthquake events, for example. These avoid the area-perception problem of choropleths but create overlap problems in dense areas.

**Heat maps** use continuous color gradients to show intensity patterns. They're great for showing density and concentration but can obscure individual data points.

### Navigation Charts

Nautical and aeronautical charts are specialized maps designed for safe navigation. They prioritize the information navigators need — depths, hazards, radio frequencies, airspace boundaries — and use standardized symbols that professionals worldwide can read.

These charts connect to [aviation](/aviation) and maritime operations. An error on a navigation chart can cost lives, so their production follows strict quality assurance procedures.

### Web Maps and Interactive Mapping

Modern web maps — Google Maps, OpenStreetMap, Mapbox — have become the most widely used maps in history. Billions of people use them daily.

Web maps introduced technical innovations that changed mapmaking fundamentally:

- **Tile-based rendering**: The map is divided into small square tiles at multiple zoom levels, loaded on demand. This makes fast, smooth zooming and panning possible.
- **Multi-scale design**: Different content appears at different zoom levels, automatically generalized.
- **Real-time data integration**: Traffic conditions, transit arrivals, weather, and other active information overlay on static base maps.
- **User interaction**: Users can search, measure, route, and annotate maps directly.

Building web maps involves [computer graphics](/computer-graphics), [algorithms](/algorithms), and [computer science](/computer-science) as much as traditional cartographic knowledge.

## Crowdsourced and Citizen Mapping

OpenStreetMap (OSM) is one of the most remarkable mapping projects ever undertaken. Since 2004, volunteers have collaboratively mapped the entire world — roads, buildings, land use, points of interest — creating a free, open-source dataset that rivals commercial offerings.

In many developing countries, OSM is the most detailed map available. After natural disasters, volunteer mappers coordinate through the Humanitarian OpenStreetMap Team (HOT) to rapidly map affected areas from satellite imagery, producing maps that aid organizations use for response coordination.

This democratization of mapping is genuinely new. For most of history, mapmaking was the province of governments and large institutions. Now anyone with an internet connection can contribute to the world's map.

## Ethical Dimensions of Mapmaking

Maps are never neutral. Every map is an argument — about what matters, how the world is organized, and whose perspective counts.

### The effect of Naming

Who gets to name places? Colonial mapmakers renamed indigenous places worldwide, erasing millennia of history with a stroke of ink. The reclamation of indigenous place names is an ongoing process that intersects mapmaking with cultural politics.

### What Gets Mapped and What Doesn't

Mapping a neighborhood makes it visible to planners, businesses, and services. Unmapped areas are invisible — they don't appear in routing algorithms, delivery zones, or emergency response plans. The "blank spots" on digital maps are disproportionately in poor and marginalized communities.

### Borders and Territorial Disputes

Maps make political claims. How you draw a disputed border — Kashmir, the South China Sea, Western Sahara — takes a political position. International mapping companies maintain different versions of their maps showing different borders depending on where the viewer is located. Google Maps shows Kashmir's border differently in India, Pakistan, and the United States.

### Surveillance and Privacy

Detailed maps enable surveillance. Street-level imagery captures people and vehicles. Location data from mapping apps reveals personal movements. The same mapping technology that helps you find a coffee shop allows governments and corporations to track populations.

These ethical considerations are part of modern [geography](/geography) and geographic information science — fields that grapple with the social implications of spatial data.

## The Future of Mapmaking

Several trends are reshaping how maps get made and used.

**Real-time mapping** is becoming standard. Maps that update continuously from sensor networks, social media, and IoT devices show the world as it is right now, not as it was when a surveyor last visited.

**3D and immersive maps** are moving beyond novelty. Google Earth, Cesium, and similar platforms render the entire planet in 3D. Augmented reality applications overlay map data onto the physical world through your phone camera.

**Autonomous vehicle mapping** drives demand for extraordinarily precise, constantly updated maps. Self-driving cars need centimeter-accurate maps showing lane markings, sign positions, and curb locations — updated in near real-time as road conditions change.

**AI-powered map creation** uses [machine learning](/machine-learning) to automatically extract features from satellite imagery — identifying buildings, roads, water bodies, and land use without human interpretation. This dramatically accelerates mapping of under-mapped areas.

**Indoor mapping** is an emerging frontier. GPS doesn't work well inside buildings, so indoor positioning uses WiFi, Bluetooth beacons, and other technologies. Mapping complex indoor environments — airports, hospitals, shopping centers — is increasingly important.

## Why Mapmaking Still Matters

In an age where your phone provides turn-by-turn directions and satellite imagery of anywhere on Earth, you might wonder whether the craft of mapmaking still matters. It does — more than ever, actually.

The explosion of spatial data means someone needs to organize, analyze, and communicate geographic information effectively. Raw satellite imagery isn't useful to a city planner. A database of millions of GPS traces isn't useful to a transit agency. Maps — thoughtfully designed, carefully generalized, clearly symbolized — transform data into understanding.

And the fundamental challenges haven't changed. You still can't flatten a sphere without distortion. You still can't show everything at every scale. You still have to decide what matters and what doesn't. You still need to communicate spatial relationships clearly to people who may have no training in reading maps.

Those are cartographic problems, and they require cartographic expertise. The tools are digital now instead of pen-and-ink, but the thinking is the same as it was when Ptolemy laid down the first coordinate grid nearly two thousand years ago.

Mapmaking remains one of the oldest intellectual pursuits that's still urgently relevant. Every time you open a map app on your phone, you're benefiting from millennia of accumulated knowledge about how to represent our world on a flat surface. And every time a mapmaker makes a new choice about what to show, how to show it, and what to leave out, they're shaping how you see the world.

That's a lot of power packed into something most people never think about.
