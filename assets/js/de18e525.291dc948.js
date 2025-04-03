"use strict";(self.webpackChunktech_sphere=self.webpackChunktech_sphere||[]).push([[3472],{7197:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var r=e(9020),s=e(4848),h=e(8453);const i={slug:"compare-token",title:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter",authors:"yangshun",tags:["java","docusaurus"]},c=void 0,l={authorsImageUrls:[void 0]},o=[{value:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter",id:"so-s\xe1nh-oauth2-jwt-v\xe0-jwt-filter",level:2},{value:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng OAuth2 JWT?",id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-oauth2-jwt",level:3},{value:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng JWT Filter?",id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-jwt-filter",level:3}];function d(n){const t={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This is the summary of a very long blog post,"}),"\n",(0,s.jsx)(t.h2,{id:"so-s\xe1nh-oauth2-jwt-v\xe0-jwt-filter",children:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Ti\xeau ch\xed"}),(0,s.jsx)(t.th,{children:"OAuth2 JWT"}),(0,s.jsx)(t.th,{children:"JWT Filter"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Kh\xe1i ni\u1ec7m"})}),(0,s.jsx)(t.td,{children:"S\u1eed d\u1ee5ng OAuth2 v\u1edbi JWT \u0111\u1ec3 qu\u1ea3n l\xfd x\xe1c th\u1ef1c & ph\xe2n quy\u1ec1n"}),(0,s.jsx)(t.td,{children:"S\u1eed d\u1ee5ng filter tu\u1ef3 ch\u1ec9 \u0111\u1ec3 x\u1eed l\xfd JWT trong request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Quy tr\xecnh x\xe1c th\u1ef1c"})}),(0,s.jsx)(t.td,{children:"OAuth2 flow (password, client credentials, etc.)"}),(0,s.jsx)(t.td,{children:"Ki\u1ec3m tra JWT trong request header"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Ph\xe2n quy\u1ec1n"})}),(0,s.jsx)(t.td,{children:"D\u1ef1a tr\xean scopes, roles trong JWT"}),(0,s.jsx)(t.td,{children:"D\u1ef1a tr\xean claims trong JWT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"C\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng"})}),(0,s.jsx)(t.td,{children:"Spring Security OAuth2"}),(0,s.jsx)(t.td,{children:"Filter trong Spring Security"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"C\u01a1 ch\u1ebf c\u1ea5p token"})}),(0,s.jsx)(t.td,{children:"OAuth2 Authorization Server"}),(0,s.jsx)(t.td,{children:"Token \u0111\u01b0\u1ee3c t\u1ea1o \u1edf backend v\xe0 g\u1eedi client"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"T\xednh m\u1edf r\u1ed9ng"})}),(0,s.jsx)(t.td,{children:"T\xedch h\u1ee3p d\u1ec5 d\xe0ng v\u1edbi OAuth2 Providers"}),(0,s.jsx)(t.td,{children:"T\xf9y ch\u1ec9nh linh ho\u1ea1t"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"T\xednh an to\xe0n"})}),(0,s.jsx)(t.td,{children:"B\u1ea3o m\u1eadt cao h\u01a1n nh\u1edd flow chu\u1ea9n v\xe0 revocation"}),(0,s.jsx)(t.td,{children:"D\u1ec5 d\xe0ng implement nh\u01b0ng c\xf3 nguy c\u01a1 b\u1ecb compromise"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-oauth2-jwt",children:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng OAuth2 JWT?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"C\u1ea7n qu\u1ea3n l\xfd x\xe1c th\u1ef1c & ph\xe2n quy\u1ec1n ch\xednh quy"}),"\n",(0,s.jsx)(t.li,{children:"T\xedch h\u1ee3p v\u1edbi c\xe1c OAuth2 Providers (Google, Facebook, Keycloak...)"}),"\n",(0,s.jsx)(t.li,{children:"H\u1ed7 tr\u1ee3 Single Sign-On (SSO)"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-jwt-filter",children:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng JWT Filter?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"C\u1ea7n x\u1eed l\xfd x\xe1c th\u1ef1c nh\u1eb9 nh\xe0ng tr\xean backend"}),"\n",(0,s.jsx)(t.li,{children:"T\xf9y ch\u1ec9nh logic x\xe1c th\u1ef1c m\u1ed9t c\xe1ch linh ho\u1ea1t"}),"\n",(0,s.jsx)(t.li,{children:"Kh\xf4ng c\u1ea7n \u0111\u1ed1i t\u01b0\u1ee3ng OAuth2 Server"}),"\n"]})]})}function a(n={}){const{wrapper:t}={...(0,h.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var r=e(6540);const s={},h=r.createContext(s);function i(n){const t=r.useContext(h);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(h.Provider,{value:t},n.children)}},9020:n=>{n.exports=JSON.parse('{"permalink":"/tech-sphere/blog/compare-token","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-03-compare-blog-01.md","source":"@site/blog/2025-04-03-compare-blog-01.md","title":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","description":"This is the summary of a very long blog post,","date":"2025-04-03T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/tech-sphere/blog/tags/java"},{"inline":false,"label":"Docusaurus","permalink":"/tech-sphere/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":1.245,"hasTruncateMarker":false,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/tech-sphere/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"compare-token","title":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","authors":"yangshun","tags":["java","docusaurus"]},"unlisted":false,"nextItem":{"title":"So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT","permalink":"/tech-sphere/blog/compare-signer"}}')}}]);