import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Home(props) {
    console.log("props in home: ", props.children);
    return (
        <div className="home-container">
            <Header
                titel={
                    <h1>
                        Because <br />
                        earlier or later <br />
                        you have to go there...
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

            <section className="main-container">
                <div className="second-navi">
                    <ul>
                        <li>what to pack</li>
                        <li>money</li>
                        <li>weather</li>
                        <li>how to behave</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
