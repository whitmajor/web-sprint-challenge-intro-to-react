import React, { useState, useEffect } from 'react'
import axios from 'axios'

const firstDetails=[
    {
        id:0,
        name: "brian",
        height: "164",
    
      },
    
      {
        id:1,
        name: "tracy",
        height: "165",
    
      },
      {
      id:2,
        name: "robert",
        height: "145",
      }
    
]



export default function Details(props){
    const {characterInfo, close} = props

    const [details, setDetails] = useState(firstDetails)


 

useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
.then (res=>{
 setDetails(res.data)//this is the path to the array
 
  
})
.catch(err=> console.log(err))
  },[characterInfo])

  return (
      <div className ="container">
          <h2>Details of each Character{characterInfo}</h2>
          {
              details &&
              <>
              <p>{details.name} is {details.height}</p>
            </>
          }
          <button onClick = {close}> Character</button>
          
          </div>
  )
}