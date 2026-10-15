---
layout: section
routeAlias: introduction
---

# Introduction

## Why <span v-mark.underline.orange="1">engineer</span> research software?

---

# What counts as research software?

<span />

<div class="grid grid-cols-2 gap-x-16 gap-y-12 mt-10">
  <div class="border-l-4 border-blue-500 pl-5">
    <div class="text-2xl font-semibold mb-3">A short Python script</div>
    <div class="text-gray-600">Generates a key figure for a paper.</div>
  </div>
  <div class="border-l-4 border-blue-500 pl-5">
    <div class="text-2xl font-semibold mb-3">An exploratory notebook</div>
    <div class="text-gray-600">Investigates a new research question.</div>
  </div>
  <div class="border-l-4 border-blue-500 pl-5">
    <div class="text-2xl font-semibold mb-3">A shared analysis pipeline</div>
    <div class="text-gray-600">Processes data for an entire research group.</div>
  </div>
  <div class="border-l-4 border-blue-500 pl-5">
    <div class="text-2xl font-semibold mb-3">A research application</div>
    <div class="text-gray-600">Supports researchers across institutions.</div>
  </div>
</div>

<br />
<br />

::v-click
::note
All are research software, but do they all require the same level of engineering?
::

---
layout: two-cols-header
---

# Research depends on software

## Retractions

::left::

A number of highly cited papers on multidrug resistance transporters were published between 2001 and 2010. The results could not be reproduced, leading to five retractions.

An error in an internal software utility flipped two columns of data, inverting an electron-density map used to derive the protein structure.

::v-click
::question
**What failed here?**
::
::

::right::

::center
<img src="../img/chem.png" alt="Chemistry research" style="width: 65%;" />

<br />

> “I didn't question it then.<br />Obviously now I check it all the time”<br />Geoffrey Chang

::

<!--
A typo / line of code error
-->

---
layout: two-cols-header
---

# Research depends on software

## Mars Climate Orbiter

::left::

A software interface contained a unit mismatch: one component used imperial units while another expected metric units.

The result was not merely a bad number. The system made a wrong decision about the spacecraft's trajectory.

This cost NASA roughly <span class="font-semibold text-red-700">$125 million</span>

::v-clicks
::question
**What failed here?**
::

Not just a line of code: assumptions, interfaces and checks matter.
::

::right::

::center
![Mars Climate Orbiter](../img/mars-climate-orbiter.png)
::

---
layout: two-cols-header
---

# Research depends on software

## A result that cannot be reproduced

::left::

<p />

- You write a 60-line script
- You run it once
- Nobody else ever uses it

**It generates Figure 3 of your paper.**

Months later, you cannot reproduce the figure because you no longer know which version of the code, data, configuration or dependencies produced it.

The software may be one-off and unpolished, while its output is scientifically consequential.

::right::

::v-click

<p />

::question
**What failed here?**
::

::

::v-click

- Version control
- Environment management
- Dependencies
- Data provenance

::

---
layout: two-cols-header
---

# Robust software

## “Don't touch that script”

::left::

- A short research script works
- Other people gradually depend on it

Years later:

>[!WARNING]
> Nobody really understands it, but everything depends on it!

::right::

::v-click
::question
**What failed here?**
::
::
::v-click
- Version control
- Testing
- Robustness to breakages
::

---

# Software rarely stays where it started

<br />

::center

<img src="../img/usage-pyramid.svg" alt="Usage pyramid showing research software growing from individual use to wider communities" style="width: 40%;" />

Most research software starts with one person solving an immediate problem.

::

<!--
As soon as you write that code, you have produced something useful.

