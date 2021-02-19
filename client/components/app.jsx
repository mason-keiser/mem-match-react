import { useEffect, useState } from "react"
import React from 'react'
import Home from './landing'
import Login from "./login"
import Game from './game'
import UserIcons from "./userIcons"
import SignUp from "./sign_up"

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
                            icon: result[0].icon,
                            wins: result[0].wins,
                            password: result[0].password
                        })
                        setView({name: 'game', params: {}})
                    }
                })
    }

    const loginAsGuest = () => {
        fetch('/api/login/Guest/guest', {
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
                            icon: result[0].icon,
                            wins: result[0].wins,
                            password: result[0].password
                        })
                        setView({name: 'game', params: {}})
                    }
                })
    }

    const signUp = (signupInfo) => {
        console.log(signupInfo)
        fetch('/api/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(signupInfo)
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
                        name: result.name,
                        user_id: result.user_id,
                        icon: result.icon,
                        wins: result.wins,
                        password: result.password
                    })
                    setView({name: 'game', params: {}})
                }
            })
    }

    let tert = (view.name === 'init')
        ?  <Home view={view} setView={setView} loginAsGuest={loginAsGuest}/>
        : (view.name === 'login') 
          ? <Login user={user} login={login} loginAsGuest={loginAsGuest} view={view} setView={setView}/>
          : (view.name === 'game')
            ? <Game view={view} setView={setView} user={user}/>
            : (view.name === 'userIcons')
                ? <UserIcons view={view} setView={setView} user={user} loginAsGuest={loginAsGuest} login={login}/>
                : (view.name === 'signup')
                    ? <SignUp user={user} view={view} signUp={signUp} loginAsGuest={loginAsGuest} setView={setView}/>
                    : null

    return (
        <div className='appCont'>
            {tert}
        </div>
    )
}

export default App
