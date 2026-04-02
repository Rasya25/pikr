import { A as AstroError, l as UnknownContentCollectionError, c as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, g as renderComponent, u as unescapeHTML, m as maybeRenderHead, d as addAttribute, f as createAstro, e as renderSlot } from '../astro_CXSUMAyA.mjs';
import 'kleur/colors';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_DMeEOBA7.mjs';
import { a as $$Hero, b as $$Icon, $ as $$BaseLayout } from './404_DTQAh3BK.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/maren/anemia.md": () => import('../anemia_BIxbZgAO.mjs'),"/src/content/maren/gizi-seimbang.md": () => import('../gizi-seimbang_CyHz12lh.mjs'),"/src/content/maren/kepribadian.md": () => import('../kepribadian_BCA1UuJS.mjs'),"/src/content/maren/ktd.md": () => import('../ktd_DWeaim9_.mjs'),"/src/content/maren/mood-swing.md": () => import('../mood-swing_BvHi7Fb2.mjs'),"/src/content/maren/nested/fatherless.md": () => import('../fatherless_BoTAqQt3.mjs'),"/src/content/maren/nested/mentalhealth.md": () => import('../mentalhealth_BPWY9bAF.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"maren":{"type":"content","entries":{"anemia":"/src/content/maren/anemia.md","gizi-seimbang":"/src/content/maren/gizi-seimbang.md","kepribadian":"/src/content/maren/kepribadian.md","ktd":"/src/content/maren/ktd.md","mood-swing":"/src/content/maren/mood-swing.md","nested/fatherless":"/src/content/maren/nested/fatherless.md","nested/mentalhealth":"/src/content/maren/nested/mentalhealth.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/maren/anemia.md": () => import('../anemia_D52lGLtX.mjs'),"/src/content/maren/gizi-seimbang.md": () => import('../gizi-seimbang_BIdyuYkh.mjs'),"/src/content/maren/kepribadian.md": () => import('../kepribadian_BBaK09Rb.mjs'),"/src/content/maren/ktd.md": () => import('../ktd_CgnP_3u4.mjs'),"/src/content/maren/mood-swing.md": () => import('../mood-swing_DKG0pn_1.mjs'),"/src/content/maren/nested/fatherless.md": () => import('../fatherless_D_eMDU69.mjs'),"/src/content/maren/nested/mentalhealth.md": () => import('../mentalhealth_CAfqy4fp.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/maren/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "/home/user/pikr/src/components/PortfolioPreview.astro", void 0);

const $$Astro$1 = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/home/user/pikr/src/components/Grid.astro", void 0);

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href, type, target, variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([variant], "class:list")}${addAttribute(target, "target")} data-astro-cid-balv45lp> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/user/pikr/src/components/CallToAction.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h4 data-astro-cid-ab4ihpzs>PROGRAM PIK-R</h4> <img src="/assets/fotbar.png" alt="Foto Bersama PIK-R" data-astro-cid-ab4ihpzs> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Nyenja</h2> <p data-astro-cid-ab4ihpzs>Merupakan program yang remaja banget karena kita bisa sharing bareng dan juga di akhir sesi kita bikin lagu loo</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Healing</h2> <p data-astro-cid-ab4ihpzs>Merupakan program atau kegiatan seperti senam bareng di lapangan, jalan sehat dan juga fun game loo</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Mo-No Bar</h2> <p data-astro-cid-ab4ihpzs>Merupakan program yang berisi kegiatan menonton bareng dan juga literasi bareng, seru banget loo</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Sharen</h2> <p data-astro-cid-ab4ihpzs>Merupakan program yang berisi kegiatan pembagian materi di kelas, pembagian tablet tambah darah, membuat mading kreatif yang informatif, dan juga web ini loo</p> </div> </section> `;
}, "/home/user/pikr/src/components/Skills.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("maren")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  const images = [
    { src: "/assets/keg1.png", alt: "Kegiatan 1" },
    { src: "/assets/keg2.png", alt: "Kegiatan 2" },
    { src: "/assets/keg3.png", alt: "Kegiatan 3" },
    { src: "/assets/keg4.png", alt: "Kegiatan 4" },
    { src: "/assets/keg5.png", alt: "Kegiatan 5" },
    { src: "/assets/keg6.png", alt: "Kegiatan 6" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "INSCADA YOUTH CARE AND COMMUNICATION", "tagline": "Semua Ini Tentang Kita Sebagai Remaja Penerus Bangsa", "align": "start", "data-astro-cid-j7pv25f6": true })} <img alt="Inscada Youth Care and Communication" width="850" height="400" src="/assets/pin.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>PILAR</h3> <p data-astro-cid-j7pv25f6>Pusat Inspirasi & Laku Remaja</p> <p data-astro-cid-j7pv25f6>Membangun kembali pilar kekuatan yang patah. Membantu remaja Mojokerto melampaui trauma pengasuhan dan menavigasi kesehatan mental menuju masa depan yang lebih kokoh.</p> </header> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/pilar/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Mulai Pulih Sekarang
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> </main> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Materi</h3> <p data-astro-cid-j7pv25f6>Dibawah ini merupakan materi mengenai kita, kita sebagai remaja INDONESIA, kepoin yuk</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/maren/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Lihat Semua Materi
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Foto Kegiatan</h3> <p data-astro-cid-j7pv25f6>
Dibawah ini merupakan foto kegiatan INSCADA YOUTH CARE AND COMMUNICATION, kepoin yuk
</p> </header> <div class="kegiatan-gallery" data-astro-cid-j7pv25f6> ${images.map((img) => renderTemplate`<div class="kegiatan-gallery-item" data-astro-cid-j7pv25f6> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} data-astro-cid-j7pv25f6> </div>`)} </div> </section> </main> </div> </div> ` })}`;
}, "/home/user/pikr/src/pages/index.astro", void 0);

const $$file = "/home/user/pikr/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, $$CallToAction as b, getCollection as g, index as i };
