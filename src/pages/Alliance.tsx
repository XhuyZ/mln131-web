import { useState } from 'react'
import './Alliance.css'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    key: 'kinh-te',
    label: 'Kinh tế',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p><b>Kinh tế</b> là nền tảng vật chất - kỹ thuật của liên minh giai cấp trong thời kỳ quá độ lên CNXH.</p>
        <ul>
          <li>Tăng cường hợp tác giữa công nhân, nông dân, trí thức, mở rộng liên kết với doanh nhân để xây dựng nền kinh tế hiện đại.</li>
          <li>Xây dựng kế hoạch đầu tư, đảm bảo lợi ích các bên.</li>
          <li>Đẩy mạnh giao lưu, hợp tác giữa các ngành, vùng kinh tế trong nước và quốc tế.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Hợp tác xã nông nghiệp công nghệ cao, doanh nghiệp trẻ liên kết với nhà khoa học, mô hình liên kết 4 nhà (Nhà nước - Nhà nông - Nhà khoa học - Doanh nghiệp).</p>
      </>
    )
  },
  {
    key: 'chinh-tri',
    label: 'Chính trị',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p><b>Chính trị</b> giữ vững vai trò lãnh đạo của Đảng, lập trường công nhân, phát huy dân chủ XHCN.</p>
        <ul>
          <li>Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân.</li>
          <li>Củng cố sức mạnh đại đoàn kết toàn dân tộc, đồng thuận xã hội.</li>
          <li>Xây dựng Đảng trong sạch, vững mạnh.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Quốc hội, Hội đồng nhân dân các cấp, Mặt trận Tổ quốc, các tổ chức chính trị - xã hội.</p>
      </>
    )
  },
  {
    key: 'van-hoa',
    label: 'Văn hóa - Xã hội',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p><b>Văn hóa - Xã hội</b> kết hợp phát triển kinh tế với văn hóa, con người toàn diện hướng đến chân - thiện - mỹ.</p>
        <ul>
          <li>Nâng cao chất lượng nguồn nhân lực, an sinh xã hội, chăm lo sức khỏe, đời sống, trình độ dân trí.</li>
          <li>Thấm nhuần tinh thần dân tộc, nhân văn, dân chủ và khoa học.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Chương trình "Sóng và máy tính cho em", phong trào hiến máu nhân đạo, các hoạt động bảo tồn di sản văn hóa.</p>
      </>
    )
  },
  {
    key: 'phuong-huong',
    label: 'Phương hướng',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <ul>
          <li>Đẩy mạnh công nghiệp hóa, hiện đại hóa, gắn tăng trưởng kinh tế với công bằng xã hội.</li>
          <li>Xây dựng chính sách xã hội đồng bộ để định hướng cơ cấu xã hội – giai cấp.</li>
          <li>Phát huy đoàn kết, đồng thuận xã hội; giải quyết mâu thuẫn, khác biệt.</li>
          <li>Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, thúc đẩy khoa học – công nghệ.</li>
          <li>Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc để củng cố liên minh và đại đoàn kết dân tộc.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Chính sách hỗ trợ khởi nghiệp, chương trình phát triển nông thôn mới, cải cách giáo dục, chuyển đổi số quốc gia.</p>
      </>
    )
  },
]

export default function Alliance() {
  const [tab, setTab] = useState('kinh-te')
  const current = tabs.find(t => t.key === tab)
  return (
    <div className="alliance-container">
      <h2>Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam</h2>
      <div className="alliance-tabs">
        {tabs.map(t => (
          <motion.button
            key={t.key}
            className={tab === t.key ? 'active' : ''}
            onClick={() => setTab(t.key)}
            whileTap={{ scale: 0.96 }}
            animate={tab === t.key ? { scale: 1.08 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="alliance-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <img src={current?.img} alt={current?.label} className="alliance-img" />
          <div className="alliance-text">{current?.content}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
