import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './components/SearchForm'
import FilterCountriesToShow from './components/FilterCountriesToShow'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState("")
  
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleClick = (event) => {
    //event.preventDefault()
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <SearchForm handleFilterChange={handleFilterChange} />
      <FilterCountriesToShow newFilter={newFilter} countries={countries}
        handleClick={handleClick}/>

    </div>
  )
}

export default App;
