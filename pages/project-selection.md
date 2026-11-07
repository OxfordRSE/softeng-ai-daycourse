---
routeAlias: project-selection
disabled: false
---

# One course, two projects

<span />

The software engineering practices we cover today apply across research domains. We will use one application for the practical exercises.

<ProjectPicker />

::note
Choose the project for this session by a show of hands. You can change the selection at any time using the project menu in the bottom-right corner.
::

---
layout: default
---

# Project-aware practical content

<span />

This demonstrates how practical content will adapt to the selected project. The shared engineering workflow stays the same; only the project-specific block below changes.

<CourseProject>
  <template #sir>

### SIR Epidemic Simulator

SIR-specific practical instructions will appear here when the practicals are added.

  </template>

  <template #reaction-time>

### Reaction Time Lab

**Placeholder — practicals not yet available.**

The Experimental Psychology variant is planned, but no practical materials exist yet. No SIR instructions are shown for this project.

  </template>
</CourseProject>

::note
Change projects at any time using the selector in the bottom-right corner. The content above updates immediately.
::

<ProjectSelector />
