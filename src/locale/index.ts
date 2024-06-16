import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import en from './lang/en.json'
import zh from './lang/zh.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
type Locale = 'en' | 'zh'
export function useLocale() {
  const { i18n } = useTranslation()
  const locale = (i18n.resolvedLanguage || 'zh') as Locale
  const langs = {
    en: 'English',
    zh: '简体中文',
  }
  const setLang = (locale: Locale) => {
    i18n.changeLanguage(locale)
  }

  return {
    locale,
    langs,
    setLang,
  }
}
