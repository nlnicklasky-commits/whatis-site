---
title: "What Is Meteorology?"
slug: meteorology
description: "Meteorology is the scientific study of the atmosphere and weather. Learn how forecasting works, storm science, climate vs. weather, and career options."
category: science
tags: ["meteorology", "weather", "atmosphere", "climate", "forecasting", "storms", "earth science"]
heroImage: "/images/articles/meteorology-hero.webp"
heroAlt: "Editorial photograph representing the concept of meteorology"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2436
tier: "2"
relatedArticles: ["climatology", "data-science", "algorithms", "differential-equations", "astronomy"]
externalSources:
  - title: "NOAA - National Oceanic and Atmospheric Administration"
    url: "https://www.noaa.gov/"
  - title: "American Meteorological Society"
    url: "https://www.ametsoc.org/"
  - title: "World Meteorological Organization"
    url: "https://wmo.int/"
  - title: "Wikipedia - Meteorology"
    url: "https://en.wikipedia.org/wiki/Meteorology"
faq:
  - q: "Why are weather forecasts sometimes wrong?"
    a: "Weather is a chaotic system, meaning tiny differences in initial conditions can lead to vastly different outcomes over time. Observations have gaps (we cannot measure every point in the atmosphere), numerical models simplify real physics, and some weather phenomena like individual thunderstorms are inherently unpredictable more than a few hours out. That said, forecasts have improved dramatically: a modern 5-day forecast is as accurate as a 1-day forecast was in 1980."
  - q: "What is the difference between weather and climate?"
    a: "Weather describes short-term atmospheric conditions at a specific place and time, including temperature, precipitation, wind, and humidity. Climate is the statistical average of weather conditions over a long period, typically 30 years or more. As a common saying puts it: climate is what you expect, weather is what you get. A single cold day does not disprove climate warming, just as a single hot day does not prove it."
  - q: "How do Doppler radar systems detect tornadoes?"
    a: "Doppler radar sends out pulses of microwave energy and measures the energy reflected back by precipitation. By analyzing the frequency shift of returned signals (the Doppler effect), it can determine whether precipitation is moving toward or away from the radar. When a tornado or rotating thunderstorm is present, the radar detects a distinctive pattern of inbound and outbound velocities side by side, called a mesocyclone signature, which triggers tornado warnings."
  - q: "What education do you need to become a meteorologist?"
    a: "A bachelor's degree in meteorology, atmospheric science, or a closely related field is the standard entry requirement. The National Weather Service requires a degree with specific coursework in meteorology, calculus, physics, and computer science. Broadcast meteorologists may need a communications degree plus the AMS Certified Broadcast Meteorologist seal. Research positions typically require a master's or PhD."
---

# What Is Meteorology?

Meteorology is the scientific study of the atmosphere, with a focus on weather processes and forecasting. It examines how temperature, moisture, pressure, and wind interact to produce the weather you experience daily --- from a gentle spring rain to a Category 5 hurricane.

The atmosphere is a thin shell of gas (just 1% of Earth's radius thick, if you're generous about where "atmosphere" ends) that produces an extraordinary range of phenomena. Meteorologists work to understand and predict that behavior, and they've gotten remarkably good at it.

## Why Weather Prediction Was Impossible (Until It Wasn't)

For most of human history, weather forecasting was guesswork dressed up as [folklore](/folklore). "Red sky at morning, sailors take warning" --- some folk wisdom worked because it captured real patterns (a red sunrise can indicate approaching storm systems from the west). But predicting weather more than a few hours ahead was essentially impossible without understanding the [physics](/physics) of the atmosphere.

Three breakthroughs changed everything.

### The Telegraph (1840s)

Before the telegraph, you couldn't know what weather was happening 100 miles away until it arrived. The telegraph allowed weather observations to be transmitted faster than weather systems moved. Suddenly, you could see a storm approaching from the west and warn people in its path. The Smithsonian Institution established the first U.S. weather observation network in 1849 using telegraph stations.

### The Physics of the Atmosphere (1900s)

