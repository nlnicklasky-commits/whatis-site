---
title: "What Is Soldering?"
slug: soldering
description: "Soldering is the process of joining metals using a filler alloy melted at low temperatures. Learn about techniques, tools, flux, and common applications."
category: technology
tags: ["soldering", "electronics", "metalwork", "circuit board", "welding", "manufacturing"]
heroImage: "/images/articles/soldering.webp"
heroAlt: "Editorial photograph representing the concept of soldering"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 11
wordCount: 3053
tier: "1"
relatedArticles: ["circuit-design", "electronics", "computer-hardware", "battery-technology", "chemical-engineering"]
externalSources:
  - title: "IPC — Association Connecting Electronics Industries"
    url: "https://www.ipc.org/"
  - title: "NASA Workmanship Standards for Soldering"
    url: "https://workmanship.nasa.gov/lib/insp/2%20books/links/sections/407%20Soldering.html"
  - title: "OSHA Safety and Health Topics: Soldering"
    url: "https://www.osha.gov/soldering"
  - title: "MIT OpenCourseWare: Electronics Manufacturing"
    url: "https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2004/"
faq:
  - q: "What is the difference between soldering and welding?"
    a: "Soldering joins metals using a filler alloy (solder) that melts below 450 degrees Celsius, without melting the base metals. Welding melts the base metals themselves, fusing them together at much higher temperatures — often above 1,500 degrees Celsius. Brazing sits in between, using filler metals that melt above 450 degrees Celsius but still below the base metal's melting point."
  - q: "Is lead-free solder harder to work with?"
    a: "Yes. Lead-free solders (typically tin-silver-copper alloys) have higher melting points — around 217 to 227 degrees Celsius compared to 183 degrees Celsius for traditional tin-lead. They also wet surfaces less readily and can produce duller-looking joints. However, they are required by regulations like RoHS for most commercial electronics sold in the EU and many other regions."
  - q: "Do you need flux when soldering?"
    a: "Almost always. Flux removes oxide layers from metal surfaces so solder can bond properly. Without flux, solder tends to ball up rather than flow across the joint. Most solder wire for electronics has a rosin flux core built in, so you may not need to apply flux separately for simple work. But for surface-mount components or rework, external flux is usually necessary."
  - q: "Can you solder aluminum?"
    a: "You can, but it's significantly harder than soldering copper or brass. Aluminum forms a stubborn oxide layer almost instantly when exposed to air, and that oxide has a melting point of over 2,000 degrees Celsius. Special fluxes and solders designed for aluminum are available, but many professionals prefer mechanical fastening or welding for aluminum joints."
  - q: "What temperature should a soldering iron be set to?"
    a: "For standard tin-lead solder (60/40 or 63/37), a tip temperature of 315 to 370 degrees Celsius works well. For lead-free solder, bump that up to 370 to 400 degrees Celsius. The key is using enough heat to flow solder quickly without dwelling on components long enough to damage them — typically 2 to 5 seconds per joint."
---

# What Is Soldering?

Soldering is a metal-joining process where a filler alloy — called solder — is melted and flowed into the gap between two metal surfaces, bonding them together without melting the base metals themselves. The solder melts at temperatures below 450 degrees Celsius (842 degrees Fahrenheit), which separates soldering from brazing and welding, both of which operate at higher temperatures.

If you've ever looked at the underside of a [circuit board](/circuit-design), those tiny silver dots holding every component in place are solder joints. Billions of them are created every single day in factories around the world. But soldering isn't just an [electronics](/electronics) thing — plumbers, jewelers, [stained glass](/stained-glass) artists, and HVAC technicians all rely on it too.

## How Soldering Actually Works

The basic idea is deceptively simple. You heat two metal surfaces, touch solder to the joint, and the solder melts and flows into the gap by capillary action. When it cools, it forms a metallurgical bond — not just a mechanical grip, but an actual intermetallic connection at the atomic level.

