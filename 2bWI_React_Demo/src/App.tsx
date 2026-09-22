import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import List from "./components/List.tsx";


export default function App() {

  return (
    <>
        <Button text="Sendar" function1="a()"/>
        <Card pname="John Doe" occupation="Architect & Engineer"/>
        <List/>

    </>
  )
}

