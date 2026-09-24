# Chụp Chuẩn

Máy ảnh web (PWA) tự hướng dẫn góc chụp: cân máy, góc máy, bố cục, ánh sáng, khung dáng mẫu và tự chụp khi đạt chuẩn. Chạy trực tiếp trong Safari trên iPhone, không cần cài đặt.

**Link:** https://vinhson1987-sys.github.io/chup-chuan/

Nguyên tắc thiết kế:

- **Không cần đọc chữ.** Mọi gợi ý là một hình vẽ lớn kèm số độ. Chữ nhỏ bên dưới chỉ để đọc thêm, tự đổi Việt/Anh theo ngôn ngữ máy.
- **Không cần chọn gì.** Chế độ tự nhận diện (biểu tượng ngôi sao): 1 mặt → người, 2 mặt trở lên → nhóm, camera trước → selfie, không mặt và máy chúc xuống → đồ ăn, còn lại → phong cảnh. Chạm biểu tượng để khóa chế độ nếu muốn.
- **Không gửi dữ liệu.** Nhận diện chạy trên máy, không tài khoản, không quảng cáo. Sau lần mở đầu dùng được offline.

Tài liệu: [phân tích đối thủ](docs/phan-tich-doi-thu.md) · [đưa lên App Store / Google Play](docs/len-app-store.md) · [chính sách riêng tư](privacy.html)

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

## Chuẩn áp dụng (có nguồn)

Mọi ngưỡng trong app lấy từ hướng dẫn nhiếp ảnh đã công bố. Con số cụ thể là cách app diễn giải hướng dẫn đó thành phép đo được.

| Luật | Chuẩn | Cách app đo | Nguồn |
|---|---|---|---|
| Mắt trên vạch 1/3 | Mắt nằm khoảng 1/3 từ mép trên (33%); ảnh cận mới được cắt đỉnh đầu; không cắt cằm | Cận mặt và nửa người: mắt ở 24–45% chiều cao khung. Cả người: đỉnh đầu trong 22% trên | [Wikipedia – Headroom](https://en.wikipedia.org/wiki/Headroom_(photographic_framing)), [DPS – Portrait crop](https://digital-photography-school.com/good-crop-bad-crop-how-to-crop-portraits/) |
| Không cắt ở khớp | Không cắt gối, cổ chân, khuỷu, cổ tay, cằm. Cắt giữa đùi, dưới gối, ngang eo, giữa cẳng tay | Khớp nào nằm trong 10% sát mép khung thì báo | [DPS](https://digital-photography-school.com/good-crop-bad-crop-how-to-crop-portraits/), [SLR Lounge](https://www.slrlounge.com/portrait-cropping-guide-bad-portrait-crops-how-to-fix-them/), [PhotoWorkout – Full body](https://www.photoworkout.com/make-full-body-portraits/) |
| Chiều cao máy | Cận mặt: hơi cao hơn mắt. Nửa người: ngang ngực. Cả người: ngang eo, máy giữ thẳng; chúc xuống làm chân ngắn | Góc máy: cận mặt −14…0°, nửa người −7…+4°, cả người −3…+8° | [PictureCorrect](https://www.picturecorrect.com/how-to-improve-your-portraits-by-using-the-right-camera-height/), [Photofocus](https://photofocus.com/photography/portrait-tips-get-your-camera-lower/), [Shotkit](https://shotkit.com/full-body-photography/) |
| Selfie | Máy cao hơn mắt 10–20°, hướng xuống mặt | Camera trước chúc xuống 5–25° | [Science of People](https://www.scienceofpeople.com/perfect-selfie/) |
| Lead room | Chừa khoảng trống phía mặt nhìn / hướng đi | Mặt quay sang một bên thì người phải ở nửa khung đối diện | [Wikipedia – Lead room](https://en.wikipedia.org/wiki/Lead_room), [Expert Photography](https://expertphotography.com/lead-room-principle-photography) |
| Khoảng cách | Gần quá với ống kính rộng làm méo mặt; iPhone tự báo quá gần/quá xa | Mặt rộng hơn 45% khung → lùi lại, dùng 2x | [Apple – Portrait mode](https://support.apple.com/en-us/102398) |
| Chân trời | Đặt chân trời trên vạch ngang 1/3 trên hoặc dưới; giữ thẳng; nghiêng mạnh làm nhà cửa đổ | Vẽ chân trời dự đoán từ góc máy (ống 1x iPhone, FOV dọc ≈70° cầm dọc, ≈54° cầm ngang) → cần chúc/ngẩng ±13° (dọc) hoặc ±10° (ngang), sai số 4° | [DPS – Rule of thirds](https://digital-photography-school.com/rule-of-thirds/), [DPS – Horizon](https://digital-photography-school.com/where-to-position-that-horizon/) |
| Cân máy | Lưới và thước cân của iPhone: chân trời thẳng | Lệch ≤1° (phong cảnh), ≤2° (người) | [Apple – Set up your shot](https://support.apple.com/guide/iphone/set-up-your-shot-iph3dc593597/ios) |
| Đồ ăn | Ba góc chuẩn: 90° trên xuống (pizza, salad), 45° (phổ biến nhất, dải 25–75°), 0° ngang (burger, bánh tầng) | Đạt khi góc máy ≤−84°, −45±7°, hoặc 0±5° | [Expert Photography](https://expertphotography.com/best-camera-angles-food-photography), [ICE](https://www.ice.edu/blog/food-photography-angles-and-composition) |
| Ảnh nhóm | Kiểm tra từng mặt đều thấy; hàng sau đứng so le; nhóm đứng sát nhau, không ai lẻ ra mép; máy ngang mắt hoặc hơi cao để thấy hàng sau; tránh ống siêu rộng làm méo người ở mép; chụp nhiều tấm vì nhóm càng đông càng chắc có người nháy mắt | Đếm mặt so với số người khai báo; mặt nào cách mép ngang <4% thì báo; khoảng hở giữa hai người >1,5 lần bề rộng mặt thì báo; mặt lớn nhất/nhỏ nhất >2,2 lần thì báo hàng sau xa; nhóm rộng >85% khung thì báo méo mép; góc máy −12…+3°; tự chụp liền 3 tấm | [Skylum – Group photos](https://skylum.com/blog/how-to-take-group-photos), [Expert Photography – Group photo](https://expertphotography.com/great-group-photo), [Photography Icon – Group tips](https://photographyicon.com/group-photography-tips/), [Shotkit – Lenses for groups](https://shotkit.com/lenses-for-group-photos/) |
| Ánh sáng | Không có số chuẩn; iPhone chỉ báo "quá tối". App dùng heuristic: độ sáng trung bình, ngược sáng (mặt tối hơn nền), cháy sáng | Ước lượng từ khung hình 48×36 điểm | [Apple – Portrait mode](https://support.apple.com/en-us/102398) |

## Cấu trúc

- `index.html` – toàn bộ app (giao diện, biểu tượng, cảm biến, nhận diện, luật bố cục, song ngữ)
- `sw.js` – service worker: lưu app và mô hình để dùng offline
- `manifest.json`, `icon*.png`, `icon.svg` – để thêm vào màn hình chính
- `package.json`, `capacitor.config.json`, `scripts/`, `.github/workflows/ios.yml` – bọc thành app iOS và build trên GitHub Actions
- Nhận diện mặt và dáng người dùng MediaPipe Tasks Vision (tải từ CDN khi mở app)
