---
title: "What Is Computer Graphics?"
slug: computer-graphics
description: "Computer graphics is the creation and manipulation of visual content using computers, from 3D rendering and animation to real-time gaming and VR. Discover th..."
category: technology
tags: ["digital art", "visuals", "3d modeling", "animation", "gaming", "virtual reality", "cgi"]
heroImage: "/images/articles/computer-graphics-hero.webp"
heroAlt: "Editorial photograph representing the concept of computer graphics"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 2920
tier: "2"
relatedArticles: ["computer-science", "computer-hardware", "algorithms", "computer-architecture"]
externalSources:
  - title: "ACM SIGGRAPH - Computer Graphics Resources"
    url: "https://www.siggraph.org/"
  - title: "OpenGL Specification - Khronos Group"
    url: "https://www.khronos.org/opengl/"
  - title: "GPU Gems - NVIDIA Developer"
    url: "https://developer.nvidia.com/gpugems/gpugems/contributors"
  - title: "Computer Graphics - Stanford University"
    url: "https://graphics.stanford.edu/"
  - title: "Pixar's RenderMan"
    url: "https://renderman.pixar.com/"
faq:
  - q: "What is the difference between 2D and 3D computer graphics?"
    a: "2D graphics operate in a flat plane with width and height — think digital paintings, user interfaces, and pixel art. 3D graphics add depth, creating objects in virtual three-dimensional space that can be viewed from any angle. 3D objects are defined by geometry (meshes of vertices and polygons), then rendered into 2D images for display on your screen."
  - q: "Do I need a powerful GPU for computer graphics work?"
    a: "It depends on what you're doing. Basic 2D graphics and simple 3D work run fine on integrated graphics. But real-time 3D rendering, video game development, CGI animation, and machine learning for graphics require a dedicated GPU. Professional 3D rendering in tools like Blender, Maya, or Unreal Engine benefits enormously from more GPU power — tasks that take hours on a weak GPU might finish in minutes on a high-end one."
  - q: "What programming languages are used in computer graphics?"
    a: "C++ is the dominant language for graphics engines and real-time rendering due to its performance. Shader languages like GLSL (OpenGL), HLSL (DirectX), and WGSL (WebGPU) run directly on the GPU. Python is popular for scripting in tools like Blender and Maya. JavaScript with WebGL or WebGPU powers browser-based graphics. Rust is gaining traction for new graphics projects."
  - q: "How does ray tracing differ from rasterization?"
    a: "Rasterization projects 3D objects onto a 2D screen and fills in pixels — it's fast but struggles with realistic reflections, shadows, and light bouncing. Ray tracing simulates actual light physics by tracing rays from the camera through each pixel into the scene, calculating how they interact with surfaces. Ray tracing produces more realistic images but is computationally expensive, which is why real-time ray tracing only became practical with dedicated hardware in GPUs starting around 2018."
  - q: "What is the difference between CGI and animation?"
    a: "CGI (Computer Generated Imagery) refers to any visual content created with computers — still images, visual effects in films, or fully computer-generated scenes. Animation specifically refers to creating the illusion of movement, whether through CGI, hand-drawn art, stop-motion, or other techniques. All CGI animation is CGI, but not all CGI is animated — a single rendered image is CGI but isn't animation."
---

# What Is Computer Graphics?

Computer graphics is the field of creating, manipulating, and rendering visual content using computers — encompassing everything from the pixels on your screen right now to photorealistic CGI in blockbuster films, real-time 3D video games, [medical imaging](/medical-imaging), and virtual reality environments. It's the science and art of turning mathematical descriptions into images you can see.

## From Oscilloscopes to Photorealism: A Quick History

The story of computer graphics starts in the early 1960s, and honestly, the pace of progress is staggering.

In 1963, Ivan Sutherland created Sketchpad at MIT — the first interactive computer graphics program. Users could draw geometric shapes on a screen using a light pen. It was primitive by today's standards, but the fundamental ideas (interactive manipulation, geometric transformations, object hierarchies) still underpin modern graphics systems.

