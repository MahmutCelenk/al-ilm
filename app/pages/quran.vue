<template>
  <main class="quran-reader">
    <header class="reader-header">
      <NuxtLink to="/" class="back-link" aria-label="Siteye dön">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Siteye dön
      </NuxtLink>

      <div class="reader-title">
        <div>
          <p>Kur'an Oku</p>
          <span>{{ spreadSurahNames }}</span>
        </div>
      </div>
      <div class="reader-header-end" />
    </header>

    <section class="reader-stage">
      <form class="page-jump stage-page-jump" @submit.prevent="goToInputPage">
        <label for="quran-page">Sayfa</label>
        <input id="quran-page" v-model="pageInput" inputmode="numeric" aria-label="Gitmek istediğin sayfa">
        <span>/ {{ totalPages }}</span>
      </form>

      <article
        class="book-shell"
        :class="[
          { 'is-turning': isTurning },
          turnDirection === 'next' ? 'turning-next' : 'turning-previous'
        ]"
      >
        <section class="book-page book-page-arabic">
          <div class="page-frame" aria-hidden="true" />
          <div class="page-inner">
            <header class="page-heading">
              <p class="page-kicker">Mushaf sayfası</p>
              <h1 dir="rtl" lang="ar">{{ pageTitleArabic }}</h1>
              <span>{{ arabicPageMeta }}</span>
            </header>

            <div class="arabic-flow" dir="rtl" lang="ar" :style="arabicFitStyle">
              <template v-for="verse in pageVerses" :key="`${verse.surahId}-${verse.number}`">
                <span>{{ verse.arabic }}</span>
                <sup>{{ verse.number }}</sup>
              </template>
            </div>
          </div>
        </section>

        <section class="book-page book-page-translation">
          <div class="page-frame" aria-hidden="true" />
          <div class="page-inner">
            <header class="page-heading">
              <p class="page-kicker">Anlam rehberi</p>
              <h2>{{ pageTitleTurkish }}</h2>
              <span>{{ translationPageMeta }}</span>
            </header>

            <div class="translation-flow">
              <article
                v-for="verse in pageVerses"
                :key="`meal-${verse.surahId}-${verse.number}`"
                class="translation-verse"
              >
                <b>{{ verse.number }}</b>
                <p>{{ verse.translation }}</p>
              </article>
            </div>
          </div>
        </section>

        <div class="page-turn-sheet" aria-hidden="true" />

        <button
          class="page-arrow page-arrow-left"
          type="button"
          :disabled="currentPage === 1"
          aria-label="Önceki sayfa"
          @click="previousPage"
        >
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <button
          class="page-arrow page-arrow-right"
          type="button"
          :disabled="currentPage >= totalPages"
          aria-label="Sonraki sayfa"
          @click="nextPage"
        >
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { surahs } from '~/data/surahs'

definePageMeta({
  layout: false,
  path: '/kuran'
})

type QuranVerse = {
  page?: number
  surahId: number
  surahName: string
  arabicName: string
  revelation: string
  verseCount: number
  number: number
  arabic: string
  reading: string
  translation: string
}

const route = useRoute()
const router = useRouter()
const totalPages = 604
const isTurning = ref(false)
const turnDirection = ref<'next' | 'previous'>('next')
const pageInput = ref('')

const allVerses = computed<QuranVerse[]>(() =>
  surahs.flatMap((surah) =>
    surah.verses.map((verse) => ({
      page: undefined,
      surahId: surah.id,
      surahName: surah.name,
      arabicName: surah.arabicName,
      revelation: surah.revelation,
      verseCount: surah.verseCount,
      number: verse.number,
      arabic: verse.arabic,
      reading: verse.reading,
      translation: verse.translation
    }))
  )
)

const normalizePage = (value: unknown) => {
  const page = Number(value)

  if (!Number.isFinite(page)) {
    return 1
  }

  return Math.min(Math.max(Math.trunc(page), 1), totalPages)
}

const currentPage = ref(normalizePage(route.query.sayfa))
pageInput.value = String(currentPage.value)

const pageVerses = computed(() => versesForPage(currentPage.value))

const spreadSurahNames = computed(() => {
  const names = [...new Set(pageVerses.value.map((verse) => verse.surahName))]
  return names.length > 2 ? `${names[0]} - ${names[names.length - 1]}` : names.join(' - ')
})

