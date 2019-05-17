import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./header";

export default function Whatthehell() {
    return (
        <section className="whatthehell-container">
            <Header
                titel={
                    <h1>
                        Short facts <br />
                        you&apos;d like to know
                    </h1>
                }
            />
            <section className="main-container">
                <div className="second-navi">
                    <ul>
                        <li>
                            Politics
                            <p className="navi-text">
                                This subject is less researched, the majority of
                                systems are absolut monarchy.
                            </p>
                        </li>
                        <li>
                            Growth
                            <p className="navi-text">
                                At the moment the amount of inhabitants is
                                increasing by 50 million per year.
                            </p>
                        </li>
                        <li>
                            Demography
                            <p className="navi-text">
                                Since the beginning of times 106 milliard people
                                were born and died. Approximately 99,993% of all
                                dead souls went to the hell, only 0,005% in the
                                purgatory and 0,002% in the paradise.
                            </p>
                        </li>

                        <li>
                            Employment
                            <p className="navi-text">
                                Depends on region: in Greek department music and
                                singing are the main activities, the
                                scandinavian department Walhall is famous for
                                it&apos;s militar activities.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}
