import React, { Component } from "react";
import UsernameForm from "./usernameForm";
import ChatScreen from "./ChatScreen";
import Header from "./header";

export default class Chat extends Component {
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
        if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
            return (
                <div className="chat-container">
                    <Header
                        titel={
                            <h1>
                                Chat <br />
                                rooms
                            </h1>
                        }
                        headertext={
                            <div className="header-text">
                                <p>
                                    The last hell visitor was Dante Alighieri
                                    from Florence, his visit is dated by Eastern
                                    1300. Since the beginning of history there
                                    were several visitor who managed to come
                                    back, they are: <br />
                                    Jesus, Lazarus, Orpheus, Sysiphos,
                                    Gilgamesh, Dante, Hildegard von Bingen,
                                    Svedenborg.
                                </p>
                                <p>
                                    We give you the chance to ask them
                                    everything that you are interested in.
                                </p>
                            </div>
                        }
                    />
                    <UsernameForm onSubmit={this.onUsernameSubmitted} />
                </div>
            );
        }
        if (this.state.currentScreen === "ChatScreen") {
            return <ChatScreen currentUsername={this.state.currentUsername} />;
        }
    }
}