const pageTitleArabic = computed(() => {
  const names = [...new Set(pageVerses.value.map((verse) => verse.arabicName))]
  return names.length > 1 ? `${names[0]} / ${names[names.length - 1]}` : names[0] || ''
})

const pageTitleTurkish = computed(() => {
  const names = [...new Set(pageVerses.value.map((verse) => verse.surahName))]
  return names.length > 1 ? `${names[0]} - ${names[names.length - 1]}` : names[0] || ''
})

const arabicFitStyle = computed(() => {
  const verseCount = pageVerses.value.length
  const characterCount = pageVerses.value.reduce((total, verse) => total + verse.arabic.length, 0)
  const density = verseCount * 1.38 + characterCount / 175
  const size = Math.max(30, Math.min(52, 53 - density))
  const lineHeight = size < 34 ? 1.5 : size < 39 ? 1.58 : size < 44 ? 1.7 : 1.86

  return {
    '--arabic-size': `${size.toFixed(2)}px`,
    '--arabic-line': String(lineHeight)
  }
})

const arabicPageMeta = computed(() => {
  const firstVerse = pageVerses.value[0]

  if (!firstVerse) {
    return `Arapça metin • Sayfa ${currentPage.value}`
  }

  return `${firstVerse.revelation} • ${firstVerse.verseCount} ayet • Arapça metin • Sayfa ${currentPage.value}`
})

const translationPageMeta = computed(() => {
  const firstVerse = pageVerses.value[0]

  if (!firstVerse) {
    return `Türkçe meal • Sayfa ${currentPage.value}`
  }

  return `${firstVerse.revelation} • Türkçe meal • Sayfa ${currentPage.value}`
})

const versesForPage = (page: number) => {
  const normalizedPage = normalizePage(page)
  const totalVerses = allVerses.value.length
  const start = Math.floor(((normalizedPage - 1) * totalVerses) / totalPages)
  const end = Math.floor((normalizedPage * totalVerses) / totalPages)

  return allVerses.value.slice(start, Math.max(end, start + 1)).map((verse) => ({
    ...verse,
    page: normalizedPage
  }))
}

let turnTimer: ReturnType<typeof setTimeout> | undefined
let pageCommitTimer: ReturnType<typeof setTimeout> | undefined

const playTurn = (direction: 'next' | 'previous') => {
  isTurning.value = false
  turnDirection.value = direction
  window.clearTimeout(turnTimer)

  requestAnimationFrame(() => {
    isTurning.value = true
    turnTimer = window.setTimeout(() => {
      isTurning.value = false
    }, 760)
  })
}

const setPage = (page: number) => {
  const normalizedPage = normalizePage(page)

  if (normalizedPage === currentPage.value) {
    pageInput.value = String(currentPage.value)
    return
  }

  const direction = normalizedPage > currentPage.value ? 'next' : 'previous'

  playTurn(direction)
  pageInput.value = String(normalizedPage)
  window.clearTimeout(pageCommitTimer)
  pageCommitTimer = window.setTimeout(() => {
    currentPage.value = normalizedPage
  }, 330)
}

const previousPage = () => {
  setPage(currentPage.value - 1)
}

const nextPage = () => {
  setPage(currentPage.value + 1)
}

const goToInputPage = () => {
  setPage(normalizePage(pageInput.value))
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    previousPage()
  }

  if (event.key === 'ArrowRight') {
    nextPage()
  }
}

watch(
  () => route.query.sayfa,
  (page) => {
    const normalizedPage = normalizePage(page)

    if (normalizedPage !== currentPage.value) {
      currentPage.value = normalizedPage
      pageInput.value = String(normalizedPage)
    }
  }
)

watch(currentPage, async (page) => {
  if (normalizePage(route.query.sayfa) === page) {
    return
  }

  await router.replace({ query: { ...route.query, sayfa: page } })
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.clearTimeout(turnTimer)
  window.clearTimeout(pageCommitTimer)
  window.removeEventListener('keydown', handleKeydown)
})

useSeoMeta({
  title: "Kur'an Oku",
  description: "Kur'an-ı Kerim'i Arapça metin ve Türkçe meal olarak iki sayfalı mushaf düzeninde oku."
})
</script>

