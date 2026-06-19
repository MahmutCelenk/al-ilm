<template>
  <div class="not-prose my-8 rounded-[24px] border-l-4 border-primary bg-primary-fixed/25 p-6 shadow-manuscript md:p-8">
    <p class="text-xs font-semibold uppercase tracking-wide text-secondary">{{ eyebrow }}</p>
    <h3 class="mt-2 font-display text-2xl font-semibold text-primary">{{ title }}</h3>
    <p class="mt-3 text-base leading-8 text-on-surface-variant">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
}>(), {
  eyebrow: 'Not'
})
</script>
