"use strict";(self.webpackChunktech_sphere=self.webpackChunktech_sphere||[]).push([[589],{93:t=>{t.exports=JSON.parse('{"permalink":"/tech-sphere/blog/jwt-oauth2-vs-filter","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-03-jwt-oauth2-vs-filter.md","source":"@site/blog/2025-04-03-jwt-oauth2-vs-filter.md","title":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","description":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","date":"2025-04-03T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/tech-sphere/blog/tags/java"},{"inline":true,"label":"spring boot","permalink":"/tech-sphere/blog/tags/spring-boot"}],"readingTime":1.21,"hasTruncateMarker":true,"authors":[{"name":"B\xf9i Quang \u0110\u1ee9c","title":"CV ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng | P.PTUD giao d\u1ecbch CN & QTNB - Tr\u1ee5 s\u1edf ch\xednh VietinBank","url":"https://github.com/ducbq1","page":{"permalink":"/tech-sphere/blog/authors/ducbq-1"},"socials":{"x":"https://x.com/ducbq1","github":"https://github.com/ducbq1"},"imageURL":"/tech-sphere/avatar/ducbq1.jpg","key":"ducbq1"}],"frontMatter":{"slug":"jwt-oauth2-vs-filter","title":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","authors":"ducbq1","tags":["java","spring boot"]},"unlisted":false,"prevItem":{"title":"Thread t\u1ef1 \u0111\u1ed9ng retry k\u1ebft n\u1ed1i t\u1edbi API n\u1ebfu b\u1ecb m\u1ea5t k\u1ebft n\u1ed1i","permalink":"/tech-sphere/blog/retry-mechanism"},"nextItem":{"title":"So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT","permalink":"/tech-sphere/blog/rsassasigner-vs-macsigner-nimbus-jwt"}}')},8453:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>c});var r=e(6540);const h={},s=r.createContext(h);function i(t){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(h):t.components||h:i(t.components),r.createElement(s.Provider,{value:n},t.children)}},9281:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var r=e(93),h=e(4848),s=e(8453);const i={slug:"jwt-oauth2-vs-filter",title:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter",authors:"ducbq1",tags:["java","spring boot"]},c=void 0,l={authorsImageUrls:[void 0]},o=[{value:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter",id:"so-s\xe1nh-oauth2-jwt-v\xe0-jwt-filter",level:2},{value:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng OAuth2 JWT?",id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-oauth2-jwt",level:3},{value:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng JWT Filter?",id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-jwt-filter",level:3}];function d(t){const n={h2:"h2",h3:"h3",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.h2,{id:"so-s\xe1nh-oauth2-jwt-v\xe0-jwt-filter",children:"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter"}),"\n",(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:"Ti\xeau ch\xed"}),(0,h.jsx)(n.th,{children:"OAuth2 JWT"}),(0,h.jsx)(n.th,{children:"JWT Filter"})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"Kh\xe1i ni\u1ec7m"})}),(0,h.jsx)(n.td,{children:"S\u1eed d\u1ee5ng OAuth2 v\u1edbi JWT \u0111\u1ec3 qu\u1ea3n l\xfd x\xe1c th\u1ef1c & ph\xe2n quy\u1ec1n"}),(0,h.jsx)(n.td,{children:"S\u1eed d\u1ee5ng filter tu\u1ef3 ch\u1ec9 \u0111\u1ec3 x\u1eed l\xfd JWT trong request"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"Quy tr\xecnh x\xe1c th\u1ef1c"})}),(0,h.jsx)(n.td,{children:"OAuth2 flow (password, client credentials, etc.)"}),(0,h.jsx)(n.td,{children:"Ki\u1ec3m tra JWT trong request header"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"Ph\xe2n quy\u1ec1n"})}),(0,h.jsx)(n.td,{children:"D\u1ef1a tr\xean scopes, roles trong JWT"}),(0,h.jsx)(n.td,{children:"D\u1ef1a tr\xean claims trong JWT"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"C\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng"})}),(0,h.jsx)(n.td,{children:"Spring Security OAuth2"}),(0,h.jsx)(n.td,{children:"Filter trong Spring Security"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"C\u01a1 ch\u1ebf c\u1ea5p token"})}),(0,h.jsx)(n.td,{children:"OAuth2 Authorization Server"}),(0,h.jsx)(n.td,{children:"Token \u0111\u01b0\u1ee3c t\u1ea1o \u1edf backend v\xe0 g\u1eedi client"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"T\xednh m\u1edf r\u1ed9ng"})}),(0,h.jsx)(n.td,{children:"T\xedch h\u1ee3p d\u1ec5 d\xe0ng v\u1edbi OAuth2 Providers"}),(0,h.jsx)(n.td,{children:"T\xf9y ch\u1ec9nh linh ho\u1ea1t"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.strong,{children:"T\xednh an to\xe0n"})}),(0,h.jsx)(n.td,{children:"B\u1ea3o m\u1eadt cao h\u01a1n nh\u1edd flow chu\u1ea9n v\xe0 revocation"}),(0,h.jsx)(n.td,{children:"D\u1ec5 d\xe0ng implement nh\u01b0ng c\xf3 nguy c\u01a1 b\u1ecb compromise"})]})]})]}),"\n",(0,h.jsx)(n.h3,{id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-oauth2-jwt",children:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng OAuth2 JWT?"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"C\u1ea7n qu\u1ea3n l\xfd x\xe1c th\u1ef1c & ph\xe2n quy\u1ec1n ch\xednh quy"}),"\n",(0,h.jsx)(n.li,{children:"T\xedch h\u1ee3p v\u1edbi c\xe1c OAuth2 Providers (Google, Facebook, Keycloak...)"}),"\n",(0,h.jsx)(n.li,{children:"H\u1ed7 tr\u1ee3 Single Sign-On (SSO)"}),"\n"]}),"\n",(0,h.jsx)(n.h3,{id:"khi-n\xe0o-n\xean-s\u1eed-d\u1ee5ng-jwt-filter",children:"Khi n\xe0o n\xean s\u1eed d\u1ee5ng JWT Filter?"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"C\u1ea7n x\u1eed l\xfd x\xe1c th\u1ef1c nh\u1eb9 nh\xe0ng tr\xean backend"}),"\n",(0,h.jsx)(n.li,{children:"T\xf9y ch\u1ec9nh logic x\xe1c th\u1ef1c m\u1ed9t c\xe1ch linh ho\u1ea1t"}),"\n",(0,h.jsx)(n.li,{children:"Kh\xf4ng c\u1ea7n \u0111\u1ed1i t\u01b0\u1ee3ng OAuth2 Server"}),"\n"]})]})}function a(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,h.jsx)(n,{...t,children:(0,h.jsx)(d,{...t})}):d(t)}}}]);