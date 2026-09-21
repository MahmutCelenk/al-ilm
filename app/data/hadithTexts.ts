export type HadithText = {
  narrator: string
  text: string
  arabic: string
}

export const canonicalHadithTexts: Record<number, HadithText> = {
  1: {
    narrator: 'Ömer b. Hattâb (r.a.)',
    text: `Ömer b. Hattâb (r.a.) şöyle dedi: Resûlullah’ı (s.a.v.) şöyle buyururken işittim: “Ameller niyetlere göredir. Herkese ancak niyet ettiği vardır. Kimin hicreti elde edeceği bir dünyalığa veya evleneceği bir kadına ise onun hicreti, hicret ettiği şeyedir.”`,
    arabic: `إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ`
  },
  2: {
    narrator: 'Enes b. Mâlik (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin.”`,
    arabic: `يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا`
  },
  3: {
    narrator: 'Temîm ed-Dârî (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Din samimiyettir.” “Kime karşı?” diye sorduk. “Allah’a, kitabına, resulüne, Müslümanların yöneticilerine ve bütün Müslümanlara karşı.” buyurdu.`,
    arabic: `الدِّينُ النَّصِيحَةُ، قُلْنَا لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ`
  },
  4: {
    narrator: 'Abdullah b. Amr (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Müslüman, Müslümanların dilinden ve elinden güvende olduğu kimsedir. Muhacir de Allah’ın yasakladığı şeyleri terk eden kimsedir.”`,
    arabic: `الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ`
  },
  5: {
    narrator: 'Ebû Mâlik el-Eş’arî (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Temizlik imanın yarısıdır. ‘Elhamdülillâh’ mizanı doldurur. ‘Sübhânallah’ ve ‘Elhamdülillâh’ göklerle yer arasını doldurur. Namaz nurdur; sadaka delildir; sabır aydınlıktır. Kur’an senin lehine veya aleyhine bir delildir. Her insan sabahleyin çıkar, nefsini satar; böylece onu ya özgürleştirir ya da helâk eder.”`,
    arabic: `الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ، كُلُّ النَّاسِ يَغْدُو فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا`
  },
  6: {
    narrator: 'Abdullah b. Abbâs (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “İki nimet vardır ki insanların çoğu onların kıymetini bilmekte aldanmıştır: sağlık ve boş vakit.”`,
    arabic: `نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ`
  },
  7: {
    narrator: 'Enes b. Mâlik (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Sizden biri kendisi için sevdiğini kardeşi için de sevmedikçe iman etmiş olmaz.”`,
    arabic: `لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ`
  },
  8: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Allah’a ve âhiret gününe iman eden komşusuna eziyet etmesin. Allah’a ve âhiret gününe iman eden misafirine ikram etsin. Allah’a ve âhiret gününe iman eden ya hayır söylesin ya da sussun.”`,
    arabic: `مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ`
  },
  9: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Bir adam Nebî’ye (s.a.v.), “Bana öğüt ver.” dedi. Nebî (s.a.v.), “Öfkelenme.” buyurdu. Adam isteğini birkaç kez tekrarladı; Nebî (s.a.v.) her defasında, “Öfkelenme.” buyurdu.`,
    arabic: `أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي، قَالَ: لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ`
  },
  10: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Güçlü kimse güreşte başkalarını yenen değildir. Asıl güçlü kimse, öfke anında kendisine hâkim olandır.”`,
    arabic: `لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ`
  },
  11: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Kim bir müminin dünya sıkıntılarından birini giderirse Allah da onun kıyamet günü sıkıntılarından birini giderir. Kim darda kalana kolaylık gösterirse Allah ona dünyada ve âhirette kolaylık gösterir. Kim bir Müslümanın kusurunu örterse Allah da onun dünyada ve âhirette kusurunu örter. Kul kardeşinin yardımında olduğu sürece Allah da kulun yardımındadır. Kim ilim aramak için bir yola girerse Allah ona cennete giden yolu kolaylaştırır. Bir topluluk Allah’ın evlerinden birinde toplanır, Allah’ın kitabını okur ve aralarında onu müzakere ederse üzerlerine huzur iner, onları rahmet kuşatır, melekler çevrelerini sarar ve Allah onları kendi katındakilere anar. Ameli kendisini geri bırakan kimseyi soyu ileri götüremez.”`,
    arabic: `مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ، وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ، وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ، وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلَّا نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ وَغَشِيَتْهُمُ الرَّحْمَةُ وَحَفَّتْهُمُ الْمَلَائِكَةُ وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ، وَمَنْ بَطَّأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ نَسَبُهُ`
  },
  12: {
    narrator: 'Osman b. Affân (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Sizin en hayırlınız Kur’an’ı öğrenen ve öğretendir.”`,
    arabic: `خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ`
  },
  13: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Şüphesiz din kolaylıktır. Kim dini aşmaya kalkarsa din ona üstün gelir. Öyleyse doğru ve ölçülü olun, gücünüzün yettiğine yaklaşın, müjdelenin; sabahın erken vaktinden, akşamdan ve gecenin bir bölümünden yararlanın.”`,
    arabic: `إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا، وَاسْتَعِينُوا بِالْغَدْوَةِ وَالرَّوْحَةِ وَشَيْءٍ مِنَ الدُّلْجَةِ`
  },
  14: {
    narrator: 'Abdullah b. Ömer (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “İslâm beş esas üzerine kurulmuştur: Allah’tan başka ilâh olmadığına ve Muhammed’in Allah’ın resulü olduğuna şahitlik etmek, namazı kılmak, zekâtı vermek, haccetmek ve Ramazan orucunu tutmak.”`,
    arabic: `بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ`
  },
  15: {
    narrator: 'Nu‘mân b. Beşîr (r.a.)',
    text: `Resûlullah’ı (s.a.v.) şöyle buyururken işittim: “Helâl bellidir, haram da bellidir. İkisinin arasında insanların çoğunun bilmediği şüpheli şeyler vardır. Kim şüpheli şeylerden sakınırsa dinini ve onurunu korumuş olur. Kim şüpheli şeylere düşerse harama düşer; tıpkı koruluğun çevresinde sürü güden çobanın sürüsünü oraya düşürmesinin yakın olması gibi. Dikkat edin! Her hükümdarın bir koruluğu vardır. Dikkat edin! Allah’ın yeryüzündeki koruluğu, haram kıldığı şeylerdir. Dikkat edin! Bedende bir et parçası vardır; o iyi olursa bütün beden iyi olur, o bozulursa bütün beden bozulur. Dikkat edin! O, kalptir.”`,
    arabic: `الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ، وَبَيْنَهُمَا مُشَبَّهَاتٌ لَا يَعْلَمُهَا كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الْمُشَبَّهَاتِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ كَرَاعٍ يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يُوَاقِعَهُ، أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا إِنَّ حِمَى اللَّهِ فِي أَرْضِهِ مَحَارِمُهُ، أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ`
  },
  16: {
    narrator: 'Âişe (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Doğru ve ölçülü olun. Bilin ki hiçbirinizi ameli cennete sokmayacaktır. Allah’ın en sevdiği amel, az da olsa devamlı olanıdır.”`,
    arabic: `سَدِّدُوا وَقَارِبُوا، وَاعْلَمُوا أَنْ لَنْ يُدْخِلَ أَحَدَكُمْ عَمَلُهُ الْجَنَّةَ، وَأَنَّ أَحَبَّ الْأَعْمَالِ أَدْوَمُهَا إِلَى اللَّهِ وَإِنْ قَلَّ`
  },
  17: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Allah şöyle buyurdu: Âdemoğlunun oruç dışındaki bütün amelleri kendisi içindir. Oruç ise benim içindir ve onun karşılığını ben veririm. Oruç bir kalkandır. Sizden biri oruçlu olduğu gün kötü söz söylemesin, bağırıp çağırmasın. Biri ona söver veya onunla kavga ederse ‘Ben oruçluyum.’ desin. Muhammed’in canını elinde tutana yemin olsun ki oruçlunun ağız kokusu Allah katında misk kokusundan daha hoştur. Oruçlu için iki sevinç vardır: İftar ettiğinde sevinir; Rabbine kavuştuğunda da orucu sebebiyle sevinir.”`,
    arabic: `قَالَ اللَّهُ: كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلَّا الصِّيَامَ، فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ، وَالصِّيَامُ جُنَّةٌ، وَإِذَا كَانَ يَوْمُ صَوْمِ أَحَدِكُمْ فَلَا يَرْفُثْ وَلَا يَصْخَبْ، فَإِنْ سَابَّهُ أَحَدٌ أَوْ قَاتَلَهُ فَلْيَقُلْ إِنِّي امْرُؤٌ صَائِمٌ، وَالَّذِي نَفْسُ مُحَمَّدٍ بِيَدِهِ لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ، لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا: إِذَا أَفْطَرَ فَرِحَ، وَإِذَا لَقِيَ رَبَّهُ فَرِحَ بِصَوْمِهِ`
  },
  18: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Ümmetime zorluk vereceğinden endişe etmeseydim, onlara her namazla birlikte misvak kullanmalarını emrederdim.”`,
    arabic: `لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّتِي لَأَمَرْتُهُمْ بِالسِّوَاكِ مَعَ كُلِّ صَلَاةٍ`
  },
  19: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Bir adam Resûlullah’a (s.a.v.), “İyi davranıp hoş sohbet etmeme en çok kim hak sahibidir?” diye sordu. Resûlullah (s.a.v.), “Annen.” buyurdu. Adam, “Sonra kim?” dedi. “Annen.” buyurdu. Adam yine, “Sonra kim?” dedi. “Annen.” buyurdu. Adam, “Sonra kim?” dedi. Resûlullah (s.a.v.), “Sonra baban.” buyurdu.`,
    arabic: `مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أَبُوكَ`
  },
  20: {
    narrator: 'Sehl b. Sa‘d (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Ben ve yetimi himaye eden kimse cennette şöyleyiz.” Ardından işaret parmağıyla orta parmağını gösterdi.`,
    arabic: `أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا، وَقَالَ بِإِصْبَعَيْهِ السَّبَّابَةِ وَالْوُسْطَى`
  },
  21: {
    narrator: 'Ebû Şüreyh (r.a.)',
    text: `Nebî (s.a.v.) üç kez, “Allah’a yemin olsun ki iman etmiş olmaz.” buyurdu. “Kim, ey Allah’ın Resulü?” diye soruldu. “Komşusunun, kötülüğünden emin olmadığı kimse.” buyurdu.`,
    arabic: `وَاللَّهِ لَا يُؤْمِنُ، وَاللَّهِ لَا يُؤْمِنُ، وَاللَّهِ لَا يُؤْمِنُ، قِيلَ: وَمَنْ يَا رَسُولَ اللَّهِ؟ قَالَ: الَّذِي لَا يَأْمَنُ جَارُهُ بَوَائِقَهُ`
  },
  22: {
    narrator: 'Huzeyfe (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Her iyilik bir sadakadır.”`,
    arabic: `كُلُّ مَعْرُوفٍ صَدَقَةٌ`
  },
  23: {
    narrator: 'Abdullah b. Ömer (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Zulüm, kıyamet gününde karanlıklar olacaktır.”`,
    arabic: `الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ`
  },
  24: {
    narrator: 'Âişe (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Ey Âişe! Allah yumuşaktır, yumuşaklığı sever. Yumuşaklık sebebiyle verdiğini sertlik sebebiyle ve başka hiçbir şey sebebiyle vermez.”`,
    arabic: `يَا عَائِشَةُ إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ، وَيُعْطِي عَلَى الرِّفْقِ مَا لَا يُعْطِي عَلَى الْعُنْفِ وَمَا لَا يُعْطِي عَلَى مَا سِوَاهُ`
  },
  25: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Birbirinize haset etmeyin, fiyat artırmak için aldatıcı teklif vermeyin, birbirinize kin beslemeyin, birbirinize sırt çevirmeyin; biriniz diğerinin alışverişi üzerine alışveriş yapmasın. Ey Allah’ın kulları, kardeş olun. Müslüman Müslümanın kardeşidir; ona zulmetmez, onu yardımsız bırakmaz, onu küçümsemez. Takvâ buradadır.” Bunu üç kez göğsünü işaret ederek söyledi. “Bir kimseye kötülük olarak Müslüman kardeşini küçümsemesi yeter. Müslümanın kanı, malı ve onuru diğer Müslümana haramdır.”`,
    arabic: `لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يَخْذُلُهُ وَلَا يَحْقِرُهُ، التَّقْوَى هَا هُنَا، بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ، كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ وَمَالُهُ وَعِرْضُهُ`
  },
  26: {
    narrator: 'Nu‘mân b. Beşîr (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Müminlerin birbirlerini sevmede, birbirlerine merhamet ve şefkat göstermede örneği bir beden gibidir. Bedenin bir organı rahatsız olduğunda diğer organlar da uykusuzluk ve ateşle ona ortak olur.”`,
    arabic: `مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ، إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى`
  },
  28: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Dile hafif, mizanda ağır ve Rahmân’a sevimli iki söz vardır: ‘Sübhânallahi ve bihamdihî, Sübhânallahi’l-azîm.’”`,
    arabic: `كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ`
  },
  29: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Nebî (s.a.v.), Allah Teâlâ’nın şöyle buyurduğunu bildirdi: “Ben kulumun benim hakkımdaki zannı üzereyim. Beni andığında onunla beraberim. Beni kendi içinde anarsa ben de onu kendi katımda anarım. Beni bir topluluk içinde anarsa ben de onu daha hayırlı bir topluluk içinde anarım. Bana bir karış yaklaşırsa ben ona bir arşın yaklaşırım; bana bir arşın yaklaşırsa ben ona bir kulaç yaklaşırım. Bana yürüyerek gelirse ben ona koşarak gelirim.”`,
    arabic: `يَقُولُ اللَّهُ تَعَالَى: أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي، وَإِنْ ذَكَرَنِي فِي مَلَإٍ ذَكَرْتُهُ فِي مَلَإٍ خَيْرٍ مِنْهُمْ، وَإِنْ تَقَرَّبَ إِلَيَّ بِشِبْرٍ تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا، وَإِنْ تَقَرَّبَ إِلَيَّ ذِرَاعًا تَقَرَّبْتُ إِلَيْهِ بَاعًا، وَإِنْ أَتَانِي يَمْشِي أَتَيْتُهُ هَرْوَلَةً`
  },
  30: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Allah, kulunun kendisine tövbe etmesine, sizden birinin kaybettiği bineğini bulduğunda sevindiğinden daha çok sevinir.”`,
    arabic: `لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ أَحَدِكُمْ مِنْ أَحَدِكُمْ بِضَالَّتِهِ إِذَا وَجَدَهَا`
  },
  31: {
    narrator: 'Abdullah b. Ömer (r.a.)',
    text: `Resûlullah (s.a.v.) omzumu tuttu ve şöyle buyurdu: “Dünyada bir garip veya bir yolcu gibi ol.” İbn Ömer de, “Akşama eriştiğinde sabahı bekleme; sabaha eriştiğinde akşamı bekleme. Sağlığından hastalığın, hayatından ölümün için pay ayır.” derdi.`,
    arabic: `كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ. وَكَانَ ابْنُ عُمَرَ يَقُولُ: إِذَا أَمْسَيْتَ فَلَا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ`
  },
  33: {
    narrator: 'Abdullah b. Ömer (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Sizden biri cuma namazına geldiğinde gusletsin.”`,
    arabic: `إِذَا جَاءَ أَحَدُكُمُ الْجُمُعَةَ فَلْيَغْتَسِلْ`
  },
  34: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Kim Ramazan orucunu iman ederek ve sevabını Allah’tan umarak tutarsa geçmiş günahları bağışlanır.”`,
    arabic: `مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ`
  },
  36: {
    narrator: 'Ebû Hüreyre (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Benim adımı kullanın fakat künyemi kullanmayın. Beni rüyasında gören gerçekten beni görmüştür; çünkü şeytan benim suretime giremez. Kim benim adıma bile bile yalan söylerse cehennemdeki yerine hazırlansın.”`,
    arabic: `تَسَمَّوْا بِاسْمِي وَلَا تَكْتَنُوا بِكُنْيَتِي، وَمَنْ رَآنِي فِي الْمَنَامِ فَقَدْ رَآنِي، فَإِنَّ الشَّيْطَانَ لَا يَتَمَثَّلُ فِي صُورَتِي، وَمَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ`
  },
  38: {
    narrator: 'Suheyb (r.a.)',
    text: `Resûlullah (s.a.v.) şöyle buyurdu: “Müminin hâli ne hoştur! Onun her işi hayırdır ve bu, müminden başkası için söz konusu değildir. Kendisine bir sevinç erişirse şükreder; bu onun için hayır olur. Başına bir sıkıntı gelirse sabreder; bu da onun için hayır olur.”`,
    arabic: `عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ`
  },
  39: {
    narrator: 'Ebû Zer (r.a.)',
    text: `Nebî (s.a.v.) bana şöyle buyurdu: “Hiçbir iyiliği küçük görme; kardeşini güler yüzle karşılaman bile olsa.”`,
    arabic: `لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا، وَلَوْ أَنْ تَلْقَى أَخَاكَ بِوَجْهٍ طَلْقٍ`
  },
  40: {
    narrator: 'Abdullah b. Mes‘ûd (r.a.)',
    text: `Nebî (s.a.v.) şöyle buyurdu: “Kalbinde zerre kadar kibir bulunan kimse cennete giremez.” Bir adam, “İnsan elbisesinin ve ayakkabısının güzel olmasını sever.” dedi. Nebî (s.a.v.), “Allah güzeldir, güzelliği sever. Kibir, hakkı reddetmek ve insanları küçümsemektir.” buyurdu.`,
    arabic: `لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ. قَالَ رَجُلٌ: إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً. قَالَ: إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ`
  }
}

export const hadithTextAliases: Record<number, number> = {
  27: 11,
  32: 5,
  35: 25,
  37: 8
}
