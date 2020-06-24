import React from 'react'

const FilterNamesToShow = (props) => {
    const namesMatch = props.newFilter !== ""
    ? props.persons.filter(p => p.name.toUpperCase().startsWith(props.newFilter.toUpperCase()))
    : props.persons

        return (
            <div>
                <ul>
                    {namesMatch.map((person) =>
                        <p key={person.name}>{person.name} {person.number}
                            <button value = {person.name} id = {person.id} onClick = {props.deleteOnePerson}>Delete</button>
                        </p>)
                    }
                </ul>
            </div>
        ) 
    }

export default FilterNamesToShow