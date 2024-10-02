import { c as create_ssr_component, f as each, v as validate_component } from "../../../../chunks/ssr.js";
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="page"><h1 data-svelte-h="svelte-12yu42p">Profile</h1> ${each(Array(100), (_) => {
    return `<p data-svelte-h="svelte-1ollzvh">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, vel aliquam tempora eum dolore
			distinctio et. Quidem, similique alias. Soluta praesentium laborum officiis ipsa! Dicta,
			mollitia aut laudantium quia non pariatur maxime officiis amet id fugiat maiores quidem
			deleniti! Temporibus illum quae id unde natus sit ex tempora fugiat exercitationem.
		</p>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
