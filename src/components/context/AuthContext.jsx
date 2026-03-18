import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";



const authContext = createContext({
    user: "",
    loading: false
})



const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false)



    useEffect(() => {



    }, [user])


    const value = {
        user,
        loading,
    }





}