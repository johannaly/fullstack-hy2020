import React, { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import FilterNamesToShow from './components/FilterNamesToShow'
import PersonForm from './components/PersonForm'
import axios from 'axios'

    
const App = () => {
    
    const [persons, setPersons] = useState([])
    const names = persons.map(p => p.name)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const[newFilter, setNewFilter] = useState("")

    useEffect(() => {
        axios 
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])
    
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
            <SearchForm handleFilterChange = {handleFilterChange} />

            <h2>Add a new</h2>
            <PersonForm addName = {addName} newName = {newName} newNumber = {newNumber}
                handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}
            />
            
            <h2>Numbers</h2>
            <FilterNamesToShow persons = {persons} newFilter = {newFilter} />
        </div>
    )
}

export default App