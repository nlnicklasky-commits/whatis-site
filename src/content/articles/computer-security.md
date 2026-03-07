---
title: "What Is Computer Security?"
slug: computer-security
description: "Computer security protects systems, networks, and data from unauthorized access, cyberattacks, and theft through encryption, authentication, and defense."
category: technology
tags: ["cybersecurity", "information security", "data privacy", "network security", "malware", "encryption", "it security"]
heroImage: "/images/articles/computer-security-hero.webp"
heroAlt: "Digital shield protecting a network of connected devices from cyber threats"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2778
tier: "2"
relatedArticles: ["computer-networking", "computer-science", "algorithms", "blockchain"]
externalSources:
  - title: "NIST Cybersecurity Framework"
    url: "https://www.nist.gov/cyberframework"
  - title: "OWASP - Open Web Application Security Project"
    url: "https://owasp.org/"
  - title: "CISA - Cybersecurity and Infrastructure Security Agency"
    url: "https://www.cisa.gov/"
  - title: "MITRE ATT&CK Framework"
    url: "https://attack.mitre.org/"
  - title: "Krebs on Security"
    url: "https://krebsonsecurity.com/"
faq:
  - q: "What is the difference between computer security and cybersecurity?"
    a: "The terms are often used interchangeably, but computer security traditionally focuses on protecting individual computer systems and their data, while cybersecurity is the broader term that includes protecting networks, cloud infrastructure, IoT devices, and the entire digital ecosystem from threats. In practice, most professionals use 'cybersecurity' as the umbrella term covering all digital security concerns."
  - q: "What is the most common type of cyberattack?"
    a: "Phishing — fraudulent emails, texts, or messages that trick people into revealing passwords, clicking malicious links, or downloading malware. Phishing accounts for over 80% of reported security incidents according to multiple industry reports. It targets the human element, which is typically the weakest link in any security system. Even technically sophisticated organizations regularly fall victim to well-crafted phishing campaigns."
  - q: "Do I really need a password manager?"
    a: "Yes. The average person has 80-100 online accounts. Using unique, strong passwords for each one is impossible without a password manager. Reusing passwords means that when one service gets breached (and they do — billions of credentials have leaked), attackers can access all your other accounts. Password managers like Bitwarden, 1Password, and KeePass generate and store unique passwords for every site, secured behind one master password."
  - q: "Is antivirus software still necessary?"
    a: "Yes, but it's not sufficient by itself. Modern antivirus (now called endpoint protection) detects known malware, suspicious behavior, and potentially unwanted programs. Windows Defender (built into Windows) is genuinely good and adequate for most people. But antivirus alone won't protect against phishing, social engineering, zero-day exploits, or poor security practices. Think of it as one layer in a defense-in-depth strategy."
  - q: "How do data breaches happen?"
    a: "Most data breaches result from exploiting known vulnerabilities in unpatched software, stolen or weak credentials (often from phishing), misconfigured cloud services (like publicly accessible databases), insider threats (malicious or negligent employees), or supply chain attacks (compromising a trusted vendor). The Verizon Data Breach Investigations Report consistently finds that the vast majority of breaches use relatively simple attack methods — they succeed because basic security practices weren't followed."
---

# What Is Computer Security?

Computer security — also called cybersecurity or information security — is the practice of protecting computer systems, networks, and data from unauthorized access, theft, damage, and disruption. It encompasses the technologies, processes, and practices designed to defend digital assets against a constantly shifting range of threats, from lone hackers to nation-state cyber operations.

## The Scale of the Problem

Let me hit you with some numbers, because the scale of cybersecurity threats is genuinely alarming.

Global cybercrime costs exceeded $8 trillion in 2023 and are projected to reach $10.5 trillion annually by 2025, according to Cybersecurity Ventures. If cybercrime were a country, it would have the third-largest economy on Earth, behind only the United States and China.

