---
slug: sql-optimization-guide
title: Kỹ Thuật Tối Ưu SQL
authors: [ducbq1]
tags: [sql, optimization]
---
# 🧠 Kỹ Thuật Tối Ưu SQL

Tài liệu này tổng hợp các kỹ thuật giúp tối ưu hóa câu truy vấn SQL để nâng cao hiệu suất hệ thống.

<!-- truncate -->


## 🔍 1. Sử dụng Chỉ mục (Indexes)

- ✅ Tạo chỉ mục cho các cột được dùng trong `WHERE`, `JOIN`, `ORDER BY`.
- 🚫 Tránh tạo chỉ mục không cần thiết vì có thể làm chậm thao tác ghi (INSERT/UPDATE/DELETE).

```sql
CREATE INDEX idx_customer_name ON customers(name);
```

## 📋 2. Chọn Lọc Trường Cần Thiết

- ✅ Chỉ SELECT các trường cần thiết thay vì dùng `SELECT *`.

```sql
-- Tối ưu hơn
SELECT id, name FROM customers;
```

## 🔗 3. Tối ưu hóa JOIN

- ✅ Chỉ JOIN bảng thực sự cần thiết.
- ✅ Đảm bảo cột JOIN có chỉ mục.

```sql
SELECT o.id, c.name FROM orders o
JOIN customers c ON o.customer_id = c.id;
```

## 🧮 4. Sử dụng LIMIT, OFFSET hiệu quả

- ✅ Giới hạn số lượng bản ghi trả về nếu không cần tất cả.

```sql
SELECT * FROM orders LIMIT 100 OFFSET 0;
```

## 🧠 5. Sử dụng EXISTS thay vì IN khi có thể

- EXISTS thường nhanh hơn IN khi kiểm tra tồn tại.

```sql
-- Tốt hơn
SELECT * FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

## 🧹 6. Dọn Dẹp và Phân Mảnh

- ✅ Xoá dữ liệu không cần thiết.
- ✅ Sử dụng `VACUUM`, `ANALYZE` để bảo trì cơ sở dữ liệu (PostgreSQL).

## 🛠 7. Dùng EXPLAIN để phân tích truy vấn

```sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 5;
```

---

📌 **Ghi nhớ**:

- Kiểm tra thống kê và tối ưu query thường xuyên.
- Dùng công cụ profiling để kiểm tra hiệu suất.

📚 **Công cụ hữu ích**:

- MySQL: `EXPLAIN`, `SHOW INDEXES`
- PostgreSQL: `EXPLAIN ANALYZE`, `pg_stat_statements`
- SQL Server: Query Analyzer
