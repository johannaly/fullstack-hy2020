import React from 'react'

const FilterNamesToShow = (props) => {
    const namesMatch = props.newFilter !== ""
    ? props.persons.filter(p => p.name.toUpperCase().startsWith(props.newFilter.toUpperCase()))
    : props.persons

        return (
            <div>
                <ul>
                    {namesMatch.map((person) =>
                        <p key={person.name}>{person.name} {person.number}</p>)
                    }
                </ul>
            </div>
        ) 
    }

export default FilterNamesToShow