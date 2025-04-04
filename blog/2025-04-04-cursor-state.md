---
slug: cursor-state
title: Cài đặt loading con trỏ chuột trong WPF (Windows Presentation Foundation)
authors: yangshun
tags: [dotnet, wpf]
---
<!-- truncate -->


## Sử dụng `Mouse.OverrideCursor` để đặt con trỏ toàn cục

### Ví dụ 1:

```csharp
Mouse.OverrideCursor = Cursors.Wait; // hoặc Cursors.Hand, Cursors.Arrow, v.v.
```

### Ví dụ 2:

```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    Mouse.OverrideCursor = Cursors.Wait;

    // Thực hiện công việc dài
    Task.Run(() =>
    {
        Thread.Sleep(3000); // giả lập công việc lâu

        // Trở lại UI Thread để đặt lại con trỏ
        Dispatcher.Invoke(() =>
        {
            Mouse.OverrideCursor = null; // trả về con trỏ mặc định
        });
    });
}
```

> Lưu ý: `Mouse.OverrideCursor = null` sẽ **trả về con trỏ mặc định**.
