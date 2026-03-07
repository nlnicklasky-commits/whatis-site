---
title: "What Is Signal Processing?"
slug: signal-processing
description: "Signal processing is the field of engineering and mathematics that analyzes, modifies, and extracts information from signals like audio, images, and data."
category: technology
tags: ["signal processing", "electronics", "digital signals", "analog signals", "filtering", "fourier transform", "dsp"]
heroImage: "/images/articles/signal-processing-hero.webp"
heroAlt: "Editorial photograph representing the concept of signal processing"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 11
wordCount: 3013
tier: "1"
relatedArticles: ["acoustics", "digital-signal-processing", "circuit-design", "algorithms", "machine-learning"]
externalSources:
  - title: "IEEE Signal Processing Society"
    url: "https://signalprocessingsociety.org/"
  - title: "MIT OpenCourseWare - Signals and Systems"
    url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/"
  - title: "DSP Guide by Steven W. Smith"
    url: "https://www.dspguide.com/"
  - title: "Wikipedia - Signal Processing"
    url: "https://en.wikipedia.org/wiki/Signal_processing"
faq:
  - q: "What is the difference between analog and digital signal processing?"
    a: "Analog signal processing works with continuous signals using physical components like resistors, capacitors, and operational amplifiers. Digital signal processing (DSP) converts signals into numbers, processes them mathematically using processors or software, and converts them back. Digital processing offers more flexibility, precision, and reproducibility, while analog processing can be faster and more power-efficient for simple tasks."
  - q: "What is the Fourier transform in simple terms?"
    a: "The Fourier transform breaks a complex signal into its individual frequency components — like decomposing a musical chord into the individual notes that make it up. It reveals which frequencies are present in a signal and how strong each one is, converting a time-domain representation into a frequency-domain representation."
  - q: "Where is signal processing used in everyday life?"
    a: "Your phone uses signal processing for voice calls (echo cancellation, noise reduction, compression), music playback (equalization, streaming codec decoding), photos (image enhancement, HDR processing, compression), and cellular communication (modulation, error correction). Medical devices, automotive radar, hearing aids, and streaming video all depend on it too."
  - q: "What is sampling rate and why does it matter?"
    a: "Sampling rate is how many times per second an analog signal is measured when converting it to digital. The Nyquist theorem states you must sample at least twice the highest frequency in the signal to avoid losing information. CDs sample at 44,100 Hz because human hearing tops out around 20,000 Hz, so 44,100 Hz captures all audible frequencies."
  - q: "Do I need advanced math to learn signal processing?"
    a: "Signal processing relies heavily on calculus, linear algebra, complex numbers, and probability theory. The Fourier transform requires comfort with integration and complex exponentials. That said, many practical DSP concepts can be understood intuitively before diving into the math, and software tools like MATLAB and Python's SciPy library handle much of the computation."
---

# What Is Signal Processing?

Signal processing is the engineering and mathematical discipline concerned with analyzing, modifying, synthesizing, and extracting useful information from signals. A signal is any quantity that varies over time, space, or some other independent variable — a sound wave, a radio transmission, a stock price, an image, a heartbeat. Signal processing gives us the tools to understand what's in a signal, clean it up, compress it, or pull out the information we care about. Every phone call you make, every photo you take, every song you stream, and every medical scan you receive depends on signal processing techniques developed over the past century.

## What Is a Signal, Really?

The word "signal" covers an enormous range of phenomena. Formally, a signal is a function that conveys information about the behavior or attributes of some phenomenon. Less formally, it's anything that changes in a way that carries meaning.

**Audio signals** are variations in air pressure over time. A microphone converts these pressure variations into an electrical voltage that varies correspondingly — a higher pressure produces a higher voltage. This electrical signal is an analog representation of sound.

**Images** are signals too — two-dimensional signals where the intensity (brightness) or color varies across spatial coordinates (x and y). A digital photograph is a 2D signal sampled on a grid of pixels.

