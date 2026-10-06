import './App.css'
import { useState } from 'react'
import Button from "./components/Button.tsx"
import Button2 from "./components/Button2.tsx"
import Gif from "./components/Gif.tsx"
import Card from "./components/Card.tsx"
import List from "./components/List.tsx"

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button text="Counter" />
      <br />
      <Button2 text="button" onClick={() => setShow(true)} />
      <Gif show={show} />
      <br />
      <Card pname="Donald Trump" occupation="Professionelle Orange" />
      <br />
      <List />
    </>
  )
}