By the 1970s, researchers at the University of Utah — Ed Catmull, Jim Blinn, Bui Tuong Phong, and others — developed the foundational [algorithms](/algorithms) for 3D rendering. Phong shading, texture mapping, Z-buffering. These aren't just historical footnotes. Variations of these techniques still run on your GPU every time you play a game.

The 1980s brought personal computers with graphics capabilities to ordinary people. The Commodore 64, Apple Macintosh, and Amiga put pixels in everyone's hands. Movie studios started experimenting — Tron (1982) featured 15 minutes of CGI, and audiences were amazed.

Then Pixar released Toy Story in 1995. The first entirely computer-animated feature film. It took four years and enormous computing power to produce. Today, a single high-end GPU has more rendering power than the entire render farm Pixar used for that movie.

The 2000s and 2010s saw real-time graphics catch up to what had been offline-only quality. Modern video games routinely produce visuals that would have been film-quality CGI just a decade earlier. And real-time ray tracing — long considered too expensive for interactive applications — became a reality with NVIDIA's RTX architecture in 2018.

## The Rendering Pipeline: From Math to Pixels

Every image you see on a computer screen goes through a rendering pipeline — a series of stages that transform mathematical descriptions of a scene into the colored pixels on your display.

### Geometry: Building the World

Everything in 3D graphics starts with geometry. Objects are represented as meshes — collections of vertices (points in 3D space) connected by edges to form triangles or other polygons. A simple cube needs 8 vertices and 12 triangles. A detailed character model might have millions.

Why triangles? They're the simplest polygon that defines a flat surface. Any other polygon can be broken into triangles, but a triangle can't be broken down further. This simplicity makes hardware optimization possible. Your GPU is essentially a triangle-processing machine.

Vertices store more than just position. Each vertex can carry color, texture coordinates (how images wrap onto surfaces), normal vectors (which direction the surface faces at that point), and other attributes. This per-vertex data drives everything from lighting to animation.

### Transformations: Placing Things in Space

Once you have geometry, you need to position it. This happens through a chain of mathematical transformations:

**Model transformation** moves an object from its own local coordinates into the world. A car model created centered at the origin gets translated to its position on the road, rotated to face the right direction, and scaled to the right size.

**View transformation** repositions everything relative to the camera. Instead of moving the camera, you move the entire world in the opposite direction. Mathematically identical, computationally convenient.

**Projection transformation** converts 3D coordinates to 2D. Perspective projection makes distant objects smaller (how your eyes see the world). Orthographic projection preserves sizes regardless of distance (useful for technical drawings and some game styles).

All of these are matrix multiplications. A 4x4 matrix can represent any combination of translation, rotation, scaling, and projection. This is why linear algebra is the mathematical backbone of [computer graphics](/computer-science) — and why GPUs are designed to multiply matrices absurdly fast.

### Rasterization: Filling in the Pixels

After projection, you have 2D triangles. Rasterization determines which pixels on the screen each triangle covers. For each covered pixel, the rasterizer interpolates the vertex attributes (color, texture coordinates, normals) across the triangle surface.

This sounds simple, but doing it for millions of triangles at 60+ frames per second requires extraordinary hardware efficiency. Modern GPUs can rasterize billions of triangles per second.

### Shading: Making It Look Real

Shading calculates the color of each pixel based on material properties, lighting, and viewing angle. This is where graphics get interesting — and where much of the artistry lives.

**Shaders** are small programs that run on the GPU. Vertex shaders process each vertex. Fragment shaders (also called pixel shaders) calculate the color of each pixel. Geometry shaders can modify or generate geometry. Compute shaders handle general-purpose computation.

The shader programming model is wildly parallel — thousands of shader instances run simultaneously on different data. This is what makes GPUs so powerful: they execute the same program on many data points at once. It's also why GPU architecture looks so different from [CPU architecture](/computer-architecture).

### The Z-Buffer: Handling Depth

