<script setup lang="ts">
import { useNav } from '@slidev/client'
import { activeProject, PROJECTS, setProject } from '../composables/useCourseProject'

// Include this component only on slides with project-aware content.
// The selected project itself is shared globally and persists across slides.
const { isPrintMode } = useNav()

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement
  setProject(target.value)
}
</script>

<template>
  <label v-if="!isPrintMode" class="project-selector">
    <span class="project-selector-label">Project</span>
    <select
      class="project-selector-select"
      :value="activeProject"
      @change="onChange"
    >
      <option
        v-for="project in PROJECTS"
        :key="project.id"
        :value="project.id"
      >
        {{ project.name }}
      </option>
    </select>
  </label>
</template>

<style scoped>
.project-selector {
  position: absolute;
  right: 1rem;
  bottom: 0.85rem;
  z-index: 20;

  display: flex;
  align-items: center;
  gap: 0.45rem;

  padding: 0.3rem 0.55rem;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  font-size: 0.7rem;
  line-height: 1;
}

.project-selector-label {
  color: #64748b;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-selector-select {
  max-width: 13rem;
  border: 0;
  background: transparent;

  color: #002147;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 600;

  cursor: pointer;
}

.project-selector-select:focus-visible {
  border-radius: 0.25rem;
  outline: 2px solid #0969da;
  outline-offset: 2px;
}

@media print {
  .project-selector {
    display: none !important;
  }
}
</style>
