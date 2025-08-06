// 🕉️ TAURUS AGENT INTERNATIONALIZATION SYSTEM
// Global accessibility for Vedic Wisdom Series
// Supporting 15+ languages for worldwide spiritual community

export interface LocalizedContent {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  region: string;
  currency: string;
  dateFormat: string;
  numberFormat: Intl.NumberFormatOptions;
}

export interface TranslationKeys {
  // Navigation
  'nav.home': string;
  'nav.teachings': string;
  'nav.about': string;
  'nav.testimonials': string;
  'nav.contact': string;

  // Hero sections
  'hero.primary.title': string;
  'hero.primary.subtitle': string;
  'hero.primary.description': string;
  'hero.cta.primary': string;
  'hero.cta.secondary': string;

  // Offerings
  'offerings.title': string;
  'offerings.subtitle': string;
  'offering.features': string;
  'offering.duration': string;
  'offering.price': string;

  // Teacher section
  'teacher.credentials': string;
  'teacher.vision': string;
  'teacher.experience': string;

  // Testimonials
  'testimonials.title': string;
  'testimonials.subtitle': string;
  'testimonial.rating': string;

  // Contact
  'contact.title': string;
  'contact.form.name': string;
  'contact.form.email': string;
  'contact.form.message': string;
  'contact.form.submit': string;

  // Common
  'common.loading': string;
  'common.error': string;
  'common.success': string;
  'common.learn_more': string;
  'common.read_more': string;
  'common.back': string;
  'common.next': string;
  'common.previous': string;

  // Spiritual terms (transliterated + translated)
  'spiritual.dharma': string;
  'spiritual.karma': string;
  'spiritual.moksha': string;
  'spiritual.yoga': string;
  'spiritual.vedas': string;
  'spiritual.guru': string;
  'spiritual.shishya': string;
  'spiritual.sadhana': string;
  'spiritual.mantra': string;
  'spiritual.om': string;
}

// Supported locales configuration
export const supportedLocales: Record<string, LocalizedContent> = {
  'en-US': {
    code: 'en-US',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    region: 'Americas',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: { style: 'currency', currency: 'USD' }
  },
  'hi-IN': {
    code: 'hi-IN',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    direction: 'ltr',
    region: 'India',
    currency: 'INR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'INR' }
  },
  'sa-IN': {
    code: 'sa-IN',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    direction: 'ltr',
    region: 'India',
    currency: 'INR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'INR' }
  },
  'es-ES': {
    code: 'es-ES',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    region: 'Europe',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'EUR' }
  },
  'fr-FR': {
    code: 'fr-FR',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    region: 'Europe',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'EUR' }
  },
  'de-DE': {
    code: 'de-DE',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    region: 'Europe',
    currency: 'EUR',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: { style: 'currency', currency: 'EUR' }
  },
  'pt-BR': {
    code: 'pt-BR',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    region: 'Brazil',
    currency: 'BRL',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'BRL' }
  },
  'ru-RU': {
    code: 'ru-RU',
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    region: 'Russia',
    currency: 'RUB',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: { style: 'currency', currency: 'RUB' }
  },
  'ja-JP': {
    code: 'ja-JP',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    region: 'Japan',
    currency: 'JPY',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: { style: 'currency', currency: 'JPY' }
  },
  'zh-CN': {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    direction: 'ltr',
    region: 'China',
    currency: 'CNY',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: { style: 'currency', currency: 'CNY' }
  },
  'ar-SA': {
    code: 'ar-SA',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    region: 'Middle East',
    currency: 'SAR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'SAR' }
  },
  'th-TH': {
    code: 'th-TH',
    name: 'Thai',
    nativeName: 'ไทย',
    direction: 'ltr',
    region: 'Thailand',
    currency: 'THB',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'THB' }
  },
  'id-ID': {
    code: 'id-ID',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    direction: 'ltr',
    region: 'Indonesia',
    currency: 'IDR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'IDR' }
  },
  'it-IT': {
    code: 'it-IT',
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    region: 'Italy',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'currency', currency: 'EUR' }
  },
  'nl-NL': {
    code: 'nl-NL',
    name: 'Dutch',
    nativeName: 'Nederlands',
    direction: 'ltr',
    region: 'Netherlands',
    currency: 'EUR',
    dateFormat: 'DD-MM-YYYY',
    numberFormat: { style: 'currency', currency: 'EUR' }
  }
};

