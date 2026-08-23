<template>
  <section class="bg-background">
    <div class="border-b border-outline-variant/35 bg-[radial-gradient(circle_at_88%_12%,rgba(166,242,209,0.3),transparent_30%),radial-gradient(circle_at_10%_78%,rgba(254,214,91,0.16),transparent_28%),linear-gradient(180deg,#eef8f3_0%,#fbfdfb_100%)]">
      <div class="container-shell flex min-h-[280px] items-center py-10 md:min-h-[320px] lg:py-14">
        <div class="max-w-3xl">
          <p class="section-kicker text-sm font-semibold">Sureler</p>
          <h1 class="mt-5 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            Kur’an surelerini 1’den 114’e Arapça metin ve Türkçe anlamıyla oku.
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
            Sureleri numarası, adı veya anlamıyla hızlıca bul; seçtiğin sureyi ayet ayet sakin bir okuma düzeninde incele.
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
                ref="searchInput"
                v-model="search"
                class="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/70 focus:border-0 focus:outline-none focus:ring-0"
                type="search"
                placeholder="Felak, İhlâs veya 113"
                autocomplete="off"
                aria-controls="surah-results"
                aria-describedby="surah-search-help"
                @keydown.esc="clearSearch"
              >
              <button
                v-if="search"
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                type="button"
                aria-label="Aramayı temizle"
                @click="clearSearch"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </button>
            </div>
            <p id="surah-search-help" class="mt-2 text-xs leading-5 text-on-surface-variant">
              Sûre adı, anlamı veya sıra numarasıyla ara.
            </p>
          </form>

          <div class="mt-4 flex flex-wrap gap-2" aria-label="İniş yerine göre filtrele">
            <button
              v-for="filter in revelationFilters"
              :key="filter"
              type="button"
              class="min-h-9 rounded-full border px-3 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              :class="selectedRevelation === filter ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant/50 bg-background text-on-surface-variant hover:border-primary hover:text-primary'"
              :aria-pressed="selectedRevelation === filter"
              @click="selectedRevelation = filter"
            >
              {{ filter }}
            </button>
          </div>

          <div class="mt-5 border-t border-outline-variant/45 pt-4">
            <div class="mb-3 flex items-center justify-between gap-3">
              <p class="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Sure listesi</p>
              <p class="text-xs font-bold text-primary" aria-live="polite">{{ resultSummary }}</p>
            </div>

            <div id="surah-results" class="max-h-[520px] space-y-2 overflow-y-auto pr-1" role="listbox" aria-label="Sûre arama sonuçları">
              <button
                v-for="surah in filteredSurahs"
                :key="surah.id"
                type="button"
                class="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5"
                :class="selectedSurah?.id === surah.id ? 'border-primary bg-primary text-on-primary shadow-sm' : 'border-outline-variant/45 bg-background text-on-surface hover:border-primary-fixed-dim'"
                role="option"
                :aria-selected="selectedSurah?.id === surah.id"
                @click="selectSurah(surah.id)"
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
                <span class="text-right font-['Uthmanic_Hafs','Amiri_Quran',serif] text-xl leading-none" dir="rtl" lang="ar">{{ surah.arabicName }}</span>
              </button>
            </div>
          </div>
        </aside>

        <article v-if="selectedSurah" ref="articleElement" class="scroll-mt-32 overflow-visible rounded-[28px] bg-surface-container-lowest shadow-manuscript">
          <div class="rounded-t-[28px] border-b border-outline-variant/50 bg-surface-container-low px-6 py-6 md:px-8">
            <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-secondary">{{ selectedSurah.id }}. sure · {{ selectedSurah.verseCount }} ayet</p>
                <h2 class="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">{{ selectedSurah.name }} Suresi</h2>
                <p class="mt-3 text-base leading-8 text-on-surface-variant">{{ selectedSurah.meaning }}</p>
              </div>
              <p class="font-['Uthmanic_Hafs','Amiri_Quran',serif] text-5xl leading-none text-primary md:text-6xl" dir="rtl" lang="ar">{{ selectedSurah.arabicName }}</p>
            </div>
          </div>

          <nav class="sticky top-14 z-20 flex items-center gap-2 border-b border-outline-variant/50 bg-surface-container-lowest/95 px-3 py-3 shadow-sm backdrop-blur md:px-6" aria-label="Sûreler arasında gezin">
            <button
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/50 text-primary transition hover:border-primary hover:bg-primary-fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              :disabled="selectedSurah.id === 1"
              aria-label="Önceki sûre"
              @click="goToAdjacentSurah(-1)"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <label class="relative min-w-0 flex-1">
              <span class="sr-only">Başka bir sûre seç</span>
              <select
                :value="selectedSurah.id"
                class="h-11 w-full appearance-none rounded-xl border border-outline-variant/50 bg-background px-4 pr-10 text-sm font-bold text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                @change="handleSurahSelect"
              >
                <option v-for="surah in items" :key="surah.id" :value="surah.id">
                  {{ surah.id }}. {{ surah.name }} — {{ surah.meaning }}
                </option>
              </select>
              <svg class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m7 10 5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </label>

            <button
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant/50 text-primary transition hover:border-primary hover:bg-primary-fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              :disabled="selectedSurah.id === 114"
              aria-label="Sonraki sûre"
              @click="goToAdjacentSurah(1)"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </nav>

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
                <p class="font-['Uthmanic_Hafs','Amiri_Quran',serif] text-[2rem] leading-[2.1] text-primary sm:text-4xl" dir="rtl" lang="ar">{{ verse.arabic }}</p>
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

          <div class="rounded-b-[28px] border-t border-outline-variant/45 bg-surface-container-low px-6 py-5 md:px-8">
            <p class="text-xs font-semibold leading-6 text-on-surface-variant">{{ selectedSurah.source }}</p>
          </div>
        </article>

        <div v-else class="rounded-[28px] bg-surface-container-lowest p-10 text-center shadow-manuscript">
          <h2 class="font-display text-2xl font-semibold text-primary">Aramana uygun sure bulunamadı</h2>
          <p class="mt-3 text-on-surface-variant">Sûre adını veya numarasını kontrol et ya da filtreyi temizle.</p>
          <button class="mt-5 min-h-11 rounded-full bg-primary px-5 text-sm font-bold text-on-primary transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" type="button" @click="resetFilters">
            Filtreleri temizle
          </button>
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

