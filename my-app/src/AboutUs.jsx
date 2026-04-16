import React from 'react'

export default function AboutUs({name,age,add}) {


 
  let calculate=add(20,20)

  return (
  <>
   <center> <h1>About us {name} {calculate} {age}</h1></center>
    <img src='favicon.svg'/>
    <p onClick={()=>{add(10,20)}}>lkdnfkjsbdfkjbsdkfbksdbfkjsdbfkjsdbfkjsdbfkjsdbfkjsdbfkjs</p>
  </>
  )
}
