import React from "react"
import {Link} from "react-router-dom"
import { Form, Button,Col} from "react-bootstrap";
import styles from "./Login.module.css"

export default function Register(){
    return(
        <>

         <div style={{display:"flex"}}>
            <div style={{ flex:"1px"}}></div>
            <div style={{flex:"1px",padding:"10% 20%",background:"#F6F4F3"}}>
                <div>
                    <h4 style={{fontWeight:"5000"}}>Sign Up</h4>
                    <h1 style={{fontSize:"60px"}}><span>Hi,</span><span style={{color:"lightskyblue"}}>Welcome</span></h1>
                    <p>Please sign up to continue</p>
                </div>
                <div>
                <Form>
 
    <Form.Group as={Col} controlId="formGridFullName">
      {/* <Form.Label>Full Name</Form.Label> */}
      <div className = {styles.label}>
      <Form.Control className={styles.input}  type="Full Name" placeholder=" " />
        <span className={styles.span}> Enter Full Name </span>
      </div>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Email" />
    </Form.Group>


  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>PassWord</Form.Label>
    <Form.Control type="password" placeholder="****" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="****" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{marginLeft:"70%",padding:"10px"}}>
    SIGN UP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
  </Button>
</Form>
<div style={{marginTop:"20%",marginLeft:"15%"}}>Don't have any account? &nbsp;&nbsp;&nbsp;<Link>Sign Up</Link></div>
                </div>
            </div>
        </div>
      
        </>
    )
}