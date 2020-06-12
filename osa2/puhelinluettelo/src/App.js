import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')


    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }


    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
        }

        const names = persons.map(p => p.name)
        if (names.includes(newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
        }
        setNewName('')
    }


    return (
        <div>
            <h2>Phonebook</h2>

            <form onSubmit={addName}>
                <div>
                    name: <input value={newName}
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <button type="submit">add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <div>
                <ul>
                    {persons.map((person, i) =>
                        <p key={person.name}>{person.name}</p>)
                    }
                </ul>
            </div>
        </div>
    )

}

export default App