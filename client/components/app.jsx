import { useState } from "react"
import React from 'react'
import Home from './landing'

const App = (props) => {

    const [view, setView] = useState({ name: 'init', params: {}})
    
    const newView = (names, params) => {
        setView({ name: names, params: params })
    }

    let tert = (view.name === 'init')
        ?  <div onClick= {() => newView('old', {})}>Workin</div>
        : (view.name === 'old') 
          ? <div onClick={() => newView('init', {})}>old Work</div>
          : null 

    return (
        <div className='appCont'>
            <Home view={view} setView={setView}/>
            {tert}
        </div>
    )
}

export default App
