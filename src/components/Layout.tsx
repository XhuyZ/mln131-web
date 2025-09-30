import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

// Nút chuyển đến game
const goToGame = () => {
  window.open('http://mln.xhuyz.me/', '_blank');
};

const navs = [
  { to: '/', label: 'Khởi đầu' }, // Đổi tên "Trang chủ" thành "Khởi đầu"
  { to: '/structure', label: 'Cơ cấu hiện sinh' }, // Triết lý hơn
  { to: '/alliance', label: 'Liên kết tư tưởng' }, // Triết lý hơn
  { to: '/gallery', label: 'Thư viện hình ảnh' },
  // { to: '/about', label: 'Về dự án' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div className="layout-root">
      <header className="layout-header">
        <div className="layout-logo">
          {/* <img src="/logo-triet-hoc.png" alt="logo" /> Thêm logo triết học */}
          <span>Hành trình Tư duy</span> {/* Tên dự án mang tính triết học */}
        </div>
        <nav className="layout-nav">
          {navs.map(n => (
            <Link key={n.to} to={n.to} className={pathname === n.to ? 'active' : ''}>{n.label}</Link>
          ))}
        </nav>
        <button
          className="go-to-game-btn"
          onClick={goToGame}
        >
          Chơi game
        </button>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        <div>© {new Date().getFullYear()} Nhóm trình bày - Khám phá Triết học</div>
        <div>"Cuộc sống chỉ có thể hiểu được khi nhìn về phía sau, nhưng phải sống khi nhìn về phía trước." - Søren Kierkegaard</div> {/* Thêm trích dẫn */}
      </footer>
    </div>
  )
}