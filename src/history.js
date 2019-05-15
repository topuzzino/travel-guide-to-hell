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
                                    <strong>Altsteinzeit</strong>
                                    <br />
                                    Mittelpaläolithikum
                                </p>
                                <p>
                                    Die ersten Einwohner bevölkerten das
                                    Jenseits bereits im Mittelpaläolithikum. Sie
                                    gehörten zu den Neandertalern - eine Art der
                                    Gattung Homo. Die älteste bekannte Gruppe
                                    von Einwanderer: besteht aus ca. 30
                                    Menschen, gefunden in der Höhle Cueva-Mayor
                                    in Sierra Atapuerca in Spanien. Laut
                                    Ausgrabungen lebten die ersten Einwohner im
                                    Jenseits ohne Kopf, aber mit Bären.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 40.000 to 10.000</time>
                                <p>
                                    <strong>Altsteinzeit</strong>
                                    <br />
                                    Jungpaläolithikum
                                </p>
                                <p>
                                    Neandertaler verschwinden ca. 22.000 v. Chr.
                                    Seit der Epoche des Jungpaläolithikums wurde
                                    die Zuwanderung zahlreicher und das
                                    kulturelle Leben und die Wirtschaft
                                    umfangreicher. Adlige Verstorbene nahmen je
                                    nach ihrer Beschäftigung während des Lebens
                                    Werkzeuge, Steingeräte, Lanzen oder
                                    Wurfspieße mit, um ihre Arbeit im Jenseits
                                    fortzusetzen. Aber das wertvollste war
                                    Schmuck. Zu der Zeit starben ca. 100.000
                                    Menschen jährlich (allerdings ist diese
                                    Information sehr kontrovers und ungefähr).
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 10.000 to 8.000</time>
                                <p>
                                    <strong>Mittelsteinzeit</strong>
                                </p>
                                <p>
                                    Das Jenseits öffnete seine Türen nicht nur
                                    für Adlige und Auserwählte, sondern auch für
                                    die Mehrheit. Demokratisierungsprozess: die
                                    Tendenz fing in der Mittelsteinzeit und
                                    verbreitet in der Jungsteinzeit.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>From 8.000 to 5.000</time>
                                <p>
                                    <strong>Jungsteinzeit</strong>
                                </p>
                                <p>
                                    Demokratische Explosion im Jenseits. In der
                                    Jenseits-Welten von Ägypten, Mesopotamien
                                    und China lief längst die Geschichte: die
                                    ersten unterirdischen Staaten tauchten auf,
                                    bürokratische Systeme entwickelten sich, die
                                    Gerichte waren voll beschäftigt, die Gesetze
                                    traten in Kraft.
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
                                    <strong>Kupfersteinzeit</strong>
                                </p>
                                <p>
                                    Hades wurde von Christen erobert und
                                    anschließend annektiert und weiterhin
                                    funktionierte als Teil des christlichen
                                    Jenseits, zusammen mit Fegefeuer und Himmel.
                                    Himmel platzierte sich zuerst auf der Erde
                                    (und zwar auf der Fläche von Eden in Asien)
                                    und wurde einem bestimmten geografischen
                                    Punkt zugeordnet.
                                </p>
                                <span className="circle" />
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-item-content">
                                <time>800 – 1 v.Ch</time>
                                <p>
                                    <strong>Eisenzeit & Frühgeschichte</strong>
                                </p>
                                <p>
                                    Erst mit der irdischen Erfindung der
                                    Gerichtsbarkeit (und vor allem mit der
                                    Entdeckung ihrer Unzulänglichkeit)
                                    etablierte man als Versprechen für gute
                                    Taten das Paradies und als Drohmittel die
                                    Strafhölle.
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
                                    In einer globalisierten Welt gibt es
                                    mittlerweile natürlich auch eine
                                    globalisierte Hölle und ein globalisiertes
                                    Paradies. Griechische Unterweltgötter sitzen
                                    zusammen neben skandinavischen Walküren,
                                    keltische und ägyptische Männer bewohnen
                                    dieselben Jagdgründe.
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
