---
title: "What Is Cartography?"
slug: cartography
description: "Cartography is the science and art of making maps, from ancient hand-drawn charts to modern GIS and satellite-based digital mapping systems. Discover the key..."
category: science
tags: ["cartography", "maps", "geography", "gis", "mapping", "geographic information", "spatial data"]
heroImage: "/images/articles/cartography-hero.webp"
heroAlt: "Editorial photograph representing the concept of cartography"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 8
wordCount: 2249
tier: "2"
relatedArticles: ["algorithms", "machine-learning", "agriculture", "silk-road"]
externalSources:
  - title: "International Cartographic Association"
    url: "https://icaci.org/"
  - title: "USGS - Map Projections"
    url: "https://pubs.usgs.gov/gip/70047422/report.pdf"
  - title: "Library of Congress - Geography and Map Division"
    url: "https://www.loc.gov/maps/"
  - title: "History of Cartography Project - University of Chicago"
    url: "https://press.uchicago.edu/books/HOC/index.html"
  - title: "OpenStreetMap Foundation"
    url: "https://www.openstreetmap.org/"
faq:
  - q: "Is cartography still a career?"
    a: "Yes, though the title has evolved. Modern cartographers often work as GIS analysts, geospatial engineers, or data visualization specialists. Organizations like NOAA, USGS, the military, tech companies (Google, Apple, Mapbox), and urban planning firms all employ people with cartographic skills. The Bureau of Labor Statistics projects steady growth for cartography and related fields."
  - q: "What is the biggest problem with making maps?"
    a: "The fundamental challenge is representing the curved surface of the Earth on a flat map. This requires a map projection, and every projection distorts something — area, shape, distance, or direction. There is no perfect flat map of the Earth. The choice of projection depends on the map's purpose."
  - q: "What software do cartographers use?"
    a: "ArcGIS Pro (commercial, industry standard), QGIS (free and open-source), Mapbox Studio (web-based), and various programming libraries like Leaflet.js, D3.js, and Python's GeoPandas. For basic maps, even Google My Maps works. Professional cartography increasingly involves coding alongside traditional design."
  - q: "How accurate are Google Maps?"
    a: "Google Maps is generally accurate to within a few meters for roads and buildings in well-mapped areas. In remote regions, accuracy drops significantly. Google combines satellite imagery, street-level photography, GPS data, and user corrections. However, Google Maps makes deliberate design choices about what to show and how, which involves the same cartographic biases that have existed for centuries."
---

# What Is Cartography?

Cartography is the science, art, and technology of creating maps — visual representations of spatial relationships that communicate geographic information about the Earth's surface, other celestial bodies, or imagined worlds. From clay tablets in ancient Babylon to real-time satellite imagery on your phone, cartography has been one of humanity's most essential tools for understanding and moving through the world.

## Maps Are Arguments — Not Just Pictures

Here's something that surprises most people: every map is an argument. A map doesn't show "the world as it is." It shows a deliberate selection of information, organized and styled to communicate a specific message.

A subway map ignores geography almost entirely — distances and directions are distorted to make route planning easy. A topographic map ignores buildings and roads to emphasize terrain. A political map draws borders that are often disputed. A road map prioritizes highways over footpaths.

The cartographer decides what to include, what to leave out, how to style features, and — most critically — what projection to use. These decisions shape how viewers understand the territory being mapped. As geographer Mark Monmonier wrote, "Not only is it easy to lie with maps, it's essential."

This doesn't mean maps are unreliable. It means they're tools with perspectives, and understanding cartography means understanding those perspectives.

## A 5,000-Year History

### The First Maps

The oldest known map is a clay tablet from Mesopotamia, dated to roughly 2300 BC, showing a river valley with surrounding mountains. It's crude by modern standards, but it demonstrates the fundamental cartographic impulse: making the invisible (spatial relationships over distances too large to see at once) visible.

Ancient Egyptians surveyed and mapped agricultural land along the Nile — flooding wiped out boundary markers annually, so accurate mapping was economically essential. The [agriculture](/agriculture) of the ancient world depended on these early cartographic efforts.

Polynesian stick charts — frameworks of palm ribs and cowrie shells representing ocean swell patterns and island positions — are a radically different mapping tradition. They encoded navigational knowledge in a physical format that allowed sailors to cross thousands of miles of open Pacific. No compass, no written coordinates — just an understanding of wave patterns materialized in sticks and shells.

### Greek Contributions

The Greeks formalized cartography as a mathematical science. Eratosthenes calculated the Earth's circumference around 240 BC — and got it roughly correct (within about 2% of the modern value, though scholars debate the exact unit of measurement he used). He divided the world into climate zones and created coordinates using lines of latitude.

Ptolemy's *Geography* (circa 150 AD) was a milestone. He described map projection — how to represent the curved Earth on a flat surface — and provided coordinates for roughly 8,000 locations. His work influenced cartography for over 1,400 years, despite containing significant errors (he underestimated the Earth's circumference, which later led Columbus to think Asia was closer than it actually was).

