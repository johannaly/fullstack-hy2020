import React from 'react'
import CountryDetails from '../components/CountryDetails'


const FilterCountriesToShow = (props) => {
  if (props.newFilter === "") {
    return (null)
  } else {
    const namesToShow = props.countries.filter(c => c.name.toUpperCase().startsWith(props.newFilter.toUpperCase()))

    if (namesToShow.length === 1) {
      return (
        <div><CountryDetails namesToShow={namesToShow} />
        </div>

      )
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
              <button value={country.name} onClick={props.handleClick}>Show</button>
            </p>)}
        </ul>
      </div>
    )
  }
}

export default FilterCountriesToShow