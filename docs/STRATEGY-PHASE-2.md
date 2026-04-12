# Chiến Lược Phát Triển Giai Đoạn 2 - Bao Lam Marketing Portal

Tài liệu này lưu trữ các ý tưởng và kế hoạch mở rộng website từ mô hình Landing Page hiện tại sang mô hình **Agency Portal** chuyên nghiệp.

---

## 🎯 Mục tiêu chính
Nâng tầm uy tín thương hiệu, tối ưu hóa quy trình tiếp cận khách hàng (Lead Generation) và số hóa việc quản lý mạng lưới nhân sự thực chiến.

## 🚀 Các hạng mục triển khai

### 1. Hệ thống Case Studies (Project Details)
- **Path**: `/projects/[slug]`
- **Cấu trúc nội dung**: Tuân thủ công thức **Thách thức (Challenge) -> Giải pháp (Solution) -> Kết quả (Result/KPIs)**.
- **Media**: Tích hợp Video thực tế từ hiện trường Activation, Gallery ảnh chất lượng cao.
- **Social Proof**: Gắn kèm logo khách hàng và testimonial của brand manager dự án đó.

### 2. Cổng thông tin Tuyển dụng & CTV (Portal mini)
- **Mục tiêu**: Khai thác tối đa thế mạnh mạng lưới **3000+ CTV**.
- **Tính năng**: 
    - Trang tuyển dụng tập trung cho các sự kiện/chiến dịch lớn.
    - Form đăng ký CTV thông minh (phân loại theo tỉnh thành, kinh nghiệm).
    - Tầm nhìn: Dashboard cho CTV theo dõi job và lịch làm việc.

### 3. Trang Dịch vụ Chuyên sâu (Service Deep-dives)
- **Path**: `/services/activation`, `/services/sampling`, `/services/event`, `/services/distribution`.
- **Nội dung**: Chi tiết về quy trình vận hành, báo cáo mẫu và năng lực phủ sóng 63 tỉnh thành cho từng loại hình dịch vụ.
- **SEO**: Tối ưu hóa từ khóa chuyên ngành để thu hút khách hàng organic.

### 4. Interactive Features (Tiện ích tương tác)
- **Interactive Operation Map**: Bản đồ Việt Nam hiển thị các dự án đang thực hiện thời gian thực hoặc mạng lưới nhân sự tại chỗ của Bảo Lâm theo tỉnh thành.
- **Proposal Request AI Flow**: Form thu thập yêu cầu khách hàng, tự động gợi ý các bộ Portfolio/Credential phù hợp với ngành hàng của họ (FMCG, Industrial, Tech).

### 5. Content Hub (Blog & Trends)
- **Mục tiêu**: Thể hiện vị thế dẫn đầu trong việc cập nhật xu hướng mới.
- **Chủ đề**: 
    - 20% nội dung tập trung vào: Digital Activation, Hybrid Event, AR/VR trong sự kiện.
    - Các bài viết chia sẻ kinh nghiệm thực thi tại các kênh đặc thù (Phố đi bộ, KCN, Chùa...).

---

## 🛠️ Tech Stack & Architecture
- **Framework**: Tiếp tục sử dụng Next.js App Router.
- **CMS**: Xem xét tích hợp Contentful hoặc Sanity để nhân viên văn phòng có thể tự cập nhật dự án mới mà không cần code.
- **Data**: Sử dụng ISR (Incremental Static Regeneration) để đảm bảo các trang project load cực nhanh nhưng vẫn cập nhật kịp thời.

---
> [!IMPORTANT]
> **Giai đoạn 1**: Tập trung hoàn thiện Landing Page đạt chuẩn "WOW" về visual và chuyển đổi.
> **Giai đoạn 2**: Bắt đầu triển khai cấu trúc Dynamic Routes cho Projects và Services.
