<template>
  <div class="note-callout">
    <div class="note-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.note-callout {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin: 1rem 0;
  padding: 0.75rem 1rem;

  border-left: 0.3rem solid #0969da;
  background: rgba(9, 105, 218, 0.06);
}

.note-icon {
  position: relative;
  flex: 0 0 1.35rem;

  width: 1.35rem;
  height: 1.35rem;

  border: 2px solid #0969da;
  border-radius: 50%;
  color: #0969da;
}

.note-icon::after {
  content: "i";

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);

  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1;
}

.note-content {
  flex: 1;
}

.note-content :deep(p) {
  margin: 0;
}
</style>