### Medieval Maps

European medieval maps were often more theological than geographic. The "T-O" maps placed Jerusalem at the center, with the known world divided into three continents separated by water in a T shape. These weren't navigation tools — they were expressions of worldview.

Meanwhile, Islamic cartographers were producing remarkably accurate maps. Al-Idrisi created a world map for King Roger II of Sicily in 1154 that was the most accurate of its era, drawing on Greek, Islamic, and Norman geographic knowledge.

Chinese cartography developed independently, with quantitative mapping techniques appearing as early as the 3rd century AD. Pei Xiu, sometimes called the "father of Chinese cartography," established six principles of mapmaking in 267 AD, including consistent scale and angular measurement.

### The Age of Exploration

The 15th through 17th centuries transformed cartography. European exploration generated a flood of new geographic data. Portolan charts — detailed navigational maps of coastlines with compass rose networks — guided sailors across the Mediterranean and eventually the Atlantic.

Gerardus Mercator's 1569 world map introduced the projection that bears his name. The Mercator projection preserves angles and straight-line compass bearings (crucial for navigation), but massively distorts area at high latitudes. Greenland appears the size of Africa on a Mercator map, when Africa is actually 14 times larger.

The [Silk Road](/silk-road) trade routes were mapped with increasing accuracy during this period, as European, Islamic, and Asian cartographic traditions began to overlap and exchange methods.

The Mercator projection remains controversial because it visually minimizes equatorial regions (where most developing nations are located) while inflating northern regions (where colonial powers were). Whether Mercator intended this political effect is debatable — he designed the projection for navigation, not political propaganda — but the effect has shaped how billions of people visualize the world.

### Systematic National Surveys

The 18th and 19th centuries saw governments commission systematic surveys of their territories. France's Cassini map (1789) was the first topographic map of an entire country, based on triangulation surveys spanning decades. Britain's Ordnance Survey began in 1791 and produced maps still used (in updated form) today.

These surveys required solving hard problems: measuring distances and elevations accurately over rough terrain, establishing consistent coordinate systems, and — always — choosing how to project the curved Earth onto flat paper.

## The Projection Problem — Why All Maps Lie

This is cartography's fundamental headache. The Earth is a sphere (well, an oblate spheroid). Paper and screens are flat. You cannot flatten a sphere without distorting it. Try peeling an orange and pressing the rind flat — it tears, stretches, and crumples. Map projections are mathematical solutions to this problem, and every solution involves tradeoffs.

### What Gets Distorted

Four properties can be distorted: **area** (relative sizes of regions), **shape** (local angles and forms), **distance** (accurate spacing between points), and **direction** (compass bearings). No flat map preserves all four simultaneously. This is mathematically proven, not a limitation of technology.

**Conformal projections** (like Mercator) preserve shape and angles but distort area. Good for navigation and small-scale maps where shape matters.

**Equal-area projections** (like Mollweide or Gall-Peters) preserve area but distort shape. Good for thematic maps comparing regions — population density, climate, resource distribution.

**Equidistant projections** preserve distances from one or two points. The azimuthal equidistant projection centered on the North Pole is used for the United Nations emblem.

**Compromise projections** (like Robinson or Winkel Tripel) don't perfectly preserve anything but minimize overall distortion. The Robinson projection, used by the National Geographic Society from 1988 to 1998, looks "right" to most people despite being technically imprecise.

### Political Implications

Projection choice is political whether or not cartographers intend it. The Peters projection (an equal-area projection) was promoted in the 1970s as a corrective to Mercator's inflation of the Global North. The debate became heated — professional cartographers criticized Peters' projection as visually ugly and his claims as overblown, while development advocates praised the more proportionate representation of tropical regions.

Today, most world maps in schools use either Robinson or Winkel Tripel projections as compromises. But Google Maps uses Web Mercator — a simplified Mercator projection — which means billions of people see the world through a lens that inflates polar regions. Google added a globe view option, but the default flat view still shapes perception.

## Modern Cartography — Digital Everything

### Geographic [Information Systems](/information-systems) (GIS)

GIS transformed cartography from an art studio practice to a computational discipline. A GIS stores geographic data as layers — one layer for roads, one for buildings, one for elevation, one for population density — that can be combined, analyzed, and visualized.

Want to find the best location for a new hospital? A GIS can overlay population density, existing hospital locations, road networks, flood zones, and land prices. This kind of multi-factor spatial analysis was impractical before computers.

ArcGIS (by Esri) and QGIS (open-source) are the dominant platforms. Both support sophisticated analysis, but they've also made basic mapmaking accessible to non-specialists. A journalist, urban planner, or epidemiologist can create publication-quality maps without traditional cartographic training.

GIS processing relies heavily on spatial [algorithms](/algorithms) — computational procedures for tasks like routing, spatial joins, interpolation, and terrain analysis.

### Remote Sensing

Satellite imagery has revolutionized cartography. Landsat (launched 1972, still operating) provides continuous coverage of the entire Earth's surface. Sentinel satellites from the European Space Agency offer even higher resolution. Commercial providers like Maxar deliver imagery with 30-centimeter resolution — enough to distinguish individual cars.

