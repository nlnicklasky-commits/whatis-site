---
title: "What Is Robotics?"
slug: robotics
description: "Robotics is the field of designing, building, and programming machines that can perform tasks autonomously or semi-autonomously. Learn how robots actually work."
category: technology
tags: ["robotics", "automation", "artificial intelligence", "engineering", "sensors", "actuators", "programming"]
heroImage: "/images/articles/robotics-hero.webp"
heroAlt: "Editorial photograph representing the concept of robotics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 10
wordCount: 2778
tier: "2"
relatedArticles: ["artificial-intelligence", "machine-learning", "mechanical-engineering", "electrical-engineering", "computer-science"]
externalSources:
  - title: "International Federation of Robotics"
    url: "https://ifr.org/"
  - title: "IEEE Robotics and Automation Society"
    url: "https://www.ieee-ras.org/"
  - title: "MIT CSAIL - Robotics"
    url: "https://www.csail.mit.edu/research/robotics"
  - title: "NASA Robotics - Mars Rovers"
    url: "https://mars.nasa.gov/technology/helicopter/"
faq:
  - q: "What is the difference between a robot and a machine?"
    a: "All robots are machines, but not all machines are robots. A washing machine follows a fixed, pre-set cycle—it's a machine. A robot can sense its environment, make decisions based on that information, and adapt its actions accordingly. The key distinction is the ability to perceive, decide, and act with some degree of autonomy, rather than simply executing a fixed sequence."
  - q: "Will robots take all our jobs?"
    a: "Some jobs will be automated—particularly repetitive, dangerous, or highly structured tasks. But history shows that automation also creates new jobs that didn't exist before. The McKinsey Global Institute estimates that by 2030, up to 30% of work activities could be automated, but fewer than 5% of occupations can be fully automated. More likely: robots will change most jobs rather than eliminate them."
  - q: "How do robots 'see' the world?"
    a: "Robots use various sensors: cameras (visible light and infrared), LIDAR (laser-based distance measurement), ultrasonic sensors (sound-based distance measurement), depth cameras (like Intel RealSense or Microsoft Kinect), and touch sensors. Computer vision algorithms process camera data to identify objects, read text, detect obstacles, and navigate. No single sensor replicates human vision—robots typically combine multiple sensor types."
  - q: "What programming languages are used for robotics?"
    a: "Python and C++ are the most common. Python is preferred for high-level programming, AI, and rapid prototyping. C++ is used for performance-critical real-time control. ROS (Robot Operating System), which runs on Linux, is the dominant middleware framework—it provides communication between robot components, sensor drivers, and navigation algorithms. MATLAB is common in research."
  - q: "How much does a robot cost?"
    a: "It ranges enormously. A simple educational robot kit costs $50-$200. A collaborative robot (cobot) for manufacturing runs $25,000-$50,000. A traditional industrial robot arm costs $50,000-$400,000 (plus integration). Advanced humanoid robots like Boston Dynamics' Atlas or Tesla's Optimus are not yet commercially priced but represent millions in development cost per unit. Surgical robots like the da Vinci system cost $1-2.5 million."
---

# What Is Robotics?

Robotics is the interdisciplinary field of engineering and science dedicated to the design, construction, programming, and operation of robots — machines capable of sensing their environment, processing information, and taking physical action with some degree of autonomy. It pulls from [mechanical engineering](/mechanical-engineering), [electrical engineering](/electrical-engineering), [computer science](/computer-science), and increasingly [artificial intelligence](/artificial-intelligence), combining them into systems that can interact with the physical world in ways that go beyond fixed, repetitive automation.

