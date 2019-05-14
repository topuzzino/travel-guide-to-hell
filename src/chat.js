import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";
import {
    Widget,
    addResponseMessage,
    addLinkSnippet,
    addUserMessage
} from "react-chat-widget";

export default class Chat extends React.Component {
    componentDidMount() {
        addResponseMessage("All hope abandon, ye who enter here!");
    }
    handleNewUserMessage(newMessage) {
        //console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        let myArray = [
            "In the middle of the journey of our life I came to myself within a dark wood where the straight way was lost.",
            "The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.",
            "There is no greater sorrow than to recall happiness in times of misery."
        ];

        let answers = myArray[Math.floor(Math.random() * myArray.length)];
        console.log("answers: ", answers);
        addResponseMessage(answers);
    }
    render() {
        return (
            <section className="chat-container">
                <Header
                    titel={<h1>Chat rooms</h1>}
                    headertext={
                        <div className="header-text">
                            <p>Here comes the sun</p>
                        </div>
                    }
                />
                <section className="main-container">
                    <Widget
                        handleNewUserMessage={this.handleNewUserMessage}
                        profileAvatar={<img src="/img/logo-wordmark2.svg" />}
                        title="Chat with Dante"
                    />
                </section>
            </section>
        );
    }
}
