import { PromiseProvider } from 'mongoose'
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


    retern (
        <UserContext.UserProvider
            value={{
                ...userState
            }}>
            { props.children }
        </UserContext.UserProvider>
    )
}