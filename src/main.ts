import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router";
import { setupPinia } from "@/store";
import "uno.css";
import "virtual:unocss-devtools";

async function bootstrap() {
  const app = createApp(App);

  setupPinia(app);

  setupRouter(app);

  app.mount("#app");
}

bootstrap();
