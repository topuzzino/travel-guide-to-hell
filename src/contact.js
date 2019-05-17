import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";
import axios from "./axios";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            email: "",
            note: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(e) {
        axios({
            method: "post",
            url: "/newsletter",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                phoneNumber: this.state.phone,
                email: this.state.email,
                note: this.state.note
            }
        }).then(res => {
            if (res.data.success) {
                alert("You're information was submitted");
                this.setState({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    phone: "",
                    email: "",
                    note: ""
                });
            } else {
                alert(
                    "There is something wrong with the data. Please try again."
                );
                this.setState({
                    success: false
                });
            }
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <section className="contact-container">
                <Header
                    titel={<h1>Contact us</h1>}
                    headertext={
                        <div className="contact-form">
                            <input
                                type="text"
                                className="text-input"
                                id="text-input-first"
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                            />
                            <input
                                type="text"
                                className="text-input"
                                id="text-input-last"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                            />

                            <input
                                type="text"
                                className="text-input"
                                id="text-input-email"
                                name="email"
                                placeholder="Email Address"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <textarea
                                type="text"
                                className="text-input"
                                rows="6"
                                id="text-input-note"
                                name="note"
                                placeholder="What info are you interested in?"
                                onChange={this.handleChange}
                                value={this.state.note}
                            />

                            <button
                                onClick={e => this.handleClick(e)}
                                type="submit"
                                id="submit-button"
                            >
                                Submit
                            </button>
                        </div>
                    }
                />
            </section>
        );
    }
}
