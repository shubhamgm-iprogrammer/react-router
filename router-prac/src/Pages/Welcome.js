import React from 'react'
import {Route} from "react-router-dom"
const Welcome = () => {
    return (
        <div>
           <h1>welcome</h1> 
           <Route path="/welcome/newUser">
            <p>Welcome new user</p>
           </Route>
        </div>
    )
}

export default Welcome
