import React,{useState, useEffect} from 'react';
import axios from "axios"
import Character from "../src/components/Character"





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const firstCharacters =[
    {
   
    name: "brian",
    height: "164",

  },

  {
 
    name: "tracy",
    height: "165",

  },
  {

    name: "robert",
    height: "145",
  }

]
  const [characters, setCharacters] = useState(firstCharacters)

  
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
.then (res=>{
 setCharacters(res.data)//this is the path to the array
 
  
})
.catch(err=> console.log(err))
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
   
      {
    characters.map(character=>{
     return <Character>
     <h2> {character.name} </h2>
      </Character>
      
    })}
  
    </div>
  );
}

export default App;
