import { defineStore } from 'pinia'

type FontScale = 'normal' | 'large'

interface LocalPreferences {
  fontScale: FontScale
  showArabic: boolean
}

export const usePreferencesStore = defineStore('preferences', {
  state: (): LocalPreferences => ({
    fontScale: 'normal',
    showArabic: true
  }),
  actions: {
    setFontScale(fontScale: FontScale) {
      this.fontScale = fontScale
      localStorage.setItem('al-ilm:font-scale', fontScale)
    },
    setShowArabic(showArabic: boolean) {
      this.showArabic = showArabic
      localStorage.setItem('al-ilm:show-arabic', String(showArabic))
    },
    hydrate() {
      const fontScale = localStorage.getItem('al-ilm:font-scale')
      const showArabic = localStorage.getItem('al-ilm:show-arabic')

      if (fontScale === 'normal' || fontScale === 'large') {
        this.fontScale = fontScale
      }

      if (showArabic !== null) {
        this.showArabic = showArabic === 'true'
      }
    }
  }
})
