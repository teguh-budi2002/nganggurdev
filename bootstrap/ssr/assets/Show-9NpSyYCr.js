import { mergeProps, useSSRContext, defineAsyncComponent, ref, watch, unref, withCtx, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderSuspense } from "vue/server-renderer";
import { _ as _export_sfc, a as _sfc_main$4 } from "./AppLayout-CdmQtvWT.js";
import { Head, Link } from "@inertiajs/vue3";
import "laravel-vue-i18n";
import "axios";
import "@lottiefiles/dotlottie-vue";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 bg-white rounded-md lg:p-4" }, _attrs))}><div class="flex flex-col justify-center items-center space-y-4"><div class="bg-slate-300 w-10/12 h-10 animate-pulse rounded-md"></div><div class="bg-slate-300 w-3/4 h-10 animate-pulse rounded-md"></div></div><div class="flex justify-center items-center space-x-4 mt-4"><div class="bg-slate-300 w-8 h-8 animate-pulse rounded-full"></div><div class="bg-slate-300 w-8 h-8 animate-pulse rounded-full"></div><div class="bg-slate-300 w-8 h-8 animate-pulse rounded-full"></div></div><div class="flex items-center space-x-2 border-t border-slate-200 pt-2 mt-4"><div class="bg-slate-300 w-28 h-4 animate-pulse rounded-md"></div><p>-</p><div class="bg-slate-300 w-10 h-4 animate-pulse rounded-md"></div></div><div class="mt-5 mb-5"><div class="flex items-center justify-center bg-slate-300 w-full h-96 animate-pulse rounded-md"><svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path></svg></div></div><div class="mt-5"><div class="bg-slate-300 w-full h-10 animate-pulse rounded-md"></div><div class="bg-slate-300 w-10/12 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-3/4 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-10/12 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-2/3 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-11/12 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-11/12 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-11/12 h-10 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-11/12 h-10 animate-pulse rounded-md mt-3"></div></div><div class="mt-10 flex items-center space-x-2"><div class="bg-slate-300 w-10 h-4 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-10 h-4 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-10 h-4 animate-pulse rounded-md mt-3"></div><div class="bg-slate-300 w-10 h-4 animate-pulse rounded-md mt-3"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Article/SekeletonLoading/Body.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BodyArticleSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit shadow rounded-md bg-white border border-slate-100 p-6" }, _attrs))}><div class="header_table_of_content flex items-center space-x-2"><img src="/assets/images/icon/table-of-contents.svg" alt="table of content icon" class="w-5 h-5"><p class="font-[&#39;Roboto&#39;] font-semibold text-slate-600">Table of Content</p></div><div class="mt-4 border-t border-slate-200 space-y-4 pt-2"><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg><div class="bg-slate-300 w-full h-4 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg><div class="bg-slate-300 w-full h-4 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg><div class="bg-slate-300 w-full h-4 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg><div class="bg-slate-300 w-full h-4 animate-pulse rounded-md"></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Article/SekeletonLoading/TableOfContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TableOfContentSekeleton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit shadow rounded-md bg-white border border-slate-100 p-4 mt-6" }, _attrs))}><div class="header_table_of_content flex items-center space-x-2"><img src="/assets/images/icon/article.svg" alt="article icon" class="w-5 h-5"><p class="font-[&#39;Roboto&#39;] font-semibold text-slate-600">${ssrInterpolate(_ctx.$t("article.series"))}</p></div><div class="border-t border-slate-200 pt-3 mt-3"></div><div class="mt- max-h-48 overflow-auto custom-scroll p-2"><div class="flex flex-col space-y-4"><div class="flex items-center space-x-3 bg-neutral-100 shadow p-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-rose-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><div class="bg-slate-300 w-full h-10 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3 bg-neutral-100 shadow p-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-rose-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><div class="bg-slate-300 w-full h-10 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3 bg-neutral-100 shadow p-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-rose-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><div class="bg-slate-300 w-full h-10 animate-pulse rounded-md"></div></div><div class="flex items-center space-x-3 bg-neutral-100 shadow p-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-rose-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><div class="bg-slate-300 w-full h-10 animate-pulse rounded-md"></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Article/SekeletonLoading/ArticleSeries.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleSeriesSekeleton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$4
}, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    article: Object,
    articleSession: Object
  },
  setup(__props) {
    const props = __props;
    const BodyArticle = defineAsyncComponent({
      loader: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./Body-BmU4KyL7.js"));
          }, 1e3);
        });
      }
    });
    const TableOfContent = defineAsyncComponent({
      loader: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./TableOfContent-CPmI_D2T.js"));
          }, 1e3);
        });
      }
    });
    const ArticleSeries = defineAsyncComponent({
      loader: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./ArticleSeries-Bg9RCaaM.js"));
          }, 1e3);
        });
      }
    });
    const bodyRef = ref(null);
    const bodyContentRef = ref(null);
    watch(bodyRef, (newVal) => {
      if (!newVal) return;
      bodyContentRef.value = newVal.contentRef;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(props.article.title)}</title><meta name="description"${ssrRenderAttr("content", props.article.meta_description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", props.article.meta_keyword)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(props.article.title), 1),
              createVNode("meta", {
                name: "description",
                content: props.article.meta_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: props.article.meta_keyword
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:mt-32 mt-20 h-full min-h-screen w-full bg-white"><div class="flex flex-col items-center justify-center"><div class="lg:mx-o mx-4"><a href="https://my.domainesia.com/ref.php?u=25983"><img src="https://dnva.me/32ar4" class="rounded-md" width="800px" height="90px" alt="www.domainesia.com"></a></div><div class="md:w-10/12 w-11/12 grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mt-10 mt-8">`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(BodyArticle), {
            article: props.article,
            ref_key: "bodyRef",
            ref: bodyRef
          }, null, _parent));
        },
        fallback: () => {
          _push(ssrRenderComponent(BodyArticleSkeleton, null, null, _parent));
        },
        _: 1
      });
      _push(`<div class="w-full flex flex-col space-y-6 lg:col-span-2"><div class="sticky top-28"><div class="md:block hidden">`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(TableOfContent), { "content-ref": bodyContentRef.value }, null, _parent));
        },
        fallback: () => {
          _push(ssrRenderComponent(TableOfContentSekeleton, null, null, _parent));
        },
        _: 1
      });
      _push(`</div>`);
      if (props.articleSession) {
        _push(`<div>`);
        ssrRenderSuspense(_push, {
          default: () => {
            _push(ssrRenderComponent(unref(ArticleSeries), {
              "article-session": props.articleSession
            }, null, _parent));
          },
          fallback: () => {
            _push(ssrRenderComponent(ArticleSeriesSekeleton, null, null, _parent));
          },
          _: 1
        });
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="saweria_trakteer bg-white md:w-3/6 w-11/12 mt-10 p-4 border border-slate-100 rounded-md shadow-md"><div class="font-[&#39;Roboto&#39;] text-slate-900 tracking-wide font-light text-center">${_ctx.$t("donation.text") ?? ""}</div><div class="flex items-center justify-center space-x-4 mt-5"><a href="https://saweria.co/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-amber-300 border-2 border-amber-600 hover:bg-amber-500 text-white font-[&#39;Open_Sans&#39;] transition-colors duration-200 uppercase font-bold text-sm"><img src="/assets/images/icon/saweria.png" class="w-8 h-8" alt="saweria icon"><span>Saweria</span></a><a href="https://trakteer.id/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-rose-300 border-2 border-rose-600 hover:bg-rose-600 text-white font-[&#39;Open_Sans&#39;] transition-colors duration-200 font-bold text-sm uppercase"><img src="/assets/images/icon/trakteer.png" class="w-8 h-8 rounded-full" alt="saweria icon"><span>trakteer</span></a></div></div><div class="mt-10 lg:mx-0 mx-4"><a href="https://my.domainesia.com/ref.php?u=25983"><img src="https://dnva.me/bne38" class="rounded-md" width="770px" height="90px" alt="www.domainesia.com"></a></div><div class="bg-white w-fit mt-10 p-2 px-4 border border-slate-200 rounded-full shadow-sm animate-bounce"><p class="font-[&#39;Roboto&#39;] text-slate-700 flex items-center space-x-1">Want to read more? `);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "font-semibold text-sky-600 hover:text-sky-400 transition-colors duration-200 ml-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Click me! `);
          } else {
            return [
              createTextVNode(" Click me! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Article/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