In 2023, the average cost of a data breach was $4.45 million (IBM Security). Ransomware attacks hit a new target every 11 seconds. Over 30 billion records were exposed through data breaches in a single year.

And here's what's sobering: the attackers are getting better, faster, and more organized. State-sponsored hacking groups operate with military-level resources. Ransomware-as-a-Service lets technically unsophisticated criminals deploy sophisticated attacks. AI-generated phishing emails are increasingly indistinguishable from legitimate communications.

This isn't fear-mongering. It's the operating environment that every person, business, and government faces.

## The CIA Triad: Security's Foundation

Every security decision ultimately traces back to three principles, known as the CIA triad:

**Confidentiality** — ensuring information is accessible only to authorized parties. Your medical records should be readable by your doctor, not by random strangers. Encryption, access controls, and authentication protect confidentiality.

**Integrity** — ensuring information hasn't been altered by unauthorized parties. When your bank shows your balance, you need to trust that number hasn't been tampered with. Checksums, digital signatures, and audit logs protect integrity.

**Availability** — ensuring systems and data are accessible when needed. A hospital's patient records system must be available 24/7. Redundancy, backups, and DDoS protection ensure availability.

Every attack targets at least one of these. Ransomware attacks availability (encrypting your data so you can't use it). Data breaches target confidentiality (exposing private information). Man-in-the-middle attacks target integrity (modifying data in transit).

Good security balances all three — and accepts that perfect security is impossible. The goal is making attacks sufficiently difficult, expensive, and detectable that most attackers go elsewhere.

## Types of Threats: Know Your Enemy

### Malware

Malware — malicious software — is the broad category covering any software designed to harm systems or users.

**Viruses** attach to legitimate programs and spread when the infected program runs. Once dominant, now less common due to improved operating system protections.

**Worms** spread automatically across [networks](/computer-networking) without user interaction. The WannaCry worm (2017) infected over 200,000 computers across 150 countries in days, encrypting files and demanding Bitcoin ransom. It exploited a known Windows vulnerability that many organizations hadn't patched.

**Trojans** disguise themselves as legitimate software. You think you're installing a free game; you're actually installing a backdoor that gives attackers remote access to your machine.

**Ransomware** encrypts your files and demands payment for the decryption key. It has become the most profitable cybercrime model. The Colonial Pipeline attack (2021) shut down the largest fuel pipeline in the United States. The attacker gained access through a single compromised password on an unused VPN account.

**Spyware** silently monitors your activity — keystrokes, browsing history, screenshots. Pegasus spyware, developed by NSO Group, could infect phones through zero-click exploits (no user interaction required) and access virtually everything on the device.

**Rootkits** hide deep in the operating system, making themselves invisible to normal detection tools. They're the hardest malware to detect and remove.

### Social Engineering

The most effective attacks don't target [computer hardware](/computer-hardware) — they target people.

**Phishing** sends fraudulent messages mimicking trusted entities (your bank, your boss, Google) to trick you into revealing credentials or installing malware. Spear phishing targets specific individuals with personalized messages, making them much harder to spot.

**Business Email Compromise (BEC)** impersonates executives or vendors to authorize fraudulent wire transfers. The FBI reported $2.7 billion in BEC losses in 2022 alone.

**Pretexting** creates fabricated scenarios to manipulate victims. "Hi, this is IT support. We detected unusual activity on your account and need your password to investigate." Sounds plausible. Works disturbingly often.

**Baiting** leaves infected USB drives in parking lots or common areas, counting on human curiosity. Studies show 45-98% of dropped USB drives get plugged into computers.

Social engineering works because humans have predictable psychological responses: urgency, authority, fear, curiosity, helpfulness. Technical defenses can't fully protect against attacks that exploit human psychology.

### Network Attacks

**DDoS (Distributed Denial of Service)** floods targets with traffic from thousands of compromised devices (botnets), overwhelming servers and making services unavailable. Attacks exceeding 1 Tbps are increasingly common. Cloudflare reported mitigating a 71 million request-per-second DDoS attack in 2023.

**Man-in-the-Middle (MitM)** intercepts communication between two parties. On an unsecured public Wi-Fi network, an attacker can potentially see all unencrypted traffic. HTTPS has made MitM attacks against web traffic much harder, but misconfigured applications and non-web protocols remain vulnerable.

**DNS attacks** manipulate domain name resolution to redirect users to malicious sites. You type your bank's URL, but DNS poisoning sends you to a convincing fake that steals your credentials.

**SQL injection** inserts malicious database commands through web application inputs. If a login form doesn't properly sanitize input, an attacker can type SQL commands instead of a username and extract or modify the entire database. Despite being well-understood since the 1990s, SQL injection remains in the OWASP Top 10 because developers keep making the same mistakes.

### Advanced Persistent Threats (APTs)

APTs are sophisticated, long-term campaigns — typically by nation-states or well-funded groups — that infiltrate networks and remain hidden for months or years. The goal isn't quick profit; it's sustained intelligence gathering, intellectual property theft, or pre-positioning for future disruption.

The SolarWinds attack (discovered December 2020) compromised a widely-used IT management platform, giving attackers access to approximately 18,000 organizations, including multiple U.S. government agencies. The attackers were inside for over nine months before detection.

## Defensive Technologies: The Arsenal

### Encryption

Encryption transforms readable data (plaintext) into unreadable data (ciphertext) using mathematical [algorithms](/algorithms). Only someone with the correct key can reverse the process.

**Symmetric encryption** (AES-256) uses the same key for encryption and decryption. Fast and efficient for large data. The challenge: how do you securely share the key?

**Asymmetric encryption** (RSA, ECC) uses a pair of keys — a public key for encryption and a private key for decryption. Slower but solves the key distribution problem. You publish your public key; anyone can encrypt messages to you. Only your private key can decrypt them.

**TLS (Transport Layer Security)** combines both: asymmetric encryption establishes a session key, then symmetric encryption protects the actual data. Every HTTPS connection uses this.

**End-to-end encryption** (Signal, WhatsApp) encrypts data on the sender's device and decrypts only on the recipient's device. Not even the service provider can read the messages. This is the strongest protection for communication privacy.

### Authentication

Authentication verifies that you are who you claim to be. It's the gatekeeper for every system.

**Passwords** remain the most common authentication method and the weakest link. The average data breach exposes millions of credentials. People reuse passwords. People choose weak passwords. Password databases get stolen.

**Multi-Factor Authentication (MFA)** requires something you know (password) plus something you have (phone, security key) or something you are (fingerprint, face). MFA blocks over 99% of automated attacks according to Microsoft. It's the single most effective security upgrade most people can make.

**Passkeys** (FIDO2/WebAuthn) replace passwords entirely with cryptographic keys stored on your device. You authenticate with biometrics or a PIN locally, and a cryptographic challenge-response proves your identity to the server. No password to steal, no phishing possible (the key is domain-bound). Passkeys are the future of authentication.

**Single Sign-On (SSO)** lets you authenticate once and access multiple applications. Convenient and more secure than separate passwords for each service (fewer credentials to manage means fewer to compromise). But if the SSO provider is breached, every connected application is exposed.

### Firewalls and Network Security

[Firewalls](/computer-networking) filter network traffic based on rules. Modern next-generation firewalls (NGFWs) inspect traffic at the application level, detect intrusion attempts, and integrate with threat intelligence feeds.

**Intrusion Detection Systems (IDS)** monitor network traffic for suspicious patterns. **Intrusion Prevention Systems (IPS)** actively block detected threats. Most modern solutions combine both.

**Security Information and Event Management (SIEM)** systems aggregate logs from across the network, correlate events, and alert security teams to potential incidents. A single failed login is noise. A thousand failed logins from the same IP targeting different accounts in five minutes is an attack.

**Zero Trust Architecture** — the most significant shift in network security philosophy in decades. Instead of trusting anything inside the network perimeter (the traditional "castle and moat" approach), zero trust verifies every access request regardless of source. "Never trust, always verify." Every user, device, and connection must prove authorization for every resource access.

### Endpoint Protection

Modern endpoint protection goes far beyond traditional antivirus. **Endpoint Detection and Response (EDR)** tools continuously monitor endpoint activity, detect suspicious behavior, and enable rapid investigation and response. They track process creation, file modifications, network connections, and registry changes — building a timeline of activity that analysts can investigate when something goes wrong.

**Extended Detection and Response (XDR)** expands this visibility across endpoints, networks, email, cloud services, and identity systems, correlating signals across the entire environment.

## Security Frameworks and Standards

### NIST Cybersecurity Framework

The National Institute of Standards and Technology framework organizes security activities into five functions:

1. **Identify** — understand what you need to protect (assets, risks, vulnerabilities)
2. **Protect** — implement safeguards (access controls, training, encryption)
3. **Detect** — discover security events (monitoring, anomaly detection)
4. **Respond** — take action when incidents occur (containment, analysis, communication)
5. **Recover** — restore normal operations (backup restoration, lessons learned)

### OWASP Top 10

The Open Web Application Security Project maintains a list of the ten most critical web application security risks. As of the latest update:

1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, XSS, command injection)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

