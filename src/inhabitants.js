import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Inhabitants() {
    return (
        <section className="inhabitants-container">
            <Header />
            <Link className="chat-link" to="/chat">
                CHAT ROOMS
            </Link>
            <p>This is inhabitants page</p>
        </section>
    );
}
