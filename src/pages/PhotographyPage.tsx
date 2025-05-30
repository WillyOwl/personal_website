import React, { useState } from 'react';
import styled from 'styled-components';

// Define photo type
interface Photo {
  id: string;
  title: string;
  image: string;
  year: string;
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

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

const PhotoCard = styled.div`
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

const PhotoImage = styled.div<{ $imageUrl: string }>`
  height: 250px;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const PhotoInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PhotoTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: var(--text-color);
  line-height: 1.4;
`;

const PhotoNotes = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  flex-grow: 1;
`;

const PhotoMeta = styled.div`
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

const PhotographyPage: React.FC = () => {
  // Sample categories
  const categories: Category[] = [
    { id: 'all', name: 'All Photos' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'street', name: 'Street' },
    { id: 'travel', name: 'Travel' },
    { id: 'nature', name: 'Nature' },
    { id: 'architecture', name: 'Architecture' }
  ];
  
  // Sample photos data
  const photosData: Photo[] = [
    {
      id: '1',
      title: 'Sunset at the Beach',
      image: '/images/photography/sunset.jpg',
      year: '2023',
      genre: 'landscape',
      notes: 'Captured during a summer evening in California.'
    },
    {
      id: '2',
      title: 'City Lights',
      image: '/images/photography/city.jpg',
      year: '2022',
      genre: 'architecture',
      notes: 'Downtown skyline at night with long exposure.'
    },
    {
      id: '3',
      title: 'Mountain Range',
      image: '/images/photography/mountain.jpg',
      year: '2023',
      genre: 'landscape',
      notes: 'Hiking trip to the Rockies.'
    },
    {
      id: '4',
      title: 'Street Market',
      image: '/images/photography/market.jpg',
      year: '2022',
      genre: 'street',
      notes: 'Local vendors at a weekend market.'
    },
    {
      id: '5',
      title: 'Wildlife',
      image: '/images/photography/wildlife.jpg',
      year: '2021',
      genre: 'nature',
      notes: 'Bird watching at the national park.'
    },
    {
      id: '6',
      title: 'Historic Building',
      image: '/images/photography/building.jpg',
      year: '2021',
      genre: 'architecture',
      notes: 'Gothic architecture from the 18th century.'
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter photos based on active category
  const filteredPhotos = activeCategory === 'all' 
    ? photosData 
    : photosData.filter(photo => photo.genre === activeCategory);
  
  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper>
        <HeaderSection>
          <PageTitle>
            My <span>Photography</span>
          </PageTitle>
          <Subtitle>
            Capturing moments and memories through my lens.
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
        
        {filteredPhotos.length > 0 ? (
          <PhotosGrid>
            {filteredPhotos.map(photo => (
              <PhotoCard key={photo.id}>
                <PhotoImage $imageUrl={photo.image} />
                <PhotoInfo>
                  <PhotoTitle>{photo.title}</PhotoTitle>
                  <PhotoNotes>{photo.notes}</PhotoNotes>
                  <PhotoMeta>
                    <span>{photo.year}</span>
                    <span>{photo.genre}</span>
                  </PhotoMeta>
                </PhotoInfo>
              </PhotoCard>
            ))}
          </PhotosGrid>
        ) : (
          <NoResults>
            No photos found in this category.
          </NoResults>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default PhotographyPage; 