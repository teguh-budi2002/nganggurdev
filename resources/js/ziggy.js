const Ziggy = {"url":"https:\/\/nganggurdev.com","port":null,"defaults":{},"routes":{"home":{"uri":"{locale}","methods":["GET","HEAD"],"parameters":["locale"]},"article.show":{"uri":"{locale}\/article\/{slug}","methods":["GET","HEAD"],"parameters":["locale","slug"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
