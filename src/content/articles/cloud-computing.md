---
title: "What Is Cloud Computing?"
slug: cloud-computing
description: "Cloud computing delivers computing resources over the internet on demand. Learn about IaaS, PaaS, SaaS, major providers, and how the cloud actually works."
category: technology
tags: ["cloud computing", "cloud", "technology", "it", "data storage", "servers", "aws"]
heroImage: "/images/articles/cloud-computing-hero.webp"
heroAlt: "Editorial photograph representing the concept of cloud computing"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2649
tier: "2"
relatedArticles: ["algorithms", "app-development", "blockchain", "circuit-design", "machine-learning"]
externalSources:
  - title: "NIST Definition of Cloud Computing"
    url: "https://csrc.nist.gov/publications/detail/sp/800-145/final"
  - title: "AWS - What Is Cloud Computing?"
    url: "https://aws.amazon.com/what-is-cloud-computing/"
  - title: "Gartner - Cloud Computing"
    url: "https://www.gartner.com/en/information-technology/glossary/cloud-computing"
  - title: "Microsoft Azure - Cloud Computing Basics"
    url: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing"
faq:
  - q: "Is cloud computing just using someone else's computer?"
    a: "Technically, yes—your data and applications run on servers owned by cloud providers. But that oversimplifies what makes cloud computing different. The 'cloud' adds on-demand scaling, pay-per-use pricing, managed infrastructure, global distribution, and redundancy that would be prohibitively expensive to build yourself. It's like saying a hotel is 'just someone else's house'—true, but missing the point."
  - q: "Is cloud computing safe?"
    a: "Major cloud providers invest billions in security—far more than most individual companies can afford. Data encryption, access controls, physical security, and compliance certifications are standard. However, security is a shared responsibility: the provider secures the infrastructure, but customers must properly configure their applications and manage access credentials. Most cloud security breaches result from customer misconfiguration, not provider failures."
  - q: "What happens if a cloud provider goes down?"
    a: "Cloud outages do happen. Major providers typically guarantee 99.9% to 99.99% uptime (roughly 8 hours to 52 minutes of downtime per year). Well-architected cloud applications distribute across multiple data centers and even multiple providers to maintain availability during outages. A single-region failure shouldn't take down a properly designed cloud application."
  - q: "How much does cloud computing cost?"
    a: "Costs vary enormously by usage. A small website might cost $5-$50 per month. A startup running multiple services might spend $500-$5,000 monthly. Large enterprises can spend millions per month. The pay-per-use model means you pay for what you consume—scaling costs with your actual needs rather than paying upfront for capacity you might not use."
---

# What Is Cloud Computing?

Cloud computing is the delivery of computing resources—servers, storage, databases, [networking](/networking), software, and analytics—over the internet on an on-demand, pay-as-you-go basis. Instead of buying and maintaining physical hardware, organizations rent computing capacity from cloud providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. As of 2024, global spending on cloud services exceeds $590 billion annually, and an estimated 94% of enterprises use at least one cloud service.

## The Basic Idea: Computing as a Utility

The easiest way to understand cloud computing is to compare it to [electricity](/electricity). A century ago, factories generated their own power—each one had a generator, fuel supply, and maintenance staff. Then centralized power plants appeared, and it became cheaper and more reliable to buy electricity from the grid than to generate it yourself. The generator room disappeared. The electric bill appeared.

Cloud computing does the same thing for IT. Instead of buying servers, installing them in a room, hiring staff to maintain them, and replacing them every few years, you rent server capacity from a company that operates millions of servers in massive data centers. You pay for what you use, scale up when you need more, and scale down when you don't.

This sounds simple. The implications are enormous.

A startup can launch with the same computing infrastructure that a Fortune 500 company uses—without spending millions on hardware. A company experiencing a sudden traffic spike (a viral product, a Black Friday sale) can add capacity in minutes, then release it when the spike passes. A research team can rent 10,000 servers for a weekend computation and pay only for those two days.

Before the cloud, these scenarios were impossible or prohibitively expensive. That's why cloud computing changed the technology industry fundamentally.

## The Three Service Models

Cloud computing comes in three flavors, each offering different levels of abstraction.

### Infrastructure as a Service (IaaS)

IaaS gives you the building blocks—virtual machines, storage, and networking. You get raw computing resources that you configure and manage however you want. It's like renting an empty office building: the structure is there, but you bring your own furniture, hire your own staff, and set up your own systems.

