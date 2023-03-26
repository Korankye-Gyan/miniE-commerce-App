import { createContext , useState } from "react";

export const ShopContext = createContext("")

export function ShopContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    console.log(isLoggedIn);
    function handleIsLoggedIn(){
      setIsLoggedIn(false)
    }

    const contextValue = {
        isLoggedIn,
        handleIsLoggedIn
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}