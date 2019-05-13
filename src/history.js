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
                            Genaugenommen sind Sie eigentlich bereits auf dem
                            Weg, denn Sie wissen ja: Ihr hiesiges Leben ist
                            nichts anderes als das Aufleuchten eines Glühwurms
                            bei Nacht oder eben: ein Wanderpfad ins Jenseits. Es
                            wäre also klug, sich schon ein wenig in der Hölle
                            umzusehen, bevor es zu spät ist. Es lohnt sich.
                        </p>
                    </div>
                }
            />
        </section>
    );
}
