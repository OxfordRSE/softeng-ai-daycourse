---
layout: section
routeAlias: wrapup
---

# Wrap-up

## Confidence, evidence and proportionality

---
layout: two-cols-header
---

# What if the test is wrong?

::left::

Suppose we specify:
> **A repeated `sample_id` is an error.**

We write the test ourselves. The agent implements the behaviour correctly. The test passes. CI is green. The change is reviewed.

Then we encounter longitudinal data:

```text
sample_id   timepoint
A001        0
A001        1
A001        2
```

The software is behaving **exactly as specified**.

The specification was wrong for this use case.

::right::

::v-click
::question
Where could we have challenged the assumption that repeated IDs are errors?
::
::

<!--
Run `python -m research_check examples/longitudinal.csv`
to reproduce the longitudinal-data example.
-->

---

# Engineer proportionately

<span />

**What engineering practices and evidence would you require for:**

1. A one-off exploratory visualisation?
2. A script generating a key figure for a paper?
3. A tool routinely used by a research group?
4. Software shared with collaborating institutions?
5. Software incorporated into a controlled process?

::note
The appropriate level of engineering depends on who relies on the software, what relies on its outputs, and the consequences of failure
::
