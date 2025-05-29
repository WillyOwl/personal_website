import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const HeroSection = styled.section`
  margin-bottom: 4rem;
  max-width: 60%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  span {
    &.name {
      color: var(--accent-color-orange);
    }
    
    &.stack {
      color: var(--accent-color-green);
    }
    
    &.love {
      color: var(--accent-color-pink);
    }
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  
  span {
    &.highlight {
      color: var(--accent-color-orange);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: rgba(22, 34, 56, 0.8);
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-color-orange);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-color-orange);
    transform: translateY(-2px);
  }
`;

const PlaylistSection = styled.a`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  text-decoration: none;
  display: block;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    position: static;
    margin-top: 2rem;
    width: 100%;
  }
`;

const PlaylistContent = styled.div`
  position: relative;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  aspect-ratio: 3/4;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
    z-index: 1;
  }
`;

const PlaylistTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  position: relative;
  z-index: 2;
`;

const PlaylistText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
`;

const AboutSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 4rem;
  max-width: 60%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>
          I'm <span className="name">Willy</span>. I'm 3rd-year <span className="stack">Computer Science</span> student at <span className="love">University of Alberta</span>.
        </Title>
        <SubTitle>
          Student, Photographer, Developer, Swiftie, <span className="highlight">Gamer</span> And <span className="highlight">Reader</span>.
          <br />
          I Play, Read, <span className="highlight">Write</span> And Travel For Fun.
        </SubTitle>
        
        <ActionButtons>
          <PrimaryButton to="/guestbook">Sign my guestbook</PrimaryButton>
          <SecondaryButton to="mailto:zuowilly@gmail.com">Send an private email →</SecondaryButton>
        </ActionButtons>
        
        <SocialLinks 
          githubUrl="https://github.com"
          linkedinUrl="https://linkedin.com"
          email="zuowilly@gmail.com"
        />
      </HeroSection>
      
      <AboutSection>
        <SectionTitle>About me</SectionTitle>
        <AboutText>
        Hi, I'm Willy. I am currently a 3rd-year undergrad student studying Honor Computer Science at the University of Alberta. 
        My interests lie in Machine Learning, Reinforcement Learning, and Software Development. 
        I am now working on a project about Robotics and Reinforcement Learning as a research assistant with professor Rupam Mahmood's team.
        </AboutText>
        <AboutText>
        I am always passionate about developing staffs to solve problems around me when I am free from academics. My hobbies include
        photography, reading, writing, watching soccer, and traveling — though I haven't had the chance to explore many places yet. As you can see in the
        different sections on this website, I have included some of my projects, photography, books I am reading and have read, and my thoughts on different
        topics, but mostly are my self-reflections on my life.
        </AboutText>
        <AboutText>
        I hope you enjoy your stay here!
        </AboutText>
      </AboutSection>
      
      <PlaylistSection 
        href="https://open.spotify.com/playlist/3Bb09BH70g8lvmyWFAA06z?si=88da25081eef4d2d" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <PlaylistContent style={{ backgroundImage: `url('/images/DSCF0099.JPG')` }}>
          <PlaylistTitle>Playlist.</PlaylistTitle>
          <PlaylistText>
            These are the songs I listen to regularly, depending on my mood.
          </PlaylistText>
        </PlaylistContent>
      </PlaylistSection>
    </HomeContainer>
  );
};

export default HomePage; 