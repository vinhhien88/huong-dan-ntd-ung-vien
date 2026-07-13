// =============================================================
// HR1Jobs Guideline Hub — Dữ liệu module hướng dẫn
// Thay ảnh thật bằng cách cập nhật `imageUrl` trong mỗi step.
// =============================================================

export type AudienceKey = "employer" | "candidate" | "intro";

export interface ImageStep {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string; // để rỗng "" sẽ hiển thị placeholder
  caption: string;
}

export interface GuideModule {
  id: string; // dùng để scroll
  moduleNumber: string; // "01" ...
  audience: AudienceKey;
  title: string;
  shortDescription: string;
  whenToUse: string;
  checklist: string[];
  imageSteps: ImageStep[];
  note?: string;
  commonIssues?: { question: string; answer: string }[];
}

const placeholder = "";

const stepsFromChecklist = (items: { title: string; description: string }[]): ImageStep[] =>
  items.map((s, i) => ({
    stepNumber: i + 1,
    title: s.title,
    description: s.description,
    imageUrl: placeholder,
    caption: `Ảnh bước ${i + 1}: ${s.title}`,
  }));

export const AUDIENCES: Record<AudienceKey, { label: string; short: string }> = {
  intro: { label: "Giới thiệu", short: "GT" },
  employer: { label: "Nhà tuyển dụng", short: "NTD" },
  candidate: { label: "Ứng viên", short: "UV" },
};

