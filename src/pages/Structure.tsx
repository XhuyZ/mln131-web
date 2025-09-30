import './Structure.css'
import { motion } from 'framer-motion'

const classes = [
  {
    name: 'Công nhân',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Giai cấp lãnh đạo thông qua Đảng, tiên phong trong CNH – HĐH, nòng cốt trong liên minh công – nông – trí thức.',
    example: 'Ví dụ: Công nhân nhà máy VinFast, Samsung, các khu công nghiệp lớn.'
  },
  {
    name: 'Nông dân',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Lực lượng chiến lược, cơ sở quan trọng để phát triển kinh tế - xã hội, giữ ổn định chính trị, bảo vệ Tổ quốc và bản sắc văn hóa.',
    example: 'Ví dụ: Nông dân trồng lúa ở Đồng bằng sông Cửu Long, trồng cà phê Tây Nguyên.'
  },
  {
    name: 'Trí thức',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    desc: 'Lực lượng sáng tạo, đi đầu trong phát triển kinh tế tri thức, văn hóa, khoa học - công nghệ, góp phần nâng cao sức mạnh dân tộc.',
    example: 'Ví dụ: Kỹ sư công nghệ, giáo sư đại học, nhà nghiên cứu khoa học.'
  },
  {
    name: 'Doanh nhân',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
    desc: 'Tầng lớp xã hội phát triển nhanh, giữ vai trò ngày càng lớn trong kinh tế, được định hướng xây dựng thành lực lượng vững mạnh.',
    example: 'Ví dụ: Chủ doanh nghiệp, startup trẻ, lãnh đạo tập đoàn lớn.'
  },
  {
    name: 'Phụ nữ',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'Lực lượng lao động đông đảo, đóng góp to lớn cho sự nghiệp CNXH và giữ vai trò trong cả xã hội lẫn gia đình.',
    example: 'Ví dụ: Nữ bác sĩ, giáo viên, công nhân, doanh nhân, lãnh đạo xã hội.'
  },
  {
    name: 'Thanh niên',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    desc: 'Rường cột quốc gia, lực lượng xung kích, chủ nhân tương lai, cần được giáo dục, rèn luyện để trở thành thế hệ kế tục xây dựng và bảo vệ Tổ quốc.',
    example: 'Ví dụ: Sinh viên, đoàn viên thanh niên, tình nguyện viên.'
  },
]

export default function Structure() {
  return (
    <div className="structure-container">
      <h2>Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH ở Việt Nam</h2>
      <p className="structure-intro">
        Sau thắng lợi của cách mạng, xã hội Việt Nam bước vào thời kỳ quá độ lên chủ nghĩa xã hội với sự biến đổi mạnh mẽ về cơ cấu xã hội - giai cấp. Mỗi giai cấp, tầng lớp đều có vai trò quan trọng, góp phần vào sự phát triển chung của đất nước.
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
