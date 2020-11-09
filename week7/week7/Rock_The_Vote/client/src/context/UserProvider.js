// import { PromiseProvider } from 'mongoose'
import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = { 
        user:{}, 
        token: "", 
        todos: [] 
    }

    const [userState, setUserState] = useState(initState)


    return (<div>
        <UserContext.Provider
            value={{
                ...userState
            }}>
            { props.children }
        </UserContext.Provider>
        </div>
    )
}