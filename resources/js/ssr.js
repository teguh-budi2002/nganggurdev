import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { i18nVue } from 'laravel-vue-i18n'
import { ZiggyVue } from 'ziggy'

const appName = import.meta.env.VITE_APP_NAME || 'NganggurDev';

createServer(page =>
  createInertiaApp({
    page,
    title: title => `${title} - ${appName}`,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ App, props, plugin }) {
      const ziggyData = page.props?.ziggy || {};
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
        .use(ZiggyVue, {
          ...ziggyData,
          location: ziggyData.location ? new URL(ziggyData.location) : new URL('/'),
        })
        .use(i18nVue, {
          lang: page.props.locale || 'en',
          fallbackLang: 'id',
          resolve: lang => {
            const langs = import.meta.glob('../../lang/*.json', { eager: true });
            return langs[`../../lang/${lang}.json`].default;
          },
        });
    },
  }),
)