import { useEffect, useState } from "react"
import React from 'react'
import Home from './landing'
import Login from "./login"

const App = (props) => {

    const [view, setView] = useState({ name: 'init', params: {} })
    const [user, setUser] = useState({})

    const login = (loginInfo) => {
        if (!loginInfo) {
            return null
        }
        const name = loginInfo.name;
        const password = loginInfo.password;
        fetch('/api/login/' + name + '/' + password, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => {
                if (response.status === 400 || response.status === 404) {
                    return null
                } else {
                    return response.json();
                }
            })
                .then(result => {
                    if (!result) {
                        return null
                    } else {
                        setUser({
                            name: result[0].name,
                            user_id: result[0].user_id,
                            icon: result[0].icon
                        })
                    }
                })
    }

    let tert = (view.name === 'init')
        ?  <Home view={view} setView={setView}/>
        : (view.name === 'login') 
          ? <Login login={login} view={view} setView={setView}/>
          : null

    return (
        <div className='appCont'>
            {tert}
        </div>
    )
}

export default App
