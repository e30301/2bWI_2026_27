import './App.css'
import { useState } from 'react'
import Button from "./components/Button.tsx"
import Button2 from "./components/Button2.tsx"
import Gif from "./components/Gif.tsx"
import Card from "./components/Card.tsx"
import List from "./components/List.tsx"
import Egg from "./components/Egg.tsx"

export default function App() {
  const [show, setShow] = useState(false);
  const [eggh, eggs] = useState(1);

  return (
    <>
      <div>
        <div>
          <input
            type="range"
            min="1"
            max="5000"
            value={eggh}
            onChange={(e) => eggs(parseInt(e.target.value))}
          />
        </div>

        {Array.from({ length: eggh }).map((_, i) => (
          <Egg key={i} />
        ))}
      </div>
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