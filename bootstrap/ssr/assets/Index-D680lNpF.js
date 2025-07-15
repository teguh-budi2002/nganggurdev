import { ref, computed, onMounted, watch, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
<<<<<<<< HEAD:bootstrap/ssr/assets/Index-DhKYMcRU.js
import { _ as _export_sfc, a as _sfc_main$2 } from "./AppLayout-BDvEVXro.js";
========
import { _ as _export_sfc, a as _sfc_main$2 } from "./AppLayout-DPXdQxEW.js";
>>>>>>>> 3b42cf8c9902b9daba6d8ad9aeabf4d5f71156ec:bootstrap/ssr/assets/Index-D680lNpF.js
import { Head, Link } from "@inertiajs/vue3";
import { t as truncate } from "./truncate-BpanwDEh.js";
import "laravel-vue-i18n";
import "axios";
import "@lottiefiles/dotlottie-vue";
const _sfc_main$1 = {
  __name: "TabPanel",
  __ssrInlineRender: true,
  props: {
    tabs: {
      type: Array,
      required: true,
      validator: (tabs) => {
        return tabs.every(
          (tab) => tab.id && tab.title && (tab.content || tab.loader || tab.component || tab.useSlot)
        );
      }
    },
    defaultTab: {
      type: [String, Number],
      default: 0
    },
    lazy: {
      type: Boolean,
      default: true
    },
    preloadAdjacent: {
      type: Boolean,
      default: false
    },
    loadingDelay: {
      type: Number,
      default: 300
    }
  },
  emits: [
    "tab-change",
    "tab-load-start",
    "tab-load-end",
    "tab-load-error"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeTabIndex = ref(0);
    const loadedTabs = ref(/* @__PURE__ */ new Set());
    const loadingTabs = ref(/* @__PURE__ */ new Set());
    const errorTabs = ref(/* @__PURE__ */ new Set());
    const tabErrors = ref(/* @__PURE__ */ new Map());
    const activeTab = computed(() => props.tabs[activeTabIndex.value]);
    const selectTab = async (index) => {
      if (index === activeTabIndex.value) return;
      const previousIndex = activeTabIndex.value;
      activeTabIndex.value = index;
      const tab = props.tabs[index];
      emit("tab-change", {
        tab,
        index,
        previousIndex,
        previousTab: props.tabs[previousIndex]
      });
      if (props.lazy && !loadedTabs.value.has(tab.id)) {
        await loadTab(tab.id);
      }
      if (props.preloadAdjacent) {
        preloadAdjacentTabs(index);
      }
    };
    const loadTab = async (tabId) => {
      const tab = props.tabs.find((t) => t.id === tabId);
      if (!tab || loadedTabs.value.has(tabId) || loadingTabs.value.has(tabId)) {
        return;
      }
      try {
        loadingTabs.value.add(tabId);
        errorTabs.value.delete(tabId);
        emit("tab-load-start", { tab, tabId });
        const startTime = Date.now();
        if (tab.loader && typeof tab.loader === "function") {
          await tab.loader();
        } else if (tab.asyncComponent) {
          await tab.asyncComponent();
        }
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < props.loadingDelay) {
          await new Promise(
            (resolve) => setTimeout(resolve, props.loadingDelay - elapsedTime)
          );
        }
        loadedTabs.value.add(tabId);
        emit("tab-load-end", { tab, tabId });
      } catch (error) {
        console.error(`Error loading tab ${tabId}:`, error);
        errorTabs.value.add(tabId);
        tabErrors.value.set(tabId, error.message || "Gagal memuat konten");
        emit("tab-load-error", { tab, tabId, error });
      } finally {
        loadingTabs.value.delete(tabId);
      }
    };
    const getTabError = (tabId) => {
      return tabErrors.value.get(tabId) || "Terjadi kesalahan";
    };
    const preloadAdjacentTabs = (currentIndex) => {
      const adjacentIndices = [currentIndex - 1, currentIndex + 1].filter((index) => index >= 0 && index < props.tabs.length);
      adjacentIndices.forEach((index) => {
        const tab = props.tabs[index];
        if (!loadedTabs.value.has(tab.id)) {
          loadTab(tab.id);
        }
      });
    };
    const initializeDefaultTab = () => {
      let defaultIndex = 0;
      if (typeof props.defaultTab === "string") {
        const foundIndex = props.tabs.findIndex((tab) => tab.id === props.defaultTab);
        if (foundIndex !== -1) {
          defaultIndex = foundIndex;
        }
      } else if (typeof props.defaultTab === "number") {
        if (props.defaultTab >= 0 && props.defaultTab < props.tabs.length) {
          defaultIndex = props.defaultTab;
        }
      }
      activeTabIndex.value = defaultIndex;
    };
    const activateTab = (tabIdOrIndex) => {
      let index;
      if (typeof tabIdOrIndex === "string") {
        index = props.tabs.findIndex((tab) => tab.id === tabIdOrIndex);
      } else {
        index = tabIdOrIndex;
      }
      if (index >= 0 && index < props.tabs.length) {
        selectTab(index);
      }
    };
    const preloadTab = (tabIdOrIndex) => {
      let tabId;
      if (typeof tabIdOrIndex === "string") {
        tabId = tabIdOrIndex;
      } else {
        const tab = props.tabs[tabIdOrIndex];
        tabId = tab == null ? void 0 : tab.id;
      }
      if (tabId) {
        loadTab(tabId);
      }
    };
    const isTabLoaded = (tabIdOrIndex) => {
      let tabId;
      if (typeof tabIdOrIndex === "string") {
        tabId = tabIdOrIndex;
      } else {
        const tab = props.tabs[tabIdOrIndex];
        tabId = tab == null ? void 0 : tab.id;
      }
      return tabId ? loadedTabs.value.has(tabId) : false;
    };
    __expose({
      activateTab,
      preloadTab,
      isTabLoaded,
      activeTabIndex: computed(() => activeTabIndex.value),
      activeTab
    });
    onMounted(async () => {
      initializeDefaultTab();
      const initialTab = props.tabs[activeTabIndex.value];
      if (initialTab && (!props.lazy || activeTabIndex.value === 0)) {
        await loadTab(initialTab.id);
      }
    });
    watch(() => props.tabs, () => {
      loadedTabs.value.clear();
      loadingTabs.value.clear();
      errorTabs.value.clear();
      tabErrors.value.clear();
      initializeDefaultTab();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-9234b857><div class="flex" role="tablist" data-v-9234b857><!--[-->`);
      ssrRenderList(__props.tabs, (tab, index) => {
        _push(`<button class="${ssrRenderClass([
          "relative flex items-center gap-2 px-5 py-3 border-0 bg-transparent text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap min-w-fit",
          "hover:bg-gray-50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "text-gray-500": activeTabIndex.value !== index,
            "text-rose-500 bg-white border-b-4 border-rose-300 -mb-0.5": activeTabIndex.value === index,
            "pointer-events-none": loadingTabs.value.has(tab.id)
          }
        ])}"${ssrRenderAttr("aria-selected", activeTabIndex.value === index)}${ssrRenderAttr("aria-controls", `tabpanel-${tab.id}`)}${ssrRenderAttr("id", `tab-${tab.id}`)} role="tab"${ssrIncludeBooleanAttr(tab.disabled) ? " disabled" : ""} style="${ssrRenderStyle({ "font-family": "'Roboto', sans-serif" })}" data-v-9234b857><span data-v-9234b857>${ssrInterpolate(tab.title)}</span>`);
        if (loadingTabs.value.has(tab.id)) {
          _push(`<div class="flex items-center" data-v-9234b857><div class="w-3.5 h-3.5 border-2 border-gray-200 border-t-rose-600 rounded-full spinner" data-v-9234b857></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div><div class="bg-white min-h-[200px]" data-v-9234b857><!--[-->`);
      ssrRenderList(__props.tabs, (tab, index) => {
        _push(`<div style="${ssrRenderStyle(activeTabIndex.value === index ? null : { display: "none" })}"${ssrRenderAttr("id", `tabpanel-${tab.id}`)}${ssrRenderAttr("aria-labelledby", `tab-${tab.id}`)} role="tabpanel" class="tab-pane" data-v-9234b857>`);
        if (loadingTabs.value.has(tab.id)) {
          _push(`<div class="flex flex-col items-center justify-center py-15 px-5 text-gray-500" data-v-9234b857><div class="w-8 h-8 border-3 border-gray-200 border-t-rose-600 rounded-full loading-spinner mb-4" data-v-9234b857></div><p class="text-sm m-0" data-v-9234b857>${ssrInterpolate(tab.loadingText || "Loading...")}</p></div>`);
        } else if (loadedTabs.value.has(tab.id)) {
          _push(`<div class="tab-content-wrapper" data-v-9234b857>`);
          ssrRenderSlot(_ctx.$slots, tab.id, {
            tab,
            isActive: activeTabIndex.value === index
          }, () => {
            _push(`<div data-v-9234b857>${tab.content ?? ""}</div>`);
          }, _push, _parent);
          _push(`</div>`);
        } else if (errorTabs.value.has(tab.id)) {
          _push(`<div class="flex flex-col items-center justify-center py-15 px-5 text-red-600 text-center" data-v-9234b857><div class="text-5xl mb-4" data-v-9234b857>⚠️</div><p class="text-sm m-0 mb-4 max-w-xs" data-v-9234b857>${ssrInterpolate(getTabError(tab.id))}</p><button class="px-4 py-2 bg-blue-600 text-white border-0 rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-blue-700" data-v-9234b857> Coba Lagi </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TabPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TabPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9234b857"]]);
const formatCurrencyIDR = (val) => {
  const newVal = typeof val === "number" ? val : parseFloat(val);
  return newVal ? newVal.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) : "";
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2,
  inheritAttrs: false
}, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    snackProducts: {
      type: Object,
      default: () => []
    },
    applicationProducts: {
      type: Object,
      default: () => []
    },
    categories: {
      type: Object,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const snackProducts = ref(props.snackProducts.data);
    const applicationProducts = ref(props.applicationProducts.data);
    const categories = ref(props.categories);
    const onTabChange = ({ tab, index, previousTab }) => {
    };
    const tabs = computed(() => {
      return categories.value.map((c) => ({
        id: c.title.toLowerCase(),
        title: c.title,
        useSlot: true
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Our Products</title><meta name="description" content="Discover our range of delicious snacks and innovative applications."${_scopeId}><meta name="keywords" content="snacks, applications, delicious, products"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Our Products"),
              createVNode("meta", {
                name: "description",
                content: "Discover our range of delicious snacks and innovative applications."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "snacks, applications, delicious, products"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:mt-20 mt-2 h-full min-h-screen w-full"><div class="flex flex-col justify-center items-center"><div class="lg:w-10/12 w-11/12 h-full mt-20"><div class="bg-rose-400 w-fit p-1 px-2 rounded-md"><p class="text-white font-[&#39;Roboto&#39;]">${ssrInterpolate(_ctx.$t("badge.product"))}</p></div><div class="lg:w-3/4 w-full mx-auto lg:mt-0 mt-4"><p class="lg:text-center text-start font-[&#39;Roboto&#39;] lg:text-5xl text-3xl capitalize font-semibold lg:leading-15 leading-11">${ssrInterpolate(_ctx.$t("hero_text.products.1"))} <span class="bg-gradient-to-r from-rose-600 to-rose-300 text-white p-1 px-2">${ssrInterpolate(_ctx.$t("delicious_snack"))}</span> ${ssrInterpolate(_ctx.$t("hero_text.products.2"))}</p></div><div class="lg:mt-10 mt-4">`);
      _push(ssrRenderComponent(TabPanel, {
        tabs: tabs.value,
        lazy: true,
        "preload-adjacent": true,
        onTabChange
      }, {
        food: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (snackProducts.value.length > 0) {
              _push2(`<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(snackProducts.value, (product) => {
                _push2(`<div class="w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200"${_scopeId}><a${ssrRenderAttr("href", product.anchor_link)} target="_blank"${_scopeId}><img${ssrRenderAttr("src", `/storage/${product.image}`)} class="rounded-t-md w-full max-h-72 object-cover object-center" alt="image snack product"${_scopeId}></a><div class="p-4"${_scopeId}><a${ssrRenderAttr("href", product.anchor_link)} class="w-full font-semibold font-[&#39;Inter&#39;] hover:text-sky-600 transition-colors duration-200" target="_blank"${_scopeId}>${ssrInterpolate(unref(truncate)(product.title, 59))}</a><div class="mt-2 space-y-4"${_scopeId}><button type="button" class="p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase"${_scopeId}>Diskon ${ssrInterpolate(product.discount)}%</button><div class="flex items-center justify-between"${_scopeId}><p class="font-[&#39;Inter&#39;] font-semibold text-green-600"${_scopeId}>Rp. ${ssrInterpolate(unref(formatCurrencyIDR)(product.price_after_discount))}</p><p class="font-[&#39;Inter&#39;] line-through text-rose-600 text-xs font-light"${_scopeId}>Rp. ${ssrInterpolate(unref(formatCurrencyIDR)(product.price))}</p></div><div class="border-t border-slate-300 pt-2 flex items-center space-x-1"${_scopeId}><img src="/assets/images/icon/star.svg" alt="star icon" class="size-5"${_scopeId}><p class="font-[&#39;Inter&#39;] text-sm font-semibold text-slate-500"${_scopeId}>5.0</p></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center mt-10"${_scopeId}><p class="md:text-xl text-sm font-[&#39;Inter&#39;] text-slate-500"${_scopeId}>No products available in this category.</p></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-5" }, [
                snackProducts.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(snackProducts.value, (product) => {
                    return openBlock(), createBlock("div", {
                      key: product.id,
                      class: "w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200"
                    }, [
                      createVNode("a", {
                        href: product.anchor_link,
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: `/storage/${product.image}`,
                          class: "rounded-t-md w-full max-h-72 object-cover object-center",
                          alt: "image snack product"
                        }, null, 8, ["src"])
                      ], 8, ["href"]),
                      createVNode("div", { class: "p-4" }, [
                        createVNode("a", {
                          href: product.anchor_link,
                          class: "w-full font-semibold font-['Inter'] hover:text-sky-600 transition-colors duration-200",
                          target: "_blank"
                        }, toDisplayString(unref(truncate)(product.title, 59)), 9, ["href"]),
                        createVNode("div", { class: "mt-2 space-y-4" }, [
                          createVNode("button", {
                            type: "button",
                            class: "p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase"
                          }, "Diskon " + toDisplayString(product.discount) + "%", 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("p", { class: "font-['Inter'] font-semibold text-green-600" }, "Rp. " + toDisplayString(unref(formatCurrencyIDR)(product.price_after_discount)), 1),
                            createVNode("p", { class: "font-['Inter'] line-through text-rose-600 text-xs font-light" }, "Rp. " + toDisplayString(unref(formatCurrencyIDR)(product.price)), 1)
                          ]),
                          createVNode("div", { class: "border-t border-slate-300 pt-2 flex items-center space-x-1" }, [
                            createVNode("img", {
                              src: "/assets/images/icon/star.svg",
                              alt: "star icon",
                              class: "size-5"
                            }),
                            createVNode("p", { class: "font-['Inter'] text-sm font-semibold text-slate-500" }, "5.0")
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center mt-10"
                }, [
                  createVNode("p", { class: "md:text-xl text-sm font-['Inter'] text-slate-500" }, "No products available in this category.")
                ]))
              ])
            ];
          }
        }),
        application: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (applicationProducts.value.length > 0) {
              _push2(`<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(applicationProducts.value, (product) => {
                _push2(`<div class="w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200"${_scopeId}><a${ssrRenderAttr("href", product.anchor_link)} target="_blank"${_scopeId}><img${ssrRenderAttr("src", `/storage/${product.image}`)} class="rounded-t-md w-full max-h-72" alt="image app product"${_scopeId}></a><div class="p-4"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: "",
                  class: "font-semibold font-['Inter'] hover:text-sky-600 transition-colors duration-200 w-fit"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(truncate)(product.title, 59))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(truncate)(product.title, 59)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="mt-2 space-y-4"${_scopeId}><button type="button" class="p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase"${_scopeId}>Diskon ${ssrInterpolate(product.discount)}%</button><div class="flex items-center justify-between"${_scopeId}><p class="font-[&#39;Inter&#39;] font-semibold text-green-600"${_scopeId}>Rp. ${ssrInterpolate(unref(formatCurrencyIDR)(product.price_after_discount))}</p><p class="font-[&#39;Inter&#39;] line-through text-rose-600 text-xs font-light"${_scopeId}>Rp. ${ssrInterpolate(unref(formatCurrencyIDR)(product.price))}</p></div><div class="border-t border-slate-300 pt-2 flex items-center space-x-1"${_scopeId}><img src="/assets/images/icon/star.svg" alt="star icon" class="size-5"${_scopeId}><p class="font-[&#39;Inter&#39;] text-sm font-semibold text-slate-500"${_scopeId}>5.0</p></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center mt-10"${_scopeId}><p class="md:text-xl text-sm font-[&#39;Inter&#39;] text-slate-500"${_scopeId}>No products available in this category.</p></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-5" }, [
                applicationProducts.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(applicationProducts.value, (product) => {
                    return openBlock(), createBlock("div", {
                      key: product.id,
                      class: "w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200"
                    }, [
                      createVNode("a", {
                        href: product.anchor_link,
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: `/storage/${product.image}`,
                          class: "rounded-t-md w-full max-h-72",
                          alt: "image app product"
                        }, null, 8, ["src"])
                      ], 8, ["href"]),
                      createVNode("div", { class: "p-4" }, [
                        createVNode(unref(Link), {
                          href: "",
                          class: "font-semibold font-['Inter'] hover:text-sky-600 transition-colors duration-200 w-fit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(truncate)(product.title, 59)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "mt-2 space-y-4" }, [
                          createVNode("button", {
                            type: "button",
                            class: "p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase"
                          }, "Diskon " + toDisplayString(product.discount) + "%", 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("p", { class: "font-['Inter'] font-semibold text-green-600" }, "Rp. " + toDisplayString(unref(formatCurrencyIDR)(product.price_after_discount)), 1),
                            createVNode("p", { class: "font-['Inter'] line-through text-rose-600 text-xs font-light" }, "Rp. " + toDisplayString(unref(formatCurrencyIDR)(product.price)), 1)
                          ]),
                          createVNode("div", { class: "border-t border-slate-300 pt-2 flex items-center space-x-1" }, [
                            createVNode("img", {
                              src: "/assets/images/icon/star.svg",
                              alt: "star icon",
                              class: "size-5"
                            }),
                            createVNode("p", { class: "font-['Inter'] text-sm font-semibold text-slate-500" }, "5.0")
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center mt-10"
                }, [
                  createVNode("p", { class: "md:text-xl text-sm font-['Inter'] text-slate-500" }, "No products available in this category.")
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
