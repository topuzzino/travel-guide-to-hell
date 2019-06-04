import React from "react";

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        };
        this.play = this.play.bind(this);
    }

    componentDidMount() {
        this.setState({ play: true });
        this.audio.addEventListener("timeupdate", () => {
            let ratio = this.audio.currentTime / this.audio.duration;
            let position = this.timeline.offsetWidth * ratio;
            this.positionHandle(position);
        });
    }
    positionHandle(position) {
        var self = this;
        let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
        let handleLeft = position - this.timeline.offsetLeft;

        if (handleLeft >= 0 && handleLeft <= timelineWidth) {
            self.handle.style.marginLeft = handleLeft + "px";
        }
        if (handleLeft < 0) {
            self.handle.style.marginLeft = "0px";
        }
        if (handleLeft > timelineWidth) {
            self.handle.style.marginLeft = timelineWidth + "px";
        }
    }

    mouseMove(e) {
        this.positionHandle(e.pageX);
        this.audio.currentTime =
            (e.pageX / this.timeline.offsetWidth) * this.audio.duration;
    }

    mouseUp(e) {
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.mouseUp);
    }

    mouseDown(e) {
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.mouseUp);
    }

    play() {
        if (this.state.play) {
            this.setState({ play: false });
            this.audio.pause();
        } else {
            this.setState({ play: true });
            this.audio.play();
        }
    }
    render() {
        var self = this;
        return (
            <div className="audio-container">
                <audio
                    src={this.props.audio}
                    ref={audio => {
                        this.audio = audio;
                    }}
                    autoPlay
                />
                <div
                    onClick={this.play}
                    className={
                        !this.state.play ? "icon ion-play" : "icon ion-pause"
                    }
                />
                <div
                    id="timeline"
                    onClick={self.mouseMove}
                    ref={timeline => {
                        self.timeline = timeline;
                    }}
                >
                    <div
                        id="handle"
                        onMouseDown={this.mouseDown}
                        ref={handle => {
                            this.handle = handle;
                        }}
                    />
                </div>
            </div>
        );
    }
}
