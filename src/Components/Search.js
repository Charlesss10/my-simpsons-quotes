
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function Search({ searchTermCharacter, searchTermQuote, handleSearchChangeCharacter, handleSearchChangeQuote }) {
    return (
        <div style={{ justifyContent: 'center' }}> {/* Container for search inputs */}
            <div>
                <div>
                    <input
                        type="text"
                        value={searchTermCharacter}
                        onChange={handleSearchChangeCharacter}
                        placeholder="Filter by Character"
                        style={{
                            border: 'none', outline: 'none', borderRadius: '20px', padding: '10px', textAlign: 'center',
                            fontSize: '13px', width: '50%', maxWidth: '300px', backgroundColor: '#F5F5F5', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px'
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faFilter}
                        style={{
                            marginLeft: '10px',
                            color: '#888'
                        }}
                    />
                </div>


                <div>
                    <input
                        type="text"
                        value={searchTermQuote}
                        onChange={handleSearchChangeQuote}
                        placeholder="Filter by Quote"
                        style={{
                            border: 'none', outline: 'none', borderRadius: '20px', padding: '10px', textAlign: 'center',
                            fontSize: '13px', width: '50%', maxWidth: '300px', backgroundColor: '#F5F5F5', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faFilter}
                        style={{
                            marginLeft: '10px',
                            color: '#888'
                        }}
                    />
                </div>
            </div>
        </div>

    )

}

export default Search;