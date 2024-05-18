// Importing necessary modules
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header'
import Loading from './Components/Loading'
import Search from './Components/Search'
import Quote from './Components/Quote'
import FullQuotePopup from './Components/FullQuotePopup'

// Main App component
function App() {
  // State variables
  const [quotes, setQuotes] = useState([]);
  const [searchTermCharacter, setSearchTermCharacter] = useState('');
  const [searchTermQuote, setSearchTermQuote] = useState('');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [loading, setLoading] = useState(true); // State to track if quotes are being fetched

  // Fetch quotes from API only once when component mounts
  useEffect(() => {
    if (!quotes.length) { // Only fetch quotes if the quotes state is empty
      fetchQuotes();
    }
  }, [quotes])

  // Function to fetch quotes from API
  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=24');
      setQuotes(response.data);
      setLoading(false); // Update loading state to indicate quotes fetching is complete
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setLoading(false); // Update loading state in case of error
    }
  };

  // Function to handle search term change for character
  const handleSearchChangeCharacter = (event) => {
    setSearchTermCharacter(event.target.value);
  };

  // Function to handle search term change for quote
  const handleSearchChangeQuote = (event) => {
    setSearchTermQuote(event.target.value);
  };


  // Filter quotes based on search term for character and quote
  const filteredQuotes = quotes.filter((quoteData) =>
    quoteData.character.toLowerCase().includes(searchTermCharacter.toLowerCase()) &&
    quoteData.quote.toLowerCase().includes(searchTermQuote.toLowerCase())
  );

  // Function to handle click on a quote to view full quote
  const handleViewFullQuote = (quoteData) => {
    setSelectedQuote(quoteData);
  };

  // Function to handle closing full quote view
  const handleCloseFullQuote = () => {
    setSelectedQuote(null);
  };

  // Function to share quote
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
      // Fallback for browsers that do not support Web Share API
      alert('You can share the quote by copying the text: ' + shareText);
    }
  };


  return (
    <div>
      {loading ? ( // Render loading screen if quotes are being fetched
        <Loading />
      ) : (

        <div style = {{textAlign: 'center', position: 'absolute', width: '100%', top: '20px',
        backgroundColor: 'white'}}>
          {/* Your existing JSX for rendering quotes */}

          <Header />
          <Search
            searchTermCharacter={searchTermCharacter}
            searchTermQuote={searchTermQuote}
            handleSearchChangeCharacter={handleSearchChangeCharacter}
            handleSearchChangeQuote={handleSearchChangeQuote}
          />

          {/* Displaying Character Image, Quotes & Character Name */}

          <div className='quotes-container'>
            {filteredQuotes.length === 0 && (
              <div style = {{textAlign: 'center'}} className='no-results'>
                Oops! Search not found!
              </div>
            )}

            {filteredQuotes.map((quoteData, index) => (
              <Quote
                key={index}
                quoteData={quoteData}
                handleViewFullQuote={handleViewFullQuote}
                handleShareQuote={handleShareQuote}
              />

            ))}
          </div>

          {/* Modal for displaying full quote */}
          {selectedQuote && (
            <FullQuotePopup
              selectedQuote={selectedQuote}
              handleCloseFullQuote={handleCloseFullQuote}
            />
          )}

        </div>
      )}
    </div>
  )
}

export default App;