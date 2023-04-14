import React from 'react';
import './App.css'
import { TwitterCard } from './TwitterCard';
export function App(){
    return(
        <section className='App'>
        <TwitterCard userName='danidev97'>
        Daniel Castro    
        </TwitterCard>
        <TwitterCard userName='midudev'>
        Miguel Dev    
        </TwitterCard>
        </section>
    )
}

