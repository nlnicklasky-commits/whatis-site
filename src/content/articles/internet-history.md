---
title: "What Is Internet History?"
slug: internet-history
description: "Internet history traces how a Cold War military network became the global communication system connecting 5 billion people and reshaping civilization."
category: technology
tags: ["internet history", "arpanet", "world wide web", "tcp/ip", "networking", "digital history", "communication"]
heroImage: "/images/articles/internet-history-hero.webp"
heroAlt: "Editorial photograph representing the concept of internet history"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2810
tier: "2"
relatedArticles: ["algorithms", "electronics", "app-development", "machine-learning", "fiber-optics"]
externalSources:
  - title: "Internet Society - History of the Internet"
    url: "https://www.internetsociety.org/internet/history-internet/"
  - title: "Computer History Museum"
    url: "https://www.computerhistory.org/"
  - title: "W3C - History of the Web"
    url: "https://www.w3.org/History.html"
  - title: "DARPA - Where the Future Becomes Now"
    url: "https://www.darpa.mil/"
faq:
  - q: "Who invented the internet?"
    a: "No single person invented the internet. It was developed over decades by many contributors. Key figures include Vint Cerf and Bob Kahn (TCP/IP protocols), J.C.R. Licklider (conceptual vision), Paul Baran and Donald Davies (packet switching), Tim Berners-Lee (World Wide Web), and Marc Andreessen (Mosaic/Netscape browser). The internet is a collective creation built by hundreds of researchers, engineers, and organizations."
  - q: "Is the internet the same as the World Wide Web?"
    a: "No. The internet is the global network of connected computers and the underlying infrastructure (cables, routers, protocols like TCP/IP). The World Wide Web is an application that runs on top of the internet — it's the system of web pages, hyperlinks, and browsers created by Tim Berners-Lee in 1989. Email, streaming, file transfer, and messaging are other applications that use the internet but aren't the web."
  - q: "When did the internet become available to the public?"
    a: "The internet became commercially available to the public in 1991 when the National Science Foundation lifted restrictions on commercial use of its backbone network. The World Wide Web, created in 1989, became publicly accessible in 1993 with the release of the Mosaic browser. Widespread consumer adoption took off in the mid-1990s as ISPs like AOL, CompuServe, and dial-up providers made access easy."
  - q: "How many people use the internet today?"
    a: "As of 2025, approximately 5.5 billion people — about 67% of the world's population — use the internet. Growth continues primarily in developing regions. Mobile devices account for the majority of internet access globally. The number of connected devices (including IoT) exceeds 15 billion."
---

# What Is Internet History?

Internet history is the story of how a small experimental network connecting four university computers in 1969 grew into the global communication system that connects over 5 billion people, carries the majority of the world's commerce, and has reshaped virtually every aspect of modern life.

It's a story with no single inventor, no single moment of creation, and no single country of origin — though the United States played a disproportionate role. It involves Cold War paranoia, academic idealism, [engineering](/engineering) brilliance, commercial greed, and an extraordinary amount of luck. The internet as it exists today is not what anyone planned. It's what happened when smart people built tools and billions of other people figured out what to do with them.

## Before the Internet: The Ideas That Made It Possible

The internet didn't emerge from nothing. Several pre-existing concepts had to come together.

### Packet Switching

Traditional telephone networks used circuit switching — when you made a call, a dedicated physical circuit connected your phone to the other person's phone for the duration of the call. This was reliable but wasteful. If nobody was talking, the circuit sat idle but remained reserved.

Paul Baran at the RAND Corporation (1960-1964) and Donald Davies at the UK's National Physical Laboratory (independently, 1965) both proposed a different approach: break messages into small pieces (packets), send each piece independently through the network, and reassemble them at the destination. If one route was blocked or destroyed, packets could take alternate paths.

Baran was explicitly motivated by nuclear war scenarios — he wanted a communication network that could survive a Soviet first strike. Davies was more interested in efficiency. Both arrived at packet switching, the fundamental technology underlying the internet.

### Time-Sharing Computers

In the early 1960s, computers were enormous, expensive, and ran one program at a time (batch processing). Time-sharing systems — where multiple users shared a single computer simultaneously, each getting a fraction of its processing time — made computers interactive and accessible.

J.C.R. Licklider, a psychologist and computer scientist at MIT, envisioned connecting time-sharing computers into a network that would let researchers everywhere access computing resources and share information. His 1963 memo to "Members and Affiliates of the Intergalactic Computer Network" (yes, that was the actual title) laid out a vision remarkably close to what the internet became.

