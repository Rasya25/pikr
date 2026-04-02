import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_C0zkYug8.mjs';
import 'kleur/colors';
import { a as $$Hero, $ as $$BaseLayout } from './404_A0U-jNsN.mjs';
import 'clsx';
/* empty css                         */

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/user/pikr/src/components/ContactCTA.astro", void 0);

const $$Gemz = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "GemZ | Games Gen Z", "description": " Inscada Youth Care and Communication", "data-astro-cid-6mtn2xww": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-6mtn2xww> ${renderComponent($$result2, "Hero", $$Hero, { "title": "GemZ", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "data-astro-cid-6mtn2xww": true })} <main class="wrapper about" data-astro-cid-6mtn2xww> <div class="poster-section" data-astro-cid-6mtn2xww> <img src="/assets/poster1.jpg" alt="Poster Image" class="poster-img" data-astro-cid-6mtn2xww> <div class="poster-text" data-astro-cid-6mtn2xww> <h2 class="poster-title" data-astro-cid-6mtn2xww>Zeen - Game Remaja Berencana test</h2> <p class="poster-description" data-astro-cid-6mtn2xww>This is a brief description of the game. It gives an overview of the game's theme and content.</p> <a href="intent://details?id=com.keonggames.zeen#Intent;scheme=https;package=com.keonggames.zeen;end" target="_blank" rel="noopener noreferrer" data-astro-cid-6mtn2xww> <button class="start-button" data-astro-cid-6mtn2xww>Mulai Game</button> </a> </div> </div> <div class="poster-section" data-astro-cid-6mtn2xww> <img src="/assets/game2.jpg" alt="Poster Image" class="poster-img" data-astro-cid-6mtn2xww> <div class="poster-text" data-astro-cid-6mtn2xww> <h2 class="poster-title" data-astro-cid-6mtn2xww>Health Heroes: Nutrihunt</h2> <p class="poster-description" data-astro-cid-6mtn2xww>
This is a brief description of the game. It gives an overview of the
            game's theme and content.
</p> <a href="intent://details?id=com.Agate.HealthHeroesNutrihunt#Intent;scheme=https;package=com.Agate.HealthHeroesNutrihunt;end" target="_blank" rel="noopener noreferrer" data-astro-cid-6mtn2xww> <button class="start-button" data-astro-cid-6mtn2xww>Mulai Game</button> </a> </div> </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-6mtn2xww": true })} </div> ` })} `;
}, "/home/user/pikr/src/pages/gemz.astro", void 0);

const $$file = "/home/user/pikr/src/pages/gemz.astro";
const $$url = "/gemz";

const gemz = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gemz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, gemz as g };
