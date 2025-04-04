"use strict";(self.webpackChunktech_sphere=self.webpackChunktech_sphere||[]).push([[5157],{1126:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>h,metadata:()=>i,toc:()=>a});var i=s(9369),t=s(4848),r=s(8453);const h={slug:"rsassasigner-vs-macsigner-nimbus-jwt",title:"So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT",authors:"yangshun",tags:["java","spring boot"]},c="So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT",l={authorsImageUrls:[void 0]},a=[{value:"1. Gi\u1edbi thi\u1ec7u",id:"1-gi\u1edbi-thi\u1ec7u",level:2},{value:"2. B\u1ea3ng so s\xe1nh",id:"2-b\u1ea3ng-so-s\xe1nh",level:2},{value:"3. M\xe3 minh h\u1ecda",id:"3-m\xe3-minh-h\u1ecda",level:2},{value:"K\xfd JWT b\u1eb1ng <code>MACSigner</code> (HS256)",id:"k\xfd-jwt-b\u1eb1ng-macsigner-hs256",level:3},{value:"K\xfd JWT b\u1eb1ng <code>RSASSASigner</code> (RS256)",id:"k\xfd-jwt-b\u1eb1ng-rsassasigner-rs256",level:3},{value:"4. Khi n\xe0o n\xean d\xf9ng?",id:"4-khi-n\xe0o-n\xean-d\xf9ng",level:2},{value:"5. K\u1ebft lu\u1eadn",id:"5-k\u1ebft-lu\u1eadn",level:2}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"This is the summary of a very long blog post,"}),"\n",(0,t.jsxs)(e.p,{children:["Use a ",(0,t.jsx)(e.code,{children:"\x3c!--"})," ",(0,t.jsx)(e.code,{children:"truncate"})," ",(0,t.jsx)(e.code,{children:"--\x3e"})," comment to limit blog post size in the list view."]}),"\n",(0,t.jsx)(e.h2,{id:"1-gi\u1edbi-thi\u1ec7u",children:"1. Gi\u1edbi thi\u1ec7u"}),"\n",(0,t.jsxs)(e.p,{children:["Trong th\u01b0 vi\u1ec7n ",(0,t.jsx)(e.strong,{children:"Nimbus JOSE + JWT"}),", ",(0,t.jsx)(e.code,{children:"RSASSASigner"})," v\xe0 ",(0,t.jsx)(e.code,{children:"MACSigner"})," l\xe0 hai c\xe1ch kh\xe1c nhau \u0111\u1ec3 k\xfd JWT (JSON Web Token). Ch\xfang kh\xe1c nhau v\u1ec1 thu\u1eadt to\xe1n, b\u1ea3o m\u1eadt, v\xe0 tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng."]}),"\n",(0,t.jsx)(e.h2,{id:"2-b\u1ea3ng-so-s\xe1nh",children:"2. B\u1ea3ng so s\xe1nh"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Thu\u1ed9c t\xednh"}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.code,{children:"MACSigner"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.code,{children:"RSASSASigner"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Lo\u1ea1i ch\u1eef k\xfd"})}),(0,t.jsx)(e.td,{children:"HMAC (Hash-based Message Authentication Code)"}),(0,t.jsx)(e.td,{children:"RSA (Rivest-Shamir-Adleman)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Thu\u1eadt to\xe1n"})}),(0,t.jsxs)(e.td,{children:["HMAC-SHA (",(0,t.jsx)(e.code,{children:"HS256"}),", ",(0,t.jsx)(e.code,{children:"HS384"}),", ",(0,t.jsx)(e.code,{children:"HS512"}),")"]}),(0,t.jsxs)(e.td,{children:["RSA (",(0,t.jsx)(e.code,{children:"RS256"}),", ",(0,t.jsx)(e.code,{children:"RS384"}),", ",(0,t.jsx)(e.code,{children:"RS512"}),")"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Ch\xeca kh\xf3a"})}),(0,t.jsx)(e.td,{children:"Kh\xf3a b\xed m\u1eadt chung (Shared Secret)"}),(0,t.jsx)(e.td,{children:"C\u1eb7p kh\xf3a (Private Key & Public Key)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"T\u1ed1c \u0111\u1ed9"})}),(0,t.jsx)(e.td,{children:"Nhanh h\u01a1n do hashing \u0111\u01a1n gi\u1ea3n"}),(0,t.jsx)(e.td,{children:"Ch\u1eadm h\u01a1n do m\xe3 h\xf3a b\u1ea5t \u0111\u1ed1i x\u1ee9ng"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"B\u1ea3o m\u1eadt"})}),(0,t.jsx)(e.td,{children:"K\xe9m an to\xe0n h\u01a1n v\xec chia s\u1ebb chung kh\xf3a b\xed m\u1eadt"}),(0,t.jsx)(e.td,{children:"An to\xe0n h\u01a1n do kh\xf3a private ch\u1ec9 d\xe0nh cho server"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng"})}),(0,t.jsx)(e.td,{children:"H\u1ec7 th\u1ed1ng nh\u1ecf, kh\xf4ng c\u1ea7n x\xe1c th\u1ef1c b\xean th\u1ee9 ba"}),(0,t.jsx)(e.td,{children:"OAuth2, OpenID Connect, x\xe1c th\u1ef1c b\xean th\u1ee9 ba"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"3-m\xe3-minh-h\u1ecda",children:"3. M\xe3 minh h\u1ecda"}),"\n",(0,t.jsxs)(e.h3,{id:"k\xfd-jwt-b\u1eb1ng-macsigner-hs256",children:["K\xfd JWT b\u1eb1ng ",(0,t.jsx)(e.code,{children:"MACSigner"})," (HS256)"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'SignedJWT signedJWT = new SignedJWT(\n    new JWSHeader(JWSAlgorithm.HS256),\n    new JWTClaimsSet.Builder()\n        .subject("user123")\n        .issuer("viettel-auth")\n        .expirationTime(new Date(new Date().getTime() + 3600 * 1000))\n        .build()\n);\nsignedJWT.sign(new MACSigner("your-256-bit-secret"));\nSystem.out.println("HMAC JWT: " + signedJWT.serialize());\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"k\xfd-jwt-b\u1eb1ng-rsassasigner-rs256",children:["K\xfd JWT b\u1eb1ng ",(0,t.jsx)(e.code,{children:"RSASSASigner"})," (RS256)"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");\nkeyGen.initialize(2048);\nKeyPair keyPair = keyGen.generateKeyPair();\nRSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();\n\nSignedJWT signedJWT = new SignedJWT(\n    new JWSHeader.Builder(JWSAlgorithm.RS256).build(),\n    new JWTClaimsSet.Builder()\n        .subject("user123")\n        .issuer("viettel-auth")\n        .expirationTime(new Date(new Date().getTime() + 3600 * 1000))\n        .build()\n);\nsignedJWT.sign(new RSASSASigner(privateKey));\nSystem.out.println("RSA JWT: " + signedJWT.serialize());\n'})}),"\n",(0,t.jsx)(e.h2,{id:"4-khi-n\xe0o-n\xean-d\xf9ng",children:"4. Khi n\xe0o n\xean d\xf9ng?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:["D\xf9ng ",(0,t.jsx)(e.code,{children:"MACSigner"})," (HS256) khi:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"C\u1ea7n t\u1ed1c \u0111\u1ed9 nhanh v\xe0 \xedt t\xe0i nguy\xean."}),"\n",(0,t.jsxs)(e.li,{children:["C\xe1c b\xean tham gia ",(0,t.jsx)(e.strong,{children:"tin t\u01b0\u1edfng l\u1eabn nhau"})," v\xe0 chia s\u1ebb chung kh\xf3a b\xed m\u1eadt."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:["D\xf9ng ",(0,t.jsx)(e.code,{children:"RSASSASigner"})," (RS256) khi:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"C\u1ea7n b\u1ea3o m\u1eadt cao, \u0111\u1ed1i t\xe1c kh\xf4ng c\u1ea7n bi\u1ebft kh\xf3a private."}),"\n",(0,t.jsx)(e.li,{children:"D\xf9ng OAuth2, OpenID Connect, ho\u1eb7c trong h\u1ec7 th\u1ed1ng ph\xe2n t\xe1n."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"5-k\u1ebft-lu\u1eadn",children:"5. K\u1ebft lu\u1eadn"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"RSASSASigner"})," ph\xf9 h\u1ee3p v\u1edbi c\xe1c h\u1ec7 th\u1ed1ng y\xeau c\u1ea7u b\u1ea3o m\u1eadt cao v\xe0 x\xe1c th\u1ef1c t\u1eeb xa."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"MACSigner"})," nhanh h\u01a1n nh\u01b0ng k\xe9m an to\xe0n v\xec kh\xf3a b\xed m\u1eadt ph\u1ea3i \u0111\u01b0\u1ee3c chia s\u1ebb gi\u1eefa c\xe1c b\xean tham gia."]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>h,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function h(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:h(n.components),i.createElement(r.Provider,{value:e},n.children)}},9369:n=>{n.exports=JSON.parse('{"permalink":"/tech-sphere/blog/rsassasigner-vs-macsigner-nimbus-jwt","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-04-02-rsassasigner-vs-macsigner-nimbus-jwt.md","source":"@site/blog/2025-04-02-rsassasigner-vs-macsigner-nimbus-jwt.md","title":"So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT","description":"This is the summary of a very long blog post,","date":"2025-04-02T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/tech-sphere/blog/tags/java"},{"inline":true,"label":"spring boot","permalink":"/tech-sphere/blog/tags/spring-boot"}],"readingTime":2.065,"hasTruncateMarker":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/tech-sphere/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"rsassasigner-vs-macsigner-nimbus-jwt","title":"So s\xe1nh RSASSASigner v\xe0 MACSigner trong Nimbus JOSE + JWT","authors":"yangshun","tags":["java","spring boot"]},"unlisted":false,"prevItem":{"title":"So s\xe1nh OAuth2 JWT v\xe0 JWT Filter","permalink":"/tech-sphere/blog/jwt-oauth2-vs-filter"},"nextItem":{"title":"Welcome","permalink":"/tech-sphere/blog/welcome"}}')}}]);