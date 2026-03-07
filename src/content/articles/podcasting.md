---
title: "What Is Podcasting?"
slug: podcasting
description: "Podcasting is creating and distributing audio content online via RSS feeds, letting listeners subscribe and download episodes on demand."
category: technology
tags: ["audio", "digital media", "content creation", "broadcasting", "entertainment", "information"]
heroImage: "/images/articles/podcasting-hero.webp"
heroAlt: "Editorial photograph representing the concept of podcasting"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 9
wordCount: 2551
tier: "2"
relatedArticles: ["audio-engineering", "digital-marketing", "digital-signal-processing", "communication-theory", "entrepreneurship"]
externalSources:
  - title: "Edison Research — The Infinite Dial"
    url: "https://www.edisonresearch.com/the-infinite-dial/"
  - title: "Apple Podcasts for Creators"
    url: "https://podcasters.apple.com/"
  - title: "Pew Research Center — Podcasts as a Source of News"
    url: "https://www.pewresearch.org/journalism/fact-sheet/audio-and-podcasting/"
  - title: "RSS 2.0 Specification"
    url: "https://www.rssboard.org/rss-specification"
faq:
  - q: "How much does it cost to start a podcast?"
    a: "You can start for under $100 with a USB microphone ($50-80), free recording software like Audacity, and a free or low-cost hosting plan. Professional setups with XLR microphones, audio interfaces, acoustic treatment, and premium hosting typically cost $500-2,000. Content quality matters more than equipment quality for most listeners."
  - q: "How do podcasters make money?"
    a: "The main revenue sources are advertising/sponsorships (CPM-based or host-read ads), listener support (Patreon, memberships), premium content (paid episodes or bonus content), merchandise, live events, and using the podcast to promote other business activities like consulting, courses, or books."
  - q: "How many listeners does a podcast need to be successful?"
    a: "Success depends on your goals. A niche B2B podcast with 500 listeners per episode can generate significant consulting leads. For advertising revenue, most ad networks require at least 5,000-10,000 downloads per episode. The top 1% of podcasts get roughly 35,000+ downloads per episode within 7 days of release."
  - q: "What is the difference between a podcast and a radio show?"
    a: "Radio broadcasts live on scheduled frequencies and disappears after airing (unless recorded). Podcasts are pre-recorded, distributed via RSS feeds, available on-demand permanently, and listeners choose when to listen. Podcasts also face no FCC content regulations, have global reach by default, and allow highly niche topics that traditional radio couldn't economically support."
---

# What Is Podcasting?

Podcasting is the creation and distribution of episodic audio content that listeners can subscribe to, download, and listen to at their convenience. The term blends "iPod" and "[broadcasting](/broadcasting)," though you've never needed an iPod to listen to one. Fundamentally, podcasting is just an RSS feed with audio files attached — but that simple technical foundation has created a medium that reaches over 500 million people worldwide.

## How We Got Here: A Quick History

The technology behind podcasting existed long before anyone called it that. RSS (Really Simple Syndication) feeds had been distributing text content since the late 1990s. Audio files had been on the internet since... well, since the internet. The breakthrough was connecting the two.

In 2000, software developer Dave Winer added an "enclosure" tag to RSS that could link to media files. In 2004, former MTV VJ Adam Curry and Winer created iPodder, software that automatically downloaded audio files from RSS feeds to an iPod. The term "podcasting" appeared in a February 2004 Guardian article by journalist Ben Hammersley, who tossed it out almost casually alongside alternatives like "audioblogging."

Apple added podcast support to iTunes in June 2005. That was the tipping point. Suddenly, millions of iPod owners could discover, subscribe to, and automatically receive podcasts. Within two days, Apple users had subscribed to over one million podcasts.

But early podcasting was rough. Audio quality was often terrible. Distribution was clunky. Discovery was nearly impossible unless you already knew what you were looking for. The medium simmered for years as a niche hobby.

### The Serial Moment

Everything changed in October 2014 when *Serial* — a true-crime investigation by Sarah Koenig and the team behind *This American Life* — premiered. It became the fastest podcast ever to reach 5 million downloads on iTunes. By the end of its first season, it had been downloaded over 175 million times.

