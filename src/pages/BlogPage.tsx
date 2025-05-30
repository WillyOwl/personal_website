import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  date: string;
  introduction: string;
  content: string;
  quote?: string;
  quoteSource?: string;
}

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

const HeaderSection = styled.div`
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  
  span {
    color: #4285f4;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const BlogPostCard = styled(Link)`
  display: block;
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const BlogDate = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const BlogIntro = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.div`
  color: #4285f4;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
  
  &:hover:after {
    transform: translateX(3px);
  }
`;

// Export the blog posts data to be used in both BlogPage and BlogPostPage
export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'Summertime Sadness',
    date: 'September 2, 2024',
    introduction: 'Reflections on my golden summer in 2024.',
    content: 'It\'s time to reflect on my first two years of university life, encompassing the spectrum of emotions, from joy and excitement to sadness and regret.',
    quote: '"You cannot have youth and the knowledge of it at the same time."',
    quoteSource: 'Kahlil Gibran'
  },
  {
    id: '2',
    title: 'I think SLC is better than MVP\'s.',
    date: 'May 29, 2025',
    introduction: 'Simple, Lovable, Complete (SLC) products offer a compelling alternative to the traditional Minimum Viable Product (MVP) approach. This post examines why focusing on creating something users will love, even in its simplest form, can lead to better product outcomes and stronger user relationships than just meeting minimum requirements.',
    content: 'Full blog post content here about why SLC is better than MVPs. The key difference is focusing on making something people love rather than just something that works minimally.',
    quote: '"Build something simple that people love, rather than something minimal that people tolerate."',
    quoteSource: 'Jason Fried'
  },
  {
    id: '3',
    title: 'The power of incremental improvements',
    date: 'May 25, 2025',
    introduction: 'Small, consistent improvements compound over time to create remarkable results. In this post, I break down how the 1% better principle applies to personal development, career growth, and building successful products. Learn practical ways to implement incremental improvement systems in your daily routine.',
    content: 'Full blog post content here about incremental improvements and how they compound over time to create significant results.',
    quote: "\"Improving just 1% each day means you'll be 37 times better after a year. Small changes, consistently applied, yield extraordinary results.\"",
    quoteSource: 'James Clear'
  }
];

const BlogPage: React.FC = () => {
  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper>
        <HeaderSection>
          <PageTitle>
            My <span>Blog Posts</span>
          </PageTitle>
          <Subtitle>
            Thoughts, ideas, and stories worth sharing.
          </Subtitle>
        </HeaderSection>
        
        {blogPostsData.map((post) => (
          <React.Fragment key={post.id}>
            <BlogPostCard to={`/blog/${post.id}`}>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>{post.date}</BlogDate>
              <BlogIntro>{post.introduction}</BlogIntro>
              <ReadMoreLink>Read full post</ReadMoreLink>
            </BlogPostCard>
            <Divider />
          </React.Fragment>
        ))}
      </ContentWrapper>
    </PageContainer>
  );
};

export default BlogPage; 