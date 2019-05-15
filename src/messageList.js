import React, { Component } from "react";

export default class MessagesList extends Component {
    render() {
        const styles = {
            container: {
                flex: 1
            },
            ul: {
                listStyle: "none",
                overflowY: "scroll",
                height: 500
            },
            li: {
                marginTop: 13,
                marginBottom: 25
            },
            senderUsername: {
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 18,
                margin: 0
            },
            message: {
                fontSize: 18,
                backgroundColor: "#ededed",
                padding: 15,
                display: "inline",
                borderRadius: 25
            }
        };
        return (
            <div
                style={{
                    ...this.props.style,
                    ...styles.container
                }}
            >
                <ul style={styles.ul}>
                    {this.props.messages.map((message, index) => (
                        <li key={index} style={styles.li}>
                            <div className="username-container">
                                <span style={styles.senderUsername}>
                                    {message.senderId}
                                </span>{" "}
                            </div>
                            <p style={styles.message}>{message.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
