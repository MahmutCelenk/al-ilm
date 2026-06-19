<template>
  <section id="baslangic-yollari" class="bg-background py-section-gap">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <h2 class="font-display text-3xl font-bold text-tertiary md:text-4xl">Nereden başlamalıyım?</h2>
        <p class="mt-2 text-sm leading-7 text-on-surface-variant">Sana en uygun öğrenme yolunu seç.</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="path in paths"
          :key="path.title"
          :to="path.to"
          class="group flex min-h-[260px] flex-col rounded-[20px] border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-manuscript transition hover:-translate-y-1 hover:border-primary-fixed-dim hover:shadow-manuscript-raised"
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-xl" :class="path.iconClass">
            <svg v-if="path.icon === 'search'" class="h-6 w-6" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="m31 31 8 8M22 34a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
              <path d="M18 22h8M22 18v8" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
            <svg v-else-if="path.icon === 'prayer'" class="h-6 w-6" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 8l12 10v22H12V18L24 8Z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round" />
              <path d="M19 40V27a5 5 0 0 1 10 0v13" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" />
            </svg>
            <svg v-else-if="path.icon === 'book'" class="h-6 w-6" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M10 12h12a6 6 0 0 1 6 6v26a6 6 0 0 0-6-6H10V12ZM38 12H28a6 6 0 0 0-6 6" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round" />
              <path d="M38 12v26H28a6 6 0 0 0-6 6" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round" />
            </svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M15 8v7M33 8v7M11 17h26M12 12h24a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="mt-6 font-display text-2xl font-bold leading-tight text-primary">{{ path.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">{{ path.description }}</p>
          <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
            {{ path.action }}
            <span class="transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type StartPath = {
  icon: string
  iconClass: string
  title: string
  description: string
  action: string
  to: string
}

defineProps<{
  paths: StartPath[]
}>()
</script>