When multiple triangles overlap the same pixel, how do you know which one is in front? The Z-buffer stores the depth of the closest triangle at each pixel. When rendering a new triangle, the GPU compares its depth at each pixel to the stored value. Closer? Draw it and update the depth. Farther away? Skip it.

This simple technique, invented in the 1970s, is still used in essentially every real-time renderer today.

## Lighting and Shading Models

Light is what makes 3D graphics look three-dimensional. Without proper lighting, a sphere looks like a flat circle.

### The Phong Model and Beyond

The Phong reflection model (1975) breaks lighting into three components:

**Ambient** — a constant base light that affects everything equally. It prevents completely black shadows, simulating light that has bounced around the environment.

**Diffuse** — light that scatters equally in all directions when it hits a rough surface. Brighter when the surface faces the light directly, darker at oblique angles. This gives objects their basic 3D shape.

**Specular** — the bright highlight on shiny surfaces. It depends on the viewing angle and the light direction, creating that reflective gleam on metal, water, or polished surfaces.

Phong shading is a simplification of real physics, but it's fast and looks decent. Modern real-time graphics use Physically Based Rendering (PBR), which more accurately models how light interacts with different materials.

### Physically Based Rendering (PBR)

PBR uses physically accurate models for how surfaces reflect light. Materials are described by properties like:

- **Albedo** — the base color of the surface
- **Metallic** — whether the surface behaves like a metal (reflects environment) or a dielectric (reflects light diffusely)
- **Roughness** — how smooth or rough the surface is at a microscopic level
- **Normal maps** — texture-encoded surface detail that affects lighting without adding geometry

PBR produces consistent, realistic results under different lighting conditions. An artist defines a material once, and it looks correct whether lit by sunlight, candlelight, or neon. This consistency is why PBR has become the standard in both games and [film production](/film-production).

### Global Illumination: The Holy Grail

Real light doesn't just travel from a light source to a surface and stop. It bounces. Multiple times. Light hitting a red wall bounces off and tints nearby surfaces with a subtle red glow. Light entering a room through a window illuminates the whole room through indirect bouncing.

Simulating this light transport accurately is called global illumination, and it's been a primary goal of graphics research for decades. Techniques include:

**Ray tracing** — tracing rays of light through a scene, following their bounces. Physically accurate but computationally demanding.

**Path tracing** — a Monte Carlo approach to ray tracing that randomly samples light paths. Given enough samples, it converges on the correct result. This is what Pixar and most film studios use for final renders.

**Radiosity** — computes light transfer between surfaces. Great for diffuse environments (architectural visualization) but doesn't handle specular reflections well.

**Light probes and screen-space techniques** — approximations used in real-time graphics. Not physically accurate, but fast enough for 60 fps.

## Real-Time Graphics: Games and Interactive Applications

Real-time graphics must produce images fast enough for interactive use — typically 30 to 144 frames per second. This constraint drives completely different engineering choices than offline rendering.

### Graphics APIs

Applications don't talk to the GPU directly. They use graphics APIs — standardized interfaces that abstract the hardware:

**OpenGL** — the veteran. Cross-platform, relatively simple, still widely used in education and some applications. Being gradually superseded.

**Vulkan** — the modern successor to OpenGL. Lower-level, offering more control and better performance but requiring significantly more code. Cross-platform.

**DirectX 12** — Microsoft's low-level graphics API for Windows and Xbox. Similar philosophy to Vulkan.

**Metal** — Apple's graphics API for macOS and iOS. Tight integration with Apple hardware.

**WebGPU** — the newest standard, bringing modern GPU access to web browsers. Will likely replace WebGL for browser-based graphics.

### Real-Time Ray Tracing

For decades, ray tracing was too expensive for real-time use. Rasterization ruled interactive graphics. Then NVIDIA introduced RT cores — dedicated hardware for ray-triangle intersection testing — in their Turing GPUs (2018).

Real-time ray tracing doesn't replace rasterization entirely. Instead, modern games use hybrid rendering: rasterization for the main image, ray tracing for specific effects like reflections, shadows, ambient occlusion, and global illumination. The result is dramatically more realistic lighting with manageable performance cost.

