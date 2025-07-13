import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "ArticleSeries",
  __ssrInlineRender: true,
  props: {
    articleSession: Object
  },
  setup(__props) {
    const props = __props;
    const articleSession = ref(props.articleSession);
    const page = usePage();
    const locale = ref(page.props.locale);
    const isArticleSession = (slug) => {
      return page.props.slug === slug;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit shadow rounded-md bg-white border border-slate-100 p-4 md:mt-6" }, _attrs))}><div class="header_table_of_content flex items-center space-x-2"><img src="/assets/images/icon/article.svg" alt="article icon" class="w-5 h-5"><p class="font-[&#39;Roboto&#39;] font-semibold text-slate-600">${ssrInterpolate(_ctx.$t("article.series"))}</p></div><div class="border-t border-slate-200 pt-3 mt-3"></div><div class="mt- max-h-48 overflow-auto custom-scroll p-2"><div class="flex flex-col space-y-4"><!--[-->`);
      ssrRenderList(articleSession.value.articles, (session) => {
        _push(`<div class="${ssrRenderClass([{
          "bg-rose-500": isArticleSession(session.slug),
          "bg-neutral-100": !isArticleSession(session.slug)
        }, "flex items-center space-x-3 shadow p-4 rounded-lg"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${ssrRenderClass([{
          "text-white": isArticleSession(session.slug),
          "text-rose-500": !isArticleSession(session.slug)
        }, "size-5"])}"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/${locale.value}/article/${session.slug}`,
          class: ["text-sm leading-relaxed font-['Roboto'] text-slate-600 transition-colors duration-150", {
            "text-white": isArticleSession(session.slug),
            "text-slate-600 hover:text-slate-500": !isArticleSession(session.slug)
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(session.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(session.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Article/ArticleSeries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
