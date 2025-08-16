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
           
              <ProjectTitle>Local Privatized Large Model Dialogue</ProjectTitle>
              <ProjectDescription>
                <p>
                This project is a robust private offline dialogue system designed for local deployment of quantized Large Language Models using llama-cpp-python. The system enables users to run powerful AI conversations entirely on their own hardware without requiring external API dependencies or cloud services. It features advanced streaming text generation with real-time response display, intelligent content filtering to maintain conversation quality, and comprehensive error handling with automatic fallback mechanisms to ensure reliable operation.
                </p>
                <p>
                The system implements a sophisticated dual-method streaming approach that combines llama-cpp-python's native streaming API with a custom token-by-token generation fallback. It supports ChatML conversation formatting with proper system prompts and dialogue history management, while incorporating memory-efficient context handling that automatically truncates conversation history to stay within model limits. The architecture includes robust content filtering specifically designed to prevent generation of irrelevant or off-topic content, particularly useful when working with multilingual models.
                </p>
                <p>
                The tech stack consists of Python for core development, llama-cpp-python for model inference and GPU acceleration, and support for GGUF quantized models from popular families including Qwen, LLaMA, Mistral, and OpenChat. The system offers flexible configuration options for temperature control, context size adjustment, and GPU layer offloading. This privacy-first approach ensures complete data sovereignty while delivering sophisticated AI assistance capabilities.
                </p>
              </ProjectDescription>
              <ProjectButton href="https://github.com/WillyOwl/Local_LLM" target="_blank" rel="noopener noreferrer">
                View Github <span>→</span>
              </ProjectButton>
            </ProjectHeader>
          </ProjectCard>

        </ProjectsGrid>
      </PageContent>

      <PageContent>
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

      <PageContent>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectHeader>
           
              <ProjectTitle>Photography Composition Assistant</ProjectTitle>
              <ProjectDescription>
                <p>
                An advanced AI-powered photography composition assistant that leverages cutting-edge computer vision, machine learning, and real-time image processing to help photographers improve their composition skills. The system combines traditional computer vision techniques with modern Vision Transformers and CNNs to provide comprehensive composition analysis and actionable suggestions.
                </p>
                <p>
                The platform features real-time composition analysis with sub-200ms inference times, multi-rule detection including rule of thirds, leading lines, symmetry, depth layering, and color harmony analysis. Built with a hybrid CNN-ViT architecture using ResNet50 backbone with Vision Transformer integration, the system achieves professional-grade analysis while maintaining optimal performance through model quantization and GPU acceleration.
                </p>
                <p>
                The tech stack includes Python for backend development, OpenCV and PyTorch for computer vision and deep learning, FastAPI for high-performance API services, and a responsive web interface with real-time visualization. The system supports cross-platform deployment with Docker containerization and includes comprehensive preprocessing pipelines, feature detection engines, and intelligent suggestion generation algorithms.
                </p>

              </ProjectDescription>
              <ProjectButton href="/composition-assistant" target="_blank" rel="noopener noreferrer">
                View Project <span>→</span>
              </ProjectButton>
            </ProjectHeader>
          </ProjectCard>

        </ProjectsGrid>
      </PageContent>
    </PageContainer>
  );
};

export default ProjectsPage; 