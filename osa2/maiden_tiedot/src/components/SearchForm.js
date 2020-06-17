import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            Find Countries 
            <input onChange={props.handleFilterChange}
            />
        </div>
    )
}

export default SearchForm