---
title: "What Is Intrusion Detection?"
slug: intrusion-detection
description: "Intrusion detection is the process of monitoring networks and systems for unauthorized access, malicious activity, or policy violations using automated tools."
category: technology
tags: ["intrusion detection", "ids", "cybersecurity", "network security", "cyber threats", "security monitoring", "anomaly detection"]
heroImage: "/images/articles/intrusion-detection-hero.webp"
heroAlt: "Network security monitoring dashboard showing traffic analysis and alert indicators"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2536
tier: "2"
relatedArticles: ["algorithms", "machine-learning", "electronics", "app-development", "fiber-optics"]
externalSources:
  - title: "NIST - Intrusion Detection and Prevention Systems"
    url: "https://csrc.nist.gov/publications/detail/sp/800-94/rev-1/draft"
  - title: "CISA - Cybersecurity Resources"
    url: "https://www.cisa.gov/cybersecurity"
  - title: "MITRE ATT&CK Framework"
    url: "https://attack.mitre.org/"
  - title: "SANS Institute - Intrusion Detection FAQ"
    url: "https://www.sans.org/information-security-policy/"
faq:
  - q: "What is the difference between IDS and IPS?"
    a: "An Intrusion Detection System (IDS) monitors traffic and alerts security teams when it detects suspicious activity, but it does not block the traffic. An Intrusion Prevention System (IPS) does the same monitoring but can also automatically block or drop malicious traffic in real time. IDS is passive (detect and alert), IPS is active (detect and respond). Many modern systems combine both functions."
  - q: "Can an IDS detect all attacks?"
    a: "No. No IDS can detect every attack. Signature-based systems miss new or unknown attacks (zero-days). Anomaly-based systems generate false positives and can be evaded by attackers who mimic normal behavior. Encrypted traffic is difficult to inspect without decryption. Skilled attackers specifically design their techniques to evade detection. IDS is one layer of defense, not a complete solution."
  - q: "How much does an intrusion detection system cost?"
    a: "Costs range from free (open-source tools like Snort, Suricata, or Zeek) to hundreds of thousands of dollars for enterprise solutions from vendors like Palo Alto Networks, Cisco, or CrowdStrike. The biggest cost is usually not the software but the skilled analysts needed to investigate alerts — a security analyst's salary averages $80,000-120,000 annually. Managed detection services typically cost $5,000-50,000 per month."
  - q: "Do small businesses need intrusion detection?"
    a: "Yes. Small businesses are frequent targets precisely because attackers assume they have weaker security. The 2023 Verizon Data Breach Investigations Report found that 43% of cyberattacks target small businesses. At minimum, small businesses should use a firewall with IPS capabilities, endpoint detection on all computers, and a managed security service. Open-source tools like Snort can provide basic IDS at minimal cost."
---

# What Is Intrusion Detection?

Intrusion detection is the practice of monitoring computer networks and systems for signs of unauthorized access, malicious activity, or security policy violations. An Intrusion Detection System (IDS) is the tool that does this monitoring — think of it as a security camera system for your network, constantly watching traffic and behavior for anything suspicious.

Here's the uncomfortable reality that makes intrusion detection necessary: preventing all attacks is impossible. No matter how strong your firewalls, how updated your software, or how careful your employees, determined attackers will eventually find a way in. The average time to detect a data breach in 2023 was 204 days, according to IBM. That's nearly seven months of an attacker wandering through your systems before anyone noticed. Intrusion detection exists to shrink that window as close to zero as possible.

## How Intrusion Detection Works

Fundamentally, an IDS examines network traffic, system logs, or endpoint activity and compares what it sees against definitions of what's "bad" or "abnormal." When it finds a match, it generates an alert. The approaches to defining "bad" vary significantly.

### Signature-Based Detection

Signature-based detection works like antivirus software: it maintains a database of known attack patterns (signatures) and flags traffic that matches. If an attacker tries to exploit a known vulnerability in Apache web servers, and that exploit has a known signature — a specific sequence of bytes in the network packet — the IDS recognizes it and alerts.

Signatures are precise and fast. A signature-based system processing tens of gigabits per second can match thousands of patterns in real time. False positive rates are generally low because signatures describe specific, known malicious patterns.

