import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 mb3'>
            <input className='pa3' type='search' onChange={searchChange} placeholder='Search Borrowers'/>
        </div>
    );
}

export default SearchBox;