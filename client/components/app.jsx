import { useState } from "react"
import React from 'react'
import Home from './landing'

const App = (props) => {

    const [view, setView] = 
        useState({view: {
            name: 'init',
            params: {}
        }})
    
    const newView = (names, params) => {
        setView({
            view: {
                name: names,
                params: params
            }
        })
    }

    let tert = (view.view.name === 'init')
        ?  <div>Workin</div>
        : (view.view.name === 'old') 
          ? <div>old Work</div>
          : null 

    return (
        <div className='appCont'>
            <Home/>
            
        </div>
    )
}

export default App
