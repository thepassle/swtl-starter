(()=>{var C=Object.freeze,I=Object.defineProperty;var P=(e,t)=>C(I(e,"raw",{value:C(t||e.slice())}));var x=Symbol("component"),E=Symbol("await");var v="TEXT",L="COMPONENT",p="NONE",O="PROP",y="CHILDREN",g="SET_PROP",M="PROP_VAL";function*h(e,...t){if(!t.length)yield*e;else if(!t.some(i=>typeof i=="function"))yield*e.reduce((i,o,a)=>[...i,o,...t.length>a?[t[a]]:[]],[]);else{let i=v,o=p,a=p,l=[];for(let n=0;n<e.length;n++){let c="",d={kind:x,properties:[],children:[],fn:void 0};for(let r=0;r<e[n].length;r++){let m=e[n][r];if(i===v)m==="<"&&!e[n][r+1]&&typeof t[n]=="function"?(i=L,d.fn=t[n],l.push(d)):c+=m;else if(i===L)if(o===O){let f=l[l.length-1],w=f?.properties[f.properties.length-1];if(a===g){let s="";for(;e[n][r]!=="="&&e[n][r]!=="/"&&e[n][r]!==">"&&e[n][r]!=='"'&&e[n][r]!=="'"&&e[n][r]!==" "&&s!=="...";)s+=e[n][r],r++;if(e[n][r]==="=")a=M;else if(e[n][r]==="/"&&o===O){o=p,a=p;let u=l.pop();l.length||(c="",yield u)}else e[n][r]===">"&&o===O&&(o=y,a=p);s==="..."?f.properties.push(...Object.entries(t[n]).map(([u,q])=>({name:u,value:q}))):s&&f.properties.push({name:s,value:!0})}else if(a===M){if(e[n][r]==='"'||e[n][r]==="'"){let s=e[n][r];if(!e[n][r+1])w.value=t[n],a=g;else{let u="";for(r++;e[n][r]!==s;)u+=e[n][r],r++;w.value=u||"",a=g}}else if(e[n][r-1]){let s="";for(;e[n][r]!==" "&&e[n][r]!=="/"&&e[n][r]!==">";)s+=e[n][r],r++;if(w.value=s||"",a=g,e[n][r]==="/"){let u=l.pop();l.length||(yield u)}}else if(w.value=t[n-1],a=g,e[n][r]===">")a=p,o=y;else if(e[n][r]==="/"){let s=l.pop();l.length||(a=p,o=p,i=v,r++,yield s)}}}else if(o===y){let f=l[l.length-1];if(e[n][r+1]==="/"&&e[n][r+2]==="/"){c&&(f.children.push(c),c=""),r+=3;let w=l.pop();l.length||(i=v,o=p,yield w)}else e[n][r]==="<"&&!e[n][r+1]&&typeof t[n]=="function"?(c&&(f.children.push(c),c=""),o=O,a=g,d.fn=t[n],l.push(d)):e[n][r+1]?c+=e[n][r]:c&&f&&(c+=e[n][r],f.children.push(c))}else if(m===">")o=y;else if(m===" ")o=O,a=g;else if(m==="/"&&e[n][r+1]===">"){i=v,o=p;let f=l.pop();l.length||(c="",yield f),r++}else c+=m;else c+=m}o===y&&t.length>n&&l[l.length-1].children.push(t[n]),c&&o!==y&&(yield c),l.length>1&&d.fn&&l[l.length-2].children.push(d),t.length>n&&i!==L&&(yield t[n])}}}function _({promise:e,children:t}){return{promise:e,template:t.find(i=>typeof i=="function")}}_.kind=E;function W(e){return typeof e.getReader=="function"}async function*D(e){let t=e.getReader(),i=new TextDecoder("utf-8");try{for(;;){let{done:o,value:a}=await t.read();if(o)return;yield i.decode(a)}}finally{t.releaseLock()}}async function*U(e){if(W(e))for await(let t of D(e))yield t;else for await(let t of e)yield t}async function*b(e,t){if(typeof e=="string")yield e;else if(typeof e=="function")yield*b(e(),t);else if(Array.isArray(e))yield*S(e,t);else if(typeof e?.then=="function"){let i=await e;yield*b(i,t)}else if(e instanceof Response&&e.body)yield*U(e.body);else if(e?.[Symbol.asyncIterator]||e?.[Symbol.iterator])yield*S(e,t);else if(e?.fn?.kind===E){let{promise:i,template:o}=e.fn({...e.properties.reduce((l,n)=>({...l,[n.name]:n.value}),{}),children:e.children}),a=t.length;t.push(i().then(l=>({id:a,template:o({pending:!1,error:!1,success:!0},l,null)})).catch(l=>(console.error(l.stack),{id:a,template:o({pending:!1,error:!0,success:!1},null,l)}))),yield*S(h`<awaiting-promise style="display: contents;" data-id="${a.toString()}">${o({pending:!0,error:!1,success:!1},null,null)}</awaiting-promise>`,t)}else e?.kind===x?yield*S(await e.fn({...e.properties.reduce((i,o)=>({...i,[o.name]:o.value}),{}),children:e.children}),t):yield e?.toString()}async function*S(e,t){for await(let i of e)yield*b(i,t)}var $;async function*N(e){let t=[];for(yield*S(e,t),t=t.map(i=>{let o=i.then(a=>(t.splice(t.indexOf(o),1),a));return o});t.length>0;){let i=await Promise.race(t),{id:o,template:a}=i;yield*N(h($||($=P([`
      <template data-id="`,'">',`</template>
      <script>
        {
          let toReplace = document.querySelector('awaiting-promise[data-id="`,`"]');
          const template = document.querySelector('template[data-id="`,`"]').content.cloneNode(true);
          toReplace.replaceWith(template);
        }
      <\/script>
    `])),o.toString(),a,o.toString(),o.toString()))}}var R=class{constructor({routes:t,fallback:i,plugins:o=[],baseHref:a=""}){this.plugins=o,this.fallback={render:i,params:{}},this.routes=t.map(l=>({...l,urlPattern:new URLPattern({pathname:`${a}${l.path}`,search:"*",hash:"*"})}))}_getPlugins(t){return[...this.plugins??[],...t?.plugins??[]]}async handleRequest(t){let i=new URL(t.url),o;for(let l of this.routes){let n=l.urlPattern.exec(i);if(n){o={render:l.render,params:n?.pathname?.groups??{},plugins:l.plugins};break}}let a=o?.render??this?.fallback?.render;if(a){let l=Object.fromEntries(new URLSearchParams(new URL(t.url).search)),n=o?.params,c=this._getPlugins(o);for(let d of c)try{let r=await d?.beforeResponse({query:l,params:n,request:t});if(r)return r}catch(r){throw console.log(`Plugin "${d.name}" error on beforeResponse hook`,r),r}return new T(a({query:l,params:n,request:t}))}}},T=class{constructor(t){let i=N(t),o=new TextEncoder,a=new ReadableStream({async pull(l){try{let{value:n,done:c}=await i.next();c?l.close():l.enqueue(o.encode(n))}catch(n){throw console.error(n.stack),n}}});return new Response(a,{status:200,headers:{"Content-Type":"text/html","Transfer-Encoding":"chunked"}})}};var k;function A({children:e,title:t,styles:i=[]}){return h(k||(k=P([`
    <html lang="en">
      <head>
        <meta name="view-transition" content="same-origin" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
        <meta name="Description" content="swtl demo">
        <title>`,`</title>
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
        `,`
      </head>
      <body>
        <main>
          `,`
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
        <\/script>
      </body>
    </html>
  `])),t??"",i,e)}var B=new R({routes:[{path:"/",render:({params:e,query:t,request:i})=>h`
        <${A} title="swtl">
          <h1>Hello world</h1>
          <a href="/foo">foo</a>
        <//>
      `},{path:"/foo",render:({params:e,query:t,request:i})=>h`
        <${A} title="foo">
          <h2>Foo</h2>
        <//>
      `}]});self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("activate",e=>{e.waitUntil(clients.claim().then(()=>{self.clients.matchAll().then(t=>{t.forEach(i=>i.postMessage({type:"SW_ACTIVATED"}))})}))});self.addEventListener("fetch",e=>{e.request.mode==="navigate"&&e.respondWith(B.handleRequest(e.request))});})();
//# sourceMappingURL=sw.js.map
