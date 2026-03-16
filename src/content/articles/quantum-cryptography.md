---
title: "What Is Quantum Cryptography?"
slug: quantum-cryptography
description: "Quantum cryptography uses the laws of physics, not math, to secure communications. Learn how quantum key distribution actually works and why it matters."
category: technology
tags: ["quantum cryptography", "quantum key distribution", "cybersecurity", "encryption", "quantum mechanics"]
heroImage: "/images/articles/quantum-cryptography-hero.webp"
heroAlt: "Editorial photograph representing the concept of quantum cryptography"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2567
tier: "2"
relatedArticles: ["cryptography", "computer-security", "quantum-computing", "computer-networking", "fiber-optics"]
externalSources:
  - title: "NIST Post-Quantum Cryptography Project"
    url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
  - title: "ID Quantique - Quantum-Safe Security"
    url: "https://www.idquantique.com/"
  - title: "ETSI Quantum Key Distribution Standards"
    url: "https://www.etsi.org/technologies/quantum-key-distribution"
  - title: "Nature - Quantum Internet"
    url: "https://www.nature.com/articles/s41586-018-0200-5"
faq:
  - q: "Is quantum cryptography unbreakable?"
    a: "Quantum key distribution (QKD) is provably secure based on the laws of physics -- any eavesdropping attempt disturbs the quantum states and is detectable. However, real-world QKD systems can have implementation vulnerabilities in the hardware or classical components. The theoretical security is absolute, but practical security depends on engineering quality."
  - q: "How is quantum cryptography different from post-quantum cryptography?"
    a: "Quantum cryptography uses quantum mechanics to distribute encryption keys (QKD). Post-quantum cryptography uses classical computers to run mathematical algorithms believed to be resistant to quantum attacks. They solve related but different problems: QKD provides physics-guaranteed security for key exchange, while post-quantum algorithms protect existing digital infrastructure without specialized hardware."
  - q: "Can I use quantum cryptography today?"
    a: "Yes, commercially available QKD systems exist from companies like ID Quantique, Toshiba, and QuantumCTek. However, they're expensive, limited in range (typically under 100 km without quantum repeaters), and primarily used by governments, banks, and critical infrastructure operators. Consumer-level quantum cryptography is likely decades away."
  - q: "Will quantum cryptography replace current encryption?"
    a: "Unlikely in the near term. QKD is best suited for high-security point-to-point links, not for everyday internet traffic. Post-quantum cryptographic algorithms, standardized by NIST in 2024, are the practical solution for most encryption needs. QKD and post-quantum cryptography will likely coexist, serving different security requirements."
---

# What Is Quantum Cryptography?

Quantum cryptography is a method of securing communications using the principles of [quantum mechanics](/quantum-mechanics) rather than mathematical complexity. Its most developed application, quantum key distribution (QKD), allows two parties to generate a shared encryption key with security guaranteed by the laws of [physics](/physics) -- not by the assumed difficulty of a math problem.

Here's why that distinction matters enormously: every encryption method you use today -- your bank's HTTPS connection, your messaging app's end-to-end encryption, your VPN -- relies on mathematical problems that are hard but not provably impossible to solve. If someone discovers a faster algorithm or builds a powerful enough [quantum computer](/quantum-computing), that security evaporates. Quantum cryptography is different. Its security is based on physical laws that cannot be broken by any computer, classical or quantum, now or ever.

That's a genuinely remarkable claim. Let's see how it works.

## The Problem Quantum Cryptography Solves

All [encryption](/cryptography) faces the same fundamental challenge: key distribution. How do two people share a secret key without an eavesdropper intercepting it?

### The Classical Approach

Modern encryption uses two approaches:

**Symmetric encryption** (like AES) uses the same key for encryption and decryption. It's fast and secure, but both parties need the same key. How do you securely share that key in the first place?

**Public key cryptography** (like RSA and elliptic curve) solves the key distribution problem mathematically. You share a public key openly, and the mathematical relationship between the public and private keys is designed so that deriving the private key from the public key is computationally infeasible.

The security of RSA depends on the difficulty of factoring large numbers. ECC depends on the discrete logarithm problem on elliptic curves. These are really, really hard problems for classical computers. But "really hard" isn't the same as "impossible."

Peter Shor proved in 1994 that a quantum computer could factor large numbers exponentially faster than classical computers. When quantum computers become powerful enough -- and this is a question of when, not if -- RSA and ECC will be broken. Every encrypted message ever sent using these methods and recorded by adversaries will become readable.

