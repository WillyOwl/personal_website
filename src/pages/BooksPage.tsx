import React, { useState } from 'react';
import styled from 'styled-components';

// Define book type
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  year: string;
  readDate: string;
  genre: string;
  notes?: string;
}

// Define category type
interface Category {
  id: string;
  name: string;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
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

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  background-color: ${props => props.$active ? 'rgba(66, 133, 244, 0.2)' : 'rgba(22, 34, 56, 0.7)'};
  color: ${props => props.$active ? '#4285f4' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid ${props => props.$active ? '#4285f4' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$active ? 'rgba(66, 133, 244, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const BookCover = styled.div<{ $imageUrl: string }>`
  height: 280px;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const BookRating = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${props => props.$filled ? '#FFD700' : 'rgba(255, 255, 255, 0.3)'};
  margin: 0 2px;
`;

const BookInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BookTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: var(--text-color);
  line-height: 1.4;
`;

const BookAuthor = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

const BookMeta = styled.div`
  margin-top: auto;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`;

const BooksPage: React.FC = () => {
  // Sample categories
  const categories: Category[] = [
    { id: 'all', name: 'All Books' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'non-fiction', name: 'Non-Fiction' },
    { id: 'science', name: 'Science' },
    { id: 'philosophy', name: 'Philosophy' },
    { id: 'biography', name: 'Biography' },
    { id: 'self-help', name: 'Self-Help' }
  ];
  
  // Sample books data
  const booksData: Book[] = [
    {
      id: '1',
      title: 'One Golden Summer',
      author: 'Carley Fortune',
      cover: '/images/books/one_golden_summer.jpg',
      rating: 5,
      year: '2025',
      readDate: 'May 2025',
      genre: 'non-fiction',
      notes: ''
    },
    {
      id: '2',
      title: 'Normal People',
      author: 'Sally Rooney',
      cover: '/images/books/normal_people.jpg',
      rating: 5,
      year: '2018',
      readDate: 'August 2023',
      genre: 'non-fiction',
      notes: ''
    },
    
  ];
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter books based on active category
  const filteredBooks = activeCategory === 'all' 
    ? booksData 
    : booksData.filter(book => book.genre === activeCategory);
  
  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper>
        <HeaderSection>
          <PageTitle>
            My <span>Reading List</span>
          </PageTitle>
          <Subtitle>
            Books I've read, loved, and learned from.
          </Subtitle>
        </HeaderSection>
        
        <FilterSection>
          {categories.map(category => (
            <FilterButton 
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterSection>
        
        {filteredBooks.length > 0 ? (
          <BooksGrid>
            {filteredBooks.map(book => (
              <BookCard key={book.id}>
                <BookCover $imageUrl={book.cover}>
                  <BookRating>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} $filled={star <= book.rating}>★</Star>
                    ))}
                  </BookRating>
                </BookCover>
                <BookInfo>
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthor>{book.author}</BookAuthor>
                  <BookMeta>
                    <span>{book.year}</span>
                    <span>{book.readDate}</span>
                  </BookMeta>
                </BookInfo>
              </BookCard>
            ))}
          </BooksGrid>
        ) : (
          <NoResults>
            No books found in this category.
          </NoResults>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default BooksPage; 