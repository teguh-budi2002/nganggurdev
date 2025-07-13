import { ref, watch, onMounted, unref, withCtx, createTextVNode, toDisplayString, nextTick, useSSRContext, mergeProps, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderTeleport, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, Head } from "@inertiajs/vue3";
import "laravel-vue-i18n";
import axios from "axios";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollY = ref(0);
    const lastScrollTop = ref(0);
    const isNavbarHidden = ref(false);
    const openSidebar = ref(false);
    const openSearchModal = ref(false);
    const page = usePage();
    const locale = ref(page.props.locale);
    const inputSearchRef = ref(null);
    const searchQuery = ref("");
    const searchResults = ref([]);
    const isLoading = ref(false);
    const hasSearched = ref(false);
    const handleNavigation = () => {
      scrollY.value = window.scrollY;
      if (scrollY.value > lastScrollTop.value && scrollY.value > 100) {
        isNavbarHidden.value = true;
      } else if (scrollY.value < lastScrollTop.value) {
        isNavbarHidden.value = false;
      }
      lastScrollTop.value = scrollY.value;
    };
    const searchArticle = debounce(async (searchQuery2) => {
      if (!searchQuery2 || searchQuery2.length < 3) {
        searchResults.value = [];
        hasSearched.value = false;
        isLoading.value = false;
        return;
      }
      hasSearched.value = true;
      isLoading.value = true;
      try {
        const response = await axios.get(`/${locale.value}/search-article`, {
          params: { searchQuery: searchQuery2 }
        });
        const results = response.data;
        setTimeout(() => {
          if (results.length > 0) {
            searchResults.value = results;
          } else {
            searchResults.value = [];
          }
          hasSearched.value = true;
          isLoading.value = false;
        }, 1e3);
      } catch (error) {
        searchResults.value = [];
        hasSearched.value = true;
        isLoading.value = false;
        console.error("Error fetching search results:", error);
      }
    }, 500);
    watch(searchQuery, (newQuery) => {
      searchArticle(newQuery.trim());
    });
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        openSearchModal.value = true;
        nextTick(() => {
          if (inputSearchRef.value) {
            inputSearchRef.value.focus();
          }
        });
      }
    };
    const resetState = () => {
      openSearchModal.value = false;
      openSidebar.value = false;
      searchQuery.value = "";
      searchResults.value = [];
      isLoading.value = false;
      hasSearched.value = false;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleNavigation);
      window.addEventListener("keydown", handleKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-42f0fdaf><nav class="${ssrRenderClass([{ "hide-navbar": isNavbarHidden.value }, "fixed top-0 w-full lg:h-20 h-fit py-4 lg:px-10 px-6 flex items-center justify-between transition-all bg-rose-100 duration-500 ease-in-out z-50"])}" data-v-42f0fdaf><div class="flex items-center justify-between xl:w-2/7 w-2/4" data-v-42f0fdaf><img src="/assets/images/logo/logo-no-bg.webp" class="w-8 h-8 lg:block hidden" loading="eager" alt="logo" data-v-42f0fdaf><div class="space-x-4 lg:block hidden" data-v-42f0fdaf>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/${locale.value}`,
        onClick: resetState,
        class: ["font-['Roboto'] font-semibold hover:text-amber-600 transition-colors duration-300 ease-in-out", { "text-amber-600": unref(page).component === "Home", "text-slate-600": unref(page).component !== "Home" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.1"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("articles.index", { locale: locale.value }),
        onClick: resetState,
        class: ["font-['Roboto'] font-semibold hover:text-amber-600 transition-colors duration-300 ease-in-out", { "text-amber-600": unref(page).component === "Article/Index", "text-slate-600": unref(page).component !== "Article/Index" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.2")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("products.index", { locale: locale.value }),
        onClick: resetState,
        class: ["font-['Roboto'] font-semibold hover:text-amber-600 transition-colors duration-300 ease-in-out", { "text-amber-600": unref(page).component === "Product/Index", "text-slate-600": unref(page).component !== "Product/Index" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.5"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.5")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!openSearchModal.value) {
        _push(`<button class="${ssrRenderClass([{ "hidden": openSidebar.value }, "lg:hidden block cursor-pointer"])}" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" data-v-42f0fdaf></path></svg></button>`);
      } else {
        _push(`<button class="lg:hidden block cursor-pointer" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" data-v-42f0fdaf></path></svg></button>`);
      }
      _push(`<img src="/assets/images/logo/logo-no-bg.webp" class="w-8 h-8 lg:hidden block" loading="eager" alt="logo" data-v-42f0fdaf></div><div class="flex items-center space-x-4" data-v-42f0fdaf><div class="flex items-center space-x-2 cursor-pointer" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5 text-rose-600" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" data-v-42f0fdaf></path></svg><div class="shadow-lg md:block hidden" data-v-42f0fdaf><div class="p-1.5 bg-rose-500 rounded-md shadow-md" data-v-42f0fdaf><p class="font-[&#39;Bebas_Neue&#39;] text-xs text-white" data-v-42f0fdaf>Ctrl + K</p></div></div></div><div class="cursor-pointer" data-v-42f0fdaf>`);
      if (locale.value === "id") {
        _push(`<img src="/assets/images/icon/indonesian.svg" loading="eager" class="w-5 h-5" alt="flag country" data-v-42f0fdaf>`);
      } else if (locale.value === "en") {
        _push(`<img loading="eager" src="/assets/images/icon/uk.svg" class="w-5 h-5" alt="flag country" data-v-42f0fdaf>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></nav><div class="lg:hidden fixed top-0 left-0 w-full h-full min-h-screen py-5 px-6 bg-rose-100 z-999" style="${ssrRenderStyle(openSidebar.value ? null : { display: "none" })}" data-v-42f0fdaf><div class="flex items-center justify-between" data-v-42f0fdaf><button class="" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" data-v-42f0fdaf></path></svg></button><div class="flex items-center space-x-4" data-v-42f0fdaf><div class="flex items-center space-x-2 cursor-pointer" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5 text-rose-600" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" data-v-42f0fdaf></path></svg><div class="shadow-lg md:block hidden" data-v-42f0fdaf><div class="p-1.5 bg-rose-500 rounded-md shadow-md" data-v-42f0fdaf><p class="font-[&#39;Bebas_Neue&#39;] text-xs text-white" data-v-42f0fdaf>Ctrl + K</p></div></div></div><div class="cursor-pointer" data-v-42f0fdaf>`);
      if (locale.value === "id") {
        _push(`<img src="/assets/images/icon/indonesian.svg" class="w-5 h-5" alt="flag country" data-v-42f0fdaf>`);
      } else if (locale.value === "en") {
        _push(`<img src="/assets/images/icon/uk.svg" class="w-5 h-5" alt="flag country" data-v-42f0fdaf>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="w-full h-full flex flex-col items-center space-y-8 mt-12" data-v-42f0fdaf>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/${locale.value}`,
        onClick: resetState,
        class: "font-['Roboto'] font-semibold text-slate-600 hover:text-amber-600 transition-colors duration-300 ease-in-out text-5xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.1"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("articles.index", { locale: locale.value }),
        onClick: resetState,
        class: "font-['Roboto'] text-slate-600 font-semibold hover:text-amber-600 transition-colors duration-300 ease-in-out text-5xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.2")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("products.index", { locale: locale.value }),
        onClick: resetState,
        class: "font-['Roboto'] text-slate-600 font-semibold hover:text-amber-600 transition-colors duration-300 ease-in-out text-5xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.5"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.5")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (openSearchModal.value) {
          _push2(`<div class="search-modal" data-v-42f0fdaf><div class="fixed top-0 left-0 w-full h-full bg-rose-100 z-40" data-v-42f0fdaf></div><div class="lg:w-2/4 w-11/12 h-fit p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg" data-v-42f0fdaf><div class="flex items-center" data-v-42f0fdaf><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 text-slate-600" data-v-42f0fdaf><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" data-v-42f0fdaf></path></svg><input type="text" class="w-full h-10 px-2 font-[&#39;Roboto&#39;] placeholder:font-[&#39;Roboto&#39;] outline-none border-none focus:outline-none focus:ring-0"${ssrRenderAttr("placeholder", _ctx.$t("search.placeholder"))}${ssrRenderAttr("value", searchQuery.value)} data-v-42f0fdaf><div class="p-0.5 border border-slate-300 shadow-xs rounded cursor-pointer" data-v-42f0fdaf><p class="font-[&#39;Roboto&#39;] text-xs text-slate-700" data-v-42f0fdaf>esc</p></div></div><div class="w-full max-h-44 overflow-auto custom-scroll" style="${ssrRenderStyle(searchResults.value.length > 0 && !isLoading.value ? null : { display: "none" })}" data-v-42f0fdaf><!--[-->`);
          ssrRenderList(searchResults.value, (result) => {
            _push2(ssrRenderComponent(unref(Link), {
              href: `/${locale.value}/article/${result.slug}`,
              onClick: resetState,
              class: "mt-2 block w-full font-['Roboto'] capitalize font-medium text-slate-600 hover:text-rose-600 transition-colors duration-150"
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(result.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(result.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push2(`<!--]--></div>`);
          if (isLoading.value) {
            _push2(`<div class="w-full justify-center items-center" data-v-42f0fdaf>`);
            _push2(ssrRenderComponent(unref(DotLottieVue), {
              src: "https://lottie.host/5897829e-ef3c-4c0d-af9a-55b8b008ce15/hce1cW9eCh.lottie",
              class: "w-32 h-32 mx-auto",
              autoplay: "",
              loop: "",
              loading: "eager"
            }, null, _parent));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (hasSearched.value && searchResults.value.length === 0 && !isLoading.value) {
            _push2(`<div class="text-center mt-4" aria-live="polite" data-v-42f0fdaf><p class="font-[&#39;Roboto&#39;] text-sm italic text-slate-600" data-v-42f0fdaf>${ssrInterpolate(_ctx.$t("search.no_results"))}</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-42f0fdaf"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    socialMedia: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const page = usePage();
    const sosmed = ref(page.props.social_media || []);
    const date = /* @__PURE__ */ new Date();
    const year = ref(date.getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full h-fit pt-8 relative" }, _attrs))}><div class="bg-[radial-gradient(circle_at_center,_#FFE4E6,_#ffffff)] absolute right-44 bottom-16 blur-3xl z-10 p-32 rounded-full"></div><div class="flex justify-center"><div class="w-11/12 z-20"><div class="grid md:grid-cols-2 grid-cols-1"><div class="pt-8"><p class="text-5xl font-[&#39;Inter&#39;] font-bold text-slate-600">NganggurDev</p><p class="font-[&#39;Roboto&#39;] font-light text-sm mt-5">Jl. Bandeng Presto, Kec. Gempol, Kab. Pasuruan, Jawa Timur 67155</p><div class="flex items-center space-x-4 mt-2"><p class="font-[&#39;Roboto&#39;] font-light text-sm text-slate-600">Special thanks for</p><div class="flex items-center space-x-2"><img src="/assets/images/icon/laravel.svg" class="w-5 h-5" alt="laravel icon"><img src="/assets/images/icon/vue.svg" class="w-5 h-5" alt="vue icon"><img src="https://raw.githubusercontent.com/innocenzi/awesome-inertiajs/main/assets/logo.svg" class="w-5 h-5" alt="inertia icon"><img src="/assets/images/icon/tailwind.svg" class="w-5 h-5" alt="tailwind icon"></div></div><div class="flex items-start space-x-8 md:mt-12 mt-8"><a${ssrRenderAttr("href", sosmed.value.facebook)} target="_blank"><img src="/assets/images/icon/fb.svg" class="w-8 h-8" alt="icon fb"></a><a${ssrRenderAttr("href", sosmed.value.youtube)} target="_blank"><img src="/assets/images/icon/yt.svg" class="w-8 h-8" alt="icon yt"></a><a${ssrRenderAttr("href", sosmed.value.tiktok)} target="_blank"><img src="/assets/images/icon/tiktok.svg" class="w-8 h-8" alt="icon tiktok"></a><a${ssrRenderAttr("href", sosmed.value.whatsapp)} target="_blank"><img src="/assets/images/icon/wa.svg" class="w-8 h-8" alt="icon wa"></a><a${ssrRenderAttr("href", sosmed.value.instagram)} target="_blank"><img src="/assets/images/icon/ig.svg" class="w-8 h-8" alt="icon ig"></a></div></div><div class="grid md:grid-cols-3 grid-cols-2 md:pt-8 md:mt-0 mt-10"><div class="flex md:justify-center justify-start md:col-span-2"><div class="flex flex-col space-y-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.1"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.2")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.4"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.4")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.5"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.5")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col space-y-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.6"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.6")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.7"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.7")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navigation.section.8"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navigation.section.8")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="flex justify-center bg-rose-100 py-4 mt-8"><p class="font-[&#39;Inter&#39;] font-light text-xs">© 2025 - ${ssrInterpolate(year.value)} ${ssrInterpolate(_ctx.$t("copyright"))} | NganggurDev</p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<link rel="alternate" hreflang="en"${ssrRenderAttr("href", unref(page).props.base_url + "/en")}${_scopeId}><link rel="alternate" hreflang="id"${ssrRenderAttr("href", unref(page).props.base_url + "/id")}${_scopeId}><link rel="alternate" hreflang="x-default"${ssrRenderAttr("href", unref(page).props.base_url + "/en")}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", unref(page).props.url)}${_scopeId}><link rel="shortcut icon" href="/assets/images/logo/logo-no-bg.webp" type="image/x-icon"${_scopeId}><meta name="description"${ssrRenderAttr("content", _ctx.$t("seo.meta.description"))}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", _ctx.$t("seo.meta.keywords"))}${_scopeId}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId}><meta property="og:title"${ssrRenderAttr("content", _ctx.$t("seo.og_title"))}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", _ctx.$t("seo.og_description"))}${_scopeId}><meta property="og:type"${ssrRenderAttr("content", _ctx.$t("seo.og_type"))}${_scopeId}><meta property="og:url"${ssrRenderAttr("content", unref(page).props.url)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", _ctx.$t("seo.og_image"))}${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", _ctx.$t("seo.og_site_name"))}${_scopeId}><meta name="robots"${ssrRenderAttr("content", _ctx.$t("seo.robots"))}${_scopeId}>`);
          } else {
            return [
              createVNode("link", {
                rel: "alternate",
                hreflang: "en",
                href: unref(page).props.base_url + "/en"
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "alternate",
                hreflang: "id",
                href: unref(page).props.base_url + "/id"
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "alternate",
                hreflang: "x-default",
                href: unref(page).props.base_url + "/en"
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "canonical",
                href: unref(page).props.url
              }, null, 8, ["href"]),
              createVNode("link", {
                rel: "shortcut icon",
                href: "/assets/images/logo/logo-no-bg.webp",
                type: "image/x-icon"
              }),
              createVNode("meta", {
                name: "description",
                content: _ctx.$t("seo.meta.description")
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: _ctx.$t("seo.meta.keywords")
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
              }),
              createVNode("meta", {
                property: "og:title",
                content: _ctx.$t("seo.og_title")
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: _ctx.$t("seo.og_description")
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: _ctx.$t("seo.og_type")
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: unref(page).props.url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: _ctx.$t("seo.og_image")
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: _ctx.$t("seo.og_site_name")
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: _ctx.$t("seo.robots")
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(Navigation, null, null, _parent));
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _export_sfc as _,
  _sfc_main as a
};