AWS EC2, Microsoft Azure Virtual Machines, and Google Compute Engine are IaaS products. You choose the server size (CPU, memory), the operating system (Linux, Windows), and the storage configuration. You install and manage your own software, handle security patches, and deal with scaling.

IaaS offers maximum flexibility but requires the most technical expertise. You're responsible for everything above the hardware layer—operating system, middleware, applications, data, and security configuration.

### Platform as a Service (PaaS)

PaaS adds a layer of managed infrastructure on top of IaaS. The cloud provider handles the operating system, runtime environment, and middleware. You just deploy your application code.

Think of it as renting a furnished office. The desks, chairs, internet connection, and phone system are already set up. You just bring your team and start working.

Heroku, Google App Engine, and Azure App Service are PaaS products. Developers push their code, and the platform handles deployment, scaling, load balancing, and server [management](/management). This dramatically reduces operational overhead but limits customization—you're constrained to the platform's supported languages, frameworks, and configurations.

### Software as a Service (SaaS)

SaaS delivers complete applications over the internet. You don't manage any infrastructure—you just use the software through a web browser or API.

Gmail, Salesforce, Slack, Zoom, Microsoft 365, and thousands of other applications are SaaS products. You sign up, pay a subscription, and start using the software. Updates, maintenance, and infrastructure are entirely the provider's responsibility.

SaaS is what most people think of when they think of "the cloud." If you've used Google Docs, you've used SaaS. If you've stored photos on iCloud, you've used SaaS. If your company uses Salesforce for customer management, that's SaaS.

## How the Cloud Actually Works

Behind the [marketing](/marketing) abstractions, cloud computing runs on real, physical hardware in real buildings. Understanding the physical reality helps you understand the technology's capabilities and limitations.

### Data Centers

A cloud provider's data center is a massive facility—sometimes over 100,000 square meters—filled with tens of thousands of servers, storage systems, and networking equipment. These facilities consume enormous amounts of electricity (a large data center might use 30-100 megawatts—enough to power a small city) and generate substantial heat that requires sophisticated cooling systems.

Data centers are designed for reliability. They have redundant power supplies (utility power plus diesel generators plus battery backup), redundant cooling, redundant network connections, and fire suppression systems. Physical security includes biometric access controls, security cameras, mantrap entrances, and 24/7 guard staff.

AWS operates data centers in over 30 geographic regions worldwide. Azure operates in over 60 regions. Google Cloud operates in over 35 regions. This global footprint matters because [physics](/physics) imposes a speed limit: data travels through fiber optic cables at roughly 200,000 km/s (about two-thirds the speed of light). A server in Virginia introduces about 80 milliseconds of latency for a user in Tokyo—noticeable for interactive applications. Having data centers on every continent reduces this latency.

### Virtualization

The technology that makes cloud computing practical is virtualization—[running](/running) multiple virtual machines on a single physical server. A hypervisor (software like VMware, KVM, or Xen) sits between the hardware and the operating systems, dividing a physical server's CPU, memory, and storage among multiple virtual machines that each believe they have their own dedicated hardware.

A single physical server with 128 CPU cores and 1 TB of memory might run 20-30 virtual machines simultaneously, each isolated from the others. This lets cloud providers sell computing capacity in small, flexible increments rather than entire physical servers.

Containerization—using technologies like Docker and Kubernetes—takes virtualization further. Containers share the host operating system's kernel but isolate applications from each other. They start in seconds (versus minutes for virtual machines), use less memory, and enable even finer-grained resource sharing.

### Networking

Cloud networking is complex. Within a data center, servers connect via high-speed switches (typically 25-100 Gbps per server port). Between data centers in the same region, dedicated fiber connections provide low-latency links. Between regions, cloud providers operate their own global backbone networks—thousands of kilometers of fiber optic cable, often running along the ocean floor.

Software-defined networking (SDN) allows network configurations to be programmed and changed dynamically—creating virtual private networks, load balancers, and firewalls in software rather than requiring physical equipment changes. This flexibility is what allows cloud customers to create complex network architectures in minutes rather than weeks.

## Cloud Storage: Where Your Data Lives

Cloud storage comes in several forms optimized for different use cases.

**Object storage** (AWS S3, Azure Blob Storage, Google Cloud Storage) stores unstructured data—files, images, videos, backups—as discrete objects with metadata. It's designed for massive scale, high durability (AWS S3 guarantees 99.999999999% durability—that's eleven 9s), and low cost. Most websites serve images and static content from object storage.