In 1962, Licklider became the first director of the Information Processing Techniques Office (IPTO) at DARPA (then called ARPA). He didn't build the internet, but he funded and inspired the people who would.

## ARPANET: The Ancestor (1969-1983)

### The First Connection

On October 29, 1969, a computer at UCLA sent the first message to a computer at Stanford Research Institute over ARPANET. The message was supposed to be "LOGIN." The system crashed after "LO." So the first internet message was "LO" — as in "Lo and behold."

By December 1969, four nodes were connected: UCLA, Stanford Research Institute, UC Santa Barbara, and the University of Utah. The network used Interface Message Processors (IMPs) — specialized computers made by Bolt Beranek and Newman (BBN) that handled the [networking](/networking), letting host computers focus on computing.

### Growth and Innovation

ARPANET grew steadily through the 1970s. By 1971, it had 15 nodes. By 1973, 30 nodes. By 1981, about 200. Along the way, it spawned innovations that would become foundational:

**Email** — In 1971, Ray Tomlinson sent the first networked email, choosing the @ symbol to separate user names from computer names. Email quickly became ARPANET's most popular application — by 1973, it accounted for 75% of all ARPANET traffic. The internet's "killer app" was, from the very beginning, people sending messages to each other.

**Mailing lists** — The first mailing list, SF-LOVERS (for [science fiction](/science-fiction) fans), appeared in 1975. DARPA tried to shut it down as a waste of [government](/government) resources. After [debate](/debate), it was allowed to continue. The precedent that networks would be used for social communication as well as official business was established early.

**FTP** — The File Transfer Protocol (1971) allowed users to transfer files between computers. This seems trivially obvious now, but at the time, every computer system stored files differently. Standardizing file transfer was a major achievement.

### The Protocol Wars

ARPANET used a protocol called NCP (Network Control Protocol). It worked, but it had limitations — it only handled connections between computers on ARPANET itself. As other networks appeared (satellite networks, radio networks, local area networks), the need for a protocol that could connect different networks became critical.

Vint Cerf and Bob Kahn published the design for TCP (Transmission Control Protocol) in 1974. Later, it was split into TCP (handling reliable delivery) and IP (handling addressing and routing). Together, TCP/IP provided the essential capability: any computer on any network could communicate with any other computer on any other network, as long as both used TCP/IP.

On January 1, 1983 — "flag day" — ARPANET switched from NCP to TCP/IP. Every connected computer had to switch simultaneously. It worked. This date is arguably the true birthday of the internet, because the internet is defined by TCP/IP, not by any particular network.

## The Internet Expands (1983-1991)

### NSFNet

The National Science Foundation (NSF) built NSFNet in 1986 to connect university researchers to supercomputing centers. Its backbone ran at 56 Kbps initially — roughly the speed of a single analog modem. By 1988, it was upgraded to 1.5 Mbps (T1). By 1991, 45 Mbps (T3).

NSFNet's acceptable use policy initially prohibited commercial traffic — the network was for research and [education](/education) only. This restriction would be lifted in 1991, a decision that changed everything.

### Other Networks

The internet wasn't the only network. BITNET connected universities via IBM mainframes. CSNET connected [computer science](/computer-science) departments. FidoNet connected bulletin board systems (BBSs) over phone lines. European networks like JANET (UK), EARN (Europe), and Minitel (France) had their own architectures.

Most of these eventually connected to the internet via gateways, or were absorbed by it entirely. The story of the internet is partly the story of network effects — the more people connected to the internet, the more valuable it became, the more other networks wanted to join.

### Domain Name System

In the early internet, computers were identified by numerical IP addresses (like 192.168.1.1). Humans can't easily remember strings of numbers, so in 1983, Paul Mockapetris designed the Domain Name System (DNS), which maps human-readable names (like example.com) to IP addresses.

The original top-level domains — .com, .edu, .gov, .mil, .org, and .net — were established in 1985. Country-code domains (.uk, .de, .jp) followed. DNS is one of those invisible systems that you use hundreds of times per day without thinking about it.

## The World Wide Web Changes Everything (1989-1995)

The internet existed before the web. But the web is what made the internet matter to ordinary people.

### Tim Berners-Lee's Proposal

In March 1989, Tim Berners-Lee — a British physicist working at CERN in Switzerland — submitted a proposal titled "Information [Management](/management): A Proposal." His boss's response, written on the cover page: "Vague but exciting."

Berners-Lee wanted to solve a specific problem: researchers at CERN couldn't easily share documents and data. Information was scattered across different computers, in different formats, with no linking between related documents.

His solution combined three ideas:

