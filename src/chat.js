import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Chat() {
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
        </section>
    );
}
