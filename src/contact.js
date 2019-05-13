import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Contact() {
    return (
        <section className="contact-container">
            <Header />
            <p>This is contact page</p>
        </section>
    );
}
