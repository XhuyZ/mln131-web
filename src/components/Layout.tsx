import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const navs = [
  { to: '/', label: 'Trang chủ' },
  { to: '/structure', label: 'Cơ cấu xã hội' },
  { to: '/alliance', label: 'Liên minh giai cấp' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div className="layout-root">
      <header className="layout-header">
        <div className="layout-logo">
          <img src="/vite.svg" alt="logo" />
          <span>Triển lãm Xã hội Việt Nam</span>
        </div>
        <nav className="layout-nav">
          {navs.map(n => (
            <Link key={n.to} to={n.to} className={pathname === n.to ? 'active' : ''}>{n.label}</Link>
          ))}
        </nav>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        <div>© {new Date().getFullYear()} Nhóm trình bày - Xã hội học Việt Nam</div>
        <div>Made with ❤️ for education</div>
      </footer>
    </div>
  )
}
