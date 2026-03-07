---
title: "What Is Cryptography?"
slug: cryptography
description: "Cryptography protects information through mathematical techniques that ensure privacy, integrity, and authenticity. Learn how encryption actually works."
category: technology
tags: ["cryptography", "encryption", "cybersecurity", "data security", "privacy", "algorithms", "information security"]
heroImage: "/images/articles/cryptography-hero.webp"
heroAlt: "Editorial photograph representing the concept of cryptography"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3054
tier: "2"
relatedArticles: ["blockchain", "algorithms", "app-development", "cybernetics"]
externalSources:
  - title: "NIST Cryptographic Standards"
    url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines"
  - title: "Khan Academy - Cryptography"
    url: "https://www.khanacademy.org/computing/computer-science/cryptography"
  - title: "Electronic Frontier Foundation - Encryption"
    url: "https://www.eff.org/issues/encrypt-the-web"
  - title: "CISA - Encryption Overview"
    url: "https://www.cisa.gov/news-events/news/understanding-encryption"
  - title: "RFC 5246 - TLS Protocol"
    url: "https://datatracker.ietf.org/doc/html/rfc5246"
faq:
  - q: "Is encryption legal?"
    a: "In most countries, using encryption is legal. However, some nations restrict or regulate its use. A few countries require that encryption keys be provided to law enforcement on request. Export of strong encryption technology has historically been restricted by the US and other countries, though many restrictions have been relaxed since the 1990s 'crypto wars.'"
  - q: "Can encryption be broken?"
    a: "Any encryption can theoretically be broken given enough time and computing power. In practice, modern algorithms like AES-256 would take billions of years to crack through brute force with current technology. Real-world encryption failures typically result from implementation flaws, weak key management, or side-channel attacks—not from breaking the mathematical algorithm itself."
  - q: "What is the difference between encryption and hashing?"
    a: "Encryption is reversible—you can decrypt encrypted data back to its original form using the correct key. Hashing is one-way—you cannot recover the original data from its hash. Encryption protects data confidentiality (keeping secrets). Hashing verifies data integrity (confirming data hasn't been changed) and is used for password storage, digital signatures, and data verification."
  - q: "Will quantum computers break all encryption?"
    a: "Not all encryption, but quantum computers threaten current public-key cryptography (RSA, ECC) through Shor's algorithm. Symmetric encryption (AES) is less affected—doubling the key length (e.g., AES-256) is expected to maintain security. NIST finalized its first post-quantum cryptographic standards in 2024 to prepare for this transition."
  - q: "What is end-to-end encryption?"
    a: "End-to-end encryption (E2EE) means data is encrypted on the sender's device and can only be decrypted on the recipient's device. No intermediary—including the service provider—can read the data in transit. Apps like Signal use E2EE for messages. This provides the strongest privacy guarantee but means the provider cannot recover data if a user loses their key."
---

# What Is Cryptography?

