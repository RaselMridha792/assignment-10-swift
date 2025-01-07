import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './AuthContext';

export const CardContext = createContext();
const CardProvider = ({children}) => {
    const {user} = useContext(UserContext);
    const [cartItem, setCartItem] = useState([]);
    const [addItem, setAddItem] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/shopNow/carts/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setCartItem(data)
        })
    },[user, addItem])



    const cartInfo = {
        cartItem,
        setCartItem,
        addItem,
        setAddItem

    }

    return (
        <CardContext.Provider value={cartInfo}>
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;