*Serial* proved three things: podcasts could attract massive mainstream audiences, [storytelling](/storytelling) formats worked brilliantly in audio, and the medium could generate real cultural conversation. Every major media company suddenly wanted a podcast strategy.

### The Industry Explodes

From 2015 onward, podcasting grew explosively. Spotify entered the market aggressively, spending over $1 billion acquiring podcast companies and exclusive content. Joe Rogan signed a deal reportedly worth $200 million. Celebrity podcasts proliferated. Revenue grew from $314 million in 2017 to over $4 billion by 2025.

By 2025, there were over 4 million podcasts registered worldwide with more than 100 million episodes. Edison Research found that 42% of Americans aged 12 and older had listened to a podcast in the past month — up from 9% in 2008.

## The Technical [Architecture](/architecture)

Under the hood, podcasting is elegantly simple. Understanding the technical layer helps explain why the medium works the way it does.

### RSS: The Backbone

Every podcast is built on an RSS feed — an XML file hosted on a web server that lists episodes with their titles, descriptions, publication dates, and links to audio files. When you "subscribe" to a podcast in Apple Podcasts, Spotify, or any podcast app, you're telling the app to periodically check that RSS feed for new entries and download them.

This is what distinguishes podcasting from YouTube or social media: the creator controls the feed, and distribution is decentralized. There's no single platform that can remove your podcast from all listeners (unless your hosting provider takes it down). Any podcast app can read any RSS feed. This open architecture is why podcasting has resisted the platform consolidation that happened to video and social media.

Spotify has tried to change this with exclusive content — podcasts available only through Spotify's app, not via RSS. This strategy generated controversy precisely because it violated podcasting's open-distribution model. The company has since backed away from exclusivity, returning most content to standard RSS distribution.

### Hosting

Audio files are big. A 60-minute episode at 128 kbps MP3 quality runs about 56 megabytes. If 10,000 people download that episode, you're serving 560 gigabytes of data. That's why most podcasters use dedicated podcast hosting services rather than hosting files on their own web servers.

Hosting platforms like Libsyn, Buzzsprout, Podbean, and Transistor store your audio files on content delivery networks (CDNs), generate and maintain your RSS feed, provide download analytics, and distribute your feed to directories like Apple Podcasts and Spotify. Prices range from free (with limitations) to $50+ per month for high-volume shows.

### Directories and Apps

Podcast directories — Apple Podcasts, Spotify, Google Podcasts (discontinued in 2024), Amazon Music — are where listeners discover podcasts. They're essentially search engines and catalog systems that index RSS feeds. When you submit your podcast's RSS feed URL to Apple Podcasts, Apple's system reads the feed, indexes the content, and makes it searchable.

Third-party podcast apps like Overcast, Pocket Casts, and Castro provide alternative listening experiences with features like variable speed playback, smart playlists, and silence trimming. They all read the same RSS feeds — the listener's choice of app doesn't affect which podcasts they can access (unless content is platform-exclusive).

## Making a Podcast: The Production Pipeline

### Planning and Format

Before touching any equipment, the most important decisions are editorial. What's your topic? Who's your audience? What format will you use?

Common formats include:

**Solo monologue** — one host talking directly to the listener. Low coordination overhead, but demanding on the host's ability to be engaging alone. Works well for educational and opinion content.

**Interview/conversation** — a host with guests. The most common podcast format. Guests provide built-in content variety and bring their own audiences. The host's job is asking good questions and managing the conversation flow.

**Narrative/storytelling** — heavily produced, often scripted, with music, sound effects, and multiple voices. *Serial*, *Radiolab*, and *S-Town* exemplify this format. Production-intensive but capable of creating powerful listening experiences.

**Panel/roundtable** — multiple co-hosts discussing topics. Provides diverse perspectives and natural conversational energy. [Scheduling](/scheduling) can be a logistical nightmare.

**Hybrid** — mixing formats within a show or across episodes. Increasingly common as podcasters experiment.

Episode length varies wildly. *The Daily* from the New York Times runs about 25 minutes. *The Joe Rogan Experience* regularly exceeds three hours. Research suggests the sweet spot for most listeners is 20-45 minutes, but the optimal length depends entirely on content and audience expectations.

### Recording

The equipment hierarchy for podcast recording, from bottom to top:

