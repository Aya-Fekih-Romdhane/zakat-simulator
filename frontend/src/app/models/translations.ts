export type Lang = 'ar' | 'fr' | 'en';

export interface Translations {
  // header
  bismillah: string;
  title: string;
  subtitle: string;
  // nav
  tab_mal: string;
  tab_goldsilver: string;
  tab_tijarah: string;
  tab_ziraa: string;
  tab_mawashi: string;
  tab_fitr: string;
  // selectors
  currency_label: string;
  language_label: string;
  gold_price: string;
  silver_price: string;
  // mal
  mal_title: string;
  mal_desc: string;
  cash_savings: string;
  bank_deposits: string;
  investments: string;
  debts_owed_to_you: string;
  debts_you_owe: string;
  // goldsilver
  gold_title: string;
  gold_desc: string;
  gold_grams: string;
  silver_grams: string;
  // tijarah
  tijarah_title: string;
  tijarah_desc: string;
  stock_value: string;
  cash_on_hand: string;
  receivables: string;
  payables: string;
  // ziraa
  ziraa_title: string;
  ziraa_desc: string;
  harvest_kg: string;
  irrigation_type: string;
  natural_irrigation: string;
  artificial_irrigation: string;
  // mawashi
  mawashi_title: string;
  mawashi_desc: string;
  nisab_camels: string;
  nisab_cattle: string;
  nisab_sheep: string;
  camels: string;
  cattle: string;
  sheep: string;
  // fitr
  fitr_title: string;
  fitr_desc: string;
  persons: string;
  grain_price: string;
  fitr_per_person: string;
  // actions
  calculate: string;
  calculating: string;
  error_msg: string;
  // results
  zakat_due_label: string;
  zakat_not_due_label: string;
  total_assets: string;
  nisab_label: string;
  zakat_amount: string;
  zakat_rate: string;
  notes_label: string;
  // quran
  ayah: string;
  ayah_ref: string;
  // footer
  footer_text: string;
  footer_note: string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  ar: {
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    title: 'محاسب الزكاة الإسلامي',
    subtitle: 'حاسبة الزكاة الشاملة لجميع أنواع الزكاة',
    tab_mal: 'زكاة المال',
    tab_goldsilver: 'زكاة الذهب والفضة',
    tab_tijarah: 'زكاة التجارة',
    tab_ziraa: 'زكاة الزراعة',
    tab_mawashi: 'زكاة المواشي',
    tab_fitr: 'زكاة الفطر',
    currency_label: 'العملة',
    language_label: 'اللغة',
    gold_price: 'سعر غرام الذهب',
    silver_price: 'سعر غرام الفضة',
    mal_title: '💰 زكاة المال',
    mal_desc: 'تُجب على المال المدخر الذي بلغ النصاب وحال عليه الحول — النسبة: 2.5%',
    cash_savings: 'نقدية لديك',
    bank_deposits: 'ودائع بنكية',
    investments: 'استثمارات وأسهم',
    debts_owed_to_you: 'ديون لك على الغير',
    debts_you_owe: 'ديون عليك للغير',
    gold_title: '⚱️ زكاة الذهب والفضة',
    gold_desc: 'نصاب الذهب: 85 غراماً | نصاب الفضة: 595 غراماً | النسبة: 2.5%',
    gold_grams: 'الذهب المملوك (غرام)',
    silver_grams: 'الفضة المملوكة (غرام)',
    tijarah_title: '🏪 زكاة التجارة',
    tijarah_desc: 'تُجب على صافي الأصول التجارية: بضاعة + نقدية + ذمم مدينة − ذمم دائنة',
    stock_value: 'قيمة البضاعة',
    cash_on_hand: 'النقدية بالصندوق',
    receivables: 'الذمم المدينة (ما يُستحق لك)',
    payables: 'الذمم الدائنة (ما عليك)',
    ziraa_title: '🌾 زكاة الزراعة',
    ziraa_desc: 'النصاب: 5 أوسق = 653 كيلوغرام | العُشر للمطر — نصف العُشر للسقي بآلة',
    harvest_kg: 'كمية المحصول (كيلوغرام)',
    irrigation_type: 'نوع السقي',
    natural_irrigation: '🌧️ ماء المطر / النهر — العُشر (10%)',
    artificial_irrigation: '🚿 سقي بآلة أو بشراء — نصف العُشر (5%)',
    mawashi_title: '🐑 زكاة المواشي',
    mawashi_desc: 'تُجب على السائمة الراعية التي بلغت النصاب وحال عليها الحول',
    nisab_camels: '🐪 الإبل — نصاب: 5',
    nisab_cattle: '🐄 البقر — نصاب: 30',
    nisab_sheep: '🐑 الغنم — نصاب: 40',
    camels: '🐪 عدد الإبل',
    cattle: '🐄 عدد البقر',
    sheep: '🐑 عدد الغنم والماعز',
    fitr_title: '🌙 زكاة الفطر',
    fitr_desc: 'تجب على كل مسلم: صاع من قوت البلد (≈ 2.5 كغ) عن كل فرد قبل صلاة العيد',
    persons: 'عدد أفراد الأسرة',
    grain_price: 'سعر كيلوغرام القوت الأساسي',
    fitr_per_person: 'المبلغ عن كل فرد',
    calculate: 'احسب الزكاة ◄',
    calculating: '⟳ جارٍ الحساب…',
    error_msg: 'خطأ في الاتصال بالخادم. تأكد من تشغيله على المنفذ 8080.',
    zakat_due_label: '✅ الزكاة واجبة',
    zakat_not_due_label: '❌ لا تجب الزكاة',
    total_assets: 'إجمالي الأصول',
    nisab_label: 'النصاب',
    zakat_amount: 'مقدار الزكاة الواجبة',
    zakat_rate: 'نسبة الزكاة',
    notes_label: 'ملاحظات',
    ayah: '﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ﴾',
    ayah_ref: 'سورة البقرة: 43',
    footer_text: 'الزكاة ركن من أركان الإسلام الخمسة',
    footer_note: 'هذا التطبيق للإرشاد فقط — استشر عالماً للفتاوى الشرعية',
  },

