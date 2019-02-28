import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  console.log(videos);
  const videosList = videos.map(video => {
    return <VideoItem key={video.etag} video={video} />;
  });
  return <div className="ui relaxed divided list">{videosList}</div>;
};

export default VideoList;
