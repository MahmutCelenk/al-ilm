<template>
  <main class="farz-page">
    <div class="farz-progress" :style="{ width: `${scrollProgress}%` }" aria-hidden="true" />

    <header class="farz-header">
      <nav class="farz-container farz-nav" aria-label="32 Farz rehberi">
        <NuxtLink to="/" class="farz-brand">
          <span class="farz-brand-mark">ع</span>
          <span>Al-Ilm</span>
        </NuxtLink>

        <div class="farz-nav-links">
          <a
            v-for="link in quickLinks"
            :key="link.href"
            :href="link.href"
            :class="['farz-nav-link', { 'is-active': activeSection === link.id }]"
          >
            {{ link.label }}
          </a>
        </div>

        <NuxtLink to="/" class="farz-home-link">Ana sayfa</NuxtLink>
      </nav>
    </header>

    <section class="farz-hero">
      <div class="farz-hero-glow farz-hero-glow-left" aria-hidden="true" />
      <div class="farz-hero-glow farz-hero-glow-right" aria-hidden="true" />

      <div class="farz-container farz-hero-inner">
        <p class="farz-eyebrow">Al-Ilm Platformu Sunar</p>
        <h1>32 Farz</h1>
        <p class="farz-hero-copy">
          İslam'ın temel ibadet ve inanç esaslarını tek sayfada, sakin ve düzenli bir
          öğrenme akışıyla keşfet.
        </p>

        <div class="farz-hero-actions">
          <a href="#iman" class="farz-button farz-button-primary">
            Başla
            <span aria-hidden="true">↓</span>
          </a>
          <a href="#namaz" class="farz-button farz-button-secondary">Müfredatı Görüntüle</a>
        </div>
      </div>
    </section>

    <section id="iman" class="farz-section">
      <div class="farz-container">
        <div class="farz-section-heading">
          <div>
            <p class="farz-kicker">Birinci bölüm</p>
            <h2>İmanın Şartları</h2>
            <p>İmanın temelini oluşturan ve her müminin kalpten inanması gereken altı ana rükün.</p>
          </div>
          <span class="farz-count">06</span>
        </div>

        <div class="farz-card-grid">
          <article v-for="(item, index) in faithConditions" :key="item.title" class="farz-card">
            <div class="farz-card-icon" aria-hidden="true">{{ item.icon }}</div>
            <span class="farz-card-number">{{ pad(index + 1) }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="islam" class="farz-section farz-section-tinted">
      <div class="farz-container">
        <div class="farz-centered-heading">
          <p class="farz-kicker">Temel ibadetler</p>
          <h2>İslam'ın Şartları</h2>
          <p>Müslüman olmanın ve dini yaşamanın beş temel şartı.</p>
        </div>

        <div class="farz-pill-grid">
          <article v-for="(item, index) in islamConditions" :key="item.title" class="farz-pill-card">
            <span>{{ pad(index + 1) }}</span>
            <strong>{{ item.title }}</strong>
          </article>
        </div>
      </div>
    </section>

    <section id="namaz" class="farz-section">
      <div class="farz-container">
        <div class="farz-centered-heading">
          <p class="farz-kicker">Namaz rehberi</p>
          <h2>Namazın Farzları</h2>
          <p>Namaza başlamadan önce ve namaz içinde dikkat edilen on iki farz.</p>
        </div>

        <div class="farz-prayer-grid">
          <article class="farz-list-panel">
            <div class="farz-list-heading">
              <span>1</span>
              <div>
                <h3>Dışındaki Farzlar</h3>
                <p>Namaza başlamadan önce yerine getirilen şartlar.</p>
              </div>
            </div>
            <ol>
              <li v-for="(item, index) in prayerOuterFards" :key="item">
                <span>{{ pad(index + 1) }}</span>
                {{ item }}
              </li>
            </ol>
          </article>

          <article class="farz-list-panel farz-list-panel-gold">
            <div class="farz-list-heading">
              <span>2</span>
              <div>
                <h3>İçindeki Farzlar</h3>
                <p>Namaz esnasında yapılan rükünler.</p>
              </div>
            </div>
            <ol>
              <li v-for="(item, index) in prayerInnerFards" :key="item">
                <span>{{ pad(index + 1) }}</span>
                {{ item }}
              </li>
            </ol>
          </article>
        </div>
      </div>
    </section>

    <section id="abdest" class="farz-section farz-section-white">
      <div class="farz-container">
        <div class="farz-centered-heading">
          <p class="farz-kicker">Arınma</p>
          <h2>Abdestin Farzları</h2>
          <p>Namaza hazırlığın anahtarı olan dört temel adım.</p>
        </div>

        <div class="farz-abdest-grid">
          <article v-for="(item, index) in ablutionFards" :key="item.title" class="farz-abdest-card">
            <div class="farz-abdest-image">
              <img :src="item.image" :alt="item.alt">
            </div>
            <div class="farz-abdest-body">
              <span>{{ index + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="gusul" class="farz-section">
      <div class="farz-container farz-purification-grid">
        <article class="farz-purification-panel">
          <p class="farz-kicker">Büyük temizlik</p>
          <h2>Guslün Farzları</h2>
          <p class="farz-panel-copy">Bütün vücudun temizlenmesi ve manevi arınma için üç temel şart.</p>
          <ul>
            <li v-for="item in ghuslFards" :key="item.title">
              <span aria-hidden="true">✓</span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>

        <article id="teyemmum" class="farz-purification-panel farz-purification-panel-gold">
          <p class="farz-kicker">Su bulunmadığında</p>
          <h2>Teyemmümün Farzları</h2>
          <p class="farz-panel-copy">Teyemmümün geçerli olmasını sağlayan temel farzlar.</p>
          <ul>
            <li v-for="item in tayammumFards" :key="item.title">
              <span aria-hidden="true">✓</span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

type FaithItem = {
  title: string
  description: string
  icon: string
}

type TextItem = {
  title: string
  description: string
}

type AblutionItem = TextItem & {
  image: string
  alt: string
}

const scrollProgress = ref(0)
const activeSection = ref('iman')

const quickLinks = [
  { id: 'iman', label: 'İman', href: '#iman' },
  { id: 'islam', label: 'İslam', href: '#islam' },
  { id: 'namaz', label: 'Namaz', href: '#namaz' },
  { id: 'abdest', label: 'Abdest', href: '#abdest' },
  { id: 'gusul', label: 'Gusül', href: '#gusul' },
  { id: 'teyemmum', label: 'Teyemmüm', href: '#teyemmum' }
]

const faithConditions: FaithItem[] = [
  { title: "Allah'a İman", description: "Her şeyi yaratan, eşi ve benzeri olmayan tek ilahın varlığına ve birliğine inanmaktır.", icon: '✦' },
  { title: 'Meleklere İman', description: "Nurdan yaratılmış, Allah'ın emirlerinden çıkmayan manevi varlıklara inanmaktır.", icon: '✧' },
  { title: 'Kitaplara İman', description: "Allah'ın peygamberleri aracılığıyla insanlara gönderdiği ilahi kitaplara inanmaktır.", icon: '◇' },
  { title: 'Peygamberlere İman', description: "Allah'ın emirlerini insanlara tebliğ etmek için seçtiği elçilere inanmaktır.", icon: '◆' },
  { title: 'Ahiret Gününe İman', description: 'Dünya hayatından sonraki ebedi hayata ve hesap gününe inanmaktır.', icon: '⌛' },
  { title: 'Kader ve Kazaya İman', description: "Hayır ve şerrin Allah'ın takdiri ile olduğuna inanmaktır.", icon: '✺' }
]

const islamConditions = [
  { title: 'Kelime-i Şehadet' },
  { title: 'Namaz' },
  { title: 'Zekat' },
  { title: 'Oruç' },
  { title: 'Hac' }
]

const prayerOuterFards = ['Hadesten Taharet', 'Necasetten Taharet', 'Setr-i Avret', 'İstikbal-i Kıble', 'Vakit', 'Niyet']
const prayerInnerFards = ['İftitah Tekbiri', 'Kıyam', 'Kıraat', 'Rükû', 'Sücud', "Ka'de-i Ahire"]

const ablutionFards: AblutionItem[] = [
  {
    title: 'Yüzü Yıkamak',
    description: 'Alın saç bitiminden çene altına, kulak yumuşaklarına kadar yüzü yıkamak.',
    image: '/images/articles/abdest-cover.png',
    alt: 'Abdest ve arınmayı temsil eden sakin su görseli'
  },
  {
    title: 'Kolları Yıkamak',
    description: 'Ellerle beraber dirsekleri de dahil ederek kolları yıkamak.',
    image: '/images/prayer-page-hero.png',
    alt: 'İbadete hazırlığı temsil eden sakin mescid görseli'
  },
  {
    title: 'Başa Mesh Etmek',
    description: 'Başın en az bir kısmını ıslak el ile mesh etmek.',
    image: '/images/learning-space.svg',
    alt: 'Öğrenme alanını temsil eden sade illüstrasyon'
  },
  {
    title: 'Ayakları Yıkamak',
    description: 'Topuklarla birlikte ayakları yıkamak.',
    image: '/images/prayer-space.svg',
    alt: 'Temiz ve sakin ibadet alanı illüstrasyonu'
  }
]

const ghuslFards: TextItem[] = [
  { title: 'Ağza su vermek', description: 'Ağza su alıp iyice çalkalamak.' },
  { title: 'Burna su vermek', description: 'Burna su çekip temizlemek.' },
  { title: 'Bütün vücudu yıkamak', description: 'Kuru yer kalmayacak şekilde bütün bedeni yıkamak.' }
]

const tayammumFards: TextItem[] = [
  { title: 'Niyet', description: 'Hangi ibadet için teyemmüm edileceğine niyet etmek.' },
  { title: 'Yüzü mesh etmek', description: 'Elleri toprağa vurup yüzü mesh etmek.' },
  { title: 'Kolları mesh etmek', description: 'Elleri toprağa vurup kolları dirseklerle beraber mesh etmek.' }
]

const pad = (value: number) => String(value).padStart(2, '0')

const updateScrollState = () => {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0

  const sections = quickLinks
    .map(link => document.getElementById(link.id))
    .filter((section): section is HTMLElement => Boolean(section))

  const current = sections.findLast(section => section.getBoundingClientRect().top <= 120)
  if (current) {
    activeSection.value = current.id
  }
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})

useSeoMeta({
  title: '32 Farz Rehberi',
  description: "İmanın şartları, İslam'ın şartları, namaz, abdest, gusül ve teyemmüm farzlarını sade bir rehberle öğren."
})
</script>

<style scoped>
.farz-page {
  --farz-primary: #003527;
  --farz-primary-soft: rgba(0, 53, 39, 0.08);
  --farz-secondary: #735c00;
  --farz-gold-soft: rgba(115, 92, 0, 0.1);
  --farz-surface: #f8f9ff;
  --farz-card: #ffffff;
  --farz-muted: #404944;
  --farz-line: #d7ded9;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--farz-surface);
  color: #121c2a;
  font-family: Inter, system-ui, sans-serif;
}

.farz-progress {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 80;
  height: 4px;
  background: linear-gradient(90deg, var(--farz-primary), var(--farz-secondary));
  transition: width 0.12s ease;
}

.farz-container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}

.farz-header {
  position: sticky;
  top: 0;
  z-index: 70;
  border-bottom: 1px solid rgba(191, 201, 195, 0.65);
  background: rgba(248, 249, 255, 0.88);
  backdrop-filter: blur(16px);
}

.farz-nav {
  display: grid;
  grid-template-columns: 180px 1fr 120px;
  align-items: center;
  min-height: 64px;
  gap: 24px;
}

.farz-brand,
.farz-home-link,
.farz-nav-link {
  color: inherit;
  text-decoration: none;
}

.farz-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--farz-primary);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 22px;
  font-weight: 700;
}

