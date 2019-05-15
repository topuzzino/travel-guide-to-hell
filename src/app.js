import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import History from "./history";
import Geography from "./geography";
import Whatthehell from "./whatthehell";
import Inhabitants from "./inhabitants";
import Wayback from "./wayback";
import Header from "./header";
import Timeline from "./timeline";
import Chat2 from "./chat2";

export default function App() {
    return (
        <BrowserRouter>
            <div className="browserRouter-container">
                <Route exact path="/" component={Home} />
                <Route path="/history" component={History} />
                <Route path="/geography" component={Geography} />
                <Route path="/whatthehell" component={Whatthehell} />
                <Route path="/inhabitants" component={Inhabitants} />
                <Route path="/chat2" component={Chat2} />
                <Route path="/wayback" component={Wayback} />
            </div>
        </BrowserRouter>
    );
}
