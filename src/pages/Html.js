import { html } from 'swtl';

export function Html({children, title, styles = []}) {
  return html`
    <html lang="en">
      <head>
        <meta name="view-transition" content="same-origin" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
        <meta name="Description" content="swtl demo">
        <title>${title ?? ''}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif 
          }

          body {
            background-color: #ececec;
          }
        </style>
        ${styles}
      </head>
      <body>
        <main>
          ${children}
        </main>
        <script>
          let refreshing;
          async function handleUpdate() {
            // check to see if there is a current active service worker
            const oldSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

            navigator.serviceWorker.addEventListener('controllerchange', async () => {
              if (refreshing) return;

              // when the controllerchange event has fired, we get the new service worker
              const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state;

              // if there was already an old activated service worker, and a new activating service worker, do the reload
              if (oldSw === 'activated' && newSw === 'activating') {
                refreshing = true;
                window.location.reload();
              }
            });
          }

          handleUpdate();
        </script>
      </body>
    </html>
  `
}