The word "robot" comes from the Czech word *robota*, meaning forced labor. It was coined by playwright Karel Capek in his 1920 play *R.U.R. (Rossum's Universal Robots)*. A century later, there are roughly 3.9 million industrial robots operating worldwide, according to the International Federation of Robotics (IFR). Add surgical robots, warehouse robots, agricultural robots, underwater robots, space robots, military robots, and consumer robots, and the total is significantly higher.

But here is what most people miss about robotics: the field is not primarily about building human-like machines. That makes for great science fiction, but the vast majority of real robots look nothing like humans. They look like arms, carts, drones, vacuum cleaners, and swimming torpedoes. The interesting questions in robotics are not "can we build a robot that looks like a person?" but "can we build a machine that performs useful work in unstructured environments?" Those two questions lead to very different engineering challenges.

## The Three Pillars: Sense, Think, Act

Every robot, from a Roomba to a Mars rover, operates on the same fundamental loop: it senses its environment, processes that information to make decisions, and acts on those decisions. This sense-think-act cycle runs continuously, often hundreds or thousands of times per second.

### Sensing: How Robots Perceive the World

Robots need information about their environment to function. The sensors they use depend entirely on the task.

**Vision sensors** include cameras (monocular, stereo, and depth cameras), which provide rich visual data but require sophisticated [computer vision](/computer-vision) [algorithms](/algorithms) to interpret. A camera gives you millions of pixels — figuring out that those pixels represent "a coffee mug sitting on the edge of a table" is a hard computational problem that researchers have worked on for decades.

**LIDAR** (Light Detection and Ranging) fires laser pulses and measures the time they take to bounce back, creating precise 3D point clouds of the environment. LIDAR gives excellent distance measurements but no color or texture information. Self-driving cars use LIDAR extensively, and it is standard on many mobile robots for mapping and navigation.

**Proximity sensors** detect nearby objects using infrared light, ultrasound, or electromagnetic fields. They are simpler and cheaper than cameras or LIDAR but provide limited information (usually just "something is within X centimeters").

**Force and torque sensors** measure the forces a robot exerts or experiences during physical contact. These are critical for tasks requiring delicate manipulation — assembling electronics, handling fragile objects, or performing surgery. A robot assembling a phone needs to know when it has pressed a connector in firmly enough versus when it is about to break the circuit board.

**Inertial Measurement Units (IMUs)** measure acceleration and rotational velocity, telling the robot how it is moving and oriented. GPS provides global position. Encoders on motors measure joint positions and wheel rotations precisely.

The key challenge is sensor fusion — combining data from multiple sensors into a coherent understanding of the environment. Each sensor has strengths and weaknesses. Cameras fail in darkness. LIDAR fails in heavy rain. GPS fails indoors. A well-designed robot combines sensors so that the weaknesses of each are compensated by the strengths of others.

### Thinking: Decision-Making and Planning

Raw sensor data is useless without software that interprets it and decides what to do. This is where robotics meets computer science and AI.

**Mapping and localization** (often combined as SLAM — Simultaneous Localization and Mapping) lets a robot build a map of its environment while simultaneously tracking its own position within that map. This is a harder problem than it sounds — the robot does not know where it is or what the environment looks like, and must figure out both simultaneously from noisy sensor data. SLAM algorithms are among the most studied problems in robotics and are essential for any robot that moves through an unknown space.

**Path planning** calculates a collision-free route from the robot's current position to its goal. For a robot arm, this means finding joint trajectories that reach the target without hitting obstacles. For a mobile robot, it means finding a route through a building or across terrain. Path planning must handle active environments — obstacles move, doors open and close, people walk unpredictably.

**Task planning** operates at a higher level: what sequence of actions should the robot perform to accomplish a goal? "Make a sandwich" breaks down into opening the bread bag, placing bread on the counter, opening the peanut butter jar, picking up a knife, spreading peanut butter, and so on. Each sub-task requires its own motion planning. Hierarchical planning — decomposing high-level goals into lower-level actions — mirrors how humans approach complex tasks.

**Machine learning** is increasingly central to robotic decision-making. [Machine learning](/machine-learning) allows robots to learn from experience rather than being explicitly programmed for every situation. [Reinforcement learning](/reinforcement-learning) trains robots to perform tasks through trial and error. Deep learning processes visual data for object recognition and scene understanding. These approaches are essential for handling the unpredictability of real-world environments.

### Acting: Motors, Actuators, and Movement

The "act" in sense-think-act requires physical hardware that converts decisions into motion.

**Electric motors** are the most common actuators in robotics. DC motors, stepper motors, and servo motors provide precise control of rotation speed and position. A typical six-axis industrial robot arm contains six or more servo motors, each controlling a single joint.

**Hydraulic actuators** use pressurized fluid to generate enormous force. They are common in heavy-duty robots — construction equipment, large manufacturing robots, and the legs of Boston Dynamics' Atlas humanoid. Hydraulics offer unmatched power density but are messy (fluid leaks), noisy, and difficult to control precisely.

**Pneumatic actuators** use compressed air. They are simpler and cleaner than hydraulics but harder to control with precision because air is compressible. Soft robotics makes extensive use of pneumatic actuation in flexible, compliant structures.

**End effectors** are the tools at the end of a robot arm — grippers, suction cups, welding torches, spray nozzles, surgical instruments. The end effector determines what the robot can actually do. A robot arm without an appropriate end effector is like a human hand wearing boxing gloves — powerful but not very useful for delicate work.

## Types of Robots

The robotics field has diversified into dozens of application domains, each with different requirements.

### Industrial Robots

The workhorses of automation. About 3.9 million industrial robots operated worldwide in 2023, with roughly 553,000 new units installed that year. They perform welding, painting, assembly, material handling, and inspection in factories.

Industrial robots are typically large, fast, powerful, and extremely precise — positioning accuracy of 0.02 mm is standard. They operate in caged-off areas because their speed and force can be lethal to humans. An industrial robot arm can swing a 100-kg payload at several meters per second. You do not want to be in the way.

The automotive industry is the largest user, followed by electronics, metals, chemicals, and food/beverage. South Korea, Japan, Germany, and Singapore have the highest robot density (robots per 10,000 manufacturing workers).

### Collaborative Robots (Cobots)

Cobots are designed to work alongside humans safely — without cages, without safety fences. They use force-limiting sensors that stop the robot immediately upon unexpected contact. They move more slowly than industrial robots and carry lighter payloads (typically under 35 kg), but their ability to work in human spaces without expensive safety infrastructure makes them attractive for small and medium businesses.

Universal Robots, founded in Denmark in 2005, essentially created this market category. Cobots accounted for about 10% of all industrial robot installations in 2023 and are growing faster than the overall market. They are used for machine tending, quality inspection, packaging, and assembly — tasks that are too complex or variable for full automation but too repetitive or ergonomically stressful for humans to perform all day.

### Mobile Robots

Robots that move through the environment rather than staying fixed in one location.

**Autonomous Mobile Robots (AMRs)** work through warehouses, hospitals, and office buildings. Amazon operates over 750,000 mobile robots in its fulfillment centers, moving shelves of products to human workers for picking. Hospital AMRs deliver medications, meals, and lab samples, reducing staff walking time.

**Self-driving vehicles** are mobile robots operating on public roads. The sensing, planning, and control challenges are immense because the environment is unstructured, active, and shared with unpredictable human drivers and pedestrians. Companies like Waymo, Cruise, and several Chinese companies have deployed limited robo-taxi services, but fully autonomous driving in all conditions remains an unsolved problem.

**Drones** (unmanned aerial vehicles) are flying mobile robots used for photography, mapping, agriculture, delivery, inspection, and military applications. The global drone market exceeded $30 billion in 2024. Agricultural drones monitor crop health, spray pesticides, and map fields with precision that would be impossible from the ground.

### Surgical Robots

The da Vinci Surgical System, made by Intuitive Surgical, has been installed in over 8,000 hospitals worldwide. It does not operate autonomously — a surgeon controls it from a console — but it provides enhanced precision, 3D visualization, and the ability to operate through tiny incisions. Robotic surgery reduces recovery time, blood loss, and complications for many procedures.

Fully autonomous surgical robots remain in the research phase, though AI-assisted systems that provide real-time guidance during surgery are advancing rapidly.

### Humanoid Robots

Humanoids capture the public imagination but represent a tiny fraction of the robotics market. Building a bipedal robot that can walk, balance, manipulate objects, and work through human environments is extraordinarily difficult. The engineering challenges are enormous: bipedal walking is inherently unstable (you are constantly falling and catching yourself), hands require dozens of degrees of freedom for dexterous manipulation, and the entire system must be powered by batteries compact enough to be carried.

Boston Dynamics' Atlas can perform backflips, work through obstacle courses, and recover from pushes. Tesla's Optimus aims to bring humanoid robots to market for general-purpose labor. Figure AI has demonstrated humanoids performing warehouse tasks. These are impressive demonstrations, but commercially viable general-purpose humanoid robots remain years away.

The argument for humanoid form factors is that human environments are designed for human bodies — doors, stairs, tools, workspaces. A robot shaped like a human can theoretically operate in any space a human can, without modifying the environment. Whether this advantage justifies the enormous engineering complexity is the central debate in humanoid robotics.

### Specialized Domains

**Underwater robots** (ROVs and AUVs) inspect oil pipelines, map ocean floors, and study marine biology at depths humans cannot reach. **Space robots** include Mars rovers (Curiosity, Perseverance), the International Space Station's robotic arm (Canadarm2), and satellite servicing robots. **Agricultural robots** weed fields, pick fruit, monitor crop health, and apply fertilizer with precision. **Construction robots** lay bricks, 3D-print buildings, and demolish structures.

## The Software Side: ROS and Robot Programming

Hardware gets the attention, but software is where the real complexity lives. A robot arm without software is a sculpture.

### Robot Operating System (ROS)

ROS is not actually an operating system — it is a middleware framework that runs on Linux. Developed at Stanford and Willow Garage starting in 2007, ROS provides standardized communication between robot components, pre-built drivers for common sensors and actuators, and a massive library of algorithms for navigation, manipulation, perception, and planning.

ROS has become the de facto standard in robotics research and is increasingly adopted in industry. ROS 2 (released 2017, continuously updated) adds real-time capabilities, improved security, and support for multi-robot systems. The ROS ecosystem includes over 2,000 software packages contributed by a global community.

### Simulation

Testing robot software on physical hardware is slow, expensive, and potentially dangerous. Simulation environments — Gazebo, NVIDIA Isaac Sim, MuJoCo — allow engineers to test control algorithms, train [deep learning](/deep-learning) models, and debug software in virtual environments before deploying on real robots.

The challenge of sim-to-real transfer (making behaviors learned in simulation work on physical hardware) remains significant. Simulators do not perfectly model friction, contact dynamics, sensor noise, or mechanical imprecision. Techniques like domain randomization (training across many simulated variations) help bridge this gap.

## The AI-Robotics Convergence

The biggest shift in modern robotics is the integration of AI — particularly large language models and vision-language models — into robot control systems.

Traditional robot programming requires explicitly coding every behavior: if you see X, do Y. This works in structured environments (factories) but fails in unstructured ones (homes, construction sites, hospitals) where situations are unpredictable.

Foundation models trained on massive datasets of text, images, and video are giving robots something closer to common sense. Google DeepMind's RT-2 model can interpret natural language instructions ("pick up the empty can and put it in the recycling bin") and translate them into robot actions, even for objects and tasks it has never specifically encountered before. This is not full autonomy — it is still limited and error-prone — but it represents a fundamentally different approach to robot programming.

The vision: instead of programming specific behaviors for every situation, you give the robot a general understanding of the world (via a foundation model) and let it figure out how to accomplish goals in context. If this approach matures, it could make robots useful in environments that are currently too variable and unpredictable for traditional automation.

## Ethics and Society

Robotics raises profound societal questions that engineers alone cannot answer.

**Employment displacement**: Automation has historically created more jobs than it destroyed — but the transition can be painful for individuals and communities. Manufacturing workers displaced by robots may not have the skills or geographic mobility to take new jobs in robot maintenance or AI development. How society manages this transition is as much a political and economic question as a technological one.

**Military robots**: Armed drones, autonomous weapons systems, and robotic soldiers raise questions about accountability (who is responsible when an autonomous weapon kills a civilian?), escalation (does making war less costly to one side make war more likely?), and the ethics of delegating lethal decisions to machines. The Campaign to Stop Killer Robots and many AI researchers advocate for international regulation of autonomous weapons.

**Privacy**: Robots equipped with cameras, microphones, and sensors in homes, hospitals, and public spaces collect enormous amounts of data. Who owns this data? How is it used? How is it secured? These questions are often unresolved.

**Bias and access**: AI systems powering robots can inherit biases from training data. Facial recognition systems have demonstrated lower accuracy for darker-skinned faces. Voice recognition systems work better for some accents than others. Ensuring that robots serve all people equitably requires deliberate attention to fairness in design.

## Where Robotics Is Heading

Several trends will shape robotics over the next decade.

**General-purpose humanoids**: Multiple well-funded companies (Tesla, Figure, 1X, Agility Robotics) are racing to produce commercially viable humanoid robots. If they succeed, the labor implications could be enormous.

**Soft robotics**: Robots made from flexible, compliant materials rather than rigid metal. Soft robots can handle delicate objects (fruit picking, elderly care), squeeze through confined spaces, and interact safely with humans. The field draws on [materials science](/materials-science) and biologically-inspired design.

**Swarm robotics**: Large numbers of simple, inexpensive robots coordinating to accomplish tasks collectively — like ants building a colony. Potential applications include search and rescue, environmental monitoring, and construction.

**Edge AI**: Running [machine learning](/machine-learning) models directly on robot hardware rather than sending data to the cloud reduces latency and enables faster responses. Advances in edge computing chips are making this increasingly practical.

## Key Takeaways

Robotics is the field dedicated to creating machines that can sense, think, and act in the physical world. It integrates mechanical engineering, electrical engineering, computer science, and artificial intelligence into systems ranging from industrial arms to surgical instruments to Mars rovers.

The sense-think-act cycle — perceiving the environment through sensors, processing information to make decisions, and executing physical actions through actuators — defines every robot. The field has produced roughly 3.9 million industrial robots, hundreds of thousands of warehouse robots, and specialized systems for surgery, agriculture, undersea exploration, and space.

The current frontier is integrating AI foundation models into robot control, potentially enabling robots to understand natural language instructions and operate in unstructured environments. If this succeeds, it will expand robotics from structured industrial settings into homes, construction sites, hospitals, and other spaces that have resisted automation. The technological, economic, and ethical implications of that expansion are among the most consequential questions of the coming decades.
