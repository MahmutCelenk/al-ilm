<template>
  <main>
    <HadithCollection :items="hadiths" />
  </main>
</template>

<script setup lang="ts">
import { hadiths } from '~/data/hadiths'

definePageMeta({
  path: '/hadis'
})

useSeoMeta({
  title: 'Hadis Kütüphanesi',
  description: 'Sahih hadisleri Türkçe metni, Arapça aslı, râvisi, kısa açıklaması ve kaynak bağlantısıyla oku.'
})
</script>
