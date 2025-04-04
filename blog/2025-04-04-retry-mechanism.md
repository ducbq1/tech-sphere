---
slug: retry-mechanism
title: Thread tự động retry kết nối tới API nếu bị mất kết nối
authors: yangshun
tags: [java, spring boot]
---
<!-- truncate -->


# 🚀 `AdvancedApiConnectionRetry.java`

## Tổng quan

Lớp `AdvancedApiConnectionRetry` cung cấp cơ chế kết nối lại đến một API khi gặp lỗi, hỗ trợ lắng nghe các sự kiện như thành công, thất bại từng lần thử, và khi đạt giới hạn retry tối đa.

---

## 🧩 Các thành phần chính

### 1. `ConnectionListener` (Interface)

Giao diện giúp bạn lắng nghe quá trình retry kết nối API.

```java
public interface ConnectionListener {
    void onSuccess();                              // Gọi khi kết nối thành công
    void onFailure(int attempt, Exception e);      // Gọi mỗi khi thất bại
    void onMaxRetryReached();                      // Gọi khi retry tối đa nhưng vẫn thất bại
}
```

---

### 2. `RetryTask` (Runnable)

Lớp thực thi chính để thực hiện kết nối và tự động retry nếu thất bại.

#### 🔧 Các thuộc tính:

- `apiUrl`: URL của API cần kết nối
- `maxRetry`: số lần thử lại tối đa
- `retryDelayMillis`: thời gian chờ giữa mỗi lần retry (milliseconds)
- `listener`: đối tượng lắng nghe sự kiện

#### ▶ Phương thức:

```java
@Override
public void run() {
    int attempt = 0;
    while (attempt < maxRetry) {
        attempt++;
        try {
            HttpURLConnection connection = (HttpURLConnection) new URL(apiUrl).openConnection();
            connection.setRequestMethod("GET");
            int responseCode = connection.getResponseCode();

            if (responseCode == 200) {
                if (listener != null) listener.onSuccess();
                return;
            } else {
                throw new IOException("Non-OK response: " + responseCode);
            }
        } catch (Exception e) {
            if (listener != null) listener.onFailure(attempt, e);
            try {
                Thread.sleep(retryDelayMillis);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }

    if (listener != null) listener.onMaxRetryReached();
}
```

---

### 3. Cách sử dụng

```java
public static void main(String[] args) {
    String apiUrl = "https://your-api-url.com";
    int maxRetry = 5;
    int delayMillis = 2000;

    RetryTask task = new RetryTask(apiUrl, maxRetry, delayMillis, new ConnectionListener() {
        @Override
        public void onSuccess() {
            System.out.println("✅ Kết nối thành công!");
        }

        @Override
        public void onFailure(int attempt, Exception e) {
            System.out.println("❌ Lần thử " + attempt + " thất bại: " + e.getMessage());
        }

        @Override
        public void onMaxRetryReached() {
            System.out.println("⚠ Đã đạt giới hạn retry nhưng vẫn thất bại.");
        }
    });

    ExecutorService executor = Executors.newSingleThreadExecutor();
    executor.execute(task);
    executor.shutdown();
}
```

---

## ✅ Lợi ích

- Hữu ích trong các tình huống API tạm thời không khả dụng.
- Giảm thiểu lỗi runtime do các kết nối không ổn định.
- Cấu trúc rõ ràng và dễ mở rộng.

---

## 📌 Gợi ý nâng cao

- Cho phép cấu hình method (GET, POST, ...) thay vì mặc định GET.
- Tích hợp `Future` hoặc `CompletableFuture` để xử lý bất đồng bộ tốt hơn.
- Ghi log chi tiết hơn hoặc gửi alert khi `onMaxRetryReached`.
