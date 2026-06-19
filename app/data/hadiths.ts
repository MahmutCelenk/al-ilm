export type HadithItem = {
  id: number
  title: string
  meaning: string
  topic: string
  reference: string
  sourceUrl: string
}

export const hadiths = [
  {
    id: 1,
    title: 'Ameller niyete göredir',
    meaning: 'Bir amelin değeri, onu yaparken taşınan niyetle yakından ilişkilidir. Bu hadis öğrenmeye ihlas ve bilinçle başlamayı hatırlatır.',
    topic: 'Niyet',
    reference: 'Sahih el-Buhari 1; Sahih Muslim 1907',
    sourceUrl: 'https://sunnah.com/bukhari:1'
  },
  {
    id: 2,
    title: 'Kolaylaştırmak esastır',
    meaning: 'Dini anlatırken ve yaşarken insanları zorlaştıran değil, sevdiren ve kolaylaştıran bir üslup benimsenmelidir.',
    topic: 'Kolaylık',
    reference: 'Sahih el-Buhari 69; Sahih Muslim 1734',
    sourceUrl: 'https://sunnah.com/bukhari:69'
  },
  {
    id: 3,
    title: 'Din samimiyettir',
    meaning: 'İman, ibadet ve insan ilişkileri yalnızca dış davranıştan ibaret değildir; samimiyet, doğruluk ve iyi niyetle tamamlanır.',
    topic: 'Ahlak',
    reference: 'Sahih Muslim 55a',
    sourceUrl: 'https://sunnah.com/muslim/1/103'
  },
  {
    id: 4,
    title: 'Müslüman güven veren kişidir',
    meaning: 'Dil ve el ile başkasına zarar vermemek, Müslümanın ahlaki duruşunun temel göstergelerindendir.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 10',
    sourceUrl: 'https://sunnah.com/bukhari/2/3-4'
  },
  {
    id: 5,
    title: 'Temizlik imanın parçasıdır',
    meaning: 'Temizlik yalnızca bedensel bir alışkanlık değil, ibadet bilinciyle ilişkili güçlü bir manevi hazırlıktır.',
    topic: 'Temizlik',
    reference: 'Sahih Muslim 223',
    sourceUrl: 'https://sunnah.com/muslim:223'
  },
  {
    id: 6,
    title: 'Sağlık ve boş zaman nimettir',
    meaning: 'İnsanın çoğu zaman fark etmeden kaybettiği iki büyük imkan sağlık ve vakittir; ikisi de bilinçli kullanılmalıdır.',
    topic: 'Zaman',
    reference: 'Sahih el-Buhari 6412',
    sourceUrl: 'https://sunnah.com/bukhari:6412'
  },
  {
    id: 7,
    title: 'Kendin için istediğini kardeşin için de iste',
    meaning: 'İman, insanın yalnız kendisini değil kardeşini de düşünmesiyle ahlaki olgunluğa ulaşır.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 13',
    sourceUrl: 'https://sunnah.com/bukhari/2/6'
  },
  {
    id: 8,
    title: 'Güzel söz veya sükut',
    meaning: 'Söz, kalbin ve imanın dışa yansıyan yüzüdür; faydalı değilse susmak daha güvenli bir tercihtir.',
    topic: 'Dil',
    reference: 'Sahih el-Buhari 6018; Sahih Muslim 47',
    sourceUrl: 'https://sunnah.com/bukhari:6018'
  },
  {
    id: 9,
    title: 'Öfkeden uzak dur',
    meaning: 'Öfkeyi yönetmek, kişinin nefsini terbiye etmesi ve ilişkilerini koruması için temel bir ahlak ilkesidir.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 6116',
    sourceUrl: 'https://sunnah.com/bukhari:6116'
  },
  {
    id: 10,
    title: 'Gerçek güç nefsi tutabilmektir',
    meaning: 'Kuvvet yalnızca fiziksel üstünlük değildir; asıl güç öfke anında ölçülü kalabilmektir.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 6114; Sahih Muslim 2609',
    sourceUrl: 'https://sunnah.com/bukhari:6114'
  },
  {
    id: 11,
    title: 'İlim yolu cennete açılır',
    meaning: 'İlim aramak, insanın hem dünyasını hem ahiretini aydınlatan ciddi ve değerli bir yoldur.',
    topic: 'İlim',
    reference: 'Sahih Muslim 2699a',
    sourceUrl: 'https://sunnah.com/muslim/48/48'
  },
  {
    id: 12,
    title: 'Kur’an’ı öğrenen ve öğreten hayırlıdır',
    meaning: 'Kur’an ile kurulan ilişki yalnız okuma değil, öğrenme, yaşama ve başkasına aktarma sorumluluğu taşır.',
    topic: 'Kur’an',
    reference: 'Sahih el-Buhari 5027',
    sourceUrl: 'https://sunnah.com/bukhari:5027'
  },
  {
    id: 13,
    title: 'Din kolaylıktır',
    meaning: 'İbadet ve öğrenme yolunda sürdürülebilirlik önemlidir; dinin amacı insanı ezmek değil olgunlaştırmaktır.',
    topic: 'Kolaylık',
    reference: 'Sahih el-Buhari 39',
    sourceUrl: 'https://sunnah.com/bukhari:39'
  },
  {
    id: 14,
    title: 'İslam beş temel üzerine kuruludur',
    meaning: 'İslam’ın ana iskeleti iman, ibadet ve kulluk bilincini taşıyan temel rükünlerle anlaşılır.',
    topic: 'İman',
    reference: 'Sahih el-Buhari 8; Sahih Muslim 16',
    sourceUrl: 'https://sunnah.com/bukhari:8'
  },
  {
    id: 15,
    title: 'Helal ve haram bellidir',
    meaning: 'Şüpheli konularda dikkatli olmak, kalbi ve dini sorumluluğu koruyan önemli bir hassasiyettir.',
    topic: 'Takva',
    reference: 'Sahih el-Buhari 52; Sahih Muslim 1599',
    sourceUrl: 'https://sunnah.com/bukhari:52'
  },
  {
    id: 16,
    title: 'Az ama devamlı amel değerlidir',
    meaning: 'Kullukta süreklilik, ani ve kısa heyecanlardan daha kalıcı bir terbiye oluşturur.',
    topic: 'İbadet',
    reference: 'Sahih el-Buhari 6464; Sahih Muslim 783',
    sourceUrl: 'https://sunnah.com/bukhari:6464'
  },
  {
    id: 17,
    title: 'Oruç kalkandır',
    meaning: 'Oruç yalnız aç kalmak değil, dili, öfkeyi ve davranışları koruyan bir disiplin eğitimidir.',
    topic: 'İbadet',
    reference: 'Sahih el-Buhari 1904; Sahih Muslim 1151',
    sourceUrl: 'https://sunnah.com/bukhari:1904'
  },
  {
    id: 18,
    title: 'Misvak tavsiyesi',
    meaning: 'Ağız temizliği ve ibadete hazırlık, sünnetin günlük hayata taşıdığı zarif temizlik alışkanlıklarındandır.',
    topic: 'Temizlik',
    reference: 'Sahih el-Buhari 887; Sahih Muslim 252',
    sourceUrl: 'https://sunnah.com/bukhari:887'
  },
  {
    id: 19,
    title: 'Anneye iyilik önceliklidir',
    meaning: 'Aile hukukunda anneye gösterilen hürmet, sevgi ve hizmet özel bir önceliğe sahiptir.',
    topic: 'Aile',
    reference: 'Sahih el-Buhari 5971; Sahih Muslim 2548',
    sourceUrl: 'https://sunnah.com/bukhari:5971'
  },
  {
    id: 20,
    title: 'Yetimi gözetmek büyük fazilettir',
    meaning: 'Toplumun en kırılgan fertlerini korumak, merhametin somut ve güçlü bir göstergesidir.',
    topic: 'Merhamet',
    reference: 'Sahih el-Buhari 6005',
    sourceUrl: 'https://sunnah.com/bukhari:6005'
  },
  {
    id: 21,
    title: 'Komşuya zarar verme',
    meaning: 'İman, yakın çevreye güven vermekle görünür hale gelir; komşuluk ahlakı bunun ilk alanlarından biridir.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 6016',
    sourceUrl: 'https://sunnah.com/bukhari:6016'
  },
  {
    id: 22,
    title: 'Güzel davranış sadakadır',
    meaning: 'İyilik yalnız mal vermekle sınırlı değildir; güzel söz, destek ve faydalı davranış da sadaka değerindedir.',
    topic: 'İyilik',
    reference: 'Sahih Muslim 1005',
    sourceUrl: 'https://sunnah.com/muslim:1005'
  },
  {
    id: 23,
    title: 'Zulümden sakın',
    meaning: 'Haksızlık, hem kişi hem toplum için karanlık sonuçlar doğurur; adalet imani bir sorumluluktur.',
    topic: 'Adalet',
    reference: 'Sahih el-Buhari 2447; Sahih Muslim 2579',
    sourceUrl: 'https://sunnah.com/bukhari:2447'
  },
  {
    id: 24,
    title: 'Allah güzel davranışı sever',
    meaning: 'Yumuşaklık ve ölçülü davranış, sertlikten daha derin ve kalıcı bir etki bırakır.',
    topic: 'Ahlak',
    reference: 'Sahih Muslim 2593',
    sourceUrl: 'https://sunnah.com/muslim:2593'
  },
  {
    id: 25,
    title: 'Mümin kardeşini hor görme',
    meaning: 'Kibir, insanı başkasını küçümsemeye götürür; takva kalpte ve davranışta ölçülü olmayı gerektirir.',
    topic: 'Ahlak',
    reference: 'Sahih Muslim 2564',
    sourceUrl: 'https://sunnah.com/muslim:2564'
  },
  {
    id: 26,
    title: 'Müminler bir beden gibidir',
    meaning: 'Müminler arasındaki merhamet ve dayanışma, bir bedenin organları arasındaki hassas bağa benzetilir.',
    topic: 'Kardeşlik',
    reference: 'Sahih Muslim 2586',
    sourceUrl: 'https://sunnah.com/muslim:2586'
  },
  {
    id: 27,
    title: 'Kolaylaştırana kolaylık verilir',
    meaning: 'Darda kalan birine destek olmak, insanın hem dünya hem ahiret sorumluluğunda değerli bir iyiliktir.',
    topic: 'İyilik',
    reference: 'Sahih Muslim 2699a',
    sourceUrl: 'https://sunnah.com/muslim/48/48'
  },
  {
    id: 28,
    title: 'İki hafif söz büyük sevap taşır',
    meaning: 'Zikir, kısa cümlelerle bile kalbi diri tutan ve Allah’a yakınlığı besleyen bir ibadettir.',
    topic: 'Zikir',
    reference: 'Sahih el-Buhari 6682; Sahih Muslim 2694',
    sourceUrl: 'https://sunnah.com/bukhari:6682'
  },
  {
    id: 29,
    title: 'Allah kulunun zannı yanındadır',
    meaning: 'Allah’a umut, güven ve yakınlıkla yönelmek, kulun manevi yürüyüşünü güçlendirir.',
    topic: 'Zikir',
    reference: 'Sahih el-Buhari 7405; Sahih Muslim 2675',
    sourceUrl: 'https://sunnah.com/bukhari:7405'
  },
  {
    id: 30,
    title: 'Tevbe eden kul sevilir',
    meaning: 'Hata sonrası dönüş kapısı açıktır; tevbe, kulun yeniden doğrulup Allah’a yönelmesidir.',
    topic: 'Tevbe',
    reference: 'Sahih Muslim 2747',
    sourceUrl: 'https://sunnah.com/muslim:2747'
  },
  {
    id: 31,
    title: 'Dünya yolculuk gibidir',
    meaning: 'Dünyayı geçici bir konak gibi görmek, insanı daha bilinçli, sade ve sorumlu yaşamaya çağırır.',
    topic: 'Zühd',
    reference: 'Sahih el-Buhari 6416',
    sourceUrl: 'https://sunnah.com/bukhari:6416'
  },
  {
    id: 32,
    title: 'Namaz nurdur',
    meaning: 'Namaz, kulun hayatında yön, aydınlık ve iç düzen sağlayan temel ibadetlerden biridir.',
    topic: 'İbadet',
    reference: 'Sahih Muslim 223',
    sourceUrl: 'https://sunnah.com/muslim:223'
  },
  {
    id: 33,
    title: 'Cuma günü gusül ve temizlik',
    meaning: 'Toplu ibadetlere temiz ve özenli hazırlanmak, hem ibadete hem cemaate saygının parçasıdır.',
    topic: 'Temizlik',
    reference: 'Sahih el-Buhari 877; Sahih Muslim 844',
    sourceUrl: 'https://sunnah.com/bukhari:877'
  },
  {
    id: 34,
    title: 'Ramazanı imanla değerlendirmek',
    meaning: 'Ramazan ibadeti, yalnız takvimsel bir dönem değil; iman, umut ve muhasebe ile yaşanan bir fırsattır.',
    topic: 'İbadet',
    reference: 'Sahih el-Buhari 38; Sahih Muslim 760',
    sourceUrl: 'https://sunnah.com/bukhari:38'
  },
  {
    id: 35,
    title: 'Kardeşlikte haset ve kin yoktur',
    meaning: 'Mümin ilişkilerinde kıskançlık, kin ve kopukluk yerine barış, saygı ve kardeşlik korunmalıdır.',
    topic: 'Kardeşlik',
    reference: 'Sahih Muslim 2564',
    sourceUrl: 'https://sunnah.com/muslim:2564'
  },
  {
    id: 36,
    title: 'Yalan isnattan sakın',
    meaning: 'Peygamber adına söz aktarmak ağır bir sorumluluktur; hadis naklinde kaynak ve doğruluk esastır.',
    topic: 'Hadis',
    reference: 'Sahih el-Buhari 110; Sahih Muslim 3',
    sourceUrl: 'https://sunnah.com/bukhari:110'
  },
  {
    id: 37,
    title: 'Cömertlik ve misafir hakkı',
    meaning: 'Misafire ikram ve hürmet, imanın sosyal hayatta görünür olan nezaketlerinden biridir.',
    topic: 'Ahlak',
    reference: 'Sahih el-Buhari 6018; Sahih Muslim 47',
    sourceUrl: 'https://sunnah.com/bukhari:6018'
  },
  {
    id: 38,
    title: 'Müminin hali hayırlıdır',
    meaning: 'Mümin, nimet karşısında şükürle, zorluk karşısında sabırla iç dengesini korumaya çalışır.',
    topic: 'Sabır',
    reference: 'Sahih Muslim 2999',
    sourceUrl: 'https://sunnah.com/muslim:2999'
  },
  {
    id: 39,
    title: 'İyiliği küçük görme',
    meaning: 'Küçük görünen iyilikler bile kalp, ilişki ve toplum üzerinde büyük bir etki bırakabilir.',
    topic: 'İyilik',
    reference: 'Sahih Muslim 2626',
    sourceUrl: 'https://sunnah.com/muslim:2626'
  },
  {
    id: 40,
    title: 'Allah güzeldir, güzeli sever',
    meaning: 'Güzellik, temizlik, nezaket ve ölçü; İslam ahlakının hayata yansıyan zarif yönlerindendir.',
    topic: 'Ahlak',
    reference: 'Sahih Muslim 91',
    sourceUrl: 'https://sunnah.com/muslim:91'
  }
]

