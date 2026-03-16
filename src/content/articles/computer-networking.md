---
title: "What Is Computer Networking?"
slug: computer-networking
description: "Computer networking connects devices to share data using protocols like TCP/IP, enabling the internet, cloud computing, and modern communication. Discover th..."
category: technology
tags: ["networking", "internet", "data communication", "it", "network protocols", "cybersecurity", "cloud computing"]
heroImage: "/images/articles/computer-networking-hero.webp"
heroAlt: "Editorial photograph representing the concept of computer networking"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 2891
tier: "2"
relatedArticles: ["computer-science", "computer-security", "computer-hardware", "algorithms"]
externalSources:
  - title: "RFC Editor - Internet Standards"
    url: "https://www.rfc-editor.org/"
  - title: "Cisco Networking Academy"
    url: "https://www.netacad.com/"
  - title: "Internet Engineering Task Force (IETF)"
    url: "https://www.ietf.org/"
  - title: "How Does the Internet Work? - Stanford"
    url: "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"
  - title: "Cloudflare Learning Center"
    url: "https://www.cloudflare.com/learning/"
faq:
  - q: "What is the difference between the internet and a network?"
    a: "A network is any group of connected devices that can share data — your home Wi-Fi is a network. The internet is a global network of networks — millions of individual networks interconnected through standardized protocols (TCP/IP), forming the worldwide system you access through web browsers and apps. Every device on the internet is part of some local network that connects to larger networks, which ultimately connect to the internet backbone."
  - q: "What does an IP address actually do?"
    a: "An IP address is a unique numerical label assigned to every device on a network, serving as its location identifier. IPv4 addresses look like 192.168.1.1 (four numbers 0-255 separated by dots). IPv6 addresses are longer hexadecimal strings. When you send data, routers use IP addresses to determine where to forward packets, much like postal addresses direct mail to the right building."
  - q: "Is Wi-Fi the same as the internet?"
    a: "No. Wi-Fi is a wireless technology that connects your device to a local router without cables. The internet is the global network your router connects to. You can have Wi-Fi without internet access (if your router isn't connected to an ISP) and internet access without Wi-Fi (using Ethernet cables or cellular data). Wi-Fi is just one method of connecting to your local network, which then connects to the internet."
  - q: "What is bandwidth vs. latency?"
    a: "Bandwidth is how much data can be transmitted per second — think of it as the width of a highway. Latency is how long it takes a single piece of data to travel from source to destination — the speed limit on that highway. High bandwidth with high latency means you can send lots of data, but each piece takes a while to arrive. Online gaming cares most about latency (below 50ms). Streaming video cares most about bandwidth (25+ Mbps for 4K)."
  - q: "Do I need to understand networking to work in IT?"
    a: "Absolutely. Networking knowledge is foundational for almost every IT role. System administrators manage network infrastructure. Software developers need to understand how their applications communicate over networks. Security professionals must understand network protocols to protect against attacks. Even data scientists and machine learning engineers work with distributed systems. The CompTIA Network+ and Cisco CCNA certifications are excellent starting points."
---

# What Is Computer Networking?

Computer [networking](/networking) is the practice of connecting two or more computing devices to share data and resources — it's the technology that enables the internet, allows your phone to stream video, lets offices share printers and files, and makes [cloud computing](/cloud-computing) possible. Every time you load a webpage, send an email, or join a video call, computer networking is doing the heavy lifting behind the scenes.

## Why Networking Matters More Than You Think

Here's a number that puts things in perspective: as of 2025, there are roughly 30 billion connected devices on the internet. That's nearly four devices for every human on Earth. And the amount of data flowing across networks is measured in exabytes per day — that's billions of gigabytes.

Networking isn't just an IT specialty. It's the infrastructure that modern life runs on. Banking, healthcare, transportation, entertainment, communication, [government](/government) services — all of it depends on computer networks functioning correctly, securely, and efficiently.

