import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }
  render() {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            background: "#f6f5f3",

            padding: "20px",
            height: "70%",
          }}
        >
          <div style={{ marginTop: "60px" }}>
            <h1 style={{ fontSize: "50px" }}>Contact Us</h1>
            <p style={{ marginTop: "30px", fontSize: "20px" }}>
              Got a question? We'd love to hear from you and we'll respond as
              soon as possible.
            </p>
          </div>
          <div
            style={{
              width: "30%",
              marginLeft: "35%",
              height: "500px",
              border: "1px solid white",
              marginBottom: "80px",
              background: "white",
            }}
          >
            <Form>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="mt-4 mr-5"
                style={{ marginLeft: "20px", width: "380px" }}
              >
                <Form.Control
                  required
                  type="name"
                  placeholder="Name"
                  style={{ padding: "20px", marginLeft: "10px" }}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                style={{ marginLeft: "20px", width: "380px" }}
                className="mt-4 mr-5"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  style={{ padding: "20px", marginLeft: "10px" }}
                />
              </Form.Group>
              <Form.Group
                style={{ marginLeft: "10px" }}
                controlId="exampleForm.ControlInput1"
                className="mt-4 mr-5"
              >
                <Form.Control
                  required
                  type="number"
                  placeholder="Contact Number"
                  style={{ padding: "20px", marginLeft: "20px" }}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlSelect1"
                style={{ marginLeft: "6px" }}
              >
                <Form.Control
                  required
                  as="select"
                  style={{ width: "88%" }}
                  className="mt-4 mr-4 ml-4"
                >
                  <option>Cancel Order</option>
                  <option>Tracking The Order</option>
                  <option>Coupons</option>
                  <option>Offers</option>
                  <option>Sales</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                style={{ marginLeft: "6px" }}
              >
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Message"
                  style={{ padding: "20px", width: "88%" }}
                  className="mt-4 mr-4 ml-4"
                />
              </Form.Group>
              <Button
                type="submit"
                className="mt-3"
                style={{ width: "88%", background: "black" }}
              >
                Submit
              </Button>
            </Form>
          </div>
          <h1
            style={{
              color: "#b4b4b4",
              fontSize: "18px",
              textAlign: "center",
              marginTop: "0px",
              wordSpacing: "1px",
            }}
            className="col-xs-24 clearfix"
          >
            Need help?
            <img
              style={{
                height: "20px",
                padding: "0px 10px",
                display: "inline-block",
              }}
              src="https://n3.sdlcdn.com/image/upload/Group-e526f.png"
            />
            Call us 24/7 at
            <span style={{ color: "#212121" }}> +91-98765 43210</span>
            <span
              style={{
                display: "block",
                textAlign: " center",
                padding: "0px",
                marginTop: "20px",
                color: "black",
              }}
            >
              OR
            </span>
          </h1>
          <h1
            style={{
              color: "#b4b4b4",
              fontSize: "18px",
              lineHeight: "48px",
              textAlign: "center",
              wordSpacing: "1px",
              marginBottom: "30px",
            }}
            class="col-xs-24"
          >
            Email us 24/7 at
            <a href="#" target="_blank">
              <span style={{ color: "#212121" }}>
                &nbsp;help@expenseManager.com
              </span>
            </a>
          </h1>
        </div>
      </>
    );
  }
}