This is the "harvest now, decrypt later" threat that intelligence agencies worldwide are already [acting](/acting) on. And it's the problem that quantum cryptography aims to solve permanently.

## How Quantum Key Distribution Works

QKD doesn't encrypt messages itself. It solves the key distribution problem -- getting a shared secret key between two parties with absolute security. Once they have the key, they use standard symmetric encryption (like AES-256) for the actual communication.

### The BB84 Protocol

The first QKD protocol, BB84, was proposed by Charles Bennett and Gilles Brassard in 1984. It's conceptually elegant.

**Step 1: Sending quantum states.** Alice (the sender) creates individual photons, each prepared in one of four possible polarization states. These states come from two "bases": the rectilinear basis (horizontal or vertical) and the diagonal basis (45 degrees or 135 degrees). For each photon, Alice randomly chooses a basis and a bit value (0 or 1 within that basis).

**Step 2: Measuring.** Bob (the receiver) receives each photon and measures its polarization, randomly choosing either the rectilinear or diagonal basis for each measurement. Here's the quantum magic: if Bob chooses the same basis Alice used, he gets the correct bit value every time. If he chooses the wrong basis, quantum mechanics guarantees he gets a random result.

**Step 3: Basis comparison.** Alice and Bob publicly compare which basis they used for each photon (but NOT the bit values). They keep only the bits where they used the same basis and discard the rest. This gives them a shared string of bits -- the "sifted key."

**Step 4: Eavesdropper detection.** They sacrifice a portion of their sifted key, comparing values over the public channel. If no eavesdropper intercepted the photons, these values should match perfectly. If an eavesdropper (Eve) measured the photons, quantum mechanics guarantees she disturbed them, introducing errors that Alice and Bob can detect.

**Step 5: Privacy amplification.** If the error rate is below a threshold, Alice and Bob use classical post-processing (error correction and privacy amplification) to distill a shorter but perfectly secret key.

### Why Eavesdropping Is Detectable

This is the most important part. In classical communication, an eavesdropper can copy data without leaving any trace. She can tap a fiber optic cable, read every bit, and forward it without Alice or Bob ever knowing.

With quantum states, this is physically impossible due to two fundamental principles:

**The no-cloning theorem** states that an unknown quantum state cannot be perfectly copied. Eve cannot intercept Alice's photon, make a copy, and send the original to Bob. Quantum mechanics simply doesn't allow it.

**The measurement disturbance principle** means that measuring a quantum state generally changes it. If Eve intercepts and measures Alice's photon, she collapses it into a definite state. When she sends this photon (or a new one) to Bob, it won't correctly represent Alice's original state half the time (when Eve guessed the wrong basis). This introduces a statistically detectable error rate of approximately 25%.

So Eve faces an impossible situation. She can't copy the photons without measuring them. Measuring them disturbs them. The disturbance creates errors that Alice and Bob will detect. The laws of physics have made eavesdropping fundamentally, provably detectable.

This is what makes quantum [cryptography](/cryptography) different from every classical encryption scheme ever devised. The security isn't based on computational assumptions. It's based on quantum mechanics itself.

## Beyond BB84: Other QKD Protocols

BB84 was just the beginning. Researchers have developed numerous QKD protocols with different properties:

### E91 (Ekert Protocol)

Published by Artur Ekert in 1991, E91 uses quantum entanglement instead of prepared states. Alice and Bob each receive one photon from an entangled pair. Due to entanglement, their measurement results are correlated in ways that depend on their basis choices. Security is verified using Bell inequality tests -- if the correlations violate Bell's inequality, no eavesdropper has interfered.

The elegant feature of E91 is that eavesdropping detection is built into the fundamental physics of entanglement. It also means the source of entangled photons doesn't need to be trusted -- it could even be controlled by an adversary.

### Continuous-Variable QKD (CV-QKD)

Instead of encoding bits in the polarization of individual photons (which requires sensitive single-photon detectors), CV-QKD encodes information in the continuous properties of light pulses -- specifically, the amplitude and phase of coherent laser pulses. This is compatible with standard telecom equipment and can be easier to implement.

CV-QKD has achieved key generation over distances of 100+ km on standard telecom fiber and is considered a promising path toward more practical quantum [cryptography](/cryptography) systems.