This data enables near-real-time mapping of deforestation, urban growth, glacier retreat, agricultural conditions, and [natural disasters](/natural-disasters). Before satellite imagery, updating maps of remote areas required expensive ground surveys or aerial photography. Now, algorithms process satellite data automatically, detecting changes and updating maps.

### GPS and Location Services

The Global Positioning System — 31 satellites maintained by the U.S. Space Force — enables any device with a GPS receiver to determine its position to within a few meters. This technology transformed cartography from a map-production discipline to a real-time location-awareness system.

Your phone knows where you are, where you're going, and (through traffic data aggregated from other phones) how long it'll take. This is cartography — the science of spatial information — even though no paper map is involved.

### Crowdsourced Mapping

OpenStreetMap (OSM), launched in 2004, is a free, editable map of the entire world, built by over 10 million volunteer contributors. It's the Wikipedia of maps — community-maintained, surprisingly accurate, and used by organizations from Facebook to humanitarian groups.

During natural disasters, OSM's Humanitarian OpenStreetMap Team (HOT) mobilizes thousands of volunteers to map affected areas, often producing better maps than governments or aid agencies have available. After the 2010 Haiti earthquake, OSM volunteers created the most detailed map of Port-au-Prince within days.

### Machine Learning in Cartography

[Machine learning](/machine-learning) is automating tasks that once required human cartographers. Algorithms can now extract building footprints from satellite imagery, classify land use, detect road networks, and even generate map labels automatically.

Facebook (now Meta) used [neural networks](/neural-networks) to map every building in Africa — over 600 million structures — from satellite imagery. This data improved population estimates, [infrastructure planning](/infrastructure-planning), and disaster response in areas that had never been systematically mapped.

## How to Read a Map (Most People Can't, Really)

### Scale

Scale tells you the relationship between map distance and real-world distance. A scale of 1:50,000 means 1 centimeter on the map equals 50,000 centimeters (500 meters) in reality. Larger scale (1:10,000) means more detail. Smaller scale (1:1,000,000) means less detail but more area covered.

The terminology is confusing because "large scale" means a big fraction (1/10,000 is bigger than 1/1,000,000). A "large-scale map" shows a small area in great detail. A "small-scale map" shows a large area with less detail. This trips up almost everyone.

### Contour Lines

On topographic maps, contour lines connect points of equal elevation. Close contour lines mean steep terrain. Wide-spaced lines mean gentle slopes. A closed circle of contour lines is a hilltop. Contour lines that form V-shapes pointing uphill indicate valleys.

Learning to read contour lines lets you visualize terrain in three dimensions from a two-dimensional map. Military personnel, hikers, and geologists rely on this skill.

### Symbology and Legend

Maps use standardized symbols — blue lines for water, green for vegetation, black dots for cities, dashed lines for trails. But symbology varies between mapping traditions and agencies. Always check the legend.

Color choices carry meaning beyond convention. Choropleth maps (where regions are shaded based on data values) use color gradients to represent quantitative differences. A well-designed choropleth makes patterns immediately visible. A poorly designed one misleads.

## The Ethics of Mapping

### Who Gets Mapped?

Historically, maps reflected the priorities of those with power. Colonial maps documented resources for extraction. Military maps prioritized strategic terrain. Commercial maps showed customer-dense areas.

Underserved communities are often undermapped — fewer street names, less detail, inaccurate boundaries. This creates a feedback loop: poor mapping leads to poor services, which leads to continued marginalization. Initiatives like Missing Maps aim to address this by mapping vulnerable areas before crises hit.

### Surveillance and Privacy

Real-time mapping of movement — through phone GPS, license plate readers, and facial recognition — raises serious privacy concerns. When a mapping platform knows where you are at every moment, that data becomes a surveillance tool.

Google's Location History, Uber's rider data, fitness apps' route tracking — these are all cartographic products, and their privacy implications are still being debated in courts and legislatures worldwide.

### Contested Territories

Maps of disputed borders are politically charged. How you draw the line between India and Pakistan in Kashmir, between Israel and Palestine, between China and Taiwan — these cartographic choices carry diplomatic consequences. Google Maps actually shows different borders depending on where you access it from, reflecting local [government](/government) requirements.

## The Future of Maps

Cartography is moving from static documents to living, real-time systems. Digital twins — detailed 3D models of cities updated in real time — are being built for [urban planning](/urban-planning), autonomous vehicle navigation, and emergency response. Indoor mapping extends cartography inside buildings — airports, hospitals, shopping centers.

Augmented reality will overlay map information directly on your visual field. Instead of looking down at a map, you'll see navigation arrows floating in your actual view of the street. Apple's AR navigation, Google's Live View, and similar products are early versions of this.

The fundamental challenge remains what it's always been: representing reality clearly enough to be useful without pretending that the representation is reality itself. Every map is a simplification. Understanding what's been simplified — and why — is the essence of cartographic literacy.
