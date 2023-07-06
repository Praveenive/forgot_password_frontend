
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Forgotpassword() {
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const update = {email}
    const handleForgot = async()=>{
        const response = await fetch(`http://localhost:9000/reset/forgot`,{
            method:"POST",
            body:JSON.stringify(update),
            headers:{
            "Content-type":"application/json"
            }
        })
        const data =await response.json()
        console.log(data)
        if(!data){
            setError(data.message)
          }
          setError(" ")
    }
  return (
    <div>
        <h1>Forgot Password</h1>
        <h3>Enter Your mail id</h3>
        <TextField type="email"  label="Enter Email" variant="filled" value={email}
       onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
       <Button variant='contained' onClick={handleForgot}>Submit</Button>
    </div>
  )
}