But "simple" and "easy" aren't the same thing. Getting a reliable solder joint depends on controlling several variables simultaneously.

### The Role of Wetting

Wetting is the term for how well molten solder spreads across a surface. Good wetting means the solder flows smoothly and makes full contact with both surfaces being joined. Poor wetting means the solder balls up like water on a waxed car — and a balled-up joint is a weak joint.

Three things determine wetting quality. First, the surfaces need to be clean — free of oxides, oils, and contamination. Second, the surfaces need to be hot enough that the solder stays liquid long enough to flow. Third, flux needs to be present to chemically reduce any oxide layer that forms during heating.

Get all three right, and solder flows almost magically. Miss any one, and you're in trouble.

### Flux: The Unsung Hero

Flux is a chemical cleaning agent that does two critical jobs. It dissolves the metal oxide layer on your workpieces, exposing clean metal for the solder to bond with. And it prevents new oxides from forming while the joint is being heated.

Here's why that matters so much. Copper — the most commonly soldered metal — forms an oxide layer within seconds of being exposed to air. That oxide doesn't accept solder well at all. Without flux, you'd be trying to solder to a surface that's essentially rejecting the solder.

There are several flux types:

**Rosin flux** is the classic choice for electronics work. It's derived from pine tree resin and is relatively mild. Most solder wire for electronics has a rosin flux core running through the center, so flux is automatically applied as you feed solder into the joint.