**Radio signals** are electromagnetic waves whose frequency, amplitude, or phase are modulated to carry information. Your phone communicates with cell towers using radio signals that are processed to extract voice, data, and control information.

**Biomedical signals** include ECG (heart electrical activity), EEG (brain electrical activity), EMG (muscle electrical activity), and blood oxygen levels. Processing these signals helps diagnose diseases and monitor health.

**Sensor data** from accelerometers, gyroscopes, temperature probes, pressure transducers, and thousands of other sensors produce signals that need processing to yield useful measurements.

The common thread: information is embedded in how something changes, and signal processing extracts that information.

## The Fourier Transform: The Single Most Important Idea

If you learn one thing about signal processing, make it this: the Fourier transform. Named after French mathematician Jean-Baptiste Joseph Fourier (1768-1830), it's the idea that any signal — no matter how complex — can be decomposed into a sum of simple sine waves of different frequencies, amplitudes, and phases.

### The Intuition

Imagine you're listening to a symphony orchestra. The sound hitting your eardrums is a single, complex pressure wave — one signal. But your brain somehow separates it into individual instruments: you hear the violins, the trumpets, the timpani. Your auditory system is performing something like a Fourier transform — decomposing one complex signal into its frequency components.

The Fourier transform does this mathematically. Feed it a signal that varies over time (the **time domain**), and it produces a description of which frequencies are present and how strong each one is (the **frequency domain**). A pure A-440 tuning fork produces a single spike at 440 Hz. A chord produces spikes at each note's frequency. A human voice produces a complex pattern of frequency components that shifts as you speak.

### Why Frequency Matters

Thinking in terms of frequency (rather than time) is profoundly useful because many real-world phenomena have natural frequency characteristics.

A telephone line transmits frequencies between about 300 and 3,400 Hz — the range needed for intelligible speech. Frequencies outside this band are noise. In the time domain, the noise is mixed inseparably with the speech. In the frequency domain, they're separate — you can simply remove everything outside the speech band. This is **filtering**, and it's the most common signal processing operation.

Musical instruments have characteristic frequency spectra — that's why a piano and a guitar playing the same note sound different. Medical conditions produce specific patterns in ECG frequency spectra. Mechanical vibrations at particular frequencies indicate specific types of bearing failure. The frequency domain reveals structure that's invisible in the time domain.

### The Math (Gently)

The continuous Fourier transform of a signal x(t) is defined as:

X(f) = integral from negative infinity to infinity of x(t) times e^(-j2 pi f t) dt

That looks scary, but the core idea is: multiply your signal by sine waves of different frequencies, and see how well each frequency matches. A strong match (large integral) means that frequency is present in the signal. A weak match means it isn't.

The inverse Fourier transform converts back from frequency to time, confirming that no information is lost — the time-domain and frequency-domain representations contain exactly the same information, just organized differently.

For digital signals, we use the Discrete Fourier Transform (DFT), which works with sampled data. The Fast Fourier Transform (FFT) — an [algorithm](/algorithms) published by Cooley and Tukey in 1965 — computes the DFT in O(N log N) operations instead of O(N^2), making it fast enough for real-time processing. The FFT is arguably one of the most important algorithms ever developed, and it's used trillions of times per second across the world's computing infrastructure.

## Analog Signal Processing

Before digital computers, all signal processing was analog — performed using physical electronic components that directly manipulate electrical signals.

### Passive Filters

The simplest filters use just resistors, capacitors, and inductors. A **low-pass filter** (resistor + capacitor) passes low frequencies and attenuates high frequencies — useful for removing high-frequency noise from an audio signal. A **high-pass filter** does the opposite — removing low-frequency rumble while passing speech or music frequencies. A **band-pass filter** passes only a specific range of frequencies.

These filters work because capacitors and inductors have frequency-dependent impedance. A capacitor blocks DC (zero frequency) but passes high frequencies. An inductor does the reverse. Combining them with resistors creates circuits whose behavior changes with frequency — the fundamental mechanism of analog filtering.

