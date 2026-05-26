import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang, Translations } from '../models/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('ar');
  dir = computed<'rtl' | 'ltr'>(() => this.lang() === 'ar' ? 'rtl' : 'ltr');

  setLang(lang: Lang) {
    this.lang.set(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  t(key: keyof Translations): string {
    return TRANSLATIONS[this.lang()][key] ?? TRANSLATIONS['ar'][key];
  }
}
