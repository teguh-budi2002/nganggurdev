function truncate(text, length = 100, suffix = "...") {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + suffix;
}
export {
  truncate as t
};