The weakness is obvious: signature-based detection can't catch what it doesn't know about. New attacks (zero-day exploits) have no signature yet. Attackers can modify known attacks slightly — changing a few bytes, encoding differently, splitting payloads across multiple packets — to evade signature matching. It's an arms race, and the attacker has the advantage of initiative.

**Snort**, created by Martin Roesch in 1998 and now maintained by Cisco, is the most widely used open-source signature-based IDS. Its rule format has become a de facto standard — many commercial products can import Snort rules. The Snort community maintains over 30,000 detection rules, updated frequently as new threats emerge.

### Anomaly-Based Detection

Anomaly-based detection takes a fundamentally different approach: instead of defining what's bad, it defines what's normal — then flags anything that deviates significantly.

The system first establishes a baseline of normal behavior during a training period. This baseline captures typical patterns: which users log in at which times, what kinds of network traffic are normal, how much data typically flows to which destinations, what processes normally run on which servers.

Once the baseline is established, the IDS monitors for deviations. A user who normally logs in from New York at 9 AM suddenly logging in from Romania at 3 AM? Flagged. A server that normally sends 50 MB per hour suddenly uploading 5 GB? Flagged. A process that's never been seen before executing on a critical server? Flagged.

The strength of anomaly detection is its ability to catch novel attacks — things that have no signature because they've never been seen before. It can detect insider threats, zero-day exploits, and unusual data exfiltration patterns.

The weakness is false positives. Normal behavior changes all the time. An employee travels overseas (legitimate login from an unusual location). A software update changes network patterns. A marketing campaign drives unusual web traffic. Each deviation triggers an alert that an analyst must investigate. If the false positive rate is too high, analysts develop "alert fatigue" and start ignoring alerts — which is exactly how real attacks get missed.

### Protocol Analysis

Some IDS systems focus on understanding the protocols being used and detecting violations. HTTP traffic should follow HTTP rules. DNS queries should have certain characteristics. If traffic claims to be HTTP but contains non-HTTP data, something suspicious is happening.

Protocol analysis is particularly effective at detecting protocol-level attacks — malformed packets designed to crash systems, tunneling (hiding forbidden traffic inside allowed protocols), and protocol anomalies that indicate exploitation attempts.

**Zeek** (formerly Bro), created by Vern Paxson at Berkeley in 1994, excels at protocol analysis. Rather than just matching patterns, Zeek deeply parses network protocols and generates rich metadata about network activity — connection logs, DNS queries, HTTP sessions, file transfers, SSL certificates, and more. Security analysts use this metadata for investigation and threat hunting.

## Types of Intrusion Detection Systems

IDS systems are categorized by what they monitor and where they sit.

### Network-Based IDS (NIDS)

A network-based IDS monitors network traffic flowing through a specific point — typically by examining traffic on a network switch port configured to mirror all traffic, or by sitting inline between network segments.

NIDS sees everything crossing the network: web browsing, email, file transfers, DNS queries, database connections. It can detect attacks against multiple systems simultaneously, identify network-level attacks (port scans, DDoS patterns), and spot lateral movement between compromised systems.

The challenge is scale. Modern networks carry enormous volumes of traffic. A NIDS monitoring a 10 Gbps link needs to process over a billion bytes per second. Keeping up requires specialized hardware or distributed architectures. Encrypted traffic (which now constitutes over 90% of web traffic) is another challenge — NIDS can't inspect what it can't read without deploying TLS inspection, which introduces its own complexity and performance costs.

### Host-Based IDS (HIDS)

A host-based IDS monitors activity on a single computer: system logs, file integrity, registry changes, process execution, user activity, and system calls.

HIDS can detect attacks that don't cross the network — a malicious USB drive, a local privilege escalation, or file tampering. It can monitor encrypted traffic at the endpoint where it's decrypted. And it provides detailed visibility into what's happening on critical servers.

The trade-off: you need to install and maintain HIDS software on every monitored system. On a network with thousands of servers and endpoints, that's significant management overhead. HIDS also consumes resources on the monitored system, which matters for performance-sensitive servers.

**OSSEC** (now Wazuh) is the most widely deployed open-source HIDS, monitoring file integrity, logs, and rootkit detection across thousands of endpoints.

### Endpoint Detection and Response (EDR)

EDR is essentially host-based IDS evolved. It monitors endpoints (laptops, desktops, servers) for malicious behavior, provides forensic data for investigation, and often includes response capabilities (isolating a compromised machine, killing malicious processes).

CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, and Carbon Black are major EDR platforms. They use a combination of signature detection, behavioral analysis, and increasingly, [machine learning](/machine-learning) to identify threats.

EDR has become the standard for endpoint security in enterprises, largely replacing traditional antivirus. The shift reflects a reality: traditional AV (which relies on file signatures) can't keep up with modern malware. EDR monitors behavior — what a program does after it executes — which is much harder for attackers to evade.

### Wireless IDS

Wireless IDS monitors Wi-Fi traffic for rogue access points, deauthentication attacks, unauthorized connections, and other wireless-specific threats. In an era where employees connect to corporate networks via Wi-Fi, the wireless attack surface is significant.

## Detection vs. Prevention: IDS vs. IPS

An IDS detects and alerts. An IPS (Intrusion Prevention System) detects and blocks.

The distinction matters. An IDS sits passively, monitoring a copy of network traffic. If it detects something malicious, it sends an alert, but the malicious traffic has already passed through. An IPS sits inline — directly in the traffic path — and can drop or modify malicious packets before they reach their target.

IPS is obviously more powerful, but it carries risk. A false positive on an IDS means an analyst wastes time investigating. A false positive on an IPS means legitimate traffic gets blocked — potentially taking down business-critical applications. Organizations must tune IPS rules carefully to avoid blocking legitimate traffic while still catching attacks.

Most modern products combine both capabilities. Enterprise firewalls from Palo Alto Networks, Fortinet, and Check Point include integrated IPS. The pure IDS market has largely merged into broader security platforms.

## The Alert Problem: Why Detection Is Hard

The technology of intrusion detection is conceptually straightforward. The operational reality is nightmarish.

### Volume

A typical enterprise IDS generates thousands to tens of thousands of alerts per day. The overwhelming majority are false positives — legitimate activity that triggered a rule. Security analysts must review, triage, and investigate these alerts, and they're outnumbered by orders of magnitude.

A 2023 survey by Trellix found that 40% of security teams reported ignoring alerts because they couldn't keep up with the volume. This is exactly the vulnerability attackers exploit — hide the real attack signal in a flood of alert noise.

### Evasion

Skilled attackers know how IDS systems work and design their techniques accordingly. Common evasion methods:

**Fragmentation**: Splitting malicious payloads across multiple packets so no single packet matches a signature.

**Encryption**: Encrypting attack traffic so NIDS can't inspect it. The growth of TLS encryption has made this trivially easy.

**Slow-and-low**: Spreading an attack over hours or days so it doesn't trigger volume-based anomaly detection. Scan one port every 10 minutes instead of all ports in one second.

**Living off the land**: Using legitimate tools already present on systems (PowerShell, WMI, legitimate remote administration tools) rather than deploying malware. If the attack looks like normal administration, anomaly detection struggles.

**Protocol manipulation**: Using legitimate protocols (DNS, HTTPS) to tunnel malicious traffic. Data exfiltration via DNS queries is surprisingly common and surprisingly difficult to detect.

### Context

An alert that says "suspicious outbound connection to IP 192.168.1.50" is useless without context. Is that IP a known malicious server? Or is it the CFO's home network? Does the user normally connect to external systems? Was there a preceding authentication event?

Modern Security Information and Event Management (SIEM) systems — like Splunk, Microsoft Sentinel, and Elastic Security — attempt to provide this context by correlating alerts from multiple sources: IDS, firewalls, endpoint agents, authentication logs, cloud services. But correlation introduces its own complexity and requires careful configuration to produce useful results rather than just more alerts.

## The Modern Detection Stack

Intrusion detection has evolved from standalone IDS appliances into a multi-layered detection architecture.

### Network Detection and Response (NDR)

NDR platforms (Darktrace, ExtraHop, Vectra) analyze network traffic using machine learning to build behavioral models of normal activity and flag deviations. They're the modern evolution of anomaly-based NIDS, with significantly better ML models and visualization tools.

### Extended Detection and Response (XDR)

XDR integrates detection across endpoints, network, email, cloud workloads, and identity systems into a single platform. Instead of investigating alerts from five different tools, analysts see correlated incidents across all data sources. CrowdStrike, Microsoft, Palo Alto Networks, and SentinelOne all offer XDR platforms.

