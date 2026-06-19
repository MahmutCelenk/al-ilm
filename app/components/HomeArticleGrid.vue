<template>
  <section id="articles" class="bg-surface-container-low py-section-gap">
    <div class="container-shell">
      <div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div class="space-y-3">
          <div class="section-kicker text-sm font-semibold">Makaleler</div>
          <h2 class="font-display text-3xl font-bold text-tertiary md:text-4xl">Kütüphaneden seçilenler</h2>
        </div>
        <p class="text-sm font-semibold text-on-surface-variant">
          {{ articles.length }} içerik gösteriliyor
        </p>
      </div>

      <div v-if="featuredArticle" class="grid gap-6 lg:grid-cols-12">
        <NuxtLink
          :to="featuredArticle.path"
          class="group overflow-hidden rounded-[24px] bg-surface-container-lowest shadow-manuscript transition hover:-translate-y-1 hover:shadow-manuscript-raised lg:col-span-7"
        >
          <div class="relative aspect-[16/10] overflow-hidden bg-surface-container">
            <img :src="featuredArticle.image" :alt="featuredArticle.imageAlt" class="h-full w-full object-cover transition duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div class="absolute bottom-6 left-6 right-6">
              <span class="rounded-full bg-surface-container-lowest/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">{{ featuredArticle.category }}</span>
              <h3 class="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-4xl">{{ featuredArticle.title }}</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-base leading-7 text-on-surface-variant">{{ featuredArticle.description }}</p>
            <div class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Öne çıkan rehberi oku
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </NuxtLink>

        <div class="grid gap-4 lg:col-span-5">
          <NuxtLink
            v-for="article in secondaryArticles"
            :key="article.path"
            :to="article.path"
            class="group grid grid-cols-[116px_1fr] gap-4 rounded-[20px] bg-surface-container-lowest p-4 shadow-manuscript transition hover:-translate-y-0.5 hover:shadow-manuscript-raised"
          >
            <div class="overflow-hidden rounded-xl bg-surface-container">
              <img :src="article.image" :alt="article.imageAlt" class="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105">
            </div>
            <div class="min-w-0 py-1">
              <div class="mb-2 flex items-center gap-2">
                <span class="rounded-full bg-primary-fixed/80 px-3 py-1 text-[11px] font-semibold text-primary">{{ article.category }}</span>
                <span class="text-[11px] font-semibold text-on-surface-variant">{{ article.readTime }}</span>
              </div>
              <h3 class="line-clamp-2 font-display text-xl font-semibold leading-snug text-primary">{{ article.title }}</h3>
              <p class="mt-2 line-clamp-2 text-sm leading-6 text-on-surface-variant">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-else class="rounded-[24px] bg-surface-container-lowest p-10 text-center shadow-manuscript">
        <h3 class="font-display text-2xl font-semibold text-primary">Aramana uygun içerik bulunamadı</h3>
        <p class="mt-3 text-on-surface-variant">Farklı bir kelime dene veya konular bölümünden ilerle.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type HomeArticle = {
  path: string
  title: string
  description: string
  category: string
  image: string
  imageAlt: string
  readTime: string
}

const props = defineProps<{
  articles: HomeArticle[]
}>()

const featuredArticle = computed(() => props.articles[0])
const secondaryArticles = computed(() => props.articles.slice(1))
</script>
