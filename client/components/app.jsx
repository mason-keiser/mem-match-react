import { useState } from "react"
import React from 'react'
import Home from './landing'
import Login from "./login"

const App = (props) => {

    const [view, setView] = useState({ name: 'init', params: {}})
    
    const newView = (names, params) => {
        setView({ name: names, params: params })
    }

    let tert = (view.name === 'init')
        ?  <Home view={view} setView={setView}/>
        : (view.name === 'login') 
          ? <Login view={view} setView={setView}/>
          : null

    return (
        <div className='appCont'>
            {tert}
        </div>
    )
}

export default App