By 2025, ray tracing support has spread across NVIDIA, AMD, and Intel GPUs, and is standard in current-generation game consoles (PlayStation 5 and Xbox Series X).

### Game Engines: The Frameworks

Most games and interactive 3D applications are built on game engines rather than coded from scratch:

**Unreal Engine** (Epic Games) — the industry workhorse for AAA games and increasingly for film production, architectural visualization, and [automotive design](/automotive-design). Known for visual fidelity.

**Unity** — the most widely used engine by developer count, popular for indie games, mobile, AR/VR, and simulations. More accessible learning curve.

**Godot** — an open-source engine gaining significant traction, especially among indie developers.

These engines handle rendering, physics, audio, input, networking, and asset management — letting developers focus on their specific game or application rather than reinventing the wheel.

## Offline Rendering: Film and Visual Effects

When you don't need real-time frame rates, you can throw much more computation at each image. Feature films routinely spend minutes or hours rendering a single frame.

### The Production Pipeline

A typical CGI production pipeline includes:

**Modeling** — creating 3D geometry. Artists use tools like Maya, Blender, ZBrush, or 3ds Max. Characters, environments, props — everything gets modeled.

**Rigging** — building the skeleton and control system that allows a model to move. A character rig might have hundreds of controls for facial expressions alone.

**Animation** — creating movement. Keyframe animation (artist-defined poses at specific times), motion capture (recording real human movement), procedural animation (physics-driven), or combinations of all three.

**Texturing and shading** — defining what surfaces look like. Material properties, color maps, bump maps, subsurface scattering for skin — an enormous amount of artistic work goes into making things look real.

**Lighting** — placing and configuring virtual lights. Lighting artists in film studios are every bit as skilled as their real-world counterparts on physical film sets.

**Rendering** — the final computation that produces images. Studios use render farms — hundreds or thousands of machines working in parallel. A single frame of a Pixar movie might take 24+ hours to render. Multiply that by 24 frames per second, and 90 minutes of film requires astronomical computation.

**Compositing** — combining rendered elements with live-action footage, adding effects, color correction, and final polish.

### Path Tracing in Production

Modern film rendering is dominated by path tracing. Pixar's RenderMan, Autodesk's Arnold, and Chaos Group's V-Ray all use some variant. Path tracing naturally handles global illumination, caustics (light patterns formed by refraction — the bright patterns on the bottom of a swimming pool), volumetric effects (fog, clouds, smoke), and complex material interactions.

The visual difference between rasterized real-time graphics and path-traced film renders is shrinking, but it hasn't disappeared. Film renders still handle subtle light interactions that real-time approximations miss.

## Textures, Materials, and Making Surfaces Interesting

Geometry alone looks like a clay model. Textures and materials give surfaces their visual character.

### Texture Mapping

Texture mapping wraps a 2D image onto a 3D surface. The process requires UV mapping — defining how the 3D surface unfolds into 2D space so texture coordinates line up correctly. Think of it like wrapping a gift: you're mapping flat wrapping paper onto a 3D box.

Modern materials use multiple texture maps simultaneously:

- **Diffuse/Albedo map** — the base color
- **Normal map** — surface detail that affects lighting without adding geometry. Brick textures, fabric weaves, skin pores — all faked with normal maps
- **Roughness map** — per-pixel surface roughness
- **Metallic map** — per-pixel metallic properties
- **Ambient occlusion map** — pre-computed soft shadows in crevices
- **Height/displacement map** — actual geometry modification based on texture data

A skilled material artist can make a flat surface look like weathered stone, brushed metal, or human skin using just these maps. The geometry might be simple, but the visual complexity is enormous.

### Procedural Textures

Instead of painting every texture by hand, procedural textures are generated mathematically. Perlin noise (invented by Ken Perlin, who won an Academy Award for it) creates natural-looking patterns — wood grain, marble, clouds, terrain. Procedural approaches can generate infinite, non-repeating detail at any resolution.

