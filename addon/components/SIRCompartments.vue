
<script setup lang="ts">
import { computed, ref } from 'vue'

const step = ref(0)
const maxStep = 8

// Illustrative transitions, not numerical SIR results.
// Three people are initially infected.
// Each person can move S -> I -> R, but never backwards.
const people = Array.from({ length: 24 }, (_, id) => {
  if (id < 3) {
    return { id, infectedAt: 0, recoveredAt: 3 + id }
  }

  const infectedAt = 1 + Math.floor((id - 3) / 4)
  const recoveredAt = Math.min(
    8,
    infectedAt + 2 + (id % 2),
  )

  return { id, infectedAt, recoveredAt }
})

type Group = 'S' | 'I' | 'R'

const groups = [
  { id: 'S', name: 'Susceptible', x: 110, color: '#3b82b6' },
  { id: 'I', name: 'Infected', x: 330, color: '#e28a40' },
  { id: 'R', name: 'Recovered', x: 550, color: '#48a785' },
] as const

const positions = computed(() => {
  const members: Record<Group, number[]> = {
    S: [], I: [], R: [],
  }

  for (const person of people) {
    const group: Group =
      step.value >= person.recoveredAt ? 'R'
      : step.value >= person.infectedAt ? 'I'
      : 'S'

    members[group].push(person.id)
  }

  return people.map(person => {
    const group: Group =
      step.value >= person.recoveredAt ? 'R'
      : step.value >= person.infectedAt ? 'I'
      : 'S'

    const index = members[group].indexOf(person.id)
    const column = index % 5
    const row = Math.floor(index / 5)
    const centre = groups.find(g => g.id === group)!

    return {
      id: person.id,
      group,
      x: centre.x + (column - 2) * 27,
      y: 83 + row * 27,
      color: centre.color,
    }
  })
})

const counts = computed(() => ({
  S: positions.value.filter(p => p.group === 'S').length,
  I: positions.value.filter(p => p.group === 'I').length,
  R: positions.value.filter(p => p.group === 'R').length,
}))

function next() {
  step.value = Math.min(maxStep, step.value + 1)
}

function previous() {
  step.value = Math.max(0, step.value - 1)
}

function reset() {
  step.value = 0
}
</script>

<template>
  <div class="sir-demo">
    <svg
      viewBox="0 0 660 285"
      role="img"
      aria-label="Illustration of people moving between susceptible, infected and recovered groups"
    >
      <!-- Compartments -->
      <g v-for="group in groups" :key="group.id">
        <circle
          :cx="group.x"
          cy="140"
          r="90"
          :stroke="group.color"
          :fill="group.color"
          fill-opacity="0.08"
          stroke-width="2.5"
        />

        <text
          :x="group.x"
          y="255"
          text-anchor="middle"
          class="group-label"
        >
          {{ group.name }}
        </text>

        <text
          :x="group.x"
          y="280"
          text-anchor="middle"
          class="group-count"
          :fill="group.color"
        >
          {{ counts[group.id] }}
        </text>
      </g>

      <!-- Direction of progression -->
      <g class="arrows">
        <path d="M201 135 H238" />
        <path d="M230 127 L238 135 L230 143" />

        <path d="M421 135 H458" />
        <path d="M450 127 L458 135 L450 143" />
      </g>

      <!-- People: stable identities, animated positions -->
      <g
        v-for="person in positions"
        :key="person.id"
        class="person"
        :style="{
          transform: `translate(${person.x}px, ${person.y}px)`,
          color: person.color,
        }"
      >
        <circle
          cx="0"
          cy="-6"
          r="4"
          fill="currentColor"
        />
        <path
          d="
            M0 -2 V9
            M0 1 L-5 5
            M0 1 L5 5
            M0 8 L-4 14
            M0 8 L4 14
          "
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>

    <div class="sir-controls">
      <input
        v-model.number="step"
        type="range"
        min="0"
        :max="maxStep"
        step="1"
        aria-label="Epidemic progression"
      />
    </div>
  </div>
</template>

<style scoped>
.sir-demo {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

svg {
  display: block;
  width: 100%;
  overflow: visible;
}

.person {
  transition:
    transform 700ms ease-in-out,
    color 500ms ease;
}

.group-label {
  fill: currentColor;
  font-size: 17px;
  font-weight: 600;
}

.group-count {
  font-size: 23px;
  font-weight: 700;
}

.arrows {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.55;
}

.sir-controls {
  max-width: 650px;
  margin: 0 auto;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 8px;
}

input[type="range"] {
  width: 100%;
  accent-color: #3b82b6;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
}

button {
  border: 1px solid #8886;
  border-radius: 7px;
  padding: 7px 17px;
  background: transparent;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: #8882;
}

button:disabled {
  opacity: 0.35;
  cursor: default;
}

.sir-note {
  text-align: center;
  font-size: 13px;
  opacity: 0.65;
  margin-top: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .person {
    transition: none;
  }
}
</style>

