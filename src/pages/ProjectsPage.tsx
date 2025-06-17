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

const TitleHighlight = styled.span`
  color: #4CAF50;
`;

const PageContent = styled.div`
  margin-bottom: 4rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(22, 34, 56, 0.5);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectHeader = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const ProjectDescription = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  p {
    margin-bottom: 1.2rem;
  }
`;

const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background-color: rgba(76, 175, 80, 0.1);
  color: #4CAF50;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(76, 175, 80, 0.2);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const ProjectsPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>
        My <TitleHighlight>Projects</TitleHighlight>
      </PageTitle>
      
      <PageContent>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectHeader>
           
              <ProjectTitle>Single-Cycle CPU</ProjectTitle>
              <ProjectDescription>
                <p>
                  This project involved designing and implementing a simulator for a single-cycle CPU using the C programming language.
                </p>
                <p>
                  The simulator replicates key functionalities of MIPS processors, focusing on instruction execution and data handling.
                </p>
                <p>
                  It incorporates the principles of datapath and control signals, demonstrating how data flows through CPU components and how control signals coordinate operations.
                </p>
                <p>
                  By leveraging bitwise operations, the simulator accurately emulates the logical and arithmetic processes of a real CPU,
                  offering a realistic representation of hardware-level computations.
                </p>
              </ProjectDescription>
              <ProjectButton href="https://github.com/WillyOwl/SE230-231-Computer-Organization/tree/main/Lab/1st%20lab" target="_blank" rel="noopener noreferrer">
                View Github <span>→</span>
              </ProjectButton>
            </ProjectHeader>
          </ProjectCard>

        </ProjectsGrid>
      </PageContent>

      <PageContent>Add commentMore actions
        <ProjectsGrid>
          <ProjectCard>
            <ProjectHeader>
           
              <ProjectTitle>Slack Bot</ProjectTitle>
              <ProjectDescription>
                <p>
                This project involves the development of AipoBot, an agentic Slack assistant designed to respond to messages and perform tasks using external APIs. The bot integrates seamlessly with Slack, where it responds to direct messages and mentions in channels. It leverages GPT models from OpenAI to generate helpful responses, ensuring intelligent and context-aware interactions with users. Additionally, AipoBot can fetch real-time weather data for any location by utilizing the OpenWeatherMap API, providing users with up-to-date weather conditions.
                </p>
                <p>
                AipoBot operates on a modular architecture that includes several layers. The Slack Bot Layer is responsible for handling Slack events and messages, ensuring smooth communication between the bot and Slack users. The LLM Layer processes user input, leveraging powerful language models to generate appropriate and insightful responses. Finally, the Tool Layer integrates with external APIs, such as the weather API, to enable the bot to fulfill various user requests with relevant, real-time data.
                </p>
                <p>
                 The tech stack for this project consists of Python for backend development, LangChain and OpenAI for language model integration, Slack Bolt for Python to manage interactions within Slack, and OpenWeatherMap for weather data retrieval. The bot’s agentic capabilities enable it to analyze user intent and use the most appropriate tools to fulfill requests efficiently.
                </p>

              </ProjectDescription>
              <ProjectButton href="https://github.com/WillyOwl/Slack-Bot" target="_blank" rel="noopener noreferrer">
                View Github <span>→</span>
              </ProjectButton>
            </ProjectHeader>
          </ProjectCard>

        </ProjectsGrid>
      </PageContent>
    </PageContainer>
  );
};

export default ProjectsPage; 