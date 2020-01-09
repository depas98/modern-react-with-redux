import React from "react";
import VideItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map( v => {
        return <VideItem key={v.id.videoId} onVideoSelect={onVideoSelect} video={v}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;