import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import TimelineData from "./timeline";
import TimelineItem from "./timelineItem";

export default function Timeline() {
    return (
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    );
}
