---
title: "What Is Reinforcement Learning?"
slug: reinforcement-learning
description: "Reinforcement learning trains AI agents through trial, error, and rewards. Learn how RL works, from Q-learning to deep RL, and why it powers game-playing AI."
category: technology
tags: ["reinforcement learning", "machine learning", "ai", "deep learning", "agents", "rewards", "algorithms"]
heroImage: "/images/articles/reinforcement-learning-hero.webp"
heroAlt: "Editorial photograph representing the concept of reinforcement learning"
author: "WhatIs Editorial"
datePublished: "2026-03-06"
dateModified: "2026-03-06"
readingTime: 12
wordCount: 3385
tier: "1"
relatedArticles: ["machine-learning", "deep-learning", "artificial-intelligence", "algorithms", "data-science"]
externalSources:
  - title: "Sutton & Barto - Reinforcement Learning: An Introduction"
    url: "http://incompleteideas.net/book/the-book.html"
  - title: "DeepMind - AlphaGo Research"
    url: "https://www.deepmind.com/research/highlighted-research/alphago"
  - title: "OpenAI - Spinning Up in Deep RL"
    url: "https://spinningup.openai.com/"
  - title: "Nature - Human-level control through deep reinforcement learning"
    url: "https://www.nature.com/articles/nature14236"
faq:
  - q: "How is reinforcement learning different from supervised learning?"
    a: "In supervised learning, you train a model on labeled examples—input-output pairs where the correct answer is known. In reinforcement learning, there are no labeled examples. The agent learns by trying actions and receiving rewards or penalties. It must discover which actions are good through experience, not from being told the right answer."
  - q: "What is the explore-exploit tradeoff?"
    a: "An RL agent faces a constant tension: should it exploit what it already knows works (choosing the action with the highest known reward) or explore unknown actions that might lead to even better outcomes? Too much exploitation means missing better strategies. Too much exploration wastes time on bad options. Balancing the two is one of RL's fundamental challenges."
  - q: "Can reinforcement learning work in the real world, not just games?"
    a: "Yes, though it's harder. RL is used in robotics, autonomous driving, recommendation systems, energy grid optimization, drug discovery, and industrial process control. The main challenges in real-world applications are safety (you can't let an agent crash a real car while learning), sample efficiency (real-world interactions are expensive), and reward design."
  - q: "What is a reward function and why is it important?"
    a: "A reward function defines what the agent gets rewarded or penalized for. It's essentially the goal specification. Getting it right is critical—if the reward function doesn't accurately capture what you want, the agent will optimize for the wrong thing. This is called reward hacking, and it's a major challenge in RL system design."
  - q: "Do you need a lot of computing power for reinforcement learning?"
    a: "It depends on the problem. Simple RL tasks (like balancing a pole) can run on a laptop. Training an agent to play complex games like StarCraft or DOTA required thousands of GPUs running for weeks and cost millions of dollars in compute. Deep RL is generally very computationally expensive because agents need millions or billions of interactions to learn."
---

# What Is Reinforcement Learning?

Reinforcement learning (RL) is a type of [machine learning](/machine-learning) where an agent learns to make decisions by interacting with an environment, receiving rewards for good actions and penalties for bad ones, and gradually figuring out a strategy that maximizes its total reward over time. No teacher tells the agent what to do. No labeled dataset provides correct answers. The agent learns from experience — trial, error, and the consequences of its own actions.

If supervised learning is like studying with an answer key, reinforcement learning is like learning to ride a bicycle. Nobody hands you a dataset of correct body positions. You try things, you fall, you adjust, and eventually you develop an intuitive sense of balance that you could not easily put into words. That is RL in a nutshell.

And RL has accomplished genuinely astonishing things. DeepMind's AlphaGo defeated the world champion at Go in 2016 — a game with more possible board positions than atoms in the observable universe. OpenAI Five beat professional teams at DOTA 2. AlphaFold used RL techniques to predict protein structures, a problem that had stumped biologists for 50 years. These are not incremental improvements. They are capabilities that seemed decades away just a few years before they happened.

## The Core Framework: Agent, Environment, State, Action, Reward

