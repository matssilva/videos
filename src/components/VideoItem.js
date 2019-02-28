import '../css/VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
   return (
      <div className="video-item item">
         <img className="ui image" src={video.snippet.thumbnails.default.url} />
         <div class="content">
            <div class="header">{video.snippet.title}</div>
         </div>
      </div>
   );
};

export default VideoItem;
