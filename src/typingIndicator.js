import React, { Component } from "react";

export default class TypingIndicator extends Component {
    render() {
        console.log("mrrrrrrr", this.props);

        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <div className="typingIndicator-container">
                    {`${this.props.usersWhoAreTyping
                        .slice(0, 2)
                        .join(" and ")} is typing`}
                </div>
            );
        } else {
            return <div />;
        }
    }
}