Vilhelm Bjerknes, a Norwegian physicist, proposed in 1904 that weather forecasting could be reduced to solving the mathematical equations governing atmospheric motion. He was right --- but the equations (the primitive equations of atmospheric motion, derived from Newton's laws and [thermodynamics](/thermodynamics)) were far too complex to solve by hand.

Lewis Fry Richardson attempted the first numerical weather prediction by hand in 1922, calculating a six-hour forecast for a single location. It took him six weeks and the result was wildly wrong (he predicted a pressure change of 145 millibars when the actual change was near zero). But his method was fundamentally correct --- the errors came from insufficient data and computational shortcuts.

### Computers (1950s)

In 1950, a team including Jule Charney used ENIAC (one of the first electronic computers) to produce the first successful computer-based weather forecast. It took 24 hours of computing to produce a 24-hour forecast --- not exactly practical. But as computers grew faster, numerical weather prediction (NWP) became viable.

Today, operational weather models run on supercomputers performing quadrillions of calculations per second. The European Centre for Medium-Range Weather Forecasts (ECMWF) operates one of the world's most powerful supercomputers, dedicated entirely to weather and climate prediction.

## How Modern Weather Forecasting Works

Weather forecasting is, at its heart, a physics problem. You observe the current state of the atmosphere, apply the laws of physics to simulate how it will evolve, and output a prediction. The reality is, of course, more involved.

### Step 1: Observation

You can't predict the atmosphere without measuring it first. The global observation network includes:

**Surface stations**: About 11,000 weather stations worldwide report temperature, humidity, pressure, wind speed and direction, precipitation, and visibility. These reports go out every hour.

**Radiosondes**: Weather balloons launched twice daily from about 900 locations worldwide. Each carries a sensor package (radiosonde) that measures temperature, humidity, and pressure as it rises through the atmosphere. Wind speed and direction are calculated from the balloon's GPS-tracked trajectory. Radiosondes provide the vertical profiles of the atmosphere that surface stations can't.

**Weather satellites**: Geostationary satellites (orbiting at 35,786 km, matching Earth's rotation so they hover over one spot) provide continuous imagery of cloud patterns, moisture, and temperatures over large areas. Polar-orbiting satellites pass over each point on Earth twice daily at lower altitude, providing higher-resolution data. The satellite fleet produces terabytes of data daily.

**Radar**: Doppler weather radar detects precipitation and measures its intensity and motion. Dual-polarization radar (now standard in the U.S.) can distinguish rain from snow, hail, and debris --- extremely useful for severe weather detection. The U.S. has 160 NEXRAD radar stations providing near-complete coverage.

**Aircraft**: Commercial aircraft report temperature, wind, humidity, and turbulence during flight through the Aircraft Meteorological Data Relay (AMDAR) program. About 3,500 aircraft contribute around 700,000 observations daily.

**Ocean buoys and ships**: Sea surface temperature, wave height, and atmospheric conditions over the oceans come from approximately 1,250 drifting buoys, 400 moored buoys, and voluntary observing ships.

### Step 2: Data Assimilation

Raw observations are scattered unevenly across the globe and taken at different times. Data assimilation combines these observations with a short-range forecast (the "first guess") to create a three-dimensional snapshot of the entire atmosphere at a specific moment. This is the initial condition for the forecast model.

The mathematics of data assimilation are formidable. The ECMWF's 4D-Var (four-dimensional variational) assimilation system processes over 800 million observations per 12-hour cycle and adjusts the model state to best fit all of them simultaneously, [accounting](/accounting) for observation errors, model errors, and the time each observation was taken.

### Step 3: Numerical Modeling

The forecast model divides the atmosphere into a three-dimensional grid and solves the [differential equations](/differential-equations) of fluid motion, thermodynamics, and moisture physics at each grid point, stepping forward in time. Modern global models use grid spacings of about 9-13 km horizontally and 100+ vertical levels.

Physical processes smaller than the grid (individual clouds, turbulence, radiation interactions with cloud droplets) can't be explicitly resolved and must be estimated using parameterization schemes. These parameterizations are a major source of forecast uncertainty --- they're approximations, and different approximations give different results.

Major operational models include:
- **GFS** (Global Forecast System) --- U.S. model, run by NCEP
- **ECMWF** (European model) --- generally considered the most accurate global model
- **GEM** (Global Environmental Multiscale) --- Canadian model
- **ICON** --- German model
- **UKMO** --- United Kingdom model

### Step 4: Ensemble Forecasting

[Running](/running) a single model once gives a single answer. But given uncertainties in observations and model physics, how confident should you be in that answer?

Ensemble forecasting runs the model many times (typically 20-50) with slightly different initial conditions and model configurations. If most runs agree, confidence is high. If they diverge, uncertainty is large. This is why modern forecasts include probability: "70% chance of rain" means roughly 70% of ensemble members produced rain.

The shift from single deterministic forecasts to probabilistic ensemble forecasts is one of the most important advances in meteorology over the past 30 years. It lets forecasters communicate uncertainty honestly instead of pretending they know exactly what will happen.

### Step 5: Human Interpretation

Despite the sophistication of computer models, human forecasters still add value. They recognize model biases (this model consistently underestimates snow in mountain terrain), incorporate local knowledge (fog forms in this valley when winds are from the south), and communicate forecasts in ways that help people make decisions.

The National Weather Service employs about 5,000 people, many of whom are operational forecasters issuing local forecasts, watches, and warnings.

## Severe Weather: When the Atmosphere Gets Violent

Severe weather is where meteorology becomes literally life-and-death.

### Thunderstorms

About 40,000 thunderstorms occur worldwide each day, producing about 8 million lightning strikes. A typical thunderstorm requires three ingredients: moisture, instability (warm air below cold air), and a lifting mechanism (front, sea breeze, terrain, or convergence).

Severe thunderstorms produce large hail (diameter 1 inch or greater), damaging winds (58+ mph), and/or tornadoes. Supercells --- thunderstorms with persistent rotating updrafts --- are the most dangerous and produce the majority of significant tornadoes.

### Tornadoes

The United States averages about 1,200 tornadoes per year, more than any other country. Tornado intensity is rated on the Enhanced Fujita (EF) Scale from EF0 (minor damage, 65-85 mph winds) to EF5 (incredible destruction, 200+ mph winds). The deadliest U.S. tornado killed 695 people in the Tri-State Tornado of 1925.

Forecasting individual tornadoes remains one of meteorology's great challenges. Meteorologists can identify conditions favorable for tornadoes with good skill days in advance and can issue tornado warnings with lead times averaging 10-15 minutes using Doppler radar. But predicting exactly where and when a tornado will form is still beyond current capability.

### Hurricanes (Tropical Cyclones)

Hurricanes are massive low-pressure systems that form over warm ocean water (at least 26.5 degrees Celsius). They're classified on the Saffir-Simpson Scale from Category 1 (74-95 mph) to Category 5 (157+ mph). Hurricane Katrina (2005) caused over $170 billion in damage and killed more than 1,800 people. Hurricane Maria (2017) killed an estimated 2,975 in Puerto Rico.

Hurricane track forecasting has improved dramatically. The average 5-day track forecast error has decreased from about 500 miles in 1990 to roughly 150 miles today. Intensity forecasting, however, has improved more slowly --- rapid intensification events (where a hurricane strengthens dramatically in a short period) remain particularly hard to predict.

### Winter Storms

Blizzards, ice storms, and nor'easters are major killers and economic disruptors. A single winter storm can paralyze the eastern United States, causing billions in economic losses. Snow forecasting is notoriously difficult because the rain-snow boundary is exquisitely sensitive to temperature profiles that models sometimes get wrong by a fraction of a degree.

## Atmospheric Layers and Structure

The atmosphere has distinct layers, each with different properties:

**Troposphere** (0-12 km): Where virtually all weather occurs. Temperature decreases with altitude (about 6.5 degrees Celsius per kilometer). Contains 80% of the atmosphere's mass.

**Stratosphere** (12-50 km): Temperature increases with altitude due to ozone absorbing UV radiation. The ozone layer sits here. Jet aircraft cruise in the lower stratosphere. Weather doesn't occur here in the conventional sense, but stratospheric events can influence tropospheric weather weeks later.

**Mesosphere** (50-80 km): Temperature decreases again. Meteors burn up here. The coldest temperatures in the atmosphere occur at the mesopause (~-90 degrees Celsius).

**Thermosphere** (80-700 km): Temperature increases dramatically due to solar radiation absorption. The International Space Station orbits here. Auroras occur in the lower thermosphere.

## Meteorology and Climate Science

Meteorology and [climatology](/climatology) are related but distinct. Weather is what's happening right now (or this week). Climate is the statistical pattern of weather over decades.

Climate science uses many of the same physics and modeling techniques as weather forecasting but applies them over much longer timescales. Climate models run the same basic equations but at coarser resolution and for centuries instead of days. They're not trying to predict whether it will rain on March 15, 2050 --- they're predicting the statistical distribution of temperature and precipitation over decades.

The relationship between meteorology and [climate change](/climate-change) is complex. Global warming is altering the [statistics](/statistics) of weather events --- more heat energy in the atmosphere means more fuel for storms, higher humidity levels, and shifted precipitation patterns. Attribution science can now estimate how much climate change increased the likelihood or intensity of specific weather events.

## Modern Tools and Technology

### Supercomputers

Weather modeling is one of the most computationally demanding scientific applications. The ECMWF's Atos BULL Sequana XH2000 system performs over 25 petaflops (25 quadrillion operations per second). NOAA operates multiple supercomputer systems with combined capacity exceeding 40 petaflops.

Why so much computing power? A global model with 9 km horizontal grid spacing has over 500 million grid points. At 100 vertical levels, that's 50 billion grid points. Each time step requires solving multiple equations at every point. A 10-day forecast with 50 ensemble members running at 15-second time steps requires an almost incomprehensible number of calculations.

### Machine Learning

[Machine learning](/machine-learning) is entering meteorology rapidly. Google DeepMind's GraphCast model demonstrated in 2023 that an AI model trained on historical weather data could produce 10-day forecasts competitive with the ECMWF model in minutes rather than hours. This doesn't mean AI will replace physics-based models --- both approaches have strengths and limitations. But hybrid approaches combining physical models with [machine learning](/machine-learning) are likely the future.

### Phased Array Radar

Next-generation phased array radar can scan the entire atmosphere in about one minute, compared to five minutes for current mechanically scanning radar. This dramatically improves severe weather detection and could increase tornado warning lead times.

### Satellite Advances

The GOES-R series of geostationary satellites (GOES-16 and GOES-18) provide imagery with 0.5 km resolution every minute over areas of active weather. Compared to the previous generation (4 km resolution, 15-minute intervals), the improvement in monitoring rapidly evolving severe weather is enormous.

## Careers in Meteorology

Meteorology offers diverse career paths:

**National Weather Service forecasters** issue public forecasts, watches, and warnings. This is the classic meteorologist role. Starting salary is around $50,000-$65,000.

**Broadcast meteorologists** present weather on television, radio, and digital platforms. They communicate complex information to the public. The best ones make weather both understandable and engaging.

**Private sector meteorologists** work for weather companies (The Weather Company, AccuWeather, DTN), energy companies (wind and solar forecasting), [agriculture](/agriculture) companies, airlines, and [insurance](/insurance) companies. This sector has grown rapidly.

**Research meteorologists** work at universities, NOAA, NCAR (National Center for Atmospheric Research), and other institutions. They advance understanding of atmospheric processes and improve forecasting methods.

**Military meteorologists** support military operations where weather directly affects mission planning and execution.

**Climate scientists** study long-term atmospheric patterns and change. This is a growing field with increasing demand.

According to the Bureau of Labor Statistics, the median annual salary for atmospheric scientists (including meteorologists) was about $104,000 in 2024, with employment projected to grow 6% through 2032.

## Why It Matters to You

Weather affects virtually every human activity. Agriculture depends on precipitation forecasting. [Aviation](/aviation) relies on turbulence and visibility predictions. Energy companies need wind and solar forecasts. Emergency [management](/management) requires severe weather warnings. [Construction](/construction), transportation, outdoor events, and military operations all depend on weather information.

The economic value of weather forecasting is difficult to overstate. NOAA estimates that weather-sensitive industries account for about one-third of U.S. GDP --- roughly $7 trillion. A single accurate severe weather warning can save hundreds of lives. Improved forecasting of natural gas demand based on temperature predictions saves the energy sector billions annually.

And frankly, most people check the weather forecast every single day. It might be the most widely used product of any scientific discipline in the world.

## Key Takeaways

Meteorology is the science of understanding and predicting atmospheric behavior. It combines physics, [mathematics](/mathematics), computing, and observation networks to produce weather forecasts that have improved dramatically over the past century. A modern 5-day forecast is as accurate as a 1-day forecast was 40 years ago, thanks to supercomputer models, satellite technology, Doppler radar, and ensemble forecasting methods. Severe weather prediction --- tornadoes, hurricanes, winter storms --- saves thousands of lives annually. And as AI, better observations, and faster computers continue advancing the field, the forecasts you check every morning will keep getting more accurate and more useful.
