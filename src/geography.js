import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";
import MapContainer from "./mapContainer";
import Iframe from "react-iframe";

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
                        <li>
                            Location
                            <p className="navi-text">
                                Logically the hell is located in the midle of
                                the Earth, on that fact were a lot of different
                                mythologies in an agreement.
                            </p>
                        </li>
                        <li>
                            entrances
                            <p className="navi-text">
                                How can we come into hell? Well, because of a
                                large crowd of people who wants to get there
                                there are practically several entrances.
                                We&apos;d like to introduce you the most popular
                                ones.
                            </p>
                        </li>

                        <li>
                            Jerusalem – Gehenna
                            <p className="navi-text">
                                Former entrance, at the moment inaccessible.
                            </p>
                            <img
                                src="/img/Jerusalem_map.svg"
                                width="250"
                                height="auto"
                            />
                        </li>
                        <li>
                            Italy – Solfatara
                            <p className="navi-text">
                                As an alternative you can enter near Neapel at
                                Solfatara. The entrance admission is 8 Euro.
                            </p>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12076.112762627848!2d14.130636134847673!3d40.827344455833504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0ef7024f9a23%3A0x1ef4464f72dd5175!2sSolfatara!5e0!3m2!1sde!2sde!4v1558009384062!5m2!1sde!2sde"
                                width="350"
                                height="300"
                                id="myId"
                                className="myClassname"
                                frameBorder="0"
                                display="initial"
                                style="border:0"
                                position="relative"
                            />
                        </li>
                        <li>
                            Greece – Kap Tenaro
                            <p className="navi-text">
                                The cave near the southern cape used to be home
                                for the Greek underworld god Hades.
                            </p>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629086.6287250011!2d21.76258953183313!3d37.165402115689155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x136203a414419bd7%3A0x515b170fb7a18623!2sKap+Tenaro!5e0!3m2!1sde!2sde!4v1558009637267!5m2!1sde!2sde"
                                width="350"
                                height="300"
                                id="myId"
                                className="myClassname"
                                frameBorder="0"
                                display="initial"
                                style="border:0"
                                position="relative"
                            />
                        </li>
                        <li>
                            Greece – Acheron
                            <p className="navi-text">
                                Acheron is the most popular underworld river,
                                the Charon transported the newly dead soals over
                                it. Acheron exists in the reality and is
                                regarded as a gate to hell. .
                            </p>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167015.7099009203!2d19.644789426703245!3d39.13279277962769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c739cf5013679%3A0x156697cee8a56b6f!2sAcheron!5e0!3m2!1sde!2sde!4v1558009807800!5m2!1sde!2sde"
                                width="350"
                                height="300"
                                id="myId"
                                className="myClassname"
                                frameBorder="0"
                                display="initial"
                                style="border:0"
                                position="relative"
                            />
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <p />

                    <div className="columns-wrapper" />
                    <div className="left-column" />
                    <div className="right-column" />
                </div>
            </section>
        </section>
    );
}
