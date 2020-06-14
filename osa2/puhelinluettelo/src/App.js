import React, { useState } from 'react'
import './App.css'

const Filter = (props) => {
    const namesMatch = props.newFilter !== ""
    ? props.persons.filter(p => p.name.startsWith(props.newFilter))
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
    
const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: "040-1234455" },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const names = persons.map(p => p.name)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const[newFilter, setNewFilter] = useState("")
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }
    
    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        
        if (names.includes(newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with <input
                onChange = {handleFilterChange}
                />
            </div>

            <h2>Add a new</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value = {newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input value = {newNumber}
                    onChange = {handleNumberChange}
                    />
                </div>

                <div>
                    <button type="submit">add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <div>
                <Filter persons = {persons} newFilter = {newFilter} />
            </div>
            
        </div>
        )
}

export default App