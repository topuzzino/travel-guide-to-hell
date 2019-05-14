import React, { Component } from "react";

class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    onChange(e) {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div className="usernameForm-container">
                <div>
                    <h2>Want to chat? Introduce yourself</h2>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Your name"
                            onChange={this.onChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default UsernameForm;
