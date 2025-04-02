---
slug: long-blog-post
title: So sánh RSASSASigner và MACSigner trong Nimbus JOSE + JWT
authors: yangshun
tags: [hello, docusaurus]
---
This is the summary of a very long blog post,

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.

<!-- truncate -->

# So sánh RSASSASigner và MACSigner trong Nimbus JOSE + JWT

## 1. Giới thiệu

Trong thư viện **Nimbus JOSE + JWT**, `RSASSASigner` và `MACSigner` là hai cách khác nhau để ký JWT (JSON Web Token). Chúng khác nhau về thuật toán, bảo mật, và trường hợp sử dụng.

## 2. Bảng so sánh

| Thuộc tính                      | `MACSigner`                                        | `RSASSASigner`                                     |
| --------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| **Loại chữ ký**          | HMAC (Hash-based Message Authentication Code)        | RSA (Rivest-Shamir-Adleman)                          |
| **Thuật toán**            | HMAC-SHA (`HS256`, `HS384`, `HS512`)           | RSA (`RS256`, `RS384`, `RS512`)                |
| **Chìa khóa**             | Khóa bí mật chung (Shared Secret)                 | Cặp khóa (Private Key & Public Key)                |
| **Tốc độ**               | Nhanh hơn do hashing đơn giản                    | Chậm hơn do mã hóa bất đối xứng              |
| **Bảo mật**               | Kém an toàn hơn vì chia sẻ chung khóa bí mật | An toàn hơn do khóa private chỉ dành cho server |
| **Trường hợp sử dụng** | Hệ thống nhỏ, không cần xác thực bên thứ ba | OAuth2, OpenID Connect, xác thực bên thứ ba      |

## 3. Mã minh họa

### Ký JWT bằng `MACSigner` (HS256)

```java
SignedJWT signedJWT = new SignedJWT(
    new JWSHeader(JWSAlgorithm.HS256),
    new JWTClaimsSet.Builder()
        .subject("user123")
        .issuer("viettel-auth")
        .expirationTime(new Date(new Date().getTime() + 3600 * 1000))
        .build()
);
signedJWT.sign(new MACSigner("your-256-bit-secret"));
System.out.println("HMAC JWT: " + signedJWT.serialize());
```

### Ký JWT bằng `RSASSASigner` (RS256)

```java
KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
keyGen.initialize(2048);
KeyPair keyPair = keyGen.generateKeyPair();
RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();

SignedJWT signedJWT = new SignedJWT(
    new JWSHeader.Builder(JWSAlgorithm.RS256).build(),
    new JWTClaimsSet.Builder()
        .subject("user123")
        .issuer("viettel-auth")
        .expirationTime(new Date(new Date().getTime() + 3600 * 1000))
        .build()
);
signedJWT.sign(new RSASSASigner(privateKey));
System.out.println("RSA JWT: " + signedJWT.serialize());
```

## 4. Khi nào nên dùng?

- **Dùng `MACSigner` (HS256) khi:**
  - Cần tốc độ nhanh và ít tài nguyên.
  - Các bên tham gia **tin tưởng lẫn nhau** và chia sẻ chung khóa bí mật.
- **Dùng `RSASSASigner` (RS256) khi:**
  - Cần bảo mật cao, đối tác không cần biết khóa private.
  - Dùng OAuth2, OpenID Connect, hoặc trong hệ thống phân tán.

## 5. Kết luận

- **RSASSASigner** phù hợp với các hệ thống yêu cầu bảo mật cao và xác thực từ xa.
- **MACSigner** nhanh hơn nhưng kém an toàn vì khóa bí mật phải được chia sẻ giữa các bên tham gia.
