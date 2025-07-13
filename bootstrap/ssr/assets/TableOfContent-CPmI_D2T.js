import { ref, watch, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "TableOfContent",
  __ssrInlineRender: true,
  props: {
    contentRef: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const toc = ref([]);
    const activeSection = ref("");
    let observer = null;
    watch(() => props.contentRef, (newContentElement) => {
      if (newContentElement) {
        if (observer) {
          observer.disconnect();
        }
        const headings = newContentElement.querySelectorAll("h1, h2");
        const tocItems = [];
        if (headings.length === 0) {
          toc.value.push({
            id: "no-headings",
            text: "No headings found",
            level: "p"
          });
          return;
        }
        headings.forEach((heading, index) => {
          const id = `section-${index}`;
          heading.id = id;
          tocItems.push({
            id,
            text: heading.textContent,
            level: heading.tagName.toLowerCase()
          });
        });
        toc.value = tocItems;
        if (headings.length > 0) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                  activeSection.value = entry.target.id;
                }
              });
            },
            {
              rootMargin: "0px 0px -80% 0px",
              threshold: 0.5
            }
          );
          headings.forEach((heading) => observer.observe(heading));
        }
      }
    }, {
      immediate: true,
      flush: "post"
    });
    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-fit shadow rounded-md bg-white border border-slate-100 p-6" }, _attrs))}><div class="header_table_of_content flex items-center space-x-2"><img src="/assets/images/icon/table-of-contents.svg" alt="table of content icon" class="w-5 h-5"><p class="font-[&#39;Roboto&#39;] font-semibold text-slate-600">Table of Content</p></div><div class="mt-4 border-t border-slate-200 pt-2"><div class="flex flex-col space-y-3"><!--[-->`);
      ssrRenderList(toc.value, (item) => {
        _push(`<!--[-->`);
        if (item.level !== "p") {
          _push(`<div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg><a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([{ "text-rose-600 font-semibold": activeSection.value === item.id }, "text-sm leading-snug font-['Roboto'] hover:text-rose-600 transition-colors duration-150"])}">${ssrInterpolate(item.text)}</a></div>`);
        } else {
          _push(`<div class="text-sm text-slate-600 italic text-center">${ssrInterpolate(item.text)}</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Article/TableOfContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
