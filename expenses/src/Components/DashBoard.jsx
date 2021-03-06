import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import ModalBox from "./ModalBox";
import axios from "axios";
import { transactionData } from "../Redux/ledger/action";

export default function DashBoard() {
  const user = useSelector((state) => state.auth.user);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  var TData = useSelector((state) => state.app.TData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionData(user));
  }, []);
  let creditSum = 0;
  let debitSum = 0;
  console.log(TData, typeof(TData), "TData mAP");
  TData.map((a) =>
    a.type == "credit"
      ? (creditSum += Number(a.amount))
      : (debitSum += Number(a.amount))
  );

  console.log(creditSum, debitSum);
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
            <div className="col-lg-6 col-md-12">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>Total Income</Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                    You can check here, your total income
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    ₹ {creditSum + debitSum}
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-6 col-md-12">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>
                    {" "}
                    Total Expense
                  </Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                  You can check here, your total expenses
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    ₹ {debitSum}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-12">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>Balance</Card.Title>
                  <div className={styles.overlay}></div>
                  <Card.Text className={styles.text}>
                  You can check here, your total balance
                  </Card.Text>
                  <Button className={styles.button} variant="primary">
                    ₹ {creditSum - debitSum}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-md-12">
              <Card className={styles.card_box} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className={styles.title}>
                    Transaction details
                  </Card.Title>

                  <div className={styles.overlay}></div>
                  <Link to="/NavBar/ledger">
                    <Button className={styles.button} variant="primary">
                      Details
                    </Button>
                  </Link>
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
