const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const fetch = require('node-fetch');

    module.exports = async (req, res) => {
      const newsApiKey = process.env.NEWS_API_KEY; // Use your NewsAPI key
      const url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${newsApiKey}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        if (data.articles) {
          res.status(200).json({ articles: data.articles });
        } else {
          res.status(500).json({ error: 'Failed to fetch news' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
      }
    };
      const url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${newsApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.articles) {
      res.status(200).json({ articles: data.articles });
    } else {
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
};
