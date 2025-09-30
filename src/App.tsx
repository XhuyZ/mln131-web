import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Structure from './pages/Structure'
import Alliance from './pages/Alliance'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Layout from './components/Layout'
import './App.css' // Đảm bảo import CSS tổng

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/alliance" element={<Alliance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App