**Water-soluble flux** is more aggressive, leaving residues that must be cleaned after soldering (they're corrosive if left on the board). But the stronger cleaning action makes it useful for heavily oxidized surfaces.

**No-clean flux** is designed to leave benign residues that don't need removal. Most modern [electronics](/computer-hardware) manufacturing uses no-clean flux to skip the post-soldering wash step.

## The Tools of the Trade

You don't need much to start soldering, but quality matters more than quantity here.

### Soldering Irons

A soldering iron is basically a heated metal tip attached to a handle. Simple ones plug directly into the wall and heat to a fixed temperature. Better ones — called soldering stations — let you set and regulate the tip temperature precisely.

For electronics work, you want a station with adjustable temperature control, a tip temperature range of at least 200 to 450 degrees Celsius, and interchangeable tips. A 50- to 70-watt station handles most hobby and repair work. Professional rework stations go higher, sometimes with hot air capability for surface-mount components.

Tip shape matters. A chisel tip transfers heat efficiently for through-hole components. A conical point works better for fine-pitch surface-mount work. A bevel tip splits the difference. Most soldering stations come with a chisel tip by default, and that's a good starting point.

### Solder Itself

Solder comes in wire form for hand soldering and paste form for surface-mount manufacturing. The wire contains a flux core — you can sometimes see the flux channel if you cut a piece of solder wire crosswise.

The two main categories:

**Leaded solder** (typically 60% tin / 40% lead, or the eutectic 63/37 mix) melts at 183 degrees Celsius and flows beautifully. It's been the standard for decades. The 63/37 eutectic composition is especially popular because it transitions directly from solid to liquid with no "pasty" intermediate phase. The catch? Lead is toxic. Regulations like the EU's RoHS directive (Restriction of Hazardous Substances, enacted in 2006) ban lead solder in most commercial products.

**Lead-free solder** replaces lead with other metals, most commonly silver and copper. The dominant alloy is SAC305 — 96.5% tin, 3% silver, 0.5% copper — which melts at about 217 degrees Celsius. It's harder to work with than leaded solder: higher melting point, worse wetting, and joints often look duller and grainier. But it's what regulations require for products sold in most markets.

For hobby work and prototyping in the US, leaded solder is still legal and widely preferred for its ease of use. Just wash your hands after, don't eat at your workbench, and work in a ventilated area.

### Other Essential Equipment

**Flux** in a syringe or pen for applying extra flux to tricky joints. Even with flux-core solder, external flux helps with rework and surface-mount soldering.

**Solder wick** (desoldering braid) is copper braid that soaks up molten solder by capillary action. You press it against an unwanted solder blob, heat it, and the braid wicks the solder away. Essential for fixing bridges and reworking joints.

**A solder sucker** (desoldering pump) is a spring-loaded vacuum that sucks up molten solder. Less precise than wick but faster for clearing through-holes.

**Tip tinner** is a mixture of flux and solder powder that cleans and re-tins oxidized soldering iron tips. A well-maintained tip transfers heat far more efficiently than a blackened, oxidized one.

**A brass sponge or damp cellulose sponge** for wiping the tip between joints. The brass sponge is generally better because it cleans without cooling the tip down.

## Hand Soldering Technique

The actual process takes practice to master, but the theory is straightforward.

### Through-Hole Soldering

This is soldering components with wire leads that poke through holes in a [circuit board](/circuit-design). It's the easiest type to learn.

1. Insert the component through the board. Bend the leads slightly to hold it in place.
2. Heat both the pad and the lead simultaneously with the soldering iron tip. This is critical — you're heating the *work*, not the solder.
3. After about 1 to 2 seconds, touch the solder wire to the junction of the pad and lead (not to the iron tip). The solder should melt and flow around the joint.
4. Feed enough solder to form a small, shiny, concave fillet around the lead.
5. Remove the solder wire, then remove the iron. The whole process takes 2 to 5 seconds per joint.

A good solder joint looks like a tiny, shiny volcano — concave sides, smooth surface, and the lead clearly visible poking through the top. A bad joint might look dull, blobby, cracked, or have a cold solder appearance (grainy texture from insufficient heat).

### Surface-Mount Soldering

Surface-mount technology (SMT) places components directly on pads on the board surface rather than through holes. The components are smaller — sometimes absurdly so. An 0201-size resistor measures 0.6 by 0.3 millimeters. That's smaller than a grain of sand.

Hand soldering surface-mount parts requires steadier hands and finer tools, but the basic principle is the same. Apply flux to the pads. Tack one end of the component with a tiny bit of solder to hold it in place. Then solder the other end properly. Go back and reflow the tacked end. For multi-lead ICs, the "drag soldering" technique — dragging a loaded iron tip along a row of pins — works surprisingly well with practice and plenty of flux.

For production, surface-mount soldering is done by machines. Components are placed by pick-and-place robots, and the entire board passes through a reflow oven that melts the solder paste simultaneously on every joint. Modern SMT lines can place 100,000 or more components per hour.

## Industrial Soldering Methods

Hand soldering is fine for prototypes and repairs, but manufacturing demands speed. Several automated methods exist.

### Wave Soldering

Used primarily for through-hole components on production boards. The populated PCB passes over a standing wave of molten solder. The wave contacts the bottom of the board, filling all the through-holes and forming joints in a single pass. Wave soldering machines can process hundreds of boards per hour.

The process requires careful control of solder temperature (typically 245 to 260 degrees Celsius for lead-free), conveyor speed, wave height, and board angle. Too much heat damages components. Too little produces cold joints. The board usually passes through a fluxer and preheater before reaching the wave.

### Reflow Soldering

The standard for surface-mount assembly. Solder paste — a mixture of tiny solder particles suspended in flux — is applied to pads using a stencil. Components are placed on the paste by pick-and-place machines. The loaded board then passes through a reflow oven with carefully controlled temperature zones.

A typical reflow profile has four phases: preheat (ramp from room temperature to about 150 degrees Celsius), thermal soak (hold around 150 to 200 degrees Celsius to activate flux), reflow (spike to 230 to 250 degrees Celsius to melt the solder), and cooling (controlled ramp-down to solidify joints). The entire profile might take 4 to 6 minutes.

### Selective Soldering

A hybrid approach for boards that have both surface-mount and through-hole components. After reflow soldering handles the SMT parts, selective soldering uses a small, programmable nozzle to apply solder only to specific through-hole joints. It's more precise than wave soldering and doesn't require masking off SMT components.

## The Metallurgy Behind the Bond

When solder meets a copper surface at soldering temperature, something interesting happens at the interface. Tin atoms from the solder diffuse into the copper, and copper atoms diffuse into the solder. They form intermetallic compounds — primarily Cu6Sn5 and Cu3Sn — at the boundary.

This intermetallic layer is what makes a solder joint a true metallurgical bond rather than just a blob of metal sitting on a surface. The layer is typically 1 to 3 micrometers thick after initial soldering. It grows slowly over time, especially at elevated temperatures, which is one reason electronics eventually fail after years of use.

Too much intermetallic growth is bad — the compounds are brittle. This is why you don't want to overheat joints or reflow them more times than necessary. Each reflow cycle grows the intermetallic layer further.

Different solder alloys form different intermetallics with different properties. This is a whole field of study in [materials science](/chemistry), and alloy selection for specific applications gets surprisingly technical. Aerospace and military specifications, for instance, call out exact alloy compositions, flux types, and inspection criteria.

## Common Soldering Defects

Even experienced solderers produce bad joints sometimes. Knowing what the common defects look like — and what causes them — saves enormous debugging time.

**Cold joints** happen when the solder didn't fully melt or the workpiece wasn't hot enough. They look dull, grainy, and may have visible crystalline texture. The fix: reheat the joint and add a bit of fresh solder and flux.

**Solder bridges** occur when solder connects two adjacent pads or pins that shouldn't be connected. Common on fine-pitch IC packages. Fix with solder wick or careful application of a clean iron tip.

**Insufficient solder** leaves a thin, concave joint without enough filler. It might work initially but is mechanically weak. Add more solder.

**Excess solder** creates a large dome that may hide bridges or voids underneath. For through-hole, the fillet should be concave, not convex. Remove excess with wick.

**Tombstoning** is a surface-mount defect where one end of a small component lifts off the pad during reflow, standing up like a tombstone. It's caused by uneven heating or unequal solder paste deposits on the two pads.

**Voids** are air pockets trapped inside the solder joint. Small voids (under 25% of the pad area) are generally acceptable. Large voids weaken the joint and reduce thermal conductivity. They're common in lead-free solder and can be reduced by optimizing the reflow profile.

## Safety Considerations

Soldering involves hot metals, chemical fumes, and — depending on the alloy — toxic materials. A few precautions go a long way.

**Ventilation** is essential. Flux fumes irritate the respiratory system, and some flux types release formaldehyde when heated. At minimum, work with a window open. Better: use a fume extractor with an activated carbon filter positioned near your work.

**Lead hygiene** matters if you're using leaded solder. Lead doesn't evaporate at soldering temperatures (its boiling point is 1,749 degrees Celsius), so you won't inhale lead vapor from a soldering iron. But lead dust can accumulate on surfaces, and you can ingest it through hand-to-mouth contact. Wash your hands after soldering. Don't eat or drink at your workstation.

**Burn prevention** is mostly common sense — a soldering iron tip sits at 300+ degrees Celsius. Use a proper stand with a holder. Never set a hot iron down on a bench surface. Be aware that solder splatter can occasionally flick tiny droplets of molten metal.

**Eye protection** is wise, especially when cutting component leads (they fly) or using aggressive flux that can splatter.

## Soldering Beyond Electronics

While electronics assembly is the most visible application, soldering has deep roots in other trades.

### [Plumbing](/plumbing)

Copper pipe joints in residential plumbing are soldered using a propane torch and lead-free solder (lead solder was banned for potable water systems in the US by the Safe Drinking Water Act amendments of 1986). The plumber cleans the pipe and fitting, applies flux, assembles the joint, and heats the fitting with a torch until solder drawn into the gap by capillary action. A single joint takes about 30 seconds.

### Jewelry

Jewelers call it "silver soldering" or sometimes just "soldering" even though it technically meets the definition of brazing (the filler metals melt above 450 degrees Celsius). They use precious-metal solders in different grades — easy, medium, hard — that melt at progressively higher temperatures, allowing multiple joints on the same piece without melting previous ones.

### Stained Glass

Stained glass windows are assembled by soldering lead came (H-shaped lead channels) at every joint where pieces meet. The classic lead-tin solder is still used here since the joints aren't in contact with food or drinking water. The soldering technique is unique — the iron is run along the joint rather than touching a single point.

### Sheet Metal

HVAC ductwork, roofing, and decorative metalwork all use soldering for joining thin metal sheets. Tinplate, galvanized steel, and copper sheet can all be soldered with appropriate flux and alloys. The joints aren't as strong as welded ones but are perfectly adequate for non-structural applications and create watertight seams.

## A Brief History of Soldering

Soldering is ancient. Archaeological evidence shows soldering in Mesopotamia dating back to roughly 3000 BCE. The Egyptians soldered gold jewelry. Roman plumbers (the word "plumber" comes from *plumbum*, Latin for lead) joined lead pipes with solder. The basic technique — clean the surfaces, apply flux, flow a lower-melting-point metal into the joint — hasn't fundamentally changed in five millennia.

The big shift came with [electronics](/computer-hardware). As vacuum tubes gave way to transistors in the 1950s, and transistors gave way to integrated circuits in the 1960s, the scale of soldering changed dramatically. Where a radio might have had 50 solder joints, a modern smartphone has thousands.

The 2006 RoHS directive was probably the single biggest disruption to the soldering industry in [modern history](/modern-history). Overnight, manufacturers had to retool for lead-free alloys that behaved differently, required higher temperatures, and produced joints that looked different from what inspectors had been trained to evaluate for decades. The transition cost the industry billions — but it removed roughly 10,000 metric tons of lead per year from the electronics waste stream.

## Modern Challenges and Trends

Soldering continues to evolve with electronic packaging trends.

**Miniaturization** pushes the limits of what can be soldered reliably. Ball grid array (BGA) packages hide their solder connections underneath the chip, making inspection difficult. Package-on-package stacking layers components vertically. These trends demand tighter process control and more sophisticated inspection techniques like X-ray imaging.

**High-reliability applications** in aerospace, automotive, and medical devices require solder joints that survive thermal [cycling](/cycling), vibration, and decades of service. The move to lead-free solder made this harder — SAC alloys form larger tin crystals than leaded solder, and these crystals are more susceptible to thermal fatigue. New alloys with additions of bismuth, antimony, or indium are being developed to address this.

**Automated inspection** using machine vision and [artificial intelligence](/artificial-intelligence) is replacing much of the human visual inspection that was traditionally required. Automated optical inspection (AOI) systems photograph every joint on a board and flag defects. X-ray inspection catches hidden problems in BGA joints and voids. These systems process boards in seconds, far faster than any human inspector could manage.

**Low-temperature solders** are an active research area. Bismuth-based alloys that melt below 140 degrees Celsius could reduce thermal stress on components and substrates during assembly. This matters more as components get smaller and more sensitive to heat.

## Why Understanding Soldering Matters

Whether you're building your first Arduino project, repairing a broken appliance, or designing products for mass production, soldering is one of those foundational skills that connects design to reality. You can [design](/design-patterns) the most elegant circuit in the world, but it only becomes real when metal meets metal through a solder joint.

The underlying principles — cleanliness, proper heat, flux chemistry, metallurgy — haven't changed much in thousands of years. The scale, the materials, and the precision have changed enormously. But pick up a soldering iron, heat a joint correctly, and watch solder flow into the gap by capillary action, and you're doing essentially the same thing a metalworker in ancient Ur was doing 5,000 years ago. Just with better tools and fewer burns. Hopefully.
