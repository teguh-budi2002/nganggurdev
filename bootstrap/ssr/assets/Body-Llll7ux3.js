import { ref, onMounted, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Body",
  __ssrInlineRender: true,
  props: {
    article: Object
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const contentRef = ref(null);
    const renderedContent = ref("");
    const generateContentWithIds = () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(props.article.content, "text/html");
      const headings = doc.querySelectorAll("h1, h2");
      headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.setAttribute("id", id);
      });
      renderedContent.value = doc.body.innerHTML;
    };
    const enhanceCodeBlocks = () => {
      const blocks = contentRef.value.querySelectorAll("pre");
      blocks.forEach((pre) => {
        if (pre.parentElement.classList.contains("code-wrapper")) return;
        const wrapper = document.createElement("div");
        wrapper.className = "code-wrapper relative";
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.className = "copy-btn absolute top-2 right-2 bg-slate-500 text-white text-xs px-2 py-1 rounded hover:bg-slate-600 transition";
        button.onclick = () => {
          const code = pre.innerText;
          navigator.clipboard.writeText(code);
          button.innerText = "✅ Copied!";
          setTimeout(() => button.innerText = "Copy", 1e3);
        };
        wrapper.appendChild(button);
      });
    };
    __expose({ contentRef });
    onMounted(async () => {
      generateContentWithIds();
      await nextTick();
      enhanceCodeBlocks();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 bg-white lg:p-4" }, _attrs))}><div class=""><div><p class="sm:text-4xl text-3xl font-inter text-slate-600 font-semibold sm:text-center text-start sm:leading-12 leading-10 capitalize">${ssrInterpolate(props.article.title)}</p><div class="flex sm:justify-center justify-start items-center space-x-4 mt-5"><!--[-->`);
      ssrRenderList(props.article.categories, (category) => {
        _push(`<img${ssrRenderAttr("src", `/storage/${category.img_category}`)} class="sm:w-8 sm:h-8 w-6 h-6" alt="logo icon">`);
      });
      _push(`<!--]--></div></div><div class="flex items-center space-x-2 border-t border-slate-200 pt-2 mt-4"><p class="text-sm font-[&#39;Roboto&#39;] font-semibold text-slate-600">${ssrInterpolate(props.article.author.name)}</p><p>-</p><p class="text-sm font-[&#39;Roboto&#39;] font-light">${ssrInterpolate(props.article.published_at)}</p></div><div class="image_article mt-5 mb-5"><img${ssrRenderAttr("src", `/storage/${__props.article.image}`)} class="w-full h-full rounded-lg" alt="iamge article"></div><article class="prose prose-neutral max-w-none content md:mt-5 mt-8 font-inter font-light text-slate-600 tracking-tight">${renderedContent.value ?? ""}</article></div><div class="tags mt-10"><div class="flex items-center flex-wrap space-y-2 space-x-2"><p class="font-bold text-slate-600">Tags :</p><!--[-->`);
      ssrRenderList(__props.article.tags, (tag) => {
        _push(`<div class="text-xs font-[&#39;Roboto&#39;] font-semibold bg-rose-500 text-white px-2 py-1 rounded"><p>${ssrInterpolate(tag)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Article/Body.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
