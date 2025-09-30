import './Landing.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing-container landing-full">
      <motion.div className="landing-hero" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* <img className="landing-hero-img" src="/hero-philosophy.png" alt="Biểu tượng Triết học" /> */}
        <div className="landing-hero-content">
          <h1>Cơ cấu xã hội - giai cấp &amp; Liên minh giai cấp ở Việt Nam</h1>
          <p className="landing-slogan">Chiêm nghiệm sự biến đổi và liên kết trong thời kỳ quá độ lên CNXH</p>
          <motion.div className="landing-nav-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <Link to="/structure" className="landing-btn big">Cơ cấu xã hội</Link>
            <Link to="/alliance" className="landing-btn big">Liên minh giai cấp</Link>
            <Link to="/gallery" className="landing-btn big">Hình ảnh minh họa</Link>
            <Link to="/about" className="landing-btn big">Về dự án</Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="landing-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <p>
          Website này là một không gian học thuật để trình bày và chiêm nghiệm về những biến đổi sâu sắc trong cơ cấu xã hội - giai cấp và tầm quan trọng của khối liên minh giai cấp, tầng lớp trong tiến trình xây dựng Chủ nghĩa Xã hội tại Việt Nam.
        </p>
      </motion.div>
      <section className="landing-section">
        <h2>Vì sao phải chiêm nghiệm chủ đề này?</h2>
        <ul>
          <li>Hiểu rõ bản chất và sự vận động của các giai cấp, tầng lớp xã hội Việt Nam.</li>
          <li>Thấy được tầm quan trọng của khối liên minh trong thời kỳ quá độ lên CNXH.</li>
          <li>Trực quan hóa kiến thức qua hình ảnh và phân tích để khơi gợi tư duy phản biện.</li>
        </ul>
      </section>
    </div>
  )
}