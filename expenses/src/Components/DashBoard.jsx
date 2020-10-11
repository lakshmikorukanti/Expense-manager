import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./Dashboard.module.css"

export default function DashBoard() {
	return (
    <>
			{/* Total Income - (Sum of all credit)
        Total Expenses - (Sum of all debits)
        Balance - (Credit - Debit)
        Transaction - (List of last five recent transactions)
        Enter Transaction */}
        <div className={styles.OuterBox}> 

			<div>DashBoard</div>

			<h3> Welcome back, Name </h3>

            <Button variant="outline-info" className={styles.expBtn}> Add an expense </Button>
			<div className="container-fluid">
				<div className="row">
					<div className="col-6 ">
						<Card className={styles.card_box} style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title className={styles.title}>Total Income</Card.Title>
								{/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
								<div className={styles.overlay}></div>
                                <Button className={styles.button} variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>

					<div className="col-6">
						<Card className={styles.card_box} style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title className={styles.title}> Total Expense</Card.Title>
								<div className={styles.overlay}></div>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button className={styles.button} variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>
					<div className="col-6">
						<Card className={styles.card_box} style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title className={styles.title}>Balance</Card.Title>
								<div className={styles.overlay}></div>
                                <Card.Text className = {styles.text}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<Button className={styles.button} variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>
					<div className="col-6">
						<Card className={styles.card_box} style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title className={styles.title}>Transaction details</Card.Title>
                                <Card.Text className = {styles.text}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<div className={styles.overlay}></div>
								<Button className={styles.button} variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
                    </div>
                </div>
            </div>
        </div>
    </>
	);
}