.farz-brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid rgba(0, 53, 39, 0.16);
  border-radius: 999px;
  background: #fff;
  font-size: 18px;
}

.farz-nav-links {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.farz-nav-link {
  border-bottom: 2px solid transparent;
  padding-block: 22px 18px;
  color: var(--farz-muted);
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.farz-nav-link:hover,
.farz-nav-link.is-active {
  border-color: var(--farz-secondary);
  color: var(--farz-primary);
}

.farz-home-link {
  justify-self: end;
  border: 1px solid rgba(0, 53, 39, 0.14);
  border-radius: 999px;
  padding: 9px 15px;
  color: var(--farz-primary);
  font-size: 13px;
  font-weight: 700;
}

.farz-hero {
  position: relative;
  display: grid;
  min-height: calc(100vh - 64px);
  place-items: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(191, 201, 195, 0.38);
  background:
    radial-gradient(circle at 2px 2px, rgba(0, 53, 39, 0.045) 1px, transparent 0),
    radial-gradient(circle at 12% 26%, rgba(6, 78, 59, 0.08), transparent 24%),
    radial-gradient(circle at 88% 78%, rgba(115, 92, 0, 0.08), transparent 24%),
    var(--farz-surface);
  background-size: 32px 32px, auto, auto, auto;
}

.farz-hero-glow {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  filter: blur(48px);
  opacity: 0.35;
}

.farz-hero-glow-left {
  left: -120px;
  bottom: 18%;
  background: rgba(0, 53, 39, 0.16);
}

.farz-hero-glow-right {
  right: -120px;
  top: 18%;
  background: rgba(115, 92, 0, 0.16);
}

.farz-hero-inner {
  position: relative;
  z-index: 1;
  padding-block: 96px;
  text-align: center;
}

.farz-eyebrow,
.farz-kicker {
  margin: 0;
  color: var(--farz-primary);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.farz-eyebrow {
  display: inline-flex;
  border: 1px solid rgba(0, 53, 39, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  padding: 9px 18px;
}

.farz-hero h1,
.farz-section h2 {
  margin: 0;
  color: var(--farz-primary);
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  letter-spacing: 0;
}

.farz-hero h1 {
  margin-top: 26px;
  font-size: clamp(58px, 8vw, 116px);
  line-height: 0.92;
}

.farz-hero-copy {
  max-width: 720px;
  margin: 28px auto 0;
  color: var(--farz-muted);
  font-size: 20px;
  line-height: 1.7;
}

.farz-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 44px;
}

.farz-button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  padding-inline: 26px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.farz-button:hover {
  transform: translateY(-2px);
}

.farz-button-primary {
  background: var(--farz-primary);
  color: #fff;
  box-shadow: 0 16px 34px rgba(0, 53, 39, 0.16);
}

.farz-button-secondary {
  border: 1px solid rgba(0, 53, 39, 0.14);
  background: rgba(255, 255, 255, 0.74);
  color: var(--farz-primary);
}

.farz-section {
  padding-block: 112px;
}

.farz-section-white {
  background: #fff;
}

.farz-section-tinted {
  border-block: 1px solid rgba(191, 201, 195, 0.35);
  background: #eff4ff;
}

.farz-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 48px;
}

.farz-section-heading h2,
.farz-centered-heading h2,
.farz-purification-panel h2 {
  margin-top: 10px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.05;
}

.farz-section-heading p,
.farz-centered-heading p,
.farz-panel-copy {
  max-width: 610px;
  margin: 16px 0 0;
  color: var(--farz-muted);
  font-size: 16px;
  line-height: 1.7;
}

.farz-count {
  color: rgba(0, 53, 39, 0.08);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 118px;
  font-weight: 700;
  line-height: 0.8;
}

.farz-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.farz-card {
  min-height: 268px;
  border: 1px solid var(--farz-line);
  border-radius: 18px;
  background:
    radial-gradient(circle at 88% 14%, rgba(0, 53, 39, 0.06), transparent 32%),
    var(--farz-card);
  padding: 32px;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.farz-card:hover,
.farz-abdest-card:hover,
.farz-list-panel:hover,
.farz-purification-panel:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 53, 39, 0.32);
  box-shadow: 0 18px 44px rgba(6, 78, 59, 0.09);
}

.farz-card-icon {
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border-radius: 14px;
  background: var(--farz-primary-soft);
  color: var(--farz-primary);
  font-size: 20px;
}

.farz-card-number {
  display: block;
  margin-top: 24px;
  color: var(--farz-secondary);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.farz-card h3 {
  margin: 12px 0 0;
  color: #121c2a;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 25px;
  line-height: 1.18;
}

.farz-card p {
  margin: 14px 0 0;
  color: var(--farz-muted);
  font-size: 14px;
  line-height: 1.65;
}

.farz-centered-heading {
  max-width: 760px;
  margin: 0 auto 54px;
  text-align: center;
}

.farz-centered-heading p {
  margin-inline: auto;
}

.farz-pill-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.farz-pill-card {
  display: grid;
  min-height: 154px;
  place-items: center;
  border: 1px solid rgba(0, 53, 39, 0.1);
  border-radius: 20px;
  background: #fff;
  padding: 24px;
  text-align: center;
  box-shadow: 0 8px 28px rgba(0, 53, 39, 0.04);
}

.farz-pill-card span {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 999px;
  background: #fed65b;
  color: #745c00;
  font-weight: 900;
}

.farz-pill-card strong {
  color: var(--farz-primary);
  font-size: 15px;
}

.farz-prayer-grid,
.farz-purification-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

.farz-list-panel,
.farz-purification-panel {
  border: 1px solid var(--farz-line);
  border-radius: 24px;
  background: #fff;
  padding: 34px;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.farz-list-heading {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 28px;
}

.farz-list-heading > span {
  display: grid;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 999px;
  background: var(--farz-primary);
  color: #fff;
  font-weight: 900;
}

.farz-list-panel-gold .farz-list-heading > span {
  background: var(--farz-secondary);
}

.farz-list-heading h3 {
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 27px;
  line-height: 1.15;
}

.farz-list-heading p {
  margin: 6px 0 0;
  color: var(--farz-muted);
  font-size: 14px;
}

.farz-list-panel ol {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.farz-list-panel li {
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid rgba(191, 201, 195, 0.64);
  border-radius: 12px;
  background: #f8f9ff;
  padding: 14px 16px;
  color: #121c2a;
  font-weight: 700;
}

.farz-list-panel li span {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 10px;
  background: var(--farz-primary-soft);
  color: var(--farz-primary);
  font-size: 12px;
  font-weight: 900;
}

.farz-list-panel-gold li span {
  background: var(--farz-gold-soft);
  color: var(--farz-secondary);
}

.farz-abdest-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.farz-abdest-card {
  overflow: hidden;
  border: 1px solid var(--farz-line);
  border-radius: 22px;
  background: #fff;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.farz-abdest-image {
  height: 178px;
  overflow: hidden;
  background: var(--farz-primary-soft);
}

.farz-abdest-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.farz-abdest-card:hover img {
  transform: scale(1.05);
}

.farz-abdest-body {
  padding: 24px;
}

.farz-abdest-body span {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 999px;
  background: var(--farz-primary);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
}

.farz-abdest-body h3 {
  margin: 18px 0 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 22px;
}

.farz-abdest-body p {
  margin: 10px 0 0;
  color: var(--farz-muted);
  font-size: 14px;
  line-height: 1.6;
}

.farz-purification-panel {
  min-height: 430px;
  background:
    radial-gradient(circle at 86% 10%, rgba(0, 53, 39, 0.06), transparent 30%),
    #fff;
}

.farz-purification-panel-gold {
  background:
    radial-gradient(circle at 86% 10%, rgba(115, 92, 0, 0.08), transparent 30%),
    #fff;
}

.farz-purification-panel ul {
  display: grid;
  gap: 16px;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;
}

.farz-purification-panel li {
  display: flex;
  gap: 14px;
  border: 1px solid rgba(0, 53, 39, 0.1);
  border-radius: 16px;
  background: rgba(0, 53, 39, 0.035);
  padding: 18px;
}

.farz-purification-panel-gold li {
  border-color: rgba(115, 92, 0, 0.14);
  background: rgba(115, 92, 0, 0.045);
}

.farz-purification-panel li > span {
  display: grid;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 999px;
  background: var(--farz-primary);
  color: #fff;
  font-weight: 900;
}

.farz-purification-panel-gold li > span {
  background: var(--farz-secondary);
}

.farz-purification-panel strong {
  color: var(--farz-primary);
  font-size: 16px;
}

.farz-purification-panel li p {
  margin: 6px 0 0;
  color: var(--farz-muted);
  font-size: 14px;
  line-height: 1.55;
}

@media (max-width: 980px) {
  .farz-nav {
    grid-template-columns: 1fr auto;
  }

  .farz-nav-links {
    display: none;
  }

  .farz-card-grid,
  .farz-prayer-grid,
  .farz-abdest-grid,
  .farz-purification-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .farz-pill-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .farz-container {
    width: min(100% - 28px, 1200px);
  }

  .farz-nav {
    min-height: 60px;
  }

  .farz-home-link {
    display: none;
  }

  .farz-hero {
    min-height: 640px;
  }

  .farz-hero-inner {
    padding-block: 72px;
  }

  .farz-hero h1 {
    font-size: 58px;
  }

  .farz-hero-copy {
    font-size: 17px;
  }

  .farz-hero-actions {
    flex-direction: column;
  }

  .farz-section {
    padding-block: 72px;
  }

  .farz-section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .farz-count {
    font-size: 72px;
  }

  .farz-card-grid,
  .farz-prayer-grid,
  .farz-abdest-grid,
  .farz-purification-grid,
  .farz-pill-grid {
    grid-template-columns: 1fr;
  }
}
</style>
