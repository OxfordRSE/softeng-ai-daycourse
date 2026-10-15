---
layout: section
routeAlias: version-control
---

# 5. Version control

## Git, history and recoverable change

---

# “Don't touch that bit”

::center

<img src="../img/phdcomics-code.png" alt="Legacy research code comic" style="width: 80%;" />

::

Re-running an old script, adjusting a previous student's code, changing code nobody fully understands.

::note
Why are we afraid to change it?
::

---
layout: two-cols-header
---

# Or we make another copy

::left::

```text
analysis.py
analysis_new.py
analysis_v2.py
analysis_v2_fixed.py
analysis_final.py
analysis_final_fixed.py
analysis_final_really_final.py
```

The names are trying to answer questions that version control is designed to answer.

---

# What version produced the result?

::center

<div class="w-120 mx-auto">

```mermaid
flowchart TB
    P["<b>Paper / figure</b>"]
    R["Result"]
    A["Analysis"]
    S["Source code"]
    D["Data"]
    E["Environment"]

    P --> R
    R --> A
    A --> S
    A --> D
    A --> E

    style P fill:#dbeafe,stroke:#2563eb,stroke-width:2px
    style R fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style A fill:#fff4e5,stroke:#d97706,stroke-width:2px
    style S fill:#dcfce7,stroke:#16a34a,stroke-width:2px
    style D fill:#dcfce7,stroke:#16a34a,stroke-width:2px
    style E fill:#dcfce7,stroke:#16a34a,stroke-width:2px
```

</div>

Can we identify the exact state that produced it?
::

---
layout: two-cols-header
transition: none
---

# Repository

::left::

- **Repository** — a collection of files and their history
- **History** — a record of changes to the files, including who made them and when
- **Version control** — a system for managing the repository and its history
- **Git** — a popular version control system
- **Commit** — a snapshot of the repository at a point in time

::right::

Any folder can be turned into a Git repository with `git init`.

A useful commit is:
- coherent
- small enough to understand
- described by an informative message

::bottom::

::center
```mermaid
gitGraph:
    commit id: "Version 1"
    commit id: "Add tests"
    commit id: "bugfix"
    commit id: "Add documentation"
    commit id: "Version 2"
```
::

---
layout: two-cols-header
---

# Staging and commits

::centralise::

::left::

<br />

<div style="position: relative; top: 0px; width: 40%; height: auto; margin: auto;">

  <div class="flex flex-col items-center space-y-10">
    <div class="flex space-x-1">
    <div class="w-50 h-15 border-2 border-orange-500 text-orange-500 flex items-center justify-center rounded">Working directory</div>
    </div>
    <div class="flex space-x-1">
      <div class="w-50 h-15 border-2 border-amber-500 text-amber-500 flex items-center justify-center rounded">Staging area</div>
    </div>
    <div class="flex space-x-1">
      <div class="w-50 h-15 border-2 border-yellow-500 text-yellow-500 flex items-center justify-center rounded">Repository</div>
    </div>
  </div>

  <FancyArrow
    x1="100"
    y1="240"
    x2="154"
    y2="275"
    arc="-0.4"
    head-size="15"
  />
  
  <div class="absolute top-16.5 left--30">
    <code>git add</code>
  </div>
  
  <FancyArrow
    x1="154"
    y1="170"
    x2="100"
    y2="210"
    arc="-0.4"
    head-size="15"
  />
  
  <FancyArrow
    x1="360"
    y1="275"
    x2="410"
    y2="310"
    arc="0.4"
    head-size="15"
  />

  <div class="absolute top-41.5 left-50 w-30">
    <code>git commit</code>
  </div>
  
  <FancyArrow
    x1="410"
    y1="340"
    x2="360"
    y2="375"
    arc="0.4"
    head-size="15"
  />
  
</div>

::right::

<div class="h-10" />

- **Staging**: Select changes to include in the next Commit (`git add`)
- **Commit**: Record the staged changes in repository history (`git commit`) with a message describing the changes

---

# Inspect the diff

