import React, { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import FilterNamesToShow from './components/FilterNamesToShow'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

    
const App = () => {
    
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const[newFilter, setNewFilter] = useState("")
    const [alertMessage, setAlertMessage] = useState(null)

    useEffect(() => {
        personService
        .getAll()
        .then(persons => {
            setPersons(persons)
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
        
        if (persons.map(p=> p.name).includes(newName)) {
            const personData = persons.filter(p => p.name === newName)
            const personId = personData[0].id.toString()
           // const testFind = (p) => p.id.toString() === personId 
            const personIndex = persons.findIndex((p) => p.id.toString() === personId )
            if(personData[0].number !== newNumber){  
                window.confirm(`${newName} is already added to phonebook, replace
                the old number with a new one?`)
                personService
                    .updateNumber(personId, personObject)
                    .then (person => {
                           const newPersons = [...persons]
                           newPersons[personIndex] = personObject
                           setPersons(newPersons)      
                    })
                setAlertMessage(`Number changed for ${newName}`)
                setTimeout(() => {
                    setAlertMessage(null)
                }, 3000)
           } else {
               window.alert(`${newName} is already added to phonebook`)
           }
        
        } else {
            personService
                .create(personObject)
                .then(person => {
                    setPersons(persons.concat(person))
                })
            setAlertMessage(`Added ${newName}`)
            setTimeout(() => {
                setAlertMessage(null)
            }, 3000)
        }
        
        setNewName('')
        setNewNumber('')
    }

    const deleteOnePerson = (event) => {
       
        if (window.confirm(`Delete ${event.target.value}?`)) {
            const personId = event.target.id.toString()
            personService
                .deletePerson(event.target.id)
                .then (data => {
                    setPersons(persons.filter(p => p.id.toString() !== personId))
                })

            setAlertMessage(`Deleted ${event.target.value}`)
            setTimeout(() => {
                setAlertMessage(null)
            }, 3000)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message = {alertMessage} />
            <SearchForm handleFilterChange = {handleFilterChange} />

            <h2>Add a new</h2>
            <PersonForm addName = {addName} newName = {newName} newNumber = {newNumber}
                handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}
            />
            
            <h2>Numbers</h2>
            <FilterNamesToShow persons = {persons} newFilter = {newFilter} deleteOnePerson = {deleteOnePerson} />
        </div>
    )
}

export default App