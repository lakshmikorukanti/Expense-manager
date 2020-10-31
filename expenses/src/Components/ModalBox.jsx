import React, { useState } from "react";
import { Card, Button, Modal, InputGroup, FormControl, FormGroup, Form } from "react-bootstrap";

export default function ModalBox({ handleShow, handleClose, show,handleAddData }) {
	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	const [data, setData] = useState("");
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [timestamp, setTimestamp] = useState("");
	const [type, setType] = useState("");

	const timeChange = (input) => {
		input = input.split("T");
		console.log(input);
		input[0] = input[0].replace("-", "/");
		input[0] = input[0].replace("-", "/");

		if (input[1] == "12:00") {
			input[1] = `${input[1]}:00 PM`;
		} else if (input[1] > "12:00") {
			let [hr, min] = input[1].split(":")
			hr = Number(hr) - 12;
			input[1] = "0" + hr.toString() + ":" + min.toString() + ":00" + " PM";
		} else {
			input[1] = `${input[1]}:00 AM`;
		}
		return input.join(", ");
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name == "timestamp") {
			//  2020-10-15T11:17
			// "2020/10/01, 10:00:40 PM"
			value = timeChange(value);
		}
		setData({
			...data,
			[name]: value,
		});
	};

	const handleCredit = () => {
		setData({
			...data,
			type: "credit",
		});
	};
	const handleDebit = () => {
		setData({
			...data,
			type: "debit",
		});
	};

	console.log(data);
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add expenses</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<br />
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Default" name="title" onChange={handleChange} aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>$</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl onChange={handleChange} name="amount" aria-label="Amount (to the nearest dollar)" />
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>Date</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="datetime-local" name="timestamp" onChange={handleChange} id="example-datetime-local-input" />
					</InputGroup>
					<div className="ml-3">
						<Button variant="success" onClick={handleCredit}>
							Credit
						</Button>{" "}
						<Button onClick={handleDebit} variant="warning">
							Debit
						</Button>{" "}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={()=>handleAddData(data)}>
						Add
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
