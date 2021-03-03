import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag } = props.country;

    return (
        <div className="country">
            <img src={flag} alt="" className="flag"/>
            <h1>{name}</h1>
            <h4>Captal: {capital}</h4>
            <p>Population: {population}</p>
            <button onClick={() => props.AddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;