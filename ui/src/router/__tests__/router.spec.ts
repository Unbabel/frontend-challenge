import { flushPromises, mount } from "@vue/test-utils";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "@/App.vue";
import { routes } from "@/router";

const HOME_INCLUDED_WORD = "Transcriptions";
const ERROR_INCLUDED_WORD = "404";

const router = createRouter({ history: createWebHashHistory(), routes });
const wrapper = mount(App, {
  global: {
    plugins: [router],
  },
});

describe("Router", () => {
  it("renders the HomeView", async () => {
    router.push("/");
    await router.isReady();

    const html = wrapper.html();

    expect(html).toContain(HOME_INCLUDED_WORD);
    expect(html).not.toContain(ERROR_INCLUDED_WORD);
  });

  it("renders the 404 NotFound view", async () => {
    await router.isReady();

    router.push("/wrong-path");
    await flushPromises();

    const html = wrapper.html();
    expect(html).not.toContain(HOME_INCLUDED_WORD);
    expect(html).toContain(ERROR_INCLUDED_WORD);
  });

  it("Redirect to the HomeView", async () => {
    const html = wrapper.html();
    expect(html).toContain(ERROR_INCLUDED_WORD);

    wrapper.find("a").trigger("click");
    await flushPromises();

    const updHtml = wrapper.html();

    expect(updHtml).toContain(HOME_INCLUDED_WORD);
    expect(updHtml).not.toContain(ERROR_INCLUDED_WORD);
  });
});
