<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  url: string
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="course-link"
  >
    <div class="course-link-label">Further training</div>

    <div class="course-link-title">
      {{ title }}
      <span class="course-link-arrow">↗</span>
    </div>

    <div v-if="description" class="course-link-description">
      {{ description }}
    </div>
  </a>
</template>

<style scoped>
.course-link {
  position: absolute;
  top: 7rem;
  right: 1.5rem;
  width: 450px;

  display: block;
  padding: 0.75rem 1rem;

  border: 1px solid #d1d5db;
  border-radius: 0.5rem;

  text-decoration: none;
  color: inherit;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.course-link:hover {
  background: #ffffff;
}

.course-link-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
  margin-bottom: 0.2rem;
}

.course-link-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.course-link-arrow {
  margin-left: 0.25rem;
}

.course-link-description {
  margin-top: 0.2rem;
  font-size: 0.75rem;
  opacity: 0.75;
}
</style>
