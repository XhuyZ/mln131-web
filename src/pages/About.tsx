import './About.css'

const members = [
  {
    name: 'Nguyễn Văn A',
    role: 'Nội dung & Phân tích',
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Trần Thị B',
    role: 'Thiết kế & Trực quan',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Lê Văn C',
    role: 'Kỹ thuật & Phát triển',
    img: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
]

export default function About() {
  return (
    <div className="about-container">
      <h2>Về dự án và Nhóm thực hiện</h2>
      <p className="about-intro">
        Dự án này được xây dựng nhằm mục đích trực quan hóa và phân tích sâu sắc về cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên Chủ nghĩa xã hội ở Việt Nam, phục vụ cho mục đích học tập, nghiên cứu và truyền cảm hứng.
      </p>
      <div className="about-members">
        {members.map(m => (
          <div className="about-member" key={m.name}>
            <img src={m.img} alt={m.name} />
            <div className="about-member-name">{m.name}</div>
            <div className="about-member-role">{m.role}</div>
          </div>
        ))}
      </div>
      <div className="about-thanks">
        <p><b>Xin chân thành cảm ơn quý Thầy/Cô và các bạn đã quan tâm theo dõi!</b></p>
        <p>Mọi góp ý, nhận xét về nội dung và hình thức trình bày xin vui lòng gửi về nhóm để dự án được hoàn thiện hơn nữa.</p>
      </div>
    </div>
  )
}