Cryptography is the science and practice of securing information by transforming it into an unreadable format that can only be converted back by someone possessing the correct key. It provides four fundamental security properties: confidentiality (keeping information secret), integrity (ensuring information hasn't been altered), authentication (verifying identity), and non-repudiation (proving that a sender actually sent a message).

## From Ancient Secrets to Modern Math

Cryptography has been around almost as long as writing itself. The Spartans used a device called a scytale---a leather strip wrapped around a wooden cylinder---to encrypt military messages around 700 BC. Julius Caesar shifted letters in the alphabet (A becomes D, B becomes E, and so on) to hide messages from enemies. This "Caesar cipher" is so simple a 10-year-old could crack it, but it worked fine when your adversaries were largely illiterate.

For most of history, cryptography was a craft practiced by spies, diplomats, and military commanders. Codes were invented, broken, and replaced in an endless cycle. The breaking of the German Enigma machine during [World War II](/world-war-ii)---largely by Alan Turing and his team at Bletchley Park---is perhaps the most famous example. Their work shortened the war by an estimated two years and saved millions of lives.

But something changed in the 1970s. Cryptography transformed from a secretive [government](/government) art into an open mathematical science. Two developments drove this shift.

First, the Data Encryption Standard (DES) was published in 1977 as a federal standard, making strong encryption publicly available for the first time. Before DES, the NSA considered cryptographic knowledge a national security matter. Publishing DES was controversial---some argued it was deliberately weakened. But it democratized encryption.

Second, Whitfield Diffie and Martin Hellman published "New Directions in Cryptography" in 1976, introducing the concept of public-key cryptography. This was genuinely revolutionary. For the first time, two people could communicate securely without ever having met to exchange a secret key. It changed everything.

## How Symmetric Encryption Works

Symmetric encryption uses the same key for both encrypting and decrypting. Think of it as a lock and key---you lock the box with a key, and you unlock it with the same key.

### The AES Standard

The Advanced Encryption Standard (AES) is the workhorse of modern symmetric encryption. Adopted by NIST in 2001 after a five-year international competition, AES replaced the aging DES. It operates on fixed-size blocks of data (128 bits) using keys of 128, 192, or 256 bits.

AES works through a series of substitution, transposition, and mixing operations applied repeatedly (10 rounds for 128-bit keys, 14 for 256-bit). Each round transforms the data in ways that are individually simple but collectively create an avalanche effect---changing a single bit of the input changes roughly half the output bits.

AES-256 has 2^256 possible keys. To put that in perspective: if every atom in the observable universe (roughly 10^80) were a computer that could test a billion billion keys per second, and they'd been running since the Big Bang, they'd have tested approximately 10^134 keys---still unimaginably far from 2^256 (approximately 10^77). AES-256 is not getting brute-forced. Not by current technology. Not by any foreseeable technology.

### The Key Distribution Problem

Symmetric encryption has a fundamental weakness: both parties need the same key. How do you securely share a key with someone you've never met? If you could securely transmit the key, you could securely transmit the message instead and skip encryption entirely. This circular problem---called the key distribution problem---limited symmetric cryptography for thousands of years.

You could meet in person. You could use a trusted courier. You could pre-distribute keys to everyone who might ever need one. None of these scales to a world where millions of people need to communicate securely with each other, often spontaneously.

Public-key cryptography solved this problem.

## How Public-Key Cryptography Works

Public-key (asymmetric) cryptography uses two mathematically related keys: a public key that anyone can see and a private key that only the owner knows. Data encrypted with the public key can only be decrypted with the corresponding private key, and vice versa.

### The RSA Algorithm

RSA, published in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, was the first practical public-key encryption system. Its security relies on a mathematical fact: multiplying two large prime numbers together is easy, but factoring their product back into the original primes is extraordinarily difficult.

Here's the simplified version. You choose two large prime numbers (p and q), multiply them to get n, and derive a public key (e, n) and private key (d, n) through modular arithmetic. The public key encrypts messages. Only the private key decrypts them. Breaking RSA requires factoring n back into p and q---which, for sufficiently large numbers, is computationally infeasible.

Current RSA implementations use key sizes of 2048 or 4096 bits. Factoring a 2048-bit number would take a classical computer longer than the age of the universe. But quantum computers change this calculation---Shor's algorithm can factor large numbers exponentially faster, which is why post-[quantum cryptography](/quantum-cryptography) is an active research area.

### Elliptic Curve Cryptography (ECC)

ECC achieves the same security as RSA with much smaller keys. A 256-bit ECC key provides security equivalent to a 3072-bit RSA key. This makes ECC faster and more efficient, particularly important for mobile devices and IoT with limited processing power.

ECC's security relies on the difficulty of the elliptic curve discrete logarithm problem---given a point on an elliptic curve and a multiple of that point, finding the multiplier is computationally hard.

Most modern implementations---including the [blockchain](/blockchain) systems behind Bitcoin and Ethereum---use ECC. Your web browser almost certainly uses ECC for its TLS connections.

### Diffie-Hellman Key Exchange

Diffie-Hellman doesn't encrypt messages directly. Instead, it allows two parties to establish a shared secret over an insecure channel---solving the key distribution problem for symmetric encryption.

The analogy: imagine Alice and Bob each have a secret paint color. They publicly agree on a common base color. Each mixes their secret color with the base and sends the result to the other. Each then mixes their own secret with what they received. Both arrive at the same final color---but an eavesdropper who saw only the public mixtures can't determine the final color without knowing one of the secret colors.

In practice, this uses modular exponentiation with large prime numbers instead of paint, but the principle is identical. Modern TLS connections use ephemeral Diffie-Hellman (a new key pair for every session) to provide perfect forward secrecy---even if a server's long-term private key is later compromised, past sessions remain secure.

## Hash Functions: The Digital Fingerprint

Hash functions aren't encryption---they're one-way transformations that produce a fixed-size output (called a digest or hash) from any input. You can't reverse a hash to recover the original data.

### Properties of Cryptographic Hash Functions

A good cryptographic hash function has three properties:

**Pre-image resistance**: Given a hash output, you can't find an input that produces it (other than by trying all possible inputs).

**Second pre-image resistance**: Given an input, you can't find a different input that produces the same hash.

**Collision resistance**: You can't find any two different inputs that produce the same hash.

SHA-256 (Secure Hash Algorithm, 256-bit) is the most widely used hash function today. It produces a 256-bit hash regardless of input size. The entire text of War and Peace produces a 256-bit hash. The letter "a" produces a 256-bit hash. Change one character, and the hash changes completely---there's no way to predict how the output will change.

### Where Hashing Is Used

**Password storage**: Your passwords aren't (or shouldn't be) stored as plain text. Instead, a hash of your password is stored. When you log in, the system hashes your input and compares it to the stored hash. Even if the database is breached, attackers get hashes, not passwords. Modern systems add "salt" (random data) to each password before hashing, preventing attackers from using precomputed hash tables.

