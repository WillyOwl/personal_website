import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import PhotographyPage from './pages/PhotographyPage'
import GuestbookPage from './pages/GuestbookPage'
import BlogPage from './pages/BlogPage'
import BooksPage from './pages/BooksPage'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
