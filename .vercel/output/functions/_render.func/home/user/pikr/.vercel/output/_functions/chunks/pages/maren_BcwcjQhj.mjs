import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_CXSUMAyA.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Grid, b as $$PortfolioPreview } from './index_B_d-PcPd.mjs';
import { a as $$Hero, $ as $$BaseLayout } from './404_DTQAh3BK.mjs';

const $$Maren = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("maren")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Maren | Materi Arek Enom", "description": "Inscada Youth Care And Communication" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Maren | Materi Arek Enom", "tagline": "Dibawah ini merupakan materi mengenai kita, kita sebagai remaja INDONESIA, kepoin yuk", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> </div> ` })}`;
}, "/home/user/pikr/src/pages/maren.astro", void 0);

const $$file = "/home/user/pikr/src/pages/maren.astro";
const $$url = "/maren";

export { $$Maren as default, $$file as file, $$url as url };
