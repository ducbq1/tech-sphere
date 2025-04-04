---
slug: retry-mechanism
title: Dưới đây là ví dụ đơn giản bằng Java về cách tạo một thread tự động retry kết nối tới API nếu bị mất kết nối
authors: yangshun
tags: [java, spring boot]
---

## 🚀 AdvancedApiConnectionRetry.java

<pre class="overflow-visible!" data-start="170" data-end="3780"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">java</div><div class="sticky top-9"><div class="absolute right-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button></span><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-java"><span><span>import</span><span> java.io.IOException;
</span><span>import</span><span> java.net.HttpURLConnection;
</span><span>import</span><span> java.net.URL;
</span><span>import</span><span> java.util.concurrent.*;

</span><span>public</span><span></span><span>class</span><span></span><span>AdvancedApiConnectionRetry</span><span> {

    </span><span>// Interface để lắng nghe các sự kiện trong quá trình kết nối</span><span>
    </span><span>public</span><span></span><span>interface</span><span></span><span>ConnectionListener</span><span> {
        </span><span>void</span><span></span><span>onSuccess</span><span>()</span><span>;                       </span><span>// Gọi khi kết nối thành công</span><span>
        </span><span>void</span><span></span><span>onFailure</span><span>(int</span><span> attempt, Exception e); </span><span>// Gọi mỗi khi thất bại</span><span>
        </span><span>void</span><span></span><span>onMaxRetryReached</span><span>()</span><span>;              </span><span>// Gọi khi retry tối đa và vẫn thất bại</span><span>
    }

    </span><span>// Nhiệm vụ retry kết nối API</span><span>
    </span><span>public</span><span></span><span>static</span><span></span><span>class</span><span></span><span>RetryTask</span><span></span><span>implements</span><span></span><span>Runnable</span><span> {
        </span><span>private</span><span></span><span>final</span><span> String apiUrl;
        </span><span>private</span><span></span><span>final</span><span></span><span>int</span><span> maxRetry;
        </span><span>private</span><span></span><span>final</span><span></span><span>int</span><span> retryDelayMillis;
        </span><span>private</span><span></span><span>final</span><span> ConnectionListener listener;

        </span><span>public</span><span></span><span>RetryTask</span><span>(String apiUrl, int</span><span> maxRetry, </span><span>int</span><span> retryDelayMillis, ConnectionListener listener) {
            </span><span>this</span><span>.apiUrl = apiUrl;
            </span><span>this</span><span>.maxRetry = maxRetry;
            </span><span>this</span><span>.retryDelayMillis = retryDelayMillis;
            </span><span>this</span><span>.listener = listener;
        }

        </span><span>// Hàm kiểm tra kết nối đến API</span><span>
        </span><span>private</span><span></span><span>boolean</span><span></span><span>isApiReachable</span><span>()</span><span></span><span>throws</span><span> IOException {
            </span><span>URL</span><span></span><span>url</span><span></span><span>=</span><span></span><span>new</span><span></span><span>URL</span><span>(apiUrl);
            </span><span>HttpURLConnection</span><span></span><span>conn</span><span></span><span>=</span><span> (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(</span><span>3000</span><span>); </span><span>// 3 giây timeout</span><span>
            conn.setReadTimeout(</span><span>3000</span><span>);
            conn.setRequestMethod(</span><span>"GET"</span><span>);
            </span><span>int</span><span></span><span>responseCode</span><span></span><span>=</span><span> conn.getResponseCode();
            </span><span>return</span><span> (responseCode >= </span><span>200</span><span> && responseCode < </span><span>300</span><span>); </span><span>// Success từ 2xx</span><span>
        }

        </span><span>@Override</span><span>
        </span><span>public</span><span></span><span>void</span><span></span><span>run</span><span>()</span><span> {
            </span><span>int</span><span></span><span>attempt</span><span></span><span>=</span><span></span><span>0</span><span>;

            </span><span>while</span><span> (attempt < maxRetry) {
                </span><span>try</span><span> {
                    </span><span>if</span><span> (isApiReachable()) {
                        listener.onSuccess();
                        </span><span>return</span><span>;
                    } </span><span>else</span><span> {
                        attempt++;
                        listener.onFailure(attempt, </span><span>null</span><span>);
                    }
                } </span><span>catch</span><span> (IOException e) {
                    attempt++;
                    listener.onFailure(attempt, e);
                }

                </span><span>try</span><span> {
                    Thread.sleep(retryDelayMillis); </span><span>// Chờ trước khi thử lại</span><span>
                } </span><span>catch</span><span> (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    </span><span>break</span><span>;
                }
            }

            listener.onMaxRetryReached(); </span><span>// Sau khi thử hết lần</span><span>
        }
    }

    </span><span>// Hàm main để chạy chương trình</span><span>
    </span><span>public</span><span></span><span>static</span><span></span><span>void</span><span></span><span>main</span><span>(String[] args)</span><span> {
        </span><span>String</span><span></span><span>apiUrl</span><span></span><span>=</span><span></span><span>"http://example.com/api/health"</span><span>;
        </span><span>int</span><span></span><span>maxRetry</span><span></span><span>=</span><span></span><span>5</span><span>;
        </span><span>int</span><span></span><span>retryDelayMillis</span><span></span><span>=</span><span></span><span>3000</span><span>;

        </span><span>// Tạo listener xử lý các sự kiện</span><span>
        </span><span>ConnectionListener</span><span></span><span>listener</span><span></span><span>=</span><span></span><span>new</span><span></span><span>ConnectionListener</span><span>() {
            </span><span>@Override</span><span>
            </span><span>public</span><span></span><span>void</span><span></span><span>onSuccess</span><span>()</span><span> {
                System.out.println(</span><span>"✅ API is reachable."</span><span>);
            }

            </span><span>@Override</span><span>
            </span><span>public</span><span></span><span>void</span><span></span><span>onFailure</span><span>(int</span><span> attempt, Exception e) {
                System.out.println(</span><span>"⚠️ Attempt "</span><span> + attempt + </span><span>" failed. "</span><span> +
                        (e != </span><span>null</span><span> ? </span><span>"Error: "</span><span> + e.getMessage() : </span><span>""</span><span>));
            }

            </span><span>@Override</span><span>
            </span><span>public</span><span></span><span>void</span><span></span><span>onMaxRetryReached</span><span>()</span><span> {
                System.out.println(</span><span>"❌ Max retry reached. Giving up."</span><span>);
            }
        };

        </span><span>// Dùng ExecutorService để quản lý luồng</span><span>
        </span><span>ExecutorService</span><span></span><span>executor</span><span></span><span>=</span><span> Executors.newSingleThreadExecutor();
        executor.submit(</span><span>new</span><span></span><span>RetryTask</span><span>(apiUrl, maxRetry, retryDelayMillis, listener));

        executor.shutdown(); </span><span>// Tắt Executor sau khi task hoàn tất</span><span>
    }
}
</span></span></code></div></div></pre>

---

## 📘 Giải thích tổng quan

| Thành phần           | Giải thích                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `ConnectionListener` | Giao diện để xử lý các sự kiện khi kết nối thành công, thất bại, và retry max |
| `RetryTask`          | Nhiệm vụ chính để kiểm tra kết nối và retry nếu mất kết nối                     |
| `isApiReachable()`   | Hàm kiểm tra xem API có phản hồi (HTTP 2xx) hay không                                  |
| `ExecutorService`    | Quản lý thread thay vì dùng `new Thread()`thủ công                                   |
| `Thread.sleep()`     | Chờ giữa các lần retry để tránh spam server                                           |
| `shutdown()`         | Tắt executor khi task kết thúc (giải phóng tài nguyên)                                |

---

## 🎯 Ứng dụng thực tế

* Tự động retry kết nối đến dịch vụ backend/microservice
* Kiểm tra tình trạng API health check
* Dùng như một phần của hệ thống monitoring đơn giản
* Cảnh báo nếu hệ thống backend không hoạt động sau X lần thử