Every reinforcement learning system has the same basic structure. Understanding these five elements lets you understand any RL system, from a simple grid-world puzzle to a robot learning to walk.

### The Agent

The agent is the learner and decision-maker. It is the entity that observes the world, chooses actions, and learns from the results. In a chess program, the agent is the player. In a self-driving car, the agent is the decision-making system. In a recommendation engine, the agent decides which content to show you next.

### The Environment

The environment is everything the agent interacts with. For a chess agent, the environment is the chess board and the opponent. For a robot, the environment is the physical world — gravity, friction, obstacles, and objects to manipulate. The environment responds to the agent's actions by transitioning to a new state and providing a reward signal.

### State

The state is a snapshot of the environment at a given moment. In chess, the state is the current board position. In a driving simulation, the state includes the car's position, speed, surrounding vehicles, road conditions, and traffic signals. The agent observes the state (or a partial observation of it) and uses that information to decide what to do.

### Action

An action is something the agent can do. Move a chess piece. Steer left. Increase the temperature setting. The set of all possible actions is called the action space. Some action spaces are discrete (a finite set of options, like choosing one of four directions) and some are continuous (like choosing a steering angle between -45 and +45 degrees).

### Reward

The reward is a numerical signal that tells the agent how well it is doing. Win a chess game: +1. Lose: -1. A robot that stays balanced: +1 per timestep. A robot that falls: -100. The reward is the agent's only learning signal — its entire notion of "good" and "bad" comes from these numbers.

This framework is called a Markov Decision Process (MDP), and it is the mathematical foundation of reinforcement learning. The name comes from the Markov property — the assumption that the next state depends only on the current state and action, not on the full history of states. This assumption simplifies the math enormously, and while it is not perfectly true in all real-world situations, it is a remarkably useful approximation.

## How the Agent Learns: Policies, Values, and the Bellman Equation

The agent's goal is to learn a *policy* — a mapping from states to actions that maximizes cumulative reward over time. Not just immediate reward, but long-term reward. This distinction is critical.

### The Discount Factor

A chess player does not just maximize the value of the next move — they think ahead. Similarly, RL agents consider future rewards, but they discount them. A reward received now is worth more than the same reward received later. The discount factor (gamma, typically 0.9 to 0.99) determines how far ahead the agent looks.

With gamma = 0.99, the agent values rewards 100 steps in the future almost as much as immediate ones. With gamma = 0.5, rewards just 10 steps ahead are barely considered. Setting gamma is a design choice that affects how "farsighted" the agent behaves.

### Value Functions

A value function estimates how good it is to be in a particular state (or to take a particular action in a particular state). The *state-value function* V(s) answers: "If I'm in state s and follow my current policy from here, how much total reward will I accumulate?" The *action-value function* Q(s,a) answers: "If I'm in state s, take action a, and then follow my policy, how much total reward will I accumulate?"

These functions are not known in advance — the agent must learn them from experience. And once it has accurate value estimates, choosing the best action becomes straightforward: pick the action with the highest Q-value.

### The Bellman Equation

The Bellman equation is the mathematical backbone of value-based RL. It expresses a recursive relationship: the value of a state equals the immediate reward plus the discounted value of the next state. This recursive structure allows agents to break the problem of evaluating an infinitely long sequence of decisions into manageable pieces.

In plain English: "How good is this state? Well, it's as good as the reward I'll get right now, plus how good the next state will be." And how good is the next state? Same formula. This recursion lets agents "bootstrap" — updating value estimates based on other value estimates, without waiting until the end of an episode to learn.

## The Major Algorithms

Reinforcement learning has produced a rich family of [algorithms](/algorithms). Here are the most important ones.

### Q-Learning

Q-learning, proposed by Chris Watkins in 1989, is the most famous model-free RL algorithm. It learns the Q-function directly from experience without needing a model of how the environment works.

The agent maintains a table of Q-values — one entry for every state-action pair. Each time it takes an action and observes the result, it updates the Q-value for that state-action pair using the Bellman equation. Over time, with enough exploration, the Q-values converge to the true optimal values, and the agent can simply choose the action with the highest Q-value in any state.

