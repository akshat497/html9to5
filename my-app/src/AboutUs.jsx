import React, { use, useEffect, useState } from 'react'

export default function AboutUs({name,age,add}) {


 
  let calculate=add(20,20)
  const [data, setData] = useState(0) // to remember data

  function updateData(){
    setData(data+5)
    console.log(data)
  }


  return (
  <>
   <center> <h1 onClick={updateData}>About us {name} {calculate} {age}</h1></center>
    <img src='favicon.svg'/>
    {data}
    <p onClick={()=>{add(10,20)}}>lkdnfkjsbdfkjbsdkfbksdbfkjsdbfkjsdbfkjsdbfkjsdbfkjsdbfkjs</p>
    
  </>
  )
}
