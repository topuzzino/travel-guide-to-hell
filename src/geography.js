import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";
import MapContainer from "./mapContainer";

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
            <section className="main-container">
                <div className="second-navi">
                    <ul>
                        <li>entrances</li>
                        <li>headline</li>
                        <li>headline</li>
                        <li>headline</li>
                    </ul>
                </div>
                <div className="main-content">
                    <p>
                        Wie also kommt man in die Hölle? Nun, wegen des großen
                        Andrangs gibt es praktischerweise mehrere Eingänge. Wir
                        stellen Ihnen die beliebtesten vor.
                    </p>
                    <MapContainer />
                    <div className="columns-wrapper" />
                    <div className="left-column">
                        <p>Blabla</p>
                    </div>
                    <div className="right-column" />
                </div>
            </section>
        </section>
    );
}
