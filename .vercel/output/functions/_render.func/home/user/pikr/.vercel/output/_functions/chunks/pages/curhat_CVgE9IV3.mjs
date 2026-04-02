import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_CXSUMAyA.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_DTQAh3BK.mjs';
/* empty css                           */

const $$Curhat = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ruang Curhat", "data-astro-cid-g2otuvqr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-12" data-astro-cid-g2otuvqr> <header class="hero" data-astro-cid-g2otuvqr> <h1 class="title" data-astro-cid-g2otuvqr>Ruang Curhat</h1> <p class="tagline" data-astro-cid-g2otuvqr>Ceritakan perasaanmu tentang ayahmu di sini. Semua ceritamu akan dijaga kerahasiaannya.</p> </header> <form id="curhat-form" class="curhat-form stack gap-6" data-astro-cid-g2otuvqr> <div class="form-group" data-astro-cid-g2otuvqr> <label for="initials" data-astro-cid-g2otuvqr>Inisial dan Kota</label> <input type="text" id="initials" name="initials" placeholder="Contoh: AR, Jakarta" required data-astro-cid-g2otuvqr> </div> <div class="form-group" data-astro-cid-g2otuvqr> <label for="question1" data-astro-cid-g2otuvqr>1. Ayahku itu seperti?</label> <textarea id="question1" name="question1" rows="5" placeholder="Contoh: Ayahku adalah orang yang pekerja keras, tapi jarang punya waktu untukku..." required data-astro-cid-g2otuvqr></textarea> </div> <div class="form-group" data-astro-cid-g2otuvqr> <label for="question2" data-astro-cid-g2otuvqr>2. Aku ingin ayahku seperti?</label> <textarea id="question2" name="question2" rows="5" placeholder="Contoh: Aku ingin ayahku lebih sering menanyakan kabarku dan mendengarkan ceritaku..." required data-astro-cid-g2otuvqr></textarea> </div> <div class="cta-container" data-astro-cid-g2otuvqr> <button type="submit" class="submit-button" data-astro-cid-g2otuvqr>
Kirim Curhat
</button> </div> </form> </div> ` })}  `;
}, "/home/user/pikr/src/pages/curhat.astro", void 0);

const $$file = "/home/user/pikr/src/pages/curhat.astro";
const $$url = "/curhat";

export { $$Curhat as default, $$file as file, $$url as url };
