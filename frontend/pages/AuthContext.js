import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import { getApiUrl } from "../utils";


export  const AuthContext = React.createContext(); 

export const AuthProvider = props => {


    const [user, setUser] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async()=> {
                try {
                    const response = await fetch(getApiUrl('/api/user'), {
                        credentials: 'include',
                    });
                    const content = await response.json();
                    setUser(content)
                    setAuth(true);
                    // console.log(content);
                } catch (error) {
                    setUser("non connecté");
                    setAuth(false);
                }
                
            }
        )();
    },[]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthProvider


