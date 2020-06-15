import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            Filter shown with <input
                onChange = {props.handleFilterChange}
            />
        </div>
    )
}

export default SearchForm