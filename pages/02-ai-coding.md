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

- **What problem are we solving?**
- **What behaviour do we require?**
- **What constraints matter?**
- **How will we know it works?**

::bottom::

::note
Delegate implementation work, not responsibility for the result
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

<!--
Ruff check produces an import error, in this case an outdated import convention.
Ruff format changes cli.py line 29 measurements.
-->

---

# Practical 2 — Checkpoint

<span />

Review the implementation AI produced.
- Does it satisfy the intended behaviour?
- Is the change **simple and focused**?
- Can you explain the code?
- Did AI introduce unnecessary complexity?

::note
A working implementation is a starting point. Inspect the changes, question unnecessary complexity and decide whether to accept them.
::

---

# Teaching AI our conventions

<span />

We've used **Ruff** to check and format our code.

Rather than repeating these instructions in every prompt, we can record them in `AGENTS.md`:

```md
## Code quality

Follow the project's coding conventions.

Before completing a coding task:
- Run `ruff check .`
- Run `ruff format --check .`

Report any failures.
```

::note
Project instructions provide reusable context for AI agents, just as design documents capture reusable decisions
::
