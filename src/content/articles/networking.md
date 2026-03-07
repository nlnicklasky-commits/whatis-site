---
title: "What Is Networking?"
slug: networking
description: "Networking connects computers and devices to share data. Learn about protocols, LANs, WANs, the internet, and how modern networks actually work. Discover the..."
category: technology
tags: ["networking", "computer networks", "internet", "protocols", "lan", "wan", "data communication"]
heroImage: "/images/articles/networking-hero.webp"
heroAlt: "Editorial photograph representing the concept of networking"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2704
tier: "2"
relatedArticles: ["network-security", "cloud-computing", "algorithms", "blockchain", "machine-learning"]
externalSources:
  - title: "RFC 791 - Internet Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc791"
  - title: "Cisco Networking Academy"
    url: "https://www.netacad.com/"
  - title: "IEEE 802 Standards"
    url: "https://standards.ieee.org/featured/802/"
  - title: "Internet Society - How the Internet Works"
    url: "https://www.internetsociety.org/internet/how-it-works/"
faq:
  - q: "What is the difference between a LAN and a WAN?"
    a: "A LAN (Local Area Network) covers a small area like a home, office, or building with high-speed connections. A WAN (Wide Area Network) connects networks across cities, countries, or the entire globe. The internet is the largest WAN in existence."
  - q: "What does a router do?"
    a: "A router directs data packets between different networks. It reads the destination address of each packet and determines the best path to send it, much like a postal sorting facility routes mail to the correct delivery route."
  - q: "Is Wi-Fi the same as the internet?"
    a: "No. Wi-Fi is a wireless networking technology that connects your device to a local network. The internet is a global network of networks. Wi-Fi gives you wireless access to your local network, which may or may not be connected to the internet."
  - q: "What is bandwidth?"
    a: "Bandwidth is the maximum rate at which data can be transferred over a network connection, typically measured in megabits per second (Mbps) or gigabits per second (Gbps). Higher bandwidth means more data can flow at once, like a wider highway carrying more cars."
  - q: "What is latency?"
    a: "Latency is the time delay between sending a request and receiving a response. Even with high bandwidth, high latency causes noticeable delays. It's measured in milliseconds and affected by physical distance, network congestion, and the number of devices data passes through."
---

# What Is Networking?

Networking is the practice of connecting computers and other devices so they can communicate and share resources. Every time you load a web page, send an email, stream a video, or print a document over Wi-Fi, you're using a computer network.

## Why Networks Exist

Computers in isolation are useful. Computers connected to each other are exponentially more useful. That's the entire premise.

Before networks, if you wanted to share a file with a colleague, you copied it to a floppy disk and walked it over. Seriously. Programmers called this "sneakernet" — the network speed was limited by how fast you could walk. The first computer networks solved this problem by letting machines exchange data through cables instead of shoe leather.

But sharing files was just the beginning. Networks enable email, instant messaging, video conferencing, shared databases, cloud storage, streaming media, online gaming, e-commerce, and essentially every digital service you use daily. The global economy runs on networks. About 5.5 billion people use the internet as of 2025 — roughly 68% of the world's population.

Here's what most people miss: networking isn't just about the internet. Your office has a local network. Data centers have internal networks. Factories have industrial networks. Cars have in-vehicle networks connecting dozens of computers. Even your body has something that works roughly like a network — your [nervous system](/anatomy), sending signals between brain and body.

## Network Types by Size

Networks come in dramatically different scales, and the terminology reflects that.

### Personal Area Network (PAN)

The smallest network. Your phone connected to Bluetooth earbuds, a smartwatch, and a wireless keyboard — that's a PAN. Range is typically under 10 meters. Technologies include Bluetooth, Zigbee, and near-field communication (NFC).

### Local Area Network (LAN)

A LAN connects devices in a limited area — a home, office, school, or building. Your home Wi-Fi network is a LAN. A corporate office with hundreds of wired Ethernet connections is also a LAN. LANs typically offer high speeds (1 Gbps to 10 Gbps for wired connections) and are owned and managed by a single organization.

Ethernet is the dominant wired LAN technology. Defined by the IEEE 802.3 standard, modern Ethernet runs at 1, 10, 25, 40, or even 100 Gbps over copper or fiber optic cables. Wi-Fi (IEEE 802.11) is the wireless counterpart, with the latest Wi-Fi 7 standard delivering speeds up to 46 Gbps in ideal conditions.

