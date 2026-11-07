<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { activeProject, PROJECTS } from '../composables/useCourseProject'

const slots = useSlots()

const currentProject = computed(() => activeProject.value)
const currentProjectInfo = computed(() =>
  PROJECTS.find(project => project.id === currentProject.value),
)
const hasContent = computed(() => Boolean(slots[currentProject.value]))
</script>

<template>
  <div class="course-project">
    <slot v-if="hasContent" :name="currentProject" />

    <div v-else class="course-project-missing" role="status">
      <div class="course-project-missing-label">Content not available</div>
      <p>
        No project-specific content has been written for
        <strong>{{ currentProjectInfo?.name ?? currentProject }}</strong> yet.
      </p>
    </div>
  </div>
</template>

<style scoped>
.course-project-missing {
  margin: 1rem 0;
  padding: 0.75rem 1rem;

  border-left: 0.3rem solid #e67e22;
  background: rgba(230, 126, 34, 0.08);
}

.course-project-missing-label {
  margin-bottom: 0.2rem;

  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #9a4d0b;
}

.course-project-missing p {
  margin: 0;
}
</style>
