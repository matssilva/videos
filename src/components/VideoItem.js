import '../css/VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
   return (
      <div className="video-item item" onClick={() => onVideoSelect(video)}>
         <img
            className="ui image"
            alt={video.snippet.description}
            src={video.snippet.thumbnails.default.url}
         />
         <div className="content">
            <div className="header">{video.snippet.title}</div>
         </div>
      </div>
   );
};

export default VideoItem;
