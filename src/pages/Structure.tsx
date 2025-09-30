import './Structure.css'
import { motion } from 'framer-motion'

const classes = [
  {
    name: 'Giai cấp Công nhân',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Giai cấp lãnh đạo cách mạng thông qua Đảng Cộng sản, đại diện cho phương thức sản xuất tiên tiến, lực lượng nòng cốt trong công nghiệp hóa, hiện đại hóa và liên minh với nông dân, trí thức.',
    example: 'Hiện thân: Công nhân trong các nhà máy sản xuất công nghệ cao, khu công nghiệp trọng điểm.'
  },
  {
    name: 'Giai cấp Nông dân',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Có vị trí chiến lược trong công nghiệp hóa, hiện đại hóa nông nghiệp, nông thôn; góp phần phát triển bền vững, giữ ổn định chính trị, bảo vệ môi trường, giữ gìn bản sắc văn hóa.',
    example: 'Hiện thân: Nông dân áp dụng công nghệ số vào sản xuất, tham gia chuỗi giá trị nông sản.'
  },
  {
    name: 'Tầng lớp Trí thức',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    desc: 'Lực lượng sáng tạo đặc biệt quan trọng trong công nghiệp hóa, hiện đại hóa, hội nhập quốc tế, xây dựng kinh tế tri thức và văn hóa dân tộc; nâng cao trí tuệ, sức mạnh đất nước.',
    example: 'Hiện thân: Các nhà khoa học, giáo sư, kỹ sư công nghệ thông tin tiên phong.'
  },
  {
    name: 'Tầng lớp Doanh nhân',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
    desc: 'Tầng lớp xã hội phát triển nhanh, ngày càng giữ vai trò quan trọng, được Đảng xây dựng thành đội ngũ vững mạnh, góp phần vào sự thịnh vượng kinh tế.',
    example: 'Hiện thân: Chủ các tập đoàn lớn, các startup đổi mới sáng tạo, nhà quản lý cấp cao.'
  },
  {
    name: 'Vai trò của Phụ nữ',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'Lực lượng đông đảo, đóng góp to lớn trong xây dựng xã hội, chủ nghĩa xã hội và giữ vai trò quan trọng cả trong gia đình lẫn đời sống xã hội.',
    example: 'Hiện thân: Nữ lãnh đạo, nữ khoa học, nữ công nhân, nông dân giỏi việc nước, đảm việc nhà.'
  },
  {
    name: 'Thế hệ Thanh niên',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    desc: 'Rường cột, chủ nhân tương lai, lực lượng xung kích trong xây dựng và bảo vệ Tổ quốc; cần được giáo dục lý tưởng, đạo đức, lối sống văn hóa để trở thành thế hệ có trách nhiệm và bản lĩnh.',
    example: 'Hiện thân: Sinh viên tình nguyện, thanh niên khởi nghiệp, đoàn viên xung kích.'
  },
]

export default function Structure() {
  return (
    <div className="structure-container">
      <h2>Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH ở Việt Nam</h2>
      <p className="structure-intro">
        Sau thắng lợi của cuộc cách mạng, Việt Nam bước vào thời kỳ quá độ lên chủ nghĩa xã hội, chứng kiến sự biến đổi mạnh mẽ của cơ cấu xã hội - giai cấp. Sự biến đổi này vừa tuân theo quy luật phổ biến, vừa mang tính đặc thù của Việt Nam, khẳng định vị trí và vai trò của từng giai cấp, tầng lớp.
      </p>
      <div className="structure-grid">
        {classes.map((item, idx) => (
          <motion.div
            className="structure-card"
            key={item.name}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <img src={item.img} alt={item.name} className="structure-img" />
            <h3>{item.name}</h3>
            <p className="structure-desc">{item.desc}</p>
            <p className="structure-example">{item.example}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}