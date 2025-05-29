import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color-orange);
    transform: translateY(-2px);
  }
`;

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  email = "example@example.com"
}) => {
  return (
    <SocialLinksContainer>
      <SocialLink href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
      
      <SocialLink href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      
      <SocialLink href={`mailto:${email}`} aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks; 