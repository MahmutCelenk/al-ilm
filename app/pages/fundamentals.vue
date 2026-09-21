<template>
  <main class="min-h-screen overflow-x-hidden bg-[#f8f9ff] font-sans text-[#121c2a]">
    <header class="sticky top-0 z-[70] border-b border-[#bfc9c3]/65 bg-[#f8f9ff]/90 backdrop-blur-2xl">
      <nav class="mx-auto grid min-h-16 w-[min(calc(100%_-_2rem),1200px)] grid-cols-[180px_1fr_120px] items-center gap-6 max-[980px]:grid-cols-[1fr_auto] max-sm:min-h-[60px] max-sm:w-[min(calc(100%_-_1.75rem),1200px)]" aria-label="32 Farz rehberi">
        <NuxtLink to="/" class="inline-flex items-center gap-2.5 font-display text-[22px] font-bold text-[#003527] no-underline">
          <span class="grid size-[34px] place-items-center rounded-full border border-[#003527]/15 bg-white text-lg">ع</span>
          <span>Al-Ilm</span>
        </NuxtLink>

        <div class="flex justify-center gap-8 max-[980px]:hidden">
          <a
            v-for="link in quickLinks"
            :key="link.href"
            :href="link.href"
            :class="[
              'border-b-2 px-0 pb-[18px] pt-[22px] text-sm font-semibold text-[#404944] no-underline transition-colors hover:border-[#735c00] hover:text-[#003527]',
              activeSection === link.id ? 'border-[#735c00] text-[#003527]' : 'border-transparent'
            ]"
          >
            {{ link.label }}
          </a>
        </div>

        <NuxtLink to="/" class="justify-self-end rounded-full border border-[#003527]/15 px-[15px] py-[9px] text-[13px] font-bold text-[#003527] no-underline max-sm:hidden">Ana sayfa</NuxtLink>
      </nav>
    </header>

    <section class="relative grid min-h-[calc(100vh_-_64px)] place-items-center overflow-hidden border-b border-[#bfc9c3]/40 bg-[#f8f9ff] [background-image:radial-gradient(circle_at_2px_2px,rgba(0,53,39,0.045)_1px,transparent_0),radial-gradient(circle_at_12%_26%,rgba(6,78,59,0.08),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(115,92,0,0.08),transparent_24%)] [background-size:32px_32px,auto,auto] max-sm:min-h-[640px]">
      <div class="absolute bottom-[18%] left-[-120px] size-[360px] rounded-full bg-[#003527]/15 opacity-[0.35] blur-[48px]" aria-hidden="true" />
      <div class="absolute right-[-120px] top-[18%] size-[360px] rounded-full bg-[#735c00]/15 opacity-[0.35] blur-[48px]" aria-hidden="true" />

      <div class="relative z-[1] mx-auto w-[min(calc(100%_-_2rem),1200px)] py-24 text-center max-sm:w-[min(calc(100%_-_1.75rem),1200px)] max-sm:py-[72px]">
        <p class="m-0 inline-flex rounded-full border border-[#003527]/15 bg-white/70 px-[18px] py-[9px] text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Temel Bilgiler</p>
        <h1 class="m-0 mt-[26px] font-display text-[clamp(58px,8vw,116px)] font-bold leading-[0.92] text-[#003527] max-sm:text-[58px]">32 Farz</h1>
        <p class="mx-auto mb-0 mt-7 max-w-[720px] text-xl leading-[1.7] text-[#404944] max-sm:text-[17px]">
          İman, ibadet ve temizlikle ilgili temel farzları; anlamlarıyla birlikte sırayla
          öğren.
        </p>

        <div class="mt-11 flex justify-center gap-4 max-sm:flex-col">
          <a href="#islam" class="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[10px] bg-[#003527] px-[26px] text-sm font-extrabold text-white no-underline shadow-[0_16px_34px_rgba(0,53,39,0.16)] transition duration-200 hover:-translate-y-0.5">
            Farzları İncele
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    <section id="islam" class="border-y border-[#bfc9c3]/35 bg-[#eff4ff] py-28 max-sm:py-[72px]">
      <div class="mx-auto w-[min(calc(100%_-_2rem),1200px)] max-sm:w-[min(calc(100%_-_1.75rem),1200px)]">
        <div class="mb-12 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start">
          <div>
            <p class="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Temel ibadetler</p>
            <h2 class="m-0 mt-2.5 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">İslam'ın Şartları</h2>
            <p class="mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">Müslüman olmanın ve dini yaşamanın beş temel şartını, anlamlarıyla birlikte kavra.</p>
          </div>
        </div>

        <div class="grid grid-cols-5 gap-3 max-[980px]:grid-cols-3 max-sm:grid-cols-1" role="tablist" aria-label="İslam'ın şartları">
          <button
            v-for="(item, index) in islamConditions"
            :key="item.id"
            type="button"
            role="tab"
            :aria-selected="selectedIslamConditionId === item.id"
            :class="[
              'flex min-h-[94px] items-center gap-3 rounded-[14px] border bg-white/70 p-4 text-left text-[#003527] transition duration-200 hover:-translate-y-0.5 hover:border-[#003527] hover:bg-[#fffef9]',
              selectedIslamConditionId === item.id ? '-translate-y-0.5 border-[#003527] bg-[#fffef9]' : 'border-[#003527]/15'
            ]"
            @click="selectedIslamConditionId = item.id"
          >
            <span class="grid size-[34px] shrink-0 place-items-center rounded-full bg-secondary-container text-xs font-black text-on-secondary-container">{{ pad(index + 1) }}</span>
            <strong class="font-display text-lg leading-[1.1]">{{ item.title }}</strong>
          </button>
        </div>

        <article class="mt-[18px] rounded-3xl border border-[#003527]/20 bg-[#fffef9] p-[34px] shadow-[0_16px_42px_rgba(0,53,39,0.06)] max-sm:p-6">
          <template v-if="selectedIslamConditionId === 'shahada'">
            <div class="flex items-center gap-3">
              <span class="grid size-[34px] shrink-0 place-items-center rounded-full bg-secondary-container text-xs font-black text-on-secondary-container">{{ pad(1) }}</span>
              <p class="m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#735c00]">İslam'a giriş ifadesi</p>
            </div>
            <h3 class="m-0 mt-[26px] font-display text-[clamp(34px,4vw,48px)] font-bold leading-[1.05] text-[#003527]">{{ shahada.title }}</h3>
            <p class="mb-0 mt-[14px] max-w-[590px] text-[15px] leading-[1.65] text-[#404944]">{{ shahada.description }}</p>

            <div class="mt-7 border-y border-[#003527]/10 py-5">
              <p class="m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#735c00]">Arapça metin</p>
              <p class="mb-0 mt-[14px] text-right font-['Amiri_Quran',Amiri,serif] text-[clamp(28px,3vw,40px)] leading-[1.7] text-[#082c23]" lang="ar" dir="rtl">{{ shahada.arabic }}</p>
            </div>

            <div class="mt-[22px] grid gap-[18px]">
              <div class="grid gap-[7px]">
                <p class="m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#735c00]">Okunuşu</p>
                <strong class="text-sm font-medium leading-[1.65] text-[#24302a]">{{ shahada.latin }}</strong>
              </div>
              <div class="grid gap-[7px]">
                <p class="m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#735c00]">Türkçe anlamı</p>
                <strong class="text-sm font-medium leading-[1.65] text-[#24302a]">{{ shahada.meaning }}</strong>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="flex items-center gap-3">
              <span class="grid size-[34px] shrink-0 place-items-center rounded-full bg-secondary-container text-xs font-black text-on-secondary-container">{{ pad(selectedIslamConditionIndex + 1) }}</span>
              <p class="m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#735c00]">İslam'ın şartlarından biri</p>
            </div>
            <h3 class="m-0 mt-[26px] font-display text-[clamp(34px,4vw,48px)] font-bold leading-[1.05] text-[#003527]">{{ selectedIslamCondition.title }}</h3>
            <p class="mb-0 mt-[18px] max-w-[760px] text-[17px] leading-[1.75] text-[#404944]">{{ selectedIslamCondition.detail }}</p>
          </template>
        </article>
      </div>
    </section>

    <section id="iman" class="py-28 max-sm:py-[72px]">
      <div class="mx-auto w-[min(calc(100%_-_2rem),1200px)] max-sm:w-[min(calc(100%_-_1.75rem),1200px)]">
        <div class="mb-12 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start">
          <div>
            <h2 class="m-0 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">İmanın Şartları</h2>
            <p class="mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">İmanın temelini oluşturan ve her müminin kalpten inanması gereken altı ana rükün.</p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-7 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          <article v-for="(item, index) in faithConditions" :key="item.title" class="min-h-[268px] rounded-[18px] border border-[#d7ded9] bg-white p-8 [background-image:radial-gradient(circle_at_88%_14%,rgba(0,53,39,0.06),transparent_32%)] transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
            <div class="grid size-[50px] place-items-center rounded-[14px] bg-[#003527]/[0.08] text-xl text-[#003527]" aria-hidden="true">{{ item.icon }}</div>
            <span class="mt-6 block text-xs font-black tracking-[0.18em] text-[#735c00]">{{ pad(index + 1) }}</span>
            <h3 class="m-0 mt-3 font-display text-[25px] leading-[1.18] text-[#121c2a]">{{ item.title }}</h3>
            <p class="mb-0 mt-[14px] text-sm leading-[1.65] text-[#404944]">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="namaz" class="py-28 max-sm:py-[72px]">
      <div class="mx-auto w-[min(calc(100%_-_2rem),1200px)] max-sm:w-[min(calc(100%_-_1.75rem),1200px)]">
        <div class="mx-auto mb-[54px] max-w-[760px] text-center">
          <p class="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Namaz rehberi</p>
          <h2 class="m-0 mt-2.5 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">Namazın Farzları</h2>
          <p class="mx-auto mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">Namaza başlamadan önce ve namaz içinde dikkat edilen on iki farz.</p>
        </div>

        <div class="grid grid-cols-2 gap-8 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          <article class="rounded-3xl border border-[#d7ded9] bg-white p-[34px] transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
            <div class="mb-7 flex items-center gap-[18px]">
              <span class="grid size-[46px] shrink-0 place-items-center rounded-full bg-[#003527] font-black text-white">1</span>
              <div>
                <h3 class="m-0 font-display text-[27px] leading-[1.15]">Dışındaki Farzlar</h3>
                <p class="mb-0 mt-1.5 text-sm text-[#404944]">Namaza başlamadan önce yerine getirilen şartlar.</p>
              </div>
            </div>
            <ol class="m-0 grid list-none gap-3 p-0">
              <li v-for="(item, index) in prayerOuterFards" :key="item.title" class="flex items-start gap-[14px] rounded-xl border border-[#bfc9c3]/65 bg-[#f8f9ff] px-4 py-[14px] font-bold text-[#121c2a]">
                <span class="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-[#003527]/[0.08] text-xs font-black text-[#003527]">{{ pad(index + 1) }}</span>
                <div>
                  <strong class="block text-[15px] text-[#121c2a]">{{ item.title }}</strong>
                  <p class="mb-0 mt-1.5 text-[13px] font-normal leading-[1.55] text-[#404944]">{{ item.description }}</p>
                </div>
              </li>
            </ol>
          </article>

          <article class="rounded-3xl border border-[#d7ded9] bg-white p-[34px] transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
            <div class="mb-7 flex items-center gap-[18px]">
              <span class="grid size-[46px] shrink-0 place-items-center rounded-full bg-[#735c00] font-black text-white">2</span>
              <div>
                <h3 class="m-0 font-display text-[27px] leading-[1.15]">İçindeki Farzlar</h3>
                <p class="mb-0 mt-1.5 text-sm text-[#404944]">Namaz esnasında yapılan rükünler.</p>
              </div>
            </div>
            <ol class="m-0 grid list-none gap-3 p-0">
              <li v-for="(item, index) in prayerInnerFards" :key="item.title" class="flex items-start gap-[14px] rounded-xl border border-[#bfc9c3]/65 bg-[#f8f9ff] px-4 py-[14px] font-bold text-[#121c2a]">
                <span class="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-[#735c00]/10 text-xs font-black text-[#735c00]">{{ pad(index + 1) }}</span>
                <div>
                  <strong class="block text-[15px] text-[#121c2a]">{{ item.title }}</strong>
                  <p class="mb-0 mt-1.5 text-[13px] font-normal leading-[1.55] text-[#404944]">{{ item.description }}</p>
                </div>
              </li>
            </ol>
          </article>
        </div>
      </div>
    </section>

    <section id="abdest" class="bg-white py-28 max-sm:py-[72px]">
      <div class="mx-auto w-[min(calc(100%_-_2rem),1200px)] max-sm:w-[min(calc(100%_-_1.75rem),1200px)]">
        <div class="mx-auto mb-[54px] max-w-[760px] text-center">
          <p class="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Arınma</p>
          <h2 class="m-0 mt-2.5 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">Abdestin Farzları</h2>
          <p class="mx-auto mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">Namaza hazırlığın anahtarı olan dört temel adım.</p>
        </div>

        <div class="grid grid-cols-4 gap-6 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          <article v-for="(item, index) in ablutionFards" :key="item.title" class="group overflow-hidden rounded-[22px] border border-[#d7ded9] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
            <div class="h-[178px] overflow-hidden bg-[#003527]/[0.08]">
              <img class="size-full object-cover transition-transform duration-300 group-hover:scale-105" :src="item.image" :alt="item.alt">
            </div>
            <div class="p-6">
              <span class="grid size-9 place-items-center rounded-full bg-[#003527] text-[13px] font-black text-white">{{ index + 1 }}</span>
              <h3 class="m-0 mt-[18px] font-display text-[22px]">{{ item.title }}</h3>
              <p class="mb-0 mt-2.5 text-sm leading-[1.6] text-[#404944]">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="gusul" class="py-28 max-sm:py-[72px]">
      <div class="mx-auto grid w-[min(calc(100%_-_2rem),1200px)] grid-cols-2 gap-8 max-[980px]:grid-cols-2 max-sm:w-[min(calc(100%_-_1.75rem),1200px)] max-sm:grid-cols-1">
        <article class="min-h-[430px] rounded-3xl border border-[#d7ded9] bg-white p-[34px] [background-image:radial-gradient(circle_at_86%_10%,rgba(0,53,39,0.06),transparent_30%)] transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
          <p class="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Büyük temizlik</p>
          <h2 class="m-0 mt-2.5 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">Guslün Farzları</h2>
          <p class="mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">Bütün vücudun temizlenmesi ve manevi arınma için üç temel şart.</p>
          <ul class="m-0 mt-[30px] grid list-none gap-4 p-0">
            <li v-for="item in ghuslFards" :key="item.title" class="flex gap-[14px] rounded-2xl border border-[#003527]/10 bg-[#003527]/[0.035] p-[18px]">
              <span class="grid size-[30px] shrink-0 place-items-center rounded-full bg-[#003527] font-black text-white" aria-hidden="true">✓</span>
              <div>
                <strong class="text-base text-[#003527]">{{ item.title }}</strong>
                <p class="mb-0 mt-1.5 text-sm leading-[1.55] text-[#404944]">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>

        <article id="teyemmum" class="min-h-[430px] rounded-3xl border border-[#d7ded9] bg-white p-[34px] [background-image:radial-gradient(circle_at_86%_10%,rgba(115,92,0,0.08),transparent_30%)] transition duration-200 hover:-translate-y-1 hover:border-[#003527]/30 hover:shadow-[0_18px_44px_rgba(6,78,59,0.09)]">
          <p class="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-[#003527]">Su bulunmadığında</p>
          <h2 class="m-0 mt-2.5 font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] text-[#003527]">Teyemmümün Farzları</h2>
          <p class="mb-0 mt-4 max-w-[610px] text-base leading-[1.7] text-[#404944]">Teyemmümün geçerli olmasını sağlayan temel farzlar.</p>
          <ul class="m-0 mt-[30px] grid list-none gap-4 p-0">
            <li v-for="item in tayammumFards" :key="item.title" class="flex gap-[14px] rounded-2xl border border-[#735c00]/15 bg-[#735c00]/[0.045] p-[18px]">
              <span class="grid size-[30px] shrink-0 place-items-center rounded-full bg-[#735c00] font-black text-white" aria-hidden="true">✓</span>
              <div>
                <strong class="text-base text-[#003527]">{{ item.title }}</strong>
                <p class="mb-0 mt-1.5 text-sm leading-[1.55] text-[#404944]">{{ item.description }}</p>
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
  layout: false,
  path: '/temel-bilgiler'
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

type IslamCondition = TextItem & {
  id: string
  detail: string
}

type AblutionItem = TextItem & {
  image: string
  alt: string
}

const activeSection = ref('islam')
const selectedIslamConditionId = ref('shahada')

const quickLinks = [
  { id: 'islam', label: 'İslam', href: '#islam' },
  { id: 'iman', label: 'İman', href: '#iman' },
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

const shahada = {
  title: 'Kelime-i Şehadet',
  description: "Allah'ın birliğini ve Hz. Muhammed'in O'nun kulu ve elçisi olduğunu ifade eden şahitlik sözüdür.",
  arabic: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
  latin: 'Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve resûlüh.',
  meaning: "Şahitlik ederim ki Allah'tan başka ilah yoktur. Yine şahitlik ederim ki Muhammed O'nun kulu ve elçisidir."
}

const islamConditions: IslamCondition[] = [
  { id: 'shahada', title: 'Kelime-i Şehadet', description: 'Allah’ın birliğine ve Peygamberimizin elçiliğine şahitlik etmektir.', detail: shahada.description },
  { id: 'prayer', title: 'Namaz', description: 'Belirli vakitlerde Allah’a yönelerek namaz kılmaktır.', detail: 'Namaz, Müslümanın gün içinde belirli vakitlerde Allah’a yönelerek yerine getirdiği ibadettir. Hazırlık, kıyam, rükû, secde ve selamdan oluşan ana akışla öğrenilebilir.' },
  { id: 'alms', title: 'Zekat', description: 'İhtiyaç sahiplerine belirlenen ölçüde vermektir.', detail: 'Zekat, mali imkanı olan Müslümanların belirli şartlarla ihtiyaç sahiplerine verdiği ibadettir. Paylaşmayı, sosyal dayanışmayı ve malın bereketini hatırlatır.' },
  { id: 'fasting', title: 'Oruç', description: 'Ramazan ayında imsak ile iftar arasında oruç tutmaktır.', detail: 'Oruç, Ramazan ayında imsak vaktinden iftara kadar yeme, içme ve orucu bozan davranışlardan uzak durmaktır. Sabır ve bilinçle geçirilen bir ibadet vaktidir.' },
  { id: 'pilgrimage', title: 'Hac', description: "Gücü yetenlerin Kabe'yi ziyaret etmesidir.", detail: "Hac, maddi ve bedeni imkanı olan Müslümanların belirli zamanda Kabe'yi ziyaret ederek yerine getirdiği ibadettir. Ömründe bir kez farzdır." }
]

const selectedIslamCondition = computed(() =>
  islamConditions.find(item => item.id === selectedIslamConditionId.value) ?? islamConditions[0]!
)

const selectedIslamConditionIndex = computed(() =>
  islamConditions.findIndex(item => item.id === selectedIslamConditionId.value)
)

const prayerOuterFards: TextItem[] = [
  { title: 'Hadesten Taharet', description: 'Namazdan önce abdestli olmak; gerektiğinde gusül veya teyemmüm ile temizlenmektir.' },
  { title: 'Necasetten Taharet', description: 'Bedenin, elbisenin ve namaz kılınacak yerin ibadete engel kirlerden temiz olmasıdır.' },
  { title: 'Setr-i Avret', description: 'Namazda örtülmesi gereken yerleri uygun ve temiz bir kıyafetle örtmektir.' },
  { title: 'İstikbal-i Kıble', description: 'Namaza başlarken kıble yönüne, yani Kâbe’ye doğru dönmektir.' },
  { title: 'Vakit', description: 'Her namazı kendi vakti girdikten sonra kılmaktır.' },
  { title: 'Niyet', description: 'Kılınacak namazı kalben belirlemek ve hangi namaz için durduğunu bilmektir.' }
]

const prayerInnerFards: TextItem[] = [
  { title: 'İftitah Tekbiri', description: 'Eller kaldırılarak “Allahu Ekber” denir ve namaza başlanır.' },
  { title: 'Kıyam', description: 'Gücü yeten kişinin farz namazda ayakta durmasıdır.' },
  { title: 'Kıraat', description: 'Kıyamdayken Kur’an’dan Fâtiha ve ardından bir sure veya ayet okumaktır.' },
  { title: 'Rükû', description: 'Eller dizlere konularak eğilmek ve rükû tesbihini okumaktır.' },
  { title: 'Sücud', description: 'Alın ve burnu yere koyarak secdeye varmak; secde tesbihini okumaktır.' },
  { title: "Ka'de-i Ahire", description: 'Namazın son rekâtında oturup ettehiyyatü okuyacak kadar beklemektir.' }
]

const ablutionFards: AblutionItem[] = [
  {
    title: 'Yüzü Yıkamak',
    description: 'Alın saç bitiminden çene altına, kulak yumuşaklarına kadar yüzü yıkamak.',
    image: '/images/articles/wudu-wash-face.png',
    alt: 'Abdest alırken yüzü yıkamak'
  },
  {
    title: 'Kolları Yıkamak',
    description: 'Ellerle beraber dirsekleri de dahil ederek kolları yıkamak.',
    image: '/images/articles/wudu-wash-arms.png',
    alt: 'Abdest alırken kolları dirseklerle birlikte yıkamak'
  },
  {
    title: 'Başa Mesh Etmek',
    description: 'Başın en az bir kısmını ıslak el ile mesh etmek.',
    image: '/images/articles/wudu-wipe-head.png',
    alt: 'Abdest alırken başa mesh etmek'
  },
  {
    title: 'Ayakları Yıkamak',
    description: 'Topuklarla birlikte ayakları yıkamak.',
    image: '/images/articles/wudu-wash-feet.png',
    alt: 'Abdest alırken ayakları topuklarla birlikte yıkamak'
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
