(()=>{"use strict";var e,a,t,f,r,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(r,c),r},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({369:"67115e58",867:"33fc5bb8",1235:"a7456010",1363:"ad4016f4",1720:"610731d7",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3976:"0e384e19",4134:"393be207",4212:"621db11d",4254:"3f97938f",4405:"4279fa7f",4583:"1df93b7f",4736:"e44a2883",4813:"6875c492",5161:"d1eab4c6",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6251:"d5b0aee6",6969:"14eb3368",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7666:"d8f76244",8209:"01a85c17",8339:"7099c00b",8401:"17896441",8609:"925b3f96",8737:"7661071f",8763:"3ff28403",8863:"f55d3e7a",9048:"a94703ab",9223:"d0b79b7e",9231:"e0a6827a",9262:"18c41134",9325:"59362658",9328:"e273c56f",9628:"623da8b3",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{369:"f78608c2",867:"e1acd139",1235:"70ee950c",1363:"96d7457f",1720:"b8dff4c4",1724:"d81f0cc9",1903:"c9f9438c",1953:"796fbd13",1972:"5dd5f6fe",1974:"aa8c58da",2465:"56599443",2711:"bdbd90f2",2748:"f2c457f0",3042:"3e876a5c",3098:"06eb5f10",3249:"7cb8eb91",3637:"608ea410",3694:"caaa48b3",3976:"957122a8",4134:"58c31874",4212:"948b564f",4254:"6fc9960a",4405:"b48044c6",4583:"ad331384",4736:"571168d5",4813:"2135d156",5161:"1a65d237",5557:"3215cb52",5742:"75619b68",6061:"46fc9273",6251:"6951f7c8",6969:"c71ee7d4",7098:"0cab7daf",7472:"dd20a946",7643:"3aed0a9b",7666:"c0eb07a0",7982:"f84e5a03",8209:"74a679a1",8339:"d841d2aa",8401:"ce310f1f",8609:"7cd17264",8737:"e7e67ffc",8763:"f513aa19",8863:"ed498288",9048:"42c1448a",9223:"197cbabf",9231:"bfb4f2e2",9262:"a8d31e66",9325:"12ae91dd",9328:"01bf0e11",9628:"585733ee",9647:"6f798591",9858:"180e9e41"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="tech-sphere:",o.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/tech-sphere/",o.gca=function(e){return e={17896441:"8401",59362658:"9325","67115e58":"369","33fc5bb8":"867",a7456010:"1235",ad4016f4:"1363","610731d7":"1720",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","0e384e19":"3976","393be207":"4134","621db11d":"4212","3f97938f":"4254","4279fa7f":"4405","1df93b7f":"4583",e44a2883:"4736","6875c492":"4813",d1eab4c6:"5161",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061",d5b0aee6:"6251","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643",d8f76244:"7666","01a85c17":"8209","7099c00b":"8339","925b3f96":"8609","7661071f":"8737","3ff28403":"8763",f55d3e7a:"8863",a94703ab:"9048",d0b79b7e:"9223",e0a6827a:"9231","18c41134":"9262",e273c56f:"9328","623da8b3":"9628","5e95c892":"9647","36994c47":"9858"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,t)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in d)o.o(d,f)&&(o.m[f]=d[f]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)r=c[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},t=self.webpackChunktech_sphere=self.webpackChunktech_sphere||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();