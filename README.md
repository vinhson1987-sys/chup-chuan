# Chụp Chuẩn

Máy ảnh web (PWA) tự hướng dẫn góc chụp: cân máy, góc máy, bố cục, ánh sáng, khung dáng mẫu và tự chụp khi đạt chuẩn. Chạy trực tiếp trong Safari trên iPhone, không cần cài đặt.

## Chạy trên iPhone

Safari chỉ cho mở camera qua địa chỉ `https://`, nên cần đưa thư mục này lên một máy chủ có HTTPS. Hai cách:

**Cách 1 – Netlify Drop (không cần cài gì):** vào https://app.netlify.com/drop, kéo cả thư mục này vào, nhận link `https://...netlify.app`, mở link đó bằng Safari trên iPhone.

**Cách 2 – chạy tạm từ máy tính:**

```powershell
# trong thư mục này
python -m http.server 8765
# cửa sổ khác (cần cài cloudflared: winget install Cloudflare.cloudflared)
cloudflared tunnel --url http://localhost:8765
```

Mở link `https://...trycloudflare.com` mà cloudflared in ra trên iPhone.

Sau khi mở, bấm **Chia sẻ → Thêm vào MH chính** để app chạy toàn màn hình.

## Cấu trúc

- `index.html` – toàn bộ app (giao diện, cảm biến, nhận diện, luật bố cục)
- `manifest.json`, `icon.svg` – để thêm vào màn hình chính
- Nhận diện mặt và dáng người dùng MediaPipe Tasks Vision (tải từ CDN khi mở app)
