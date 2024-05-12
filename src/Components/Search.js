
function Search({searchTermCharacter, searchTermQuote, handleSearchChangeCharacter, handleSearchChangeQuote}) {

    return (
            <div style={{marginTop: '200px', marginBottom: '50px', display: 'flex', justifyContent: 'center' }}> {/* Container for search inputs */}
                <div style={{marginRight: '50px'}}> {/*Container for character search*/}
                    <input
                        type="text"
                        value={searchTermCharacter}
                        onChange={handleSearchChangeCharacter}
                        placeholder="Search by Character"
                        style={{
                            border: 'none', outline: 'none', borderRadius: '20px', padding: '10px', textAlign: 'center',
                            fontSize: '13px', width: '100%', maxWidth: '300px', backgroundColor: '#F5F5F5', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
                <div> {/* Container for quote search */}
                    <input
                        type="text"
                        value={searchTermQuote}
                        onChange={handleSearchChangeQuote}
                        placeholder="Search by Quote"
                        style={{
                            border: 'none', outline: 'none', borderRadius: '20px', padding: '10px', textAlign: 'center',
                            fontSize: '13px', width: '100%', maxWidth: '300px', backgroundColor: '#F5F5F5', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>
        
    )

}

export default Search;