import en from './en';
import cs from './cs';

export const locales = ['en', 'cs'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const translations = { en, cs } satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof typeof en;
