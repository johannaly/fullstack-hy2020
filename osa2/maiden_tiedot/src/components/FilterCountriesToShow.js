import React from 'react'



const countryDetails = (namesToShow) => {
    return (
        <div>
            <h1>{namesToShow[0].name}</h1>
            <p>Capital {namesToShow[0].capital}</p>
            <p>Population {namesToShow[0].population}</p>

            <h2>Languages</h2>
            <ul>
                {namesToShow[0].languages.map((l) =>
                <li key={l.name}>{l.name}</li>
                )}
            </ul>
            <p>
                <img src = {namesToShow[0].flag} alt = "maan lippu" width = "300" height= "auto"></img>
            </p>
        </div>
    )
}


const FilterCountriesToShow = (props) => {
    if (props.newFilter === "") {
      return (null)
    } else {
      const namesToShow = props.countries.filter(c => c.name.toUpperCase().startsWith(props.newFilter.toUpperCase()))
  
      if (namesToShow.length === 1) {
          return (
              countryDetails(namesToShow))
          
      } else if (namesToShow.length > 10) {
        return (
          <div>
            Too many matches, specify another filter
          </div>
        )
      }
  
      return (
        <div>
          <ul>
            {namesToShow.map((country) =>
              <p key={country.name}>{country.name}
                <button value = {country.name} onClick = {props.handleClick}>Show</button>
              </p>)}
          </ul>
        </div>
      )
    }
  }

  export default FilterCountriesToShow