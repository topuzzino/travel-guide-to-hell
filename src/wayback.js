import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Wayback() {
    console.log("wayback fired");
    return (
        <section className="wayback-container">
            <Header
                titel={
                    <h1>
                        To <br />
                        the hell <br />
                        and back
                    </h1>
                }
            />
            <p>This is wayback page</p>
        </section>
    );
}
