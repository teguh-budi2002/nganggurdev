import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h as h$1 } from "vue";
import { i18nVue } from "laravel-vue-i18n";
const brand_name$1 = "NganggurDev";
const why_learn_with_us$1 = "Why Learn with Us?";
const motivational_quotes$1 = "Empowering everyone to become a programming expert from the basics.";
const copyright$1 = "All Rights Reserved";
const delicious_snack$1 = "delicious snack";
const coding_need_a_snack$1 = "Coding need a <span class='text-rose-400'>snack?</span>";
const en = {
  "seo.meta.description": "Learn programming with NganggurDev's free coding tutorials in English and Indonesian. Start your coding journey now!",
  "seo.meta.keywords": "learn programming, learn coding, English, Indonesian, Laravel, CSS, HTML, Tailwind, Vue, web development, beginner coding, NganggurDev",
  "seo.og_title": "Learn Programming with NganggurDev | Free Coding Tutorials",
  "seo.og_description": "Discover free coding tutorials in English and Indonesian at NganggurDev. Start learning today!",
  "seo.og_image": "https://nganggurdev.com/assets/images/og-image.png",
  "seo.og_url": "https://nganggurdev.com",
  "seo.og_type": "website",
  "seo.og_site_name": "NganggurDev",
  "seo.robots": "index, follow",
  "navigation.section.1": "Home",
  "navigation.section.2": "Articles",
  "navigation.section.3": "Course Videos",
  "navigation.section.4": "Projects",
  "navigation.section.5": "Shop",
  "navigation.section.6": "Contact Us",
  "navigation.section.7": "Our Partners",
  "navigation.section.8": "Advertising",
  brand_name: brand_name$1,
  "hero_text.part1": "Make the most of your free time by",
  "hero_text.part2": "learning with us",
  "sub_text.1": "Faithfully Accompanying Your Free Time as a Weng Dev (Web Developer)",
  "sub_text.2": "404 Job Not Found",
  "button.landing_page.text": "View Articles",
  why_learn_with_us: why_learn_with_us$1,
  "reason_learn_from_us.1": "Our materials are available in (ID|EN), ensuring you can understand programming concepts more easily in the language most comfortable for you.",
  "reason_learn_from_us.2": "Designed specifically for beginners, our materials are presented simply and structured, helping you start your programming learning journey with confidence, even without prior experience.",
  "reason_learn_from_us.3": "We believe that the best learning process is achieved when materials are presented clearly and are easy to digest.",
  "10_free_tutorials": "10+ Free Coding Guides",
  motivational_quotes: motivational_quotes$1,
  "search.placeholder": "What do you want to learn today?",
  "article.featured": "<span class='text-rose-400'>Featured</span> Articles",
  "collection.featured_article": "A collection of the latest materials to support your learning process.",
  "home.latest_article": "<span class='text-rose-400'>Latest</span> Articles",
  "collection.latest_article": "A collection of the latest articles to support your learning process.",
  "latest.article": "Latest Articles",
  copyright: copyright$1,
  "article.series": "Article Series",
  "badge.article": "Article",
  "badge.product": "Product",
  "hero_text.article.1": "Article Courses with",
  "hero_text.article.2": "Clear Examples",
  "explore.our.latest.article.content": "Explore our latest article content",
  "category.text": "Category",
  "visit.more.products": "Visit more products",
  "visit.more.articles": "Visit more articles",
  "hero_text.products.1": "Find a variety of",
  delicious_snack: delicious_snack$1,
  "hero_text.products.2": "products and interesting apps here",
  coding_need_a_snack: coding_need_a_snack$1,
  "donation.text": "Like the articles on <span class='font-semibold text-rose-600 italic'>NganggurDev</span>? Let's give support to the writer. Thank you very much! <span class='text-rose-500 text-md'>❤</span>",
  "search.no_results": "No results found for your search."
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  brand_name: brand_name$1,
  coding_need_a_snack: coding_need_a_snack$1,
  copyright: copyright$1,
  default: en,
  delicious_snack: delicious_snack$1,
  motivational_quotes: motivational_quotes$1,
  why_learn_with_us: why_learn_with_us$1
}, Symbol.toStringTag, { value: "Module" }));
const brand_name = "NganggurDev";
const why_learn_with_us = "Kenapa Belajar Bersama Kami?";
const motivational_quotes = "Memberikan semua bisa menjadi ahli pemrograman mulai dari dasar.";
const copyright = "Hak Cipta Dilindungi";
const delicious_snack = "snack lezat";
const coding_need_a_snack = "Ngoding butuh <span class='text-rose-400'>cemilan?</span>";
const id = {
  "seo.meta.description": "Belajar pemrograman gratis dengan NganggurDev dalam bahasa Indonesia dan Inggris. Mulai sekarang!",
  "seo.meta.keywords": "belajar pemrograman, belajar coding, bahasa Indonesia, bahasa inggris, Laravel, CSS, HTML, Tailwind, Vue, web development, coding pemula, NganggurDev",
  "seo.og_title": "Belajar Pemrograman dengan NganggurDev | Tutorial Coding Gratis",
  "seo.og_description": "Temukan tutorial coding gratis dalam bahasa Inggris dan Indonesia di NganggurDev. Mulai belajar hari ini!",
  "seo.og_image": "https://nganggurdev.com/assets/images/og-image.png",
  "seo.og_url": "https://nganggurdev.com",
  "seo.og_type": "website",
  "seo.og_site_name": "NganggurDev",
  "seo.robots": "index, follow",
  "navigation.section.1": "Beranda",
  "navigation.section.2": "Artikel",
  "navigation.section.3": "Video Kursus",
  "navigation.section.4": "Projek",
  "navigation.section.5": "Toko",
  "navigation.section.6": "Hubungi Kami",
  "navigation.section.7": "Partner Kami",
  "navigation.section.8": "Advertising",
  brand_name,
  "hero_text.part1": "Manfaatin waktu nganggurmu dengan",
  "hero_text.part2": "belajar bersama kami",
  "sub_text.1": "Setia Menemani Masa Nganggurmu Sebagai Weng Dev",
  "sub_text.2": "404 Job Not Found",
  "button.landing_page.text": "Lihat Artikel",
  why_learn_with_us,
  "reason_learn_from_us.1": "Materi kami tersedia dalam bahasa (ID|EN), memastikan kamu dapat memahami konsep pemrograman dengan lebih mudah dalam bahasa yang paling nyaman untukmu.",
  "reason_learn_from_us.2": "Dirancang khusus untuk pemula, materi kami disusun secara sederhana dan terstruktur, membantu kamu memulai perjalanan belajar pemrograman dengan percaya diri, bahkan tanpa pengalaman sebelumnya.",
  "reason_learn_from_us.3": "Kami percaya bahwa proses pembelajaran yang terbaik bisa terwujud, ketika materi disajikan dengan jelas dan mudah dicerna.",
  "10_free_tutorials": "10+ Panduan Coding Gratis",
  motivational_quotes,
  "search.placeholder": "Apa yang ingin kamu pelajari hari ini?",
  "article.featured": "Artikel <span class='text-red-400'>Unggulan</span>",
  "collection.featured_article": "Kumpulan materi terbaru yang dapat membantu proses belajarmu.",
  "home.latest_article": "Artikel <span class='text-red-400'>Terbaru</span>",
  "collection.latest_article": "Kumpulan artikel terbaru yang dapat membantu proses belajarmu.",
  "latest.article": "Artikel Terbaru",
  copyright,
  "article.series": "Seri Artikel",
  "badge.article": "Artikel",
  "badge.product": "Produk",
  "hero_text.article.1": "Kursus Artikel yang",
  "hero_text.article.2": "Mudah Dipahami",
  "explore.our.latest.article.content": "Jelajahi konten artikel terbaru kami",
  "category.text": "Kategori",
  "visit.more.products": "Kunjungi lebih banyak produk",
  "visit.more.articles": "Kunjungi lebih banyak artikel",
  "hero_text.products.1": "Temukan beragam produk",
  delicious_snack,
  "hero_text.products.2": "dan aplikasi menarik disini",
  coding_need_a_snack,
  "donation.text": "Suka dengan artikel di <span class='font-semibold text-rose-600 italic'>NganggurDev</span>? Yuk, beri dukungan untuk penulis. Terima kasih banyak! <span class='text-rose-500 text-md'>❤</span>",
  "search.no_results": "Tidak ada hasil ditemukan untuk pencarianmu."
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  brand_name,
  coding_need_a_snack,
  copyright,
  default: id,
  delicious_snack,
  motivational_quotes,
  why_learn_with_us
}, Symbol.toStringTag, { value: "Module" }));
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.any_of": "The :attribute field is invalid.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.contains": "The :attribute field is missing a required value.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.in_array_keys": "The :attribute field must contain at least one of the following keys: :values.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.list": "The :attribute field must be a list.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_if_accepted": "The :attribute field is prohibited when :other is accepted.",
  "validation.prohibited_if_declined": "The :attribute field is prohibited when :other is declined.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_if_declined": "The :attribute field is required when :other is declined.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function r(r4, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(r4, u(e2.key), e2);
  }
}
function t(t2, n2, e2) {
  return n2 && r(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(r4) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var e2 in n2) ({}).hasOwnProperty.call(n2, e2) && (r4[e2] = n2[e2]);
    }
    return r4;
  }, n.apply(null, arguments);
}
function e(r4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r5) {
    return r5.__proto__ || Object.getPrototypeOf(r5);
  }, e(r4);
}
function o() {
  try {
    var r4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (r5) {
  }
  return (o = function() {
    return !!r4;
  })();
}
function i(r4, t2) {
  return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r5, t3) {
    return r5.__proto__ = t3, r5;
  }, i(r4, t2);
}
function u(r4) {
  var t2 = function(r5) {
    if ("object" != typeof r5 || !r5) return r5;
    var t3 = r5[Symbol.toPrimitive];
    if (void 0 !== t3) {
      var n2 = t3.call(r5, "string");
      if ("object" != typeof n2) return n2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r5);
  }(r4);
  return "symbol" == typeof t2 ? t2 : t2 + "";
}
function f(r4) {
  var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(r5) {
    if (null === r5 || !function(r6) {
      try {
        return -1 !== Function.toString.call(r6).indexOf("[native code]");
      } catch (t3) {
        return "function" == typeof r6;
      }
    }(r5)) return r5;
    if ("function" != typeof r5) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t2) {
      if (t2.has(r5)) return t2.get(r5);
      t2.set(r5, n2);
    }
    function n2() {
      return function(r6, t3, n3) {
        if (o()) return Reflect.construct.apply(null, arguments);
        var e2 = [null];
        e2.push.apply(e2, t3);
        var u2 = new (r6.bind.apply(r6, e2))();
        return n3 && i(u2, n3.prototype), u2;
      }(r5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(r5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), i(n2, r5);
  }, f(r4);
}
var a = String.prototype.replace, c = /%20/g, l = "RFC3986", s = { default: l, formatters: { RFC1738: function(r4) {
  return a.call(r4, c, "+");
}, RFC3986: function(r4) {
  return String(r4);
} }, RFC1738: "RFC1738" }, v = Object.prototype.hasOwnProperty, p = Array.isArray, y = function() {
  for (var r4 = [], t2 = 0; t2 < 256; ++t2) r4.push("%" + ((t2 < 16 ? "0" : "") + t2.toString(16)).toUpperCase());
  return r4;
}(), d = function(r4, t2) {
  for (var n2 = t2 && t2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < r4.length; ++e2) void 0 !== r4[e2] && (n2[e2] = r4[e2]);
  return n2;
}, b = { arrayToObject: d, assign: function(r4, t2) {
  return Object.keys(t2).reduce(function(r5, n2) {
    return r5[n2] = t2[n2], r5;
  }, r4);
}, combine: function(r4, t2) {
  return [].concat(r4, t2);
}, compact: function(r4) {
  for (var t2 = [{ obj: { o: r4 }, prop: "o" }], n2 = [], e2 = 0; e2 < t2.length; ++e2) for (var o2 = t2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
    var a2 = u2[f2], c2 = i2[a2];
    "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (t2.push({ obj: i2, prop: a2 }), n2.push(c2));
  }
  return function(r5) {
    for (; r5.length > 1; ) {
      var t3 = r5.pop(), n3 = t3.obj[t3.prop];
      if (p(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3) void 0 !== n3[o3] && e3.push(n3[o3]);
        t3.obj[t3.prop] = e3;
      }
    }
  }(t2), r4;
}, decode: function(r4, t2, n2) {
  var e2 = r4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2) return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (r5) {
    return e2;
  }
}, encode: function(r4, t2, n2, e2, o2) {
  if (0 === r4.length) return r4;
  var i2 = r4;
  if ("symbol" == typeof r4 ? i2 = Symbol.prototype.toString.call(r4) : "string" != typeof r4 && (i2 = String(r4)), "iso-8859-1" === n2) return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(r5) {
    return "%26%23" + parseInt(r5.slice(2), 16) + "%3B";
  });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === s.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += y[a2] : a2 < 2048 ? u2 += y[192 | a2 >> 6] + y[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += y[224 | a2 >> 12] + y[128 | a2 >> 6 & 63] + y[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += y[240 | a2 >> 18] + y[128 | a2 >> 12 & 63] + y[128 | a2 >> 6 & 63] + y[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(r4) {
  return !(!r4 || "object" != typeof r4 || !(r4.constructor && r4.constructor.isBuffer && r4.constructor.isBuffer(r4)));
}, isRegExp: function(r4) {
  return "[object RegExp]" === Object.prototype.toString.call(r4);
}, maybeMap: function(r4, t2) {
  if (p(r4)) {
    for (var n2 = [], e2 = 0; e2 < r4.length; e2 += 1) n2.push(t2(r4[e2]));
    return n2;
  }
  return t2(r4);
}, merge: function r2(t2, n2, e2) {
  if (!n2) return t2;
  if ("object" != typeof n2) {
    if (p(t2)) t2.push(n2);
    else {
      if (!t2 || "object" != typeof t2) return [t2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !v.call(Object.prototype, n2)) && (t2[n2] = true);
    }
    return t2;
  }
  if (!t2 || "object" != typeof t2) return [t2].concat(n2);
  var o2 = t2;
  return p(t2) && !p(n2) && (o2 = d(t2, e2)), p(t2) && p(n2) ? (n2.forEach(function(n3, o3) {
    if (v.call(t2, o3)) {
      var i2 = t2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? t2[o3] = r2(i2, n3, e2) : t2.push(n3);
    } else t2[o3] = n3;
  }), t2) : Object.keys(n2).reduce(function(t3, o3) {
    var i2 = n2[o3];
    return t3[o3] = v.call(t3, o3) ? r2(t3[o3], i2, e2) : i2, t3;
  }, o2);
} }, h = Object.prototype.hasOwnProperty, g = { brackets: function(r4) {
  return r4 + "[]";
}, comma: "comma", indices: function(r4, t2) {
  return r4 + "[" + t2 + "]";
}, repeat: function(r4) {
  return r4;
} }, m = Array.isArray, j = String.prototype.split, w = Array.prototype.push, O = function(r4, t2) {
  w.apply(r4, m(t2) ? t2 : [t2]);
}, E = Date.prototype.toISOString, R = s.default, S = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: b.encode, encodeValuesOnly: false, format: R, formatter: s.formatters[R], indices: false, serializeDate: function(r4) {
  return E.call(r4);
}, skipNulls: false, strictNullHandling: false }, k = function r3(t2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var d2, h2 = t2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = b.maybeMap(h2, function(r4) {
    return r4 instanceof Date ? l2(r4) : r4;
  })), null === h2) {
    if (o2) return u2 && !p2 ? u2(n2, S.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (d2 = h2) || "number" == typeof d2 || "boolean" == typeof d2 || "symbol" == typeof d2 || "bigint" == typeof d2 || b.isBuffer(h2)) {
    if (u2) {
      var g2 = p2 ? n2 : u2(n2, S.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var w2 = j.call(String(h2), ","), E2 = "", R2 = 0; R2 < w2.length; ++R2) E2 += (0 === R2 ? "" : ",") + v2(u2(w2[R2], S.encoder, y2, "value", s2));
        return [v2(g2) + "=" + E2];
      }
      return [v2(g2) + "=" + v2(u2(h2, S.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, T2 = [];
  if (void 0 === h2) return T2;
  if ("comma" === e2 && m(h2)) k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2)) k2 = f2;
  else {
    var $2 = Object.keys(h2);
    k2 = a2 ? $2.sort(a2) : $2;
  }
  for (var x2 = 0; x2 < k2.length; ++x2) {
    var N2 = k2[x2], C2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : h2[N2];
    if (!i2 || null !== C2) {
      var A2 = m(h2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (c2 ? "." + N2 : "[" + N2 + "]");
      O(T2, r3(C2, A2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return T2;
}, T = Object.prototype.hasOwnProperty, $ = Array.isArray, x = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: b.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(r4) {
  return r4.replace(/&#(\d+);/g, function(r5, t2) {
    return String.fromCharCode(parseInt(t2, 10));
  });
}, C = function(r4, t2) {
  return r4 && "string" == typeof r4 && t2.comma && r4.indexOf(",") > -1 ? r4.split(",") : r4;
}, A = function(r4, t2, n2, e2) {
  if (r4) {
    var o2 = n2.allowDots ? r4.replace(/\.([^.[]+)/g, "[$1]") : r4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && T.call(Object.prototype, f2) && !n2.allowPrototypes) return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && T.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes) return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(r5, t3, n3, e3) {
      for (var o3 = e3 ? t3 : C(t3, n3), i3 = r5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = r5[i3];
        if ("[]" === f3 && n3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, t2, n2, e2);
  }
}, D = function(r4, t2) {
  var n2 = /* @__PURE__ */ function(r5) {
    return x;
  }();
  if ("" === r4 || null == r4) return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof r4 ? function(r5, t3) {
    var n3, e3 = {}, o3 = (t3.ignoreQueryPrefix ? r5.replace(/^\?/, "") : r5).split(t3.delimiter, Infinity === t3.parameterLimit ? void 0 : t3.parameterLimit), i3 = -1, u3 = t3.charset;
    if (t3.charsetSentinel) for (n3 = 0; n3 < o3.length; ++n3) 0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3) if (n3 !== i3) {
      var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === s2 ? (f3 = t3.decoder(c2, x.decoder, u3, "key"), a3 = t3.strictNullHandling ? null : "") : (f3 = t3.decoder(c2.slice(0, s2), x.decoder, u3, "key"), a3 = b.maybeMap(C(c2.slice(s2 + 1), t3), function(r6) {
        return t3.decoder(r6, x.decoder, u3, "value");
      })), a3 && t3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = $(a3) ? [a3] : a3), e3[f3] = T.call(e3, f3) ? b.combine(e3[f3], a3) : a3;
    }
    return e3;
  }(r4, n2) : r4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = A(f2, e2[f2], n2, "string" == typeof r4);
    o2 = b.merge(o2, a2, n2);
  }
  return b.compact(o2);
}, P = /* @__PURE__ */ function() {
  function r4(r5, t2, n3) {
    var e2, o2;
    this.name = r5, this.definition = t2, this.bindings = null != (e2 = t2.bindings) ? e2 : {}, this.wheres = null != (o2 = t2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = r4.prototype;
  return n2.matchesUrl = function(r5) {
    var t2, n3 = this;
    if (!this.definition.methods.includes("GET")) return false;
    var e2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, function(r6, t3, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = n3.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + t3 + u3 + ")?" : "" + t3 + u3;
    }).replace(/^\w+:\/\//, ""), o2 = r5.replace(/^\w+:\/\//, "").split("?"), i2 = o2[0], u2 = o2[1], f2 = null != (t2 = new RegExp("^" + e2 + "/?$").exec(i2)) ? t2 : new RegExp("^" + e2 + "/?$").exec(decodeURI(i2));
    if (f2) {
      for (var a2 in f2.groups) f2.groups[a2] = "string" == typeof f2.groups[a2] ? decodeURIComponent(f2.groups[a2]) : f2.groups[a2];
      return { params: f2.groups, query: D(u2) };
    }
    return false;
  }, n2.compile = function(r5) {
    var t2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(r5[e2])) throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + t2.name + "'.");
      if (t2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + t2.wheres[e2] + ")?" : t2.wheres[e2]) + "$").test(null != (u2 = r5[e2]) ? u2 : "")) throw new Error("Ziggy error: '" + e2 + "' parameter '" + r5[e2] + "' does not match required format '" + t2.wheres[e2] + "' for route '" + t2.name + "'.");
      return encodeURI(null != (i2 = r5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }, t(r4, [{ key: "template", get: function() {
    var r5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === r5 ? "/" : r5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var r5, t2;
    return null != (r5 = null == (t2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : t2.map(function(r6) {
      return { name: r6.replace(/{|\??}/g, ""), required: !/\?}$/.test(r6) };
    })) ? r5 : [];
  } }]);
}(), I = /* @__PURE__ */ function(r4) {
  function e2(t2, e3, o3, i2) {
    var u3;
    if (void 0 === o3 && (o3 = true), (u3 = r4.call(this) || this).t = null != i2 ? i2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o3 }), t2) {
      if (!u3.t.routes[t2]) throw new Error("Ziggy error: route '" + t2 + "' is not in the route list.");
      u3.i = new P(t2, u3.t.routes[t2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  var o2, u2;
  u2 = r4, (o2 = e2).prototype = Object.create(u2.prototype), o2.prototype.constructor = o2, i(o2, u2);
  var f2 = e2.prototype;
  return f2.toString = function() {
    var r5 = this, t2 = Object.keys(this.u).filter(function(t3) {
      return !r5.i.parameterSegments.some(function(r6) {
        return r6.name === t3;
      });
    }).filter(function(r6) {
      return "_query" !== r6;
    }).reduce(function(t3, e3) {
      var o3;
      return n({}, t3, ((o3 = {})[e3] = r5.u[e3], o3));
    }, {});
    return this.i.compile(this.u) + function(r6, t3) {
      var n2, e3 = r6, o3 = function(r7) {
        if (!r7) return S;
        if (null != r7.encoder && "function" != typeof r7.encoder) throw new TypeError("Encoder has to be a function.");
        var t4 = r7.charset || S.charset;
        if (void 0 !== r7.charset && "utf-8" !== r7.charset && "iso-8859-1" !== r7.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = s.default;
        if (void 0 !== r7.format) {
          if (!h.call(s.formatters, r7.format)) throw new TypeError("Unknown format option provided.");
          n3 = r7.format;
        }
        var e4 = s.formatters[n3], o4 = S.filter;
        return ("function" == typeof r7.filter || m(r7.filter)) && (o4 = r7.filter), { addQueryPrefix: "boolean" == typeof r7.addQueryPrefix ? r7.addQueryPrefix : S.addQueryPrefix, allowDots: void 0 === r7.allowDots ? S.allowDots : !!r7.allowDots, charset: t4, charsetSentinel: "boolean" == typeof r7.charsetSentinel ? r7.charsetSentinel : S.charsetSentinel, delimiter: void 0 === r7.delimiter ? S.delimiter : r7.delimiter, encode: "boolean" == typeof r7.encode ? r7.encode : S.encode, encoder: "function" == typeof r7.encoder ? r7.encoder : S.encoder, encodeValuesOnly: "boolean" == typeof r7.encodeValuesOnly ? r7.encodeValuesOnly : S.encodeValuesOnly, filter: o4, format: n3, formatter: e4, serializeDate: "function" == typeof r7.serializeDate ? r7.serializeDate : S.serializeDate, skipNulls: "boolean" == typeof r7.skipNulls ? r7.skipNulls : S.skipNulls, sort: "function" == typeof r7.sort ? r7.sort : null, strictNullHandling: "boolean" == typeof r7.strictNullHandling ? r7.strictNullHandling : S.strictNullHandling };
      }(t3);
      "function" == typeof o3.filter ? e3 = (0, o3.filter)("", e3) : m(o3.filter) && (n2 = o3.filter);
      var i2 = [];
      if ("object" != typeof e3 || null === e3) return "";
      var u3 = g[t3 && t3.arrayFormat in g ? t3.arrayFormat : t3 && "indices" in t3 ? t3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o3.sort && n2.sort(o3.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o3.skipNulls && null === e3[a2] || O(i2, k(e3[a2], a2, u3, o3.strictNullHandling, o3.skipNulls, o3.encode ? o3.encoder : null, o3.filter, o3.sort, o3.allowDots, o3.serializeDate, o3.format, o3.formatter, o3.encodeValuesOnly, o3.charset));
      }
      var c2 = i2.join(o3.delimiter), l2 = true === o3.addQueryPrefix ? "?" : "";
      return o3.charsetSentinel && (l2 += "iso-8859-1" === o3.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? l2 + c2 : "";
    }(n({}, t2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(r6, t3) {
      return "boolean" == typeof r6 ? Number(r6) : t3(r6);
    } });
  }, f2.v = function(r5) {
    var t2 = this;
    r5 ? this.t.absolute && r5.startsWith("/") && (r5 = this.p().host + r5) : r5 = this.h();
    var e3 = {}, o3 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new P(n2[0], n2[1], t2.t).matchesUrl(r5);
    }) || [void 0, void 0];
    return n({ name: o3[0] }, e3, { route: o3[1] });
  }, f2.h = function() {
    var r5 = this.p(), t2 = r5.pathname, n2 = r5.search;
    return (this.t.absolute ? r5.host + t2 : t2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(r5, t2) {
    var e3 = this.v(), o3 = e3.name, i2 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!r5) return o3;
    var a2 = new RegExp("^" + r5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o3);
    if ([null, void 0].includes(t2) || !a2) return a2;
    var c2 = new P(o3, f3, this.t);
    t2 = this.l(t2, c2);
    var l2 = n({}, i2, u3);
    if (Object.values(t2).every(function(r6) {
      return !r6;
    }) && !Object.values(l2).some(function(r6) {
      return void 0 !== r6;
    })) return true;
    var s2 = function(r6, t3) {
      return Object.entries(r6).every(function(r7) {
        var n2 = r7[0], e4 = r7[1];
        return Array.isArray(e4) && Array.isArray(t3[n2]) ? e4.every(function(r8) {
          return t3[n2].includes(r8);
        }) : "object" == typeof e4 && "object" == typeof t3[n2] && null !== e4 && null !== t3[n2] ? s2(e4, t3[n2]) : t3[n2] == e4;
      });
    };
    return s2(t2, l2);
  }, f2.p = function() {
    var r5, t2, n2, e3, o3, i2, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (r5 = null == (t2 = this.t.location) ? void 0 : t2.host) ? r5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o3 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o3 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(r5) {
    return this.t.routes.hasOwnProperty(r5);
  }, f2.l = function(r5, t2) {
    var e3 = this;
    void 0 === r5 && (r5 = {}), void 0 === t2 && (t2 = this.i), null != r5 || (r5 = {}), r5 = ["string", "number"].includes(typeof r5) ? [r5] : r5;
    var o3 = t2.parameterSegments.filter(function(r6) {
      return !e3.t.defaults[r6.name];
    });
    if (Array.isArray(r5)) r5 = r5.reduce(function(r6, t3, e4) {
      var i3, u3;
      return n({}, r6, o3[e4] ? ((i3 = {})[o3[e4].name] = t3, i3) : "object" == typeof t3 ? t3 : ((u3 = {})[t3] = "", u3));
    }, {});
    else if (1 === o3.length && !r5[o3[0].name] && (r5.hasOwnProperty(Object.values(t2.bindings)[0]) || r5.hasOwnProperty("id"))) {
      var i2;
      (i2 = {})[o3[0].name] = r5, r5 = i2;
    }
    return n({}, this.m(t2), this.j(r5, t2));
  }, f2.m = function(r5) {
    var t2 = this;
    return r5.parameterSegments.filter(function(r6) {
      return t2.t.defaults[r6.name];
    }).reduce(function(r6, e3, o3) {
      var i2, u3 = e3.name;
      return n({}, r6, ((i2 = {})[u3] = t2.t.defaults[u3], i2));
    }, {});
  }, f2.j = function(r5, t2) {
    var e3 = t2.bindings, o3 = t2.parameterSegments;
    return Object.entries(r5).reduce(function(r6, t3) {
      var i2, u3, f3 = t3[0], a2 = t3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o3.some(function(r7) {
        return r7.name === f3;
      })) return n({}, r6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, r6, ((i2 = {})[f3] = a2[e3[f3]], i2));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, t(e2, [{ key: "params", get: function() {
    var r5 = this.v();
    return n({}, r5.params, r5.query);
  } }, { key: "routeParams", get: function() {
    return this.v().params;
  } }, { key: "queryParams", get: function() {
    return this.v().query;
  } }]);
}(/* @__PURE__ */ f(String));
function Z(r4, t2, n2, e2) {
  var o2 = new I(r4, t2, n2, e2);
  return r4 ? o2.toString() : o2;
}
var F = { install: function(r4, t2) {
  var n2 = function(r5, n3, e2, o2) {
    return void 0 === o2 && (o2 = t2), Z(r5, n3, e2, o2);
  };
  parseInt(r4.version) > 2 ? (r4.config.globalProperties.route = n2, r4.provide("route", n2)) : r4.mixin({ methods: { route: n2 } });
} };
const appName = "NganggurDev";
createServer(
  (page) => createInertiaApp({
    page,
    title: (title) => `${title} - ${appName}`,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Article/Index.vue": () => import("./assets/Index-DaBXRg7Z.js"), "./Pages/Article/Show.vue": () => import("./assets/Show-CJu2ezNd.js"), "./Pages/Home.vue": () => import("./assets/Home-DWr-BHy2.js"), "./Pages/Product/Index.vue": () => import("./assets/Index-Bc6ymvzI.js") })),
    setup({ App, props, plugin }) {
      var _a;
      const ziggyData = ((_a = page.props) == null ? void 0 : _a.ziggy) || {};
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(F, {
        ...ziggyData,
        location: ziggyData.location ? new URL(ziggyData.location) : new URL("/")
      }).use(i18nVue, {
        lang: page.props.locale || "en",
        fallbackLang: "id",
        resolve: (lang) => {
          const langs = /* @__PURE__ */ Object.assign({ "../../lang/en.json": __vite_glob_1_0, "../../lang/id.json": __vite_glob_1_1, "../../lang/php_en.json": __vite_glob_1_2 });
          return langs[`../../lang/${lang}.json`].default;
        }
      });
    }
  })
);
