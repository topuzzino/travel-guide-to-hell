const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const uuidv4 = require("uuid/v4");
const Chatkit = require("@pusher/chatkit-server");
const chatkit = new Chatkit.default(require("./config.js"));
const bodyParser = require("body-parser");

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public")); // for all static files

// ---------------- ROUTES ----------------
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// ---------------- CHATKIT CODE ---- start ------------
app.post("/users", (req, res) => {
    const { username } = req.body;
    chatkit
        .createUser({
            id: username,
            name: username
        })
        .then(() => res.sendStatus(201))
        .catch(error => {
            if (error.error === "services/chatkit/user_already_exists") {
                res.sendStatus(200);
            } else {
                res.status(error.status).json(error);
            }
        });
});

app.post("/authenticate", (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id });
    res.status(authData.status).send(authData.body);
});
// ---------------- CHATKIT CODE --- finish -------------

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
