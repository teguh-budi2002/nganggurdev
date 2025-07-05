import { createI18n } from 'laravel-vue-i18n';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {},
});

export default i18n;
