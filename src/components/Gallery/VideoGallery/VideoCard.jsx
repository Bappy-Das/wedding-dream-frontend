import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const VideoCard = ({data}) => {
    return (
        <div>
            <div className="overflow-hidden">
              <div className="youtube-container">
                <iframe width="300" height="205" src={data.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
        </div>
    )
}

export default VideoCard