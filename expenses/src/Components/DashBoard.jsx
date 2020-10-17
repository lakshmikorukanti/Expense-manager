import React from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  FormGroup,
  Form,
  Alert,
} from "react-bootstrap";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import ModalBox from "./ModalBox";
import axios from "axios";

export default function DashBoard() {
  const user = useSelector((state) => state.auth.user);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddData = (payload) => {
    console.log(payload, "payload in Dashboard");
    axios
      .post("https://mod-living-db.herokuapp.com/transaction", {
        user_id: user[0].id,
        title: payload.title,
        type: payload.type,
        amount: payload.amount,
        timestamp: payload.timestamp,
      })
      .then((res) => setSuccess(true))
      .catch((err) => console.log(err));

    setShow(false);
  };
  const handleClose = (payload) => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Total Income - (Sum of all credit)
        Total Expenses - (Sum of all debits)
        Balance - (Credit - Debit)
        Transaction - (List of last five recent transactions)
        Enter Transaction */}
      <h1>name</h1>
      <div className={styles.OuterBox}>
        <div>DashBoard</div>

        <h3>
          {" "}
          Welcome back,<span style={{ color: "#87CEFA" }}>
            {user[0].name}
          </span>{" "}
        </h3>

        <Button
          variant="outline-info"
          onClick={handleShow}
          className={styles.expBtn}
        >
          {" "}
          Add an expense{" "}
        </Button>

        {success ? (
          <>
            <Alert
              style={{ margin: "0 auto" }}
              variant="success"
              onClose={() => setSuccess(false)}
              dismissible
            >
              <Alert.Heading>Add Successfully !</Alert.Heading>
            </Alert>
          </>
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>Total Income</Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-6">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>
                    {" "}
                    Total Expense
                  </Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>Balance</Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>
                    Transaction details
                  </Card.Title>
                  <Card.Text className={styles.text}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className={styles.overlay}></div>
                  <Button className={styles.button} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <ModalBox
        handleClose={handleClose}
        handleAddData={handleAddData}
        handleShow={handleShow}
        show={show}
      />
    </>
  );
}
