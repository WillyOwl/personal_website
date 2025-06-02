import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  date: string;
  introduction: string;
  content: string[];
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
    content: [
      'It\'s time to reflect on my first two years of university life, encompassing the spectrum of emotions, from joy and excitement to sadness and regret.',
      'I will tell you the people I met and myriad warm moments are the most invaluable treasures I gained in the past two years when recollecting my journey from 20 to 22. Being hopeless and helpless when I came to Macao for study because I was just nobody from a small town. Lack of confidence made you upset about making friends who were better, thinking that you would be pushed out. The mere thought of making a request was daunting, even terrifying. But I feel lucky to have some nice guys - Mike, Justin, etc. Gradually, you got recognized by others for doing something that is seemingly normal in your view but important for someone with willingness, like a calculus tutorial. I think you may get to know others by situations like this in most cases, which are trivial but also startups for many relationships. You just run across someone in an unexpected way.',
      'I would like to illustrate more about friends and my life for these two years. I will not tell that I am gonna be with someone, my best friends, forever. However, in my 20 and 21, I had no doubt on this because I always believed we would gonna be like this. Things always change. I know it sounds like bad and miserable. The truth is that some friends can only temporarily accompany you on a journey, even they are those you always love. But they are treasures for me even we are strangers in the future like what we used to be before meeting each other. I will always keep them in mind. Some goodbyes and separations do not need reasons. They just happen for no reason. That\'s ok because we are just not always on our ways. It\'s enough that you have been honest and true to each other.',
      '"When the summer ends and you go back to your life." Summer symbolizes a lot of things. You can take it as the beginning or the reconnection of a relationship. Try to think of what\'s gonna happen when summer ends. Friends say bye-bye to each other and go back to their lives respectively. We always have expectations for our next meeting. Unfortunately, we also prepare for the worst that we may never meet again and try to strengthen ourselves, mentally, against these negative feelings so that they cannot readily destroy us. Separation is inevitable. The only thing we can prepare for it is to try to make it best. I met a friend in summer and we also said goodbye in summer. The farewell talk is the same as the usual, in a cafe bar, and it ended in a peaceful silence, no crying. Our time together was a symphony of resilience and strength and I will cherish memories we have woven together, permanently.',
      'Most importantly, I need to talk about my family, which is the most crucial part of this sadness. For me, I don\'t think it brings me the explicit sadness but implicit one instead. It\'s a kind of feeling I\'m always hiding externally but cannot be ignored internally. I\'m grateful for what they have done and sacrificed for me, financially, emotionally and spiritually, which allows me to be what I am today. Never have I imagined to come to Canada to continue my study, however, it comes into reality with their unconditional support. The emotions that parents have for their kids who will be going abroad like me are contradictory. They are proud of you because you are able to get an opportunity to study abroad, which is difficult even if they can support you financially since you may encounter countless challenges in the process and resolve them. But they are emotional simultaneously, especially mom, who raise you up for most families, when you are really leaving and waving your hands to say goodbye at the security check gate. It is the place where they can only have the last glimpse of you. It\'s never easy as just buying a plane ticket, carrying your luggage and coming to a brand new country. I have been appreciative for their full dedication in the past 21 years, which cannot be summarized by "raising me up".',
      'Summer is synonymous with joy and carefree moments but can also bring about a sense of wistfulness. In the midst of summer\'s vibrancy, there can be a quiet ache - a yearning for something undefined, which I would like to take it as regrets - your unspoken words to someone you like, a perfect goodbye to friends, etc. The ache can be a sense of disconnection, or a nostalgia that slipped away quickly before you know. The season\'s brightness and energy cast shadows on hidden sorrow, amplifying the sense of isolation of people who will start a new life after summer. Summertime sadness, like a storm, cleans your soul and waters the seeds of growth. It reminds us of the depth of our emotions, encouraging us to embrace all facets of our being.',
      'I will allow myself to feel the weight of this feeling, and get refreshed and enriched in the gentle embrace of summer\'s twilight.',
      'Summer will come around again. People you should meet will meet again.'
    ],
    quote: '"You cannot have youth and the knowledge of it at the same time."',
    quoteSource: 'Kahlil Gibran'

  },
  {
    id: '2',
    title: 'Adult',
    date: 'April 26, 2025',
    introduction: 'What do you feel like being an adult?',
    content: [
      'It strikes me that we often say goodbye without any particular reason as we grow up. Friendship isn\'t like a movie with a clear ending to signal that it\'s over. Instead, it fades quietly, slipping away with time—without arguments, farewells, or dramatic turns. One day, you simply realize the connection has withered before you are able to do something to save it. We\'ve become strangers online who occasionally liking each other\'s posts, but nothing more.',
      'Somehow, our connection is diluted and the bond between us is about to break. We naturally go no contact from endless talking like we used to do. Unfortunately, we don\'t mess up the friendship but ignoring the other in sync. We all know that something is lost, however, we can\'t make up but feeling helpless.',
      'I feel like I\'m mentally older and fatigued despite I\'m physically being a stage where probably is the best time of my life. The reason is that I realize I am losing the courage and patience to explain everything. Compared with teenage time, we\'re more complex. When we were young, friendships often felt fragile and shaken by misunderstandings or small conflicts, but we were always able to be reconciled again through talking and resolving the disagreements, which were our ability to come back together after it. This competency is being wiped away quietly as we grow older and replaced by more sophistication we have to face in the process of being in a relationship with people we meet. As a way of self-relaxation we choose to be silent and let it go when it comes to a case where we think it is supposed to stop here.',
      'Don\'t be mean about this or blame it on one of you since it\'s literally not on us. If you have to find something to be the fault, it should be life itself. The very fact that makes it happen is that life becomes our burden, wearing us down and leaving us weary. So that\'s why relaxation is mentioned above because we\'re already tired of life so much. As an alternation, we let it vanish from our lives like a twilight without harsh words, or reconciliation but only a slow drift into silence as the archive of this story. We learned that not every friendship we have is worthwhile for us to maintain and keep it going.',
      'For me true friendship is less about grand gestures and more about staying when it\'s easier to leave since leaving never needs a reason. So if someone is willing to stay by your side it would be precious. However, more staying does not necessarily mean forever. Some will stay away from you, and be out of your mind someday. It\'s just like receiving a beautifully styled postcard from a friend you haven\'t seen for a long time - someone a thousand miles away. It says, \'Hope we can meet again next time\' — a seemingly perfect excuse to keep the connection alive. The truth is, your lives have drifted onto different tracks, and you\'ve grown soberly aware of what remains of your friendship. As a result, you won\'t come to meet them and neither won\'t they.',
      'So I hope we don\'t unreasonably expect to have an everlasting relationship but we can always hope so. The future is dangling and full of instability. Instead of constantly overthinking and being anxious about it, try not to stress as much, just live in the moment, sit in the sun, enjoy every conversation, and embrace all the emotions you and your friends have. These are precious moments that prove you are LIVING!',
      'The greatest regret for human beings is that ones are unable to gain both their youth and their sensations to the youth. The reason is simple - the hysteresis of sensation. When you are an adolescent, you enjoy it. You enjoy every moment spending with people you care about. No time for you to really feel it since you are still immersing in it.',
      'When you feel like you lose the energy someday, you may begin to realize that your youth is quietly slipping away, as gently as a flowing river. In reflection, you start to contemplate a series of questions: What have you obtained over the past 20-25 years? What are your favorite memories, and why do they stand out? What good and bad experiences have shaped you? You start to feel everything came to your life before in the process of resolving these questions.',
      'Please remember one thing for all my friends: some friendships are mean to teach us something, help us grow, or be part of a specific phase in our life. It came out when we were depressed, helping us come over the darkest days. Once that phase passes, they will end or transform. The only thing we are able to do is always being grateful and let it go. But the friends that stay please treasure because if a friendship can get through ups and downs and stay just as strong, it can get through anything.',
    ],
    quote: '"As a child I assumed that when I reached adulthood, I would have grown-up thoughts."',
    quoteSource: 'David Sedaris'
  },
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