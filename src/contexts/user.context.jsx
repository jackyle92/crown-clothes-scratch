import {createContext, useEffect, useState} from 'react';

import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.utils.jsx'
// define the conext to use in another component
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// define UserProvider that wraps the app (main.jsx) so that any elements inside the App can use the userContext
// we will the useState() method to allow component re-render when state changes.
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}