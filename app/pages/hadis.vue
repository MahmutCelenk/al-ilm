<template>
  <main>
    <HadithCollection :items="hadiths" />
  </main>
</template>

<script setup lang="ts">
import { hadiths } from '~/data/hadiths'

useSeoMeta({
  title: 'Hadis Kütüphanesi',
  description: 'Al-Ilm hadis kütüphanesinde sahih hadisleri konu, kaynak ve kısa anlamlarıyla oku.'
})
</script>
