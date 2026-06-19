<template>
  <ArticleShell
    v-if="article"
    :title="article.title"
    :description="article.description"
    :category="article.category"
    :read-time="article.readTime"
    :image="article.image"
    :image-alt="article.imageAlt"
    :toc="article.toc"
    :faqs="article.faqs"
  >
    <section
      v-for="(section, index) in article.sections"
      :id="section.id"
      :key="section.id"
      class="not-prose scroll-mt-28 rounded-[28px] border border-outline-variant/55 bg-surface-container-lowest p-6 shadow-manuscript md:p-8"
      :class="{ 'mt-8': index > 0 }"
    >
      <div class="mb-6 flex items-start gap-4">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-sm font-bold text-primary">
          {{ index + 1 }}
        </span>
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-secondary">Bölüm</p>
          <h2 class="mt-1 font-display text-3xl font-bold leading-tight text-tertiary md:text-4xl">
            {{ section.title }}
          </h2>
        </div>
      </div>

      <div class="space-y-5 text-[17px] leading-8 text-on-surface-variant">
        <p v-for="paragraph in section.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <ArticleCallout
        v-if="section.callout"
        :eyebrow="section.callout.eyebrow"
        :title="section.callout.title"
      >
        {{ section.callout.body }}
      </ArticleCallout>

      <ArticleSteps
        v-if="section.steps"
        :eyebrow="section.steps.eyebrow"
        :title="section.steps.title"
        :description="section.steps.description"
        :steps="section.steps.items"
      />
    </section>

  </ArticleShell>

  <div v-else class="surface-card p-8">
    <h1 class="font-display text-3xl font-bold text-primary">İçerik bulunamadı</h1>
    <p class="mt-3 text-on-surface-variant">Aradığınız sayfa henüz hazırlanmadı.</p>
  </div>
</template>

<script setup lang="ts">
type ArticleSection = {
  id: string
  title: string
  paragraphs: string[]
  callout?: {
    eyebrow: string
    title: string
    body: string
  }
  steps?: {
    eyebrow: string
    title: string
    description: string
    items: Array<{
      title: string
      body: string
      recitations?: Array<{
        title?: string
        arabic: string
        latin?: string
        meaning: string
      }>
    }>
  }
}

type FallbackArticle = {
  title: string
  description: string
  category: string
  readTime: string
  image: string
  imageAlt: string
  toc: Array<{ label: string; href: string }>
  sections: ArticleSection[]
  faqs?: Array<{ question: string; answer: string }>
}

const props = defineProps<{
  slug: string
}>()

