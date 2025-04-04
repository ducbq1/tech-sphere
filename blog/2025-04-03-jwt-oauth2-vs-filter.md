---
slug: jwt-oauth2-vs-filter
title: So sánh OAuth2 JWT và JWT Filter
authors: yangshun
tags: [java, spring boot]
---
<!-- truncate -->

## So sánh OAuth2 JWT và JWT Filter

| Tiêu chí                      | OAuth2 JWT                                                         | JWT Filter                                                |
| ------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| **Khái niệm**           | Sử dụng OAuth2 với JWT để quản lý xác thực & phân quyền | Sử dụng filter tuỳ chỉ để xử lý JWT trong request |
| **Quy trình xác thực** | OAuth2 flow (password, client credentials, etc.)                   | Kiểm tra JWT trong request header                        |
| **Phân quyền**          | Dựa trên scopes, roles trong JWT                                 | Dựa trên claims trong JWT                               |
| **Cơ chế hoạt động** | Spring Security OAuth2                                             | Filter trong Spring Security                              |
| **Cơ chế cấp token**   | OAuth2 Authorization Server                                        | Token được tạo ở backend và gửi client             |
| **Tính mở rộng**       | Tích hợp dễ dàng với OAuth2 Providers                         | Tùy chỉnh linh hoạt                                    |
| **Tính an toàn**        | Bảo mật cao hơn nhờ flow chuẩn và revocation                 | Dễ dàng implement nhưng có nguy cơ bị compromise    |

### Khi nào nên sử dụng OAuth2 JWT?

* Cần quản lý xác thực & phân quyền chính quy
* Tích hợp với các OAuth2 Providers (Google, Facebook, Keycloak...)
* Hỗ trợ Single Sign-On (SSO)

### Khi nào nên sử dụng JWT Filter?

* Cần xử lý xác thực nhẹ nhàng trên backend
* Tùy chỉnh logic xác thực một cách linh hoạt
* Không cần đối tượng OAuth2 Server
