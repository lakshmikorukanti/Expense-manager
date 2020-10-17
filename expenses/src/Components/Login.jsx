import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/auth/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorLogin, setError] = useState("");
  const user = useSelector((state) => state.auth.user);
  const [validated, setValidated] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    handleData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    dispatch(
      userLogin({
        email,
        password,
      })
    );

    handleData();
  };
  const handleData = () => {
    console.log(user, "üser");
  };
  console.log(user, isAuth, errorLogin);
  if (user.length > 0) {
    return <Redirect to="/NavBar/Dashboard"></Redirect>;
  } else {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./KEY_LOCK.png"
            />
          </div>
          <div
            style={{ flex: "1px", padding: "128px 20%", background: "#F6F4F3" }}
          >
            <div>
              <h4 style={{ fontWeight: "5000" }}>Log in</h4>
              <h1 style={{ fontSize: "60px" }}>
                <span>Hi,</span>
                <span style={{ color: "lightskyblue" }}>Good Day!</span>
              </h1>
              <p>Please signin to continue</p>
            </div>
            <div>
              <br />
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  controlId="formBasicEmail"
                  style={{ textAlign: "left", paddingTop: 6 }}
                >
                  <div className={styles.label}>
                    <Form.Control
                      className={styles.input}
                      type="email"
                      placeholder=" "
                      style={{ padding: "20px" }}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      value={email}
                    />
                    <span className={styles.span}> Email </span>
                    {/* <Form.Label className={styles.label}>Email</Form.Label> */}
                  </div>
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  style={{ textAlign: "left", paddingTop: 6 }}
                >
                  <div className={styles.label}>
                    <Form.Control
                      className={styles.input}
                      type="password"
                      placeholder=" "
                      style={{ padding: "20px" }}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      value={password}
                    />
                    <span className={styles.span}> Password </span>
                    {/* <Form.Label className={styles.label}>Password:</Form.Label> */}
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "75%", padding: "10px" }}
                  onClick={handleSubmit}
                >
                  LOG IN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
                </Button>
              </Form>
              <h4>{errorLogin && errorLogin}</h4>
              <div style={{ marginTop: "20%", marginLeft: "15%" }}>
                Don't have any account? &nbsp;&nbsp;&nbsp;
                <Link to="/Register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
