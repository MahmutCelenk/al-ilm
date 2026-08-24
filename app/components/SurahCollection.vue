<template>
  <section ref="collectionTop" class="min-h-screen bg-background">
    <header class="border-b border-outline-variant/35 bg-[radial-gradient(circle_at_88%_12%,rgba(166,242,209,0.28),transparent_30%),radial-gradient(circle_at_10%_78%,rgba(254,214,91,0.14),transparent_28%),linear-gradient(180deg,#eef8f3_0%,#fbfdfb_100%)]">
      <div class="container-shell flex min-h-[220px] items-center py-10 md:min-h-[250px]">
        <div class="max-w-4xl">
          <p class="section-kicker text-sm font-semibold">Sureler</p>
          <h1 class="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            Aradığın sûreye kolayca ulaş, sakin bir düzende oku.
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
            114 sûreyi adına, anlamına veya numarasına göre bul; Arapça metni, okunuşu ve Türkçe anlamıyla incele.
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-xs font-bold">
            <span class="rounded-full border border-primary/10 bg-surface-container-lowest/75 px-3 py-2 text-primary">114 sûre</span>
            <span class="rounded-full border border-primary/10 bg-surface-container-lowest/75 px-3 py-2 text-primary">Arapça metin</span>
            <span class="rounded-full border border-primary/10 bg-surface-container-lowest/75 px-3 py-2 text-primary">Okunuş ve anlam</span>
          </div>
        </div>
      </div>
    </header>

    <div ref="contentTop" class="container-shell relative isolate scroll-mt-20 py-8 md:py-12">
      <template v-if="!readerOpen">
        <div class="isolate rounded-[24px] border border-outline-variant/50 bg-surface-container-lowest p-3 shadow-[0_12px_36px_rgba(6,95,70,0.14)] md:p-4" style="position: sticky; top: 3.5rem; z-index: 1000;">
          <div class="grid gap-3 lg:grid-cols-[minmax(280px,1fr)_auto] lg:items-center">
            <form role="search" @submit.prevent>
              <label class="group/search flex min-h-12 items-center gap-3 rounded-2xl border border-outline-variant/45 bg-background px-4 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary-fixed/75" for="surah-search">
                <svg class="h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                </svg>
                <span class="sr-only">Sure ara</span>
                <input
                  id="surah-search"
                  ref="searchInput"
                  v-model="search"
                  class="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/65 focus:border-0 focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:hidden"
                  type="search"
                  placeholder="Fatiha, Yasin, Felak veya 113 yaz..."
                  autocomplete="off"
                  aria-controls="surah-catalog"
                  @keydown.esc="clearSearch"
                >
                <kbd class="hidden rounded-md border border-outline-variant/45 bg-surface-container-low px-2 py-1 text-[10px] font-bold text-on-surface-variant sm:block">/</kbd>
                <button
                  v-if="search"
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  type="button"
                  aria-label="Aramayı temizle"
                  @click.prevent="clearSearch"
                >
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
                  </svg>
                </button>
              </label>
            </form>

            <div class="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Sûreleri filtrele">
              <button
                v-for="filter in catalogFilters"
                :key="filter"
                type="button"
                class="min-h-10 shrink-0 rounded-full border px-4 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                :class="selectedFilter === filter ? 'border-primary bg-primary text-on-primary shadow-sm' : 'border-outline-variant/50 bg-background text-on-surface-variant hover:border-primary hover:text-primary'"
                :aria-pressed="selectedFilter === filter"
                @click="selectedFilter = filter"
              >
                {{ filter }}
              </button>
            </div>
          </div>
        </div>

        <section class="relative z-0 mt-7 overflow-hidden rounded-[22px] border border-outline-variant/40 bg-surface-container-lowest shadow-manuscript" aria-labelledby="quick-surahs-title">
          <button
            type="button"
            class="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-primary-fixed/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary md:px-5"
            :aria-expanded="quickSurahsOpen"
            aria-controls="quick-surahs-panel"
            @click="quickSurahsOpen = !quickSurahsOpen"
          >
            <span class="flex min-w-0 items-center gap-3">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 14.4 8l4.8 1-3.3 3.6.5 4.8-4.4-2-4.4 2 .5-4.8L4.8 9l4.8-1L12 3.8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>
              </span>
              <span class="min-w-0">
                <strong id="quick-surahs-title" class="block truncate font-display text-lg text-primary">Sık okunan sûreler</strong>
                <small class="block text-xs text-on-surface-variant">{{ quickSurahs.length }} sûreye hızlı erişim</small>
              </span>
            </span>
            <svg class="h-5 w-5 shrink-0 text-primary transition-transform duration-200" :class="quickSurahsOpen ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 10 5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-0"
          >
            <div v-if="quickSurahsOpen" id="quick-surahs-panel" class="border-t border-outline-variant/35 p-3 md:p-4">
              <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                <button
                  v-for="surah in quickSurahs"
                  :key="surah.id"
                  type="button"
                  class="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-outline-variant/40 bg-background px-4 py-3 text-left transition hover:border-primary-fixed-dim hover:bg-surface-container-lowest hover:shadow-manuscript focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  @click="openSurah(surah.id)"
                >
                  <span>
                    <strong class="block font-display text-base text-primary">{{ surah.name }}</strong>
                    <small class="mt-0.5 block text-[11px] text-on-surface-variant">{{ surah.verseCount }} âyet</small>
                  </span>
                  <span class="font-['Uthmanic_Hafs','Amiri_Quran',serif] text-2xl text-secondary" dir="rtl" lang="ar">{{ surah.arabicName }}</span>
                </button>
              </div>
              <div class="mt-3 flex justify-end border-t border-outline-variant/35 pt-3">
                <button type="button" class="flex items-center gap-1 text-xs font-bold text-primary transition hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" @click="showAllSurahs">
                  Tüm sûreleri gör
                  <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </button>
              </div>
            </div>
          </Transition>
        </section>

        <section ref="catalogSection" class="relative z-0 mt-8 scroll-mt-36" aria-labelledby="surah-catalog-title">
          <div class="mb-4 flex items-end justify-between gap-4">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-secondary">Sûre kataloğu</p>
              <h2 id="surah-catalog-title" class="mt-1 font-display text-2xl font-bold text-primary">{{ resultTitle }}</h2>
            </div>
            <button
              v-if="hasActiveFilters"
              type="button"
              class="shrink-0 text-xs font-bold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
              @click="resetFilters"
            >
              Filtreleri temizle
            </button>
          </div>

          <div v-if="filteredSurahs.length" id="surah-catalog" class="relative z-0 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4" role="list">
            <button
              v-for="surah in filteredSurahs"
              :key="surah.id"
              type="button"
              class="group relative z-0 overflow-hidden rounded-[22px] border border-outline-variant/40 bg-surface-container-lowest p-4 text-left shadow-manuscript transition duration-200 hover:border-primary-fixed-dim hover:shadow-manuscript-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="listitem"
              @click="openSurah(surah.id)"
            >
              <span class="absolute right-3 top-2 font-['Uthmanic_Hafs','Amiri_Quran',serif] text-3xl text-secondary/80" dir="rtl" lang="ar">{{ surah.arabicName }}</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-fixed text-xs font-extrabold text-primary">{{ surah.id }}</span>
              <span class="mt-5 block pr-20 font-display text-xl font-bold text-primary">{{ surah.name }}</span>
              <span class="mt-1 block truncate text-sm text-on-surface-variant">{{ surah.meaning }}</span>
              <span class="mt-4 flex items-center gap-2 border-t border-outline-variant/35 pt-3 text-[11px] font-bold text-on-surface-variant">
                <span>{{ surah.revelation }}</span>
                <span aria-hidden="true">•</span>
                <span>{{ surah.verseCount }} âyet</span>
                <svg class="ml-auto h-4 w-4 text-primary transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </div>

          <div v-else class="flex min-h-[250px] flex-col items-center justify-center rounded-[24px] border border-dashed border-outline-variant bg-surface-container-lowest px-6 py-10 text-center md:px-10 md:py-12">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </div>
            <h2 class="mt-4 font-display text-2xl font-bold text-primary">Eşleşen sûre bulunamadı</h2>
            <p class="mt-2 text-sm text-on-surface-variant">Sûre adını veya numarasını kontrol et ya da filtreleri temizle.</p>
            <button class="mt-6 min-h-11 shrink-0 rounded-full bg-primary px-5 text-sm font-bold text-on-primary transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" type="button" @click="resetFilters">Filtreleri temizle</button>
          </div>
        </section>
      </template>

      <template v-else-if="selectedSurah">
        <nav class="sticky top-14 z-[45] isolate mb-4 grid grid-cols-2 gap-2 rounded-[22px] border border-outline-variant/50 bg-surface-container-lowest p-2 shadow-[0_12px_36px_rgba(6,95,70,0.14)] sm:grid-cols-3 md:p-3 xl:grid-cols-[auto_auto_minmax(240px,1fr)_auto_auto]" aria-label="Sûre okuyucu kontrolleri">
          <div class="order-1 col-span-2 flex h-11 min-w-0 items-center gap-3 rounded-xl border border-outline-variant/40 bg-background px-3 sm:col-span-3 xl:order-3 xl:col-span-1">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-[10px] font-extrabold text-primary">{{ selectedSurah.id }}</span>
            <span class="min-w-0 flex-1 truncate text-sm font-bold text-primary">{{ selectedSurah.name }} Sûresi</span>
            <span class="hidden truncate text-xs text-on-surface-variant 2xl:block">{{ selectedSurah.meaning }} · {{ selectedSurah.verseCount }} âyet</span>
          </div>

          <button
            type="button"
            class="order-2 col-span-2 flex h-11 items-center justify-center gap-2 rounded-xl border border-outline-variant/40 px-3 text-xs font-bold text-primary transition hover:border-primary hover:bg-primary-fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:col-span-1 xl:order-1"
            @click="closeReader"
          >
            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
              <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
              <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
              <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
            </svg>
            <span>Tüm sûreler</span>
          </button>

          <button
            type="button"
            class="order-3 flex h-11 items-center justify-center gap-2 rounded-xl border border-outline-variant/40 px-3 text-xs font-bold text-primary transition hover:border-primary hover:bg-primary-fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35 xl:order-2"
            :disabled="!previousSurah"
            :aria-label="previousSurah ? `Önceki sûre: ${previousSurah.name}` : 'Önceki sûre yok'"
            @click="goToAdjacentSurah(-1)"
          >
            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span>Önceki sûre</span>
          </button>

          <button
            type="button"
            class="order-4 flex h-11 items-center justify-center gap-2 rounded-xl border border-outline-variant/40 px-3 text-xs font-bold text-primary transition hover:border-primary hover:bg-primary-fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35 xl:order-4"
            :disabled="!nextSurah"
            :aria-label="nextSurah ? `Sonraki sûre: ${nextSurah.name}` : 'Sonraki sûre yok'"
            @click="goToAdjacentSurah(1)"
          >
            <span>Sonraki sûre</span>
            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>

          <div class="order-5 hidden h-11 shrink-0 items-center gap-1 rounded-xl border border-outline-variant/40 bg-background p-1 xl:flex" aria-label="Yazı boyutu">
            <button class="h-8 min-w-8 rounded-lg text-xs font-extrabold text-primary hover:bg-primary-fixed disabled:opacity-30" type="button" :disabled="readerFontScale <= 0.9" aria-label="Yazıyı küçült" @click="changeFontScale(-0.1)">A−</button>
            <button class="h-8 min-w-8 rounded-lg text-xs font-extrabold text-primary hover:bg-primary-fixed disabled:opacity-30" type="button" :disabled="readerFontScale >= 1.2" aria-label="Yazıyı büyüt" @click="changeFontScale(0.1)">A+</button>
          </div>
        </nav>

        <article class="overflow-hidden rounded-[28px] border border-outline-variant/35 bg-surface-container-lowest shadow-manuscript-raised">
          <header class="border-b border-outline-variant/40 bg-[radial-gradient(circle_at_90%_0%,rgba(254,214,91,0.18),transparent_34%),linear-gradient(135deg,#edf7f2,#fafbf7)] px-5 py-7 md:px-9 md:py-9">
            <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <button type="button" class="mb-4 text-xs font-bold text-primary underline decoration-primary/30 underline-offset-4 md:hidden" @click="showReading = !showReading">
                  {{ showReading ? 'Okunuşu gizle' : 'Okunuşu göster' }}
                </button>
                <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">{{ selectedSurah.id }}. sûre · {{ selectedSurah.revelation }}</p>
                <h2 class="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">{{ selectedSurah.name }} Sûresi</h2>
                <p class="mt-3 text-base text-on-surface-variant">{{ selectedSurah.meaning }} · {{ selectedSurah.verseCount }} âyet</p>
              </div>
              <p class="font-['Uthmanic_Hafs','Amiri_Quran',serif] text-5xl leading-none text-primary md:text-7xl" dir="rtl" lang="ar">{{ selectedSurah.arabicName }}</p>
            </div>
            <div class="mt-6 hidden items-center gap-2 border-t border-outline-variant/35 pt-5 md:flex">
              <button
                type="button"
                class="rounded-full border px-4 py-2 text-xs font-bold transition"
                :class="showReading ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant/50 bg-surface-container-lowest text-on-surface-variant'"
                :aria-pressed="showReading"
                @click="showReading = !showReading"
              >
                Okunuş {{ showReading ? 'açık' : 'kapalı' }}
              </button>
              <p class="text-xs text-on-surface-variant">Bir âyete dokunarak okuma konumunu işaretleyebilirsin.</p>
            </div>
          </header>

          <ol class="space-y-3 bg-surface-container-low p-3 md:p-5">
            <li v-for="(verse, verseIndex) in selectedSurah.verses" :key="`${selectedSurah.id}-${verseIndex}`">
              <button
                type="button"
                class="grid w-full gap-4 rounded-[22px] border px-4 py-5 text-left transition md:grid-cols-[48px_minmax(0,1fr)] md:px-6 md:py-6"
                :class="activeVerseNumber === verseIndex + 1 ? 'border-[#b48610]/40 bg-surface-container-lowest shadow-[0_8px_24px_rgba(180,134,16,0.10)]' : 'border-outline-variant/35 bg-surface-container-lowest hover:border-primary-fixed-dim'"
                :aria-pressed="activeVerseNumber === verseIndex + 1"
                @click="activeVerseNumber = verseIndex + 1"
              >
                <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-xs font-extrabold text-primary">{{ verseIndex + 1 }}</span>
                <span class="min-w-0">
                  <span
                    class="block rounded-xl px-4 py-3 font-['Uthmanic_Hafs','Amiri_Quran',serif] text-primary transition-colors duration-150"
                    :class="activeVerseNumber === verseIndex + 1 ? 'bg-[#f8efd4] shadow-[inset_0_-1px_rgba(180,134,16,0.19)]' : 'bg-transparent'"
                    :style="arabicVerseStyle"
                    dir="rtl"
                    lang="ar"
                  >{{ verse.arabic }}</span>
                  <span
                    v-if="showReading"
                    class="mt-3 block rounded-r-xl border-l-[3px] px-4 py-2 text-sm font-semibold leading-7 text-primary transition-colors duration-150"
                    :class="activeVerseNumber === verseIndex + 1 ? 'border-secondary/60 bg-[#f8efd4]/60' : 'border-primary-fixed-dim bg-transparent'"
                  >
                    <small class="mr-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-secondary">Okunuş</small>
                    {{ verse.reading }}
                  </span>
                  <span
                    class="mt-3 block rounded-xl border-t px-4 py-3 text-base leading-8 transition-colors duration-150"
                    :class="activeVerseNumber === verseIndex + 1 ? 'border-secondary/25 bg-[#f8efd4] text-on-surface shadow-[inset_3px_0_rgba(180,134,16,0.58)]' : 'border-outline-variant/35 bg-transparent text-on-surface-variant'"
                  >{{ verse.translation }}</span>
                </span>
              </button>
            </li>
          </ol>

          <footer class="border-t border-outline-variant/40 bg-surface-container-low px-5 py-5 md:px-8">
            <details class="text-xs leading-6 text-on-surface-variant">
              <summary class="cursor-pointer font-bold text-primary">Metin kaynakları</summary>
              <p class="mt-2">{{ selectedSurah.source }}</p>
            </details>
          </footer>
        </article>
      </template>
    </div>

  </section>