**Block storage** (AWS EBS, Azure Managed Disks) provides virtual hard drives for virtual machines. It offers low-latency access needed for databases and applications that require fast, consistent I/O.

**File storage** (AWS EFS, Azure Files) provides shared file systems accessible by multiple servers simultaneously—useful for applications that need traditional file and folder structures.

**Database services** (AWS RDS, Azure SQL Database, Google Cloud SQL) manage database engines like PostgreSQL, MySQL, and SQL Server. The provider handles installation, patching, backups, replication, and scaling. This frees developers from [database administration](/database-administration)—a significant operational burden.

## The Major Providers

Three companies dominate the cloud market, collectively controlling roughly 65% of global cloud infrastructure spending.

### Amazon Web Services (AWS)

AWS launched in 2006 and remains the market leader with approximately 31% market share. It offers over 200 services, from basic compute and storage to [machine learning](/machine-learning), IoT, satellite ground stations, and [quantum computing](/quantum-computing). Netflix, Airbnb, NASA, and the CIA all run on AWS.

AWS's breadth is both its strength and its complexity. The sheer number of services and configuration options can be overwhelming. Learning AWS is a career in itself—AWS certifications are among the most valuable credentials in IT.

### Microsoft Azure

Azure holds roughly 24% market share and is particularly strong in enterprise environments already using Microsoft products. Office 365 integration, Active Directory compatibility, and Windows Server support make Azure a natural choice for Microsoft-centric organizations.

Azure has invested heavily in AI and [machine learning](/machine-learning) services, partly through its partnership with OpenAI. Azure OpenAI Service gives enterprise customers access to GPT models within Azure's compliance and security framework.

### Google Cloud Platform (GCP)

GCP holds about 11% market share but is growing rapidly. Google's strengths in data analytics (BigQuery), Kubernetes (which Google originally developed), and AI/ML attract companies with heavy data processing needs. YouTube, Spotify, and many data-intensive startups run on GCP.

Other significant providers include Alibaba Cloud (dominant in China), Oracle Cloud (strong in database workloads), and IBM Cloud (focused on enterprise and hybrid deployments).

## Cloud [Architecture](/architecture) Patterns

Building applications for the cloud requires different architectural thinking than building for traditional on-premises servers.

### Microservices

Instead of building one large application (a monolith), cloud applications are often decomposed into small, independent services that communicate via APIs. Each microservice handles one function—user authentication, payment processing, [inventory management](/inventory-management)—and can be developed, deployed, and scaled independently.

Netflix, for example, runs over 700 microservices. If the recommendation engine needs more capacity, it scales independently without affecting the streaming service. If one service fails, others continue working. This architecture maps naturally to cloud infrastructure, where services can be distributed across multiple servers and regions.

### Serverless Computing

Serverless (AWS Lambda, Azure Functions, Google Cloud Functions) takes abstraction further—you write individual functions that run in response to events. No servers to manage, no capacity to plan. The cloud provider executes your function, scales it automatically, and charges only for the milliseconds of compute time consumed.

Serverless is ideal for event-driven workloads—processing uploaded images, responding to API requests, handling webhook events. A function that runs 100 times per day costs fractions of a cent. The same function handling 100,000 requests during a traffic spike scales automatically and costs proportionally more—but only while the spike lasts.

### Multi-Cloud and Hybrid Cloud

Many organizations use multiple cloud providers—AWS for some workloads, Azure for others, GCP for data analytics—to avoid vendor lock-in, optimize costs, or meet compliance requirements. Managing multiple clouds adds complexity but reduces dependency on any single provider.

Hybrid cloud combines public cloud with private infrastructure (on-premises servers or private data centers). This is common in regulated industries—banks might keep sensitive customer data on-premises while using public cloud for development, testing, and less sensitive workloads.

## Security in the Cloud

Cloud security follows the shared responsibility model. The provider secures the physical infrastructure, network, and hypervisor. The customer secures everything they put on top—operating systems, applications, data, access controls, and network configuration.

**Identity and access management (IAM)** controls who can access what. Every cloud provider offers IAM systems where you define users, roles, and permissions. The principle of least privilege—granting only the minimum access needed—is fundamental. A single overly permissive IAM policy has caused some of the most publicized cloud security breaches.

**Encryption** protects data at rest (stored) and in transit (moving between systems). Most cloud services encrypt data by default, using keys managed by either the provider or the customer. For maximum control, customers can manage their own encryption keys, though this adds complexity.