**Data integrity**: Hash functions verify that files haven't been corrupted or tampered with. When you download software, the publisher often provides a hash. You hash the downloaded file and compare---if the hashes match, the file is intact.

**Digital signatures**: Hash functions are fundamental to digital signatures (discussed below).

**[Blockchain](/blockchain) technology**: Every block in a blockchain contains the hash of the previous block, creating an immutable chain. Mining involves finding inputs that produce hashes with specific properties.

## Digital Signatures: Proving Who Sent What

Digital signatures combine public-key cryptography with hash functions to provide authentication and non-repudiation.

The process: the signer hashes the message, then encrypts the hash with their private key. This encrypted hash is the digital signature. Anyone can verify it by decrypting the signature with the signer's public key and comparing the result to the hash of the received message. If they match, the message is authentic and unaltered.

Digital signatures are legally equivalent to handwritten signatures in most jurisdictions (under laws like the U.S. E-SIGN Act and the EU's eIDAS regulation). They're used in software distribution, financial transactions, [contract-law](/contract-law) documents, email authentication, and code signing.

The security depends on the private key remaining private. If someone steals your private key, they can forge your signature. This is why key management---securely generating, storing, and eventually destroying cryptographic keys---is one of the hardest problems in practical cryptography.

## TLS: Cryptography in Action

Every time you see the padlock icon in your browser, you're using Transport Layer Security (TLS)---the protocol that secures web communications. TLS combines nearly everything we've discussed.

Here's what happens when you visit an HTTPS website:

1. **Hello**: Your browser and the server agree on protocol version, supported [algorithms](/algorithms), and other parameters.
2. **Certificate**: The server sends its digital certificate, which contains its public key and is signed by a trusted Certificate Authority (CA).
3. **Key exchange**: Using the server's public key and Diffie-Hellman, your browser and the server establish a shared session key. This is the asymmetric phase.
4. **Secure communication**: All subsequent data is encrypted with AES (or another symmetric cipher) using the session key. This is the symmetric phase---faster than asymmetric encryption for bulk data.
5. **Integrity**: Every message includes a Message Authentication Code (MAC) using a hash function, ensuring data hasn't been tampered with.

This hybrid approach---asymmetric cryptography for key exchange, symmetric cryptography for data encryption---combines the flexibility of public-key systems with the speed of symmetric systems. It's elegant [engineering](/engineering).

TLS protects roughly 95% of web traffic as of 2025. The shift from HTTP to HTTPS, pushed by browser warnings and Google search ranking factors, has been one of the most successful security improvements in [internet history](/internet-history).

## The Quantum Threat

[Quantum computing](/quantum-computing) poses a specific and well-understood threat to current cryptography. Peter Shor's algorithm, published in 1994, demonstrates that a sufficiently powerful quantum computer can factor large numbers and solve the discrete logarithm problem exponentially faster than classical computers.

This directly threatens RSA, ECC, and Diffie-Hellman---the foundations of public-key cryptography. A quantum computer with enough stable qubits could break RSA-2048 in hours rather than billions of years.

Symmetric cryptography is less vulnerable. Grover's algorithm provides a quadratic speedup for brute-force searches, effectively halving the security level. AES-128 would have 64-bit security against quantum attack---inadequate. But AES-256 would retain 128-bit security---still practically unbreakable.

NIST launched its Post-Quantum Cryptography (PQC) standardization project in 2016 and finalized its first standards in 2024. The selected algorithms---CRYSTALS-Kyber for key exchange and CRYSTALS-Dilithium for digital signatures---are based on mathematical problems that quantum computers can't efficiently solve (primarily lattice problems).

The timeline is uncertain. Current quantum computers have thousands of qubits but most are too noisy for cryptographic attacks. Estimates for "cryptographically relevant" quantum computers range from 2030 to 2050 or beyond. But the migration to post-quantum cryptography needs to begin now, because encrypted data captured today could be decrypted later when quantum computers become available---the "harvest now, decrypt later" threat.

## Cryptography in Everyday Life

You use cryptography constantly without thinking about it.

**Messaging**: Signal, WhatsApp, and iMessage use end-to-end encryption. Your messages are encrypted on your device and can only be decrypted on the recipient's device. Not even the service provider can read them.

**Banking**: Every online banking session, ATM transaction, and credit card payment uses cryptographic protocols. Chip-based credit cards use challenge-response cryptography that's far more secure than the old magnetic stripe system.

**Wi-Fi**: WPA3 encryption protects your wireless network. Without it, anyone within radio range could intercept your traffic.

**Software updates**: Code signing uses digital signatures to verify that software updates come from the legitimate developer and haven't been tampered with. When your phone installs an OS update, it verifies the digital signature before applying it.

**Email**: PGP (Pretty Good Privacy) and S/MIME provide email encryption and digital signatures, though adoption remains frustratingly low outside security-conscious communities.

**VPNs**: Virtual Private Networks create encrypted tunnels that protect your internet traffic from local eavesdroppers---useful on public Wi-Fi networks.

**Disk encryption**: BitLocker (Windows), FileVault (macOS), and LUKS (Linux) encrypt your hard drive. If your laptop is stolen, the thief gets a device full of useless encrypted data.

## The Tension Between Security and Access

Cryptography creates a fundamental tension: the same technology that protects your banking information from hackers also protects criminal communications from law enforcement.

Governments periodically push for "backdoors"---ways for authorized parties to access encrypted data. The problem is that a backdoor, by definition, is a vulnerability. If law enforcement can access encrypted data, so can hackers who discover the backdoor. There's no mathematical way to create a backdoor that works for the "good guys" but not the "bad guys."

The FBI's 2016 dispute with Apple over accessing a locked iPhone belonging to a mass shooter brought this tension into public view. Apple refused to create software that would bypass its own encryption, arguing it would create a dangerous tool that could be used against any iPhone. The FBI eventually accessed the phone through a third party.

This debate continues. The EU's proposed "Chat Control" regulation, various national encryption policies, and ongoing discussions about "lawful access" to encrypted communications reflect the unresolved tension between security and surveillance.

The cryptographic community's consensus is broadly clear: backdoors weaken security for everyone and should be avoided. But the policy debate is far from settled, and democratic societies continue wrestling with how to balance privacy, security, and law enforcement access.

## Common Cryptographic Mistakes

Cryptography is hard---not because the math is inaccessible, but because implementation details matter enormously.

**Using outdated algorithms**: MD5 and SHA-1 have known collision attacks. DES is too weak. Yet deprecated algorithms persist in legacy systems. Always use current standards---AES-256, SHA-256 or SHA-3, and NIST-approved key exchange methods.

**Rolling your own crypto**: Custom cryptographic implementations almost always have flaws. Use established, audited libraries like OpenSSL, libsodium, or platform-provided APIs. The math might be right, but timing attacks, side-channel leaks, and implementation bugs trip up even expert developers.

**Poor key management**: The strongest encryption is worthless if keys are stored in plain text, shared via email, or never rotated. Key management---generation, storage, distribution, rotation, and destruction---is often the weakest link.

**Insufficient randomness**: Cryptographic keys must be generated from cryptographically secure random number generators. Predictable "random" numbers have been the source of numerous real-world vulnerabilities, including a 2008 Debian OpenSSL bug that reduced the key space to just 32,767 possibilities.

**Ignoring the protocol**: Even with strong algorithms, protocol-level flaws can undermine security. The POODLE attack (2014) and Heartbleed (2014) exploited protocol and implementation flaws, not algorithmic weaknesses.

## The Future of Cryptography

Several developments will shape cryptography's near-term future.

**Post-quantum migration**: Organizations worldwide are beginning the multi-year process of migrating to post-quantum [algorithms](/algorithms). This is the largest cryptographic transition since the move from DES to AES, affecting every system that uses public-key cryptography.

**Homomorphic encryption**: This technique allows computation on encrypted data without decrypting it. A hospital could send encrypted patient data to a cloud service for analysis, receive encrypted results, and decrypt them---without the cloud ever seeing the data. Currently too slow for most applications, but performance is improving rapidly.

**Zero-knowledge proofs**: These allow one party to prove they know something (like a password) without revealing the information itself. They're already used in some [blockchain](/blockchain) systems and have applications in authentication, voting, and privacy-preserving verification.

**Secure multi-party computation**: Multiple parties can jointly compute a function over their inputs while keeping those inputs private. This has applications in privacy-preserving [data analysis](/data-analysis), auctions, and collaborative research.

Cryptography will remain essential as long as information has value and adversaries exist---which is to say, forever. The specific algorithms will change. The mathematical foundations will evolve. But the fundamental mission---protecting information from those who shouldn't have it---is timeless.

## Key Takeaways

Cryptography secures information through mathematical transformations, providing confidentiality, integrity, authentication, and non-repudiation. Symmetric encryption (AES) uses shared keys for fast bulk encryption. Public-key cryptography (RSA, ECC) solves the key distribution problem using key pairs. Hash functions provide one-way data fingerprinting for passwords, integrity checking, and digital signatures. TLS combines these techniques to secure web communications. Quantum computing threatens current public-key algorithms, driving the transition to post-quantum standards. In practice, cryptographic failures typically stem from implementation errors and poor key management rather than algorithmic weaknesses. Understanding these principles matters because cryptography protects virtually every digital interaction you have---from banking to messaging to software updates.
