import { html, Router } from 'swtl';
import { Html } from './pages/Html.js';

const router = new Router({
  routes: [
    {
      path: '/',
      render: ({params, query, request}) => html`
        <${Html} title="swtl">
          <h1>Hello world</h1>
          <a href="/foo">foo</a>
        <//>
      `
    },
    {
      path: '/foo',
      render: ({params, query, request}) => html`
        <${Html} title="foo">
          <h2>Foo</h2>
        <//>
      `
    }
  ],
});

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim().then(() => {
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) =>
          client.postMessage({ type: "SW_ACTIVATED" })
        );
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(router.handleRequest(event.request));
  }
});

