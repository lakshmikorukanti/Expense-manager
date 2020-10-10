import React from "react"
import {Link} from "react-router-dom"
import { Form, Button} from "react-bootstrap";
import styles from "./Login.module.css"

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
                  <Form.Group controlId="formBasicEmail" style={{textAlign:"left", paddingTop:6}}>
                  
                    <div className = {styles.label}>
                      <Form.Control className={styles.input} type="email" placeholder=" " style={{padding:"20px"}} />
                      <span className={styles.span}> Email </span>
                      {/* <Form.Label className={styles.label}>Email</Form.Label> */}
                     </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" style={{textAlign:"left", paddingTop:6}}>
                   <div className = {styles.label}>
                    <Form.Control  className={styles.input} type="password" placeholder=" " style={{padding:"20px"}}/>
                     <span className={styles.span}> Password </span>
                    {/* <Form.Label className={styles.label}>Password:</Form.Label> */}
                    </div>
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