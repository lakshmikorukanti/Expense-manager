import React from "react"
import {Link} from "react-router-dom"
import { Form, Button} from "react-bootstrap";
export default function Login(){
    return(
        <>
        <div style={{display:"flex"}}>
            <div style={{ flex:"1px"}}></div>
            <div style={{flex:"1px",padding:"10% 20%",background:"#F6F4F3"}}>
                <div>
                    <h4 style={{fontWeight:"5000"}}>Log in</h4>
                    <h1 style={{fontSize:"60px"}}><span>Hi,</span><span style={{color:"lightskyblue"}}>Good Day!</span></h1>
                    <p>Please signin to continue</p>
                </div>
                <div>
                <Form>
  <Form.Group controlId="formBasicEmail" style={{textAlign:"left"}}>
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{padding:"20px"}} />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword" style={{textAlign:"left"}}>
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{padding:"20px"}}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" style={{marginLeft:"76%",padding:"10px"}}>
    LOG IN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
  </Button>
</Form>
<div style={{marginTop:"20%",marginLeft:"15%"}}>Already have any account? &nbsp;&nbsp;&nbsp;<Link>Sign In</Link></div>
                </div>
            </div>
        </div>
      
        </>
    )
}