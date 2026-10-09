<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  url?: string
}>()
</script>

<template>
  <component
    :is="url ? 'a' : 'div'"
    :href="url"
    :target="url ? '_blank' : undefined"
    :rel="url ? 'noopener noreferrer' : undefined"
    class="case-study"
  >
    <div class="case-study-label">Case study</div>

    <div class="case-study-title">
      {{ title }}
      <span v-if="url" class="case-study-arrow">↗</span>
    </div>

    <div v-if="description" class="case-study-description">
      {{ description }}
    </div>

    <div class="case-study-content">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.case-study {
  position: absolute;
  top: 7rem;
  right: 1.5rem;
  width: 450px;

  display: block;
  padding: 0.75rem 1rem;

  border: 1px solid #d1d5db;
  border-left: 0.3rem solid #0969da;
  border-radius: 0.5rem;

  text-decoration: none;
  color: inherit;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.case-study:hover {
  background: #ffffff;
}

.case-study-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0969da;
  margin-bottom: 0.2rem;
}

.case-study-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.case-study-arrow {
  margin-left: 0.25rem;
}

.case-study-description {
  margin-top: 0.2rem;
  font-size: 0.75rem;
  opacity: 0.75;
}

.case-study-content {
  margin-top: 0.65rem;
  font-size: 0.8rem;
  line-height: 1.5;
}

.case-study-content :deep(p) {
  margin: 0.15rem 0;
}
</style>