<span />

Before committing, ask:

::note
What actually changed?
::

```bash
git status
git diff
git diff --staged
```

Especially when an AI agent has made the change:

::note
The AI tells you what it says it did. Git shows what changed.
::

---

# Branches support parallel work

::center

```mermaid
gitGraph
    commit id: "initial"
    commit id: "validation"
    branch feature
    checkout feature
    commit id: "add check"
    commit id: "add tests"
    commit id: "refine"
    checkout main
    commit id: "other work"
```

::

A branch gives a change its own history without immediately changing the shared line of development.

For substantial agentic experiments, a branch can provide room to experiment.

```bash
git switch feature
```

---

# Merging branches

::center

```mermaid
gitGraph
    commit id: "initial"
    commit id: "validation"
    branch feature
    checkout feature
    commit id: "add check"
    commit id: "add tests"
    commit id: "refine"
    checkout main
    commit id: "other work"
    merge feature
```

::

A branch lets us develop changes separately.

**Merging** incorporates committed changes from one branch into another.

```bash
git switch main
git merge feature
```

::note
Branches separate work. Merging brings them together.
::

<!--
Demonstrate a merge using VS Code's Git graph.

If main hasn't changed since the branch was created,
Git can simply move main forward (a fast-forward merge).

More complicated merges may require resolving conflicts.
We'll leave that for further exploration.
-->

---

# Who controls the repository?

<span />

A coding agent can:

- Modify files
- Stage changes
- Create commits
- Create or switch branches
- Restore earlier versions

We can give our agents clear boundaries through `AGENTS.md`, e.g.:

```text
Modify the working tree.
Do not stage or commit.
Stop when the requested change is complete.
```

::note
The agent proposes and implements changes. We decide what enters the repository history.
::

---
layout: two-cols-header
---

# Practical 5 — Record your changes

::left::

::small

1. Inspect the working tree:

   ```bash
   git status
   git diff
   git log --oneline
   ```

2. Create a branch for your work:

   ```bash
   git switch -c my-changes
   ```

3. Stage your changes and inspect what will be committed:

   ```bash
   git add .
   git status
   git diff --staged
   ```

::

::right::

::small

4. Commit the changes:

   ```bash
   git commit -m "Complete course practical changes"
   ```

5. Inspect the resulting history:

   ```bash
   git log --oneline --graph --all
   ```

**Going further**

Explore the repository's history using the terminal or VS Code's Source Control view.

- Inspect the available branches (`git branch -a`).
- Switch between `recovery/p2` and `recovery/p4`.
- Compare the files and commit history.
- Return to `my-changes`.

::

<!--
Walk through these commands and show VSCode interface equivalents.
-->

---

# Practical 5 — Recover a change

<span />

After committing your work:

1. Make an unwanted edit to an existing tracked file
2. Inspect it using `git diff`
3. Discard the edit using `git restore <file>`
4. Confirm the edit has been undone

::note
Git lets us experiment without permanently losing a known-good version
::

---

# Practical 5 — Merge your work

<span />

You've recorded your changes on `my-changes`.

Now incorporate them into `main`:

```bash
git status
git switch main
git merge my-changes
git log --oneline --graph --all
```

Check that your changes are now present on `main`.

::question
**What happened to the branch history when you merged?**
::

**Going further:** Create another branch, make a small change, commit it. Now return to main, make a small change and commit it. Merge your branch into `main` and examine the history using VS Code's Git graph. Why does the graph look different from the previous merge?

---

# Practical 5 — Checkpoint

<span />

Can you explain the difference between:

- **Working directory** — changes you are currently making
- **Staging area** — changes selected for the next commit
- **Repository history** — changes recorded in commits
- **Branches** — alternative lines of development
- **Merging** — incorporating changes from one branch into another

::note
Git helps us understand, record and recover changes
::

<CourseLink
  title="Version Control with Git"
  description="Learn how to use Git for version control, including branching, merging, and collaborating on code."
  url="https://www.rse.ox.ac.uk/training"
  v-click
/>
