import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  margin-left: 80px;
  width: calc(100% - 80px);
  min-height: 100vh;
  padding: 2rem;
  padding-right: calc(2rem + 320px); /* Add extra padding for the fixed playlist */
  
  @media (max-width: 1200px) {
    padding-right: 2rem; /* Reset padding on smaller screens */
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        {children}
        <Footer>
          © {currentYear} Willy Zuo. All rights reserved.
        </Footer>
      </MainContent>
    </LayoutContainer>
  );
};

export default MainLayout; 