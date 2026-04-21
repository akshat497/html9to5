import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ContactUs() {
   useEffect(()=>{

    console.log("mounting")
    return ()=>{
      console.log("unmounting")
    }
  },[])
  const [array, setArray] = useState([1,2,3,4,5])
   let newArray=[]
  // delete last elemetn of the array 
  for (let i=0;i<array.length;i++){
    if(i!==array.length-1){
      newArray.push(array[i])
    }
      
  }
  console.log(newArray)



  return (
    <div>ContactUs</div>
  )
}
