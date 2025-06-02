import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { blogPostsData } from './BlogPage';
import { IoChevronBack } from 'react-icons/io5';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
  overflow-x: hidden;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.3;
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(15, 22, 36, 0.5), rgba(15, 22, 36, 0.8));
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: color 0.2s ease, background-color 0.2s ease;
  
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const BlogDate = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-bottom: 3rem;
`;

const QuoteBlock = styled.blockquote`
  background-color: rgba(22, 34, 56, 0.7);
  border-left: 4px solid #4285f4;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 0 8px 8px 0;
  backdrop-filter: blur(5px);
  position: relative;
`;

const QuoteSource = styled.cite`
  display: block;
  text-align: right;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
`;

const BlogContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 1.1rem;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 12px;
  margin-top: 2rem;
  
  h2 {
    color: var(--text-color);
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }
`;

const BlogPostPage: React.FC = () => {
  // Get the post ID from URL params
  const { postId } = useParams<{ postId: string }>();
  
  // Find the blog post with the matching ID
  const post = blogPostsData.find(post => post.id === postId);
  
  // If post not found, display a message
  if (!post) {
    return (
      <PageContainer>
        <BackgroundOverlay />
        <ContentWrapper>
          <BackButton to="/blog">
            <IoChevronBack />
            Back to Blog
          </BackButton>
          <NotFoundMessage>
            <h2>Blog Post Not Found</h2>
            <p>Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
            <BackButton to="/blog">
              Return to Blog
            </BackButton>
          </NotFoundMessage>
        </ContentWrapper>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper>
        <BackButton to="/blog">
          <IoChevronBack />
          Back to Blog
        </BackButton>
        
        <BlogTitle>{post.title}</BlogTitle>
        <BlogDate>{post.date}</BlogDate>
        
        {post.quote && (
          <QuoteBlock>
            {post.quote}
            {post.quoteSource && <QuoteSource>— {post.quoteSource}</QuoteSource>}
          </QuoteBlock>
        )}
        
        <BlogContent>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </BlogContent>
      </ContentWrapper>
    </PageContainer>
  );
};

export default BlogPostPage; 