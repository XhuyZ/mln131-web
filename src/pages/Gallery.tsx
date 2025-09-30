import { useState } from 'react'
import './Gallery.css'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    title: 'Công nhân hiện đại',
    desc: 'Công nhân trong dây chuyền sản xuất hiện đại, đại diện cho lực lượng sản xuất chủ lực.'
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Nông dân đổi mới',
    desc: 'Nông dân ứng dụng công nghệ cao vào sản xuất nông nghiệp.'
  },
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    title: 'Trí thức trẻ',
    desc: 'Trí thức trẻ nghiên cứu khoa học, đổi mới sáng tạo.'
  },
  {
    src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80',
    title: 'Doanh nhân khởi nghiệp',
    desc: 'Doanh nhân trẻ, startup sáng tạo, góp phần phát triển kinh tế.'
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: 'Phụ nữ Việt Nam',
    desc: 'Phụ nữ tham gia lao động, giữ vai trò quan trọng trong xã hội và gia đình.'
  },
  {
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    title: 'Thanh niên tình nguyện',
    desc: 'Thanh niên tham gia hoạt động xã hội, xây dựng đất nước.'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: 'Đoàn kết dân tộc',
    desc: 'Các tầng lớp xã hội cùng chung sức xây dựng đại đoàn kết.'
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: 'Hợp tác xã kiểu mới',
    desc: 'Mô hình hợp tác xã nông nghiệp ứng dụng công nghệ cao.'
  },
]

export default function Gallery() {
  const [open, setOpen] = useState<number|null>(null)
  return (
    <div className="gallery-container">
      <h2>Triển lãm hình ảnh &amp; dẫn chứng thực tiễn</h2>
      <motion.div className="gallery-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        {images.map((img, idx) => (
          <motion.div
            className="gallery-item"
            key={img.src}
            onClick={() => setOpen(idx)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            <img src={img.src} alt={img.title} />
            <div className="gallery-caption">{img.title}</div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {open !== null && (
          <motion.div className="gallery-modal" onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div className="gallery-modal-content" onClick={e => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <img src={images[open].src} alt={images[open].title} />
              <div className="gallery-modal-title">{images[open].title}</div>
              <div className="gallery-modal-desc">{images[open].desc}</div>
              <button className="gallery-modal-close" onClick={() => setOpen(null)}>Đóng</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