<style scoped>
.quran-reader {
  --font-ui: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-arabic-quran: "KFGQPC Uthmanic Script HAFS", "KFGQPC Uthmanic Script", "Uthmanic Hafs", "Amiri Quran", Amiri, "Scheherazade New", serif;
  --font-meal: "Source Serif 4", Georgia, "Times New Roman", serif;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 12%, rgba(149, 211, 186, 0.26), transparent 30%),
    radial-gradient(circle at 82% 8%, rgba(233, 195, 73, 0.18), transparent 28%),
    linear-gradient(180deg, #fcf9f8 0%, #f6f3f2 100%);
  color: #1c1b1b;
  font-family: var(--font-ui);
}

.reader-header {
  display: grid;
  height: 60px;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(191, 201, 195, 0.7);
  background: rgba(252, 249, 248, 0.86);
  padding: 0 clamp(1rem, 4vw, 2.5rem);
  backdrop-filter: blur(18px);
}

.back-link {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  color: #0b513d;
  font-size: 0.84rem;
  font-weight: 800;
  transition: background 160ms ease, color 160ms ease;
}

.back-link:hover {
  color: #003527;
}

.reader-title {
  display: block;
  min-width: 0;
  text-align: center;
}

.reader-title > div {
  min-width: 0;
}

.reader-title p {
  margin: 0;
  line-height: 1;
  color: #003527;
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 900;
}

