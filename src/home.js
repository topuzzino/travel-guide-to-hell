import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Player from "./player";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: ""
        };
    }
    render() {
        return (
            <div className="home-container">
                <Player audio="/music/gde_nas_net.mp3" />

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
                                Strictly speaking you are already on your way,
                                because you probably know: your life is nothing
                                else as a flash of firefly in the night. It is
                                useful, to inform yourself in advance what you
                                can expect from your visit to Hell, before it is
                                too late.
                            </p>
                        </div>
                    }
                />
                <section className="main-container">
                    <div className="second-navi">
                        <ul>
                            <li>
                                what to pack
                                <p className="navi-text">
                                    - Fireproof clothes <br />- Gas mask
                                </p>
                            </li>
                            <li>
                                money
                                <p className="navi-text">
                                    Earlier dead souls had to take some coins
                                    with you, but the Christian reforms made the
                                    entrance without any admission.
                                </p>
                            </li>
                            <li>
                                weather
                                <p className="navi-text">
                                    Climat in the Hell could be dangerous: the
                                    highest temperature is up to 444.6° C. It
                                    can&apos;t be higher than that, otherwise
                                    sulfur evaporates. The coldest temperature
                                    could be up to -273,15°. Dress yourself in
                                    &quot;onion&quot; style.
                                </p>
                            </li>
                            <li>
                                how to behave
                                <p className="navi-text">
                                    Behave yourself as unconspicuous and quiet
                                    as possible, but not so unconspicuous that
                                    you could be held for a permanent hell
                                    resident and be kept there alive.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
