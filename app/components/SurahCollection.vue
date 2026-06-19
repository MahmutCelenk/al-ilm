<template>
  <section class="bg-background">
    <div class="border-b border-outline-variant/35 bg-[radial-gradient(circle_at_88%_12%,rgba(166,242,209,0.3),transparent_30%),radial-gradient(circle_at_10%_78%,rgba(254,214,91,0.16),transparent_28%),linear-gradient(180deg,#eef8f3_0%,#fbfdfb_100%)]">
      <div class="container-shell flex min-h-[360px] items-center py-14 lg:py-18">
        <div class="max-w-3xl">
          <p class="section-kicker text-sm font-semibold">Sureler</p>
          <h1 class="mt-5 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            Kur’an surelerini 1’den 114’e Arapça metin ve Türkçe anlamıyla oku.
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
            Sureleri numara, isim, anlam ve ayet metni üzerinden ara; seçtiğin sureyi ayet ayet sakin bir okuma düzeninde incele.
          </p>
        </div>
      </div>
    </div>

    <div class="container-shell py-section-gap">
      <div class="grid gap-6 xl:grid-cols-[360px_1fr] xl:items-start">
        <aside class="rounded-[28px] border border-outline-variant/45 bg-surface-container-lowest p-4 shadow-manuscript md:p-5 xl:sticky xl:top-20">
          <form role="search" @submit.prevent>
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-on-surface-variant" for="surah-search">Sure ara</label>
            <div class="group/search flex min-h-12 items-center gap-3 rounded-2xl border border-outline-variant/45 bg-background px-4 py-1.5 transition duration-300 focus-within:-translate-y-0.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary-fixed/80">
              <svg class="h-4 w-4 shrink-0 text-primary transition duration-300 group-focus-within/search:scale-110 group-focus-within/search:rotate-[-8deg]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
              <input
                id="surah-search"
                v-model="search"
                class="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/70 focus:border-0 focus:outline-none focus:ring-0"
                type="search"
                placeholder="Fatiha, İhlas, Felak veya anlam ara"
              >
            </div>
          </form>

          <div class="mt-5 border-t border-outline-variant/45 pt-4">
            <div class="mb-3 flex items-center justify-between gap-3">
              <p class="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Sure listesi</p>
              <p class="text-xs font-bold text-primary">{{ filteredSurahs.length }}</p>
            </div>

            <div class="max-h-[520px] space-y-2 overflow-y-auto pr-1">
              <button
                v-for="surah in filteredSurahs"
                :key="surah.id"
                type="button"
                class="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5"
                :class="selectedSurah?.id === surah.id ? 'border-primary bg-primary text-on-primary shadow-sm' : 'border-outline-variant/45 bg-background text-on-surface hover:border-primary-fixed-dim'"
                @click="selectedSurahId = surah.id"
              >
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                  :class="selectedSurah?.id === surah.id ? 'bg-on-primary/12 text-on-primary' : 'bg-primary-fixed text-primary'"
                >
                  {{ surah.id }}
                </span>
                <span class="min-w-0">
                  <span class="block truncate font-display text-lg font-bold">{{ surah.name }}</span>
                  <span class="mt-0.5 block truncate text-xs opacity-75">{{ surah.meaning }}</span>
                </span>
                <span class="text-right font-serif text-xl leading-none" dir="rtl" lang="ar">{{ surah.arabicName }}</span>
              </button>
            </div>
          </div>
        </aside>

        <article v-if="selectedSurah" class="overflow-hidden rounded-[28px] bg-surface-container-lowest shadow-manuscript">
          <div class="border-b border-outline-variant/50 bg-surface-container-low px-6 py-6 md:px-8">
            <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-secondary">{{ selectedSurah.id }}. sure · {{ selectedSurah.verseCount }} ayet</p>
                <h2 class="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">{{ selectedSurah.name }} Suresi</h2>
                <p class="mt-3 text-base leading-8 text-on-surface-variant">{{ selectedSurah.meaning }}</p>
              </div>
              <p class="font-serif text-5xl leading-none text-primary md:text-6xl" dir="rtl" lang="ar">{{ selectedSurah.arabicName }}</p>
            </div>
          </div>

          <ol class="divide-y divide-outline-variant/45">
            <li
              v-for="verse in selectedSurah.verses"
              :key="verse.number"
              class="grid gap-5 px-6 py-7 md:grid-cols-[56px_1fr] md:px-8"
            >
              <span class="flex h-11 w-11 items-center justify-center rounded-full bg-primary-fixed text-sm font-bold text-primary">
                {{ verse.number }}
              </span>
              <div>
                <p class="font-serif text-3xl leading-[2.2] text-primary md:text-4xl" dir="rtl" lang="ar">{{ verse.arabic }}</p>
                <p class="mt-4 rounded-2xl border border-primary-fixed-dim/50 bg-primary-fixed/25 px-5 py-3 text-sm font-semibold leading-7 text-primary">
                  <span class="text-xs uppercase tracking-wide text-secondary">Okunuş:</span>
                  {{ verse.reading }}
                </p>
                <p class="mt-4 rounded-2xl bg-surface-container-low px-5 py-4 text-base leading-8 text-on-surface-variant">
                  {{ verse.translation }}
                </p>
              </div>
            </li>
          </ol>

          <div class="border-t border-outline-variant/45 bg-surface-container-low px-6 py-5 md:px-8">
            <p class="text-xs font-semibold leading-6 text-on-surface-variant">{{ selectedSurah.source }}</p>
          </div>
        </article>

        <div v-else class="rounded-[28px] bg-surface-container-lowest p-10 text-center shadow-manuscript">
          <h2 class="font-display text-2xl font-semibold text-primary">Aramana uygun sure bulunamadı</h2>
          <p class="mt-3 text-on-surface-variant">Farklı bir kelime dene veya filtreyi tüm surelere al.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SurahItem } from '~/data/surahs'

const props = defineProps<{
  items: SurahItem[]
}>()

const search = ref('')
const selectedSurahId = ref(props.items[0]?.id ?? 1)

const filteredSurahs = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('tr-TR')

  return props.items
    .filter((surah) => {
      const haystack = [
        surah.id.toString(),
        surah.name,
        surah.arabicName,
        surah.meaning,
        ...surah.verses.flatMap((verse) => [verse.arabic, verse.reading, verse.translation])
      ].join(' ').toLocaleLowerCase('tr-TR')

      return !term || haystack.includes(term)
    })
})

const selectedSurah = computed(() => {
  return filteredSurahs.value.find((surah) => surah.id === selectedSurahId.value)
    ?? filteredSurahs.value[0]
    ?? props.items[0]
})

watch(filteredSurahs, (surahs) => {
  if (surahs.length && !surahs.some((surah) => surah.id === selectedSurahId.value)) {
    selectedSurahId.value = surahs[0]?.id ?? selectedSurahId.value
  }
})
</script>