### Operational Amplifiers

The operational amplifier (op-amp) — a high-gain differential amplifier — is the building block of more sophisticated analog processing. Op-amp circuits can amplify signals, sum multiple signals together, integrate signals over time, differentiate signals, and implement active filters with sharper cutoff characteristics than passive filters.

Active analog filters — the Sallen-Key, multiple feedback, and state-variable topologies — use op-amps with resistors and capacitors to create filters with precisely controlled frequency responses. These filters are still used today in [circuit design](/circuit-design) for applications where digital processing introduces unacceptable latency or where the signal is already analog (like in audio preamplifiers and sensor front ends).

### Phase-Locked Loops

The phase-locked loop (PLL) — a circuit that locks onto and tracks a frequency in a noisy signal — is one of analog processing's cleverest inventions. PLLs are used in radio receivers to tune in stations, in communication systems to synchronize clocks, and in frequency synthesizers to generate precise frequencies from a single reference oscillator. Your phone's cellular modem uses PLLs. So does GPS. So does every digital clock that keeps accurate time.

## [Digital Signal Processing](/digital-signal-processing)

The transition from analog to digital signal processing — starting in the 1960s and accelerating through the 1980s — transformed the field. Digital processing offers advantages that analog can't match: perfect reproducibility, arbitrary precision, easy reconfiguration, and the ability to implement algorithms that have no analog equivalent.

### Sampling and Quantization

Converting an analog signal to digital involves two steps.

**Sampling** measures the analog signal at regular intervals. The sample rate (number of measurements per second) must be at least twice the highest frequency in the signal — this is the **Nyquist theorem**, proved by Harry Nyquist in 1928 and Claude Shannon in 1949. If you sample below the Nyquist rate, high-frequency content "folds" into lower frequencies, creating false signals called **aliases**. This is why CD audio uses 44,100 Hz sampling — it captures the full audible range (up to roughly 20 kHz) with a small safety margin.

**Quantization** converts each sample from a continuous value to a discrete number with finite precision. CD audio uses 16-bit quantization (65,536 possible values per sample), giving a active range of about 96 dB. Professional audio uses 24-bit quantization (16.7 million values, 144 dB active range). The difference between the actual analog value and the quantized value is **quantization noise** — an unavoidable consequence of finite precision.

### Digital Filters

Digital filters process signals using mathematical operations — addition, multiplication, and delay — applied to sampled data. They fall into two categories:

**FIR (Finite Impulse Response) filters** compute each output sample as a weighted sum of a fixed number of input samples. The weights (called **coefficients** or **taps**) define the filter's behavior. A 101-tap FIR low-pass filter uses the current sample plus the 100 most recent samples, multiplied by carefully chosen coefficients, to produce each output sample.

FIR filters have a key advantage: they can have perfectly linear phase response, meaning they delay all frequencies equally. This is critical for applications where signal shape matters — audio production, biomedical signal analysis, and data communications.

**IIR (Infinite Impulse Response) filters** use feedback — the output depends on both the input and previous outputs. This feedback makes IIR filters more computationally efficient (they can achieve sharp cutoffs with fewer coefficients) but introduces potential instability and nonlinear phase response.

The design of digital filters — choosing the type, order, and coefficients to achieve a desired frequency response — is a mature engineering discipline with well-established methods. Tools like MATLAB's Filter Design Toolbox and Python's SciPy library make filter design accessible to engineers without deep specialization in signal processing.

### DSP Processors

Dedicated DSP processors — specialized microchips optimized for signal processing operations — perform the multiply-accumulate (MAC) operations that filtering requires at extraordinary speeds. A modern DSP chip can perform billions of MACs per second, enabling real-time processing of audio, video, radar, and communications signals.

Texas Instruments, Analog Devices, and Qualcomm are major DSP chip manufacturers. Your phone's modem chip contains DSP cores that process cellular signals in real time — demodulating, error-correcting, and decoding data at speeds that would have required a roomful of equipment 30 years ago.

