<template>
  <div class="question-callout">
    <div class="question-label">Question</div>
    <div class="question-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.question-callout {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-left: 0.3rem solid #e67e22;
  background: rgba(230, 126, 34, 0.08);
}

.question-label {
  margin-bottom: 0.2rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.65;
}

.question-content {
  font-size: 1.05em;
  font-weight: 600;
}
</style>