</template>

<script setup lang="ts">
import type { SurahItem } from '~/data/surahs'

const props = defineProps<{
  items: SurahItem[]
}>()

const route = useRoute()
const router = useRouter()
const catalogFilters = ['Tümü', 'Mekki', 'Medeni', 'Kısa sûreler'] as const
type CatalogFilter = typeof catalogFilters[number]

const collectionTop = ref<HTMLElement | null>(null)
const contentTop = ref<HTMLElement | null>(null)
const catalogSection = ref<HTMLElement | null>(null)
const searchInput = ref<HTMLInputElement | null>(null)
const quickSurahsOpen = ref(false)
const search = ref('')
const selectedFilter = ref<CatalogFilter>('Tümü')
const selectedSurahId = ref(props.items[0]?.id ?? 1)
const readerOpen = ref(false)
const showReading = ref(true)
const readerFontScale = ref(1)
const activeVerseNumber = ref(1)

const normalizeText = (value: string | number) => String(value)
  .normalize('NFKD')
  .replace(/\p{M}/gu, '')
  .toLocaleLowerCase('tr-TR')
  .replace(/ı/g, 'i')
  .replace(/[’‘`´]/g, "'")
  .replace(/[^\p{L}\p{N}']/gu, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const toSurahSlug = (value: string | number) => normalizeText(value)
  .replace(/'/g, '')
  .replace(/\s+/g, '-')

const matchesSearch = (surah: SurahItem, value: string) => {
  const term = normalizeText(value)
  if (!term) return true
  return String(surah.id) === term
    || normalizeText(surah.name).includes(term)
    || normalizeText(surah.meaning).includes(term)
    || normalizeText(surah.arabicName).includes(term)
}

const filteredSurahs = computed(() => props.items.filter((surah) => {
  const matchesFilter = selectedFilter.value === 'Tümü'
    || (selectedFilter.value === 'Kısa sûreler' ? surah.verseCount <= 20 : surah.revelation === selectedFilter.value)
  return matchesFilter && matchesSearch(surah, search.value)
}))

const selectedSurah = computed(() => props.items.find(surah => surah.id === selectedSurahId.value))
const selectedSurahIndex = computed(() => props.items.findIndex(surah => surah.id === selectedSurahId.value))
const previousSurah = computed(() => props.items[selectedSurahIndex.value - 1])
const nextSurah = computed(() => props.items[selectedSurahIndex.value + 1])
const quickSurahIds = [1, 18, 36, 55, 56, 67, 112, 113, 114]
const quickSurahs = computed(() => quickSurahIds.map(id => props.items.find(surah => surah.id === id)).filter((surah): surah is SurahItem => Boolean(surah)))
const hasActiveFilters = computed(() => Boolean(search.value.trim()) || selectedFilter.value !== 'Tümü')
const resultTitle = computed(() => hasActiveFilters.value ? `${filteredSurahs.value.length} sûre bulundu` : 'Tüm sûreler')
const arabicVerseStyle = computed(() => ({
  fontSize: `${2 * readerFontScale.value}rem`,
  lineHeight: 2.1
}))

const routeSurah = (value: unknown) => {
  if (typeof value !== 'string') return null
  const normalizedSlug = toSurahSlug(value)
  return props.items.find(surah => String(surah.id) === value
    || toSurahSlug(surah.name) === normalizedSlug
    || toSurahSlug(surah.slug) === normalizedSlug) ?? null
}

const initialRouteSurah = routeSurah(route.query.sure)
if (initialRouteSurah) {
  selectedSurahId.value = initialRouteSurah.id
  readerOpen.value = true
}

const updateRoute = (surah?: SurahItem) => {
  const query = { ...route.query }
  if (surah) query.sure = toSurahSlug(surah.name)
  else delete query.sure
  void router.replace({ query })
}

const openSurah = (surahId: number, shouldScroll = true) => {
  const surah = props.items.find(item => item.id === surahId)
  if (!surah) return
  selectedSurahId.value = surah.id
  activeVerseNumber.value = 1
  readerOpen.value = true
  updateRoute(surah)
  if (shouldScroll) nextTick(() => contentTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}

const closeReader = () => {
  readerOpen.value = false
  updateRoute()
  nextTick(() => contentTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}

const goToAdjacentSurah = (offset: -1 | 1) => {
  const currentIndex = props.items.findIndex(surah => surah.id === selectedSurahId.value)
  const target = props.items[currentIndex + offset]
  if (target) openSurah(target.id)
}

const clearSearch = async () => {
  search.value = ''
  await nextTick()
  searchInput.value?.focus()
}

const resetFilters = () => {
  search.value = ''
  selectedFilter.value = 'Tümü'
}

const showAllSurahs = async () => {
  quickSurahsOpen.value = false
  resetFilters()
  await nextTick()
  catalogSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const changeFontScale = (change: number) => {
  readerFontScale.value = Math.min(1.2, Math.max(0.9, Number((readerFontScale.value + change).toFixed(1))))
}

const handleGlobalKeydown = (event: KeyboardEvent) => {
  const target = event.target as HTMLElement | null
  const isTyping = target?.matches('input, textarea, [contenteditable="true"]')

  if (event.key === '/' && !readerOpen.value && !isTyping) {
    event.preventDefault()
    searchInput.value?.focus()
  }
}

watch(() => route.query.sure, (value) => {
  const surah = routeSurah(value)
  if (surah && (!readerOpen.value || selectedSurahId.value !== surah.id)) {
    selectedSurahId.value = surah.id
    activeVerseNumber.value = 1
    readerOpen.value = true
  } else if (!surah && readerOpen.value) {
    readerOpen.value = false
  }
})

onMounted(() => {
  if (initialRouteSurah) {
    if (route.query.sure !== toSurahSlug(initialRouteSurah.name)) updateRoute(initialRouteSurah)
    nextTick(() => contentTop.value?.scrollIntoView({ block: 'start' }))
  }
  window.addEventListener('keydown', handleGlobalKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>
