---
layout: section
routeAlias: wrapup
---

# Wrap-up

## Engineering judgement in the AI era

---
layout: two-cols-header
---

# What if the model is wrong?

::left::

<CourseProject>
  <template #sir>

Our SIR simulator assumes that everyone mixes homogeneously.

We've tested that:

<li> The population is conserved</li>
<li> Vaccination changes the initial populations correctly</li>

  </template>
</CourseProject>

Our tests pass. CI is green. The code has been reviewed.

But consider a population where individuals have very different contact patterns.

**Our software may be correct, but our scientific model may be inappropriate.**

::right::

::v-click

::question
What should we do next?
::

::

::v-click

- Revisit the scientific assumptions
- Discuss whether the model is appropriate
- Record the limitations
- Agree on any changes to the specification
- Develop and verify a revised model if needed

::

::v-click

::note
Software correctness does not establish scientific validity.
::

::

<ProjectSelector />

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
