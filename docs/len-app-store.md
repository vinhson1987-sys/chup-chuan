# Đưa Chụp Chuẩn lên App Store (và Google Play)

Ba đường, từ dễ đến khó. Đường 1 đã xong. Đường 2 và 3 cần tài khoản nhà phát triển mà chỉ chủ app mới đăng ký được.

## Đường 1 (đã xong): web app, thêm vào màn hình chính

- Link: https://vinhson1987-sys.github.io/chup-chuan/
- iPhone: Safari → Chia sẻ → Thêm vào MH chính. Có icon riêng, chạy toàn màn hình, dùng offline sau lần mở đầu.
- Không mất phí, không xét duyệt, cập nhật tức thì khi push lên GitHub.
- Hạn chế: không có trong App Store nên người lạ khó tìm.

## Đường 2: Google Play (không cần máy Mac)

1. Đăng ký Google Play Console: 25 USD một lần, tại https://play.google.com/console.
2. Vào https://www.pwabuilder.com, dán link app, chọn **Android → Generate package**. PWABuilder tạo file `.aab` bọc web app (Trusted Web Activity).
3. Tải file `assetlinks.json` PWABuilder đưa, đặt vào thư mục `.well-known/` của repo và push (để Android tin app này là chủ trang web).
4. Trong Play Console: tạo app, tải `.aab`, điền mô tả, ảnh chụp màn hình, link chính sách riêng tư (`https://vinhson1987-sys.github.io/chup-chuan/privacy.html`), gửi xét duyệt. Thường 1–3 ngày.

## Đường 3: Apple App Store

### Cần chuẩn bị (chỉ chủ app làm được)

1. **Apple Developer Program**: 99 USD/năm, đăng ký tại https://developer.apple.com/programs/enroll/ bằng Apple ID của bạn. Cá nhân không cần mã D-U-N-S.
2. Trong https://appstoreconnect.apple.com: tạo app mới, Bundle ID `vn.fidey.chupchuan`, tên "Chụp Chuẩn".
3. Tạo **App Store Connect API key** (Users and Access → Integrations → App Store Connect API): lưu Key ID, Issuer ID, file `.p8`.
4. Tạo **chứng chỉ Apple Distribution** và **provisioning profile App Store** cho Bundle ID trên (Certificates, Identifiers & Profiles). Xuất chứng chỉ ra file `.p12` có mật khẩu.

### Build không cần máy Mac: GitHub Actions

Repo đã có sẵn:

- `package.json`, `capacitor.config.json`: bọc web app bằng Capacitor (WKWebView, camera và cảm biến hoạt động bình thường).
- `scripts/build-www.mjs`: gom file web vào thư mục `www/`.
- `.github/workflows/ios.yml`: máy Mac của GitHub tự tạo project iOS, ký và tải lên App Store Connect.

Vào GitHub → repo → Settings → Secrets and variables → Actions, thêm các secret:

| Secret | Nội dung |
|---|---|
| `APPLE_TEAM_ID` | Team ID (10 ký tự) trong tài khoản developer |
| `IOS_CERT_P12_BASE64` | File `.p12` mã hóa base64 (`base64 -i cert.p12`) |
| `IOS_CERT_PASSWORD` | Mật khẩu file `.p12` |
| `IOS_PROFILE_BASE64` | File `.mobileprovision` mã hóa base64 |
| `IOS_PROFILE_NAME` | Tên provisioning profile đúng như trên Apple |
| `ASC_KEY_ID` | Key ID của API key |
| `ASC_ISSUER_ID` | Issuer ID |
| `ASC_KEY_P8_BASE64` | File `.p8` mã hóa base64 |

Rồi vào tab **Actions → iOS App Store build → Run workflow**. Khoảng 15 phút sau bản build xuất hiện trong App Store Connect → TestFlight. Từ đó bấm gửi xét duyệt.

### Tránh bị từ chối theo Guideline 4.2 (app chỉ là trang web bọc lại)

Apple từ chối app WebView nếu "không hơn gì trang web". Chụp Chuẩn có các tính năng thiết bị thật, cần ghi rõ trong **App Review Notes** khi gửi:

- Dùng camera trực tiếp và cảm biến gia tốc để đo độ nghiêng, chiều cao máy theo thời gian thực.
- Nhận diện mặt và dáng người chạy trên máy (MediaPipe), không cần mạng sau lần đầu.
- Tự động chụp, chụp liên tiếp, lưu vào Ảnh qua Share Sheet.
- Không tài khoản, không thu thập dữ liệu (khai "Data Not Collected" trong App Privacy).

Nên bổ sung 1–2 tính năng native nữa để chắc chắn hơn: rung khi đạt chuẩn (`@capacitor/haptics` đã có trong package.json), lưu thẳng vào Ảnh (`@capacitor-community/media`).

### Ảnh chụp màn hình và mô tả

Cần ảnh 6.7" (1290×2796) và 6.5" (1242×2688). Mở app trên iPhone, chụp màn hình từng chế độ: người, nhóm, selfie, phong cảnh, đồ ăn, và màn hình xanh "Chuẩn rồi". Mô tả ngắn gợi ý:

> Giơ máy lên, làm theo hình, xanh là chụp. Chụp Chuẩn đo độ nghiêng, chiều cao máy, khoảng trống trên đầu, vị trí mắt, ánh sáng và tự chụp khi mọi thứ đạt chuẩn nhiếp ảnh. Không cần biết gì, không cần đọc chữ. Ảnh chỉ nằm trên máy bạn.

## Những gì tôi không làm thay bạn được

- Đăng ký tài khoản Apple Developer / Google Play và trả phí.
- Tạo chứng chỉ ký app (cần đăng nhập Apple ID của bạn).
- Bấm "Submit for Review".

Mọi thứ còn lại (mã, cấu hình, workflow, trang riêng tư, icon, mô tả) đã sẵn trong repo.
