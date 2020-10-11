import React from "react"
import {Link, Redirect} from "react-router-dom"
import { Form, Button} from "react-bootstrap";
import styles from "./Login.module.css"
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
                <br/>
                <br/>
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

                  <div style={{marginTop:"20%",marginLeft:"15%"}}>Don't have any account? &nbsp;&nbsp;&nbsp;<Link to="/Register">Sign Up</Link></div>

                

                </div>
            </div>
        </div>
      
        </>
    )
}

}