For many applications, general-purpose processors (CPUs) or graphics processors (GPUs) now have enough performance to handle signal processing tasks that once required dedicated DSP hardware. Python libraries like NumPy and SciPy run signal processing [algorithms](/algorithms) on ordinary computers, making the field accessible to anyone who can write code.

## Applications That Shape Your Day

Signal processing is invisible precisely because it works so well. Here's where it shows up.

### Audio and Speech

**Noise cancellation** in headphones uses adaptive filtering — a microphone picks up ambient noise, the DSP processes it to create an inverted copy, and the inverted signal is mixed with your music to cancel the noise. Active noise cancellation can reduce ambient noise by 20-30 dB, which is the difference between a noisy airplane cabin and a quiet room.

**Speech recognition** (Siri, Alexa, Google Assistant) starts with signal processing: the raw audio is filtered, windowed into short segments, converted to a frequency-domain representation (typically Mel-frequency cepstral coefficients, or MFCCs), and then fed to a [machine learning](/machine-learning) model for recognition. The signal processing front end is what makes the raw audio usable by the AI.

**Audio compression** (MP3, AAC, Opus) uses psychoacoustic models — understanding of what the human ear can and can't hear — to remove inaudible components of an audio signal. An MP3 at 128 kbps is about 1/11th the size of CD audio, with quality losses that most listeners can't detect in casual listening. The compression relies entirely on frequency-domain analysis and perceptual modeling — pure signal processing.

**Echo cancellation** on phone calls removes the echo that would otherwise occur when your phone's speaker output leaks into its microphone. An adaptive filter estimates the echo path and subtracts the predicted echo from the microphone signal. This runs in real time during every phone call, and you'd notice immediately if it stopped working.

### Image and Video

**Image compression** (JPEG, PNG, HEIF) applies 2D signal processing — the Discrete Cosine Transform (DCT) for JPEG, wavelet transforms for JPEG 2000 — to reduce file sizes while preserving visual quality. The DCT decomposes each 8x8 pixel block into frequency components, and components that contribute little to perceived quality are discarded or quantized coarsely.

**Video compression** (H.264, H.265/HEVC, AV1) adds temporal processing — exploiting the fact that most of a video frame is similar to the previous frame. Motion estimation algorithms find how blocks of pixels have moved between frames, and only the differences are encoded. Without video compression, streaming a 4K video would require about 12 Gbps of bandwidth — roughly 1,000 times more than the compressed stream actually uses.

**[Medical imaging](/medical-imaging)** — CT scans, MRI, and ultrasound — relies on signal processing at every step. CT reconstruction uses the inverse Radon transform (a cousin of the Fourier transform) to create cross-sectional images from X-ray projections. MRI reconstruction uses the inverse 2D Fourier transform to convert spatial frequency data into anatomical images. Ultrasound uses beamforming — processing signals from multiple transducer elements to focus the sound beam and form images.

### Communications

Every wireless communication system — Wi-Fi, cellular, Bluetooth, satellite — is fundamentally a signal processing system.

**Modulation** encodes data onto a carrier wave. Modern systems use sophisticated modulation schemes like OFDM (Orthogonal Frequency-Division Multiplexing), which splits data across thousands of closely-spaced sub-carriers. 5G cellular, Wi-Fi 6, and digital TV broadcasting all use OFDM. The signal processing required to generate and decode OFDM signals — including FFT, channel estimation, equalization, and error correction — happens billions of times per second in your phone.

**Error correction coding** adds redundancy to transmitted data so that errors introduced by the wireless channel can be detected and corrected. Modern codes like LDPC (Low-Density Parity-Check) and polar codes can operate within a fraction of a decibel of the theoretical limit predicted by Shannon's channel capacity theorem. The design and decoding of these codes is a signal processing problem.

