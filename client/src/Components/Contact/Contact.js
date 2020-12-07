import React from "react";
import "./Contact.css";
import axios from "../../utils/axios";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        let contact = { name, email, message };
        axios.post("/contacts", contact).then(data => {
            console.log(data);
        });
    };

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="container2">
                <Card body>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Your Name"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                id="exampleEmail"
                                placeholder="Your Email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input
                                type="textarea"
                                placeholder="We would love to here from you ..."
                                name="message"
                                id="exampleText"
                                value={message}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button className="pull-right" color="primary">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Contact;
