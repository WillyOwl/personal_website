import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const PageContent = styled.div`
  background-color: rgba(22, 34, 56, 0.5);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ProjectsPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <PageContent>
        <p>This page is under construction. Check back soon for my projects!</p>
      </PageContent>
    </PageContainer>
  );
};

export default ProjectsPage; 