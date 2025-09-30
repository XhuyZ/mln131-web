import './About.css'

const members = [
  {
    name: 'Nguyễn Văn A',
    role: 'Trưởng nhóm',
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Trần Thị B',
    role: 'Thiết kế & Nội dung',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Lê Văn C',
    role: 'Lập trình & Kỹ thuật',
    img: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
]

export default function About() {
  return (
    <div className="about-container">
      <h2>Về dự án & nhóm thực hiện</h2>
      <p className="about-intro">
        Website này được xây dựng nhằm trực quan hóa kiến thức về cơ cấu xã hội - giai cấp và liên minh giai cấp trong thời kỳ quá độ lên CNXH ở Việt Nam, phục vụ cho bài thuyết trình học thuật và truyền cảm hứng sáng tạo.
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
        <p><b>Xin cảm ơn thầy/cô và các bạn đã theo dõi!</b></p>
        <p>Mọi ý kiến đóng góp xin gửi về nhóm để website ngày càng hoàn thiện hơn.</p>
      </div>
    </div>
  )
}