### Security Orchestration, Automation, and Response (SOAR)

SOAR platforms automate the response to common alert types. If the IDS detects a known phishing pattern, SOAR can automatically quarantine the email, block the sender's IP, scan endpoints for indicators of compromise, and create an incident ticket — all without human intervention. This addresses the volume problem by automating routine responses so analysts can focus on complex threats.

### Threat Intelligence

Threat intelligence feeds provide up-to-date information about known malicious IPs, domains, file hashes, and attack techniques. Integrating threat intelligence with IDS dramatically improves detection accuracy — an alert about a connection to a known command-and-control server is much more actionable than a generic anomaly alert.

The MITRE ATT&CK framework has become the standard language for describing attack techniques. It catalogs hundreds of specific tactics and techniques used by real-world attackers, organized by attack phase (initial access, execution, persistence, lateral movement, exfiltration). IDS rules and detection logic are increasingly mapped to ATT&CK techniques, providing a common reference point.

## Building a Detection Program

For organizations implementing intrusion detection, several principles matter more than specific tools.

### Start with Visibility

You can't detect what you can't see. Before deploying detection tools, ensure you have visibility into network traffic (packet capture or flow data), endpoint activity (system logs, process execution), authentication events, cloud service usage, and email traffic. Many breaches go undetected simply because nobody was looking at the right data.

### Focus on High-Value Targets

Not all systems are equally important. A database containing customer credit card numbers requires more intensive monitoring than a break room printer. Prioritize detection coverage for systems that store sensitive data, face the internet, or have administrative access to other systems.

### Assume Breach

The most effective detection programs assume attackers are already inside the network and hunt for evidence of their presence. This mindset — proactive threat hunting rather than passive alert monitoring — catches attacks that automated tools miss.

Threat hunters use tools like Zeek, Elastic, and custom [algorithms](/algorithms) to search for indicators of compromise: unusual process execution, suspicious network connections, file modifications on critical systems, anomalous authentication patterns. It's detective work, and it requires skilled analysts with deep knowledge of both the organization's environment and attacker tradecraft.

### Measure and Improve

Detection quality should be measurable. Key metrics: mean time to detect (MTTD), mean time to respond (MTTR), false positive rate, and coverage percentage (what fraction of MITRE ATT&CK techniques can your detection stack identify?). Regular testing — including penetration testing, red team exercises, and tabletop simulations — validates that detection actually works.

## The Future of Intrusion Detection

Several trends are shaping where intrusion detection is headed.

**AI-powered detection**: Machine learning models that learn normal behavior and identify anomalies are improving rapidly. Neural networks can process vastly more data than human-written rules and potentially catch subtle patterns that signatures miss. But AI also creates new attack surfaces — adversarial machine learning techniques can deliberately mislead ML-based detectors.

**Cloud-native detection**: As workloads move to cloud platforms, detection must follow. Cloud-native IDS monitors API calls, container activity, serverless function execution, and cloud configuration changes — a fundamentally different data set than traditional network traffic.

**Zero-trust architecture**: The zero-trust model (never trust, always verify) shifts security from perimeter-based (firewalls at the network edge) to identity-based (verify every access request). Intrusion detection in a zero-trust world focuses heavily on authentication anomalies, access pattern analysis, and continuous verification.

**Automated response**: The gap between detection and response continues to narrow. Fully automated response to common attack patterns — containing compromised endpoints, blocking malicious IPs, revoking stolen credentials — reduces the window of exposure from hours to seconds.

## Key Takeaways

Intrusion detection is the practice of monitoring networks and systems for unauthorized access and malicious activity. It uses signature matching (comparing against known attack patterns), anomaly detection (flagging deviations from normal behavior), and protocol analysis (identifying protocol violations) to identify threats.

Modern intrusion detection extends far beyond standalone IDS appliances into integrated platforms combining network monitoring, endpoint detection, cloud workload analysis, and automated response. The fundamental challenge — detecting sophisticated attacks amid enormous volumes of normal traffic — drives continuous evolution in tools, techniques, and organizational practices.

No detection system is perfect. Skilled attackers evade signatures, mimic normal behavior, and exploit encrypted channels. But the alternative to imperfect detection is no detection at all, and 204 days of unnoticed breach is a luxury no organization can afford.
