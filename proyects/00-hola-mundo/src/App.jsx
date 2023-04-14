import React from 'react';
import './App.css'
import { TwitterCard } from './TwitterCard';
import { useState } from 'react';
export function App(){

    const [name, setUserName] = useState('midudev');
    console.log('render with name: ',name)
    return(
        <section className='App'>
        <TwitterCard userName='danidev97'>
        Daniel Castro    
        </TwitterCard>
        <TwitterCard userName={name}>
            Miguel Duran  
        </TwitterCard>
        <button onClick={()=>setUserName('alfonsoemoreno')}>
            Cambiar Nombre
        </button>
        </section>
    )
}

