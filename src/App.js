import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [searchTermCharacter, setSearchTermCharacter] = useState('');
  const [searchTermQuote, setSearchTermQuote] = useState('');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quotes.length) {
      fetchQuotes();
    }
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=20');
      setQuotes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setLoading(false);
    }
  };

  const handleSearchChangeCharacter = (event) => {
    setSearchTermCharacter(event.target.value);
  };

  const handleSearchChangeQuote = (event) => {
    setSearchTermQuote(event.target.value);
  };

  const filteredQuotes = quotes.filter((quoteData) =>
    quoteData.character.toLowerCase().includes(searchTermCharacter.toLowerCase()) &&
    quoteData.quote.toLowerCase().includes(searchTermQuote.toLowerCase())
  );

  const handleViewFullQuote = (quoteData) => {
    setSelectedQuote(quoteData);
  };

  const handleCloseFullQuote = () => {
    setSelectedQuote(null);
  };

  const handleShareQuote = (quoteData) => {
    const shareText = `"${quoteData.quote}" - ${quoteData.character}`;
    if (navigator.share) {
      navigator.share({
        title: 'Simpsons Quote',
        text: shareText
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('You can share the quote by copying the text: ' + shareText);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text"></p>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">Simpsons Quotes</h1>
          <div className="search-bar">
            <input
              type="text"
              value={searchTermCharacter}
              onChange={handleSearchChangeCharacter}
              placeholder="Search by Character"
            />
          </div>
          <div className="search-bar">
            <input
              type="text"
              value={searchTermQuote}
              onChange={handleSearchChangeQuote}
              placeholder="Search by Quote"
            />
          </div>
          {filteredQuotes.length === 0 && (
            <div className="no-results">
              Oops! Search not found!
            </div>
          )}
          <div className="quotes-grid">
            {filteredQuotes.map((quoteData, index) => (
              <div key={index} className="quote-card">
                <p>{quoteData.character}</p>
                <img src={quoteData.image} alt={quoteData.character} />
                <div className="quote-text">
                  <p>{quoteData.quote.length > 50 ? quoteData.quote.slice(0, 40) + '...' : quoteData.quote}</p>
                  <div className="quote-buttons">
                    <Button onClick={() => handleViewFullQuote(quoteData)}>View Full Quote</Button>
                    <Button onClick={() => handleShareQuote(quoteData)} startIcon={<ShareIcon />} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedQuote && (
            <div className="modal">
              <div className="modal-content">
                <p>{selectedQuote.quote}</p>
                <p>{selectedQuote.character}</p>
                <Button onClick={handleCloseFullQuote}>Close</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
