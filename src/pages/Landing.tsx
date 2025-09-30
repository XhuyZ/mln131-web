import './Landing.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing-container landing-full">
      <motion.div className="landing-hero" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <img className="landing-hero-img" src="/vite.svg" alt="Triển lãm xã hội Việt Nam" />
        <div className="landing-hero-content">
          <h1>Cơ cấu xã hội - giai cấp &amp; Liên minh giai cấp ở Việt Nam</h1>
          <p className="landing-slogan">Khám phá sự phát triển, đoàn kết và đổi mới trong thời kỳ quá độ lên CNXH</p>
          <motion.div className="landing-nav-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <Link to="/structure" className="landing-btn big">Cơ cấu xã hội</Link>
            <Link to="/alliance" className="landing-btn big">Liên minh giai cấp</Link>
            <Link to="/gallery" className="landing-btn big">Gallery</Link>
            <Link to="/about" className="landing-btn big">About</Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="landing-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <p>
          Website triển lãm trực quan về các giai cấp, tầng lớp xã hội và liên minh trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam. Kết hợp storytelling, hình ảnh, ví dụ thực tiễn và gallery sinh động.
        </p>
      </motion.div>
      <section className="landing-section">
        <h2>Vì sao nên khám phá?</h2>
        <ul>
          <li>Hiểu rõ vai trò từng giai cấp, tầng lớp trong phát triển đất nước.</li>
          <li>Trực quan hóa kiến thức bằng hình ảnh, ví dụ thực tiễn, infographic.</li>
          <li>Khơi dậy cảm hứng sáng tạo, đoàn kết và đổi mới xã hội.</li>
        </ul>
      </section>
    </div>
  )
}
