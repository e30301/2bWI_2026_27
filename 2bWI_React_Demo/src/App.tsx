import './App.css'
import Button from "./components/Button.tsx"
import Button2 from "./components/Button2.tsx"
import Gif from "./components/Gif.tsx"
import Card from "./components/Card.tsx"
import List from "./components/List.tsx"


export default function App() {

  return (
    <>
        <Button text="Counter" />
        <br></br>
        <Button2 text="button" />
        <br></br>
        <Card pname="John Doe" occupation="Architect & Engineer"/>
        <br></br>
        <List/>
        <br></br>
        <Gif />

    </>
  )
}

