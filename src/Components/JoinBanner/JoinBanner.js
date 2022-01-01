import React from "react";
import { AboutItems } from "../About/AboutItems";
import "./JoinBanner.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class JoinBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="joinbanner">
        <div className="listform">
          <h3>Want to keep up with {AboutItems.name} ?</h3>
          <h4>Join the mailing list</h4>
          <Form onSubmit={this.handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
            <Button type = 'submit' variant="secondary">Submit</Button>{' '}
          </Form>
        </div>
      </div>
    );
  }
}
