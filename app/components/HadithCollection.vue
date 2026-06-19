<template>
  <section class="bg-background">
    <div class="border-b border-outline-variant/35 bg-[radial-gradient(circle_at_92%_18%,rgba(166,242,209,0.26),transparent_30%),radial-gradient(circle_at_8%_78%,rgba(254,214,91,0.18),transparent_28%),linear-gradient(180deg,#eef8f3_0%,#fbfdfb_100%)]">
      <div class="container-shell flex min-h-[400px] items-center py-16 lg:py-20">
        <div class="max-w-3xl">
          <p class="section-kicker text-sm font-semibold">Hadis Kütüphanesi</p>
          <h1 class="mt-5 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            Sahih hadisleri kaynaklı, sade ve konu konu oku.
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
            Her hadis kısa anlam, konu etiketi ve kaynak referansıyla birlikte tutulur.
          </p>
        </div>
      </div>
    </div>

    <div class="container-shell py-section-gap">
      <div class="rounded-[28px] border border-outline-variant/45 bg-surface-container-lowest p-4 shadow-manuscript md:p-5">
        <div class="grid gap-4 lg:grid-cols-[1fr_260px] lg:items-end">
          <form role="search" @submit.prevent>
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-on-surface-variant" for="hadith-search">Hadis ara</label>
            <div class="group/search flex min-h-12 items-center gap-3 rounded-2xl border border-outline-variant/45 bg-background px-4 py-1.5 transition duration-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary-fixed/80">
              <svg class="h-4 w-4 shrink-0 text-primary transition duration-300 group-focus-within/search:scale-110 group-focus-within/search:rotate-[-8deg]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
              <input
                id="hadith-search"
                v-model="search"
                class="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/70 focus:border-0 focus:outline-none focus:ring-0"
                type="search"
                placeholder="Niyet, ahlak, kaynak veya kısa anlam ara"
              >
            </div>
          </form>

          <div>
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-on-surface-variant" for="hadith-topic">Konu seç</label>
            <div class="relative">
              <select
                id="hadith-topic"
                v-model="activeTopic"
                class="min-h-12 w-full appearance-none rounded-2xl border border-outline-variant/45 bg-background px-4 pr-10 text-sm font-bold text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary-fixed/80"
              >
                <option v-for="topic in topicFilters" :key="topic" :value="topic">
                  {{ topic }}
                </option>
              </select>
              <svg class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-3 border-t border-outline-variant/40 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="topic in quickTopics"
              :key="topic"
              type="button"
              class="rounded-full border px-4 py-2 text-xs font-bold transition"
              :class="activeTopic === topic ? 'border-primary bg-primary text-on-primary shadow-sm' : 'border-outline-variant/50 bg-background text-on-surface-variant hover:border-primary-fixed-dim hover:text-primary'"
              @click="activeTopic = topic"
            >
              {{ topic }}
            </button>
          </div>
          <p class="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
            {{ filteredHadiths.length }} hadis gösteriliyor
          </p>
        </div>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <article
          v-for="hadith in filteredHadiths"
          :key="hadith.id"
          class="rounded-[24px] border border-outline-variant/45 bg-surface-container-lowest p-6 shadow-manuscript transition hover:-translate-y-1 hover:border-primary-fixed-dim hover:shadow-manuscript-raised"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="rounded-full bg-primary-fixed/80 px-3 py-1 text-[11px] font-bold text-primary">{{ hadith.topic }}</span>
              <h2 class="mt-4 font-display text-2xl font-bold leading-tight text-primary">{{ hadith.title }}</h2>
            </div>
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-sm font-bold text-tertiary">
              {{ hadith.id }}
            </span>
          </div>

          <p class="mt-5 text-base leading-8 text-on-surface">{{ hadith.meaning }}</p>

          <div class="mt-6 flex flex-col gap-3 border-t border-outline-variant/45 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">{{ hadith.reference }}</p>
            <a
              :href="hadith.sourceUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-tertiary"
            >
              Kaynağı gör
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>

      <div v-if="!filteredHadiths.length" class="mt-10 rounded-[24px] bg-surface-container-lowest p-10 text-center shadow-manuscript">
        <h2 class="font-display text-2xl font-semibold text-primary">Aramana uygun hadis bulunamadı</h2>
        <p class="mt-3 text-on-surface-variant">Farklı bir kelime dene veya konu filtresini değiştir.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type HadithItem = {
  id: number
  title: string
  meaning: string
  topic: string
  reference: string
  sourceUrl: string
}

const props = defineProps<{
  items: HadithItem[]
}>()

const search = ref('')
const activeTopic = ref('Tümü')
const preferredTopics = ['Tümü', 'Ahlak', 'İbadet', 'İlim', 'Kur’an', 'Temizlik']

const topics = computed(() => [...new Set(props.items.map((item) => item.topic))])
const topicFilters = computed(() => ['Tümü', ...topics.value])
const quickTopics = computed(() => preferredTopics.filter((topic) => topic === 'Tümü' || topics.value.includes(topic)))

const filteredHadiths = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('tr-TR')

  return props.items.filter((item) => {
    const matchesTopic = activeTopic.value === 'Tümü' || item.topic === activeTopic.value
    const haystack = [
      item.title,
      item.meaning,
      item.topic,
      item.reference
    ].join(' ').toLocaleLowerCase('tr-TR')

    return matchesTopic && (!term || haystack.includes(term))
  })
})
</script>