const articles: Record<string, FallbackArticle> = {
  'namaz-nasil-kilinir': {
    title: 'Namaz Nasıl Kılınır? Yeni Başlayanlar İçin Sıralı Rehber',
    description: 'Namaza yeni başlayanlar için hazırlık şartlarını, niyeti, tekbiri, kıyamı, rükûyu, secdeyi ve oturuşu anlaşılır bir sırayla anlatan temel rehber.',
    category: 'İbadet',
    readTime: '10 dk okuma',
    image: '/images/articles/namaz-cover.png',
    imageAlt: 'Sakin ve modern bir mescid iç mekanı',
    toc: [
      { label: 'Namaza başlamadan önce', href: '#namaza-baslamadan-once' },
      { label: 'Bir rekâtın akışı', href: '#bir-rekatin-akisi' },
      { label: 'Oturuş ve selam', href: '#oturus-ve-selam' },
      { label: 'Öğrenirken takip edilecek yol', href: '#ogrenirken-takip-edilecek-yol' }
    ],
    sections: [
      {
        id: 'namaza-baslamadan-once',
        title: 'Namaza başlamadan önce',
        paragraphs: [
          'Namaz, belirli sözler ve hareketlerle Allah’a yönelme ibadetidir. Yeni başlayan biri için en doğru başlangıç, bütün ayrıntıları aynı anda ezberlemeye çalışmak değil; namazın ana akışını sakin ve anlaşılır bir sırayla kavramaktır.',
          'Namaza geçmeden önce abdest alınır, bedenin ve elbisenin temizliğine dikkat edilir, namaz vaktinin girdiği kontrol edilir ve kıbleye dönülür.'
        ],
        callout: {
          eyebrow: 'Başlangıç notu',
          title: 'Niyet kalbin yönelişidir',
          body: 'Niyetin özü, kişinin hangi namazı kıldığını bilerek Allah’a yönelmesidir. Dil ile söylemek yardımcı olabilir; fakat asıl niyet kalpteki bilinçtir.'
        }
      },
      {
        id: 'bir-rekatin-akisi',
        title: 'Bir rekâtın akışı',
        paragraphs: ['Bir rekât, namazın temel yapısını gösterir. Akış zihinde yerleştiğinde dua ve ayrıntılar daha rahat öğrenilir.'],
        steps: {
          eyebrow: 'Rekât düzeni',
          title: 'Bir rekâtı adım adım takip et',
          description: 'İlk öğrenirken her hareketi acele etmeden yap; amaç sırayı ezberlemekten çok namazın ritmini anlamaktır.',
          items: [
            {
              title: 'Tekbir',
              body: 'Eller kaldırılır ve "Allahu Ekber" denilerek namaza başlanır.',
              recitations: [
                {
                  title: 'Başlangıç tekbiri',
                  arabic: 'اللّٰهُ أَكْبَرُ',
                  latin: 'Allahu Ekber',
                  meaning: 'Allah en büyüktür.'
                }
              ]
            },
            {
              title: 'Kıyam',
              body: 'Ayakta durulur. Sübhaneke, Fatiha ve kısa bir sure okunur.',
              recitations: [
                {
                  title: 'Sübhaneke',
                  arabic: 'سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ',
                  latin: 'Subhanekallahumme ve bihamdik. Ve tebarekesmuk. Ve teala cedduk. Ve la ilahe gayruk.',
                  meaning: 'Allah’ım, seni noksan sıfatlardan tenzih eder ve sana hamd ederim. İsmin mübarektir, şanın yücedir. Senden başka ilah yoktur.'
                },
                {
                  title: 'Fatiha suresi',
                  arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ. اَلرَّحْمٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِينُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                  latin: 'Bismillahirrahmanirrahim. Elhamdulillahi rabbil alemin. Errahmanirrahim. Maliki yevmiddin. İyyake na’budu ve iyyake nesta’in. İhdinas sıratal mustakim. Sıratallezine en’amte aleyhim gayril mağdubi aleyhim veled dallin.',
                  meaning: 'Rahman ve Rahim olan Allah’ın adıyla. Hamd alemlerin Rabbi Allah’a mahsustur. O Rahman ve Rahim’dir. Din gününün sahibidir. Yalnız sana kulluk eder, yalnız senden yardım dileriz. Bizi dosdoğru yola ilet; nimet verdiklerinin yoluna, gazaba uğrayanların ve sapmışların yoluna değil.'
                },
                {
                  title: 'Kısa sure örneği: İhlas',
                  arabic: 'قُلْ هُوَ اللّٰهُ أَحَدٌ. اَللّٰهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
                  latin: 'Kul huvallahu ehad. Allahus samed. Lem yelid ve lem yuled. Ve lem yekun lehu kufuven ehad.',
                  meaning: 'De ki: O Allah birdir. Allah Samed’dir; her şey O’na muhtaçtır, O hiçbir şeye muhtaç değildir. Doğurmamış ve doğurulmamıştır. Hiçbir şey O’na denk değildir.'
                }
              ]
            },
            {
              title: 'Rükû',
              body: 'Rükûda üç defa "Sübhane Rabbiyel Azîm" denir.',
              recitations: [
                {
                  title: 'Rükû tesbihi',
                  arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
                  latin: 'Subhane Rabbiyel Azim',
                  meaning: 'Yüce Rabbimi noksan sıfatlardan tenzih ederim.'
                }
              ]
            },
            {
              title: 'Secde',
              body: 'Secdede üç defa "Sübhane Rabbiyel A’lâ" denir.',
              recitations: [
                {
                  title: 'Secde tesbihi',
                  arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
                  latin: 'Subhane Rabbiyel A’la',
                  meaning: 'En yüce Rabbimi noksan sıfatlardan tenzih ederim.'
                }
              ]
            }
          ]
        }
      },
      {
        id: 'oturus-ve-selam',
        title: 'Oturuş ve selam',
        paragraphs: [
          'İkinci rekâtta tekrar ayağa kalkılır. Fatiha ve bir sure okunduktan sonra rükû ve secdeler aynı düzenle yapılır.',
          'Oturuşta Ettehiyyatü, Salli, Barik ve Rabbena duaları okunur. Ardından önce sağa, sonra sola selam verilerek namaz tamamlanır.'
        ]
      },
      {
        id: 'ogrenirken-takip-edilecek-yol',
        title: 'Öğrenirken takip edilecek yol',
        paragraphs: ['Namaz öğrenmek bir defalık bilgi değil, düzenli tekrar isteyen bir ibadettir. Eksik hissetmek doğal olabilir; önemli olan doğru sırayla ilerlemektir.'],
        steps: {
          eyebrow: 'Öğrenme planı',
          title: 'Namazı parça parça sağlamlaştır',
          description: 'Bu sıra, yeni başlayan birinin zorlanmadan ilerlemesine yardımcı olur.',
          items: [
            { title: 'Hareketleri öğren', body: 'Tekbir, kıyam, rükû, secde, oturuş ve selam sırasını netleştir.' },
            { title: 'Sureleri çalış', body: 'Fatiha ve kısa sureleri doğru telaffuzla öğren.' },
            { title: 'Tesbihleri ekle', body: 'Rükû ve secde tesbihlerini düzenli tekrar et.' },
            { title: 'Oturuş dualarını tamamla', body: 'Duaları küçük bölümlere ayırarak öğren.' }
          ]
        }
      }
    ],
    faqs: [
      {
        question: 'Namazı neler bozar?',
        answer: 'Namaz içinde konuşmak, gülmek, bir şeyler yemek veya abdestin bozulması namazı da geçersiz kılar.'
      },
      {
        question: 'Namazda dua veya sureyi unutursam ne yapmalıyım?',
        answer: 'Yeni öğrenen biri önce sakin kalmalı ve bildiği yerden devam etmelidir. Ayrıntılı durumlar için güvenilir bir ilmihalden sehiv secdesi bölümüne bakmak faydalıdır.'
      },
      {
        question: 'Namazı öğrenirken en doğru sıra nedir?',
        answer: 'Önce hareket sırasını öğrenmek, sonra Fatiha ve kısa sureleri sağlamlaştırmak, ardından rükû, secde ve oturuş dualarını eklemek daha kolay bir yoldur.'
      }
    ]
  },
  'abdest-nasil-alinir': {
    title: 'Abdest Nasıl Alınır? Adım Adım Temizlik Rehberi',
    description: 'Namazdan önce alınan abdestin anlamını, sırasını, farzlarını ve öğrenirken dikkat edilmesi gereken temel noktaları açıklayan başlangıç rehberi.',
    category: 'İbadet',
    readTime: '8 dk okuma',
    image: '/images/articles/abdest-cover.png',
    imageAlt: 'Abdest için temiz su ve sakin bir hazırlık alanı',
    toc: [
      { label: 'Abdestin anlamı', href: '#abdestin-anlami' },
      { label: 'Abdestin sırası', href: '#abdestin-sirasi' },
      { label: 'Farzlar ve dikkat noktaları', href: '#farzlar-ve-dikkat-noktalari' }
    ],
    sections: [
      {
        id: 'abdestin-anlami',
        title: 'Abdestin anlamı',
        paragraphs: [
          'Abdest, namazdan önce yapılan bedeni temizliktir; fakat sadece dış temizliği ifade etmez. Mümin abdestle birlikte günlük meşguliyetlerden ayrılır, zihnini toplar ve namaza yönelmeye hazırlanır.'
        ],
        callout: {
          eyebrow: 'Temel fikir',
          title: 'Abdest namaza geçiş kapısıdır',
          body: 'Abdestin amacı zorlanmak veya ayrıntılar içinde kaybolmak değildir. Amaç, namaza temiz, dikkatli ve bilinçli şekilde yönelmektir.'
        }
      },
      {
        id: 'abdestin-sirasi',
        title: 'Abdestin sırası',
        paragraphs: ['Abdest alırken belli bir sırayı takip etmek öğrenmeyi kolaylaştırır. Her seferinde aynı düzenle ilerlemek, adımların zihinde yerleşmesini sağlar.'],
        steps: {
          eyebrow: 'Uygulama sırası',
          title: 'Abdesti adım adım al',
          description: 'İlk öğrenirken bu sırayı takip et; zamanla hareketler doğal bir akışa dönüşür.',
          items: [
            { title: 'Niyet ve besmele', body: 'Kalben abdest almaya niyet edilir ve besmele ile başlanır.' },
            { title: 'Elleri yıkamak', body: 'Eller bileklere kadar güzelce yıkanır.' },
            { title: 'Ağız ve burun', body: 'Ağıza ve buruna su verilir.' },
            { title: 'Yüz ve kollar', body: 'Yüz ve kollar dirseklerle birlikte yıkanır.' },
            { title: 'Mesh ve ayaklar', body: 'Baş mesh edilir, ayaklar topuklarla birlikte yıkanır.' }
          ]
        }
      },
      {
        id: 'farzlar-ve-dikkat-noktalari',
        title: 'Farzlar ve dikkat noktaları',
        paragraphs: [
          'Abdestin farzları yüzü yıkamak, kolları dirseklerle birlikte yıkamak, başın bir kısmını mesh etmek ve ayakları topuklarla birlikte yıkamaktır.',
          'Suyun deriye ulaşmasına engel olan kalın kir, boya veya benzeri şeylere dikkat edilir.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Abdest alırken sırayı karıştırırsam abdestim geçerli olur mu?',
        answer: 'Abdestin farzları yerine geldiyse abdest geçerli olur. Ancak öğrenirken aynı sırayı takip etmek hem zihni rahatlatır hem de eksik bırakma ihtimalini azaltır.'
      },
      {
        question: 'Kuru yer kalırsa ne olur?',
        answer: 'Yıkanması gereken uzuvlarda kuru yer kalmamasına dikkat edilir. Fark edildiğinde o bölge yıkanmalı ve abdest sakin şekilde tamamlanmalıdır.'
      },
      {
        question: 'Abdestin bozulduğunu nasıl anlarım?',
        answer: 'Tuvalet ihtiyacı, yellenme, derin uyku gibi durumlar abdesti bozar. Şüphe yerine açık ve bilinen durumlara göre hareket etmek daha sağlıklıdır.'
      }
    ]
  },
  'namazda-okunan-dualar': {
    title: 'Namazda Okunan Dualar ve Kısa Anlamları',
    description: 'Namazda okunan temel dua ve tesbihleri, hangi bölümde okunduklarını ve öğrenmeye nereden başlanacağını açıklayan sade rehber.',
    category: 'İbadet',
    readTime: '9 dk okuma',
    image: '/images/articles/dualar-cover.png',
    imageAlt: 'Namaz dualarını çalışmak için sakin bir okuma masası',
    toc: [
      { label: 'Önce hangi dualar öğrenilir?', href: '#once-hangi-dualar-ogrenilir' },
      { label: 'Rükû ve secde tesbihleri', href: '#ruku-ve-secde-tesbihleri' },
      { label: 'Oturuş duaları', href: '#oturus-dualari' },
      { label: 'Ezberi kalıcı hale getirmek', href: '#ezberi-kalici-hale-getirmek' }
    ],
    sections: [
      {
        id: 'once-hangi-dualar-ogrenilir',
        title: 'Önce hangi dualar öğrenilir?',
        paragraphs: ['Namaza yeni başlayan biri için ilk hedef, namazın akışını taşıyan temel sure ve duaları öğrenmektir.'],
        steps: {
          eyebrow: 'Başlangıç sırası',
          title: 'Duaları namazın akışına göre öğren',
          description: 'Bu sıra, ezberi ibadetin içinde doğal bir yere yerleştirir.',
          items: [
            { title: 'Fatiha suresi', body: 'Namazın her rekâtında okunduğu için önce sağlamlaştırılır.' },
            { title: 'Kısa bir sure', body: 'İhlas suresi gibi kısa bir sureyle başlamak kolaylaştırır.' },
            { title: 'Rükû ve secde tesbihleri', body: 'Hareketlerle birlikte tekrar edildiği için alışkanlık olur.' },
            { title: 'Oturuş duaları', body: 'Ettehiyyatü, Salli, Barik ve Rabbena duaları aşamalı öğrenilir.' }
          ]
        }
      },
      {
        id: 'ruku-ve-secde-tesbihleri',
        title: 'Rükû ve secde tesbihleri',
        paragraphs: ['Rükûda "Sübhane Rabbiyel Azîm", secdede "Sübhane Rabbiyel A’lâ" denir. Bu kısa tesbihler hareketin ruhunu güçlendirir.'],
        callout: {
          eyebrow: 'Anlamla öğren',
          title: 'Tesbihler sadece ezber değildir',
          body: 'Rükûda yüceltme, secdede teslimiyet bilinci daha belirgin hale gelir.'
        }
      },
      {
        id: 'oturus-dualari',
        title: 'Oturuş duaları',
        paragraphs: ['Oturuş duaları uzun görünebilir; fakat küçük bölümlere ayrıldığında daha kolay yerleşir.']
      },
      {
        id: 'ezberi-kalici-hale-getirmek',
        title: 'Ezberi kalıcı hale getirmek',
        paragraphs: ['Ezber, kısa ve düzenli tekrarlarla güçlenir. Her gün birkaç dakikalık tekrar bile namazda daha güvenli okumaya yardımcı olur.']
      }
    ],
    faqs: [
      {
        question: 'Namaz dualarını ezberlemeden namaza başlayabilir miyim?',
        answer: 'Yeni öğrenen biri bildiği sure ve dualarla başlayabilir; eksiklerini düzenli şekilde tamamlamaya çalışır. En önemlisi öğrenmeyi ertelememek ve doğru sırayla ilerlemektir.'
      },
      {
        question: 'Önce anlamı mı telaffuzu mu öğrenmeliyim?',
        answer: 'İlk aşamada doğru telaffuz önemlidir. Ardından anlamı öğrenmek, duaların namazdaki yerini ve ruhunu daha iyi kavramaya yardımcı olur.'
      },
      {
        question: 'Ezber yaparken en pratik yöntem nedir?',
        answer: 'Duayı küçük parçalara ayırmak, her gün kısa tekrar yapmak ve öğrendiğin bölümü namazın ilgili yerinde okumak ezberi kalıcı hale getirir.'
      }
    ]
  },
  'kuran-okumaya-baslangic': {
    title: 'Kur’an Okumaya Başlangıç İçin Sakin Bir Yol',
    description: 'Kur’an okumaya başlamak isteyenler için harfler, telaffuz, düzenli tekrar ve anlamla bağ kurma üzerine temel bir öğrenme planı.',
    category: 'Kur’an',
    readTime: '7 dk okuma',
    image: '/images/articles/quran-cover.png',
    imageAlt: 'Kur’an okumaya başlamak için sakin bir öğrenme alanı',
    toc: [
      { label: 'İlk hedef', href: '#ilk-hedef' },
      { label: 'Günlük çalışma düzeni', href: '#gunluk-calisma-duzeni' },
      { label: 'Telaffuzu sağlamlaştırmak', href: '#telaffuzu-saglamlastirmak' },
      { label: 'Anlamla bağ kurmak', href: '#anlamla-bag-kurmak' }
    ],
    sections: [
      {
        id: 'ilk-hedef',
        title: 'İlk hedef',
        paragraphs: ['Kur’an okumaya başlayan biri için ilk hedef hızlı okumak değildir. Harfleri doğru tanımak, mahreçlere dikkat etmek ve acele etmeden ilerlemek daha önemlidir.'],
        callout: {
          eyebrow: 'Öğrenme ilkesi',
          title: 'Hız değil doğruluk önce gelir',
          body: 'Harfi doğru görmek, sesi doğru çıkarmak ve kısa tekrarlarla pekiştirmek daha kalıcı bir başlangıç sağlar.'
        }
      },
      {
        id: 'gunluk-calisma-duzeni',
        title: 'Günlük çalışma düzeni',
        paragraphs: ['Kısa ama düzenli çalışma, uzun ve düzensiz çalışmadan daha etkilidir.'],
        steps: {
          eyebrow: 'Günlük akış',
          title: 'On beş dakikalık sade çalışma',
          description: 'Bu akış, yeni başlayan kişinin yorulmadan ilerlemesine yardımcı olur.',
          items: [
            { title: 'Harfleri tekrar et', body: 'Benzer sesleri karıştırmamaya dikkat et.' },
            { title: 'Kısa heceler oku', body: 'Harfleri harekelerle birlikte çalış.' },
            { title: 'Kısa ayetlerle pratik yap', body: 'Uzun bölümlere geçmeden önce akıcılığı güçlendir.' },
            { title: 'Zorlandığın sesi ayır', body: 'Hata yaptığın harfi ayrıca çalış.' }
          ]
        }
      },
      {
        id: 'telaffuzu-saglamlastirmak',
        title: 'Telaffuzu sağlamlaştırmak',
        paragraphs: ['Telaffuz öğrenilirken güvenilir bir hocadan veya sağlam bir kayıttan destek almak önemlidir.']
      },
      {
        id: 'anlamla-bag-kurmak',
        title: 'Anlamla bağ kurmak',
        paragraphs: ['Kısa surelerin mealini okumak, kişinin okuduğu ayetlerle bağ kurmasını kolaylaştırır.']
      }
    ],
    faqs: [
      {
        question: 'Kur’an okumayı öğrenirken hızlı okumak önemli mi?',
        answer: 'Başlangıçta hız değil doğruluk önemlidir. Harfleri doğru tanımak, mahreçlere dikkat etmek ve düzenli tekrar etmek daha sağlam bir temel kurar.'
      },
      {
        question: 'Her gün ne kadar çalışmak yeterli olur?',
        answer: 'Kısa ama düzenli çalışma daha faydalıdır. Her gün on beş dakikalık dikkatli bir tekrar bile harflerin ve telaffuzun yerleşmesine yardım eder.'
      },
      {
        question: 'Meal okumak öğrenme sürecine dahil edilmeli mi?',
        answer: 'Evet. Kısa surelerin mealini okumak, okunan ayetlerle anlam bağı kurmayı kolaylaştırır ve öğrenmeyi daha bilinçli hale getirir.'
      }
    ]
  },
  'hadis-okuma-adabi': {
    title: 'Hadis Okuma Adabı: Nereden ve Nasıl Başlanır?',
    description: 'Hadis okumaya yeni başlayanlar için kaynak seçimi, bağlamı anlama, acele hüküm vermeme ve düzenli not alma üzerine giriş rehberi.',
    category: 'Hadis',
    readTime: '6 dk okuma',
    image: '/images/articles/hadis-cover.png',
    imageAlt: 'Hadis okumak için sakin bir çalışma masası',
    toc: [
      { label: 'Güvenilir kaynak', href: '#guvenilir-kaynak' },
      { label: 'Bağlamı anlamak', href: '#baglami-anlamak' },
      { label: 'Not alarak okumak', href: '#not-alarak-okumak' },
      { label: 'Sakin bir okuma planı', href: '#sakin-bir-okuma-plani' }
    ],
    sections: [
      {
        id: 'guvenilir-kaynak',
        title: 'Güvenilir kaynak',
        paragraphs: ['Hadis okumaya başlarken güvenilir ve açıklamalı kaynaklar tercih edilmelidir. Yeni başlayan biri için yalnızca metni görmek çoğu zaman yeterli olmaz.'],
        callout: {
          eyebrow: 'Kaynak seçimi',
          title: 'Açıklamalı eserlerle başla',
          body: 'İlk aşamada kısa seçkiler ve güvenilir şerhler daha sağlıklı bir zemin sunar.'
        }
      },
      {
        id: 'baglami-anlamak',
        title: 'Bağlamı anlamak',
        paragraphs: ['Hadisler Kur’an, sünnetin bütünü ve İslam ilim geleneği içinde anlaşılır. Tek bir hadisten acele hüküm çıkarmak yerine güvenilir bir rehberle ilerlemek daha dengeli bir yoldur.']
      },
      {
        id: 'not-alarak-okumak',
        title: 'Not alarak okumak',
        paragraphs: ['Not almak, hadisi daha dikkatli okumaya yardım eder. Amaç metnin ana fikrini ve günlük hayata bakan yönünü yakalamaktır.'],
        steps: {
          eyebrow: 'Okuma defteri',
          title: 'Her hadis için dört kısa not tut',
          description: 'Bu sorular, okumanın dağılmasını önler.',
          items: [
            { title: 'Ana konu', body: 'Hadis hangi konuya veya davranışa temas ediyor?' },
            { title: 'Öğrettiği ilke', body: 'Hangi ahlaki veya ibadi hassasiyeti güçlendiriyor?' },
            { title: 'Günlük karşılığı', body: 'Bu anlam bugün hangi davranışta uygulanabilir?' },
            { title: 'Açık kalan nokta', body: 'Anlamadığın kavram varsa ayrıca araştırmak üzere not et.' }
          ]
        }
      },
      {
        id: 'sakin-bir-okuma-plani',
        title: 'Sakin bir okuma planı',
        paragraphs: ['Hadis okumak bilgi toplamak kadar edep öğrenmektir. Metne saygı, anlamaya sabır ve uygulamaya niyet birlikte yürür.']
      }
    ],
    faqs: [
      {
        question: 'Hadis okumaya hangi kaynakla başlanmalı?',
        answer: 'Yeni başlayanlar açıklamalı, güvenilir ve kısa seçkilerle başlamalıdır. Sadece metni okumak yerine hadisin bağlamını gösteren kaynaklar tercih edilmelidir.'
      },
      {
        question: 'Tek bir hadisten hemen hüküm çıkarılır mı?',
        answer: 'Acele hüküm çıkarmak doğru değildir. Hadisler Kur’an, sünnetin bütünü ve ilim geleneği içinde anlaşılır; bu yüzden güvenilir açıklamalarla ilerlemek gerekir.'
      },
      {
        question: 'Hadis okurken nasıl not tutulmalı?',
        answer: 'Hadisin ana konusu, öğrettiği ahlaki ilke, günlük hayattaki karşılığı ve anlaşılmayan kavramlar kısa notlarla kaydedilebilir.'
      }
    ]
  }
}

const article = computed(() => articles[props.slug])
</script>
