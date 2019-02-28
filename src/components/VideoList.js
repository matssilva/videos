import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
   const videosList = videos.map(video => {
      return (
         <VideoItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}
         />
      );
   });
   return <div className="ui relaxed divided list">{videosList}</div>;
};

export default VideoList;
