import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { i18nVue } from 'laravel-vue-i18n';
import { ZiggyVue } from 'ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'NganggurDev';

createInertiaApp({
  progress: {
    delay: 250,
    color: '#ff1b1b',
    showSpinner: false,
  },
  title: title => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, props.initialPage.props.ziggy)
      .use(i18nVue, {
          lang: props.initialPage.props.locale || 'en',
          fallbackLang: 'id',
          resolve: async lang => {
            const langs = import.meta.glob('../../lang/*.json');
            return await langs[`../../lang/${lang}.json`]();
          },
          onLoad: () => {
            if (el && el.__vue_app__)
              return;

            app.mount(el);
          }
      });
    },
})