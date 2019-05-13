import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-container">
                    <Link className="header-logo" to="/">
                        <img
                            src="/img/logo-wordmark.svg"
                            alt="Logo"
                            width="90"
                            height="auto"
                        />
                    </Link>
                </div>
                <div className="navi">
                    <Link className="header-link" to="/history">
                        HISTORY
                    </Link>
                    <Link className="header-link" to="/geography">
                        GEOGRAPHY
                    </Link>
                    <Link className="header-link" to="/whatthehell">
                        WHAT THE HELL
                    </Link>
                    <Link className="header-link" to="/wayback">
                        TO HELL AND BACK
                    </Link>
                </div>
                {props.titel}
            </div>
            {props.headertext}
        </header>
    );
}
