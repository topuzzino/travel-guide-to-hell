import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Chat() {
    return (
        <section className="chat-container">
            <Header />
            <p>This is chat page</p>
        </section>
    );
}
