import React from 'react';

const VideoListItem = ({ videos, onVideoSelect }) => {
    //console.log(videos);
    const imgUrl = videos.snippet.thumbnails.default.url;
    return (
        //onClick: click to a video and update 
        <li onClick={() => onVideoSelect(videos)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imgUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{videos.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;