**MIMO (Multiple-Input Multiple-Output)** uses multiple antennas at both transmitter and receiver to multiply data throughput. Your Wi-Fi router with 4 antennas can send 4 independent data streams simultaneously, quadrupling throughput. The signal processing required to separate these overlapping signals — using matrix algebra and adaptive algorithms — is computationally intense but runs in real-time in commodity hardware.

### Radar and Sonar

Radar sends a radio pulse and processes the returning echo to determine the range, speed, and direction of targets. Pulse compression, Doppler filtering, and beamforming — all signal processing techniques — allow modern radars to detect targets hundreds of kilometers away and measure their velocity to within fractions of a meter per second.

Automotive radar (used in adaptive cruise control and collision avoidance) operates at 77 GHz and uses FMCW (Frequency-Modulated Continuous Wave) signal processing to detect vehicles, pedestrians, and obstacles. The signal processing chain — mixing, FFT, detection, and tracking — runs on a chip smaller than a postage stamp.

Sonar uses similar principles with sound waves instead of radio waves. Submarine sonar arrays process signals from hundreds of hydrophones using beamforming algorithms to detect and locate other vessels. The [acoustics](/acoustics) are different from radar, but the signal processing mathematics is remarkably similar.

## Adaptive and Statistical Signal Processing

Some of the most powerful signal processing techniques adapt their behavior based on the signal they're processing.

**Adaptive filters** adjust their coefficients in real time to minimize an error signal. The Least Mean Squares (LMS) algorithm, developed by Bernard Widrow and Ted Hoff in 1960, is the most widely used adaptive algorithm — running in billions of devices for echo cancellation, noise cancellation, and channel equalization.

**Kalman filtering** combines noisy measurements with a mathematical model of the system being measured to produce optimal estimates of the system's state. GPS receivers use Kalman filters to combine satellite signals with motion models, smoothing out measurement noise and providing accurate position estimates even when some satellites are temporarily obscured. Aircraft autopilots, spacecraft navigation, and [financial modeling](/financial-modeling) all use Kalman filtering.

**Spectral estimation** determines the frequency content of a signal from finite, noisy observations. Methods range from simple periodograms (just compute the FFT and look at the magnitude) to sophisticated parametric models (AR, ARMA) and modern techniques like the MUSIC algorithm that can resolve closely-spaced frequencies with remarkable precision.

## The Intersection with Machine Learning

Signal processing and [machine learning](/machine-learning) have converged dramatically in the past decade. Deep neural networks now perform tasks — speech recognition, image classification, [natural language processing](/natural-language-processing) — that were previously done with hand-designed signal processing algorithms.

But the relationship is symbiotic, not adversarial. Signal processing provides the preprocessing (filtering, normalization, feature extraction) that makes raw data usable by ML models. ML provides [pattern recognition](/pattern-recognition) capabilities that exceed what classical signal processing can achieve for complex, nonlinear problems.

Modern systems often combine both: a signal processing front end (filtering, FFT, feature extraction) feeds a machine learning back end (neural network, support vector machine, random forest). The signal processing cleans and structures the data; the ML interprets it.

The engineers who understand both disciplines — who can design a filter and train a neural network, who understand the Fourier transform and backpropagation — are the ones building the systems that actually work in the real world.

## Why Signal Processing Matters

Signal processing is the invisible infrastructure of modern technology. Without it, there's no wireless communication, no digital music, no medical imaging, no radar, no [digital photography](/digital-photography), no voice assistants, no video streaming. The theory was developed by mathematicians and engineers over the past two centuries, and it works so well that most people never think about it.

The field continues to evolve. Compressed sensing promises to reconstruct signals from far fewer measurements than traditional sampling theory requires. Quantum signal processing explores how quantum computation might accelerate signal processing algorithms. Graph signal processing extends classical techniques to signals defined on networks and irregular structures.

But the foundation remains: signals carry information, and signal processing extracts it. From a doctor reading an ECG to a teenager streaming music to a radar tracking an incoming aircraft, the same mathematical principles — Fourier transforms, filtering, sampling, estimation — make it all work. That's the quiet power of a field most people have never heard of.
