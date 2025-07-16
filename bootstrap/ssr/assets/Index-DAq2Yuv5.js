import { mergeProps, useSSRContext, ref, resolveDirective, unref, withCtx, withDirectives, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, a as _sfc_main$2 } from "./AppLayout-DoaeSKnu.js";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { t as truncate } from "./truncate-BpanwDEh.js";
import "laravel-vue-i18n";
import "axios";
import "@lottiefiles/dotlottie-vue";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-7dc77d86><span data-v-7dc77d86></span><span data-v-7dc77d86></span><span data-v-7dc77d86></span><span data-v-7dc77d86></span><span data-v-7dc77d86></span></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Loading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7dc77d86"]]);
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2,
  inheritAttrs: false
}, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    articles: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    locale: {
      type: String,
      default: "en"
    }
  },
  setup(__props) {
    const props = __props;
    const articles = ref(props.articles);
    const categories = ref(props.categories);
    const isLoading = ref(false);
    const locale = props.locale || "en";
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      let _temp0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "List Articles" }, null, _parent));
      _push(`<div class="lg:mt-20 mt-14 h-full min-h-screen w-full"><div class="flex flex-col justify-center items-center"><div class="lg:w-10/12 w-11/12 h-full lg:mt-20 mt-10 border-b-2 border-rose-100 lg:pb-10 pb-4"><div class="grid lg:grid-cols-2 grid-cols-1"><div><div class="bg-rose-400 w-fit p-1 px-2 rounded-md"><p class="text-white font-[&#39;Roboto&#39;]">${ssrInterpolate(_ctx.$t("badge.article"))}</p></div><p class="lg:text-6xl text-4xl font-semibold font-[&#39;Roboto&#39;] mt-4">${ssrInterpolate(_ctx.$t("hero_text.article.1"))}</p><p class="lg:text-6xl text-4xl text-white font-semibold font-[&#39;Roboto&#39;] p-1 bg-gradient-to-r from-rose-600 to-rose-300 w-fit">${ssrInterpolate(_ctx.$t("hero_text.article.2"))}</p></div><div class="flex flex-col justify-center lg:mt-0 mt-5"><div><img src="/assets/images/logo/logo-no-bg.webp" alt="logo icon" loading="eager" class="w-20 h-20 mx-auto"><p class="font-[&#39;Roboto&#39;] text-center md:mt-2 text-sm">${ssrInterpolate(_ctx.$t("explore.our.latest.article.content"))}</p></div><input type="text" placeholder="Search for articles..." class="w-full p-2 px-4 lg:mt-10 mt-6 rounded-md border-2 border-rose-300 focus:outline-none font-[&#39;Roboto&#39;] placeholder:font-[&#39;Roboto&#39;]"></div></div></div><div class="lg:w-10/12 w-11/12 h-full lg:mt-8 mt-5"><p class="text-2xl font-semibold font-[&#39;Roboto&#39;]">${ssrInterpolate(_ctx.$t("latest.article"))}</p><div class="grid lg:grid-cols-4 grid-cols-1 gap-5"><div class="lg:col-span-3">`);
      if (isLoading.value) {
        _push(`<div class="loading-indicator flex justify-center items-center h-72">`);
        _push(ssrRenderComponent(Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value && articles.value.data.length === 0) {
        _push(`<div class="flex justify-center items-center h-80"><img src="/assets/images/article-not-found.webp" alt="article not found" class="w-3/8 h-auto" loading="lazy"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value && articles.value.data.length > 0) {
        _push(`<div class="grid lg:grid-cols-3 grid-cols-1 gap-3"><!--[-->`);
        ssrRenderList(articles.value.data, (article) => {
          _push(`<div class="w-full flex flex-col justify-between min-h-72 border-2 border-white hover:border-2 hover:border-rose-100 p-2 mt-5 rounded-md shadow-sm hover:shadow-lg hover:shadow-rose-100 transition-[border, shadow] duration-300">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                  alt: "article image",
                  class: "w-full max-h-44 cursor-pointer rounded-md"
                }, ssrGetDirectiveProps(_ctx, _directive_lazy, `/storage/${article.image}`)))}${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
              } else {
                return [
                  withDirectives(createVNode("img", {
                    alt: "article image",
                    class: "w-full max-h-44 cursor-pointer rounded-md"
                  }, null, 512), [
                    [_directive_lazy, `/storage/${article.image}`]
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug }),
            class: "font-semibold capitalize block font-['Inter'] text-slate-600 mt-3 text-xl w-fit"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(truncate)(article.title, 55))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(truncate)(article.title, 55)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex items-end justify-between mt-5 p-2"><p class="text-xs font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(article.author.name)}</p><p class="text-xs font-[&#39;Roboto&#39;] font-light">March 2025</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="paginate_button w-full mt-10 flex justify-start space-x-4"><button${ssrIncludeBooleanAttr(articles.value.prev_page_url === null || isLoading.value) ? " disabled" : ""} class="py-1 px-2 w-24 bg-rose-500 hover:bg-rose-400 disabled:bg-rose-300 disabled:cursor-not-allowed cursor-pointer text-white rounded-md font-[&#39;Roboto&#39;] font-medium text-sm flex items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path></svg> Previous </button><button${ssrIncludeBooleanAttr(articles.value.next_page_url === null || isLoading.value) ? " disabled" : ""} class="py-1 px-2 w-24 bg-rose-500 hover:bg-rose-400 disabled:bg-rose-300 disabled:cursor-not-allowed cursor-pointer text-white rounded-md font-[&#39;Roboto&#39;] font-medium text-sm flex items-center justify-between"> Next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path></svg></button></div></div><div class="category_filters mt-5"><div class="flex items-center space-x-2"><img src="/assets/images/icon/category.svg" alt="category icon" class="w-8 h-8"><p class="uppercase font-[&#39;Roboto&#39;] font-semibold text-slate-500 text-xl">${ssrInterpolate(_ctx.$t("category.text"))}</p></div><div class="w-full max-h-96 overflow-auto custom-scroll"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<div class="mr-3"><button class="${ssrRenderClass([{ "bg-rose-50": unref(page).props.query.categoryName === category.title }, "w-full flex justify-center items-center space-x-2 hover:bg-rose-50 transition-colors duration-150 border border-rose-300 rounded-lg shadow-sm p-2 mt-3"])}"><img${ssrRenderAttr("src", `/storage/${category.img_category}`)} class="w-8 h-8" alt="category icon"><p class="font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(category.title)}</p></button></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Article/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
