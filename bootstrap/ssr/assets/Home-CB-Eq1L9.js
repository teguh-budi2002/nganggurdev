import { ref, resolveDirective, mergeProps, unref, withCtx, withDirectives, createVNode, createTextVNode, toDisplayString, useSSRContext, onMounted, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { Vue3Marquee } from "vue3-marquee";
import { usePage, Link, Head } from "@inertiajs/vue3";
<<<<<<<< HEAD:bootstrap/ssr/assets/Home-BM1vfVYA.js
import { _ as _export_sfc, a as _sfc_main$5 } from "./AppLayout-CdmQtvWT.js";
========
import { _ as _export_sfc, a as _sfc_main$6 } from "./AppLayout-DDYRGlkW.js";
>>>>>>>> a820d9d2c7bee34297625b3b9c222b0ddadd99e1:bootstrap/ssr/assets/Home-CB-Eq1L9.js
import { t as truncate } from "./truncate-BpanwDEh.js";
import "laravel-vue-i18n";
import "axios";
import "@lottiefiles/dotlottie-vue";
const _sfc_main$5 = {
  __name: "ListFeaturedArticle",
  __ssrInlineRender: true,
  props: {
    featuredArticles: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const { locale } = usePage().props;
    const featuredArticles = ref(props.featuredArticles);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      let _temp0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-full mt-10" }, _attrs))} data-v-264b8024><div class="flex items-center justify-center" data-v-264b8024><div class="w-11/12 h-full" data-v-264b8024><div data-v-264b8024><p class="md:text-start text-center md:text-5xl text-3xl font-[&#39;Bebas_Neue&#39;] font-bold text-slate-600 tracking-wider" data-v-264b8024>${_ctx.$t("article.featured") ?? ""}</p></div><p class="md:text-start text-center font-[&#39;Roboto&#39;] md:text-base text-sm font-light" data-v-264b8024>${ssrInterpolate(_ctx.$t("collection.featured_article"))}</p>`);
      if (featuredArticles.value.length > 0) {
        _push(`<div class="articles grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-8 mb-10" data-v-264b8024><!--[-->`);
        ssrRenderList(featuredArticles.value, (article) => {
          _push(`<div class="w-full h-fit hover:shadow-xl transition-shadow duration-300 shadow-sm" data-v-264b8024>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                  alt: "article image",
                  class: "w-full h-full cursor-pointer rounded-t-lg"
                }, ssrGetDirectiveProps(_ctx, _directive_lazy, `/storage/${article.image}`)))} data-v-264b8024${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
              } else {
                return [
                  withDirectives(createVNode("img", {
                    alt: "article image",
                    class: "w-full h-full cursor-pointer rounded-t-lg"
                  }, null, 512), [
                    [_directive_lazy, `/storage/${article.image}`]
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="px-4 py-4 h-56 flex flex-col justify-between border-l border-r border-b border-slate-100 rounded-b-lg" data-v-264b8024><div data-v-264b8024>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug }),
            class: "font-['Inter'] font-bold text-lg text-slate-600 hover:text-sky-700 transition-colors duration-300 cursor-pointer tracking-wide"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(truncate)(article.title, 143))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(truncate)(article.title, 143)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="authror w-full flex items-center justify-between border-t border-slate-300 pt-2" data-v-264b8024><div class="categories flex items-center space-x-2" data-v-264b8024><!--[-->`);
          ssrRenderList(article.categories, (category) => {
            _push(`<div class="w-fit" data-v-264b8024>`);
            _push(ssrRenderComponent(unref(Link), {
              href: "",
              class: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", `/storage/${category.img_category}`)} class="w-5 h-5" alt="logo icon" data-v-264b8024${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: `/storage/${category.img_category}`,
                      class: "w-5 h-5",
                      alt: "logo icon"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div><p class="font-[&#39;Roboto&#39;] text-sm font-light text-slate-700 text-end" data-v-264b8024>${ssrInterpolate(article.author.name)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex justify-center w-full" data-v-264b8024><img src="/assets/images/article-not-found.webp" alt="article not found" class="w-96 mx-auto h-auto" data-v-264b8024></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Home/ListFeaturedArticle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
<<<<<<<< HEAD:bootstrap/ssr/assets/Home-BM1vfVYA.js
const ListFeaturedArticle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-264b8024"]]);
const _sfc_main$3 = {
========
const ListFeaturedArticle = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-94480883"]]);
const _sfc_main$4 = {
>>>>>>>> a820d9d2c7bee34297625b3b9c222b0ddadd99e1:bootstrap/ssr/assets/Home-CB-Eq1L9.js
  __name: "ListLatestArticle",
  __ssrInlineRender: true,
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const { locale } = usePage().props;
    const articles = ref(props.articles);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy = resolveDirective("lazy");
      let _temp0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-full mt-5" }, _attrs))} data-v-617ed67a><div class="flex items-center justify-center" data-v-617ed67a><div class="w-11/12 h-full" data-v-617ed67a><div data-v-617ed67a><p class="md:text-start text-center md:text-5xl text-3xl font-[&#39;Bebas_Neue&#39;] font-bold text-slate-600 tracking-wider" data-v-617ed67a>${_ctx.$t("home.latest_article") ?? ""}</p></div><p class="md:text-start text-center font-[&#39;Roboto&#39;] md:text-base text-sm font-light" data-v-617ed67a>${ssrInterpolate(_ctx.$t("collection.latest_article"))}</p>`);
      if (articles.value.length > 0) {
        _push(`<div class="articles grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-8 mb-10" data-v-617ed67a><!--[-->`);
        ssrRenderList(articles.value, (article) => {
          _push(`<div class="w-full h-fit hover:shadow-xl transition-shadow duration-300 shadow-sm" data-v-617ed67a>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                  alt: "article image",
                  class: "w-full h-full cursor-pointer rounded-t-lg"
                }, ssrGetDirectiveProps(_ctx, _directive_lazy, `/storage/${article.image}`)))} data-v-617ed67a${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}`);
              } else {
                return [
                  withDirectives(createVNode("img", {
                    alt: "article image",
                    class: "w-full h-full cursor-pointer rounded-t-lg"
                  }, null, 512), [
                    [_directive_lazy, `/storage/${article.image}`]
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="px-4 py-4 h-56 flex flex-col justify-between border-l border-r border-b border-slate-100 rounded-b-lg" data-v-617ed67a><div data-v-617ed67a>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("article.show", { locale: unref(locale), slug: article.slug }),
            class: "font-['Inter'] font-bold text-lg text-slate-600 hover:text-sky-700 transition-colors duration-300 cursor-pointer tracking-wide"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(truncate)(article.title, 143))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(truncate)(article.title, 143)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="authror w-full flex items-center justify-between border-t border-slate-300 pt-2" data-v-617ed67a><div class="categories flex items-center space-x-2" data-v-617ed67a><!--[-->`);
          ssrRenderList(article.categories, (category) => {
            _push(`<div class="w-fit" data-v-617ed67a>`);
            _push(ssrRenderComponent(unref(Link), {
              href: "",
              class: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", `/storage/${category.img_category}`)} class="w-5 h-5" alt="logo icon" data-v-617ed67a${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: `/storage/${category.img_category}`,
                      class: "w-5 h-5",
                      alt: "logo icon"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div><p class="font-[&#39;Roboto&#39;] text-sm font-light text-slate-700 text-end" data-v-617ed67a>${ssrInterpolate(article.author.name)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex justify-center w-full" data-v-617ed67a><img src="/assets/images/article-not-found.webp" alt="article not found" class="w-96 mx-auto h-auto" data-v-617ed67a></div>`);
      }
      _push(`</div></div><div class="flex justify-center" data-v-617ed67a><div class="bg-white w-fit mt-5 mb-10 p-2 px-4 border border-slate-200 rounded-full shadow-sm animate-bounce" data-v-617ed67a><p class="font-[&#39;Roboto&#39;] text-slate-700 flex items-center space-x-1" data-v-617ed67a>${ssrInterpolate(_ctx.$t("visit.more.articles"))}? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("articles.index", { locale: unref(locale) }),
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
      _push(`</p></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Home/ListLatestArticle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ListLatestArticle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-904c6b6b"]]);
const _sfc_main$3 = {
  __name: "ListSeriesArticle",
  __ssrInlineRender: true,
  props: {
    articleSeries: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const { locale } = usePage().props;
    const articleSeries = ref(props.articleSeries);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-full mt-5" }, _attrs))} data-v-2bc586e3><div class="flex items-center justify-center" data-v-2bc586e3><div class="w-11/12 h-full" data-v-2bc586e3><div data-v-2bc586e3><p class="md:text-start text-center md:text-5xl text-3xl font-[&#39;Bebas_Neue&#39;] font-bold text-slate-600 tracking-wider" data-v-2bc586e3>${_ctx.$t("home.series_article") ?? ""}</p><p class="md:text-start text-center font-[&#39;Roboto&#39;] md:text-base text-sm font-light" data-v-2bc586e3>${ssrInterpolate(_ctx.$t("collection.series_article"))}</p></div>`);
      if (articleSeries.value.length > 0) {
        _push(`<div class="articles grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-8 mb-10" data-v-2bc586e3><!--[-->`);
        ssrRenderList(articleSeries.value, (series) => {
          _push(`<div class="w-full h-fit hover:shadow-md transition-shadow duration-300 shadow" data-v-2bc586e3>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("list-article-of-series.index", { locale: unref(locale), slug: series.slug }),
            class: "block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `/storage/${series.image}`)} alt="article image" class="w-full h-full cursor-pointer rounded-t-xl" data-v-2bc586e3${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: `/storage/${series.image}`,
                    alt: "article image",
                    class: "w-full h-full cursor-pointer rounded-t-xl"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="px-4 py-4 h-40 flex flex-col items-center justify-between border-l border-r border-b border-slate-100 rounded-b-xl" data-v-2bc586e3>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("list-article-of-series.index", { locale: unref(locale), slug: series.slug }),
            class: "font-['Inter'] font-bold text-lg text-slate-600 hover:text-sky-700 transition-colors duration-300 cursor-pointer tracking-wide"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(series.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(series.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("list-article-of-series.index", { locale: unref(locale), slug: series.slug }),
            class: "w-full bg-rose-800 hover:bg-rose-700 transition-colors duration-150 py-1 rounded-md text-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-white font-[&#39;Roboto&#39;] font-bold" data-v-2bc586e3${_scopeId}>${ssrInterpolate(_ctx.$t("start_learning"))}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-white font-['Roboto'] font-bold" }, toDisplayString(_ctx.$t("start_learning")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex justify-center w-full" data-v-2bc586e3><img src="/assets/images/article-not-found.webp" alt="article not found" class="w-96 mx-auto h-auto" data-v-2bc586e3></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Home/ListSeriesArticle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
<<<<<<<< HEAD:bootstrap/ssr/assets/Home-BM1vfVYA.js
const ListLatestArticle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-617ed67a"]]);
========
const ListSeriesArticle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2bc586e3"]]);
>>>>>>>> a820d9d2c7bee34297625b3b9c222b0ddadd99e1:bootstrap/ssr/assets/Home-CB-Eq1L9.js
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><div class="flex justify-center"><div class="w-11/12 h-full md:mt-32 mt-10"><div class="flex justify-center"><div class="md:w-3/4 w-full" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true"><p class="text-center md:text-5xl text-3xl font-[&#39;Bebas_Neue&#39;] font-bold text-slate-600 tracking-wider">${ssrInterpolate(_ctx.$t("why_learn_with_us"))}</p></div></div><div class="grid lg:grid-cols-2 grid-cols-1 mt-10"><div class="flex flex-col items-center justify-start" data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-anchor-placement="top-center"><div class="inline-block bg-gradient-to-tl from-amber-600 via-transparent to-violet-600 p-px rounded-md mb-3"><div class="bg-white rounded-md py-1.5 px-4 lg:leading-tight"><p class="md:text-4xl text-2xl font-extrabold font-[&#39;Roboto&#39;] bg-clip-text text-transparent bg-gradient-to-tr from-amber-400 to-purple-400">${ssrInterpolate(_ctx.$t("10_free_tutorials"))}</p></div></div><div class="md:w-2/3 w-full text-center"><p class="md:text-4xl text-3xl font-[&#39;Roboto&#39;] font-semibold">Zero to Hero</p><p class="md:text-base text-xs font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(_ctx.$t("motivational_quotes"))}</p><div class="accordion-group"><div class="accordion-reason-learn-with-us bg-rose-400 rounded-t-md flex justify-between items-center p-4 mt-5"><p class="text-white font-[&#39;Open_Sans&#39;] font-semibold">Multi Language Support</p><div class="flex items-center space-x-2"><div class="w-4 h-4 bg-amber-300 rounded-full"></div><div class="w-4 h-4 bg-sky-300 rounded-full"></div><div class="w-4 h-4 bg-emerald-300 rounded-full"></div></div></div><div class="accordion-content bg-white p-4 border-r border-l border-b border-red-300"><p class="text-sm font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(_ctx.$t("reason_learn_from_us.1"))}</p></div></div><div class="accordion-group"><div class="accordion-reason-learn-with-us bg-rose-400 rounded-t-md flex justify-between items-center p-4 mt-4"><p class="text-white font-[&#39;Open_Sans&#39;] font-semibold">Beginner Friendly</p><div class="flex items-center space-x-2"><div class="w-4 h-4 bg-amber-300 rounded-full"></div><div class="w-4 h-4 bg-sky-300 rounded-full"></div><div class="w-4 h-4 bg-emerald-300 rounded-full"></div></div></div><div class="accordion-content bg-white p-4 border-r border-l border-b border-red-300"><p class="text-sm font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(_ctx.$t("reason_learn_from_us.2"))}</p></div></div><div class="accordion-group"><div class="accordion-reason-learn-with-us bg-rose-400 rounded-t-md flex justify-between items-center p-4 mt-4"><p class="text-white font-[&#39;Open_Sans&#39;] font-semibold">Easy to Learn</p><div class="flex items-center space-x-2"><div class="w-4 h-4 bg-amber-300 rounded-full"></div><div class="w-4 h-4 bg-sky-300 rounded-full"></div><div class="w-4 h-4 bg-emerald-300 rounded-full"></div></div></div><div class="accordion-content bg-white p-4 border-r border-l border-b border-red-300"><p class="text-sm font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(_ctx.$t("reason_learn_from_us.3"))}</p></div></div></div></div><div data-aos="zoom-in-right" data-aos-delay="600" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-anchor-placement="top-center" class="relative"><img src="/assets/images/carbon.webp" loading="eager" alt="image carbon" class="w-full h-auto"><img src="/assets/images/children-with-a-stick.webp" loading="eager" alt="cute boy with a stick" class="md:w-64 w-40 h-auto absolute bottom-2 right-0"></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Home/Introduction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Introduction = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "OurProduct",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = usePage().props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-10/12 h-full" }, _attrs))}><div class="text-center lg:text-5xl text-3xl font-[&#39;Bebas_Neue&#39;] font-bold text-slate-600 tracking-wider">${_ctx.$t("coding_need_a_snack") ?? ""}</div><div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10"><div class="w-full h-full flex lg:flex-row flex-col items-start"><img src="/assets/images/product_image_example.webp" class="w-3/4 h-auto mx-auto lg:hover:scale-110 hover:scale-100 transition-transform duration-300" alt="product image"><div class="flex flex-col items-start space-y-1 h-full lg:mt-0 mt-4"><p class="text-xl font-medium font-[&#39;Roboto&#39;] text-slate-600">Basreng Pedas Daun Jeruk</p><p class="text-sm font-[&#39;Roboto&#39;] font-light">35 / 250 / 500 / 1000gr</p><p class="text-sm font-[&#39;Roboto&#39;] font-light mt-3">bakso goreng ikan, bumbu premium, bawang putih bubuk, cabe bubuk, bumbu asin, daun jeruk</p><div class="w-full flex lg:flex-col lg:justify-end lg:items-baseline items-center justify-between h-full lg:space-y-1 lg:mt-0 mt-3"><div class="flex items-center"><a href="" class="mt-2 py-1 px-2 rounded-md bg-amber-700 hover:bg-amber-600 transition-colors duration-300 text-white flex items-center space-x-2"><img src="/assets/images/icon/shopee.svg" alt="shopee icon" class="w-7 h-7"><span>Order Now</span></a></div><div class="flex items-center space-x-2"><img src="/assets/images/icon/star.svg" alt="icon star" class="w-6 h-6"><p class="font-semibold font-[&#39;Roboto&#39;] text-slate-500">5.0</p></div></div></div></div><div class="flex lg:flex-row flex-col-reverse lg:mt-0 mt-5 items-start"><div class="flex flex-col items-start space-y-1 w-full h-full lg:text-end lg:mt-0 mt-4"><p class="text-xl font-medium font-[&#39;Roboto&#39;] text-slate-600">Basreng Original Daun Jeruk</p><p class="text-sm font-[&#39;Roboto&#39;] font-light w-full">35 / 250 / 500 / 1000gr</p><p class="text-sm font-[&#39;Roboto&#39;] font-light mt-3">bakso goreng ikan, bumbu premium, bawang putih bubuk, bumbu asin, daun jeruk</p><div class="w-full flex lg:flex-col flex-row lg:justify-end justify-between lg:items-end items-center h-full space-y-1 lg:mt-0 mt-3"><div class="flex items-center"><a href="" class="mt-2 py-1 px-2 rounded-md bg-amber-700 hover:bg-amber-600 transition-colors duration-300 text-white flex items-center space-x-2"><img src="/assets/images/icon/shopee.svg" alt="shopee icon" class="w-7 h-7"><span>Order Now</span></a></div><div class="flex items-center space-x-2"><img src="/assets/images/icon/star.svg" alt="icon star" class="w-6 h-6"><p class="font-semibold font-[&#39;Roboto&#39;] text-slate-500">5.0</p></div></div></div><img src="/assets/images/product_image_example2.webp" class="w-3/4 h-auto mx-auto lg:hover:scale-110 hover:scale-100 transition-transform duration-300" alt="product image"></div></div><div class="flex justify-center"><div class="bg-white w-fit lg:mt-20 mt-10 p-2 px-4 border border-slate-200 rounded-full shadow-sm animate-bounce"><p class="font-[&#39;Roboto&#39;] text-slate-700 flex items-center space-x-1">${ssrInterpolate(_ctx.$t("visit.more.products"))}? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("products.index", { locale: unref(locale) }),
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
      _push(`</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Home/OurProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$6
}, {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    articleSeries: {
      type: Array,
      default: () => []
    },
    articles: {
      type: Array,
      default: () => []
    },
    featuredArticles: {
      type: Array,
      default: () => []
    },
    locale: {
      type: String,
      default: "en"
    }
  },
  setup(__props) {
    const props = __props;
    const articleSeries = ref(props.articleSeries);
    const articles = ref(props.articles);
    const featuredArticles = ref(props.featuredArticles);
    const locale = ref(props.locale);
    const imageIcons1 = ref([
      { src: "/assets/images/icon/html5.svg", alt: "HTML 5" },
      { src: "/assets/images/icon/css3.svg", alt: "CSS 3" },
      { src: "/assets/images/icon/javascript.svg", alt: "Javascript" },
      { src: "/assets/images/icon/php.svg", alt: "PHP" }
    ]);
    const imageIcons2 = ref([
      { src: "/assets/images/icon/laravel.svg", alt: "Laravel" },
      { src: "/assets/images/icon/vue.svg", alt: "Vue.js" },
      { src: "/assets/images/icon/tailwind.svg", alt: "Tailwind CSS" },
      { src: "/assets/images/icon/mysql.svg", alt: "MySQL" },
      { src: "/assets/images/icon/vscode.svg", alt: "VS Code" }
    ]);
    onMounted(() => {
      AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: false,
        disable: "mobile"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
      _push(`<div><div class="landing_page lg:mt-20 h-full w-full"><div class="grid lg:grid-cols-2 grid-cols-1 lg:mt-20 mt-10 bg-rose-100"><div class="hero_text_section p-8 flex flex-col justify-center space-y-6"><p class="md:text-7xl text-4xl font-[&#39;Open_Sans&#39;] font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-yellow-600 via-orange-500 to-rose-500 leading-[1.2] overflow-visible">${ssrInterpolate(_ctx.$t("brand_name"))}</p><div class="md:mt-4"><p class="md:text-5xl text-3xl font-[&#39;Open_Sans&#39;] italic font-light md:leading-13 text-slate-600"> &quot;${ssrInterpolate(_ctx.$t("hero_text.part1"))} <span class="font-bold">${ssrInterpolate(_ctx.$t("hero_text.part2"))}</span>&quot; </p><p class="font-[&#39;Roboto&#39;] md:text-base text-sm capitalize font-light text-slate-700 mt-3">${ssrInterpolate(_ctx.$t("sub_text.1"))} <span class="text-red-700">| ${ssrInterpolate(_ctx.$t("sub_text.2"))}</span></p></div><div class="mt-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("articles.index", { locale: locale.value }),
        class: "py-2 px-8 bg-gradient-to-r shadow-lg from-rose-500 from-45% to-rose-300 hover:from-rose-700 hover:to-rose-500 transition-colors duration-500 text-white rounded-md font-['Open_Sans'] text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("button.landing_page.text"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("button.landing_page.text")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero_image_section lg:block hidden"><img src="/assets/images/hero-image.webp" alt="Hero Image" class="w-2/3 h-auto mx-auto"></div></div></div><section><div class="w-full h-full"><div class="flex flex-col items-center justify-center"><div class="md:w-2/4 w-3/4 mt-10">`);
      _push(ssrRenderComponent(unref(Vue3Marquee), {
        "pause-on-hover": true,
        clone: true,
        duration: 35,
        direction: "reverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(imageIcons1.value, (image) => {
              _push2(`<div class="md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md"${_scopeId}><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="md:w-12 w-8 h-auto" loading="eager"${_scopeId}><p class="font-[&#39;Roboto&#39;] md:text-base text-sm font-light text-slate-900"${_scopeId}>${ssrInterpolate(image.alt)}</p></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(imageIcons1.value, (image) => {
                return openBlock(), createBlock("div", {
                  key: image,
                  class: "md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md"
                }, [
                  createVNode("img", {
                    src: image.src,
                    alt: image.alt,
                    class: "md:w-12 w-8 h-auto",
                    loading: "eager"
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "font-['Roboto'] md:text-base text-sm font-light text-slate-900" }, toDisplayString(image.alt), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:w-2/3 w-11/12 mt-5">`);
      _push(ssrRenderComponent(unref(Vue3Marquee), {
        "pause-on-hover": true,
        clone: true,
        duration: 35,
        direction: "normal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(imageIcons2.value, (image) => {
              _push2(`<div class="md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md"${_scopeId}><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="md:w-12 w-8 h-auto"${_scopeId}><p class="font-[&#39;Roboto&#39;] md:text-base text-sm font-light text-slate-900"${_scopeId}>${ssrInterpolate(image.alt)}</p></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(imageIcons2.value, (image) => {
                return openBlock(), createBlock("div", {
                  key: image,
                  class: "md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md"
                }, [
                  createVNode("img", {
                    src: image.src,
                    alt: image.alt,
                    class: "md:w-12 w-8 h-auto"
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "font-['Roboto'] md:text-base text-sm font-light text-slate-900" }, toDisplayString(image.alt), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(Introduction, null, null, _parent));
      if (articleSeries.value.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(ListSeriesArticle, { articleSeries: articleSeries.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (featuredArticles.value.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(ListFeaturedArticle, { featuredArticles: featuredArticles.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (articles.value.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(ListLatestArticle, { articles: articles.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="w-full h-full"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></section></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