If you're building web applications, knowing and mitigating these ten risks eliminates the vast majority of common vulnerabilities.

### MITRE ATT&CK

The ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) framework catalogs known attacker behaviors in a structured matrix. It maps the lifecycle of an attack from initial access through execution, persistence, privilege escalation, and exfiltration.

Security teams use ATT&CK to evaluate their defenses: "Can we detect this specific technique? Do we have visibility into this tactic?" It turns abstract threat discussions into concrete, testable questions.

## Security in Practice: What Organizations Actually Do

### Vulnerability Management

Software has bugs. Some bugs are security vulnerabilities. Vulnerability management is the continuous process of finding, assessing, and fixing them.

**Patch management** — applying security updates promptly. The majority of successful attacks exploit vulnerabilities with available patches. WannaCry exploited a vulnerability that Microsoft had patched two months before the attack spread. Organizations that had applied the patch were unaffected.

**Vulnerability scanning** — automated tools that check systems for known vulnerabilities, misconfigurations, and policy violations.

**Penetration testing** — authorized simulated attacks by security professionals who try to breach systems using the same tools and techniques as real attackers. Penetration tests find vulnerabilities that automated scanners miss.

**Bug bounty programs** — paying external researchers for responsibly reporting vulnerabilities. Google, Apple, Microsoft, and many others run these. Google has paid over $50 million in bounties since 2010.

