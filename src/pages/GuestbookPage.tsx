import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/guestbook-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-color);
  
  span {
    color: #4CAF50;
  }
`;

const GuestbookForm = styled.div`
  background-color: rgba(22, 34, 56, 0.8);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  float: right;
  
  &:hover {
    background-color: #3367d6;
  }
`;

const EntriesSection = styled.div`
  margin-top: 4rem;
`;

const EntriesTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const EmptyEntries = styled.div`
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

const GuestbookPage: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented later
    console.log('Form submitted:', { name, feedback });
    
    // Reset form
    setName('');
    setFeedback('');
  };

  return (
    <PageContainer>
      <BackgroundOverlay />
      <ContentWrapper>
        <PageTitle>
          Sign the <span>Guestbook.</span>
        </PageTitle>
        
        <GuestbookForm>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea 
                id="feedback" 
                placeholder="Share your thoughts..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Sign the Book</SubmitButton>
          </form>
        </GuestbookForm>
        
        <EntriesSection>
          <EntriesTitle>Recent Entries</EntriesTitle>
          <EmptyEntries>
            No entries yet. Be the first to sign the guestbook!
          </EmptyEntries>
        </EntriesSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default GuestbookPage; 