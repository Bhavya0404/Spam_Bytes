import React, {useState} from "react";
import axios from "axios";


function Form() {
const [username,setusername]= useState('')
const [password,setpassword]= useState(0)


const handleclick=(event)=>{
event.preventDefault()
console.log(username,password)
const payload={
    username:username,
    password:password,
    
}
axios.post('/login',payload)
.then(()=>{console.log("done")})
.catch(()=>{console.log(" not done")})
}
 return (
        <form>
            <div>
                <label htmlFor="username">Name :</label>
                <input name="username" value={username} type="text" id="username" onChange={(e)=>{setusername(e.target.value)}}></input>
            </div>
            <div>
            <label htmlFor="password">Quantity :</label>
            <input name="password" value={password} type="text" id="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
       
    <div>
        <button onClick={handleclick}>Submit</button>
    </div>
        </form>
    );
}

export default Form;