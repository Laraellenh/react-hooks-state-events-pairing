import React from 'React'
import data from '../data/video'

function Header(video){
    const {title, views, createdAt, upvotes, downvotes, comments, id, embedUrl} = video
    return(
    <div>
        <h1> {title} </h1>
    </div> 
    )
}

export default Header