**Smartphone** — surprisingly decent for getting started. Modern phones have good microphones and recording apps. Quality won't match dedicated equipment, but it's good enough to test whether you enjoy podcasting before investing.

**USB microphone** — the standard entry point for serious podcasting. The Audio-Technica ATR2100x and Blue Yeti are perennial recommendations. Plug directly into your computer, no additional hardware needed. $50-130.

**XLR microphone + audio interface** — professional quality. The Shure SM7B is the iconic podcasting mic (Joe Rogan uses one; so does seemingly every other podcaster). Requires an audio interface like the Focusrite Scarlett or RodeCaster Pro to connect to your computer. $200-700 for the setup.

Recording software ranges from free (Audacity, GarageBand) to professional (Adobe Audition, Hindenburg Journalist, Logic Pro). For remote interviews, platforms like Riverside.fm, SquadCast, and Zencastr record each participant's audio locally, producing better quality than a Zoom recording.

Room acoustics matter more than most beginners realize. A $500 microphone in an echoey room sounds worse than a $100 microphone in a treated space. Simple fixes — recording in a closet full of clothes, hanging blankets on walls, using a microphone isolation shield — make a noticeable difference.

### Editing and Post-Production

Raw recordings need work. At minimum, you'll want to:

- Remove long pauses, "ums," and verbal stumbles
- Cut tangents that don't serve the episode
- Level audio so all speakers are at consistent volume
- Add intro/outro music and any [sound design](/sound-design) elements
- Apply basic [audio-engineering](/audio-[engineering](/engineering)) processing: noise reduction, compression, EQ

The amount of editing varies enormously by format. A casual conversation podcast might get a light cleanup in 30 minutes. A narrative production like *Radiolab* reportedly spends 40+ hours editing a single episode.

Automated tools are changing the editing field. Descript lets you edit audio by editing a transcript — delete words from the text and they vanish from the audio. Adobe Podcast's AI tools can enhance audio quality, remove background noise, and even clone voices for corrections. These tools aren't replacing skilled editors, but they're lowering the barrier for smaller productions.

### [Publishing](/publishing) and Distribution

Once your episode is edited and exported as an MP3 or M4A file (MP3 at 128 kbps mono is the standard for spoken-word content), you upload it to your hosting platform. The platform updates your RSS feed, and within minutes to hours, the episode appears in all the directories that index your feed.

Show notes — written descriptions accompanying each episode — serve both listeners and search engines. Detailed show notes with timestamps, links to resources mentioned, and guest information improve [discoverability](/digital-marketing) and provide value to listeners who want to reference specific segments.

## The Business of Podcasting

### Advertising

Podcast advertising generates the bulk of industry revenue. The standard pricing model is CPM (cost per thousand downloads) — advertisers pay a rate for every thousand times an episode is downloaded.

CPM rates for podcast ads typically range from $15-50, depending on audience size, demographics, and ad format. Host-read ads — where the podcast host personally reads the ad copy, often adding personal anecdotes — command premium rates because they feel more authentic and generate higher engagement than pre-produced ads.

Ad formats include:

- **Pre-roll** — before the content (15-30 seconds)
- **Mid-roll** — during the content, at a natural break (60 seconds)
- **Post-roll** — after the content (15-30 seconds)

Mid-rolls command the highest CPMs because listeners are most engaged.

Active ad insertion (DAI) technology has changed the game. Instead of baking ads permanently into episodes, DAI inserts ads at the time of download. This means a two-year-old episode can serve current ads, advertisers can target by geography or demographics, and hosts can update sponsorships without re-editing old episodes.

### Direct Monetization

Many podcasters bypass advertising entirely, generating revenue directly from their audience:

**Patreon and membership platforms** let listeners pay monthly for bonus content, early access, or community interaction. The model works well for engaged niche audiences — a podcast with 5,000 dedicated listeners where 5% pay $5/month generates $1,250 monthly.

**Premium content** through Apple Podcasts Subscriptions or Spotify's subscription tools lets creators offer paid episodes within their existing podcast feed.

**Live shows** and events have become significant revenue sources for popular podcasts. *My Favorite Murder*, *Welcome to Night Vale*, and *Pod Save America* have all done successful national tours.

### Podcast as Marketing Channel

