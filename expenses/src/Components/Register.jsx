import React,{useEffect} from "react"
import {Link} from "react-router-dom"
import { Form, Button,Col} from "react-bootstrap";
import styles from "./Register.module.css"
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { userRegister ,userExist} from "../Redux/auth/action";
export default function Register(){
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errormsg,setError]=useState("")
    const [userexistmsg,setUsermsg]=useState("")
    const errorReg = useSelector((state) => state.auth.errorReg);
    const userComp=useSelector((state) => state.auth.userComp)
    let [validated, setValidated] = useState(false);
    const successReg = useSelector((state) => state.auth.successReg);
    console.log(fullname,email,password,confirmPassword)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userExist())
    },[])
    var arr=[]
    const handleSubmit=(event)=>{
        event.preventDefault();
        setError("")
        console.log("register")
        // var flag_email=false
        // var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        // if(email==email_regex ){
        //     flag_email=true
        // }
     
        if(userComp.length>0){
             arr=userComp.filter((a)=>a.email==email)
            console.log(arr)
            }
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        validated=true
     
        console.log(validated)
handledata()

}
const handledata=()=>{
  console.log(arr,"arr",validated)
    if(fullname!="" && fullname.length>4 && email!="" && email.length>4 && password!="" && password.length>=6 && validated==true )
    {
    if(password!=confirmPassword ){
    setError("Password did not match")
    }
    else if(arr.length>0){
    setUsermsg("User already exist")
    }
    else{
    dispatch(userRegister({
        fullname,email,password
    }))
    }
    }
    else{
        setError("Please fill all the required feilds")
    }
}
    console.log(userComp)
    return(
        <>
         <div style={{display:"flex"}}>
            <div style={{ flex:"1px"}}></div>
            <div style={{flex:"1px",padding:"3% 20%",background:"#F6F4F3"}}>
                <div style={{marginLeft:"10px"}}>
                    <h4 style={{fontWeight:"5000"}}>Sign Up</h4>
                    <h1 style={{fontSize:"60px"}}><span>Hi,</span><span style={{color:"lightskyblue"}}>Welcome</span></h1>
                    <p>Please sign up to continue</p>
                </div>
                <div>
                <Form  noValidate validated={validated} >
 

 

    <Form.Group as={Col} controlId="formGridFullName" style={{paddingTop:10}} >
      {/* <Form.Label>Full Name</Form.Label> */}
      <div className = {styles.label}>
        <Form.Control className={styles.input}  type="Full Name" placeholder=" " 
        onChange={(e) => setName(e.target.value)}
        name="fullname" required
        min="4"
        value={fullname}/>
        <span className={styles.span}> Enter Full Name </span>
        </div>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail" style={{paddingTop:5}}>
      {/* <Form.Label>Email</Form.Label> */}
      <div className = {styles.label2}>
      <Form.Control className={styles.input2} type="Email" placeholder=" " required onChange={(e) =>setEmail(e.target.value)}
                name="email"
                value={email}/>
         <span className={styles.span}> Enter Email </span>       
      </div>
    </Form.Group>


  <Form.Group as={Col} controlId="formGridPassword" style={{paddingTop:5}}>
    {/* <Form.Label>Password</Form.Label> */}
    <div className = {styles.label2}>
    <Form.Control className={styles.input2} type="password" placeholder=" " min="6"  onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}/>
                <span className={styles.span}> Password </span> 
                </div>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2" style={{paddingTop:5}}>
    {/* <Form.Label>Confirm Password</Form.Label> */}
    <div className = {styles.label}>
      <Form.Control className={styles.input} type="password" placeholder=" " aria-required onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                value={confirmPassword}/>
      <span className={styles.span}> Confirm Password </span> 
      </div>
  </Form.Group>

  
  <Button variant="primary" type="submit" style={{marginLeft:"70%",padding:"10px"}} onClick={handleSubmit}> 
    SIGN UP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
  </Button>
</Form>
<h4 style={{marginLeft:"15%",marginTop:"20px"}} >{errormsg && errormsg}</h4>
    <h4 style={{marginLeft:"15%",marginTop:"20px"}}>{successReg && successReg}</h4>
    <h4 style={{marginLeft:"15%",marginTop:"20px"}}>{userexistmsg && userexistmsg}</h4>
<div style={{marginTop:"20%",marginLeft:"15%"}}>Already have an account? &nbsp;&nbsp;&nbsp;<Link to="/">Sign In</Link></div>
                </div>
            </div>
        </div>
        </>
    )
}