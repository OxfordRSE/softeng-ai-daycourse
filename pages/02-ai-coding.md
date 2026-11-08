---
layout: section
routeAlias: coding
---

# 2. Coding with AI

## From specification to working code

---
layout: two-cols-header
transition: none
---

# Writing clean code

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- **Readable** — meaningful names and clear intent
- **Focused** — small functions with distinct responsibilities
- **Simple** — avoid unnecessary abstractions
- **Consistent** — follow the project's existing conventions
- **Documented** — explain non-obvious decisions and assumptions
- **Testable** — make important behaviour easy to verify

::

::right::

::note
Code is also context for **yourself**, the next **developer**, or the next **AI agent**
::

::note
We can reinforce these principles by providing our AI with **Skills**
::

---
layout: two-cols-header
transition: none
---

# Writing clean code

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- **Readable** — meaningful names and clear intent
- <span class="opacity-30">**Focused** — small functions with distinct responsibilities</span>
- <span class="opacity-30">**Simple** — avoid unnecessary abstractions</span>
- <span class="opacity-30">**Consistent** — follow the project's existing conventions</span>
- <span class="opacity-30">**Documented** — explain non-obvious decisions and assumptions</span>
- <span class="opacity-30">**Testable** — make important behaviour easy to verify</span>

::

::right::

::small

Prefer names that explain purpose over names that merely describe an operation

Intuit meaning:
```python
def convert(x):
```

::v-click
Declarative:

```python
def celsius_to_fahrenheit(celsius: float) -> float:
```
::
::

---
layout: two-cols-header
transition: none
---

# Writing clean code

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- <span class="opacity-30">**Readable** — meaningful names and clear intent</span>
- **Focused** — small functions with distinct responsibilities
- <span class="opacity-30">**Simple** — avoid unnecessary abstractions</span>
- <span class="opacity-30">**Consistent** — follow the project's existing conventions</span>
- <span class="opacity-30">**Documented** — explain non-obvious decisions and assumptions</span>
- <span class="opacity-30">**Testable** — make important behaviour easy to verify</span>

::

::right::

::small

Conflated responsilibities make code harder to understand, test and change.

```python
def check_data(filename):
    data = pd.read_csv(filename)

    for value in data["temperature"]:
        if value < 0 or value > 100:
            print("Invalid temperature")
```

<br />

> Small, focused functions are easier to understand, test and change

::

---
layout: two-cols-header
transition: none
---

# Writing clean code

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- <span class="opacity-30">**Readable** — meaningful names and clear intent</span>
- <span class="opacity-30">**Focused** — small functions with distinct responsibilities</span>
- **Simple** — avoid unnecessary abstractions
- <span class="opacity-30">**Consistent** — follow the project's existing conventions</span>
- <span class="opacity-30">**Documented** — explain non-obvious decisions and assumptions</span>
- <span class="opacity-30">**Testable** — make important behaviour easy to verify</span>

::

::right::

::small

AI can generate elaborate solutions to straightforward problems.

Unnecessary abstraction:

```python
class TemperatureConversionStrategy:
    def convert(self, value):
        return value * 1.8 + 32
```

Simpler:

```python
def celsius_to_fahrenheit(value):
    return value * 1.8 + 32
```

::

---
layout: two-cols-header
transition: none
---

# Writing clean code

<span />

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- <span class="opacity-30">**Readable** — meaningful names and clear intent</span>
- <span class="opacity-30">**Focused** — small functions with distinct responsibilities</span>
- <span class="opacity-30">**Simple** — avoid unnecessary abstractions</span>
- **Consistent** — follow the project's existing conventions
- <span class="opacity-30">**Documented** — explain non-obvious decisions and assumptions</span>
- <span class="opacity-30">**Testable** — make important behaviour easy to verify</span>

::

::right::

::small

