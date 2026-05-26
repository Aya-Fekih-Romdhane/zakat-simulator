export interface CurrencyConfig {
  code: string;
  symbol: string;
  nameAr: string;
  nameFr: string;
  nameEn: string;
  defaultGoldPrice: number;
  defaultSilverPrice: number;
  defaultGrainPrice: number;
}

export const CURRENCIES: CurrencyConfig[] = [
  {
    code: 'DZD', symbol: 'دج',
    nameAr: 'دينار جزائري', nameFr: 'Dinar algérien', nameEn: 'Algerian Dinar',
    defaultGoldPrice: 27000, defaultSilverPrice: 320, defaultGrainPrice: 80
  },
  {
    code: 'TND', symbol: 'د.ت',
    nameAr: 'دينار تونسي', nameFr: 'Dinar tunisien', nameEn: 'Tunisian Dinar',
    defaultGoldPrice: 325, defaultSilverPrice: 3.8, defaultGrainPrice: 0.9
  },
  {
    code: 'MAD', symbol: 'د.م',
    nameAr: 'درهم مغربي', nameFr: 'Dirham marocain', nameEn: 'Moroccan Dirham',
    defaultGoldPrice: 1050, defaultSilverPrice: 12.5, defaultGrainPrice: 5
  },
  {
    code: 'LYD', symbol: 'د.ل',
    nameAr: 'دينار ليبي', nameFr: 'Dinar libyen', nameEn: 'Libyan Dinar',
    defaultGoldPrice: 480, defaultSilverPrice: 5.6, defaultGrainPrice: 2
  },
  {
    code: 'EGP', symbol: 'ج.م',
    nameAr: 'جنيه مصري', nameFr: 'Livre égyptienne', nameEn: 'Egyptian Pound',
    defaultGoldPrice: 4800, defaultSilverPrice: 57, defaultGrainPrice: 15
  },
  {
    code: 'SAR', symbol: 'ر.س',
    nameAr: 'ريال سعودي', nameFr: 'Riyal saoudien', nameEn: 'Saudi Riyal',
    defaultGoldPrice: 367, defaultSilverPrice: 4.3, defaultGrainPrice: 2
  },
  {
    code: 'AED', symbol: 'د.إ',
    nameAr: 'درهم إماراتي', nameFr: 'Dirham des EAU', nameEn: 'UAE Dirham',
    defaultGoldPrice: 362, defaultSilverPrice: 4.2, defaultGrainPrice: 2
  },
  {
    code: 'QAR', symbol: 'ر.ق',
    nameAr: 'ريال قطري', nameFr: 'Riyal qatarien', nameEn: 'Qatari Riyal',
    defaultGoldPrice: 358, defaultSilverPrice: 4.2, defaultGrainPrice: 2
  },
  {
    code: 'KWD', symbol: 'د.ك',
    nameAr: 'دينار كويتي', nameFr: 'Dinar koweïtien', nameEn: 'Kuwaiti Dinar',
    defaultGoldPrice: 30, defaultSilverPrice: 0.35, defaultGrainPrice: 0.15
  },
  {
    code: 'USD', symbol: '$',
    nameAr: 'دولار أمريكي', nameFr: 'Dollar américain', nameEn: 'US Dollar',
    defaultGoldPrice: 98, defaultSilverPrice: 1.15, defaultGrainPrice: 0.5
  },
  {
    code: 'EUR', symbol: '€',
    nameAr: 'يورو', nameFr: 'Euro', nameEn: 'Euro',
    defaultGoldPrice: 90, defaultSilverPrice: 1.05, defaultGrainPrice: 0.55
  },
  {
    code: 'GBP', symbol: '£',
    nameAr: 'جنيه إسترليني', nameFr: 'Livre sterling', nameEn: 'British Pound',
    defaultGoldPrice: 77, defaultSilverPrice: 0.9, defaultGrainPrice: 0.45
  },
];
