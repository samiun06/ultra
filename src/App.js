import './App.css';
import React, { useEffect, useState } from 'react'
import Country from './Components/Country';
import Cart from './Components/Cart';

function App() {
  const [countries, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(error => console.log(error))
  }, [])
  
  const handleCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart);
  }


  return (
    <div>
        <Cart cart={cart}></Cart>
      <div className="countries">
      {
        countries.map(country => <Country country={country} key={country.numericCode} AddCountry={handleCountry}></Country>)
        
      }
      </div>
    </div>
  );
}



export default App;