If you're in any technology-related field, understanding networking isn't optional. If you're building [applications](/app-development), your code communicates over networks. If you're concerned about [security](/computer-security), you need to know how networks can be attacked. If you're managing systems, networks are what connect them. Even if you're just a user, understanding basics like IP addresses, DNS, and Wi-Fi helps you troubleshoot problems and make better decisions.

## The OSI Model: Networking's Layered [Architecture](/architecture)

Networks are complex systems. To make them manageable, engineers organize them into layers. The Open Systems Interconnection (OSI) model defines seven layers, each handling a specific aspect of communication.

### Layer 1: Physical

The actual physical stuff — electrical signals on copper cables, light pulses in fiber optic cables, radio waves for Wi-Fi. This layer defines voltages, frequencies, cable specifications, and connector types.

Ethernet cables (Cat5e, Cat6, Cat6a) carry signals up to 10 Gbps over copper. Fiber optic cables use light and can carry data hundreds of kilometers at speeds exceeding 100 Gbps. Wi-Fi uses radio frequencies (2.4 GHz and 5 GHz bands, plus 6 GHz for Wi-Fi 6E/7).

### Layer 2: Data Link

This layer handles communication between directly connected devices. It uses MAC (Media Access Control) addresses — unique 48-bit hardware identifiers burned into every network device. Your laptop's Wi-Fi card has a MAC address. Your phone has one. Your smart refrigerator has one.

Ethernet is the dominant Layer 2 protocol for wired networks. Switches operate at this layer, forwarding frames (packets of data with MAC address headers) to the correct port based on MAC address tables.

### Layer 3: Network

This is where IP addresses live. Layer 3 handles routing — getting data from one network to another, potentially across multiple intermediate networks. Routers operate here.