### Incident Response

When (not if) a security incident occurs, a structured response is critical:

1. **Preparation** — plans, playbooks, and trained teams ready before incidents happen
2. **Detection and analysis** — determining what happened, when, and how bad it is
3. **Containment** — stopping the attack from spreading while preserving evidence
4. **Eradication** — removing the attacker's access and tools from the environment
5. **Recovery** — restoring systems to normal operation from known-good backups
6. **Lessons learned** — analyzing what happened and improving defenses

Organizations without incident response plans handle breaches chaotically, slowly, and expensively. Those with practiced plans contain breaches faster and reduce costs by an average of $2.66 million (IBM Security).

### Security Awareness Training

Technology alone cannot stop attacks that target human behavior. Regular security awareness training teaches employees to recognize phishing, use strong authentication, handle sensitive data properly, and report suspicious activity.

The best programs use simulated phishing campaigns to test employees in realistic scenarios. Organizations that run regular simulations see phishing click rates drop from 30-40% to under 5% over time.

## Personal Security: What You Should Actually Do

You don't need to be a security expert to protect yourself. These practices block the vast majority of consumer-level attacks:

1. **Use a password manager** and unique passwords for every account. This single action prevents the most common attack vector — credential stuffing from breached password databases.

2. **Enable MFA everywhere it's available.** Prioritize email, banking, and social media. Hardware security keys (YubiKey) are the most secure option. App-based TOTP (Google Authenticator, Authy) is very good. SMS codes are better than nothing but vulnerable to SIM-swapping attacks.

