import React, { useEffect, useState} from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Dies from "./Dies.jsx"
import Confetti from 'react-confetti'

const App = ()=>{

  // To set all states
    const [dice, setDice] = useState(generateRandomNumbers())
    const [tenzies, setTenzies] = useState(false)

    useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const sameAsFirstValue = dice.every(die => die.value === firstValue )
        
        if(allHeld && sameAsFirstValue){
          setTenzies(true)
        }
    }, [dice])

 // To genereate Dice Numbers
 function newRandomNum (){
   return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
 }

  function generateRandomNumbers (){
    const randomNumbers = []
    for (let i=0; i<10; i++){     
     randomNumbers.push(newRandomNum())
    }
    return randomNumbers
  }


    function holdDice (id){
      setDice(oldDice =>{
        return oldDice.map(die =>{
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
        })
      })
    }

    function rollDice (){
      if(!tenzies){
          setDice((oldDice) => oldDice.map(die=>{
            return die.isHeld? die : newRandomNum()
          })
        )
      }
      else {
        setTenzies(true)
        setDice(generateRandomNumbers())
      }
    }

  const singleDie = dice.map(die => <Dies
    key={die.id}
    isHeld={die.isHeld}
    die ={die.value}
    holdDice={()=>holdDice(die.id)}/>)

  return (
    <main>
        {tenzies && <Confetti />}
        <div className='tenzies-body'>
          <h1 className='heading'>Tenzies</h1>
          <p className='intro'>Roll untill all dice are the same. Click each die to freeze it as its
            current value between rolls
          </p>
          <div className='dice-numbers'>
            {singleDie}
          </div>
          <button className='roll-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
    </main>
  )

 
}

export default App