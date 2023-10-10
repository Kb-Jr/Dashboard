import React, { useState, createContext, useContext} from 'react';

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setisClicked({...initialState, [clicked]:true});
    }
    const [screenSize, setscreenSize] = useState(undefined);
    return (
        <StateContext.Provider value={{activeMenu, setactiveMenu, isClicked,setisClicked, handleClick, screenSize, setscreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);