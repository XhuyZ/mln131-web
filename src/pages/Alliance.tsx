import { useState } from 'react'
import './Alliance.css'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    key: 'kinh-te',
    label: 'Nội dung kinh tế',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p>Đây là <b>nội dung cơ bản và quyết định nhất</b>, tạo nên cơ sở vật chất - kỹ thuật của liên minh. Mục tiêu là thỏa mãn nhu cầu, lợi ích kinh tế thiết thân của giai cấp công nhân, nông dân, trí thức và các tầng lớp khác.</p>
        <ul>
          <li>Tăng cường hợp tác kinh tế giữa công nhân, nông dân, trí thức; mở rộng liên kết với đội ngũ doanh nhân để xây dựng nền kinh tế mới XHCN hiện đại.</li>
          <li>Xây dựng kế hoạch đầu tư và tổ chức triển khai hoạt động kinh tế, đảm bảo lợi ích hài hòa giữa các bên.</li>
          <li>Tổ chức các hình thức giao lưu, hợp tác, liên kết kinh tế giữa công nghiệp - nông nghiệp - khoa học và công nghệ - dịch vụ; giữa các ngành, thành phần và vùng kinh tế trong nước và quốc tế để nâng cao đời sống.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Mô hình liên kết 4 nhà (Nhà nước - Nhà nông - Nhà khoa học - Doanh nghiệp), hợp tác xã nông nghiệp công nghệ cao, các dự án khởi nghiệp sáng tạo.</p>
      </>
    )
  },
  {
    key: 'chinh-tri',
    label: 'Nội dung chính trị',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p>Nội dung chính trị nhằm <b>giữ vững lập trường, vai trò lãnh đạo của Đảng</b> và phát huy dân chủ XHCN.</p>
        <ul>
          <li>Giữ vững lập trường chính trị - tư tưởng của giai cấp công nhân và vai trò lãnh đạo của Đảng Cộng sản Việt Nam đối với khối liên minh và toàn xã hội.</li>
          <li>Phát huy dân chủ XHCN và quyền làm chủ của nhân dân; củng cố sức mạnh đại đoàn kết toàn dân tộc; tăng cường sự đồng thuận xã hội; xây dựng Đảng trong sạch, vững mạnh.</li>
          <li>Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân, đảm bảo các quyền và lợi ích chính đáng của mọi tầng lớp.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Hoạt động của Quốc hội, Hội đồng nhân dân các cấp, Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị - xã hội.</p>
      </>
    )
  },
  {
    key: 'van-hoa',
    label: 'Nội dung văn hóa - xã hội',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p>Nội dung này hướng đến <b>phát triển văn hóa, con người toàn diện</b> và thực hiện tiến bộ, công bằng xã hội.</p>
        <ul>
          <li>Gắn tăng trưởng kinh tế với phát triển văn hóa, xây dựng con người Việt Nam phát triển toàn diện, hướng đến chân - thiện - mỹ, thấm nhuần tinh thần dân tộc, nhân văn, dân chủ và khoa học.</li>
          <li>Nâng cao chất lượng nguồn nhân lực; xóa đói giảm nghèo; thực hiện tốt các chính sách xã hội; chăm sóc sức khỏe, nâng cao chất lượng sống; nâng cao dân trí và thực hiện tốt an sinh xã hội.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Chương trình "Sóng và máy tính cho em", các hoạt động bảo tồn và phát huy giá trị di sản văn hóa, phong trào khuyến học, xây dựng nông thôn mới.</p>
      </>
    )
  },
  {
    key: 'phuong-huong',
    label: 'Phương hướng xây dựng',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p>Các phương hướng cơ bản để xây dựng cơ cấu xã hội - giai cấp và tăng cường liên minh:</p>
        <ul>
          <li>Đẩy mạnh công nghiệp hóa, hiện đại hóa; giải quyết tốt mối quan hệ giữa tăng trưởng kinh tế với đảm bảo tiến bộ, công bằng xã hội.</li>
          <li>Xây dựng và thực hiện hệ thống chính sách xã hội tổng thể nhằm tác động tạo sự biến đổi tích cực cơ cấu xã hội - giai cấp.</li>
          <li>Tạo sự đồng thuận và phát huy tinh thần đoàn kết thống nhất giữa các lực lượng trong khối liên minh và toàn xã hội; giải quyết tốt các mâu thuẫn, khác biệt.</li>
          <li>Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, đẩy mạnh phát triển khoa học và công nghệ.</li>
          <li>Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc Việt Nam nhằm tăng cường khối liên minh và xây dựng khối đại đoàn kết toàn dân.</li>
        </ul>
        <p className="alliance-example">Ví dụ: Các nghị quyết của Đảng về phát triển kinh tế - xã hội, các chính sách an sinh xã hội, các chương trình phát triển khoa học - công nghệ.</p>
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
      <p className="alliance-intro">
        Liên minh giai cấp, tầng lớp là một tất yếu khách quan, một nguyên tắc chiến lược trong quá trình xây dựng Chủ nghĩa xã hội ở Việt Nam, được thể hiện qua các nội dung kinh tế, chính trị và văn hóa - xã hội.
      </p>
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