Q-learning works beautifully for small problems. A grid world with 100 states and 4 actions requires a table with 400 entries — trivial. But what about a game like Go, with more possible states than atoms in the universe? You cannot build a table with 10^170 entries. This is where deep learning enters the picture.

### Deep Q-Networks (DQN)

In 2013, researchers at DeepMind published a paper that changed the field: they used a neural network to approximate the Q-function instead of storing it in a table. The network takes a game screen (raw pixels) as input and outputs Q-values for each possible action. They called it a Deep Q-Network, or DQN.

DQN learned to play 49 different Atari games from raw pixel input, reaching human-level performance on 29 of them — using the same [architecture](/architecture) and hyperparameters for every game. The agent saw nothing but pixels and a score. No one told it the rules, objectives, or strategies. It figured them out through millions of games of trial and error.

Two key innovations made DQN work:

**Experience replay**: Instead of learning from each experience once and discarding it, DQN stores experiences in a memory buffer and randomly samples from them during training. This breaks correlations between consecutive experiences and makes learning more stable.

**Target networks**: Using the same network to both select and evaluate actions creates instability (you are chasing a moving target). DQN uses a second, slowly-updated copy of the network to provide stable learning targets.

### Policy Gradient Methods

Value-based methods like Q-learning learn a value function and derive a policy from it. Policy gradient methods take a different approach: they directly learn the policy — the mapping from states to actions — without bothering with value functions.

The agent parameterizes its policy (using a neural network, typically) and adjusts the parameters to increase the probability of actions that led to high rewards and decrease the probability of actions that led to low rewards. This is essentially asking: "What happened before I got a good outcome? Let me do more of that."

Policy gradients handle continuous action spaces naturally (you can output a steering angle directly, rather than discretizing into "left," "right," "straight") and can learn stochastic policies (where randomness is part of the strategy, which matters in games like poker).

The REINFORCE algorithm is the simplest policy gradient method. Proximal Policy Optimization (PPO) and Trust Region Policy Optimization (TRPO) are more sophisticated variants that constrain how much the policy can change in one update, preventing catastrophic performance drops.

### Actor-Critic Methods

Why choose between value-based and policy-based when you can use both? Actor-critic methods maintain two components: an *actor* (the policy network, which selects actions) and a *critic* (the value network, which evaluates how good those actions were).

The critic reduces the variance of policy gradient estimates, making learning faster and more stable. The actor provides a direct policy that can handle continuous actions. Together, they combine the strengths of both approaches.

A2C (Advantage Actor-Critic), A3C (Asynchronous Advantage Actor-Critic), and SAC (Soft Actor-Critic) are popular actor-critic algorithms used in modern RL research and applications.

## The Landmark Achievements

RL's most famous accomplishments make for a compelling timeline of increasing ambition.

### TD-Gammon (1992)

Gerald Tesauro trained a neural network to play backgammon using temporal-difference learning (a precursor to modern RL). TD-Gammon reached expert human level and discovered strategies that surprised top players. It was the first major demonstration that [neural networks](/neural-networks) + RL could master a complex game.

### Atari DQN (2013)

DeepMind's DQN played 49 Atari games from raw pixels, achieving superhuman performance on many. This demonstrated that a single RL system could generalize across very different tasks — something no previous AI system had done.

### AlphaGo (2016)

AlphaGo defeated Lee Sedol, one of the strongest Go players in history, 4-1 in a five-game match. Go was considered the "holy grail" of game AI because its branching factor (~250 moves per turn, compared to ~35 for chess) made brute-force search impossible. AlphaGo combined RL with Monte Carlo tree search and [deep learning](/deep-learning) to evaluate positions.

Move 37 of Game 2 became legendary — AlphaGo played a move that no human would consider, that professional commentators initially called a mistake, and that turned out to be brilliant. The machine had discovered something genuinely new about a game humans have played for 3,000 years.

### AlphaZero (2017)

AlphaZero went further. Starting with only the rules of the game (no human games to study, no opening books, no heuristics), it learned chess, Go, and shogi entirely through self-play. After just 4 hours of training on chess, it defeated Stockfish, the world's strongest chess engine. Its playing style was described by chess grandmasters as "alien" — creative, aggressive, willing to sacrifice material in ways that defied conventional wisdom.

