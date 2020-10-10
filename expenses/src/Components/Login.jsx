import React from "react"
import {Link, Redirect} from "react-router-dom"
import { Form, Button} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/auth/action";
export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [validated, setValidated] = useState(false);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const handleSubmit=(event)=>{
        event.preventDefault();
     
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
        
        dispatch(userLogin({
            email,password
        }))
       
    }
 
    console.log(user,isAuth)
    if(user.length>0){
        return <Redirect to="/DashBoard"></Redirect>
    }
else{
    return(
        <>
        <div style={{display:"flex"}}>
            <div style={{ flex:"1px"}}></div>
            <div style={{flex:"1px",padding:"128px 20%",background:"#F6F4F3"}}>
                <div>
                    <h4 style={{fontWeight:"5000"}}>Log in</h4>
                    <h1 style={{fontSize:"60px"}}><span>Hi,</span><span style={{color:"lightskyblue"}}>Good Day!</span></h1>
                    <p>Please signin to continue</p>
                </div>
                <div>
                <Form  noValidate validated={validated} >
  <Form.Group controlId="formBasicEmail" style={{textAlign:"left"}} controlId="validationCustom01">
    <Form.Label>Email:</Form.Label>
    <Form.Control required type="email" placeholder="Email" required onChange={(e) =>setEmail(e.target.value)}
                name="email"
                value={email}  style={{padding:"20px"}} />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword" style={{textAlign:"left"}} controlId="validationCustom02">
    <Form.Label>Password:</Form.Label>
    <Form.Control required type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password} style={{padding:"20px"}}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={handleSubmit} style={{marginLeft:"74%",padding:"10px"}}>
    LOG IN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
  </Button>
</Form>
<div style={{marginTop:"20%",marginLeft:"15%"}}>Already have any account? &nbsp;&nbsp;&nbsp;<Link to="/Register">Sign In</Link></div>
                </div>
            </div>
        </div>
      
        </>
    )
}

}