### Metropolitan Area Network (MAN)

A MAN spans a city or campus. A university connecting buildings across a large campus, or a city government linking its offices, creates a MAN. These typically use fiber optic connections and can cover distances up to about 50 kilometers.

### Wide Area Network (WAN)

WANs connect networks across large geographic distances — cities, countries, continents. The internet is the most famous WAN. Corporate WANs connect branch offices worldwide using leased lines, MPLS circuits, or internet-based VPN connections.

WANs generally operate at lower speeds than LANs because of the distances involved and the cost of long-distance connections. A company might have 10 Gbps on their LAN but only 1 Gbps for their WAN link.

## The OSI Model: How Network Communication Is Organized

Every networking textbook and certification exam covers the OSI (Open Systems Interconnection) model. It divides network communication into seven layers, each handling a specific function. It's like the postal system — writing a letter, putting it in an envelope, addressing it, and handing it to the mail carrier are separate steps handled by different parts of the system.

**Layer 1 — Physical.** The actual hardware. Cables, connectors, electrical signals, radio waves. This layer deals with bits — 1s and 0s — transmitted as voltages on copper, light pulses on fiber, or radio frequencies through air.

**Layer 2 — Data Link.** Handles communication between directly connected devices. Ethernet operates here, using MAC addresses (unique hardware identifiers) to deliver frames from one device to another on the same network. Switches are Layer 2 devices.

**Layer 3 — Network.** Responsible for routing data between different networks. IP addresses live here. Routers are Layer 3 devices. When you send data from your home to a server across the country, Layer 3 determines the path.

**Layer 4 — Transport.** Ensures reliable data delivery. TCP (Transmission Control Protocol) guarantees that all data arrives correctly and in order. UDP (User Datagram Protocol) trades reliability for speed — great for video streaming and gaming where a dropped packet is better than a delayed one.

**Layer 5 — Session.** Manages connections between applications. Opens, maintains, and closes communication sessions.

**Layer 6 — Presentation.** Handles data formatting, [encryption](/cryptography), and compression. When your browser decrypts HTTPS traffic, that's a Layer 6 function.

**Layer 7 — Application.** The layer users interact with. HTTP, email protocols, FTP, DNS — these are all Layer 7 protocols that applications use to communicate over the network.

In practice, the TCP/IP model (which collapses these into four layers) is what the internet actually uses. But the OSI model remains the standard teaching framework because it separates concerns cleanly.

## IP Addressing: How Devices Find Each Other

Every device on a network needs a unique address. On the internet and most private networks, this is an IP (Internet Protocol) address.

### IPv4

The original addressing system uses 32-bit addresses, written as four numbers separated by dots: 192.168.1.1. This allows approximately 4.3 billion unique addresses. That seemed like plenty in 1981 when IPv4 was standardized. It's nowhere near enough now with billions of connected devices.

Network Address Translation (NAT) has extended IPv4's life by allowing multiple devices behind a router to share a single public IP address. Your home network probably uses this — all your devices share one public-facing address while having private addresses internally (typically starting with 192.168 or 10.0).

### IPv6

The replacement uses 128-bit addresses, providing 340 undecillion unique addresses — that's 3.4 followed by 38 zeros. Written in hexadecimal notation like 2001:0db8:85a3:0000:0000:8a2e:0370:7334. IPv6 adoption has been slow but steady, reaching about 45% of Google's traffic in 2025.

### DNS: The Phone Book

Nobody memorizes IP addresses. Domain Name System (DNS) translates human-readable names (like whatis.site) into IP addresses. When you type a URL, your device asks a DNS server to look up the corresponding IP address. This lookup typically takes 10-50 milliseconds and happens completely invisibly.

DNS is distributed across millions of servers worldwide. If one DNS server doesn't have the answer, it asks another. This hierarchical system, starting from root servers at the top, can resolve any domain name on the internet.

## How Data Actually Travels

When you click a link, something remarkable happens in milliseconds. Let's trace the journey.

### Packet Switching

Networks don't send data as a continuous stream. They break it into small chunks called packets — typically 1,500 bytes each. A single web page might require hundreds of packets.

Each packet contains a header with source and destination addresses, sequence numbers, and error-checking information. Packets from the same message can take different routes through the network and arrive out of order. The receiving device reassembles them using sequence numbers.

