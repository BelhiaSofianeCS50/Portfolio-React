import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Layout from './components/Layout'
import Contact from './pages/Contact'

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App