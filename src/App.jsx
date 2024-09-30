import NewsCard from './components/NewsCard';
import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1 className="header">Random News Feed</h1>
      <div className="feed">
          {stories.map((a, index) => (
            <NewsCard
              key={index}
              title={a.title}
              link={a.link}
              author={a.creator ? a.creator.join(', ') : 'Unknown'} // Fixed typo in 'creator'
              content={a.description}
              image={a.image_url || 'https://via.placeholder.com/150'}
            />
          ))}
      </div>
    </div>
  );
}

export default App;