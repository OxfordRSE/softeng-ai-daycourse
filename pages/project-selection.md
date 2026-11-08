---
routeAlias: project-selection
disabled: true
---

# One course, two projects

<span />

The software engineering practices we cover today apply across research domains. We will use one application for the practical exercises.

<ProjectPicker />

::note
Choose the project for this session by a show of hands. You can change the selection at any time using the project menu in the bottom-right corner.
::

---

# Motivating Project

<CourseProject>
  <template #sir>

<div class="grid grid-cols-3 gap-6 items-center">

  <!-- Left: animated population compartments -->
  <div class="col-span-2">
    <center>
      Susceptible Infected Recovered (SIR) Model
    </center>
    <SIRCompartments />
  </div>

  <!-- Right: equations -->
  <div class="col-span-1 text-sm">

**Daily transitions**

$$
\begin{aligned}
\Delta I_t &= \beta \frac{S_t I_t}{N}\\
\Delta R_t &= \gamma I_t
\end{aligned}
$$

**Population updates**

$$
\begin{aligned}
S_{t+1} &= S_t-\Delta I_t\\
I_{t+1} &= I_t+\Delta I_t-\Delta R_t\\
R_{t+1} &= R_t+\Delta R_t
\end{aligned}
$$

**Constraints**

::center
$N = S + I + R$<br />
::

<br />

::center
$\beta$ (Transmission rate)<br />
$\gamma$ (Recovery rate)
::

  </div>
</div>

  </template>
</CourseProject>

<ProjectSelector />
