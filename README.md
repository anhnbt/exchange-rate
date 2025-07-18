# Ứng Dụng Chuyển Đổi Tỷ Giá

Ứng dụng web đơn giản chuyển đổi giữa USD và Việt Nam Đồng (VND) sử dụng tỷ giá thời gian thực từ Vietcombank.

## Tính Năng

- Chuyển đổi tiền tệ thời gian thực giữa USD và VND
- Giao diện người dùng sạch sẽ và đơn giản
- Lấy tỷ giá trực tiếp từ API Vietcombank
- Thiết kế responsive
- Không phụ thuộc thư viện bên ngoài cho frontend

## Công Nghệ Sử Dụng

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- CORS middleware
- xml2js để phân tích XML
- node-fetch cho API requests

## Cấu Trúc Dự Án

```
exchange-rate/
├── index.html          # Ứng dụng frontend
├── README.md          # Tài liệu dự án
└── backend/
    ├── package.json   # Dependencies backend
    └── server.js      # Express server
```

## Cài Đặt & Thiết Lập

### Yêu Cầu Hệ Thống
- Node.js (phiên bản 14 trở lên)
- npm

### Thiết Lập Backend

1. Di chuyển đến thư mục backend:
   ```bash
   cd backend
   ```

2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Khởi động server:
   ```bash
   node server.js
   ```
   
   Server sẽ chạy tại `http://localhost:3001`

### Thiết Lập Frontend

1. Mở `index.html` trong trình duyệt web
   - Bạn có thể sử dụng local server như Live Server trong VS Code
   - Hoặc đơn giản mở file trực tiếp trong trình duyệt

## Cách Sử Dụng

1. Khởi động backend server (xem Thiết Lập Backend ở trên)
2. Mở ứng dụng frontend trong trình duyệt
3. Nhập số tiền bạn muốn chuyển đổi
4. Chọn loại tiền tệ nguồn (From)
5. Chọn loại tiền tệ đích (To)
6. Nhấp "Convert" để xem kết quả

## API Endpoints

### GET /tygia
Trả về tỷ giá USD hiện tại từ Vietcombank.

**Phản hồi:**
```json
{
  "currency": "USD",
  "buy": "25,140",
  "transfer": "25,490",
  "sell": "25,840"
}
```

## Cách Hoạt Động

1. Frontend gửi request đến backend server khi người dùng nhấp "Convert"
2. Backend lấy tỷ giá thời gian thực từ XML API của Vietcombank
3. Phản hồi XML được phân tích và chuyển đổi thành JSON
4. Frontend tính toán chuyển đổi sử dụng tỷ giá chuyển khoản
5. Kết quả được hiển thị cho người dùng với định dạng phù hợp

## Nguồn Tỷ Giá

Ứng dụng này sử dụng tỷ giá từ **Vietcombank** (Ngân hàng TMCP Ngoại thương Việt Nam), một trong những ngân hàng thương mại lớn nhất Việt Nam. Tỷ giá được lấy từ API endpoint chính thức của họ.

## Phát Triển

Để chỉnh sửa ứng dụng:

1. **Thay đổi Frontend**: Chỉnh sửa `index.html` trực tiếp
2. **Thay đổi Backend**: Chỉnh sửa `backend/server.js`
3. **Dependencies**: Cập nhật `backend/package.json` khi cần

## Đóng Góp

1. Fork repository
2. Tạo feature branch của bạn (`git checkout -b feature/TinhNangTuyetVoi`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng tuyệt vời'`)
4. Push lên branch (`git push origin feature/TinhNangTuyetVoi`)
5. Mở Pull Request

## Giấy Phép

Dự án này là mã nguồn mở và có sẵn dưới [Giấy phép MIT](LICENSE).

## Ghi Chú

- Ứng dụng hiện tại chỉ hỗ trợ chuyển đổi USD ↔ VND
- Tỷ giá được cập nhật thời gian thực từ Vietcombank
- Backend hoạt động như một proxy để tránh vấn đề CORS khi gọi API ngân hàng trực tiếp từ frontend