It is useful to you (that's why you wrote it), so it will be useful to other people.
-->

---

# Engineering need

::center
<div class="w-165">
<img src="../img/engineering-need.svg" alt="Engineering need: Exploratory, Lab use, Collaborator use, Assured" style="width: 100%;" />
</div>
::

---
layout: two-cols-header
---

# How much engineering?

::left::

### What depends on the results?

**Greater reliance on outputs** calls for:

- Correctness and verification
- Reproducibility and provenance

::right::

### Who depends on the software?

**More users and contributors** call for:

- Usability and maintainability
- Documentation and collaboration

::bottom::

::v-click
::note
Engineer according to **reliance and consequence**, not the size of the codebase.
::
::

---
layout: two-cols-header
---

# AI changes the economics of producing code

::left::

### Traditional development

- Design and specification
- **Time-consuming implementation**
- Review and testing

The effort of writing code naturally limits how much we produce.

::right::

### AI-assisted development

- Design and specification
- **Rapid generation of large amounts of code**
- Review and testing

Code can be produced much faster than we can understand or verify it.

::bottom::

The bottleneck shifts from **producing code** to **evaluating it**.

::v-click
::note
Understanding, specification, judgement and evidence become increasingly valuable
::
::

<!--
The cost of producing code is falling much faster than the cost of understanding and maintaining it.

AI can produce a large implementation in minutes, but that doesn't mean it is appropriate, correct or maintainable.

This becomes particularly important when we discuss collaboration: a contribution is not free just because AI produced it quickly.
-->

---

# Working with AI

<span />

AI can **suggest**, **implement** or **act on our behalf**.

The same capabilities may be available through chat, an IDE, a terminal or a cloud service.

What changes is how we supervise the work:

- **Human-directed:** We guide the interaction step by step.
- **Human-supervised:** We delegate bounded tasks and review the results.
- **More autonomous:** The agent performs multiple actions before returning for review.

::v-click
::note
As AI takes on more of the work, we shift from directing its actions to defining boundaries and evaluating outcomes
::
::

---
layout: two-cols-header
---

# More agency, more need for engineering

::right::

<img src="../img/agency-constraints.svg" class="w-full" />

::left::

As AI moves from **suggesting** to **acting**, we need to define:

- **Intent** — what should it achieve?
- **Boundaries** — what may it change?
- **Evidence** — how will we know it worked?

::note
More agency demands clearer specifications, not bigger prompts
::

<!--
Microsoft Research describes "intent formalisation" as translating
human intent into specifications precise enough to guide and verify
agentic development.

As AI gains more freedom to act, we need to define what it may do,
what it must not do, and how we will evaluate the result.

The red trajectory illustrates an agent that continues pursuing
its objective but leaves the permitted operating boundaries.

The purple trajectory illustrates an agent operating within those
boundaries, even when its path is not prescribed step by step.
-->

---
layout: two-cols-header
---

# When the goal isn't enough

::left::

An agent may pursue its objective through actions you never intended.

::center

<div style="width: 50%">

```mermaid
flowchart TD
    A["Goal:<br/><b>Solve this challenge</b>"] --> B["AI agent"]
    B --> D["Intended actions"]
    D --> G["Goal"]

    subgraph permitted["INTENDED BOUNDARY"]
        D
    end

    B --> F["Actions outside<br/>intended boundary"]
    F --> G

    style permitted fill:#f8fafc,stroke:#64748b,stroke-width:2px,stroke-dasharray: 6 4
    style A fill:#e8f1fb,stroke:#0969da,stroke-width:2px
    style B fill:#e8f1fb,stroke:#0969da
    style D fill:#edf7ed,stroke:#43853d
    style F fill:#fdecec,stroke:#c62828,stroke-width:2px
```

</div>

::

::note
A **goal** is not a **boundary**
::

<CaseStudy
  title="The Hugging Face incident"
  description="OpenAI cybersecurity evaluation, 2026"
  url="https://openai.com/index/hugging-face-incident-and-the-road-ahead/"
  v-click
>

AI agents:

- **found unintended routes to access external systems**, despite operating restrictions
- **interacted with Hugging Face infrastructure**, which was outside the evaluation targets
- **obtained elevated access and exposed sensitive information**

</CaseStudy>

<!--
Giving an agent an objective does not define what it may
do to achieve it.

Context and instructions help steer behaviour, but technical
permissions and isolation determine what actions are actually
possible.

The Hugging Face incident illustrates how intended restrictions
can differ from effective operating boundaries.
-->

---

# Bound the work

<span />

A coding agent works better when the task is:

- Well-scoped
- Given the relevant context
- Small enough to review
- Clear about what it must not change

Breaking a project into manageable tasks gives us:

**better context · lower cost · smaller changes · easier supervision**

::note
Don't delegate the whole project. Delegate the next useful change.
::

<CaseStudy
  title="Navier–Stokes"
  description="An extreme example of agent scale"
  url="https://openai.com/index/navier-stokes-solution/"
  v-click
>

**~10,000** concurrent agents, **2.7 million** agent messages  
**~130 billion** output tokens, **~88 hours** to the result  
**Estimated $10–40 million cost**

</CaseStudy>

<!--
AI can be very powerful, but also very costly!
-->

---

# Results and process

<span />

Results that confirm our expectations leave little reason to question them.

But whether a result is **expected or surprising**, we should be able to establish:

- What code and data were used?
- What assumptions were made?
- What checks were performed?
- Can we reproduce the result?

::note
Good engineering leaves a trail that lets us answer those questions
::

---

# AI is not the domain expert

<span />

- AI can know a great deal about a domain.
- It may have access to the worlds knowledge, but it does not know what you are trying to achieve on this project.
- Ask yourself: do I actually understand this, or does it just look right?
- Stay in control

::note
Use AI to help encode domain knowledge. Be cautious about allowing it to hallucinte / invent domain knowledge.
::

<!--
A useful way to calibrate your expectations of AI is to ask it
about something you know very well.

Notice where its explanations are convincing but incomplete,
oversimplified or simply wrong.

Now consider how difficult those problems would be to recognise
in an unfamiliar subject.

Fluency and confidence are not evidence of correctness.
-->

---

# Today

<span />

We have seen why software engineering matters for research software, and how AI changes the economics of producing code.

Today, we’ll explore what good software engineering looks like when AI can write the code.

We will use **Python** and **GitHub Codespaces** to work through one small research-software example.

Everything we cover today is **relevant to any programming language** and **any development environment**.