**[Network security](/network-security)** in the cloud uses virtual firewalls (security groups, network ACLs) to control traffic flow. These are configured in software, allowing rapid changes but also creating risk—a misconfigured security group that accidentally allows public access to a database has been the root cause of numerous data breaches.

**Compliance** frameworks (SOC 2, HIPAA, PCI DSS, GDPR) specify security requirements for different industries and types of data. Major cloud providers hold these certifications for their infrastructure, but customers must ensure their own configurations meet compliance requirements.

## The Economics of Cloud Computing

Cloud computing changes IT [economics](/economics) from capital expenditure (CapEx) to operating expenditure (OpEx). Instead of buying servers upfront (CapEx), you pay monthly bills for the resources you consume (OpEx).

This shift has real advantages. No upfront capital investment means lower barriers to entry. Costs scale with usage rather than capacity. You don't pay for idle servers.

But cloud costs can spiral if not managed carefully. A poorly optimized cloud deployment can cost more than equivalent on-premises infrastructure. "Cloud waste"—paying for resources that aren't actually needed—is estimated at 30-35% of total cloud spending industry-wide. This has spawned an entire discipline of cloud cost [optimization](/optimization) (FinOps) focused on matching spending to actual usage.

Reserved instances and savings plans offer discounts of 30-72% for committing to specific resource levels for 1-3 years. Spot instances (AWS) or preemptible VMs (GCP) offer even deeper discounts for workloads that can tolerate interruption.

## The Environmental Impact

Cloud data centers consume approximately 1-1.5% of global electricity—a number that's growing as cloud adoption increases. The carbon footprint depends on the energy mix powering the data centers. A data center running on [renewable energy](/renewable-energy) has a drastically different environmental impact than one running on coal.

Major providers have committed to carbon neutrality or 100% renewable energy—Google claims carbon neutrality since 2007, Microsoft pledges carbon negative by 2030, and AWS targets 100% renewable energy by 2025. These commitments are significant but also complex—"renewable energy" claims often involve purchasing renewable energy credits rather than directly powering data centers with renewables.

On the other hand, cloud computing can reduce total energy consumption by consolidating workloads. A cloud data center running thousands of servers at high utilization is more energy-efficient than thousands of companies each running their own servers at 10-20% utilization. The consolidation effect means that migration to the cloud typically reduces a company's IT carbon footprint, even [accounting](/accounting) for the data center's energy use.

## Where Cloud Computing Is Heading

**Edge computing** pushes cloud resources closer to users—into cell towers, retail stores, and factory floors. This reduces latency for applications that need real-time responses (autonomous vehicles, augmented reality, industrial automation). AWS Outposts, Azure Stack, and Google Distributed Cloud bring cloud services to locations where round-trip time to a distant data center is too long.

**AI and ML integration** is becoming standard. Every major cloud provider offers pre-built AI services—image recognition, [natural language processing](/natural-language-processing), speech-to-text—as API calls. Training large [machine learning](/machine-learning) models requires massive compute resources that only cloud providers can economically offer. The AI boom has made GPU-equipped cloud instances some of the most in-demand (and expensive) cloud resources.

**Sustainability** is becoming a competitive differentiator. Customers increasingly consider carbon footprint when choosing cloud providers. Tools that measure and report cloud carbon emissions are becoming standard features.

**Sovereign cloud** offerings address data sovereignty requirements—ensuring that data stays within specific geographic boundaries and is subject only to local laws. This matters increasingly as data protection regulations (GDPR in Europe, data localization laws in various countries) restrict cross-border data flows.

## Why Cloud Computing Matters to You

Even if you never configure a server or write a line of code, cloud computing affects your daily life. The apps on your phone, the streaming services you watch, the websites you browse, the video calls you make—virtually all of them run on cloud infrastructure.

Understanding the cloud helps you make sense of technology news, evaluate the tools you use, and appreciate the infrastructure invisible beneath every digital experience. When a major cloud outage takes down half the internet (as has happened), understanding why reveals how concentrated and interdependent modern digital infrastructure has become.

Cloud computing isn't magic. It's real servers in real buildings, connected by real cables, running real software. But the abstraction it provides—turning computing from a physical asset into an on-demand utility—changed how software is built, businesses are run, and technology reaches you. That shift is as significant as the shift from private generators to the electrical grid. And like electricity, you only notice it when it stops working.
