import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the type for a guestbook entry
interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
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
  backdrop-filter: blur(5px);
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
  margin-bottom: 4rem;
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
  backdrop-filter: blur(5px);
`;

const EntryCard = styled.div`
  background-color: rgba(22, 34, 56, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  backdrop-filter: blur(5px);
`;

const EntryName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const EntryDate = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const EntryText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const SuccessMessage = styled.div`
  background-color: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  transition: opacity 0.3s ease;
`;

const AdminControls = styled.div`
  background-color: rgba(231, 76, 60, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 2px solid #c0392b;
`;

const AdminTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
`;

const AdminButton = styled.button`
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  
  &:hover {
    background-color: #962d22;
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${EntryCard}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: #c0392b;
  }
`;

const AdminTriggerArea = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const AdminTriggerText = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  font-style: italic;
`;

const GuestbookPage: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem('guestbookEntries');
    if (storedEntries) {
      try {
        setEntries(JSON.parse(storedEntries));
      } catch (error) {
        console.error('Error parsing stored entries:', error);
        // Reset if there's an error
        localStorage.removeItem('guestbookEntries');
      }
    }
    
    // Check if admin mode is enabled
    const adminMode = localStorage.getItem('guestbookAdminMode');
    if (adminMode === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const addEntry = (newEntry: GuestbookEntry) => {
    // Add the new entry to the beginning of the array
    const updatedEntries = [newEntry, ...entries];
    
    // Keep only the 10 most recent entries
    const recentEntries = updatedEntries.slice(0, 10);
    
    // Update state
    setEntries(recentEntries);
    
    // Save to localStorage
    localStorage.setItem('guestbookEntries', JSON.stringify(recentEntries));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new entry
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: feedback.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };
    
    // Add the entry
    addEntry(newEntry);
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    
    // Reset form
    setName('');
    setFeedback('');
  };

  const formatDate = (dateString: string) => {
    return dateString;
  };
  
  const toggleAdminMode = () => {
    const newAdminState = !isAdmin;
    setIsAdmin(newAdminState);
    localStorage.setItem('guestbookAdminMode', newAdminState.toString());
  };

  const handleAdminTriggerClick = () => {
    setAdminClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= 3) {
        toggleAdminMode();
        return 0;
      }
      return newCount;
    });
  };
  
  const clearAllEntries = () => {
    if (window.confirm('Are you sure you want to delete all guestbook entries? This cannot be undone.')) {
      setEntries([]);
      localStorage.removeItem('guestbookEntries');
    }
  };
  
  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries));
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
            
            {showSuccess && (
              <div style={{ clear: 'both' }}>
                <SuccessMessage>
                  Thank you for signing the guestbook!
                </SuccessMessage>
              </div>
            )}
          </form>
        </GuestbookForm>
        
        <EntriesSection>
          <EntriesTitle>Recent Entries</EntriesTitle>
          
          {entries.length === 0 ? (
            <EmptyEntries>
              No entries yet. Be the first to sign the guestbook!
            </EmptyEntries>
          ) : (
            entries.map((entry) => (
              <EntryCard key={entry.id}>
                <EntryName>{entry.name}</EntryName>
                <EntryDate>{formatDate(entry.date)}</EntryDate>
                <EntryText>{entry.message}</EntryText>
                {isAdmin && (
                  <DeleteButton onClick={() => deleteEntry(entry.id)}>
                    Delete
                  </DeleteButton>
                )}
              </EntryCard>
            ))
          )}
        </EntriesSection>
        
        {/* Admin trigger area - click 3 times to toggle admin mode */}
        <AdminTriggerArea onClick={handleAdminTriggerClick}>
          <AdminTriggerText>
            {isAdmin ? "Administrator mode is active" : "Website owner access"}
          </AdminTriggerText>
        </AdminTriggerArea>
        
        {/* Admin controls panel */}
        {isAdmin && (
          <AdminControls>
            <AdminTitle>Administrator Controls</AdminTitle>
            <div>
              <AdminButton onClick={clearAllEntries}>
                Clear All Entries
              </AdminButton>
              <AdminButton onClick={toggleAdminMode}>
                Exit Admin Mode
              </AdminButton>
            </div>
          </AdminControls>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default GuestbookPage; 