export const MODULES: GuideModule[] = [
  {
    id: "m-01-intro-platform",
    moduleNumber: "01",
    audience: "intro",
    title: "Nền tảng HR1Jobs",
    shortDescription:
      "HR1Jobs là nền tảng tuyển dụng trực tuyến hàng đầu Việt Nam, kết nốiNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN toàn quốc với quy trình hiện đại, nhanh chóng và hiệu quả.",
    whenToUse:
      "Đọc phần này để hiểu HR1Jobs là gì, phục vụ ai và tại sao nên sử dụng nền tảng này.",
    checklist: [
      "HR1Jobs là nền tảng tuyển dụng trực tuyến ứng dụng AI, kết nối NTD và Ứng viên toàn quốc.",
      "Hơn 5.000 tin tuyển dụng đang hoạt động từ các doanh nghiệp lớn đến SME.",
      "Ứng viên có thể tạo hồ sơ, chọn mẫu CV chuyên nghiệp và ứng tuyển nhanh chóng.",
      "Nhà tuyển dụng đăng tin miễn phí, tìm hồ sơ và quản lý ứng viên tập trung.",
      "Hỗ trợ tuyển dụng đa ngành: Kinh doanh, Sản xuất, Marketing, Kế toán, Nhân sự...",
    ],
    imageSteps: stepsFromChecklist([
      { title: "HR1Jobs là gì?", description: "Nền tảng tuyển dụng trực tuyến ứng dụng AI, kết nốiNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN trên toàn quốc với hơn 5.000 việc làm đang tuyển." },
      { title: "Kết nối nhanh — Tuyển đúng người", description: "Hệ thống AI gợi ý ứng viên phù hợp giúp NTD tiết kiệm thời gian sàng lọc và tìm đúng người cho vị trí cần tuyển." },
      { title: "Đa dạng ngành nghề & địa điểm", description: "Từ TP.HCM, Hà Nội đến các tỉnh thành — HR1Jobs phủ rộng hàng trăm ngành nghề và vị trí công việc." },
      { title: "Miễn phí cho Ứng viên", description: "Ứng viên tạo hồ sơ, chọn mẫu CV đẹp và ứng tuyển hoàn toàn miễn phí trên HR1Jobs." },
    ]),
    note: "HR1Jobs thuộc HR1Vietnam Holdings — đơn vị tuyển dụng hàng đầu với hơn 20 năm kinh nghiệm tại thị trường Việt Nam.",
    commonIssues: [
      { question: "HR1Jobs có miễn phí không?", answer: "Hoàn toàn miễn phí cho Ứng viên. Nhà tuyển dụng có gói miễn phí cơ bản và các gói nâng cao tùy nhu cầu." },
      { question: "HR1Jobs phục vụ khu vực nào?", answer: "Toàn quốc — tập trung nhiều nhất tại TP.HCM (2.000+ việc làm), Hà Nội (1.100+), Đà Nẵng, Bình Dương, Đồng Nai và các tỉnh thành khác." },
    ],
  },
  {
    id: "m-02-intro-features",
    moduleNumber: "02",
    audience: "intro",
    title: "Tổng quan tính năng",
    shortDescription:
      "Khám phá các tính năng nổi bật của HR1Jobs dành cho cảNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN — từ đăng tin, tìm hồ sơ đến quản lý việc làm và bảo mật tài khoản.",
    whenToUse:
      "Tham khảo trước khi bắt đầu để biết HR1Jobs hỗ trợ những gì, sau đó chọn nhóm hướng dẫn phù hợp với vai trò của bạn.",
    checklist: [
      "Nhà tuyển dụng: Đăng tin tuyển dụng, tìm & lọc hồ sơ ứng viên, quản lý danh sách ứng tuyển.",
      "Ứng viên: Tạo hồ sơ chuyên nghiệp, chọn mẫu CV đẹp, ứng tuyển và theo dõi trạng thái.",
      "Thông báo việc làm (Job Alert): Nhận thông báo tự động khi có việc làm mới phù hợp.",
      "Trắc nghiệm tính cách (TestCenter): Khám phá điểm mạnh bản thân để định hướng nghề nghiệp.",
      "Cẩm nang HR1Jobs: Bài viết chuyên sâu về tuyển dụng, lương thưởng, phát triển sự nghiệp.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Tính năng dành cho Nhà tuyển dụng", description: "Đăng tin tuyển dụng, tìm kiếm & lọc hồ sơ ứng viên theo kỹ năng, kinh nghiệm; quản lý toàn bộ quy trình tuyển dụng tập trung." },
      { title: "Tính năng dành cho Ứng viên", description: "Tạo hồ sơ, chọn CV mẫu chuyên nghiệp, ứng tuyển 1 click, theo dõi trạng thái đơn và nhận thông báo việc làm phù hợp." },
      { title: "AI Gợi ý & Job Alert", description: "Trợ lý ảo JOJO gợi ý công việc phù hợp dựa trên hồ sơ. Job Alert tự động thông báo khi có tin mới đúng tiêu chí của bạn." },
      { title: "TestCenter & Cẩm nang nghề nghiệp", description: "Trắc nghiệm tính cách giúp định hướng nghề nghiệp. Cẩm nang cung cấp kiến thức về thị trường lao động, lương, kỹ năng." },
    ]),
    note: "Tất cả tính năng đều có hướng dẫn chi tiết từng bước tại các moduleNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN bên dưới.",
    commonIssues: [
      { question: "Tôi có thể vừa là NTD vừa là Ứng viên không?", answer: "Có. Bạn có thể tạo tài khoản NTD riêng và tài khoản Ứng viên riêng bằng 2 email khác nhau trên cùng nền tảng." },
      { question: "TestCenter là gì?", answer: "TestCenter là công cụ trắc nghiệm tính cách miễn phí trên HR1Jobs, giúp bạn hiểu điểm mạnh và định hướng nghề nghiệp phù hợp." },
    ],
  },
  {
    id: "m-01-employer-register",
    moduleNumber: "01",
    audience: "employer",
    title: "Đăng ký tài khoản",
    shortDescription:
      "Hướng dẫn Nhà tuyển dụng tạo tài khoản trên HR1Jobs để bắt đầu đăng tin, quản lý hồ sơ ứng viên và theo dõi hiệu quả tuyển dụng.",
    whenToUse:
      "Áp dụng khi doanh nghiệp lần đầu sử dụng HR1Jobs và cần khởi tạo tài khoản nhà tuyển dụng.",
    checklist: [
      "Truy cập trang đăng ký Nhà tuyển dụng.",
      "Nhập thông tin doanh nghiệp và người phụ trách tuyển dụng.",
      "Xác nhận email hoặc số điện thoại nếu có.",
      "Hoàn tất tạo tài khoản và chuyển đến trang quản trị.",
      "Đăng nhập và bắt đầu sử dụng.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Truy cập trang đăng ký NTD", description: "Mở trang HR1Jobs và chọn khu vực dành cho Nhà tuyển dụng." },
      { title: "Nhập thông tin doanh nghiệp", description: "Điền tên công ty, mã số thuế, người phụ trách tuyển dụng." },
      { title: "Xác nhận email / số điện thoại", description: "Hệ thống có thể yêu cầu xác minh để bảo mật tài khoản." },
      { title: "Vào trang quản trị NTD", description: "Tài khoản được tạo và chuyển đến dashboard quản lý." },
      { title: "Đăng nhập và bắt đầu", description: "Đăng nhập lần đầu và khám phá các tính năng tuyển dụng." },
    ]),
    note: "Sử dụng email doanh nghiệp để dễ dàng xác minh và bảo mật tài khoản về sau.",
    commonIssues: [
      { question: "Không nhận được email xác nhận?", answer: "Kiểm tra hộp Spam/Promotions hoặc liên hệ bộ phận hỗ trợ HR1Jobs." },
      { question: "Mã số thuế bị trùng?", answer: "Liên hệ HR1Jobs để xác minh quyền sử dụng tài khoản cho doanh nghiệp." },
    ],
  },
  {
    id: "m-02-employer-login",
    moduleNumber: "02",
    audience: "employer",
    title: "Đăng nhập tài khoản",
    shortDescription:
      "Hướng dẫn Đăng nhập tài khoản vào hệ thống quản trị để sử dụng các tính năng tuyển dụng.",
    whenToUse: "Sử dụng mỗi khi NTD cần truy cập dashboard quản trị tuyển dụng.",
    checklist: [
      "Truy cập trang đăng nhập.",
      "Nhập thông tin và đăng nhập.",
      "Vào dashboard Nhà tuyển dụng.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Mở trang đăng nhập NTD", description: "Vào HR1Jobs và chọn đăng nhập dành cho Nhà tuyển dụng." },
      { title: "Nhập thông tin và đăng nhập", description: "Điền email/SĐT đã đăng ký và mật khẩu, sau đó nhấn Đăng nhập." },
      { title: "Vào dashboard NTD", description: "Bắt đầu sử dụng các tính năng quản lý tuyển dụng." },
    ]),
  },
  {
    id: "m-03-employer-buy-service",
    moduleNumber: "03",
    audience: "employer",
    title: "Mua và thanh toán dịch vụ",
    shortDescription:
      "Hướng dẫn Nhà tuyển dụng chọn gói dịch vụ, thực hiện thanh toán và kích hoạt tính năng tuyển dụng trên HR1Jobs.",
    whenToUse:
      "Khi NTD cần nâng cấp gói dịch vụ để đăng tin hoặc sử dụng các tính năng tuyển dụng nâng cao.",
    checklist: [
      "Vào mục Dịch vụ hoặc Mua gói trên dashboard NTD.",
      "Xem và so sánh các gói dịch vụ phù hợp.",
      "Chọn gói dịch vụ và số lượng.",
      "Chọn phương thức thanh toán (chuyển khoản, thẻ, ví điện tử...).",
      "Xác nhận thanh toán và kiểm tra trạng thái kích hoạt.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào mục Dịch vụ", description: "Truy cập trang Dịch vụ từ menu dashboard Nhà tuyển dụng." },
      { title: "So sánh và chọn gói", description: "Xem các gói tin đăng, gói tìm hồ sơ hoặc gói kết hợp phù hợp nhu cầu." },
      { title: "Kiểm tra đơn hàng, ghi nhớ phương thức thanh toán và xác nhận đơn hàng", description: "Kiểm tra lại thông tin đơn hàng, chọn phương thức thanh toán phù hợp (chuyển khoản, thẻ, ví điện tử) và xác nhận." },
      { title: "Xác nhận và kích hoạt", description: "Sau khi thanh toán thành công, dịch vụ được kích hoạt tự động trên tài khoản." },
    ]),
    note: "Liên hệ hotline (+84) 906 926 391 hoặc email info@hr1jobs.com nếu cần hỗ trợ về thanh toán hoặc hóa đơn.",
    commonIssues: [
      { question: "Thanh toán thành công nhưng chưa kích hoạt?", answer: "Vui lòng chờ 15–30 phút hoặc liên hệ đội hỗ trợ HR1Jobs kèm ảnh chụp giao dịch để được xử lý nhanh." },
      { question: "Có thể xuất hóa đơn VAT không?", answer: "Có. Cung cấp thông tin công ty khi thanh toán để HR1Jobs xuất hóa đơn điện tử VAT." },
    ],
  },
  {
    id: "m-04-employer-post-job",
    moduleNumber: "04",
    audience: "employer",
    title: "Đăng tuyển",
    shortDescription: "Hướng dẫn Nhà tuyển dụng tạo tin đăng tuyển dụng mới trên HR1Jobs.",
    whenToUse: "Khi NTD có nhu cầu tuyển dụng vị trí mới và cần đăng tin lên hệ thống.",
    checklist: [
      "Vào khu vực quản lý đăng tuyển — Chọn mục việc làm đang tuyển — Bước 1: Chọn mục việc làm đang tuyển — Bước 2: Đăng tuyển.",
      "Nhập thông tin vị trí + JD (mô tả công việc và quyền lợi,...). Không cần mã số đăng tuyển.",
      "Kiểm tra nội dung và lưu (những thông tin có dấu sao đỏ bắt buộc phải điền).",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào khu vực quản lý đăng tuyển", description: "Chọn mục việc làm đang tuyển → Bước 1: Chọn mục việc làm đang tuyển → Bước 2: Nhấn Đăng tuyển." },
      { title: "Nhập thông tin vị trí + JD", description: "Điền tên vị trí, mô tả công việc, yêu cầu, quyền lợi, địa điểm, mức lương. Không cần điền mã số đăng tuyển." },
      { title: "Kiểm tra nội dung và lưu", description: "Kiểm tra lại toàn bộ nội dung. Các trường có dấu sao đỏ (*) bắt buộc phải điền đầy đủ trước khi lưu." },
    ]),
    note: "Mô tả công việc rõ ràng giúp thu hút đúng ứng viên và tăng tỷ lệ ứng tuyển chất lượng.",
  },
  {
    id: "m-05-employer-view-applications",
    moduleNumber: "05",
    audience: "employer",
    title: "Xem hồ sơ ứng tuyển",
    shortDescription: "Hướng dẫn Nhà tuyển dụng xem danh sách ứng viên đã ứng tuyển vào tin đăng.",
    whenToUse: "Khi cần đánh giá, sàng lọc ứng viên đã nộp hồ sơ vào các tin tuyển dụng.",
    checklist: [
      "Vào khu vực quản lý đăng tuyển → Chọn mục việc làm đang tuyển (sẽ hiện ra các job đăng tuyển).",
      "Danh sách hồ sơ ứng tuyển → Click chọn CV apply cần xem của từng job.",
      "Xem chi tiết từng CV để liên hệ.",
      "Lưu, tải hoặc chuyển trạng thái ứng viên nếu hệ thống hỗ trợ.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào khu vực quản lý đăng tuyển", description: "Chọn mục việc làm đang tuyển — sẽ hiện ra danh sách các job đăng tuyển." },
      { title: "Danh sách hồ sơ ứng tuyển", description: "Click chọn CV apply cần xem của từng job." },
      { title: "Xem chi tiết từng CV để liên hệ", description: "Mở từng hồ sơ để xem thông tin chi tiết và liên hệ ứng viên." },
      { title: "Chuyển trạng thái ứng viên", description: "Lưu, tải hoặc đánh dấu trạng thái phù hợp." },
    ]),
  },
  {
    id: "m-06-employer-account",
    moduleNumber: "06",
    audience: "employer",
    title: "Quản lý tài khoản",
    shortDescription:
      "Hướng dẫn Nhà tuyển dụng cập nhật thông tin tài khoản, thông tin công ty và các thiết lập liên quan.",
    whenToUse: "Khi cần cập nhật thông tin doanh nghiệp, người liên hệ hoặc thiết lập tài khoản.",
    checklist: [
      "Vào mục tài khoản hoặc hồ sơ doanh nghiệp.",
      "Cập nhật thông tin doanh nghiệp và người liên hệ.",
      "Lưu thay đổi.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào hồ sơ doanh nghiệp", description: "Truy cập khu vực thông tin tài khoản NTD." },
      { title: "Cập nhật thông tin công ty và người liên hệ", description: "Tên, lĩnh vực, quy mô, địa chỉ, logo, thông tin người phụ trách." },
      { title: "Lưu thay đổi", description: "Xác nhận và lưu lại thông tin đã cập nhật." },
    ]),
  },
  {
    id: "m-01-candidate-register",
    moduleNumber: "01",
    audience: "candidate",
    title: "Đăng ký tài khoản",
    shortDescription:
      "Hướng dẫn Ứng viên tạo tài khoản mới trên HR1Jobs để bắt đầu tìm kiếm việc làm, nộp hồ sơ và theo dõi quá trình ứng tuyển.",
    whenToUse:
      "Áp dụng khi ứng viên lần đầu sử dụng HR1Jobs và cần khởi tạo tài khoản cá nhân.",
    checklist: [
      "Truy cập trang đăng ký Ứng viên trên HR1Jobs.",
      "Nhập thông tin cá nhân: họ tên, email, số điện thoại.",
      "Tạo mật khẩu và xác nhận mật khẩu.",
      "Hoàn tất đăng ký và bắt đầu tạo hồ sơ.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Truy cập trang đăng ký", description: "Mở HR1Jobs và chọn khu vực dành cho Ứng viên, sau đó chọn Đăng ký." },
      { title: "Nhập thông tin cá nhân", description: "Điền đầy đủ họ tên, địa chỉ email và số điện thoại." },
      { title: "Tạo mật khẩu", description: "Đặt mật khẩu mạnh và nhập lại để xác nhận." },
      { title: "Hoàn tất và bắt đầu", description: "Đăng nhập và bắt đầu xây dựng hồ sơ cá nhân." },
    ]),
    note: "Sử dụng email cá nhân thường dùng để không bỏ lỡ thông báo từ nhà tuyển dụng.",
    commonIssues: [
      { question: "Không nhận được email xác nhận?", answer: "Kiểm tra hộp thư Spam/Promotions. Nếu vẫn không thấy, thử gửi lại hoặc liên hệ hỗ trợ HR1Jobs." },
      { question: "Số điện thoại đã được đăng ký?", answer: "Mỗi số điện thoại chỉ liên kết được một tài khoản. Thử đăng nhập hoặc dùng email để đăng ký." },
    ],
  },
  {
    id: "m-02-candidate-login",
    moduleNumber: "02",
    audience: "candidate",
    title: "Đăng nhập tài khoản",
    shortDescription:
      "Hướng dẫn Ứng viên đăng nhập vào tài khoản HR1Jobs để sử dụng đầy đủ các tính năng tìm việc và quản lý hồ sơ.",
    whenToUse: "Sử dụng mỗi khi ứng viên muốn truy cập tài khoản để tìm việc, nộp hồ sơ hoặc theo dõi ứng tuyển.",
    checklist: [
      "Truy cập trang đăng nhập HR1Jobs.",
      "Nhập thông tin và đăng nhập.",
      "Vào trang cá nhân.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Mở trang đăng nhập", description: "Vào HR1Jobs và chọn Đăng nhập dành cho Ứng viên." },
      { title: "Nhập thông tin và đăng nhập", description: "Điền email/SĐT đã đăng ký và mật khẩu, nhấn Đăng nhập." },
      { title: "Vào trang cá nhân", description: "Bắt đầu sử dụng các tính năng tìm việc và quản lý hồ sơ." },
    ]),
    commonIssues: [
      { question: "Quên mật khẩu?", answer: "Chọn 'Quên mật khẩu' trên trang đăng nhập, nhập email và làm theo hướng dẫn đặt lại mật khẩu." },
      { question: "Tài khoản bị khóa?", answer: "Liên hệ bộ phận hỗ trợ HR1Jobs để được mở khóa và xác minh danh tính." },
    ],
  },
  {
    id: "m-03-candidate-edit",
    moduleNumber: "03",
    audience: "candidate",
    title: "Chỉnh sửa hồ sơ",
    shortDescription:
      "Hướng dẫn Ứng viên chỉnh sửa thông tin cá nhân, kinh nghiệm, học vấn, kỹ năng và các nội dung liên quan trong hồ sơ.",
    whenToUse: "Khi cần cập nhật kinh nghiệm mới, học vấn, kỹ năng hoặc thông tin cá nhân.",
    checklist: [
      "Vào mục hồ sơ cá nhân.",
      "Chọn chỉnh sửa.",
      "Cập nhật từng nhóm thông tin.",
      "Lưu thay đổi và kiểm tra lại hiển thị hồ sơ.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào hồ sơ cá nhân", description: "Truy cập khu vực hồ sơ trong tài khoản." },
      { title: "Chọn chỉnh sửa", description: "Mở chế độ chỉnh sửa cho từng phần thông tin." },
      { title: "Cập nhật thông tin", description: "Chỉnh sửa kinh nghiệm, học vấn, kỹ năng…" },
      { title: "Lưu và kiểm tra hiển thị", description: "Xem lại hồ sơ sau khi cập nhật để đảm bảo chính xác." },
    ]),
  },
  {
    id: "m-04-candidate-profile",
    moduleNumber: "04",
    audience: "candidate",
    title: "Quản lý hồ sơ",
    shortDescription:
      "Hướng dẫn Ứng viên quản lý hồ sơ cá nhân trên HR1Jobs để tăng khả năng được Nhà tuyển dụng chú ý.",
    whenToUse: "Khi ứng viên muốn kiểm tra, hoàn thiện hồ sơ cá nhân trên hệ thống.",
    checklist: [
      "Đăng nhập tài khoản Ứng viên.",
      "Vào mục Quản lý hồ sơ.",
      "Kiểm tra trạng thái hồ sơ.",
      "Cập nhật các thông tin còn thiếu nếu có.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Đăng nhập Ứng viên", description: "Vào HR1Jobs và đăng nhập bằng tài khoản ứng viên." },
      { title: "Mở Quản lý hồ sơ", description: "Truy cập khu vực quản lý hồ sơ cá nhân." },
      { title: "Kiểm tra trạng thái hồ sơ", description: "Xem mức độ hoàn thiện và các mục còn thiếu." },
      { title: "Cập nhật thông tin còn thiếu", description: "Bổ sung các thông tin cần thiết để hồ sơ đầy đủ hơn." },
    ]),
  },
  {
    id: "m-05-candidate-cv-template",
    moduleNumber: "05",
    audience: "candidate",
    title: "Chọn mẫu CV",
    shortDescription:
      "Hướng dẫn Ứng viên chọn mẫu CV phù hợp để trình bày hồ sơ chuyên nghiệp hơn.",
    whenToUse: "Khi muốn thay đổi giao diện CV để phù hợp với ngành nghề hoặc vị trí ứng tuyển.",
    checklist: [
      "Vào mục mẫu CV.",
      "Xem danh sách mẫu CV có sẵn.",
      "Chọn mẫu phù hợp với ngành nghề/vị trí ứng tuyển.",
      "Áp dụng mẫu CV cho hồ sơ.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Mở mục mẫu CV", description: "Truy cập khu vực thư viện mẫu CV." },
      { title: "Xem danh sách mẫu", description: "Lướt qua các mẫu CV có sẵn trên hệ thống." },
      { title: "Chọn mẫu phù hợp", description: "Chọn mẫu phù hợp với ngành nghề/cấp bậc." },
      { title: "Áp dụng cho hồ sơ", description: "Lưu lựa chọn để mẫu được áp dụng vào CV." },
    ]),
  },
  {
    id: "m-06-candidate-my-jobs",
    moduleNumber: "06",
    audience: "candidate",
    title: "Việc làm của tôi",
    shortDescription:
      "Hướng dẫn Ứng viên theo dõi các việc làm đã lưu, đã ứng tuyển hoặc đang quan tâm.",
    whenToUse: "Khi cần xem lại các công việc đã lưu hoặc đã ứng tuyển để theo dõi tiến trình.",
    checklist: [
      "Vào mục Việc làm của tôi.",
      "Kiểm tra danh sách việc đã lưu hoặc đã ứng tuyển.",
      "Xem trạng thái từng công việc.",
      "Tiếp tục ứng tuyển hoặc cập nhật hồ sơ nếu cần.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào Việc làm của tôi", description: "Truy cập khu vực quản lý công việc cá nhân." },
      { title: "Danh sách việc đã lưu/ứng tuyển", description: "Xem tất cả công việc đang theo dõi." },
      { title: "Trạng thái từng công việc", description: "Kiểm tra trạng thái: đã nộp, đang xem xét…" },
      { title: "Tiếp tục thao tác", description: "Ứng tuyển tiếp hoặc cập nhật hồ sơ nếu cần." },
    ]),
  },
  {
    id: "m-07-candidate-job-alerts",
    moduleNumber: "07",
    audience: "candidate",
    title: "Thông báo việc làm",
    shortDescription:
      "Hướng dẫn Ứng viên quản lý thông báo việc làm để nhận gợi ý công việc phù hợp.",
    whenToUse: "Khi muốn nhận thông báo về công việc mới phù hợp với tiêu chí cá nhân.",
    checklist: [
      "Vào mục Thông báo việc làm.",
      "Chọn tiêu chí nhận thông báo như ngành nghề, địa điểm, cấp bậc.",
      "Bật/tắt thông báo.",
      "Lưu thiết lập.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào Thông báo việc làm", description: "Truy cập khu vực thiết lập job alert." },
      { title: "Chọn tiêu chí", description: "Ngành nghề, địa điểm, cấp bậc, mức lương mong muốn." },
      { title: "Bật/tắt thông báo", description: "Tùy chọn nhận thông báo qua email/hệ thống." },
      { title: "Lưu thiết lập", description: "Xác nhận để hệ thống bắt đầu gửi gợi ý phù hợp." },
    ]),
  },
  {
    id: "m-08-candidate-visibility",
    moduleNumber: "08",
    audience: "candidate",
    title: "NTD xem hồ sơ",
    shortDescription:
      "Hướng dẫn Ứng viên kiểm tra hoặc thiết lập trạng thái cho phép Nhà tuyển dụng xem hồ sơ.",
    whenToUse: "Khi muốn kiểm soát việc NTD có thể tìm thấy và xem hồ sơ của mình hay không.",
    checklist: [
      "Vào mục cài đặt hồ sơ.",
      "Kiểm tra trạng thái hiển thị hồ sơ.",
      "Bật hoặc tắt quyền cho Nhà tuyển dụng xem hồ sơ.",
      "Lưu thay đổi.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào cài đặt hồ sơ", description: "Truy cập khu vực thiết lập quyền hiển thị." },
      { title: "Kiểm tra trạng thái hiển thị", description: "Xem hồ sơ đang ở chế độ công khai hay riêng tư." },
      { title: "Bật/tắt quyền NTD xem", description: "Chọn trạng thái phù hợp với nhu cầu tìm việc." },
      { title: "Lưu thay đổi", description: "Xác nhận thiết lập mới." },
    ]),
  },
  {
    id: "m-09-candidate-password",
    moduleNumber: "09",
    audience: "candidate",
    title: "Đổi mật khẩu",
    shortDescription: "Hướng dẫn Ứng viên đổi mật khẩu để bảo mật tài khoản.",
    whenToUse: "Định kỳ hoặc khi nghi ngờ tài khoản bị lộ thông tin đăng nhập.",
    checklist: [
      "Vào mục tài khoản hoặc bảo mật.",
      "Chọn đổi mật khẩu.",
      "Nhập mật khẩu hiện tại.",
      "Nhập mật khẩu mới và xác nhận.",
      "Lưu thay đổi.",
    ],
    imageSteps: stepsFromChecklist([
      { title: "Vào mục bảo mật", description: "Truy cập khu vực tài khoản & bảo mật." },
      { title: "Chọn đổi mật khẩu", description: "Mở form đổi mật khẩu." },
      { title: "Nhập mật khẩu hiện tại", description: "Xác thực bằng mật khẩu đang sử dụng." },
      { title: "Nhập mật khẩu mới", description: "Đặt mật khẩu mới và nhập lại để xác nhận." },
      { title: "Lưu thay đổi", description: "Hoàn tất đổi mật khẩu và đăng nhập lại nếu cần." },
    ]),
    note: "Sử dụng mật khẩu mạnh tối thiểu 8 ký tự gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
  },
];

