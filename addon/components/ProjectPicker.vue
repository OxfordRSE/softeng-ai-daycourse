<script setup lang="ts">
import { activeProject, PROJECTS, setProject } from '../composables/useCourseProject'
</script>

<template>
  <div class="project-picker" role="group" aria-label="Choose a project for this session">
    <button
      v-for="project in PROJECTS"
      :key="project.id"
      type="button"
      class="project-card"
      :class="{ selected: activeProject === project.id }"
      :aria-pressed="activeProject === project.id"
      @click="setProject(project.id)"
    >
      <span class="project-card-top">
        <span class="project-card-name">{{ project.name }}</span>
        <span class="project-card-badge" :class="{ placeholder: project.placeholder }">
          {{ project.placeholder ? 'Placeholder' : 'Active project' }}
        </span>
      </span>

      <span class="project-card-summary">{{ project.summary }}</span>

      <span class="project-card-state">
        <span class="project-card-check" aria-hidden="true">
          {{ activeProject === project.id ? '✓' : '○' }}
        </span>
        {{ activeProject === project.id ? 'Selected for this session' : 'Select this project' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.project-picker {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  padding: 1rem 1.1rem;
  border: 1px solid #d1d5db;
  border-left: 0.3rem solid #cbd5e1;
  border-radius: 0.5rem;

  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;

  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.project-card:hover {
  border-color: #0969da;
  transform: translateY(-1px);
}

.project-card:focus-visible {
  outline: 3px solid rgba(9, 105, 218, 0.4);
  outline-offset: 2px;
}

.project-card.selected {
  border-color: #0969da;
  border-left-color: #0969da;
  background: #f4f8fd;
  box-shadow: 0 4px 14px rgba(9, 105, 218, 0.14);
}

.project-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.project-card-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: #002147;
}

.project-card-badge {
  flex: none;

  padding: 0.15rem 0.45rem;
  border-radius: 999px;

  background: #e8f1fb;
  color: #0969da;

  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-card-badge.placeholder {
  background: #f1f5f9;
  color: #64748b;
}

.project-card-summary {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.45;
}

.project-card-state {
  display: flex;
  align-items: center;
  gap: 0.35rem;

  margin-top: auto;
  padding-top: 0.35rem;

  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
}

.project-card.selected .project-card-state {
  color: #0969da;
}

.project-card-check {
  font-size: 0.9rem;
  line-height: 1;
}
</style>
