import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';
import GuestbookPage from './pages/GuestbookPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BooksPage from './pages/BooksPage';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  margin-left: 80px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 70px;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/guestbook" element={<GuestbookPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
