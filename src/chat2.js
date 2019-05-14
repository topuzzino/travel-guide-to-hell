import React, { Component } from "react";
import UsernameForm from "./usernameForm";
import ChatScreen from "./ChatScreen";
import Header from "./header";

export default class Chat2 extends Component {
    constructor() {
        super();
        this.state = {
            currentUsername: "",
            currentScreen: "WhatIsYourUsernameScreen"
        };
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
    }

    onUsernameSubmitted(username) {
        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        })
            .then(response => {
                this.setState({
                    currentUsername: username,
                    currentScreen: "ChatScreen"
                });
            })
            .catch(error => console.error("error", error));
    }

    render() {
        console.log("this.state: ", this.state);
        if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
            return (
                <div className="chat-container">
                    <Header />
                    <UsernameForm onSubmit={this.onUsernameSubmitted} />
                </div>
            );
        }
        if (this.state.currentScreen === "ChatScreen") {
            return <ChatScreen currentUsername={this.state.currentUsername} />;
        }
    }
}
