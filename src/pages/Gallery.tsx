import { useState } from 'react'
import './Gallery.css'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    title: 'Người lao động chân chính',
    desc: 'Bàn tay người lao động kiến tạo nên giá trị, là biểu tượng của sự nỗ lực và cống hiến.'
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Hòa mình vào đất đai',
    desc: 'Con người và thiên nhiên hòa quyện, phản ánh sự sống và chu kỳ vĩnh cửu của sản xuất nông nghiệp.'
  },
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    title: 'Ánh sáng tri thức',
    desc: 'Hình ảnh ẩn dụ về sự tìm tòi, khám phá và soi rọi của trí tuệ con người trong mọi lĩnh vực.'
  },
  {
    src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80',
    title: 'Dấu ấn khởi nghiệp',
    desc: 'Sự dũng cảm tạo ra cái mới, biểu thị tinh thần tiên phong và khả năng định hình tương lai kinh tế.'
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: 'Sức mạnh mềm',
    desc: 'Vẻ đẹp và ý chí của người phụ nữ, nguồn cảm hứng và trụ cột tinh thần của cộng đồng.'
  },
  {
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    title: 'Hy vọng của thế hệ',
    desc: 'Thanh niên là dòng chảy của sức sống, là hạt mầm cho những ý tưởng và hành động cách tân.'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: 'Vòng tròn đồng điệu',
    desc: 'Sự đoàn kết như một dòng chảy vô tận, nơi các yếu tố khác biệt cùng tồn tại và phát triển.'
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: 'Giao hưởng phát triển',
    desc: 'Sự hợp tác hài hòa giữa các yếu tố tạo nên một bản giao hưởng của sự tiến bộ và thịnh vượng.'
  },
]

export default function Gallery() {
  const [open, setOpen] = useState<number|null>(null)
  return (
    <div className="gallery-container">
      <h2>Thư viện Hình ảnh &amp; Dẫn chứng Biểu tượng</h2>
      <p className="gallery-intro">
        Những hình ảnh dưới đây không chỉ là minh họa, mà là những biểu tượng trực quan, ẩn chứa các ý nghĩa sâu sắc về cơ cấu xã hội và sự liên kết.
      </p>
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
              <button className="gallery-modal-close" onClick={() => setOpen(null)}>Chiêm nghiệm xong</button> {/* Nút đóng triết lý hơn */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}