This is fundamentally different from how phone networks used to work. Old phone systems created a dedicated circuit for each call — like having a private road. Packet switching shares the roads, with packets from millions of conversations mixing together. This is vastly more efficient.

### Routing

Routers examine each packet's destination address and decide where to send it next. They maintain routing tables — essentially maps of the network — and use [algorithms](/algorithms) to find the best path. "Best" might mean shortest, fastest, least congested, or cheapest, depending on the routing protocol.

The internet uses Border Gateway Protocol (BGP) for routing between major networks (called autonomous systems). BGP is the protocol that decides whether your data goes through Chicago or Atlanta on its way from New York to Los Angeles. It's a remarkably simple protocol for such an important job, and frankly, it has some well-known security weaknesses that the industry is still addressing.

### Switching

Within a local network, switches forward data frames based on MAC addresses. A switch learns which devices are connected to which ports and creates a forwarding table. When a frame arrives, the switch checks the destination MAC address and sends it only to the correct port — not to every device, like older hubs did.

Modern switches operate at wire speed, forwarding millions of frames per second with microsecond latency. Enterprise switches may have 48 or more ports and stack together for even more capacity.

## Network Protocols: The Rules of Communication

Protocols are agreed-upon rules for how devices communicate. Without protocols, networking would be like two people trying to have a conversation while speaking different languages.

### TCP/IP

The foundation of internet communication. IP handles addressing and routing (getting packets to the right destination). TCP handles reliable delivery (making sure all packets arrive correctly). Together, they enable virtually every internet application.

TCP uses a three-way handshake to establish connections: your device sends a SYN packet, the server responds with SYN-ACK, and your device confirms with ACK. This happens in milliseconds before any data transfers.

### HTTP/HTTPS

The Hypertext Transfer Protocol powers the web. Your browser sends HTTP requests ("give me this page") and servers send HTTP responses (the page content). HTTPS adds TLS [encryption](/cryptography) so nobody can eavesdrop on the exchange.

HTTP/3, the latest version, uses QUIC instead of TCP for faster connections. It reduces latency, handles packet loss better, and supports connection migration — your video call doesn't drop when you switch from Wi-Fi to cellular.

### DHCP

Active Host Configuration Protocol automatically assigns IP addresses to devices joining a network. Without DHCP, every device would need its address configured manually. Your home router runs a DHCP server — it's why your phone gets an IP address automatically when it connects to Wi-Fi.

### Other Key Protocols

**SMTP, IMAP, POP3** handle email. **FTP and SFTP** transfer files. **SSH** provides secure remote access. **SNMP** monitors network devices. **SIP and RTP** power voice and video calls. Each solves a specific communication problem.

## Network Hardware

### Switches

Layer 2 devices that connect devices within a LAN. Managed switches offer features like VLANs (virtual LANs that segment traffic logically), quality of service (prioritizing certain traffic), and port security. Unmanaged switches are plug-and-play — simpler and cheaper.

### Routers

Layer 3 devices that connect different networks. Your home router connects your LAN to your ISP's network (and through it, the internet). Enterprise routers can handle millions of packets per second and make routing decisions based on complex policies.

### Access Points

Wireless access points create Wi-Fi networks. Enterprise environments might have hundreds of access points managed by a central controller, ensuring seamless roaming as you walk through a building.

### Load Balancers

Distribute incoming traffic across multiple servers. When millions of people visit a website simultaneously, a load balancer ensures no single server gets overwhelmed. This is essential for [cloud computing](/cloud-computing) environments where scaling happens dynamically.

### Network Cables

**Cat5e** supports 1 Gbps over 100 meters — adequate for most offices. **Cat6/Cat6a** supports 10 Gbps. **Fiber optic** cables use light instead of electricity, supporting 100 Gbps or more over distances of kilometers. The undersea fiber cables connecting continents carry terabits of data per second.

## Software-Defined Networking (SDN)

Traditional networks require configuring each device individually. In a network with thousands of switches and routers, this is painfully slow and error-prone.

SDN separates the control plane (the brain that decides where traffic goes) from the data plane (the hardware that moves packets). A central controller manages the entire network programmatically. Need to redirect traffic during maintenance? Change one policy in the controller instead of logging into a hundred switches.

This matters enormously for [cloud computing](/cloud-computing) and [data science](/data-science) workloads where network configurations change constantly. SDN makes networks as programmable and flexible as the applications running on them.