Follow established conventions. For Python, [PEP 8](https://peps.python.org/pep-0008/) provides widely recognised style guidance.

Inconsistent:
```python
def validate_temperature(value):
    ...

def CheckPressure(Value):
    ...
```

::note
Consistency reduces the effort needed to read and maintain code
::

::

---
layout: two-cols-header
transition: none
---

# Writing clean code

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- <span class="opacity-30">**Readable** — meaningful names and clear intent</span>
- <span class="opacity-30">**Focused** — small functions with distinct responsibilities</span>
- <span class="opacity-30">**Simple** — avoid unnecessary abstractions</span>
- <span class="opacity-30">**Consistent** — follow the project's existing conventions</span>
- **Documented** — explain non-obvious decisions and assumptions
- <span class="opacity-30">**Testable** — make important behaviour easy to verify</span>

::

::right::

::small

Useful documentation explains intent, assumptions and non-obvious decisions.

Less useful:

```python
# Check if temperature is greater than 100
if temperature > 100:
    ...
```

More useful:

```python
# Measurements above the instrument's calibrated
# range must be flagged for manual review.
if temperature > 100:
    ...
```

::

---
layout: two-cols-header
---

# Writing clean code

<span />

::left::

Code quality is about more than correctness. We also want code that is understandable, maintainable and appropriate to its purpose.

::small

- <span class="opacity-30">**Readable** — meaningful names and clear intent</span>
- <span class="opacity-30">**Focused** — small functions with distinct responsibilities</span>
- <span class="opacity-30">**Simple** — avoid unnecessary abstractions</span>
- <span class="opacity-30">**Consistent** — follow the project's existing conventions</span>
- <span class="opacity-30">**Documented** — explain non-obvious decisions and assumptions</span>
- **Testable** — make important behaviour easy to verify

::

::right::

::small

Code is easier to test when behaviour can be inspected directly

Harder to test:

```python
def check_temperature(value):
    if value > 100:
        print("Invalid temperature")
```

Easier to test:

```python
def check_temperature(value):
    return value > 100
```

::

---
layout: two-cols-header
transition: none
---

# Linters and autoformatters

::left::

We don’t need to remember every formatting convention ourselves.

Tools such as Ruff can apply consistent formatting automatically, including conventions informed by the Python style guide [PEP 8](https://peps.python.org/pep-0008/).

**Linters** identify potential errors and violations of coding conventions.

**Autoformatters** apply consistent formatting without intentionally changing behaviour.

Code should look as if a single developer wrote it, even if many people contributed.

::right::

::note
AI-generated code should meet the same standards as human-written code
::

---
layout: two-cols-header
transition: none
---

# Linters and autoformatters

::left::

<span class="text-gray-400">We don’t need to remember every formatting convention ourselves.</span>

<span class="text-gray-400">Tools such as Ruff can apply consistent formatting automatically, including conventions informed by the Python style guide [PEP 8](https://peps.python.org/pep-0008/).</span>

**Linters** identify potential errors and violations of coding conventions.

<span class="text-gray-400">**Autoformatters** apply consistent formatting without intentionally changing behaviour.</span>

<span class="text-gray-400">Code should look as if a single developer wrote it, even if many people contributed.</span>

::right::

::note
AI-generated code should meet the same standards as human-written code
::

```python
F841 Local variable `threshold` is assigned to but never used
 --> check_temperature.py:2:5
  |
1 | def check_temperature(value):
2 |     threshold = 100
  |     ^^^^^^^^^
3 |     if value > 100:
4 |         print("Invalid temperature")
  |
```

---
layout: two-cols-header
---

# Linters and autoformatters

::left::

<span class="text-gray-400">We don’t need to remember every formatting convention ourselves.</span>

<span class="text-gray-400">Tools such as Ruff can apply consistent formatting automatically, including conventions informed by the Python style guide [PEP 8](https://peps.python.org/pep-0008/).</span>

<span class="text-gray-400">**Linters** identify potential errors and violations of coding conventions.</span>

**Autoformatters** apply consistent formatting without intentionally changing behaviour.

<span class="text-gray-400">Code should look as if a single developer wrote it, even if many people contributed.</span>

::right::

::note
AI-generated code should meet the same standards as human-written code
::

```python
def calc(a,b,c=2):
 x=a+b+c
 y=( a+b+c)/ 3 
 return  { 'sum':x ,"avg":y }
```

```python
def calc(a, b, c=2):
    x = a + b + c
    y = (a + b + c) / 3 
    return {"sum": x, "avg": y}
```

---
layout: two-cols-header
---

# From specification to implementation

::left::

We have a design document describing the intended behaviour.

Now AI can help turn that specification into working code.

Provide:

- **Context** — relevant files and `DESIGN.md`
- **Task** — the next bounded change
- **Constraints** — what must remain unchanged
- **Acceptance** — how we will evaluate the result

::right::

::note
The clearer the task, the easier it is to steer and review the implementation
::

---
layout: two-cols-header
---

# What should we delegate?

::left::

AI is particularly useful for:

- Generating boilerplate and repetitive code
- Implementing well-defined behaviour
- Suggesting alternative implementations
- Explaining unfamiliar code
- Refactoring and documenting existing software

::right::

But we still need to decide:

- What problem are we solving?
- What behaviour do we require?
- What constraints matter?
- How will we know it works?

::bottom::

::note
Delegate implementation work, not responsibility for the result
::

---

# Codespaces

::center

<a href="https://github.com/features/codespaces" target="_blank" rel="noopener noreferrer"><img src="../img/codespaces.png" alt="GitHub Codespaces" class="border border-gray-300" style="width: 70%;" /></a>

[github.com/codespaces](https://www.github.com/codespaces) gives everyone a common, pre-configured development environment.

For today, think of the Codespace as the machine on which you are developing.

::

---


# Practical 2 — Open your development environment

<span />

We'll use **GitHub Codespaces** as our development computer throughout the day.

<CourseProject>
  <template #sir>

1. Open the [SIR Model repository](https://github.com/OxfordRSE/softeng-ai-daycourse-sir-model).

<div style="height: 10px;" />

::center
[https://github.com/OxfordRSE/softeng-ai-daycourse-sir-model](https://github.com/OxfordRSE/softeng-ai-daycourse-sir-model)
::

<div style="height: 12px;" />

  </template>
</CourseProject>

2. Click **Use this template** → **Create a new repository**.
3. In your new repository, select **Code → Codespaces → Create codespace on main**.
4. Wait for VS Code to open in your browser.

::note
Your repository contains the project specification and instructions, but no application implementation.
::

<ProjectSelector />

---

# Getting to know VS Code

<span />

VS Code is our development environment.

- **Explorer** — browse project files
- **Editor** — inspect and modify files
- **Terminal** — run commands and tools
- **AI Chat** — discuss and delegate coding tasks

::note
You don't need to write Python yourself to work with a coding agent
::

---

# Practical 2a — Explore the project

<span />

Before asking AI to write code, inspect the starter repository

Open:

- `README.md` — what is this project?
- `DESIGN.md` — what are we building?
- `AGENTS.md` — how should the coding agent work?

Use Copilot Chat (Plan mode) to explore the specification:

```text
Read DESIGN.md and AGENTS.md.
Summarise what we are building, identify the main constraints, and explain
how you would approach the implementation. Do not write code yet.
```

::question
Does the agent understand the task and its boundaries?
::

---

# Practical 2b — Build the SIR simulator

<span />

Ask Copilot to implement the agreed specification.

```text
Read DESIGN.md and implement the model described there.

Follow the project instructions in AGENTS.md.

Keep the implementation small and understandable.
Run the application and report the result.

Do not commit or push changes.
```

Inspect the files Copilot creates.

::note
We are delegating implementation, not the responsibility for understanding what was built
::

---

# Practical 2c — Run your simulator

<span />

Run the application:

```bash
python sir.py --beta 0.3 --gamma 0.1
```

Experiment with the parameters:

- What happens when transmission increases?
- What happens when recovery becomes faster?
- Can you find parameters that produce no epidemic growth?

Ask Copilot to explain any results you find surprising.

::question
Does the behaviour seem consistent with the SIR model?
::

---

# Practical 2d — Check code quality

<span />

Dedicated tools can automate routine checks without requiring AI

Use **Ruff** to check and format the code:

```bash
pip install ruff
ruff check .
ruff format .
```

Inspect the results.

::question
What did Ruff identify or change? Does this establish that the software behaves correctly?
::

<!--
Presenter demonstration:

Add an unused variable to sir.py, for example:

    unused = 42

Run:
    ruff check sir.py

Show the F841 warning, then remove the variable.

Explain that Ruff detects certain code-quality problems,
but cannot establish that the SIR model is correct.
-->

---

# Teaching AI our conventions

<span />

We've used **Ruff** to check and format our code.

Rather than repeating these instructions in every prompt, we can add them to `AGENTS.md`:

```md
## Code quality

Before completing a coding task:
- Run `ruff check .`
- Run `ruff format --check .`
- Report any failures.
```

::note
`DESIGN.md` describes what we're building.

`AGENTS.md` describes how we expect AI to work.
::

---

# Going further — Explore and extend

<span />

Finished the core practical?

Choose a challenge:

- **Improve the CLI:** Add an option to display daily S, I and R values.
- **Investigate behaviour:** Explore how the ratio of transmission to recovery affects epidemic growth.
- **Improve documentation:** Ask AI to add a usage example to `README.md`.
- **Try another interface:** Use Copilot CLI in the terminal to inspect or extend the project.

Keep changes small and review what the agent produces.

---

# Practical 2 — Checkpoint

<span />

Review what was produced:

- Does the application satisfy `DESIGN.md`?
- Is the implementation simple and understandable?
- Did the agent introduce unnecessary dependencies or files?
- Can you explain how the program works?
- What evidence do we have that the results are correct?

::note
A working application is a starting point, not evidence that every requirement has been satisfied.
::
