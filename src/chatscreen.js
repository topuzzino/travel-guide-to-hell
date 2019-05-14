import React, { Component } from "react";
import Chatkit from "@pusher/chatkit-client";
import MessagesList from "./messageList";
import SendMessageForm from "./sendMessageForm";
import TypingIndicator from "./typingIndicator";
import WhosOnlineList from "./whosOnlineList";

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: []
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.sendTypingEvent = this.sendTypingEvent.bind(this);
    }
    sendTypingEvent() {
        this.state.currentUser
            .isTypingIn({ roomId: this.state.currentRoom.id })
            .catch(error => console.error("error", error));
    }
    sendMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        });
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: "v1:us1:5158c43b-16e7-4863-bcbb-2066676b937f",
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: "http://localhost:8080/authenticate"
            })
        });

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser });
                return currentUser.subscribeToRoom({
                    roomId: "19431699",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            });
                        },
                        onUserStartedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: [
                                    ...this.state.usersWhoAreTyping,
                                    user.name
                                ]
                            });
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                                    username => username !== user.name
                                )
                            });
                        },
                        onPresenceChange: () => this.forceUpdate()
                    }
                });
            })
            .then(currentRoom => {
                this.setState({ currentRoom });
            })
            .catch(error => console.error("error", error));
    }
    render() {
        const styles = {
            container: {
                height: "100vh",
                display: "flex",
                flexDirection: "column"
            },
            chatContainer: {
                display: "flex",
                flex: 1
            },
            whosOnlineListContainer: {
                width: "300px",
                flex: "none",
                padding: 20,
                backgroundColor: "#101456",
                color: "white"
            },
            chatListContainer: {
                padding: 20,
                width: "85%",
                display: "flex",
                flexDirection: "column"
            }
        };

        return (
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.whosOnlineListContainer}>
                        <h2>Who is online</h2>
                        <WhosOnlineList
                            currentUser={this.state.currentUser}
                            users={this.state.currentRoom.users}
                        />
                    </aside>
                    <section style={styles.chatListContainer}>
                        <h2>Chat</h2>
                        <MessagesList
                            messages={this.state.messages}
                            style={styles.chatList}
                        />
                        <TypingIndicator
                            usersWhoAreTyping={this.state.usersWhoAreTyping}
                        />
                        <SendMessageForm
                            onSubmit={this.sendMessage}
                            onChange={this.sendTypingEvent}
                        />
                    </section>
                </div>
            </div>
        );
    }
}
export default ChatScreen;