  fr: {
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    title: 'Simulateur de Zakat Islamique',
    subtitle: 'Calculateur complet de tous les types de Zakat',
    tab_mal: 'Zakat al-Mal',
    tab_goldsilver: 'Or & Argent',
    tab_tijarah: 'Commerce',
    tab_ziraa: 'Agriculture',
    tab_mawashi: 'Bétail',
    tab_fitr: 'Zakat al-Fitr',
    currency_label: 'Devise',
    language_label: 'Langue',
    gold_price: "Prix du gramme d'or",
    silver_price: "Prix du gramme d'argent",
    mal_title: '💰 Zakat al-Mal',
    mal_desc: "S'applique aux économies atteignant le nisab après une année lunaire — Taux : 2,5%",
    cash_savings: 'Espèces disponibles',
    bank_deposits: 'Dépôts bancaires',
    investments: 'Investissements & actions',
    debts_owed_to_you: 'Créances à recevoir',
    debts_you_owe: 'Dettes à payer',
    gold_title: '⚱️ Zakat sur Or & Argent',
    gold_desc: 'Nisab or : 85g | Nisab argent : 595g | Taux : 2,5%',
    gold_grams: 'Or possédé (grammes)',
    silver_grams: 'Argent possédé (grammes)',
    tijarah_title: '🏪 Zakat al-Tijarah',
    tijarah_desc: "S'applique aux actifs commerciaux nets : stock + liquidités + créances − dettes",
    stock_value: 'Valeur du stock',
    cash_on_hand: 'Liquidités en caisse',
    receivables: 'Créances clients',
    payables: 'Dettes fournisseurs',
    ziraa_title: '🌾 Zakat al-Ziraa (Agriculture)',
    ziraa_desc: 'Nisab : 653 kg | Irrigué naturellement : 10% (Ushr) | Irrigué artificiellement : 5%',
    harvest_kg: 'Quantité de récolte (kg)',
    irrigation_type: "Type d'irrigation",
    natural_irrigation: "🌧️ Eau de pluie / rivière — Ushr (10%)",
    artificial_irrigation: "🚿 Irrigation artificielle / achetée — Demi-Ushr (5%)",
    mawashi_title: '🐑 Zakat al-Mawashi (Bétail)',
    mawashi_desc: "S'applique au bétail en pâturage libre ayant atteint le nisab après un an",
    nisab_camels: '🐪 Chameaux — nisab : 5',
    nisab_cattle: '🐄 Bovins — nisab : 30',
    nisab_sheep: '🐑 Ovins — nisab : 40',
    camels: '🐪 Nombre de chameaux',
    cattle: '🐄 Nombre de bovins',
    sheep: '🐑 Nombre de moutons / chèvres',
    fitr_title: '🌙 Zakat al-Fitr',
    fitr_desc: "Obligatoire pour chaque musulman : 1 Sâ' de nourriture (≈ 2,5 kg) par personne avant la prière de l'Aïd",
    persons: 'Nombre de membres de la famille',
    grain_price: 'Prix du kg de céréale de base',
    fitr_per_person: 'Montant par personne',
    calculate: 'Calculer la Zakat ►',
    calculating: '⟳ Calcul en cours…',
    error_msg: 'Erreur de connexion au serveur. Vérifiez que le backend tourne sur le port 8080.',
    zakat_due_label: '✅ Zakat due',
    zakat_not_due_label: '❌ Zakat non due',
    total_assets: 'Total des actifs',
    nisab_label: 'Nisab',
    zakat_amount: 'Montant de la Zakat',
    zakat_rate: 'Taux de Zakat',
    notes_label: 'Remarques',
    ayah: '﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ﴾',
    ayah_ref: 'Coran — Sourate Al-Baqara : 43',
    footer_text: "La Zakat est l'un des cinq piliers de l'Islam",
    footer_note: "Cette application est indicative uniquement — Consultez un savant pour les fatwas",
  },