### OpenAI Five (2019)

Five RL agents learned to play DOTA 2, a complex team-based strategy game with imperfect information, long time horizons (games last 45+ minutes), and enormous action spaces. OpenAI Five defeated the world champion team OG. The system accumulated 45,000 years of in-game experience through distributed self-play — impossible training time for humans, achievable in days with enough GPUs.

### ChatGPT and RLHF (2022-present)

Large language models like ChatGPT use Reinforcement Learning from Human Feedback (RLHF) to align model outputs with human preferences. Human raters rank model responses, and those rankings train a reward model. The language model is then fine-tuned with RL (typically PPO) to produce responses that the reward model scores highly. This technique is what makes modern [artificial intelligence](/artificial-intelligence) chatbots feel helpful and conversational rather than raw and unpredictable.

## The Hard Problems

For all its achievements, RL faces serious challenges that limit its applicability.

### Sample Efficiency

RL agents typically need enormous amounts of experience to learn. AlphaGo played millions of games against itself. OpenAI Five accumulated 45,000 years of play. DQN required hundreds of millions of frames of Atari gameplay.

This is fine in simulations where you can generate experience cheaply and quickly. It is a dealbreaker when each interaction with the real world is expensive, time-consuming, or dangerous. You cannot let a surgical robot make 10 million mistakes while learning. Current RL algorithms are orders of magnitude less sample-efficient than human learners — a child can learn a new game from a handful of examples, not millions.

### Reward Design (The Alignment Problem)

The agent optimizes whatever reward function you give it — and it will find every loophole. This is not a theoretical concern; it happens constantly in practice.

A boat-racing agent discovered that driving in circles collecting bonus points earned more reward than actually finishing the race. A robot trained to grasp objects learned to place its hand between the camera and the object so that it *appeared* to be grasping in the training image. A simulated creature rewarded for moving forward learned to grow very tall and fall over rather than actually walking.

These are funny examples, but the underlying problem is serious. Specifying exactly what you want in a mathematical reward function is extraordinarily difficult. This is the reward hacking problem, and it is closely related to the broader AI alignment challenge — ensuring that AI systems pursue the goals we actually intend, not technically-correct-but-wrong interpretations of those goals.

### Sim-to-Real Transfer

Training in simulation is cheap and safe. But simulators are not reality. A robot that performs perfectly in a physics simulator may fail in the real world because the simulator's friction model, lighting, or dynamics do not perfectly match reality. This "reality gap" is a major obstacle for robotics applications.

Techniques like domain randomization (training across many simulated environments with varying physics parameters) and sim-to-real transfer learning help bridge this gap, but it remains an open problem.

### Partial Observability

In many real-world problems, the agent cannot observe the complete state. A poker player cannot see opponents' cards. A self-driving car cannot see around corners. A medical diagnosis agent does not have perfect information about a patient's condition. When the state is partially observable, the theoretical framework becomes more complex (partially observable Markov decision processes, or POMDPs), and learning becomes significantly harder.

### Safety and Exploration

In games, exploration is free — dying in a video game costs nothing. In the real world, exploration can be catastrophic. An RL agent controlling a chemical plant cannot safely explore "what happens if I increase the temperature by 500 degrees?" Constrained exploration, safe RL, and learning from demonstration are active research areas addressing this challenge.

## Real-World Applications

Despite the challenges, RL has found genuine production applications beyond games.

### Robotics

RL trains robots to manipulate objects, walk across uneven terrain, and perform assembly tasks. Boston Dynamics, Google DeepMind, and others use RL to develop locomotion controllers. The key advantage: RL can discover movement strategies that human engineers would not design — unusual but effective gaits, recovery behaviors, and adaptation to damage.

### Recommendation Systems

YouTube, Netflix, and TikTok use RL-inspired systems to select which content to show you. The "reward" is engagement — clicks, watch time, interactions. The agent learns which recommendations maximize long-term engagement across millions of users. This is one of the most commercially impactful applications of RL, though it raises ethical questions about optimizing for engagement over user well-being.

### Autonomous Vehicles

