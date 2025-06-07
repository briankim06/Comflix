import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search icon" />
                <input 
                    type="text" 
                    placeholder="Search through 10,000+ movies and TV shows"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    )
    
}

export default Search;