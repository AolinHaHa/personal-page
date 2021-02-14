import { createContext, useContext, useState} from 'react';

export const UserContext = createContext({
    isDefaultUser: true,
    name:'mockUser'
});

export const UserContextProvider = ({user: inComingUser, children}) => {
    const [user, setUser] = useState(inComingUser);
    
    return (
        <UserContext.Provider value={...user}>{children}</UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);