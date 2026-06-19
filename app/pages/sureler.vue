<template>
  <main>
    <SurahCollection :items="surahs" />
  </main>
</template>

<script setup lang="ts">
import { surahs } from '~/data/surahs'

useSeoMeta({
  title: 'Sureler',
  description: 'Kur’an surelerini Arapça metin ve Türkçe anlamıyla arayıp oku.'
})
</script>
