(()=>{"use strict";var e,a,c,f,b,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=d,r.c=t,e=[],r.O=(a,c,f,b)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],b=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,f,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};a=a||[null,c({}),c([]),c(c)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(b,d),b},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({39:"0a3100da",369:"67115e58",589:"6ac0aaee",759:"ad9e9b04",867:"33fc5bb8",1235:"a7456010",1363:"ad4016f4",1720:"610731d7",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2007:"21b2a105",2066:"420196dc",2711:"9e4087bc",2748:"822bd8ab",2877:"1c18e990",3064:"e1e43b89",3098:"533a09ca",3127:"c79d0218",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3831:"3a079088",3976:"0e384e19",4134:"393be207",4191:"459c37cf",4212:"621db11d",4254:"3f97938f",4405:"4279fa7f",4452:"ea8841c1",4583:"1df93b7f",4736:"e44a2883",4813:"6875c492",4828:"fe101189",5069:"042dcc28",5157:"2b46f712",5161:"d1eab4c6",5322:"db87ae06",5475:"51779da4",5521:"85250523",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6114:"d70178bd",6251:"d5b0aee6",6969:"14eb3368",7098:"a7bd4aaa",7376:"e93d2903",7472:"814f3328",7643:"a6aa9e1f",7666:"d8f76244",8209:"01a85c17",8339:"7099c00b",8401:"17896441",8609:"925b3f96",8737:"7661071f",8763:"3ff28403",8863:"f55d3e7a",9011:"01cfff1a",9048:"a94703ab",9223:"d0b79b7e",9224:"9c3c8df3",9231:"e0a6827a",9262:"18c41134",9325:"59362658",9328:"e273c56f",9434:"de76e8b6",9628:"623da8b3",9647:"5e95c892",9689:"527c817e",9770:"f523be75",9858:"36994c47",9961:"11372710"}[e]||e)+"."+{39:"65898b71",369:"d882568f",589:"e13536d4",759:"6e5226e3",867:"6268b5e7",1235:"70ee950c",1363:"44d3cce5",1720:"b8dff4c4",1724:"0e2b9ca5",1903:"c9f9438c",1953:"796fbd13",1972:"5dd5f6fe",1974:"aa8c58da",2007:"5e683308",2066:"87cd44cb",2711:"bdbd90f2",2748:"f2c457f0",2877:"934308fb",3042:"3e876a5c",3064:"93fee824",3098:"06eb5f10",3127:"9f33af3c",3249:"1c8413df",3637:"608ea410",3694:"caaa48b3",3831:"63703ea2",3976:"957122a8",4134:"58c31874",4191:"09523439",4212:"948b564f",4254:"9a777a3d",4405:"4a7dfdb0",4452:"4e5e5b3e",4583:"ffb342b3",4622:"2f00fbcb",4736:"5ca8d36f",4813:"92b20a33",4828:"c0b44573",5069:"661c36f5",5157:"e748416f",5161:"55b8b7e5",5322:"bd1d0e1a",5475:"867df508",5521:"dbe20289",5557:"8b582f20",5742:"75619b68",6061:"21322205",6114:"100e01dc",6251:"6951f7c8",6969:"c71ee7d4",7098:"0cab7daf",7376:"2405ed51",7472:"68f3fdff",7643:"e0b0ed1b",7666:"c0eb07a0",8209:"74a679a1",8339:"d841d2aa",8401:"669d155c",8609:"7cd17264",8737:"86aa1fd6",8763:"f01122c6",8863:"ed498288",9011:"8b7f4c37",9048:"42c1448a",9223:"197cbabf",9224:"3d898dd7",9231:"c9b4f3bc",9262:"0a314378",9325:"12ae91dd",9328:"01bf0e11",9392:"09337ed2",9434:"84f37ad6",9628:"da6be021",9647:"6f798591",9689:"23f70838",9770:"b089bfb0",9858:"180e9e41",9961:"705a3fbb"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},b="tech-sphere:",r.l=(e,a,c,d)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+c),t.src=e),f[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var b=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/tech-sphere/",r.gca=function(e){return e={11372710:"9961",17896441:"8401",59362658:"9325",85250523:"5521","0a3100da":"39","67115e58":"369","6ac0aaee":"589",ad9e9b04:"759","33fc5bb8":"867",a7456010:"1235",ad4016f4:"1363","610731d7":"1720",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","21b2a105":"2007","420196dc":"2066","9e4087bc":"2711","822bd8ab":"2748","1c18e990":"2877",e1e43b89:"3064","533a09ca":"3098",c79d0218:"3127",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","3a079088":"3831","0e384e19":"3976","393be207":"4134","459c37cf":"4191","621db11d":"4212","3f97938f":"4254","4279fa7f":"4405",ea8841c1:"4452","1df93b7f":"4583",e44a2883:"4736","6875c492":"4813",fe101189:"4828","042dcc28":"5069","2b46f712":"5157",d1eab4c6:"5161",db87ae06:"5322","51779da4":"5475",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061",d70178bd:"6114",d5b0aee6:"6251","14eb3368":"6969",a7bd4aaa:"7098",e93d2903:"7376","814f3328":"7472",a6aa9e1f:"7643",d8f76244:"7666","01a85c17":"8209","7099c00b":"8339","925b3f96":"8609","7661071f":"8737","3ff28403":"8763",f55d3e7a:"8863","01cfff1a":"9011",a94703ab:"9048",d0b79b7e:"9223","9c3c8df3":"9224",e0a6827a:"9231","18c41134":"9262",e273c56f:"9328",de76e8b6:"9434","623da8b3":"9628","5e95c892":"9647","527c817e":"9689",f523be75:"9770","36994c47":"9858"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,c)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>f=e[a]=[c,b]));c.push(f[2]=b);var d=r.p+r.u(a),t=new Error;r.l(d,(c=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var b=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var f,b,d=c[0],t=c[1],o=c[2],n=0;if(d.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(c);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},c=self.webpackChunktech_sphere=self.webpackChunktech_sphere||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();