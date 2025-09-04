import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Name from './components/Name'
import CardList from './components/CardList'

export default function App() {
  const [bill,setBill] = useState(() => {
    return JSON.parse(localStorage.getItem('bill')) || []
  })
  console.log(bill);
  localStorage.setItem('bill',JSON.stringify(bill))

  return (
    <>
    <Name name={"Ankit"}/>
    <Input setBill={setBill} bill={bill} />
    <CardList bill={bill}/>
    </>
  )
}
