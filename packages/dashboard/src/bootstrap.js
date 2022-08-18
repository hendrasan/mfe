import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.use(PrimeVue);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#__dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
