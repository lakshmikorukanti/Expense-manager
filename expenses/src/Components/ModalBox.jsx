import React from "react";
import { Card, Button, Modal, InputGroup, FormControl, FormGroup, Form } from "react-bootstrap";

export default function ModalBox({handleShow,handleClose, show}) {

	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

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
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>$</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Amount (to the nearest dollar)" />
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>Date</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type="datetime-local" id="example-datetime-local-input" />
					</InputGroup>
					<div className="ml-3">
						<Button variant="success">Credit</Button> <Button variant="warning">Debit</Button>{" "}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
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