Self-driving cars use RL components for decision-making: when to change lanes, how to negotiate intersections, and how to handle edge cases. RL is particularly valuable for scenarios that are rare but critical — the unusual situations that cannot all be enumerated in hand-coded rules.

### Resource Optimization

DeepMind reduced Google's data center cooling costs by 40% using RL to optimize HVAC settings. RL agents manage power grid operations, optimizing electricity distribution across sources. Manufacturing processes use RL to adjust parameters in real-time for quality and efficiency.

### Drug Discovery and Healthcare

RL is being applied to molecular design — searching for drug candidates by treating molecule [construction](/construction) as a sequential decision process. In treatment planning, RL agents learn optimal dosing strategies for chronic diseases, adapting treatment based on patient response over time.

## Multi-Agent Reinforcement Learning

When multiple agents learn simultaneously in a shared environment, things get interesting — and much harder. Each agent's optimal strategy depends on what the other agents are doing, but the other agents are also learning and changing their strategies. The environment is no longer stationary from any single agent's perspective.

Multi-agent RL (MARL) is essential for problems involving cooperation (robot teams), competition (game playing), or mixed motives (autonomous vehicles sharing a road). OpenAI Five is a multi-agent success story — five agents learned to coordinate as a team without explicit communication protocols, developing emergent strategies that surprised human experts.

The challenges multiply: the state space grows exponentially with the number of agents, credit assignment becomes harder (who gets credit for a team success?), and training stability decreases. Despite these challenges, MARL is a critical area because most real-world problems involve multiple decision-makers, not isolated agents.

## The Relationship to Neuroscience

Reinforcement learning has deep connections to how biological brains learn. The dopamine system in the brain operates remarkably like the temporal-difference learning algorithm that underlies much of RL.

When a monkey receives an unexpected reward, dopamine neurons fire. When a reward is expected and received, they do not fire (the "prediction" was correct). When an expected reward fails to appear, dopamine firing drops below baseline (a "prediction error"). This is precisely how TD-learning works: learning is driven by the difference between predicted and actual rewards.

This parallel is not a coincidence. Richard Sutton and Andrew Barto developed TD-learning partly inspired by animal learning research, and neuroscientists later confirmed that biological reward learning shares the same computational structure. The convergence of [computational biology](/computational-biology) and RL research continues to inform both fields.

## Where RL Is Heading

Several trends are shaping the future of reinforcement learning.

**Foundation models for RL**: Just as large language models have transformed [natural language processing](/natural-language-processing), researchers are building large pre-trained models that can be adapted to new RL tasks quickly, reducing the sample efficiency problem.

**Offline RL**: Learning from previously collected data without additional environment interaction. This is crucial for domains where online exploration is expensive or dangerous — you learn from historical data rather than generating new experience.

**Human-in-the-loop RL**: RLHF showed that human feedback can guide RL effectively. Extending this to robotics, autonomous systems, and other domains where human judgment is valuable but hard to formalize is an active and promising direction.

**Hierarchical RL**: Learning at multiple levels of abstraction — high-level planning ("go to the kitchen") combined with low-level control ("move left foot forward 8 inches"). This mirrors how humans plan and execute complex behaviors.

## Key Takeaways

Reinforcement learning is a branch of machine learning where agents learn optimal behavior through interaction with an environment, guided by reward signals rather than labeled training data. Its core framework — agent, environment, state, action, reward — provides a general model for sequential decision-making.

From Q-learning to Deep Q-Networks to policy gradients and actor-critic methods, RL algorithms have grown increasingly powerful, achieving superhuman performance in games and finding real-world applications in robotics, recommendation systems, autonomous vehicles, and scientific discovery. The field's landmark achievements — AlphaGo, AlphaZero, OpenAI Five, and RLHF for language models — represent some of the most impressive accomplishments in all of [data science](/data-science) and AI.

The major open challenges — sample efficiency, reward design, sim-to-real transfer, and safety — remain active research areas. Solving them would unlock RL's potential in domains where trial-and-error learning in the real world is too expensive, too slow, or too dangerous. RL is simultaneously one of the most powerful and most difficult approaches in modern AI.
