<template>
  <section
    class="not-prose rounded-[24px] bg-surface-container-lowest shadow-manuscript"
    :class="compact ? 'p-6' : 'my-12 p-6 md:p-8'"
  >
    <div class="max-w-2xl" :class="compact ? 'mb-5' : 'mb-6'">
      <p class="text-xs font-semibold uppercase tracking-wide text-secondary">{{ eyebrow }}</p>
      <h3 class="mt-2 font-display font-semibold text-primary" :class="compact ? 'text-xl leading-7' : 'text-2xl'">{{ title }}</h3>
    </div>

    <div class="divide-y divide-outline-variant/60">
      <details
        v-for="item in items"
        :key="item.question"
        class="group py-4 first:pt-0 last:pb-0"
      >
        <summary class="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
          <span class="font-display font-semibold leading-7 text-tertiary" :class="compact ? 'text-base' : 'text-lg'">{{ item.question }}</span>
          <span class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-fixed/70 text-primary transition group-open:rotate-180">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </summary>
        <p class="mt-3 max-w-2xl leading-7 text-on-surface-variant" :class="compact ? 'text-sm' : 'text-[15px]'">
          {{ item.answer }}
        </p>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  compact?: boolean
  items: Array<{ question: string; answer: string }>
}>(), {
  eyebrow: 'Sık sorulanlar',
  title: 'Aklında kalabilecek sorular',
  compact: false
})
</script>