const revelationFilters = ['Tümü', 'Mekki', 'Medeni'] as const
type RevelationFilter = typeof revelationFilters[number]

const search = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const articleElement = ref<HTMLElement | null>(null)
const selectedRevelation = ref<RevelationFilter>('Tümü')
const selectedSurahId = ref(props.items[0]?.id ?? 1)

const normalizeText = (value: string | number) => String(value)
  .normalize('NFKD')
  .replace(/\p{M}/gu, '')
  .toLocaleLowerCase('tr-TR')
  .replace(/ı/g, 'i')
  .replace(/[’‘`´]/g, "'")
  .replace(/[^\p{L}\p{N}']/gu, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const filteredSurahs = computed(() => {
  const term = normalizeText(search.value)

  return props.items
    .filter((surah) => selectedRevelation.value === 'Tümü' || surah.revelation === selectedRevelation.value)
    .map((surah) => {
      if (!term) return { surah, score: surah.id }

      const id = String(surah.id)
      const name = normalizeText(surah.name)
      const meaning = normalizeText(surah.meaning)
      const arabicName = normalizeText(surah.arabicName)
      const revelation = normalizeText(surah.revelation)

      let score = Number.POSITIVE_INFINITY
      if (term === id || term === name) score = 0
      else if (name.startsWith(term)) score = 1
      else if (name.includes(term)) score = 2
      else if (meaning.startsWith(term)) score = 3
      else if (meaning.includes(term)) score = 4
      else if (arabicName.includes(term)) score = 5
      else if (revelation.includes(term)) score = 6

      return { surah, score }
    })
    .filter(({ score }) => Number.isFinite(score))
    .sort((first, second) => first.score - second.score || first.surah.id - second.surah.id)
    .map(({ surah }) => surah)
})

const selectedSurah = computed(() => {
  return filteredSurahs.value.find((surah) => surah.id === selectedSurahId.value)
    ?? filteredSurahs.value[0]
})

const resultSummary = computed(() => search.value.trim() || selectedRevelation.value !== 'Tümü'
  ? `${filteredSurahs.value.length} sonuç`
  : `${filteredSurahs.value.length} sûre`)

const clearSearch = async () => {
  search.value = ''
  await nextTick()
  searchInput.value?.focus()
}

const resetFilters = async () => {
  search.value = ''
  selectedRevelation.value = 'Tümü'
  await nextTick()
  searchInput.value?.focus()
}

const selectSurah = (surahId: number, scrollToReader = false) => {
  selectedSurahId.value = surahId

  if (scrollToReader) {
    nextTick(() => articleElement.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
}

const handleSurahSelect = (event: Event) => {
  const surahId = Number((event.target as HTMLSelectElement).value)
  search.value = ''
  selectedRevelation.value = 'Tümü'
  selectSurah(surahId, true)
}

const goToAdjacentSurah = (offset: -1 | 1) => {
  const currentIndex = props.items.findIndex((surah) => surah.id === selectedSurahId.value)
  const target = props.items[currentIndex + offset]

  if (!target) return

  search.value = ''
  selectedRevelation.value = 'Tümü'
  selectSurah(target.id, true)
}

watch(filteredSurahs, (surahs) => {
  if (surahs.length && !surahs.some((surah) => surah.id === selectedSurahId.value)) {
    selectedSurahId.value = surahs[0]?.id ?? selectedSurahId.value
  }
})
</script>
