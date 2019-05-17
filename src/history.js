import React from "react";
import ReactDOM from "react-dom";
import { Link, Route } from "react-router-dom";
import Header from "./header";
import Timeline from "./timeline";

export default function History() {
    return (
        <section className="history-container">
            <Header
                titel={
                    <h1>
                        How long <br />
                        does hell exist
                    </h1>
                }
                headertext={
                    <div className="header-text">
                        <p>
                            The &quot;other&quot; world is the oldest cultural
                            landscape of the mankind: since 50.000 years we have
                            been burring our dead corpses - and since we humans
                            put burrial gifts in burial grounds, it was possible
                            for the dead ones to live after their deaths.
                        </p>
                    </div>
                }
            />
            <section className="main-container">
                <div className="second-navi">
                    <h2>Timeline</h2>
                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 300.000–200.000 to 40.000</time>
                                <p>
                                    <strong>Paleolithic</strong>
                                    <br />
                                    Middle Palaeolithic
                                </p>
                                <p>
                                    The first inhabitants populated the other
                                    world in Middle Palaeolithic. They were
                                    Neandertals - the oldest known population
                                    group of migrants. According to excavations
                                    the first inhabitants of the other world
                                    lived there without head, but with bears.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 40.000 to 10.000</time>
                                <p>
                                    <strong>Paleolithic</strong>
                                    <br />
                                    Upper Palaeolithic
                                </p>
                                <p>
                                    Neandertals disapeared approximately 22.000
                                    BC. Since that time the immigration was
                                    numerous, the cultural life and the
                                    economics became extensive. VIP dead souls
                                    took with them everything they got used:
                                    instruments, armor or slaves to continue
                                    their lifes afterwards. In that time
                                    approximately 100.000 people died per year.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 10.000 to 8.000</time>
                                <p>
                                    <strong>Middle stone age</strong>
                                </p>
                                <p>
                                    The other world oped it&apos;s doors not
                                    only for aristocrats and VIP persons, but
                                    also for the majority. Democratization
                                    process starts in the middle stone age.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 8.000 to 5.000</time>
                                <p>
                                    <strong>Neolithic Age</strong>
                                </p>
                                <p>
                                    Democratic explosion in Other World.
                                    Bureaucratic system developed, the courts
                                    were fully occupied, the laws came into
                                    force.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>
                                    Regional different from 5.000–3.000 – 2.200
                                </time>
                                <p>
                                    <strong>Copper Age</strong>
                                </p>
                                <p>
                                    Greek other world was conquert by
                                    Christians, afterwards annexed and
                                    futhermore functioned as a part of christian
                                    hereafter, together with pergatory and
                                    paradise.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>800 – 1 v.Ch</time>
                                <p>
                                    <strong>Iron Age & Early History</strong>
                                </p>
                                <p>
                                    Only after the invention of the jurisdiction
                                    the paradise were established as a promise
                                    for good deeds and hell as a way of threaten
                                    and punishment.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>Now</time>
                                <p>
                                    <strong>Modern world</strong>
                                </p>
                                <p>
                                    In our modern world there is a globalised
                                    hell and globalised paradise. Greek gods are
                                    sitting together with scandinavic Valkyries,
                                    celtic and egyptian men populate same
                                    hunting places.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
