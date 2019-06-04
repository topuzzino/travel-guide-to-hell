import React, { Component } from "react";

export default class WhosOnlineListItem extends Component {
    render() {
        const styles = {
            li: {
                display: "flex",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 25,
                fontSize: 20
            },
            div: {
                borderRadius: "50%",
                width: 20,
                height: 20,
                marginRight: 20
            }
        };
        return (
            <li style={styles.li}>
                <div
                    style={{
                        ...styles.div,
                        backgroundColor:
                            this.props.presenceState === "online"
                                ? "#00797d"
                                : "#414756"
                    }}
                />
                {this.props.children}
            </li>
        );
    }
}
