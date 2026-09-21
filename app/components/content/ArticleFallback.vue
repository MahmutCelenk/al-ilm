<template>
  <ArticleShell
    v-if="article"
    :title="article.title"
    :description="article.description"
    :category="article.category"
    :read-time="article.readTime"
    :image="article.image"
    :image-alt="article.imageAlt"
    :toc="toc"
    :faqs="article.faqs"
  >
    <aside class="not-prose mb-8 rounded-[22px] border border-primary/20 bg-primary-fixed/20 p-5 md:p-6">
      <p class="text-xs font-bold uppercase tracking-[0.14em] text-primary">Bu rehberin kapsamı</p>
      <p class="mt-3 text-[15px] leading-7 text-on-surface-variant">{{ article.scope }}</p>
    </aside>

    <section
      v-for="(section, index) in article.sections"
      :id="section.id"
      :key="section.id"
      class="not-prose scroll-mt-28 rounded-[28px] border border-outline-variant/55 bg-surface-container-lowest p-6 shadow-manuscript md:p-8"
      :class="{ 'mt-8': index > 0 }"
    >
      <div class="mb-6 flex items-start gap-4">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-sm font-bold text-primary">{{ index + 1 }}</span>
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-secondary">Bölüm</p>
          <h2 class="mt-1 font-display text-3xl font-bold leading-tight text-tertiary md:text-4xl">{{ section.title }}</h2>
        </div>
      </div>

      <div class="space-y-5 text-[17px] leading-8 text-on-surface-variant">
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>

      <figure v-if="section.image" class="mt-7 overflow-hidden rounded-[22px] border border-outline-variant/50 bg-surface-container-low">
        <img :src="section.image.src" :alt="section.image.alt" class="aspect-[3/2] w-full object-cover" loading="lazy">
        <figcaption class="px-5 py-4 text-sm leading-6 text-on-surface-variant">{{ section.image.caption }}</figcaption>
      </figure>

      <ArticleCallout v-if="section.callout" :eyebrow="section.callout.eyebrow" :title="section.callout.title">
        {{ section.callout.body }}
      </ArticleCallout>

      <ArticleSteps
        v-if="section.steps"
        :eyebrow="section.steps.eyebrow"
        :title="section.steps.title"
        :description="section.steps.description"
        :steps="section.steps.items"
      />

      <nav v-if="section.links?.length" class="mt-6 flex flex-wrap gap-3" aria-label="İlgili rehberler">
        <NuxtLink
          v-for="link in section.links"
          :key="link.href"
          :to="link.href"
          class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary/20 bg-primary-fixed/20 px-4 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
        >
          {{ link.label }} <span aria-hidden="true">→</span>
        </NuxtLink>
      </nav>
    </section>

  </ArticleShell>

  <div v-else class="surface-card p-8">
    <h1 class="font-display text-3xl font-bold text-primary">İçerik bulunamadı</h1>
    <p class="mt-3 text-on-surface-variant">Aradığınız sayfa henüz hazırlanmadı.</p>
  </div>
</template>

<script setup lang="ts">
import { articleGuides } from '~/data/articleGuides'

const props = defineProps<{ slug: string }>()
const article = computed(() => articleGuides[props.slug])
const toc = computed(() => article.value
  ? article.value.sections.map(section => ({ label: section.title, href: `#${section.id}` }))
  : [])
</script>
