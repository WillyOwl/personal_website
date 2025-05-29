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
  position: relative;

  &:hover {
    border-color: var(--accent-color-orange);
  }

  &:hover::after {
    content: 'Home';
    position: absolute;
    left: 60px;
    background-color: rgba(22, 34, 56, 0.9);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
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

const NavItem = styled(Link)<{ $active?: boolean; $tooltip: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${props => props.$active ? 'var(--accent-color-orange)' : 'var(--text-color)'};
  background-color: ${props => props.$active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--accent-color-orange);
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &:hover::after {
    content: '${props => props.$tooltip}';
    position: absolute;
    left: 50px;
    background-color: rgba(22, 34, 56, 0.9);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
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
        <img src="/images/profile.jpg" alt="Willy Zuo" />
      </ProfileImage>
      
      <NavItems>
        <NavItem to="/" $active={isActive('/')} $tooltip="Home">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </NavItem>
        
        <NavItem to="/projects" $active={isActive('/projects')} $tooltip="Projects">
          <FontAwesomeIcon icon={faLaptopCode} size="lg" />
        </NavItem>
        
        <NavItem to="/photography" $active={isActive('/photography')} $tooltip="Photography">
          <FontAwesomeIcon icon={faCamera} size="lg" />
        </NavItem>
        
        <NavItem to="/guestbook" $active={isActive('/guestbook')} $tooltip="Guestbook">
          <FontAwesomeIcon icon={faComments} size="lg" />
        </NavItem>
        
        <NavItem to="/blog" $active={isActive('/blog')} $tooltip="Blog">
          <FontAwesomeIcon icon={faBlog} size="lg" />
        </NavItem>
        
        <NavItem to="/books" $active={isActive('/books')} $tooltip="Books">
          <FontAwesomeIcon icon={faBook} size="lg" />
        </NavItem>
      </NavItems>
    </SidebarContainer>
  );
};

export default Sidebar; 