// Regional pricing structures
export const regionalPricing = {
  'tier-1': { // Americas, Western Europe, Australia
    regions: ['Americas', 'Europe', 'Australia'],
    multiplier: 1.0,
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD']
  },
  'tier-2': { // Eastern Europe, Asia-Pacific
    regions: ['Eastern Europe', 'Japan', 'Singapore'],
    multiplier: 0.8,
    currencies: ['JPY', 'SGD', 'PLN', 'CZK']
  },
  'tier-3': { // India, Southeast Asia, Latin America
    regions: ['India', 'Thailand', 'Indonesia', 'Brazil', 'Mexico'],
    multiplier: 0.4,
    currencies: ['INR', 'THB', 'IDR', 'BRL', 'MXN']
  },
  'tier-4': { // Developing regions
    regions: ['Middle East', 'Africa', 'Central Asia'],
    multiplier: 0.3,
    currencies: ['SAR', 'EGP', 'KZT', 'UZS']
  }
};

// Sanskrit terms with regional translations
export const sanskritGlossary = {
  dharma: {
    'en-US': 'Dharma (righteous path/duty)',
    'hi-IN': 'धर्म (धार्मिक पथ)',
    'sa-IN': 'धर्मः (धारणात् धर्मः)',
    'es-ES': 'Dharma (camino recto)',
    'fr-FR': 'Dharma (voie juste)',
    'de-DE': 'Dharma (rechter Pfad)',
    'pt-BR': 'Dharma (caminho correto)',
    'ru-RU': 'Дхарма (праведный путь)',
    'ja-JP': 'ダルマ (正しい道)',
    'zh-CN': '达摩 (正道)',
    'ar-SA': 'دارما (الطريق الصحيح)',
    'th-TH': 'ธรรม (หนทางที่ถูกต้อง)',
    'id-ID': 'Dharma (jalan yang benar)',
    'it-IT': 'Dharma (sentiero giusto)',
    'nl-NL': 'Dharma (rechtvaardige pad)'
  },
  karma: {
    'en-US': 'Karma (action/consequence)',
    'hi-IN': 'कर्म (कार्य/फल)',
    'sa-IN': 'कर्म (कृञ् धातुः)',
    'es-ES': 'Karma (acción/consecuencia)',
    'fr-FR': 'Karma (action/conséquence)',
    'de-DE': 'Karma (Handlung/Folge)',
    'pt-BR': 'Karma (ação/consequência)',
    'ru-RU': 'Карма (действие/следствие)',
    'ja-JP': 'カルマ (行為/結果)',
    'zh-CN': '业 (行为/后果)',
    'ar-SA': 'كارما (العمل/النتيجة)',
    'th-TH': 'กรรม (การกระทำ/ผล)',
    'id-ID': 'Karma (tindakan/akibat)',
    'it-IT': 'Karma (azione/conseguenza)',
    'nl-NL': 'Karma (handeling/gevolg)'
  },
  yoga: {
    'en-US': 'Yoga (union/discipline)',
    'hi-IN': 'योग (संयोग/अनुशासन)',
    'sa-IN': 'योगः (युज् धातुः - संयोगे)',
    'es-ES': 'Yoga (unión/disciplina)',
    'fr-FR': 'Yoga (union/discipline)',
    'de-DE': 'Yoga (Vereinigung/Disziplin)',
    'pt-BR': 'Yoga (união/disciplina)',
    'ru-RU': 'Йога (единение/дисциплина)',
    'ja-JP': 'ヨーガ (結合/修行)',
    'zh-CN': '瑜伽 (联合/训练)',
    'ar-SA': 'يوغا (الاتحاد/الانضباط)',
    'th-TH': 'โยคะ (การรวม/ระเบียบ)',
    'id-ID': 'Yoga (penyatuan/disiplin)',
    'it-IT': 'Yoga (unione/disciplina)',
    'nl-NL': 'Yoga (verbinding/discipline)'
  }
};

// Cultural adaptation guidelines
export const culturalAdaptations = {
  'hi-IN': {
    respectfulAddress: 'आदरणीय',
    timeFormat: '12-hour',
    weekStart: 'monday',
    festivals: ['Diwali', 'Holi', 'Navratri'],
    teachingStyle: 'traditional-reverential'
  },
  'ja-JP': {
    respectfulAddress: '先生',
    timeFormat: '24-hour',
    weekStart: 'sunday',
    culturalNotes: 'Emphasis on respect and formal language',
    teachingStyle: 'structured-hierarchical'
  },
  'ar-SA': {
    respectfulAddress: 'أستاذ',
    timeFormat: '12-hour',
    weekStart: 'saturday',
    culturalNotes: 'Islamic context awareness',
    teachingStyle: 'wisdom-focused'
  },
  'zh-CN': {
    respectfulAddress: '老师',
    timeFormat: '24-hour',
    weekStart: 'monday',
    culturalNotes: 'Balance between tradition and modernity',
    teachingStyle: 'practical-philosophical'
  }
};