### Measurement-Device-Independent QKD (MDI-QKD)

One vulnerability in practical QKD systems is the detectors. Attackers have successfully hacked real QKD systems by exploiting detector side-channels -- blinding them with bright light, for example. MDI-QKD eliminates this entire class of attack by having a third party (who can be completely untrusted) perform the measurements. Alice and Bob send quantum states to this middle node, which performs a Bell measurement. Even if the middle node is controlled by Eve, the protocol remains secure.

This is a beautifully paranoid approach to security, and it's become an important practical direction.

## Real-World Quantum Cryptography Deployments

Quantum cryptography isn't just theoretical. It's being deployed today:

### China's Quantum Network

China has made the most aggressive push into quantum communication. The Beijing-Shanghai quantum backbone, completed in 2017, stretches over 2,000 km and uses a network of trusted relay nodes for QKD. In 2017, China also demonstrated satellite-based QKD using the Micius satellite, distributing keys over 1,200 km between ground stations.

By 2025, China's quantum communication network connected major cities across the country and was being used for banking and [government](/government) communications. China reportedly invested over $15 billion in quantum technologies, with quantum communication as a major focus.

### European Quantum Communication Infrastructure (EuroQCI)

The EU launched the EuroQCI initiative to build a pan-European quantum communication network. It combines terrestrial fiber links with satellite QKD to connect all 27 EU member states. The first operational segments began testing in 2024, with full deployment planned for 2028.

### Commercial Systems

Several companies sell QKD systems commercially:

**ID Quantique** (Switzerland) has been selling QKD systems since 2004 and has deployed in banking, government, and critical infrastructure.

**Toshiba** demonstrated QKD over 600 km of fiber in 2023 using dual-band stabilization -- a record distance.

**QuantumCTek** (China) supplies QKD equipment for China's quantum network and is the largest QKD equipment manufacturer by revenue.

**SK Telecom** (South Korea) has deployed QKD in its commercial telecommunications network.

### The Distance Problem

QKD over [fiber optics](/fiber-optics) faces a fundamental distance limitation. Photons get absorbed by the fiber, and you can't amplify quantum signals (the no-cloning theorem prevents it). Practical QKD is limited to about 100-400 km over fiber, depending on the protocol and technology.

Three solutions exist:

**Trusted relay nodes** break the long-distance link into shorter segments. Each node decrypts and re-encrypts the key. This works but requires trusting the relay nodes -- which reduces security.

**Satellite QKD** transmits photons through free space (atmosphere and vacuum), which has much lower loss than fiber for long distances. China's Micius satellite demonstrated this, and several countries are launching quantum communication satellites.

**Quantum repeaters** would extend QKD distances without trusted nodes by using quantum entanglement and teleportation to relay quantum states. They're the "holy grail" of quantum [networking](/networking) but remain in the research stage. Functional quantum repeaters require quantum memories that can store entangled states -- technology that's improving rapidly but isn't yet reliable enough for deployment.

## Quantum Cryptography vs. Post-Quantum Cryptography

These terms sound similar but refer to very different approaches. Understanding the difference matters.

**Quantum cryptography** (specifically QKD) uses [quantum physics](/quantum-physics) to distribute keys. It requires specialized hardware (single-photon sources, quantum detectors, dark fiber). Its security is based on physics.

**Post-quantum cryptography** (PQC) uses classical computers [running](/running) mathematical algorithms that are believed to resist quantum attacks. It requires no special hardware -- it runs on existing [computers](/computer-science) and networks. Its security is based on mathematical problems (like lattice problems) that are hard for both classical and quantum computers.

NIST standardized post-quantum algorithms in 2024: CRYSTALS-Kyber (ML-KEM) for key exchange and CRYSTALS-Dilithium (ML-DSA) for digital signatures. These algorithms are already being integrated into web browsers, TLS protocols, and messaging apps.

For most practical purposes, PQC is the near-term solution to the quantum threat. It protects existing infrastructure without hardware upgrades. QKD provides stronger theoretical security guarantees but requires dedicated fiber or satellite links.

Think of it this way: post-quantum cryptography is aspirin -- widely available, works for most situations, and relies on our best understanding of the problem. Quantum cryptography is [surgery](/surgery) -- more targeted, more effective for specific cases, but requiring specialized resources.

## The Vulnerabilities You Should Know About

Quantum cryptography's theoretical security is absolute, but real-world implementations have real-world vulnerabilities:

