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

<span />

When asking AI to implement software, request code that is:

::left::

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

<span />

When asking AI to implement software, request code that is:

::left::

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

<span />

When asking AI to implement software, request code that is:

::left::

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

<span />

When asking AI to implement software, request code that is:

::left::

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

When asking AI to implement software, request code that is:

::left::

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

New code should follow the conventions already established in the project.

Inconsistent:
```python
def validate_temperature(value):
    ...

def CheckPressure(Value):
    ...
```

Conventions:
```text
CamelCase
snake_case
kebab-case
```

::

---
layout: two-cols-header
transition: none
---

# Writing clean code

<span />

When asking AI to implement software, request code that is:

::left::

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

When asking AI to implement software, request code that is:

::left::

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
---

# Linters and autoformatters

::left::

Tools can help us maintain code quality automatically.

**Linters** identify potential errors and violations of coding conventions.

**Autoformatters** apply consistent formatting without intentionally changing behaviour.

Code should look as if a single developer wrote it, even if many people contributed.

For Python, **Ruff** can do both:

```bash
ruff check .
ruff format .
```

::right::

::note
AI-generated code should meet the same standards as human-written code
::

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

- **What problem are we solving?**
- **What behaviour do we require?**
- **What constraints matter?**
- **How will we know it works?**

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

# Practical 2a — Explore the codebase

<span />

Open the Research Data Checker in Codespaces.

Use **VS Code Chat** to answer:

1. Which file handles command-line arguments?
2. Where are measurements checked against a range?
3. Where are the default minimum and maximum values defined?

Open the relevant files and verify AI's answers.

::question
Did AI accurately explain how the existing code works?
::

---

# Practical 2b — Implement a change

<span />

Ask **VS Code Chat** to implement the feature described in `DESIGN.md`:

> Allow users to specify minimum and maximum measurement limits through command-line options.

Keep the existing defaults when no options are supplied.

Then run:

```bash
python -m research_check examples/observations.csv
python -m research_check examples/observations.csv --maximum 9
```

Compare the output.

::note
Inspect the code AI changed. Does the implementation remain simple and understandable?
::

---

# Practical 2c — Linters and autoformatters

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


---
layout: two-cols-header
---

# Practical 2 — Checkpoint

::left::

We asked AI to implement a bounded change.

Discuss:

- Did the implementation match `DESIGN.md`?
- Did AI change anything unrelated?
- Can you explain how the new behaviour works?

::right::

::note
AI can produce the implementation. We remain responsible for understanding and accepting it.
::