// Locale detection and management
export class LocaleManager {
  private currentLocale: string = 'en-US';
  private fallbackLocale: string = 'en-US';
  private translations: Map<string, Record<string, string>> = new Map();

  constructor(defaultLocale?: string) {
    if (defaultLocale && supportedLocales[defaultLocale]) {
      this.currentLocale = defaultLocale;
    }
    this.detectBrowserLocale();
  }

  private detectBrowserLocale(): void {
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language || 'en-US';
      const matchedLocale = Object.keys(supportedLocales).find(
        locale => locale.startsWith(browserLang.split('-')[0])
      );
      
      if (matchedLocale) {
        this.currentLocale = matchedLocale;
      }
    }
  }

  setLocale(locale: string): boolean {
    if (supportedLocales[locale]) {
      this.currentLocale = locale;
      return true;
    }
    return false;
  }

  getCurrentLocale(): LocalizedContent {
    return supportedLocales[this.currentLocale];
  }

  getDirection(): 'ltr' | 'rtl' {
    return supportedLocales[this.currentLocale].direction;
  }

  formatPrice(amount: number, currency?: string): string {
    const locale = supportedLocales[this.currentLocale];
    const targetCurrency = currency || locale.currency;
    
    return new Intl.NumberFormat(this.currentLocale, {
      style: 'currency',
      currency: targetCurrency
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.currentLocale).format(date);
  }

  getPricingTier(): string {
    const locale = supportedLocales[this.currentLocale];
    
    for (const [tier, config] of Object.entries(regionalPricing)) {
      if (config.regions.includes(locale.region) || 
          config.currencies.includes(locale.currency)) {
        return tier;
      }
    }
    return 'tier-1'; // Default to highest tier
  }

  getRegionalPrice(basePrice: number): number {
    const tier = this.getPricingTier();
    const multiplier = regionalPricing[tier as keyof typeof regionalPricing].multiplier;
    return Math.round(basePrice * multiplier);
  }

  getSanskritTerm(term: keyof typeof sanskritGlossary): string {
    const translations = sanskritGlossary[term];
    return translations[this.currentLocale as keyof typeof translations] || 
           translations[this.fallbackLocale as keyof typeof translations] ||
           term;
  }

  getCulturalAdaptation(): any {
    return culturalAdaptations[this.currentLocale as keyof typeof culturalAdaptations] || {};
  }

  loadTranslations(locale: string, translations: Record<string, string>): void {
    this.translations.set(locale, translations);
  }

  translate(key: string, params?: Record<string, string>): string {
    const translations = this.translations.get(this.currentLocale) || 
                        this.translations.get(this.fallbackLocale) || {};
    
    let translation = translations[key] || key;
    
    // Simple parameter substitution
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value);
      });
    }
    
    return translation;
  }
}

// Singleton instance
export const localeManager = new LocaleManager();

// React hook for localization
import { useState, useEffect } from 'react';

export function useLocalization() {
  const [locale, setLocale] = useState(localeManager.getCurrentLocale());
  const [direction, setDirection] = useState(localeManager.getDirection());

  useEffect(() => {
    const currentLocale = localeManager.getCurrentLocale();
    setLocale(currentLocale);
    setDirection(currentLocale.direction);
  }, []);

  const changeLocale = (newLocale: string) => {
    if (localeManager.setLocale(newLocale)) {
      const updatedLocale = localeManager.getCurrentLocale();
      setLocale(updatedLocale);
      setDirection(updatedLocale.direction);
      return true;
    }
    return false;
  };

  return {
    locale,
    direction,
    changeLocale,
    formatPrice: localeManager.formatPrice.bind(localeManager),
    formatDate: localeManager.formatDate.bind(localeManager),
    getRegionalPrice: localeManager.getRegionalPrice.bind(localeManager),
    getSanskritTerm: localeManager.getSanskritTerm.bind(localeManager),
    translate: localeManager.translate.bind(localeManager),
    supportedLocales
  };
}