### Implementation Attacks

The mathematical proofs of QKD security assume ideal devices -- perfect single-photon sources, perfectly efficient detectors, no side channels. Real devices aren't ideal, and the gaps between ideal and real have been exploited.

**Photon number splitting (PNS) attacks** exploit the fact that practical laser sources sometimes emit multiple photons instead of one. Eve can siphon off the extra photon without disturbing the one Bob receives. Defense: decoy state protocols, which use different intensity pulses to detect PNS attacks.

**Detector blinding attacks** use bright light to force Bob's detectors into a classical mode where Eve can control their output. Defense: MDI-QKD, which removes detector vulnerabilities entirely.

**Trojan horse attacks** send light into Alice's or Bob's equipment to read internal settings. Defense: optical isolation and monitoring.

### The Trusted Node Problem

Most deployed QKD networks use trusted relay nodes, which means the security of the entire network depends on the physical security of every node. A compromised node breaks the chain. This is a significant practical limitation until quantum repeaters become available.

### Side-Channel Leakage

Even if the quantum channel is secure, information can leak through classical side channels: timing patterns, electromagnetic emissions, power consumption, or even the sound of equipment. These are the same types of attacks that affect classical [cryptographic](/cryptography) systems, and they require the same types of [engineering](/engineering) countermeasures.

## The Quantum Internet

Looking further ahead, quantum cryptography is just one application of a broader vision: the quantum internet.

A quantum internet would connect quantum computers, quantum sensors, and QKD systems through quantum communication links. It would enable:

**Distributed quantum computing** -- linking multiple quantum computers to solve problems too large for any single machine, without losing quantum advantage.

**Secure communication** -- QKD across arbitrary distances using quantum repeaters and entanglement distribution.

**Quantum sensor networks** -- connecting quantum sensors for ultra-precise measurements of gravitational fields, magnetic fields, and time synchronization.

**Blind quantum computing** -- performing quantum computations on a remote quantum computer without the computer learning what you're computing. This has been demonstrated in proof-of-concept experiments and could enable quantum [cloud computing](/cloud-computing) with absolute privacy.

The US Department of Energy has published a strategic plan for quantum internet development. The Netherlands' QuTech lab operates a rudimentary 3-node quantum network. China continues expanding its quantum communication infrastructure. But a fully functional quantum internet is still years -- probably decades -- away.

## How Quantum Cryptography Affects You

If you're not a government intelligence officer or a bank's chief [security](/computer-security) officer, quantum cryptography might seem distant from your life. But it affects you in several ways:

**Your future privacy depends on it.** Every encrypted message you send today could be recorded and decrypted in 10-20 years by a quantum computer. Sensitive personal data -- medical records, financial information, private communications -- has a long shelf life.

**The transition is happening now.** NIST's post-quantum standards are being integrated into the software you use. Browser updates, operating system patches, and messaging app upgrades are already incorporating quantum-resistant algorithms. You'll benefit from this protection without needing to do anything.

**It shapes [geopolitics](/geopolitics).** Quantum communication capabilities are a strategic asset. Nations investing in quantum [networks](/computer-networking) gain a communication advantage that could shift the balance of intelligence capabilities.

**It's driving innovation in [optics](/optics) and photonics.** The engineering challenges of quantum cryptography -- generating single photons reliably, detecting them efficiently, transmitting them over long distances -- are pushing advances in [optical engineering](/optical-engineering) that benefit telecommunications, sensing, and computing.

## Key Takeaways

Quantum cryptography uses the fundamental laws of quantum mechanics -- the no-cloning theorem and measurement disturbance -- to create communication security that is provably unbreakable by any computational power. This is a genuinely unique capability that no classical technology can match.

Practical QKD systems exist and are deployed today, protecting banking, government, and critical infrastructure communications. They work, but they face real-world limitations: distance constraints, implementation vulnerabilities, and the cost of specialized hardware.

For most of us, the near-term quantum security solution is post-quantum cryptography -- mathematical algorithms that resist quantum attacks and run on existing hardware. QKD and PQC aren't competitors; they're complementary layers of defense for different threat models and use cases.

The broader vision -- a quantum internet enabling secure global communication, distributed quantum computing, and quantum sensor networks -- is the long-term direction. It's not here yet, but the foundational technology is being built right now. And the security of your digital life in the coming decades depends, in part, on how well this technology develops.
