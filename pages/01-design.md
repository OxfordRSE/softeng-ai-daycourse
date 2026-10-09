---
layout: section
routeAlias: design
---

# 1. Software design

## Designing software with AI

---

# Why design before coding?

<span />

::note
AI makes it tempting to start coding before we've clarified the problem or given it sufficient context
::

::v-click

A plausible implementation can still solve the **wrong problem**.

Before asking AI to build something, we need to establish **what you are trying to achieve** and **what the software must do**.

These are related questions, but they are not the same.

::

---

# Motivating problem

<span />

We want a tool that checks research data before analysis.

What does **“checks the data”** actually mean?

- Values within expected ranges?
- Required observations present?
- Duplicate records?
- Units correct?
- Metadata complete?

Different researchers could very reasonably make very different assumptions.

<!--
Metadata - a description of the data; its not much use having a column of numbers if you dont know what they represent or what units they have been measured in.
-->

---
layout: two-cols-header
---

# From an idea to a specification

::left::

**The initial request**

> I want to check my research data before analysis.

This leaves important questions unanswered:

- What makes an observation invalid?
- Which checks are needed?
- What should happen when a problem is found?

::right::

**A more useful specification**

The checker should:

- Identify measurements outside a configurable range
- Report problems without modifying the input data
- Preserve existing behaviour when no limits are supplied

::bottom::

::v-click
::note
AI can help us identify the questions. We must decide which answers are appropriate.
::
::

---
layout: two-cols-header
---

# AI Chat

::left::

A **large language model (LLM)** predicts and generates text from context.

For coding, that context might include:

- Your question
- A design document
- Source code
- Test failures
- Tool output

An LLM can therefore help us **reason about and generate software**, but it does not automatically know our requirements or our research context.

::right::

![AI Context](../img/ai-context-diagram.svg)

---

# AI-assisted design

<span />

AI can help us explore a problem before we commit to an implementation.

Start with a **question**, not necessarily a request for code.

Ask AI to:

- Identify missing requirements and assumptions
- Suggest alternative approaches
- Explore trade-offs
- Challenge the proposed design
- Identify what we need to decide ourselves

::note
Use AI to clarify the problem before asking it to implement the solution
::

---

# Design documentation

<span />

Record the decisions that matter:

- Purpose / users
- Requirements
- Constraints and domain decisions
- Architecture and interfaces
- Open questions

A design document build a reusable body of knowledge for **future human** and **AI** conversations

When a new conversation or coding-agent task begins, provide the document rather than reconstructing the project from memory or from the code.

::note
For substantial work, a short dated decision log can also preserve what was tried, what was found, and what changed.
::

---

# Practical 1 — Explore requirements with AI

<span />

A research group receives CSV files containing measurements.

They want to identify potential problems **before analysis**, without changing the original data.

In AI chat:

1. Provide this context
2. Ask AI what it needs to know before implementation
3. Discuss two or three of its questions
4. Identify an assumption that needs a decision

::question
What did AI need to know that wasn't in the original request?
::

---

# Practical 1 — Produce reusable context

<span />

For today's shared implementation, we'll focus on:

> Making the minimum and maximum measurement limits configurable

Create or update `DESIGN.md` with:

- **Purpose:** What is the checker for?
- **Behaviour:** What should configurable limits allow?
- **Constraints:** What must remain unchanged?
- **Open questions:** What still needs clarification?

Keep it short — a few sentences or bullet points are enough.

::note
We'll reuse this document when asking AI to implement the feature
::

---

# Practical 1 — Checkpoint

<span />

What did AI ask that wasn't covered by the original brief?

What decisions did you need to make yourself?

::note
Your `DESIGN.md` now captures those decisions so they can be reused in the next practical
::

---

# From design to implementation

<span />

Not every design question can be answered through discussion

Sometimes the quickest way to resolve uncertainty is to **build a small prototype**

A prototype helps us:

- Explore an idea
- Test an assumption
- Discover missing requirements

Prototypes are designed to explore ideas quickly, often without considering long-term structure or maintainability. What works well as a prototype may not be a good foundation for the final software.

::note
Use prototypes to learn about the design, not as a commitment to the final implementation
::