Tools like Substance Designer let artists build procedural material graphs that produce textures algorithmically. Change a parameter, and the entire material updates. This workflow has become standard across games and film.

## Computer Graphics in Science and Medicine

Graphics isn't just for entertainment. Scientific visualization and medical imaging rely heavily on computer graphics techniques.

**Medical imaging** uses volume rendering to visualize CT scans and MRI data as 3D volumes. Surgeons plan procedures using 3D reconstructions of patient [anatomy](/anatomy). Real-time rendering guides minimally invasive surgery.

**Scientific visualization** turns abstract data into understandable images. Climate models, fluid simulations, molecular structures, astronomical data — graphics makes the invisible visible. Researchers at weather agencies use graphics to visualize atmospheric models. Physicists visualize particle collision data. Biologists explore protein structures in virtual reality.

**Architectural visualization** creates photorealistic renderings of buildings before construction. Real-time walkthroughs in Unreal Engine have largely replaced pre-rendered animations, letting clients explore designs interactively.

## The Math Behind the Magic

You can't fully understand computer graphics without appreciating the mathematics involved. The core disciplines are:

**Linear algebra** — vectors, matrices, transformations. This is the single most important math topic for graphics. Every vertex transformation, every camera projection, every lighting calculation involves linear algebra.

**Calculus** — integration for rendering equations, derivatives for surface normals and tangents, [differential equations](/differential-equations) for physics simulation.

**Trigonometry** — angles, rotations, wave functions for animation and effects.

**Statistics and probability** — Monte Carlo methods for path tracing, stochastic sampling, noise functions.

**Computational geometry** — intersection testing, mesh processing, convex hulls, spatial [data structures](/data-structures).

If you're interested in graphics programming, invest in linear algebra first. The payoff is immediate and enormous.

## Current Frontiers and What's Coming

### Neural Rendering

[Machine learning](/machine-learning) is reshaping computer graphics. Neural Radiance Fields (NeRFs) reconstruct 3D scenes from photographs — take pictures around an object, and an AI model produces a renderable 3D representation. Gaussian Splatting achieves similar results faster and with real-time rendering capability.

AI-based super-resolution (NVIDIA's DLSS, AMD's FSR) renders at lower resolution and uses neural networks to upscale the result. The output often looks as good as native high resolution, but at a fraction of the computational cost. This has become essentially mandatory for demanding real-time ray tracing.

AI-generated textures, 3D models, and even entire scenes are rapidly improving. Text-to-3D models can generate rough 3D objects from natural language descriptions. They're not production-ready yet for most uses, but the trajectory is clear.

### Virtual and Augmented Reality

VR and AR represent the next frontier for real-time graphics. The requirements are extreme: stereoscopic rendering (two viewpoints simultaneously), very high frame rates (90 fps minimum to avoid motion sickness), low latency, and wide field of view.

Foveated rendering — only rendering at full detail where the user is looking — uses eye tracking to dramatically reduce computational cost. Peripheral vision gets lower-quality rendering that you don't notice.

### Nanite and Virtual Geometry

Unreal Engine 5's Nanite system renders film-quality geometry in real time by streaming and dynamically simplifying mesh detail based on what's visible on screen. A scene with billions of triangles gets rendered at the cost of only the triangles that actually contribute to final pixels. This effectively removes polygon budgets as a constraint for artists.

## Key Takeaways

Computer graphics transforms mathematical descriptions into visual experiences — from the text and images on your screen to virtual worlds in games and films. The field sits at the intersection of mathematics, [computer science](/computer-science), art, and perception.

The rendering pipeline (geometry, transformation, rasterization, shading) remains the foundational framework, even as techniques like ray tracing and neural rendering push the boundaries of what's possible. Real-time and offline rendering are converging — what took hours to render for a Pixar movie a decade ago now runs in real time on gaming hardware.

Whether you're a developer, an artist, a scientist, or just someone who appreciates that the visuals in modern media are genuinely remarkable, computer graphics is the invisible engine making it all happen.