1. **HTML** (Hypertext Markup Language) — a simple format for creating documents with embedded links to other documents
2. **HTTP** (Hypertext Transfer Protocol) — a protocol for requesting and transmitting documents between computers
3. **URLs** (Uniform Resource Locators) — addresses that uniquely identify any document on the web

By Christmas 1990, Berners-Lee had built the first web server, the first web browser (called WorldWideWeb), and the first web page — [running](/running) on a NeXT computer at CERN.

### Going Public

CERN released the web software to the public in April 1993. But what really ignited adoption was **Mosaic** — a web browser with a graphical user interface developed by Marc Andreessen and Eric Bina at the National Center for Supercomputing Applications (NCSA) at the University of Illinois.

Previous web browsers were text-based or clunky. Mosaic displayed images inline with text, had a clean interface, and ran on Windows and Mac. It made the web visually appealing and easy to use. Downloads of Mosaic exploded — from a few thousand to millions within a year.

Andreessen left NCSA and co-founded Netscape Communications in 1994. Netscape Navigator, the commercial successor to Mosaic, became the dominant browser. When Netscape went public in August 1995 — the stock price doubling on the first day — the dot-com era officially began.

### Early Web Culture

The early web (1993-1997) had a distinct culture. Personal home pages with "under [construction](/construction)" GIF [animations](/electronics). Guestbooks. Web rings — groups of related sites linked in a circle. GeoCities, which let anyone create a free webpage in themed "neighborhoods." Alta Vista, Yahoo, and Lycos as search engines (Google wouldn't launch until 1998).

The web was chaotic, ugly, slow (loading a single image over a 14.4 Kbps modem could take minutes), and absolutely magical to people experiencing it for the first time. The feeling of typing a URL and seeing a page from a computer in another country appear on your screen — that sense of wonder was real, even if the page took 45 seconds to load.

## The Dot-Com Era and Bust (1995-2001)

The commercialization of the internet produced one of the most spectacular financial bubbles in history.

### The Boom

Between 1995 and 2000, the NASDAQ Composite Index rose from about 1,000 to over 5,000. Hundreds of internet startups went public with sky-high valuations and no profits. The theory: get big fast, worry about revenue later. [Venture capital](/venture-capital) poured billions into companies with ".com" appended to their names.

Some of these companies became giants: Amazon (founded 1994), eBay (1995), Google (1998). Others became cautionary tales: Pets.com, Webvan, Kozmo.com, Boo.com — companies that burned through hundreds of millions of dollars and collapsed.

The excesses were real. A Super Bowl ad in January 2000 cost $2.2 million for 30 seconds, and multiple dot-com companies bought them despite having no revenue path. The phrase "irrational exuberance" — coined by Federal Reserve Chair Alan Greenspan in 1996 — captured the mood.

### The Bust

The NASDAQ peaked on March 10, 2000, at 5,048.62. Over the next two and a half years, it fell to 1,114 — a 78% decline. Trillions of dollars in market value evaporated. Hundreds of dot-com companies shut down. The Bay Area office market collapsed. "Internet entrepreneur" went from an aspirational identity to a punchline.

But here's the thing people forget: the bust killed bad companies, not the internet itself. Internet usage continued growing throughout the bust. The infrastructure built during the boom — fiber optic cables, data centers, software platforms — remained and formed the foundation for what came next.

## Web 2.0 and the Social Internet (2004-2012)

The term "Web 2.0" was coined around 2004 to describe a shift from static web pages (read-only) to interactive platforms (read-write). The technology wasn't fundamentally new — AJAX, JavaScript, and server-side processing had existed for years. What changed was how they were combined.

### Social Media Emerges

Friendster (2002), MySpace (2003), Facebook (2004), YouTube (2005), Twitter (2006), Instagram (2010). Each built on the idea that the web's most compelling content wasn't made by companies — it was made by people.

Facebook's growth was staggering: from a Harvard-only network in 2004 to 100 million users by 2008 to over 1 billion by 2012. YouTube went from launch to acquisition by Google (for $1.65 billion) in 18 months. These platforms didn't just use the internet — they became the internet for hundreds of millions of people.

### The Smartphone Revolution

Apple's iPhone launched in June 2007. Within a few years, smartphones had replaced computers as the primary way most people accessed the internet. Mobile internet access surpassed desktop access globally around 2016.

The [app development](/app-development) ecosystem that emerged around smartphones — Apple's App Store (2008), Google Play — created entirely new categories of internet services: ride-sharing (Uber, 2009), mobile payments, location-based services, and mobile messaging (WhatsApp, 2009).

In developing countries, smartphones leapfrogged desktop computers entirely. Billions of people in Africa, South Asia, and Southeast Asia accessed the internet for the first time on a mobile device, often before they had reliable [electricity](/electricity) or running water.

### User-Generated Content

Wikipedia (2001) demonstrated that volunteer contributors could create an encyclopedia rivaling Britannica. Blogs democratized [publishing](/publishing) — anyone with an internet connection could reach a global audience. Reddit (2005) organized communities around every conceivable interest.

This democratization had a dark side that became increasingly apparent: misinformation, conspiracy theories, harassment, and radicalization spread as easily as useful information. The same tools that enabled Arab Spring protests also enabled coordinated disinformation campaigns.

## The Modern Internet (2012-Present)

### [Cloud Computing](/cloud-computing)

Amazon Web Services (launched 2006) changed how internet services were built. Instead of buying and maintaining your own servers, you could rent computing power by the hour from Amazon's massive data centers. Microsoft Azure and Google Cloud followed. By the 2020s, most internet services ran on cloud infrastructure.

This dramatically lowered the cost of starting an internet business. A startup in 2000 needed millions in servers. A startup in 2020 needed a credit card and an AWS account.

### Streaming

Netflix began streaming in 2007. Spotify launched in 2008. By the 2020s, streaming had replaced physical media for most consumers. Video streaming alone accounts for over 50% of downstream internet traffic. The infrastructure required — content delivery networks, undersea cables, last-mile broadband — represents an enormous investment in physical internet infrastructure.

### AI and the Internet

[Machine learning](/machine-learning) transformed internet services. Google's search rankings use [neural networks](/neural-networks). Social media feeds are algorithmically curated. [Natural language processing](/natural-language-processing) powers virtual assistants. Recommendation systems determine what you see on YouTube, Netflix, and Amazon.

The emergence of large language models (ChatGPT, 2022) and generative AI represents potentially the biggest shift in how people interact with internet information since search engines. Instead of searching for pages, people increasingly ask AI systems to synthesize information — raising questions about the future of the web itself.

### The Infrastructure Beneath

The physical internet is an engineering marvel. Over 550 submarine cables (totaling over 1.4 million kilometers) carry 99% of intercontinental data traffic. These [fiber optic](/fiber-[optics](/optics)) cables rest on the ocean floor, sometimes at depths of over 8,000 meters.

Data centers consume roughly 1-2% of global electricity. The largest — operated by hyperscalers like Amazon, Google, Microsoft, and Meta — are massive facilities with thousands of servers, advanced cooling systems, and dedicated power supplies.

Internet exchange points (IXPs) are physical locations where internet service providers exchange traffic. The largest — DE-CIX in Frankfurt — handles peak traffic of over 14 Tbps (terabits per second).

## What the Internet Changed

A brief, incomplete inventory of what the internet transformed:

**Commerce**: E-commerce was $5.8 trillion globally in 2023. Amazon alone generated $575 billion in revenue. The entire retail industry has been restructured around online [sales](/sales) and delivery.

**Communication**: 4.6 billion email accounts exist. WhatsApp handles over 100 billion messages per day. The cost of long-distance communication dropped to effectively zero.

**Media**: Newspapers lost over 70% of advertising revenue between 2005 and 2020. Streaming replaced broadcast and cable TV. Social media replaced traditional media as the primary news source for younger demographics.

**Work**: Remote work, enabled by internet tools (Zoom, Slack, Google Docs), went from fringe to mainstream during COVID-19. An estimated 28% of work days in the US are now remote.

**[Politics](/politics)**: Campaigns are won and lost on social media. Misinformation spreads at the speed of shares. Government surveillance capabilities expanded enormously. Digital authoritarianism — using internet technology for censorship and control — is growing in dozens of countries.

**Knowledge**: The sum of human knowledge is accessible from a device in your pocket. This is genuinely unprecedented in human history. Whether we're using that access wisely is an open question.

## Key Takeaways

The internet evolved from a four-node experimental network in 1969 to a global system connecting over 5 billion people, through a series of innovations — packet switching, TCP/IP, the World Wide Web, browsers, search engines, social media, smartphones, and cloud computing — each building on the previous layer.

No single person or organization invented the internet. It was a collective creation of military researchers, academic scientists, government agencies, and commercial companies, shaped by both intentional design and unintended consequences. The technology that enables global communication, commerce, and community was largely developed with public funding and deployed with private investment.

Understanding internet history matters because the internet isn't finished. The decisions being made now — about AI, privacy, content moderation, digital rights, and infrastructure investment — will shape the internet of the next 50 years as profoundly as the decisions of the 1970s and 1990s shaped the internet we have today.
