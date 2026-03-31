import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, g as renderComponent } from '../astro_CXSUMAyA.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Hero, b as $$BaseLayout } from './404_B53aimWl.mjs';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/home/user/pikr/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:me@example.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
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

export { $$CallToAction as $, $$ContactCTA as a, gemz as g };
