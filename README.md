# swtl-starter

This starter repo behaves as a SPA, but in a service worker. The SW takes care of routing, and rendering the html. This also means that your server (or netlify or whatever host) will have to treat the index.html like a SPA, so return the index.html for all routes, so the SW can take over. As soon as the service worker is installed from the index.html, it'll automatically take over the page and render the current route.

## Local development

```
npm run start
```

## Build

```
npm run build
```