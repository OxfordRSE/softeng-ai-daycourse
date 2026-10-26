---
layout: section
routeAlias: wrapup
---

# Wrap-up

## Engineering judgement in the AI era

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
What should we do next?
::
::

::v-click
Raise a GitHub Issue!

* **Document** the unexpected behaviour
* Provide a reproducible example
* Discuss what the correct behaviour should be
* Agree on changes to the specification and tests
* Implement the fix, potentially with AI assistance
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

---

# Clean up: Delete your Codespace

<br />

::center
[github.com/codespaces](https://github.com/codespaces)
::

<br />

1. Find your Codespace in the list.
2. Click the **⋯** menu next to it.
3. Select **Delete** and confirm.

<br />

::note
Deleting your Codespace frees up storage and avoids unnecessary resource usage. Make sure you've committed and pushed any changes you want to keep!
::