IP (Internet Protocol) is the Layer 3 protocol that makes the internet possible. IPv4 uses 32-bit addresses (about 4.3 billion unique addresses — not enough for 30 billion devices). IPv6 uses 128-bit addresses (340 undecillion addresses — enough for every atom on Earth's surface to have its own IP).

### Layer 4: Transport

Transport layer protocols manage end-to-end communication between applications:

**TCP (Transmission Control Protocol)** — reliable, ordered delivery. TCP establishes a connection, numbers every packet, tracks acknowledgments, and retransmits lost packets. Used for web browsing, email, file transfers — anything where every byte must arrive correctly.

**UDP (User Datagram Protocol)** — fast, unreliable delivery. UDP just sends packets without establishing a connection or tracking delivery. Used for video streaming, online [gaming](/gaming), DNS queries, and VoIP — situations where speed matters more than perfection and the occasional dropped packet is acceptable.

### Layers 5-7: Session, Presentation, Application

In practice, these upper layers are often lumped together. They handle session [management](/management), data formatting/encryption, and application-specific protocols:

- **HTTP/HTTPS** — web traffic
- **SMTP/IMAP/POP3** — email
- **FTP/SFTP** — file transfer
- **DNS** — domain name resolution
- **SSH** — secure remote access
- **MQTT** — IoT device communication

The OSI model is a conceptual framework. Real-world networking uses the TCP/IP model, which condenses seven layers into four: Link, Internet, Transport, and Application. But the OSI model remains invaluable for understanding and troubleshooting network problems — you can systematically isolate which layer is causing an issue.

## How the Internet Actually Works

The internet feels like magic, but it's really just a lot of cables, routers, and agreed-upon rules. Let's trace what happens when you type a URL into your browser.

### Step 1: DNS Resolution

You type "whatis.site" into your browser. But computers communicate using IP addresses, not names. Your computer contacts a DNS (Domain Name System) server to translate the human-readable name into an IP address.

DNS is essentially the internet's phone book. It's a distributed, hierarchical system. Your request might go through several DNS servers: your ISP's local resolver, a root name server, the .site top-level domain server, and finally the authoritative name server for whatis.site. Each step narrows down the answer until you get the IP address.

This process usually takes 20-100 milliseconds. Your computer caches the result so subsequent visits are faster.

### Step 2: TCP Connection

With the IP address in hand, your browser establishes a TCP connection to the web server. This uses a three-way handshake:

1. Your computer sends a SYN (synchronize) packet
2. The server responds with SYN-ACK (synchronize-acknowledge)
3. Your computer sends ACK (acknowledge)

Connection established. This takes one round trip — if the server is 50ms away, you've spent 50ms just setting up the connection before any data flows.

### Step 3: TLS Handshake (for HTTPS)

If the site uses HTTPS (and in 2026, over 95% of web traffic does), there's an additional handshake to establish encrypted communication. The TLS handshake negotiates encryption [algorithms](/algorithms), verifies the server's identity using certificates, and establishes session keys. This adds another 1-2 round trips.

### Step 4: HTTP Request and Response

Your browser sends an HTTP request: "GET /index.html, please." The server processes the request and sends back the HTML, along with headers indicating content type, caching rules, and other metadata.

The HTML references additional resources — CSS files, JavaScript, images, fonts. Your browser requests each one. Modern browsers open multiple parallel TCP connections and use HTTP/2 or HTTP/3 multiplexing to request many resources simultaneously.

### Step 5: Packets and Routing

The server's response is broken into packets — typically 1,500 bytes each (the standard Maximum Transmission Unit for Ethernet). Each packet gets IP headers (source and destination addresses) and TCP headers (sequence numbers, checksums).

These packets travel from the server through a series of routers. Each router examines the destination IP address, consults its routing table, and forwards the packet to the next hop. The packet might traverse 10-20 routers between a server in Virginia and your laptop in California.

Packets might take different paths through the network. They might arrive out of order. Some might get lost. TCP handles all of this — it reorders packets, detects and retransmits lost ones, and delivers a complete, ordered stream of data to your browser.

## Network Devices: The Hardware of Networking

### Switches

Switches connect devices within a local network (LAN). They operate at Layer 2, using MAC address tables to forward frames only to the intended recipient. A 48-port switch in an office connects all the computers, phones, and printers on that floor.

Managed switches add features like VLANs (virtual LANs that logically separate traffic), quality of service (QoS) prioritization, and monitoring. Unmanaged switches are simpler — just plug in and go.

### Routers

Routers connect different networks together. They operate at Layer 3, using IP addresses and routing tables to forward packets between networks. Your home router connects your local network to your ISP's network.

Enterprise routers handle complex routing protocols (BGP, OSPF) that dynamically determine the best path for data across large networks. Internet backbone routers process millions of packets per second, maintaining routing tables with hundreds of thousands of entries.

### Access Points

Wireless access points broadcast Wi-Fi signals, letting wireless devices connect to the wired network. Your home "Wi-Fi router" is actually a router, switch, access point, firewall, and DHCP server combined into one box.

Enterprise environments use multiple access points managed by a wireless controller, providing seamless roaming as you walk through a building. Modern Wi-Fi 6E and Wi-Fi 7 access points support hundreds of simultaneous clients.

### Firewalls

Firewalls inspect network traffic and allow or block it based on rules. They're the gatekeepers between trusted internal networks and the untrusted internet.

**Packet-filtering firewalls** examine individual packets based on IP addresses and port numbers.

**Stateful firewalls** track connection states and can make smarter decisions (allowing reply packets for connections initiated internally, for example).

**Next-generation firewalls (NGFWs)** add deep packet inspection, [intrusion detection](/intrusion-detection), application awareness, and threat intelligence. They don't just look at addresses and ports — they understand the actual content and context of traffic.

## Network Protocols: The Rules of Communication

Protocols are agreed-upon rules for how devices communicate. Without them, networking would be impossible — every device would speak a different language.

### TCP/IP: The Foundation

TCP/IP (Transmission Control Protocol / Internet Protocol) is the protocol suite that underlies the internet. IP handles addressing and routing. TCP handles reliable delivery. Together, they provide the fundamental communication mechanism for the internet.

Every device on the internet runs TCP/IP. Every web request, email, file download, and video stream uses it. It's arguably the most important protocol ever designed.

### HTTP/HTTPS: The Web

HTTP (Hypertext Transfer Protocol) defines how web browsers and servers communicate. HTTPS adds encryption via TLS, protecting data in transit from eavesdropping and tampering.

HTTP/1.1 (1997) sends requests sequentially on each connection. HTTP/2 (2015) introduced multiplexing — multiple requests on a single connection. HTTP/3 (2022) uses QUIC, a new transport protocol built on UDP instead of TCP, reducing connection setup time and improving performance on unreliable networks.

### DHCP: Automatic Configuration

DHCP (Active Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to devices when they join a network. Without DHCP, you'd manually configure every device — impractical for any network larger than a few devices.

When you connect to a Wi-Fi network and your phone "just works," DHCP is why.

### BGP: The Internet's Routing Protocol

Border Gateway Protocol is how the internet's major networks (Autonomous Systems) share routing information. ISPs, cloud providers, and content delivery networks use BGP to announce which IP address ranges they can reach and find optimal paths between networks.

BGP is often called the most important protocol most people have never heard of. When it malfunctions — through misconfiguration, route leaks, or hijacking — entire sections of the internet can become unreachable. The 2021 Facebook outage, which took the platform offline for over six hours, was caused by a BGP configuration error.

## Local Area Networks (LANs) and Wide Area Networks (WANs)

### LANs

A LAN connects devices in a limited area — an office, a building, a home. Ethernet and Wi-Fi are the dominant LAN technologies. LANs offer high speeds (1-10 Gbps wired, up to 46 Gbps for Wi-Fi 7) and low latency (under 1 ms).

VLANs (Virtual LANs) logically segment a physical network. An office might put [accounting](/accounting), [engineering](/engineering), and guest devices on separate VLANs for security and traffic management, even though they're all connected to the same physical switches.

### WANs

A WAN spans large geographic areas, connecting LANs across cities, countries, or the globe. The internet itself is the largest WAN. Organizations use dedicated WAN connections (MPLS, leased lines) or VPN tunnels over the internet to connect offices.

SD-WAN (Software-Defined Wide Area Network) has become the standard enterprise approach, using software to intelligently route traffic across multiple WAN connections (broadband internet, MPLS, LTE) based on application requirements and link conditions.

## Wireless Networking

### Wi-Fi Standards

Wi-Fi standards have evolved through generations:

- **Wi-Fi 4** (802.11n, 2009) — up to 600 Mbps, 2.4/5 GHz
- **Wi-Fi 5** (802.11ac, 2014) — up to 3.5 Gbps, 5 GHz
- **Wi-Fi 6** (802.11ax, 2020) — up to 9.6 Gbps, 2.4/5 GHz, much better in crowded environments
- **Wi-Fi 6E** (2021) — extends Wi-Fi 6 into the 6 GHz band, adding massive spectrum
- **Wi-Fi 7** (802.11be, 2024) — up to 46 Gbps theoretical, multi-link operation, extremely low latency

Each generation improves speed, capacity, and efficiency. But the real-world benefit often comes from better performance in dense environments (apartments, offices, stadiums) rather than peak speeds — most people's internet connection is the bottleneck, not their Wi-Fi.

### Cellular Networks

5G cellular networks provide mobile networking with speeds up to several gigabits per second and latency as low as 1 ms. 5G is increasingly used as a primary or backup internet connection, especially in areas where fiber isn't available.

Private 5G networks are being deployed in factories, warehouses, and campuses where reliable, low-latency wireless connectivity is critical.

## Cloud Computing and Networking

Cloud computing — [running](/running) workloads on rented infrastructure from providers like AWS, Azure, and Google Cloud — has fundamentally changed networking requirements.

**Virtual Private Clouds (VPCs)** create isolated network environments in the cloud. You define subnets, routing tables, and security groups just like a physical network, but everything is virtual.

**Load balancers** distribute incoming traffic across multiple servers. When millions of users hit a website simultaneously, load balancers ensure no single server is overwhelmed.

**Content Delivery Networks (CDNs)** cache content at servers distributed globally. When you watch a YouTube video, you're probably streaming from a CDN server in your city, not from YouTube's origin server thousands of miles away. This reduces latency and backbone bandwidth consumption.

**DNS-based routing** can direct users to the geographically closest server, the least loaded server, or the healthiest server — all transparently.

## [Network Security](/network-security) Fundamentals

Networks are attack surfaces. Every connected device is potentially reachable by every other connected device on the internet (unless firewalls intervene). Understanding [network security](/computer-security) is non-negotiable for anyone managing or building networked systems.

### Common Threats

**DDoS (Distributed Denial of Service)** — overwhelming a target with traffic from thousands of compromised devices. Major attacks can exceed 1 Tbps of traffic.

**Man-in-the-middle attacks** — intercepting communication between two parties. HTTPS largely prevents this for web traffic, but poorly configured networks remain vulnerable.

**DNS poisoning** — corrupting DNS responses to redirect users to malicious sites.

**Network scanning and exploitation** — automated tools scanning for devices with known vulnerabilities, open ports, or weak passwords.

### Defense Strategies

**Zero-trust networking** — never trust anything based on network location alone. Verify every access request regardless of whether it originates inside or outside the network perimeter.

**Network segmentation** — separating critical systems from general-purpose networks. If an attacker compromises a workstation, segmentation prevents lateral movement to servers holding sensitive data.

**Encryption everywhere** — TLS for web traffic, IPsec or WireGuard for VPN tunnels, encrypted DNS (DoH, DoT). Encryption ensures that even intercepted traffic is unreadable.

**Monitoring and logging** — network monitoring tools (SIEM systems, IDS/IPS) that detect suspicious patterns and alert administrators to potential breaches.

## Network Troubleshooting: Essential Skills

When something goes wrong on a network — and it will — systematic troubleshooting is essential.

**ping** — tests whether a destination is reachable. If ping fails, the problem is at Layer 3 or below.

**traceroute** (tracert on Windows) — shows the path packets take and where delays occur. If a traceroute shows high latency at a specific hop, you've found your bottleneck.

**nslookup/dig** — tests DNS resolution. If a website is unreachable but its IP address works directly, DNS is the problem.

**netstat/ss** — shows active connections and listening ports on your machine. Useful for diagnosing application connectivity issues.

**Wireshark** — captures and analyzes individual packets. The nuclear option for network troubleshooting — it sees everything. Invaluable when protocol-level problems need diagnosis.

Working through the OSI layers systematically — "Is the cable connected? Is the link up? Can I reach the gateway? Can I reach the destination? Is the application listening?" — will solve most network problems methodically.

## The Future of Networking

**Wi-Fi 7 and beyond** — continued speed and capacity improvements, with latency approaching wired performance.

**400G and 800G Ethernet** — data centers are moving to 400 Gbps and 800 Gbps links between switches and servers. Terabit Ethernet is being standardized.

**Intent-based networking** — describing what you want the network to do (in plain English or policy language) and letting software configure it automatically. Less manual switch and router configuration, more declared outcomes.

**Network as Code** — managing network infrastructure through version-controlled configuration files, just like [software development](/agile-software-development) manages application code. Changes go through review, testing, and automated deployment.

**Quantum networking** — early-stage research into networks that use quantum entanglement for theoretically unhackable communication. Decades from practical deployment but actively researched.

## Key Takeaways

Computer networking is the invisible infrastructure enabling modern digital life. From the physical cables and radio waves at Layer 1 to the HTTP requests at Layer 7, networking connects billions of devices into a functioning system.

The core concepts — IP addressing, routing, TCP/UDP, DNS, firewalls — haven't changed fundamentally in decades, even as speeds have increased by orders of magnitude. Understanding these fundamentals gives you the tools to build, secure, troubleshoot, and reason about any networked system.

Whether you're building a [web application](/app-development), managing enterprise IT, studying [computer science](/computer-science), or just trying to figure out why your Wi-Fi is slow, networking knowledge is the foundation you'll keep coming back to.
