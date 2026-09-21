export type GuideImage = { src: string; alt: string; caption: string }
export type GuideRecitation = { title?: string; arabic: string; latin?: string; meaning: string }
export type GuideStep = {
  title: string
  body: string
  detail?: string
  attention?: string
  image?: GuideImage
  recitations?: GuideRecitation[]
}
export type GuideSection = {
  id: string
  title: string
  paragraphs: string[]
  image?: GuideImage
  callout?: { eyebrow: string; title: string; body: string }
  steps?: { eyebrow?: string; title: string; description?: string; items: GuideStep[] }
  links?: Array<{ label: string; href: string }>
}
export type ArticleGuide = {
  title: string
  description: string
  category: string
  readTime: string
  order: number
  image: string
  imageAlt: string
  scope: string
  sections: GuideSection[]
  faqs: Array<{ question: string; answer: string }>
}

const studyImage: GuideImage = {
  src: '/images/articles/study-desk.png',
  alt: 'Boş çalışma defteri, kalem, kulaklık ve kapalı kitap bulunan öğrenme masası',
  caption: 'Dinleme, tekrar ve not alma için sade bir çalışma alanı. Kitap ve defter temsildir; görselde dinî metin yer almaz.'
}

export const guidePrayers = {
  subhaneke: {
    title: 'Sübhaneke',
    arabic: 'سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ',
    latin: 'Sübhânekellâhümme ve bi-hamdik. Ve tebârekesmük. Ve teâlâ ceddük. Ve lâ ilâhe gayrük.',
    meaning: 'Allah’ım! Seni her türlü eksiklikten uzak tutar, sana hamd ederim. Adın mübarek, şanın yücedir. Senden başka ilah yoktur.'
  },
  ruku: { title: 'Rükû tesbihi', arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ', latin: 'Sübhâne rabbiye’l-azîm.', meaning: 'Yüce Rabbimi her türlü eksiklikten uzak tutarım.' },
  rising: { title: 'Rükûdan doğrulurken', arabic: 'سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ', latin: 'Semiallâhü limen hamideh. Rabbenâ leke’l-hamd.', meaning: 'Allah, kendisine hamd edeni işitir. Rabbimiz! Hamd sanadır.' },
  sajdah: { title: 'Secde tesbihi', arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', latin: 'Sübhâne rabbiye’l-a‘lâ.', meaning: 'En yüce Rabbimi her türlü eksiklikten uzak tutarım.' },
  tashahhud: {
    title: 'Ettehiyyatü',
    arabic: 'التَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    latin: 'Ettehiyyâtü lillâhi ve’s-salavâtü ve’t-tayyibât. Esselâmü aleyke eyyühe’n-nebiyyü ve rahmetullâhi ve berekâtüh. Esselâmü aleynâ ve alâ ibâdillâhi’s-sâlihîn. Eşhedü en lâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve resûlüh.',
    meaning: 'Bütün hürmetler, ibadetler ve güzel sözler Allah içindir. Ey Peygamber! Allah’ın selamı, rahmeti ve bereketleri senin üzerine olsun. Selam bize ve Allah’ın salih kullarına olsun. Allah’tan başka ilah olmadığına ve Muhammed’in O’nun kulu ve elçisi olduğuna şahitlik ederim.'
  },
  salli: {
    title: 'Allahümme Salli',
    arabic: 'اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    latin: 'Allâhümme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.',
    meaning: 'Allah’ım! İbrahim’e ve ailesine rahmet ettiğin gibi Muhammed’e ve ailesine de rahmet et. Şüphesiz sen övgüye layık ve şanı yüce olansın.'
  },
  barik: {
    title: 'Allahümme Bârik',
    arabic: 'اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    latin: 'Allâhümme bârik alâ Muhammedin ve alâ âli Muhammed. Kemâ bârekte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.',
    meaning: 'Allah’ım! İbrahim’e ve ailesine bereket verdiğin gibi Muhammed’e ve ailesine de bereket ver. Şüphesiz sen övgüye layık ve şanı yüce olansın.'
  },
  rabbena: {
    title: 'Rabbenâ duaları',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    latin: 'Rabbenâ âtinâ fi’d-dünyâ haseneten ve fi’l-âhireti haseneten ve kınâ azâbe’n-nâr. Rabbenağfir lî ve li-vâlideyye ve li’l-mü’minîne yevme yekûmü’l-hisâb.',
    meaning: 'Rabbimiz! Bize dünyada da ahirette de iyilik ver; bizi ateş azabından koru. Rabbimiz! Hesabın görüleceği gün beni, anne babamı ve müminleri bağışla.'
  },
  salam: { title: 'Selam', arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ', latin: 'Esselâmü aleyküm ve rahmetullâh.', meaning: 'Allah’ın selamı ve rahmeti üzerinize olsun.' }
} satisfies Record<string, GuideRecitation>

export const articleGuides: Record<string, ArticleGuide> = {
  'abdest-nasil-alinir': {
    title: 'Abdest Nasıl Alınır? Adım Adım Temizlik Rehberi',
    description: 'Ağza su vermekten dirsek ve ayak bileklerine kadar: abdestin her adımını uygulama ayrıntıları, görseller ve dikkat noktalarıyla öğren.',
    category: 'İbadet', readTime: '15 dk okuma', order: 2,
    image: '/images/articles/wudu-cover.png', imageAlt: 'Abdest için temiz su ve hazırlık alanı',
    scope: 'Bu rehber, Hanefî mezhebine göre abdestin farzlarını, sünnetlerini ve günlük hayatta karşılaşılan yara, sargı, sürekli özür, şüphe ve su kullanamama durumlarını birlikte anlatır. Mezhepler arasında niyet, sıra, mesh miktarı ve abdesti bozan hâller konusunda farklılıklar bulunduğu ayrıca belirtilmiştir.',
    sections: [
      {
        id: 'abdestin-anlami', title: 'Başlamadan önce hazırlan',
        paragraphs: [
          'Abdest, bazı ibadetleri yapabilmek için dirseklerle beraber el ve kolların, yüzün ve aşık kemikleriyle beraber ayakların yıkanması ve başın mesh edilmesinden ibaret hususi bir temizliktir. Kur’an’da şöyle buyrulur: “Ey iman edenler! Namaza kalktığınızda yüzlerinizi, dirseklere kadar kollarınızı yıkayın, başınızı mesh edin ve aşık kemikleriyle beraber ayaklarınızı yıkayın… Eğer su bulamazsanız temiz toprakla teyemmüm edin.” (el-Mâide, 5/6)',
          'Hz. Peygamber (s.a.s.) abdesti fiilen göstermiş; abdestsiz kılınan namazın kabul edilmeyeceğini bildirmiştir (İbn Mâce, Tahâret, 47 [419]; Buhârî, Vudû’, 2 [135]; Müslim, Tahâret, 2 [225]). Temiz ve temizleyici su hazırla; musluğu kontrollü aç. Kollarını dirseğin üzerini açık bırakacak kadar sıva. Ayaklarını yıkarken kaymayacağın bir konum seç.',
          'Tuvalet ihtiyacın varsa önce onu gider ve gerekli temizliği yap. Oje, su geçirmeyen boya veya yapıştırıcı gibi suyun deriye ve tırnağa ulaşmasını engelleyen tabakaları gider. Yüzük sıkıysa altına su ulaşmasını sağla. Sırf renk bırakan iz ile suyu engelleyen tabaka aynı şey değildir.'
        ],
        callout: { eyebrow: 'Yıkamak ve mesh etmek', title: 'Islak elle silmek, yıkamakla aynı değildir', body: 'Yıkanacak uzuvda suyun gerekli yüzeye ulaşması ve akması gerekir. Başın meshinde ise ıslak elin başa sürülmesi yeterlidir; başı musluğun altına sokmak gerekmez.' }
      },
      {
        id: 'abdestin-sirasi', title: 'Abdesti adım adım al',
        paragraphs: ['Farzları, sünnetleri ve adabıyla abdest; niyet ve besmeleyle başlayıp eller, ağız, burun, yüz, dirseklerle beraber kollar, baş meshi, kulaklar ve aşık kemikleriyle beraber ayaklar sırasıyla tamamlanarak alınır. Yıkanan uzuvlarda üç tekrar sünnettir; her yıkamada bütün bölgeye su ulaşmalıdır. Baş ve kulak meshi bir kez yapılır (Buhârî, Vudû’, 22-24 [157-159]; Müslim, Tahâret, 3-6 [226-227]).'],
        steps: { eyebrow: 'Uygulamalı rehber', title: 'Dokuz adımda abdest', description: 'Önce nasıl yapıldığını oku, ardından dikkat notuyla kontrol et.', items: [
          { title: 'Niyet et ve besmele çek', body: 'Abdest almaya kalben niyet et. “Bismillâhirrahmânirrahîm” diyerek başla. Niyet için uzun bir cümleyi ezberlemek veya sesli söylemek şart değildir.', attention: 'Hanefî mezhebinde niyet ve besmele sünnettir; niyetin hükmü bütün mezheplerde aynı değildir.' },
          { title: 'Ellerini bileklerinle birlikte yıka', body: 'Önce iki elini bileklere kadar üç kez yıka. Avuçlarını, ellerinin üstünü ve parmak aralarını suyla temizle; parmaklarını birbirinin arasından geçir.', detail: 'Su tırnak çevresine ve varsa yüzüğün altına da ulaşsın. İlk aşamada ellerin yıkanması, ileride kollarla birlikte ellerin yeniden yıkanmasının yerini tutmaz.' },
          { title: 'Ağzına su al ve çalkala', body: 'Sağ avucuna bir miktar temiz su alıp ağzına götür. Suyu ağzının içinde dolaştırarak çalkala, sonra dışarı bırak. Her defasında yeni su alarak üç kez tekrarla.', detail: 'Amaç yalnız dudakları ıslatmak değil, ağız içini suyla çalkalamaktır. Suyu yutmak gerekmez; zorlayarak boğaza kadar götürme.', attention: 'Oruçluysan suyun boğazına kaçmamasına özellikle dikkat et; çalkalamayı abartma.', image: { src: '/images/articles/wudu-rinse-mouth.png', alt: 'Sağ avucundaki suyu ağız temizliği için dudaklarına götüren kişi', caption: 'Sağ avuca alınan su ağızda çalkalanıp dışarı bırakılır; içilmez.' } },
          { title: 'Burnuna su ver ve temizle', body: 'Sağ avucuna yeniden su al. Burun deliklerine hafifçe su çek, ardından sol elinle burnunu temizle. Her defasında temiz suyla üç kez uygula.', detail: 'Su, burnun içine ulaşsın; çok kuvvetli çekerek genze kaçırmaya çalışma. Bu adım yalnız burnun dışına su sürmek değildir.', attention: 'Oruçluyken burna su çekmede aşırıya gitme. Ameliyat veya yara varsa aşağıdaki özel durumlar notunu dikkate al.' },
          { title: 'Yüzünün tamamını yıka', body: 'Yüzünü üç kez yıka. Normal saç çizgisinden çenenin alt sınırına, bir kulağın önünden diğer kulağın önüne kadar yüz bölgesine su ulaştır.', detail: 'Burun kenarları, kaş çevresi ve dudakların dışı kuru kalmasın. Gözün içine su sokman gerekmez. Seyrek sakalda görünen deriye de su ulaşır; sık sakalın dışı yıkanır, parmakları sakal arasından geçirmek sünnettir.', attention: 'Yalnız yanaklara su çarpmak yeterli değildir; alın ve çene sınırını da yıka.' },
          { title: 'Kollarını dirsekler dâhil yıka', body: 'Sağ elinin parmak uçlarından başlayıp dirseğin tamamını içine alacak şekilde kolunu üç kez yıka. Ardından sol koluna aynı işlemi uygula.', detail: 'Kolunu hafifçe çevirerek iç ve dış yüzeye su ulaştır; diğer elinle dirsek çıkıntısı ve çevresini dolaş. Dirseği açıkta bırakmak için kolunu biraz yukarıdan sıvaman yeterlidir; omuza kadar yıkamak şart değildir.', attention: '“Dirseğe kadar” ifadesi, dirseğin hemen önünde durmak demek değildir. Dirseğin kendisi de yıkanır.', image: { src: '/images/articles/wudu-wash-elbow.png', alt: 'Kolunu dirseğin üzerindeki noktaya kadar sıvamış kişinin dirsek bölgesini yıkaması', caption: 'Yıkama sınırına dirsek de dâhildir; kolun iç ve dış tarafına su ulaştırılır.' } },
          { title: 'Başını ıslak elle mesh et', body: 'Elini temiz suyla ıslatıp başının üzerindeki saça veya baş derisine sür. Hanefî mezhebinde en az başın dörtte birinin mesh edilmesi farzdır; tamamını bir kez mesh etmek sünnettir.', detail: 'Tamamını mesh etmek için iki ıslak elini başının önünden arkaya doğru geçirip geri getir. Başın üzerinden sarkan saç uçlarını veya yalnız başörtüsünü silmek bu işlemin yerine geçmez.', image: { src: '/images/articles/wudu-wipe-head.png', alt: 'Islak ellerini başının üzerindeki saçlarına süren kişi', caption: 'Mesh, ıslak elin başa temas etmesidir; saçı yıkamak veya su damlatmak gerekmez.' } },
          { title: 'Kulaklarını mesh et', body: 'Islak işaret parmaklarınla kulak kepçelerinin iç kıvrımlarını, başparmaklarınla kulakların arkasını bir kez sil.', detail: 'Parmağını kulak kanalının derinine sokma. Kulak meshi sünnettir; baş meshinden ayrı bir yıkama aşaması değildir.', attention: 'Bazı Hanefî anlatımlarda ense meshi de yer alır; bunu abdestin farzı veya boğazı yıkama zorunluluğu gibi düşünme.' },
          { title: 'Ayaklarını bilek kemikleriyle birlikte yıka', body: 'Önce sağ, sonra sol ayağını üçer kez yıka. Parmak araları, ayak üstü, taban, topuk arkası ve ayak bileğinin iki yanındaki çıkıntılı kemikler suyla ıslansın.', detail: 'Parmak aralarına elinle su ulaştır. “Topuklarla birlikte” yalnız ayağın arka kısmı demek değildir; bileğin iki yanındaki aşık kemikleri de sınırın içindedir.', attention: 'Musluğa uzanırken dengeni kaybetme; güvenli bir oturuş seç. Ayağın yalnız üstünü ıslatıp tabanını kuru bırakma.', image: { src: '/images/articles/wudu-wash-feet.png', alt: 'Alçak bir muslukta ayak bileği ve ayağını yıkayan kişi', caption: 'Parmak araları, taban, topuk arkası ve iki yandaki bilek kemikleri birlikte yıkanır.' } }
        ] }
      },
      {
        id: 'farzlar-ve-dikkat-noktalari', title: 'Farzları ve sünnetleri birbirinden ayır',
        paragraphs: ['Hanefî mezhebinde dört farz: yüzü yıkamak; elleri ve kolları dirseklerle yıkamak; başın en az dörtte birini mesh etmek; ayakları aşık kemikleriyle birlikte yıkamaktır. Yıkanacak bölgeyi tam olarak bir kez yıkamak farzı karşılar; üçe tamamlamak sünnettir.', 'Ağza ve burna su vermek, sağdan başlamak ve rehberdeki sırayı izlemek Hanefî abdestinin sünnetlerindendir. Gusülde ağız ve burunla ilgili hüküm farklıdır. Şâfiî mezhebinde niyet ve sıra da farzlar arasındadır; bir mezhebin kısa listesini herkes için tek ölçü gibi kullanma.'],
        callout: { eyebrow: 'Son kontrol', title: 'Kuru bölgeyi kontrol et; tekrara saplanma', body: 'Parmak araları, dirsek ve bilek kemikleri sık gözden kaçar. Gerçekten kuru kaldığını gördüğün yeri yıka. Eksik kaldığına dair bir belirti yokken sürekli başa dönmek ve üçten fazla yıkamak gerekmez.' }
      },
      {
        id: 'ozel-durumlar', title: 'Abdesti bozan durumlar ve istisnalar',
        paragraphs: ['Abdestin bozulması, bir uzvu kuru bırakmak ve sağlık sebebiyle su kullanamamak aynı mesele değildir. Aşağıdaki özet, Hanefî uygulamadaki yaygın durumları birbirinden ayırır. Sağlık bakımından suyun zarar vereceği söylenmişse tedaviye aykırı davranılmaz.'],
        steps: { eyebrow: 'Günlük durumlar', title: 'Hangi durumda ne yapılır?', items: [
          { title: 'Abdesti bozan hâller', body: 'Ön veya arka yoldan çıkan şeyler; bayılma, sarhoşluk ve aklı örten durumlar abdesti bozar. Hanefî mezhebinde çıktığı yerin dışına yayılan kan veya irin ile ağız dolusu kusma da abdesti bozar.', detail: 'Vücudun kontrolünü kaybettiren uyku abdesti bozar. Makadı yere sağlam yerleşmiş hâlde hafif uyuklama aynı hükümde değildir. Namaz içinde kişinin kendisinin işiteceği kadar kahkaha Hanefî uygulamada hem namazı hem abdesti bozar.', attention: 'Kadın ve erkeğin ten temasının tek başına abdesti bozup bozmaması mezheplere göre farklıdır; Hanefî mezhebinde sırf temas abdesti bozmaz.' },
          { title: 'Yalnız şüphe varsa', body: 'Abdest aldığını kesin bilen kişi, bozulduğundan yalnız şüphe etmekle abdestsiz sayılmaz. Kesin bilgi şüpheyle ortadan kalkmaz.', detail: 'Tersi de geçerlidir: Abdestsiz olduğunu kesin bilen kişi, abdest alıp almadığından şüphe ediyorsa abdest alır. Vesvese sebebiyle açık bir belirti olmadan işlemi sürekli baştan tekrarlama.' },
          { title: 'Yara, sargı veya alçı varsa', body: 'Yıkamak yaraya zarar verecekse açık yaranın üzeri ıslak elle bir kez mesh edilir. Mesh de zarar veriyorsa o bölge bırakılır. Yara sargılı veya alçılıysa ve çıkarmak zarar verecekse sargının üzeri bir kez mesh edilir.', detail: 'Sargının abdestliyken sarılmış olması şart değildir ve sargı meshi için ayrıca süre sınırı yoktur. Sargı gereksiz yere sağlam bölgeyi aşmamalıdır. Abdest uzuvlarının çoğu sargı veya yara sebebiyle yıkanamıyorsa teyemmüme geçilir.' },
          { title: 'Sürekli özür hâli varsa', body: 'Kanama, idrar sızıntısı veya benzeri durum bir namaz vakti boyunca abdest alıp farz namazı kılacak kadar kesilmiyorsa kişi özür sahibi sayılır. Sonraki her vakitte özrün en az bir kez görülmesi hâlin devamı için yeterlidir.', detail: 'Hanefî uygulamada özür sahibi her namaz vakti girdikten sonra abdest alır; o vakit içinde devam eden özür bu abdesti bozmaz. Vaktin çıkması veya başka bir abdest bozucu durum abdesti sona erdirir. Özür bir tam namaz vakti boyunca hiç görülmezse özür hâli biter.' },
          { title: 'Su yoksa veya su zarar veriyorsa', body: 'Su bulunamadığında ya da kullanılması hastalığı artıracak, iyileşmeyi geciktirecek veya ciddi zarar verecekse teyemmüm abdestin yerine geçer.', detail: 'Hanefî uygulamada niyet edilir; temiz toprak veya toprak cinsinden temiz bir yüzeye eller vurulup yüz mesh edilir, ikinci vuruşla kollar dirseklerle beraber mesh edilir. Suyun bulunması veya mazeretin sona ermesi teyemmüm hükmünü sona erdirir.' }
        ] }
      }
    ],
    faqs: [
      { question: 'Ağza aldığım suyu yutmalı mıyım?', answer: 'Hayır. Su ağız içinde çalkalanır ve dışarı bırakılır. Oruçlu kişi suyun boğazına kaçmamasına dikkat eder.' },
      { question: 'Dirseği biraz ıslatmak yeterli mi?', answer: 'Dirseğin tamamına, kolun iç ve dış yüzüne su ulaşmalıdır. Yalnız dirseğin ucuna dokunmak veya kolu bilekten yıkamak yeterli değildir.' },
      { question: 'Üç kez yıkamayı unutursam?', answer: 'Hanefî mezhebinde yıkanması gereken bölgeyi tamamen bir kez yıkamak farzı karşılar; üç kez yıkamak sünnettir. Kuru bir alan bırakmak ise tekrar sayısından ayrı bir meseledir.' },
      { question: 'Abdestim bozuldu mu diye yalnızca şüphe ettim; yenilemeli miyim?', answer: 'Abdest aldığını kesin biliyorsan, yalnız şüpheyle abdest bozulmuş sayılmaz. Açık bir sebep olmadan sürekli abdest yenilemek gerekmez.' }
    ]
  },
  'namaz-nasil-kilinir': {
    title: 'Namaz Nasıl Kılınır? Yeni Başlayanlar İçin Sıralı Rehber',
    description: 'Hazırlıktan selama iki rekâtlık bir namazın akışı; kıyam, rükû, doğrulma, iki secde ve oturuşun uygulama ayrıntıları.',
    category: 'İbadet', readTime: '14 dk okuma', order: 1,
    image: '/images/articles/prayer-cover.png', imageAlt: 'Namaza hazırlanmak için sakin bir mescid içi',
    scope: 'Örnek, Hanefî mezhebine göre tek başına kılınan sabah namazının iki rekât sünnetidir. Cemaatle namazın kıraat hükümleri ve üç-dört rekâtlı namazların oturuşları ayrıca öğrenilir. Bu akışı her namaza değişmeden uygulama.',
    sections: [
      { id: 'namaza-baslamadan-once', title: 'Namaza başlamadan önce', paragraphs: ['Vaktin girdiğini kontrol et. Abdestli ol; beden, elbise ve namaz kılacağın yerde namaza engel pislik bulunmasın. Örtünme şartına uygun giyin ve kıbleye yönel. Seccade kullanmak şart değildir; temiz bir yer yeterlidir.', 'Hangi namazı kılacağını bilerek niyet et. Bu örnekte sabah namazının iki rekât sünnetini kılacaksın. Kelimeleri yalnız zihninden geçirmek kıraat değildir; okurken dil ve dudaklarınla harfleri söyle. Başkalarını rahatsız edecek kadar sesi yükseltme.'], links: [{ label: 'Abdest rehberine geç', href: '/articles/abdest-nasil-alinir' }] },
      { id: 'bir-rekatin-akisi', title: 'İlk rekâtın bütün geçişleri', paragraphs: ['Bir rekâtta bir rükû ve iki secde vardır. Rükûdan sonra doğrulmayı, iki secde arasındaki oturuşu atlama. Her duruşta bedenin yerleşsin; hareketleri aralıksız bir eğilip kalkmaya dönüştürme.'], steps: { eyebrow: 'Uygulama sırası', title: 'İlk rekâtı tamamla', items: [
        { title: 'İftitah tekbiri', body: 'Ayakta kıbleye dönükken ellerini kaldırıp “Allâhü ekber” de ve ellerini bağla. Hanefî uygulamada erkekler ellerini kulak hizasına kaldırıp göbek altında, kadınlar omuz hizasına kaldırıp göğüs üzerinde bağlar. Duruş ayrıntılarında mezhep farkları bulunur.' },
        { title: 'Kıyam ve kıraat', body: 'Sübhaneke’yi oku. Eûzü-besmele ile Fâtiha’ya başla, sonunda “Âmin” de; ardından bildiğin kısa bir sûreyi, örneğin İhlâs’ı oku.', detail: 'Arapça metinleri ve anlamlarını aşağıdaki dua rehberinde bulabilirsin. Latin harfli yazım öğrenme desteğidir, doğru telaffuzun yerine geçmez.', recitations: [guidePrayers.subhaneke] },
        { title: 'Rükû', body: '“Allâhü ekber” diyerek eğil, ellerini dizlerine koy. Bedenin duruşa yerleşsin. Erkekler sırtını düz tutar; kadınların Hanefî uygulamasında daha toplu eğilme anlatılır. Rükû tesbihini üç kez söyle.', recitations: [guidePrayers.ruku] },
        { title: 'Rükûdan tamamen doğrul', body: 'Tek başına kılarken “Semiallâhü limen hamideh” diyerek ayağa doğrul. Dik durunca “Rabbenâ leke’l-hamd” de. Tam doğrulmadan secdeye geçme.', recitations: [guidePrayers.rising] },
        { title: 'Birinci secde', body: '“Allâhü ekber” diyerek secdeye in. Alın ve burun, iki el, iki diz ve ayak parmakları yere temas etsin. Ayak parmaklarını mümkün olduğunca kıbleye yönelt; iki ayağı da yerden kaldırma. Secde tesbihini üç kez söyle.', recitations: [guidePrayers.sajdah] },
        { title: 'İki secde arasında otur', body: '“Allâhü ekber” diyerek başını kaldırıp otur. Bedenin yerleşene kadar dur; hemen ikinci secdeye düşer gibi geçme. Hanefî uygulamada erkek sol ayağı üzerine oturup sağ ayağını diker; kadın ayaklarını sağ tarafa alarak oturur.' },
        { title: 'İkinci secde', body: 'Tekrar “Allâhü ekber” diyerek secde et; secde tesbihini üç kez söyle. Böylece ilk rekât tamamlanır. “Allâhü ekber” diyerek ikinci rekât için ayağa kalk.' }
      ] } },
      { id: 'oturus-ve-selam', title: 'İkinci rekât, son oturuş ve selam', paragraphs: ['İkinci rekâtta yeniden Sübhaneke ve eûzü okumadan besmele, Fâtiha ve kısa bir sûre oku. Rükû, tam doğrulma, birinci secde, ara oturuş ve ikinci secdeyi aynı sırayla yap.', 'Bu kez ikinci secdeden sonra ayağa kalkma; son oturuşa geç. Ettehiyyatü, Allahümme Salli, Allahümme Bârik ve Rabbenâ dualarını oku. Sonra başını sağa çevirerek, ardından sola çevirerek “Esselâmü aleyküm ve rahmetullâh” de.'], callout: { eyebrow: 'Rekât sayısı önemlidir', title: 'İlk oturuş ile son oturuş aynı değildir', body: 'Üç ve dört rekâtlı farz namazların ikinci rekâtındaki ilk oturuşta Ettehiyyatü okunup kalkılır; son oturuş duası sırası doğrudan uygulanmaz. Sünnet namazların kendi ayrıntıları da vardır.' }, links: [{ label: 'Dua metinlerini Arapça ve anlamlarıyla aç', href: '/articles/namazda-okunan-dualar' }, { label: 'Vakitlere göre namaz rehberine geç', href: '/namaz' }] },
      { id: 'sehiv-secdesi-ve-hatalar', title: 'Namazda hata ve sehiv secdesi', paragraphs: ['Her eksiklik sehiv secdesiyle tamamlanmaz. Hanefî uygulamada namazın bir farzı veya rüknü eksik kalırsa sehiv secdesi onun yerini tutmaz; eksik rükün namaz içinde tamamlanmalı, tamamlanmadan namaz biterse namaz yeniden kılınmalıdır. Bir vacip unutularak terk edilir, geciktirilir veya değiştirilirse sehiv secdesi gerekir. Vacibi bilerek terk etmek sehivle giderilmez; namazın iadesi gerekir. Sünnetin terk edilmesi ise namazı bozmaz ve sehiv secdesi gerektirmez.', 'İlk oturuşu unutmak, Fâtiha’yı veya gerekli yerde zamm-ı sûreyi unutmak; rükûdan sonra tam doğrulmayı ya da iki secde arasındaki oturuşu unutmak Hanefî mezhebinde sehiv secdesini gerektiren yaygın örneklerdir. Aynı hareketleri bilerek terk etmekle unutmak aynı hükümde değildir.'], steps: { eyebrow: 'Uygulama', title: 'Sehiv secdesi nasıl yapılır?', items: [
        { title: 'Son oturuşta Ettehiyyatü’yü oku', body: 'Namazın son oturuşunda Ettehiyyatü’yü okuduktan sonra yalnız sağ tarafa bir kez selam ver.' },
        { title: 'İki secde yap', body: '“Allâhü ekber” diyerek secdeye git ve üç kez “Sübhâne rabbiye’l-a‘lâ” de. Otur, aynı şekilde ikinci secdeyi yap.', recitations: [guidePrayers.sajdah] },
        { title: 'Oturup duaları tamamla', body: 'İkinci secdeden sonra otur; Ettehiyyatü, Allahümme Salli, Allahümme Bârik ve Rabbenâ dualarını oku. Önce sağa, sonra sola selam ver.', recitations: [guidePrayers.tashahhud, guidePrayers.salli, guidePrayers.barik, guidePrayers.rabbena, guidePrayers.salam] }
      ] }, callout: { eyebrow: 'Sehiv unutulursa', title: 'Namazla bağ kesilmediyse hemen yapılır', body: 'Sehiv secdesini unutan kişi selamdan sonra konuşma, gülme, kıbleden göğsünü çevirme veya abdestin bozulması gibi namaza aykırı bir iş yapmadan hatırlarsa sehiv secdesini hemen yapar. Bu bağ kesildikten sonra sehiv secdesi yapılmaz; unutma sebebiyle namazı yeniden kılması gerekmez.' } },
      { id: 'namazi-bozan-durumlar', title: 'Namazı bozan başlıca durumlar', paragraphs: ['Namaz içinde bilerek konuşmak, yiyip içmek, abdestin bozulması, kıbleden göğsü çevirmek ve namazdan olmadığı açıkça görülecek kadar çok hareket etmek namazı bozar. Kişinin kendisinin işiteceği sesle gülmesi namazı bozar; rükû ve secdeli namazda kahkaha Hanefî mezhebinde abdesti de bozar.', 'Bir rüknü mazeretsiz terk etmek de namazı geçersiz kılar. Buna karşılık öksürmek, küçük ve gerekli bir hareket yapmak ya da bir sünneti unutmak otomatik olarak aynı sonucu doğurmaz. Hüküm, yapılan şeyin niteliğine ve kasıt bulunup bulunmamasına göre ayrılır.'], callout: { eyebrow: 'Kısa karar ölçüsü', title: 'Farz, vacip ve sünneti ayır', body: 'Farz/rükün eksikse sehiv yeterli değildir; vacip unutulmuşsa sehiv secdesi yapılır; sünnet unutulmuşsa namaz geçerlidir ve sehiv gerekmez.' } },
      { id: 'ogrenirken-takip-edilecek-yol', title: 'Öğrenirken kontrol et', paragraphs: ['Namaz dışında önce hareketleri sırayla prova et; ardından her hareketin yanına okunan ifadeyi ekle. Duruşunu ve kıraatini dinleterek telaffuz hatalarını düzelt. Çalışma planını ibadet içindeki eksikleri önemsiz saymak için kullanma.', 'Sağlık nedeniyle ayakta duramıyor, rükû veya secde yapamıyorsan kendini zorlamazsın. Ayakta durabilen ayakta başlar; gücü yetmeyen oturarak, buna da gücü yetmeyen başıyla ima ederek kılar. Gücün yettiği rükün yapılır; mazeret bulunmayan bir rükün terk edilmez.'], image: studyImage }
    ],
    faqs: [
      { question: 'Bir rekâtta kaç secde var?', answer: 'İki secde vardır. Aralarında bedenin yerleştiği kısa bir oturuş bulunur; bu oturuş ve ikinci secde atlanmaz.' },
      { question: 'Bu örnek cemaatle namaz için de aynen geçerli mi?', answer: 'Hayır. İmama uyanın okuması ve takibi ayrı hükümlere bağlıdır. Buradaki örnek Hanefî mezhebine göre tek başına kılınan iki rekât sünnettir.' },
      { question: 'Seccade zorunlu mu?', answer: 'Hayır; namaz kılınacak yerin temiz olması gerekir. Seccade bunu kolaylaştıran bir araçtır.' },
      { question: 'Bir farzı unuttuğumda sehiv secdesi yeterli mi?', answer: 'Hayır. Eksik kalan rükün namaz içinde tamamlanmalıdır; tamamlanmadan namaz biterse namaz yeniden kılınır. Sehiv secdesi, farzın yerine değil unutulan vacibin telafisine yöneliktir.' },
      { question: 'Sehiv secdesini selamdan sonra hatırlarsam ne olur?', answer: 'Konuşma, gülme, kıbleden dönme veya abdestin bozulması gibi namazla bağı kesen bir durum olmadıysa hemen yapılır. Bağ kesilmişse artık yapılmaz; unutma sebebiyle namaz tekrar edilmez.' }
    ]
  },
  'namazda-okunan-dualar': {
    title: 'Namazda Okunan Dualar: Arapça, Okunuş ve Anlam',
    description: 'Namazdaki temel dua ve tesbihleri nerede okundukları, Arapça metinleri, Latin harfli destekleri ve anlamlarıyla birlikte çalış.',
    category: 'İbadet', readTime: '14 dk okuma', order: 3,
    image: '/images/articles/prayer-duas-cover.png', imageAlt: 'Namaz dualarını çalışmak için açık defter ve sakin masa',
    scope: 'Bu sayfa Hanefî uygulamada sık öğretilen dua sırasını verir. Arapça metin, Latin harfli hatırlatma ve Türkçe anlam birlikte sunulur. Latin yazı Arapça sesleri tam karşılamadığı için asıl metin daima Arapçadır.',
    sections: [
      { id: 'once-hangi-dualar-ogrenilir', title: 'Önce hangi metinleri öğrenmelisin?', paragraphs: ['Önce Fâtiha sûresini doğru okumaya çalış; ardından kısa bir sûre, rükû ve secde tesbihleri, Ettehiyyatü, Salli-Bârik ve Rabbenâ dualarını sıraya koy. Bir günde hepsini ezberlemeye çalışma.', 'Metni yalnız gözle takip etmek kıraat pratiği değildir. Bir cümleyi dinle, bakarak oku, kaydı durdurup tekrar et ve son olarak bakmadan söyle. Hatanı fark etmek için sesini kaydedebilir veya bir öğreticiye dinletebilirsin.'], image: studyImage, links: [{ label: 'Vakitlere göre namaz akışını aç', href: '/namaz' }] },
      { id: 'ruku-ve-secde-tesbihleri', title: 'Hareketlerle birlikte okunan kısa ifadeler', paragraphs: ['İftitah tekbiri namaza girişte; rükû tesbihi eğilince; doğrulma duası ayağa kalkarken ve dik durunca; secde tesbihi ise her iki secdede okunur. Hareket ile ifadeyi eşleştirmek ezberi güçlendirir.'], steps: { eyebrow: 'Kısa metinler', title: 'Hangi bölümde ne okunur?', items: [
        { title: 'Sübhaneke — ilk rekâtın başında', body: 'İftitah tekbirinden sonra eller bağlanınca okunur. İkinci rekâtta tekrar edilmez.', recitations: [guidePrayers.subhaneke] },
        { title: 'Rükû ve doğrulma', body: 'Rükûda tesbih, doğrulurken ve dik durunca hamd ifadeleri okunur.', recitations: [guidePrayers.ruku, guidePrayers.rising] },
        { title: 'Her secdede', body: 'Bir rekâtın iki secdesinde de secde tesbihi söylenir.', recitations: [guidePrayers.sajdah] }
      ] } },
      { id: 'oturus-dualari', title: 'Oturuş dualarını eksiksiz çalış', paragraphs: ['Ettehiyyatü hem ilk hem son oturuşta okunur. Hanefî uygulamada üç ve dört rekâtlı farzların ilk oturuşunda Ettehiyyatü’den sonra kalkılır; son oturuşta Salli, Bârik ve dua eklenir. İki rekâtlı namazın tek oturuşu son oturuştur.'], steps: { eyebrow: 'Son oturuş', title: 'Ettehiyyatü’den selama', items: [
        { title: 'Ettehiyyatü', body: 'Oturunca önce bu dua okunur.', recitations: [guidePrayers.tashahhud] },
        { title: 'Allahümme Salli ve Bârik', body: 'Son oturuşta Ettehiyyatü’den sonra salavat duaları okunur.', recitations: [guidePrayers.salli, guidePrayers.barik] },
        { title: 'Rabbenâ ve selam', body: 'Duanın ardından önce sağa, sonra sola selam verilerek namaz tamamlanır.', recitations: [guidePrayers.rabbena, guidePrayers.salam] }
      ] } },
      { id: 'unutulan-kiraat', title: 'Bir dua veya kıraat unutulursa', paragraphs: ['Hanefî mezhebinde farz namazların ilk iki rekâtında, sünnet ve nafilelerin her rekâtında Fâtiha okumak vaciptir. Fâtiha’dan sonra bir sûre veya en az üç kısa âyet yahut buna denk uzun bir âyet eklemek de gerekli yerlerde vaciptir. Bunlardan biri unutulursa sehiv secdesi yapılır; bilerek terk edilirse namazın yeniden kılınması gerekir.', 'Sübhaneke, rükû ve secde tesbihleri gibi sünnet ifadelerin unutulması namazı bozmaz ve sehiv secdesi gerektirmez. Ettehiyyatü ve ilk oturuş gibi vaciplerin unutulması ise sehiv secdesi kapsamındadır.'], links: [{ label: 'Sehiv secdesinin uygulanışını aç', href: '/articles/namaz-nasil-kilinir#sehiv-secdesi-ve-hatalar' }] },
      { id: 'ezberi-kalici-hale-getirmek', title: 'Ezberi doğru ve kalıcı hâle getir', paragraphs: ['Uzun bir duayı anlamlı cümlelere ayır. Her parçayı beş-on kez dinleyip tekrar et; yeni parçayı eklerken öncekiyle birleştir. Ertesi gün bakmadan okuyup hatalı yeri yeniden çalış.', 'Ezberlediğin bir metni anlamıyla eşleştir. Harf ve hareke hatalarını Latin yazıdan tahmin ederek düzeltmeye çalışma; Arapça metni takip et ve ses kaydını asıl metinle karşılaştır.'], callout: { eyebrow: 'Telaffuz notu', title: 'Latin yazı nihai ölçü değildir', body: '“H”, “s” veya “z” ile gösterilen seslerin Arapçada farklı harfleri olabilir. Latin yazıyı geçici destek olarak kullan; asıl hedef Arapça metni görerek doğru seslendirmektir.' } }
    ],
    faqs: [
      { question: 'Duaların yalnız anlamını Türkçe söylemek namazdaki kıraatin yerine geçer mi?', answer: 'Bu sayfa ezber desteğidir; namazdaki kıraat ve dua hükümlerini değiştirmez. Türkçe anlamı öğrenmek bilinci artırır, fakat Arapça metnin yerine geçtiği varsayılmamalıdır.' },
      { question: 'İlk oturuşta Salli ve Bârik okunur mu?', answer: 'Hanefî mezhebinde üç ve dört rekâtlı farzların ilk oturuşunda Ettehiyyatü okunup kalkılır. Bazı sünnet namazlarda uygulama farklıdır; kılınan namazın özel akışına bakılmalıdır.' },
      { question: 'Telaffuzumu nasıl kontrol ederim?', answer: 'Arapça metni gözünle takip ederken örnek kıraati cümle cümle dinle; kendi sesini kaydedip harf, hareke ve uzatma bakımından karşılaştır. Latin harfli okunuşa tek başına dayanma.' }
    ]
  },
  'kuran-okumaya-baslangic': {
    title: 'Kur’an Okumaya Başlangıç: Harften Tecvide Bir Öğrenme Planı',
    description: 'Harfleri tanımaktan hareke, birleştirme, mahreç, durak ve tecvide uzanan uygulanabilir bir başlangıç planı.',
    category: 'Kur’an', readTime: '12 dk okuma', order: 4,
    image: '/images/articles/quran-reading-cover.png', imageAlt: 'Kur’an öğrenmeye hazırlanmış sade okuma masası',
    scope: 'Bu rehber harf, hareke, mahreç, birleştirme, durak ve temel tecvid sırasını açıklar. Latin harfli çevrim Kur’an metninin yerine geçmez; öğrenme Arapça asıl metin üzerinden yürütülür.',
    sections: [
      { id: 'ilk-hedef', title: 'İlk hedef: harfi sesiyle birlikte tanımak', paragraphs: ['Arap harfleri kelimenin başında, ortasında ve sonunda farklı biçimde görünebilir. Harfi yalnız adından değil bu biçimlerinden de tanı. Nokta sayısı ve konumu benzer harfleri ayırmada temel ipucudur.', 'Mahreç, sesin ağız ve boğazda çıktığı yerdir. Türkçede yakın bir ses bulmak faydalı olabilir ama yeterli değildir. Özellikle ح–ه, ص–س, ض–د, ط–ت, ظ–ز ve ق–ك gibi ayrımları dinleyip öğreticiye kontrol ettir.'], image: studyImage, callout: { eyebrow: 'Başlangıç ilkesi', title: 'Hızdan önce doğruluk', body: 'Bir satırı hızlı fakat sürekli yanlış okumak ilerleme değildir. Önce harfi, harekeyi ve sesi doğru eşleştir; akıcılık düzenli tekrarın ardından gelir.' } },
      { id: 'gunluk-calisma-duzeni', title: 'Günde yirmi dakikalık çalışma düzeni', paragraphs: ['Aynı gün içinde tanıma, dinleme ve okuma yap. Yalnız sayfa ilerletmek yerine önceki dersi kısa tekrarlarla koru.'], steps: { eyebrow: 'Günlük plan', title: 'Dört parçalı pratik', items: [
        { title: '5 dakika — eski dersi hatırla', body: 'Dünkü harf ve heceleri karışık sırada oku. Zorlandığın işaretleri ayrı bir listeye al.' },
        { title: '5 dakika — yeni sesi dinle', body: 'Yeni harf veya kuralın örnek kıraatini dinle; ağız hareketini gözlemle ve kısa tekrarlar yap.' },
        { title: '7 dakika — bakarak oku', body: 'Harfleri harekeleriyle birleştir. Üstün, esre, ötre; ardından cezm, şedde ve uzatma işaretlerini kademeli çalış.' },
        { title: '3 dakika — kendini kontrol et', body: 'Aynı satırı kaydedip örnek sesle karşılaştır. Ertesi günün ilk tekrarını belirle.' }
      ] } },
      { id: 'telaffuzu-saglamlastirmak', title: 'Heceden âyete geçerken nelere bakılır?', paragraphs: ['Önce iki ve üç harfli birleşimleri kesmeden oku. Med harflerinde sesi gerekli miktarda uzat; cezimde sesi kapat, şeddede harfi iki görevliymiş gibi doğru kuvvetle söyle. Tenvin ve sakin nûn, sakin mîm konularında ihfâ, izhar, idgam ve iklâb hükümleri sesin sonraki harfle ilişkisini belirler.', 'Mushaflardaki م zorunlu durmayı, لا durmamayı; ج durmanın ve geçmenin mümkün olduğunu, قلى durmanın, صلى geçmenin daha uygun olduğunu bildirir. Nefes kelimenin ortasında biterse kelime başından; anlam bağı bozulduysa uygun bir önceki yerden yeniden başlanır.'] },
      { id: 'mushaf-abdest-ve-latin-yazi', title: 'Mushaf, abdest ve Latin harfli yazım', paragraphs: ['Ezberden Kur’an okumak için abdest şart değildir; abdestli okumak edeptir. Basılı mushafa abdestsiz dokunulmaz ve mushaf abdestsiz taşınmaz. Telefon veya tabletteki Kur’an uygulaması mushafla aynı fiziksel hükümde değerlendirilmez; yine de ekrandaki âyetlere saygılı davranılır.', 'Kur’an, indirildiği Arapça lafızla okunur. Latin harfleri ع, ح, خ, ص, ض, ط, ظ, ق gibi sesleri ve hareke–uzatma ayrıntılarını eksiksiz gösteremez. Latin çevrim yalnız geçici hatırlatıcı olabilir; namaz kıraati ve Kur’an öğrenimi Arapça metne dayanır.'], callout: { eyebrow: 'Temel ayrım', title: 'Meal Kur’an’ın anlamını açıklar; kıraatin yerine geçmez', body: 'Meal okumak mesajı anlamaya yardım eder. Ancak Türkçe meal veya Latin harfli çevrim, Arapça Kur’an metninin kendisi değildir.' } },
      { id: 'anlamla-bag-kurmak', title: 'Okuma, dinleme ve anlamı bir arada sürdür', paragraphs: ['Kısa bir sûreyi önce yüzünden oku, sonra örnek bir kıraatten dinle; aynı bölümün mealini de oku. Meal, Arapça kıraatin yerine geçmez fakat okunan mesajla bağ kurmaya yardım eder.', 'Haftada bir gün yalnız kontrol yap: önceki sayfalardan rastgele satırlar oku, karıştırdığın harfleri say ve gelecek haftanın hedefini tek cümleyle yaz. “Daha çok sayfa” yerine “daha az hata” hedefi koy.'], callout: { eyebrow: 'Ses kontrolü', title: 'Kayıt tekrar sağlar; geri bildirim hatayı görünür kılar', body: 'Kendi sesini örnek kıraatle karşılaştır. Dil, dudak ve boğaz hareketindeki ince farkları düzenli olarak kontrol ettir; yanlış yerleşen sesi çok tekrar ederek kalıcı hâle getirme.' } }
    ],
    faqs: [
      { question: 'Latin harflerle Kur’an okumayı öğrenebilir miyim?', answer: 'Latin çevrim bazı sesleri hatırlatabilir ama Arapça harfleri ve mahreçleri tam karşılamaz. Geçici destek olarak kullanılabilir; öğrenme Arapça metin ve dinleme üzerinden sürdürülmelidir.' },
      { question: 'Tecvide ne zaman başlamalıyım?', answer: 'Harfleri ve temel harekeleri tanıyıp basit kelimeleri birleştirebildiğinde temel tecvid kurallarına geçebilirsin. Mahreç çalışması ise en baştan itibaren sürmelidir.' },
      { question: 'Her gün ne kadar çalışmalıyım?', answer: 'Yirmi dakikalık düzenli ve geri bildirimli çalışma, uzun fakat seyrek çalışmadan daha verimlidir. Süreyi kişisel durumuna göre ayarla; devamlılığı koru.' }
    ]
  },
  'hadis-okuma-adabi': {
    title: 'Hadis Okuma Adabı: Metin, Kaynak ve Bağlamla Okuma',
    description: 'Bir rivayetin tam metnini, kaynağını, sıhhat değerlendirmesini ve bağlamını birlikte incelemek için başlangıç yöntemi.',
    category: 'Hadis', readTime: '11 dk okuma', order: 5,
    image: '/images/articles/hadith-cover.png', imageAlt: 'Kaynak kontrolü için hazırlanmış sade çalışma masası',
    scope: 'Bu rehber hadis metni, sened, râvi, kaynak künyesi, sıhhat derecesi ve açıklama arasındaki farkı öğretir. Amaç, rivayeti kırpılmış bir söz olarak değil kendi kimliği ve bağlamı içinde okuyabilmektir.',
    sections: [
      { id: 'guvenilir-kaynak', title: 'Önce rivayetin kimliğini doğrula', paragraphs: ['Bir hadisin kimliği; Arapça metni, Türkçe anlamı, ilk râvisi, yer aldığı eser ve kitap/bölüm ile hadis numarasından oluşur. Yalnız “Buhârî” veya “hadis-i şerif” yazılması, hangi rivayetten söz edildiğini tam olarak göstermeye yetmez.', 'Hadisin meşhur olması sahih olduğunu tek başına göstermez. Çeviri de kaynak metnin kendisi değildir: kelime tercihleri ve açıklayıcı ekler içerebilir. Bu nedenle sitedeki hadislerde Arapça asıl, Türkçe anlam, râvi ve kaynak künyesi birbirinden ayrı gösterilir.'], image: studyImage, callout: { eyebrow: 'Metin–açıklama ayrımı', title: 'Açıklamayı hadis cümlesi gibi aktarma', body: 'Kısa açıklama, rivayetin verdiği ana mesajı anlamaya yardım eder; fakat hadis metnine ait değildir. Paylaşırken tırnak içine yalnız rivayetin kendi sözlerini al.' } },
      { id: 'baglami-anlamak', title: 'Sened, metin ve bağlamı ayır', paragraphs: ['Sened rivayeti aktaran kişiler zinciridir; metin ise aktarılan söz veya olaydır. Hadis âlimleri râvilerin güvenilirliği ve hafızası, zincirin kesintisizliği, rivayetin daha güvenilir rivayetlere aykırılığı ve gizli kusur ihtimali gibi ölçüler kullanır.', 'Aynı olay farklı lafızlarla rivayet edilmiş olabilir. Öncesi-sonrası, kime söylendiği, hangi şartta uygulandığı ve başka rivayetlerin konuyu nasıl tamamladığı görülmeden tek cümle üzerinden genel hüküm kurulmaz. Tercümedeki bir kelimenin yorum içerip içermediğini de sorgula.'], links: [{ label: 'Hadis kütüphanesinde tam metinleri incele', href: '/hadis' }] },
      { id: 'rivayet-dereceleri', title: 'Sahih, hasen, zayıf ve mevzû ne demektir?', paragraphs: ['Sahih hadis; senedi kesintisiz, râvileri adalet ve zabt sahibi olan, daha güvenilir rivayetlere aykırı düşmeyen ve gizli kusur taşımayan rivayettir. Hasen hadis de kabul edilebilir rivayettir; râvilerden birinin zabtı sahih derecesine göre daha düşük olabilir.', 'Zayıf hadis, sahih veya hasen için aranan şartlardan birini ya da birkaçını taşımayan rivayettir; “zayıf” sözü otomatik olarak “uydurma” demek değildir. Mevzû ise Hz. Peygamber’e (s.a.s.) ait olmadığı hâlde ona nispet edilerek uydurulmuş sözdür. Derece, yalnız metnin güzel veya sert görünüşüne bakılarak verilmez.'], callout: { eyebrow: 'Önemli ayrım', title: 'Kaynakta bulunmak ile sahih olmak aynı şey değildir', body: 'Bir rivayetin bir kitapta yer alması onun nakledildiğini gösterir. Hüküm verirken eserin yöntemi, rivayetin derecesi, farklı tarikler ve konuya ait diğer deliller birlikte değerlendirilir.' } },
      { id: 'not-alarak-okumak', title: 'Bir hadis için yedi satırlık okuma fişi oluştur', paragraphs: ['Her rivayet için kısa bir kayıt tutmak, metni açıklamadan ve kişisel yorumdan ayırır. Aşağıdaki alanlar tek sayfalık bir okuma fişi için yeterlidir.'], steps: { eyebrow: 'Okuma fişi', title: 'Rivayeti sistemli kaydet', items: [
        { title: '1. Kaynak künyesi', body: 'Eser, kitap/bölüm ve hadis numarası; kullandığın bağlantı ve erişim tarihi.' },
        { title: '2. Râvi ve sened bilgisi', body: 'İlk râvi kim? Sayfada zincir veya farklı tarik bilgisi veriliyor mu?' },
        { title: '3. Arapça tam metin', body: 'Kırpılmış bir söz yerine kaynakta verilen tam metni kaydet.' },
        { title: '4. Tercüme', body: 'Mümkünse birden fazla çeviriyi karşılaştır; anlamı etkileyen kelimeleri işaretle.' },
        { title: '5. Sıhhat değerlendirmesi', body: 'Kaynağın veya muhakkikin verdiği dereceyi aynen belirt; kendi tahminini derece gibi yazma.' },
        { title: '6. Bağlam ve açıklama', body: 'Söylenme sebebini, benzer rivayetlerin konuyu nasıl tamamladığını ve açıklamanın hadis metninden hangi noktada ayrıldığını özetle.' },
        { title: '7. Açık soru', body: 'Hüküm, çeviri veya uygulama hakkında netleşmeyen noktayı ayrıca yaz ve uzmana sor.' }
      ] } },
      { id: 'sakin-bir-okuma-plani', title: 'Acele hüküm yerine düzenli okuma', paragraphs: ['Bir hafta boyunca tek tema seç: niyet, merhamet veya dil ahlâkı gibi. Aynı konuda birkaç rivayeti beraber oku; ortak mesajı ve lafız farklarını not et. Her gün çok sayıda hadis tüketmek yerine az metni kaynak ve bağlamıyla anlamaya çalış.', 'Hadisi bugüne uygularken “Bu söz bende hangi davranışı düzeltir?” diye sor; fakat hukukî veya itikadî sonucu yalnız kişisel çıkarımınla belirleme. Kur’an, sünnetin bütünü ve ilim geleneği birlikte değerlendirilir.'], callout: { eyebrow: 'Paylaşmadan önce', title: 'Metin, kaynak ve dereceyi yeniden kontrol et', body: 'Kimliği ve derecesi belirlenmemiş bir sözü hadis diye yayma. Metin, râvi ve kaynak künyesini birlikte aktar; kendi açıklamanı hadis metninden açıkça ayır.' } }
    ],
    faqs: [
      { question: 'Kütüb-i Sitte’de geçen her rivayet aynı derecede midir?', answer: 'Hayır. Kitapların yöntemleri ve rivayetlerin değerlendirmeleri farklıdır. Eser adını görmek tek başına her rivayetin aynı sıhhat derecesinde olduğunu göstermez.' },
      { question: 'Hadisin yalnız Türkçe çevirisini okumak yeterli mi?', answer: 'Başlangıç için anlam sağlar; fakat incelemede Arapça metin, râvi, kaynak, farklı lafızlar ve açıklama da görülmelidir. Çeviri kelime tercihi ve yorum içerebilir.' },
      { question: 'Bir hadisten doğrudan hüküm çıkarabilir miyim?', answer: 'Tek bir rivayet çoğu zaman konuya ait bütün delilleri göstermez. Fıkhî hüküm için diğer naslar, rivayetler, bağlam ve mezheplerin değerlendirmesi birlikte ele alınır.' }
    ]
  }
}
