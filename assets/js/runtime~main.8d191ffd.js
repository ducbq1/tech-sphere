(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({369:"67115e58",589:"6ac0aaee",759:"ad9e9b04",867:"33fc5bb8",1235:"a7456010",1363:"ad4016f4",1720:"610731d7",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2007:"21b2a105",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3127:"c79d0218",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3976:"0e384e19",4134:"393be207",4191:"459c37cf",4212:"621db11d",4254:"3f97938f",4405:"4279fa7f",4452:"ea8841c1",4583:"1df93b7f",4736:"e44a2883",4813:"6875c492",5069:"042dcc28",5157:"2b46f712",5161:"d1eab4c6",5322:"db87ae06",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6251:"d5b0aee6",6969:"14eb3368",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7666:"d8f76244",8209:"01a85c17",8339:"7099c00b",8401:"17896441",8609:"925b3f96",8737:"7661071f",8763:"3ff28403",8863:"f55d3e7a",9011:"01cfff1a",9048:"a94703ab",9223:"d0b79b7e",9231:"e0a6827a",9262:"18c41134",9325:"59362658",9328:"e273c56f",9628:"623da8b3",9647:"5e95c892",9689:"527c817e",9858:"36994c47",9961:"11372710"}[e]||e)+"."+{369:"f78608c2",589:"369ce4d6",759:"ee5490c1",867:"6268b5e7",1235:"70ee950c",1363:"96d7457f",1720:"b8dff4c4",1724:"0e2b9ca5",1903:"c9f9438c",1953:"796fbd13",1972:"5dd5f6fe",1974:"aa8c58da",2007:"5e683308",2711:"bdbd90f2",2748:"f2c457f0",3042:"3e876a5c",3098:"06eb5f10",3127:"9f33af3c",3249:"1c8413df",3637:"608ea410",3694:"caaa48b3",3976:"957122a8",4134:"58c31874",4191:"544c6135",4212:"948b564f",4254:"6fc9960a",4405:"e86147b6",4452:"b044a78a",4583:"ffb342b3",4622:"2f00fbcb",4736:"5ca8d36f",4813:"92b20a33",5069:"661c36f5",5157:"c1d1fd40",5161:"e4ce9827",5322:"0c5f121a",5557:"88fdfb4e",5742:"75619b68",6061:"21322205",6251:"6951f7c8",6969:"c71ee7d4",7098:"0cab7daf",7472:"297c845c",7643:"e0b0ed1b",7666:"c0eb07a0",8209:"74a679a1",8339:"d841d2aa",8401:"669d155c",8609:"7cd17264",8737:"ff4d7c28",8763:"2bdab8eb",8863:"ed498288",9011:"d1562529",9048:"42c1448a",9223:"197cbabf",9231:"43ea2bda",9262:"0a314378",9325:"12ae91dd",9328:"01bf0e11",9392:"3cd91922",9628:"b17fe6cf",9647:"6f798591",9689:"23f70838",9858:"180e9e41",9961:"3a61841a"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="tech-sphere:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/tech-sphere/",b.gca=function(e){return e={11372710:"9961",17896441:"8401",59362658:"9325","67115e58":"369","6ac0aaee":"589",ad9e9b04:"759","33fc5bb8":"867",a7456010:"1235",ad4016f4:"1363","610731d7":"1720",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","21b2a105":"2007","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",c79d0218:"3127",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","0e384e19":"3976","393be207":"4134","459c37cf":"4191","621db11d":"4212","3f97938f":"4254","4279fa7f":"4405",ea8841c1:"4452","1df93b7f":"4583",e44a2883:"4736","6875c492":"4813","042dcc28":"5069","2b46f712":"5157",d1eab4c6:"5161",db87ae06:"5322",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061",d5b0aee6:"6251","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643",d8f76244:"7666","01a85c17":"8209","7099c00b":"8339","925b3f96":"8609","7661071f":"8737","3ff28403":"8763",f55d3e7a:"8863","01cfff1a":"9011",a94703ab:"9048",d0b79b7e:"9223",e0a6827a:"9231","18c41134":"9262",e273c56f:"9328","623da8b3":"9628","5e95c892":"9647","527c817e":"9689","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunktech_sphere=self.webpackChunktech_sphere||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();