export const FAQS = [
  {
    q: "Tôi chưa thấy đúng giao diện như tài khoản của mình thì làm sao?",
    a: "Giao diện HR1Jobs có thể được cập nhật theo từng phiên bản. Vui lòng đối chiếu theo các bước trong hướng dẫn, nếu vẫn không trùng khớp hãy liên hệ bộ phận hỗ trợ.",
  },
  {
    q: "Tôi không đăng nhập được thì xử lý thế nào?",
    a: "Kiểm tra lại email/SĐT và mật khẩu, thử chức năng quên mật khẩu, đảm bảo kết nối mạng ổn định. Nếu vẫn lỗi, liên hệ HR1Jobs để được hỗ trợ.",
  },
  {
    q: "Nhà tuyển dụng có thể xem hồ sơ ứng viên ở đâu?",
    a: "Trong dashboard NTD, mục Quản lý tin tuyển dụng → chọn tin → mở danh sách hồ sơ ứng tuyển. Xem chi tiết tại Module 04.",
  },
  {
    q: "Ứng viên có thể đổi mẫu CV sau khi tạo hồ sơ không?",
    a: "Có. Truy cập mục mẫu CV và chọn mẫu mới bất kỳ lúc nào. Thông tin hồ sơ sẽ được giữ nguyên. Xem Module 03.",
  },
  {
    q: "Khi chưa có ảnh hướng dẫn, trang có bị lỗi không?",
    a: "Không. Hệ thống hiển thị placeholder gọn gàng và sẽ tự thay thế bằng ảnh thật khi được cập nhật.",
  },
];

