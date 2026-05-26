import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZakatService } from './services/zakat.service';
import { LanguageService } from './services/language.service';
import { CURRENCIES, CurrencyConfig } from './models/currency.config';
import { Translations } from './models/translations';
import {
  ZakatResult,
  ZakatTab,
  TabConfig,
  ZakatMalRequest,
  ZakatGoldSilverRequest,
  ZakatTijarahRequest,
  ZakatZiraaRequest,
  ZakatMawashiRequest,
  ZakatFitrRequest
} from './models/zakat.models';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  activeTab: ZakatTab = 'mal';
  result: ZakatResult | null = null;
  loading = false;
  error = '';

  // ── Rotating Quran verses ──────────────────────────────────────────────────
  readonly ayat = [
    { text: '﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ ﴾',         ref: 'سورة البقرة: 43'     },
    { text: '﴿ خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا ﴾',                 ref: 'سورة التوبة: 103'    },
    { text: '﴿ وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ ﴾',                                              ref: 'سورة المؤمنون: 4'   },
    { text: '﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَطِيعُوا الرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ ﴾', ref: 'سورة النور: 56'      },
    { text: '﴿ وَمَا آتَيْتُم مِّن زَكَاةٍ تُرِيدُونَ وَجْهَ اللَّهِ فَأُولَٰئِكَ هُمُ الْمُضْعِفُونَ ﴾', ref: 'سورة الروم: 39'      },
    { text: '﴿ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ وَذَٰلِكَ دِينُ الْقَيِّمَةِ ﴾',           ref: 'سورة البيِّنة: 5'   },
  ];
  currentAyatIndex = 0;
  ayatVisible = true;

  readonly currencies = CURRENCIES;
  selectedCurrency: CurrencyConfig = CURRENCIES.find(c => c.code === 'TND')!;

  tabs: TabConfig[] = [
    { id: 'mal',        labelAr: 'زكاة المال',         labelFr: 'Zakat al-Mal',   icon: '💰' },
    { id: 'goldsilver', labelAr: 'ذهب وفضة',           labelFr: 'Or & Argent',    icon: '⚱️' },
    { id: 'tijarah',    labelAr: 'التجارة',              labelFr: 'Commerce',       icon: '🏪' },
    { id: 'ziraa',      labelAr: 'الزراعة',              labelFr: 'Agriculture',    icon: '🌾' },
    { id: 'mawashi',    labelAr: 'المواشي',               labelFr: 'Bétail',         icon: '🐑' },
    { id: 'fitr',       labelAr: 'الفطر',                labelFr: 'Fitr',           icon: '🌙' },
  ];

  private readonly DEFAULT = CURRENCIES.find(c => c.code === 'TND')!;

  malForm: ZakatMalRequest = {
    cashSavings: 0, bankDeposits: 0, investments: 0,
    debtsOwedToYou: 0, debtsYouOwe: 0,
    goldPricePerGram: this.DEFAULT.defaultGoldPrice, currency: 'TND'
  };
  goldForm: ZakatGoldSilverRequest = {
    goldGrams: 0, silverGrams: 0,
    goldPricePerGram: this.DEFAULT.defaultGoldPrice,
    silverPricePerGram: this.DEFAULT.defaultSilverPrice, currency: 'TND'
  };
  tijarahForm: ZakatTijarahRequest = {
    stockValue: 0, cashOnHand: 0, receivables: 0, payables: 0,
    goldPricePerGram: this.DEFAULT.defaultGoldPrice, currency: 'TND'
  };
  ziraaForm: ZakatZiraaRequest = {
    harvestKg: 0, naturallyIrrigated: true, currency: 'TND'
  };
  mawashiForm: ZakatMawashiRequest = {
    camels: 0, cattle: 0, sheep: 0, currency: 'TND'
  };
  fitrForm: ZakatFitrRequest = {
    numberOfPersons: 1, stapleGrainPricePerKg: this.DEFAULT.defaultGrainPrice, currency: 'TND'
  };

  constructor(
    private zakatService: ZakatService,
    public ls: LanguageService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ls.setLang('ar');
    this.startAyatRotation();
  }

  private startAyatRotation() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.ayatVisible = false;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.currentAyatIndex = (this.currentAyatIndex + 1) % this.ayat.length;
          this.ayatVisible = true;
          this.cdr.detectChanges();
        }, 600);
      });
    }, 5000);
  }

  goToAyat(i: number) {
    this.ayatVisible = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.currentAyatIndex = i;
      this.ayatVisible = true;
      this.cdr.detectChanges();
    }, 300);
  }

  t(key: keyof Translations): string {
    return this.ls.t(key);
  }

  getCurrencyName(c: CurrencyConfig): string {
    const lang = this.ls.lang();
    if (lang === 'ar') return c.nameAr;
    if (lang === 'fr') return c.nameFr;
    return c.nameEn;
  }

  onCurrencyChange(event: Event) {
    const code = (event.target as HTMLSelectElement).value;
    const found = CURRENCIES.find(c => c.code === code);
    if (!found) return;
    this.selectedCurrency = found;

    // Update currency code in all forms
    this.malForm.currency        = code;
    this.goldForm.currency       = code;
    this.tijarahForm.currency    = code;
    this.ziraaForm.currency      = code;
    this.mawashiForm.currency    = code;
    this.fitrForm.currency       = code;

    // Update default gold/silver prices
    this.malForm.goldPricePerGram      = found.defaultGoldPrice;
    this.goldForm.goldPricePerGram     = found.defaultGoldPrice;
    this.goldForm.silverPricePerGram   = found.defaultSilverPrice;
    this.tijarahForm.goldPricePerGram  = found.defaultGoldPrice;
    this.fitrForm.stapleGrainPricePerKg = found.defaultGrainPrice;

    this.result = null;
    this.error = '';
  }

  selectTab(tab: ZakatTab) {
    this.activeTab = tab;
    this.result = null;
    this.error = '';
  }

  calculate() {
    this.loading = true;
    this.result = null;
    this.error = '';

    const obs$ = {
      mal:        this.zakatService.calculateMal(this.malForm),
      goldsilver: this.zakatService.calculateGoldSilver(this.goldForm),
      tijarah:    this.zakatService.calculateTijarah(this.tijarahForm),
      ziraa:      this.zakatService.calculateZiraa(this.ziraaForm),
      mawashi:    this.zakatService.calculateMawashi(this.mawashiForm),
      fitr:       this.zakatService.calculateFitr(this.fitrForm),
    }[this.activeTab];

    obs$.subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.result = res;
          this.loading = false;
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.error = err instanceof TimeoutError
            ? '⏱️ انتهت مهلة الاتصال — تحقق من اتصالك بالإنترنت وأعد المحاولة'
            : this.t('error_msg');
          this.loading = false;
          this.cdr.detectChanges();
        });
      }
    });
  }

  formatNumber(n: number): string {
    const locale = this.ls.lang() === 'ar' ? 'ar-DZ' : 'fr-FR';
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(n);
  }

  get fitrPerPerson(): number {
    return 2.5 * this.fitrForm.stapleGrainPricePerKg;
  }

  readonly currentYear = new Date().getFullYear();
}
