const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const uuidv4 = require("uuid/v4");
const Chatkit = require("@pusher/chatkit-server");
const path = require("path");
const chatkit = new Chatkit.default(require("./config.js"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
app.use(compression());
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 24 * 14,
        secret: "I'm always angry"
    })
);
app.use(require("body-parser").json());
app.use(express.static(__dirname + "/public")); // for all static files

// ---------------- ROUTES ----------------
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
