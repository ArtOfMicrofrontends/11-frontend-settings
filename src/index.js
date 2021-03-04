import Vue from 'vue';

let SettingsPage = undefined;

export function setup(api) {
  api.registerPage("/settings", {
    bootstrap: () =>
      import("./Settings.vue").then((content) => {
          SettingsPage = content.default;
      }),
    mount: (target) => new Vue({
      el: target.appendChild(document.createElement('div')),
      render(h) {
        return h(SettingsPage, {
          props: {},
        });
      },
    }),
    unmount: (_, instance) => instance.$destroy(),
  });
}