Many of the most strategically valuable podcasts don't monetize directly at all. Instead, they serve as marketing channels for other business activities. A consultant hosts a podcast to demonstrate expertise and attract clients. An [entrepreneur](/entrepreneurship) builds audience through a podcast to sell courses or software. A company produces a branded podcast as content marketing.

This "podcast as business card" model is increasingly sophisticated. HubSpot, Shopify, Mailchimp, and many other B2B companies produce high-quality podcasts not for ad revenue but for brand building and lead generation.

## Podcast Discovery: The Persistent Problem

Despite the medium's growth, discovery remains podcasting's biggest challenge. How do new listeners find new shows?

Unlike social media platforms with algorithmic feeds pushing content to users, podcasting's open architecture means there's no central recommendation algorithm. Apple Podcasts and Spotify have editorial curation and algorithmic recommendations, but their effectiveness varies. Word of mouth remains the primary discovery mechanism — 54% of new podcast listeners found their first show through a personal recommendation, according to Edison Research.

This discovery problem has created interesting dynamics. Podcasts hosted by existing celebrities or media brands have a built-in advantage — they arrive with an audience. New creators without existing platforms face a chicken-and-egg problem: you need listeners to get visibility, and you need visibility to get listeners.

Cross-promotion (appearing as a guest on other podcasts), social media clips, SEO-optimized show notes, and newsletter integration all help. But there's no podcasting equivalent of "going viral" in the way a TikTok video can. Podcast growth tends to be gradual and organic.

## Video Podcasting: The Blurring Line

The boundary between podcasting and video content has blurred significantly. Many top podcasts now record video simultaneously, publishing to YouTube alongside their audio feed. *The Joe Rogan Experience*, which started as an audio-only podcast, now gets more views on YouTube than audio downloads.

YouTube is now the most-used platform for podcast consumption among 18-34 year olds, according to Edison Research. This has forced podcasters to think about visual presentation — [set design](/set-design), camera angles, lighting — in addition to audio quality.

Purists argue that video podcasts aren't really podcasts — they're just YouTube videos distributed via RSS. The distinction matters less to listeners than to industry taxonomists. The practical reality is that modern podcasting increasingly means producing content for both audio and video distribution.

## The Cultural Impact

Podcasting has reshaped media consumption patterns in ways that are easy to underestimate.

**Long-form conversation is back.** With shrinking attention spans and 15-second videos, podcasts proved that people will happily listen to three-hour conversations if the content is engaging. This was genuinely surprising to media executives raised on the "keep it short" mantra.

**Niche topics thrive.** Traditional media economically requires mass audiences. Podcasting's low production costs mean a show about medieval sword-making or competitive birding can exist and find its audience. The long tail of podcasting is extraordinary — there are active podcasts on essentially every conceivable topic.

**Intimacy and trust.** The parasocial relationship between podcast host and listener is unusually strong. Listeners often feel they "know" their hosts after spending hundreds of hours hearing them talk. This creates trust levels that traditional media struggles to match — and that advertisers find extremely valuable.

**Audio content is time-efficient.** You can listen while commuting, exercising, cooking, or doing housework. Podcasts fit into time that was previously dead time, competing not with other media but with silence. This is a unique competitive advantage.

## Where Podcasting Goes From Here

AI is the obvious next frontier. AI-generated transcripts are already standard. AI-powered editing tools are improving rapidly. AI voices can now clone a host's speaking style for translations or corrections. The question of whether AI will generate entire podcasts — and whether anyone will listen — is being actively tested.

Interactivity is another direction. Live podcast recording with audience participation, interactive polls, and community integration are all being explored. The medium has been largely one-directional; making it conversational could change its dynamics fundamentally.

Podcasting's open architecture faces ongoing pressure from platforms wanting to create walled gardens. The tension between open RSS distribution and platform-specific features (interactive elements, video, paid subscriptions) will shape the medium's evolution.

But the core appeal — an intimate, on-demand audio experience connecting creators directly with listeners — isn't going anywhere. If anything, as other media becomes more algorithmically driven and attention-fragmenting, podcasting's long-form, relationship-based model looks increasingly distinctive.

The barrier to entry remains remarkably low. A microphone, a hosting account, something worth saying, and the discipline to show up consistently. That's all it takes to join a medium reaching half a billion people. Not many technologies can make that claim.
