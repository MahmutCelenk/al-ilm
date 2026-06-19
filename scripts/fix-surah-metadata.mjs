import { readFile, writeFile } from 'node:fs/promises'

const names = [
  'Fatiha', 'Bakara', 'Âl-i İmrân', 'Nisâ', 'Mâide', 'En’âm', 'A’râf', 'Enfâl', 'Tevbe', 'Yûnus', 'Hûd', 'Yûsuf', 'Ra’d', 'İbrâhîm', 'Hicr', 'Nahl', 'İsrâ', 'Kehf', 'Meryem', 'Tâhâ', 'Enbiyâ', 'Hac', 'Mü’minûn', 'Nûr', 'Furkân', 'Şuarâ', 'Neml', 'Kasas', 'Ankebût', 'Rûm', 'Lokmân', 'Secde', 'Ahzâb', 'Sebe', 'Fâtır', 'Yâsîn', 'Sâffât', 'Sâd', 'Zümer', 'Mü’min', 'Fussilet', 'Şûrâ', 'Zuhruf', 'Duhân', 'Câsiye', 'Ahkâf', 'Muhammed', 'Fetih', 'Hucurât', 'Kâf', 'Zâriyât', 'Tûr', 'Necm', 'Kamer', 'Rahmân', 'Vâkıa', 'Hadîd', 'Mücâdele', 'Haşr', 'Mümtehine', 'Saff', 'Cum’a', 'Münâfikûn', 'Tegâbün', 'Talâk', 'Tahrîm', 'Mülk', 'Kalem', 'Hâkka', 'Meâric', 'Nûh', 'Cin', 'Müzzemmil', 'Müddessir', 'Kıyâme', 'İnsan', 'Mürselât', 'Nebe', 'Nâziât', 'Abese', 'Tekvîr', 'İnfitâr', 'Mutaffifîn', 'İnşikâk', 'Bürûc', 'Târık', 'A’lâ', 'Gâşiye', 'Fecr', 'Beled', 'Şems', 'Leyl', 'Duhâ', 'İnşirâh', 'Tîn', 'Alak', 'Kadir', 'Beyyine', 'Zilzâl', 'Âdiyât', 'Kâria', 'Tekâsür', 'Asr', 'Hümeze', 'Fîl', 'Kureyş', 'Mâûn', 'Kevser', 'Kâfirûn', 'Nasr', 'Tebbet', 'İhlâs', 'Felak', 'Nâs'
]

const meanings = [
  'Açılış', 'Sığır', 'İmrân ailesi', 'Kadınlar', 'Sofra', 'Hayvanlar', 'Yüksek yerler', 'Ganimetler', 'Tevbe', 'Yûnus peygamber', 'Hûd peygamber', 'Yûsuf peygamber', 'Gök gürültüsü', 'İbrâhîm peygamber', 'Hicr bölgesi', 'Bal arısı', 'Gece yolculuğu', 'Mağara', 'Meryem', 'Tâhâ', 'Peygamberler', 'Hac', 'Müminler', 'Nur', 'Hak ile batılı ayıran ölçü', 'Şairler', 'Karınca', 'Kıssalar', 'Örümcek', 'Rumlar', 'Lokmân', 'Secde', 'Ahzâb toplulukları', 'Sebe halkı', 'Yaratan', 'Yâsîn', 'Saf tutanlar', 'Sâd harfi', 'Zümreler', 'Mümin', 'Ayrıntılı açıklanan', 'Danışma', 'Süsler', 'Duman', 'Diz çöken', 'Ahkâf bölgesi', 'Muhammed peygamber', 'Fetih', 'Odalar', 'Kâf harfi', 'Savuran rüzgarlar', 'Tûr dağı', 'Yıldız', 'Ay', 'Rahman', 'Gerçekleşecek olay', 'Demir', 'Mücadele eden kadın', 'Toplanma', 'Sınanan kadın', 'Saf', 'Cuma', 'Münafıklar', 'Aldanma', 'Boşanma', 'Yasaklama', 'Hükümranlık', 'Kalem', 'Gerçekleşen', 'Yükseliş yolları', 'Nûh peygamber', 'Cin', 'Örtünen', 'Bürünüp sarınan', 'Kıyamet', 'İnsan', 'Gönderilenler', 'Haber', 'Söküp çıkaranlar', 'Yüzünü ekşitti', 'Dürülme', 'Yarılma', 'Ölçüde hile yapanlar', 'Yarılma', 'Burçlar', 'Gece gelen', 'En yüce', 'Kaplayan', 'Şafak', 'Şehir', 'Güneş', 'Gece', 'Kuşluk vakti', 'Ferahlık', 'İncir', 'Alak', 'Kadir gecesi', 'Açık delil', 'Sarsıntı', 'Koşan atlar', 'Çarpıcı olay', 'Çoğaltma yarışı', 'Zaman', 'Arkadan çekiştiren', 'Fil', 'Kureyş', 'Yardım', 'Kevser', 'İnkar edenler', 'Yardım', 'Kurusun', 'Samimiyet', 'Sabah aydınlığı', 'İnsanlar'
]

const source = 'Arapça metin: Quran Uthmani Hafs, King Fahad Quran Complex / Quran API. Türkçe anlam: Elmalılı Hamdi Yazır / Quran API.'
const file = 'app/data/surahs.ts'
const marker = 'export const surahs: SurahItem[] = '
const content = await readFile(file, 'utf8')
const markerIndex = content.indexOf(marker)

if (markerIndex === -1) {
  throw new Error('Could not find surahs export marker.')
}

const surahs = JSON.parse(content.slice(markerIndex + marker.length).trim())

if (surahs.length !== 114 || names.length !== 114 || meanings.length !== 114) {
  throw new Error('Surah metadata length mismatch.')
}

const fixedSurahs = surahs.map((surah, index) => ({
  ...surah,
  name: names[index],
  meaning: meanings[index],
  source
}))

const header = `export type SurahVerse = {
  number: number
  arabic: string
  translation: string
}

export type SurahItem = {
  id: number
  slug: string
  name: string
  arabicName: string
  meaning: string
  revelation: 'Mekki' | 'Medeni'
  verseCount: number
  source: string
  verses: SurahVerse[]
}

`

await writeFile(file, `${header}${marker}${JSON.stringify(fixedSurahs, null, 2)}\n`, 'utf8')
console.log(`Fixed metadata for ${fixedSurahs.length} surahs.`)