3. **Keep software updated.** Enable automatic updates on your operating system, browser, and applications. Most exploited vulnerabilities have patches available.

4. **Be skeptical of unexpected messages.** If an email creates urgency ("Your account will be locked!"), verify through a separate channel. Don't click links in unexpected emails — go to the site directly.

5. **Use HTTPS everywhere.** Modern browsers warn about non-HTTPS sites. Heed those warnings.

6. **Back up your data.** Follow the 3-2-1 rule: three copies, two different media types, one offsite. Ransomware can't hold your data hostage if you have clean backups.

7. **Encrypt your devices.** Enable full-disk encryption (BitLocker on Windows, FileVault on macOS). If your laptop is stolen, encryption prevents data access.

## The Cybersecurity Career Picture

Cybersecurity has a massive talent shortage. There are an estimated 3.5 million unfilled cybersecurity positions globally. Demand consistently outpaces supply.

Common roles include:

- **Security Analyst** — monitors alerts, investigates incidents, maintains tools
- **Penetration Tester** — simulates attacks to find vulnerabilities
- **Security Engineer** — designs and implements security systems
- **Security Architect** — designs organizational security strategy and systems
- **Incident Responder** — handles active security incidents and forensics
- **CISO (Chief Information Security Officer)** — executive leadership of security programs

Entry paths include [computer science](/computer-science) degrees, cybersecurity-specific degrees, certifications (CompTIA Security+, CISSP, CEH, OSCP), and self-study through platforms like TryHackMe, Hack The Box, and OverTheWire.

Salaries reflect the demand: entry-level security analysts earn $65,000-90,000, while experienced security architects and CISOs earn $150,000-400,000+ in major markets.

## Emerging Threats and Trends

**AI-powered attacks** — large language models generate convincing phishing emails, deepfake voices clone executives for BEC attacks, and AI automates vulnerability discovery.

**AI-powered defense** — the same technology helps defenders. AI analyzes massive log volumes, detects anomalous behavior, and accelerates incident response. The arms race between AI-powered attack and defense is the defining security contest of the 2020s.

**Quantum computing threats** — quantum computers will eventually break current public-key cryptography (RSA, ECC). Post-quantum cryptography standards (NIST finalized initial standards in 2024) are being deployed now to protect data that needs to remain confidential for decades.

**Supply chain attacks** — compromising trusted software vendors to attack their customers. SolarWinds, Codecov, and the xz Utils backdoor attempt demonstrate that even careful organizations can be compromised through their dependencies.

**IoT security** — billions of connected devices, many with minimal security. Smart cameras, industrial sensors, medical devices — each one is a potential entry point. The attack surface is growing faster than the ability to secure it.

## Key Takeaways

Computer security is an ongoing practice, not a product you install and forget. The threat environment evolves constantly, and defenses must evolve with it. The fundamentals — the CIA triad, defense in depth, least privilege, and assuming breach — provide the framework for making security decisions at every level.

For individuals, using a password manager, enabling MFA, keeping software updated, and being skeptical of unexpected messages blocks the vast majority of consumer-level attacks. For organizations, the NIST framework provides a structured approach to identifying, protecting, detecting, responding to, and recovering from security incidents.

The field is growing, well-compensated, and critically important. Every connected system — every [network](/computer-networking), every application, every device — needs security. Understanding the principles in this article won't make you a security expert, but it will make you a harder target and a more informed participant in the digital world.