## Network Virtualization

Physical networks are expensive and slow to change. Network virtualization creates logical networks on top of physical infrastructure, just as virtual machines create logical computers on physical servers.

**VLANs** divide a physical switch into multiple logical switches. Devices on the same VLAN can communicate as if they're on the same physical network, even if they're plugged into different switches in different buildings.

**VPNs** create encrypted virtual connections over public networks. Two offices on opposite sides of the world can communicate as if they're on the same local network.

**Network Function Virtualization (NFV)** replaces dedicated hardware appliances (firewalls, load balancers, IDS) with software running on standard servers. This reduces cost and increases flexibility.

## Network Performance

### Bandwidth vs. Throughput

Bandwidth is the theoretical maximum capacity of a connection. Throughput is what you actually get. A 1 Gbps connection might deliver 800 Mbps of actual throughput due to protocol overhead, congestion, and other factors.

### Latency

The delay between sending a request and receiving a response. Light in fiber travels at about 200,000 km/s, so a signal from New York to London (5,500 km) takes at minimum 27.5 milliseconds one way. Real-world latency is higher due to routing, processing, and queuing at each network hop.

For perspective: online gaming requires latency under 50 ms. Voice calls tolerate up to 150 ms. Web browsing becomes noticeably sluggish above 200 ms.

### Quality of Service (QoS)

Not all traffic is created equal. A video conference needs consistent low-latency delivery. An email can tolerate delays. QoS policies prioritize time-sensitive traffic over bulk data transfers, ensuring that a large file download doesn't ruin your video call.

## Network Security Fundamentals

Networks need protection. [Network security](/network-security) is an entire discipline, but the basics include:

**Firewalls** filter traffic based on rules. **Encryption** protects data in transit. **Access controls** limit who can connect and what they can access. **Intrusion detection** monitors for suspicious activity. **Segmentation** isolates sensitive systems.

The shift to zero-trust architectures — where nothing is trusted by default, even inside the network — represents the current evolution in how security interacts with networking.

## The Internet: The Network of Networks

The internet isn't a single network. It's a collection of approximately 70,000 autonomous systems — networks run by ISPs, corporations, universities, and governments — that agree to exchange traffic using BGP.

**Tier 1 networks** form the internet's backbone. Companies like Lumen, NTT, and Cogent operate global networks that peer with each other without paying for transit. **Tier 2 networks** pay Tier 1 providers for global connectivity but peer freely with each other regionally. **Tier 3 networks** (your ISP) buy transit from Tier 2 providers and sell connectivity to end users.

Internet Exchange Points (IXPs) are physical locations where networks connect and exchange traffic directly, reducing latency and costs. Major IXPs like DE-CIX in Frankfurt handle over 14 terabits per second of peak traffic.

## Emerging Trends

### 5G and Beyond

5G cellular networks offer theoretical speeds up to 20 Gbps with latency under 1 millisecond. This enables applications like remote surgery, autonomous vehicles, and massive IoT deployments that previous cellular generations couldn't support.

### Wi-Fi 7

The latest Wi-Fi standard (802.11be) supports 46 Gbps maximum throughput, multi-link operation across frequency bands, and reduced latency. It's designed for high-density environments with hundreds of connected devices.

### Intent-Based Networking

Rather than configuring specific routes and rules, administrators describe their intent ("prioritize video traffic," "isolate IoT devices") and the network translates this into configurations automatically. [Artificial intelligence](/artificial-intelligence) and [machine learning](/machine-learning) power much of this automation.

### Network as a Service (NaaS)

Just as [cloud computing](/cloud-computing) turned servers into a service, NaaS turns networking into one. Organizations consume networking capabilities on demand without owning or managing physical infrastructure.

## Key Takeaways

Networking connects devices so they can share data and resources. From Bluetooth PANs to the global internet, networks operate at every scale using standardized protocols — primarily TCP/IP — that allow billions of devices to communicate.

Understanding the basics — IP addressing, switching, routing, protocols, and network types — gives you a foundation for grasping everything from home Wi-Fi troubleshooting to enterprise architecture to how the internet actually works.

The field continues evolving rapidly with software-defined networking, 5G, Wi-Fi 7, and AI-powered network management transforming how we build, operate, and secure the networks that underpin modern life.
