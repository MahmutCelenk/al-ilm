<template>
  <header class="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface/95 backdrop-blur">
    <nav class="container-shell flex h-14 items-center justify-between">
      <NuxtLink to="/" class="font-display text-xl font-bold text-primary">
        Al-Ilm
      </NuxtLink>

      <div class="hidden items-center gap-6 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="border-b border-transparent py-1.5 text-xs font-medium text-on-surface transition hover:border-primary hover:text-primary"
          active-class="border-primary text-primary"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <div class="group relative">
          <button
            class="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-medium text-on-surface transition hover:bg-surface-container-low hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            type="button"
            aria-disabled="true"
            aria-describedby="language-tooltip"
          >
          <svg class="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21c-2.2-2.4-3.4-5.4-3.4-9S9.8 5.4 12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
          </svg>
            Dil
          </button>
          <span
            id="language-tooltip"
            role="tooltip"
            class="pointer-events-none absolute right-0 top-full z-20 mt-2 w-max translate-y-1 rounded bg-primary px-2.5 py-1.5 text-[11px] font-medium text-on-primary opacity-0 shadow-lg transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          >
            Yakında eklenecektir
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Öğrenme Yolları', to: '/#start' },
  { label: 'Sureler', to: '/sureler' },
  { label: "Kur'an", to: '/kuran' },
  { label: 'Hadis', to: '/hadis' },
  { label: 'Namaz', to: '/namaz' }
]
</script>
