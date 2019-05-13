import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Geography() {
    return (
        <section className="geography-container">
            <Header
                titel={
                    <h1>
                        So <br />
                        where <br />
                        are we?
                    </h1>
                }
            />
            <section className="geography-content">
                <p>Here will be content</p>
            </section>
        </section>
    );
}