  en: {
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    title: 'Islamic Zakat Calculator',
    subtitle: 'Comprehensive simulator for all types of Zakat',
    tab_mal: 'Zakat al-Mal',
    tab_goldsilver: 'Gold & Silver',
    tab_tijarah: 'Trade',
    tab_ziraa: 'Agriculture',
    tab_mawashi: 'Livestock',
    tab_fitr: 'Zakat al-Fitr',
    currency_label: 'Currency',
    language_label: 'Language',
    gold_price: 'Gold price per gram',
    silver_price: 'Silver price per gram',
    mal_title: '💰 Zakat al-Mal',
    mal_desc: 'Applies to savings reaching the nisab after one lunar year — Rate: 2.5%',
    cash_savings: 'Cash on hand',
    bank_deposits: 'Bank deposits',
    investments: 'Investments & stocks',
    debts_owed_to_you: 'Debts owed to you',
    debts_you_owe: 'Debts you owe',
    gold_title: '⚱️ Zakat on Gold & Silver',
    gold_desc: 'Gold nisab: 85g | Silver nisab: 595g | Rate: 2.5%',
    gold_grams: 'Gold owned (grams)',
    silver_grams: 'Silver owned (grams)',
    tijarah_title: '🏪 Zakat al-Tijarah (Trade)',
    tijarah_desc: 'Applies to net commercial assets: stock + cash + receivables − payables',
    stock_value: 'Stock / inventory value',
    cash_on_hand: 'Cash in hand',
    receivables: 'Receivables (owed to you)',
    payables: 'Payables (owed by you)',
    ziraa_title: '🌾 Zakat al-Ziraa (Agriculture)',
    ziraa_desc: 'Nisab: 653 kg | Rain-fed: 10% (Ushr) | Artificially irrigated: 5% (Half-Ushr)',
    harvest_kg: 'Harvest quantity (kg)',
    irrigation_type: 'Irrigation type',
    natural_irrigation: '🌧️ Rain / river water — Ushr (10%)',
    artificial_irrigation: '🚿 Artificial irrigation — Half-Ushr (5%)',
    mawashi_title: '🐑 Zakat al-Mawashi (Livestock)',
    mawashi_desc: 'Applies to free-grazing livestock that reached the nisab after one year',
    nisab_camels: '🐪 Camels — nisab: 5',
    nisab_cattle: '🐄 Cattle — nisab: 30',
    nisab_sheep: '🐑 Sheep/Goats — nisab: 40',
    camels: '🐪 Number of camels',
    cattle: '🐄 Number of cattle',
    sheep: '🐑 Number of sheep / goats',
    fitr_title: '🌙 Zakat al-Fitr',
    fitr_desc: "Obligatory for every Muslim: 1 Sa' of staple food (≈ 2.5 kg) per person before Eid prayer",
    persons: 'Number of family members',
    grain_price: 'Price per kg of staple grain',
    fitr_per_person: 'Amount per person',
    calculate: 'Calculate Zakat ►',
    calculating: '⟳ Calculating…',
    error_msg: 'Server connection error. Make sure the backend is running on port 8080.',
    zakat_due_label: '✅ Zakat Due',
    zakat_not_due_label: '❌ Zakat Not Due',
    total_assets: 'Total Assets',
    nisab_label: 'Nisab',
    zakat_amount: 'Zakat Amount Due',
    zakat_rate: 'Zakat Rate',
    notes_label: 'Notes',
    ayah: '﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ﴾',
    ayah_ref: 'Quran — Surah Al-Baqarah: 43',
    footer_text: 'Zakat is one of the Five Pillars of Islam',
    footer_note: 'This app is for guidance only — Consult a scholar for religious rulings',
  },
};
