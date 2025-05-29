import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faLaptopCode, 
  faCamera, 
  faBook, 
  faComments, 
  faBlog 
} from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;
  background-color: rgba(22, 34, 56, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  z-index: 100;
`;

const ProfileImage = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent-color-orange);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${props => props.$active ? 'var(--accent-color-orange)' : 'var(--text-color)'};
  background-color: ${props => props.$active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color-orange);
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarContainer>
      <ProfileImage to="/">
        <img src="/images/profile.jpg" alt="Profile" />
      </ProfileImage>
      
      <NavItems>
        <NavItem to="/" $active={isActive('/')}>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </NavItem>
        
        <NavItem to="/projects" $active={isActive('/projects')}>
          <FontAwesomeIcon icon={faLaptopCode} size="lg" />
        </NavItem>
        
        <NavItem to="/photography" $active={isActive('/photography')}>
          <FontAwesomeIcon icon={faCamera} size="lg" />
        </NavItem>
        
        <NavItem to="/guestbook" $active={isActive('/guestbook')}>
          <FontAwesomeIcon icon={faComments} size="lg" />
        </NavItem>
        
        <NavItem to="/blog" $active={isActive('/blog')}>
          <FontAwesomeIcon icon={faBlog} size="lg" />
        </NavItem>
        
        <NavItem to="/books" $active={isActive('/books')}>
          <FontAwesomeIcon icon={faBook} size="lg" />
        </NavItem>
      </NavItems>
    </SidebarContainer>
  );
};

export default Sidebar; 