import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const totalPopulation = cart.reduce((total, pop) => total + pop.population, 0)
    return (
        <div>
            <h1 className="title">Coutry Added: {cart.length}</h1>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;