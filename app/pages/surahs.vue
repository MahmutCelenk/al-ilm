<template>
  <main>
    <SurahCollection :items="surahs" />
  </main>
</template>

<script setup lang="ts">
import { surahs } from '~/data/surahs'

definePageMeta({
  path: '/sureler'
})

useSeoMeta({
  title: 'Sureler',
  description: 'Kur’an surelerini Arapça metin ve Türkçe anlamıyla arayıp oku.'
})
</script>
