import React, { Component } from "react";
import WhosOnlineListItem from "./whosOnlineListItem";

export default class WhosOnlineList extends Component {
    renderUsers() {
        console.log("this.props.users: ", this.props.users);
        return (
            <ul>
                {this.props.users.map((user, index) => {
                    console.log(
                        "user.presenceStore.Jesus: ",
                        user.presenceStore.Jesus
                    );
                    if (user.id === this.props.currentUser.id) {
                        return (
                            <WhosOnlineListItem
                                key={index}
                                presenceState="online"
                            >
                                {user.name} (You)
                            </WhosOnlineListItem>
                        );
                    }
                    if (user.name === "Dante") {
                        return (
                            <WhosOnlineListItem
                                key={index}
                                presenceState="online"
                            >
                                {user.name}
                            </WhosOnlineListItem>
                        );
                    }
                    return (
                        <WhosOnlineListItem
                            key={index}
                            presenceState={user.presence.state}
                        >
                            {user.name}
                        </WhosOnlineListItem>
                    );
                })}
            </ul>
        );
    }

    render() {
        if (this.props.users) {
            return this.renderUsers();
        } else {
            return <p>Loading...</p>;
        }
    }
}