.reader-title span {
  display: block;
  max-width: 22rem;
  overflow: hidden;
  color: rgba(64, 73, 68, 0.72);
  font-size: 0.72rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.reader-header-end {
  min-width: 1px;
}

.page-jump {
  justify-self: end;
  display: inline-flex;
  height: 40px;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(112, 121, 116, 0.18);
  border-radius: 999px;
  background: #ffffff;
  padding: 0 0.75rem;
  box-shadow: 0 10px 24px rgba(47, 46, 38, 0.08);
}

.stage-page-jump {
  position: absolute;
  right: auto;
  bottom: clamp(0.55rem, 1vw, 0.9rem);
  left: 50%;
  z-index: 70;
  height: 40px;
  justify-self: auto;
  border-color: rgba(115, 92, 0, 0.18);
  background:
    linear-gradient(180deg, rgba(255, 253, 246, 0.98), rgba(248, 244, 232, 0.94));
  box-shadow: 0 16px 34px rgba(47, 46, 38, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transform: translateX(-50%);
}

.page-jump label,
.page-jump span {
  color: rgba(64, 73, 68, 0.72);
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: var(--font-ui);
}

.page-jump input {
  width: 4rem;
  height: 28px;
  border: 1px solid rgba(0, 53, 39, 0.16);
  border-radius: 999px;
  background: #f8f4e8;
  color: #003527;
  text-align: center;
  font-weight: 900;
  outline: none;
}

.page-jump input:focus {
  border-color: #2b6954;
  box-shadow: 0 0 0 3px rgba(149, 211, 186, 0.32);
}

.reader-stage {
  position: relative;
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  padding: clamp(0.25rem, 0.7vw, 0.65rem) clamp(0.25rem, 0.8vw, 0.75rem);
}

.book-shell {
  position: relative;
  display: grid;
  width: min(100%, 1900px);
  height: min(100%, 920px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid rgba(112, 121, 116, 0.22);
  border-radius: 18px;
  background: #f8f4e8;
  box-shadow:
    0 36px 70px rgba(47, 46, 38, 0.14),
    0 10px 28px rgba(47, 46, 38, 0.08);
  perspective: 1800px;
}

.book-shell::before {
  content: '';
  position: absolute;
  inset: 0 calc(50% - 13px) 0 calc(50% - 13px);
  z-index: 5;
  background:
    linear-gradient(90deg, rgba(115, 92, 0, 0.14), rgba(255, 255, 255, 0.65), rgba(0, 53, 39, 0.09));
  box-shadow: 0 0 22px rgba(47, 46, 38, 0.16);
  pointer-events: none;
}

.book-page {
  position: relative;
  min-width: 0;
  overflow: hidden;
  background-color: #fffdf6;
  background-image:
    radial-gradient(circle at 18% 20%, rgba(233, 195, 73, 0.12), transparent 24%),
    radial-gradient(circle at 84% 70%, rgba(149, 211, 186, 0.16), transparent 25%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent 18%, transparent 82%, rgba(115, 92, 0, 0.08));
  padding: clamp(2.3rem, 3vw, 3.8rem) clamp(2.4rem, 3.2vw, 4.15rem) clamp(4.8rem, 5vw, 5.4rem);
}

.book-page-arabic {
  border-right: 1px solid rgba(112, 121, 116, 0.18);
}

.page-frame {
  position: absolute;
  inset: clamp(0.8rem, 1.4vw, 1.3rem);
  border: 3px double rgba(115, 92, 0, 0.5);
  outline: 1px solid rgba(115, 92, 0, 0.2);
  outline-offset: -9px;
  pointer-events: none;
}

.page-inner {
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  gap: clamp(0.85rem, 1.45vh, 1.2rem);
}

.page-heading {
  flex: none;
  text-align: center;
}

.page-heading h1,
.page-heading h2 {
  margin: 0.2rem 0 0.45rem;
  color: #003527;
  font-family: var(--font-arabic-quran);
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  font-weight: 700;
  line-height: 1.12;
}

.page-heading h2 {
  font-family: var(--font-ui);
  font-size: clamp(1.45rem, 2vw, 2rem);
  line-height: 1.22;
}

.page-kicker,
.page-heading span {
  margin: 0;
  color: rgba(115, 92, 0, 0.74);
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.arabic-flow {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 0.1rem 0.4rem 1.35rem 0;
  color: #111816;
  font-family: var(--font-arabic-quran);
  font-size: var(--arabic-size);
  font-weight: 400;
  line-height: var(--arabic-line);
  text-align: right;
  text-rendering: optimizeLegibility;
}

.arabic-flow span {
  display: inline;
  letter-spacing: 0;
  word-spacing: 0.02em;
}

.arabic-flow sup {
  display: inline-flex;
  width: max(1.25rem, calc(var(--arabic-size) * 0.48));
  height: max(1.25rem, calc(var(--arabic-size) * 0.48));
  align-items: center;
  justify-content: center;
  margin-inline: 0.3rem;
  border: 1px solid rgba(115, 92, 0, 0.62);
  border-radius: 999px;
  color: #735c00;
  font-size: max(0.58rem, calc(var(--arabic-size) * 0.2));
  line-height: 1;
  vertical-align: middle;
}

.book-page-number {
  position: absolute;
  bottom: clamp(4.15rem, 5.1vw, 4.85rem);
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.42rem 0.7rem;
  border: 1px solid rgba(115, 92, 0, 0.14);
  border-radius: 999px;
  background: rgba(255, 253, 246, 0.88);
  color: rgba(115, 92, 0, 0.72);
  font-family: var(--font-ui);
  font-size: 0.64rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  line-height: 1;
  box-shadow: 0 10px 22px rgba(47, 46, 38, 0.08);
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.book-page-number-left {
  left: clamp(2.35rem, 3.8vw, 4.7rem);
}

.book-page-number-right {
  right: clamp(2.35rem, 3.8vw, 4.7rem);
}

.translation-flow {
  flex: 1;
  display: grid;
  align-content: start;
  gap: clamp(0.58rem, 1vh, 0.85rem);
  min-height: 0;
  overflow-y: auto;
  padding: 0.15rem 0.45rem 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(43, 105, 84, 0.22) transparent;
}

.translation-verse {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
}

.translation-verse b {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #b0f0d6;
  color: #003527;
  font-size: 0.78rem;
  font-weight: 900;
}

.translation-verse p {
  margin: 0;
  color: rgba(28, 27, 27, 0.82);
  font-family: var(--font-meal);
  font-size: clamp(0.9rem, 0.95vw, 1.04rem);
  font-weight: 650;
  line-height: 1.5;
}

.page-arrow {
  position: absolute;
  bottom: 1rem;
  z-index: 55;
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(112, 121, 116, 0.18);
  border-radius: 999px;
  background: #ffffff;
  color: #003527;
  box-shadow: 0 14px 32px rgba(47, 46, 38, 0.14);
  transition: transform 160ms ease, background 160ms ease, color 160ms ease;
}

.page-arrow:hover {
  transform: translateY(-1px) scale(1.04);
  background: #003527;
  color: #ffffff;
}

.page-arrow:disabled {
  cursor: not-allowed;
  opacity: 0.35;
}

.page-arrow-left {
  left: clamp(1rem, 1.6vw, 1.7rem);
}

.page-arrow-right {
  right: clamp(1rem, 1.6vw, 1.7rem);
}

.page-turn-sheet {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 35;
  display: none;
  width: 50%;
  background:
    radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.72), transparent 38%),
    linear-gradient(90deg, rgba(47, 46, 38, 0.18), rgba(255, 255, 255, 0.82) 22%, rgba(255, 255, 255, 0.98) 54%, rgba(115, 92, 0, 0.14)),
    #fffdf6;
  border: 1px solid rgba(115, 92, 0, 0.16);
  box-shadow: 0 18px 44px rgba(47, 46, 38, 0.16);
  pointer-events: none;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.page-turn-sheet::before {
  content: '';
  position: absolute;
  inset: clamp(0.8rem, 1.4vw, 1.3rem);
  border: 3px double rgba(115, 92, 0, 0.34);
  outline: 1px solid rgba(115, 92, 0, 0.14);
  outline-offset: -9px;
}

.page-turn-sheet::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(47, 46, 38, 0.22), transparent 20%, transparent 78%, rgba(255, 255, 255, 0.7)),
    repeating-linear-gradient(0deg, transparent 0 24px, rgba(115, 92, 0, 0.035) 25px 26px);
  opacity: 0;
}

.is-turning .page-turn-sheet {
  display: block;
}

.is-turning .page-turn-sheet::after {
  animation: sheet-shade 760ms ease both;
}

.turning-next .page-turn-sheet {
  left: 50%;
  transform-origin: left center;
}

.turning-previous .page-turn-sheet {
  right: 50%;
  transform-origin: right center;
}

.is-turning.turning-next .page-turn-sheet {
  animation: flip-next 760ms cubic-bezier(0.2, 0.76, 0.16, 1) both;
}

.is-turning.turning-previous .page-turn-sheet {
  animation: flip-previous 760ms cubic-bezier(0.2, 0.76, 0.16, 1) both;
}

.is-turning .book-page {
  animation: page-ink-settle 420ms ease both;
}

@keyframes flip-next {
  0% {
    opacity: 0;
    transform: rotateY(0deg) translateZ(0);
  }
  10% {
    opacity: 1;
  }
  44% {
    opacity: 1;
    transform: rotateY(-78deg) translateZ(20px);
    box-shadow: -32px 22px 44px rgba(47, 46, 38, 0.22);
  }
  78% {
    opacity: 0.88;
    transform: rotateY(-154deg) translateZ(8px);
  }
  100% {
    opacity: 0;
    transform: rotateY(-178deg) translateZ(0);
  }
}

@keyframes flip-previous {
  0% {
    opacity: 0;
    transform: rotateY(0deg) translateZ(0);
  }
  10% {
    opacity: 1;
  }
  44% {
    opacity: 1;
    transform: rotateY(78deg) translateZ(20px);
    box-shadow: 32px 22px 44px rgba(47, 46, 38, 0.22);
  }
  78% {
    opacity: 0.88;
    transform: rotateY(154deg) translateZ(8px);
  }
  100% {
    opacity: 0;
    transform: rotateY(178deg) translateZ(0);
  }
}

@keyframes page-ink-settle {
  0% {
    filter: saturate(0.96);
  }
  100% {
    filter: saturate(1);
    opacity: 1;
  }
}

@keyframes sheet-shade {
  0%,
  100% {
    opacity: 0;
  }
  42% {
    opacity: 0.75;
  }
}

@media (max-width: 1023px) {
  .quran-reader {
    overflow: auto;
  }

  .reader-header {
    height: auto;
    min-height: 60px;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-block: 0.8rem;
  }

  .back-link,
  .page-jump {
    justify-self: center;
  }

  .reader-stage {
    height: auto;
    min-height: calc(100vh - 60px);
    padding: 1rem;
  }

  .book-shell {
    height: auto;
    min-height: 78vh;
    grid-template-columns: 1fr;
  }

  .stage-page-jump {
    bottom: 0.7rem;
    left: 50%;
  }

  .book-shell::before {
    display: none;
  }

  .book-page {
    min-height: 64vh;
    padding-bottom: 5rem;
  }

  .book-page-arabic {
    border-right: 0;
    border-bottom: 1px solid rgba(112, 121, 116, 0.18);
  }

  .arabic-flow,
  .translation-flow {
    overflow: visible;
  }

  .page-arrow {
    top: auto;
    bottom: 1.35rem;
    transform: none;
  }

  .page-arrow:hover {
    transform: translateY(-1px);
  }

  .book-page-number {
    bottom: 4.4rem;
  }
}
</style>