export const VERSION_ROWS = MODULES.map((m) => ({
  group: AUDIENCES[m.audience].label,
  module: m.title,
  role:
    m.audience === "employer"
      ? m.title === "Đăng ký tài khoản"
        ? "Tạo tài khoản doanh nghiệp"
        : m.title === "Đăng nhập"
          ? "Truy cập dashboard NTD"
          : m.title === "Đăng tuyển"
            ? "Tạo tin tuyển dụng"
            : m.title === "Xem hồ sơ ứng tuyển"
              ? "Quản lý ứng viên ứng tuyển"
              : "Cập nhật thông tin doanh nghiệp"
      : m.title === "Đăng ký tài khoản"
        ? "Tạo tài khoản ứng viên"
        : m.title === "Đăng nhập tài khoản"
          ? "Truy cập tài khoản ứng viên"
          : m.title === "Quản lý hồ sơ"
            ? "Quản lý hồ sơ cá nhân"
            : m.title === "Chỉnh sửa hồ sơ"
              ? "Cập nhật thông tin CV/hồ sơ"
              : m.title === "Chọn mẫu CV"
                ? "Chọn giao diện CV"
                : m.title === "Việc làm của tôi"
                  ? "Theo dõi việc đã lưu/đã ứng tuyển"
                  : m.title === "Thông báo việc làm"
                    ? "Quản lý job alert"
                    : m.title === "NTD xem hồ sơ"
                      ? "Quản lý trạng thái hiển thị hồ sơ"
                      : "Cập nhật bảo mật tài khoản",
  status: "Đang cập nhật ảnh",
}));
