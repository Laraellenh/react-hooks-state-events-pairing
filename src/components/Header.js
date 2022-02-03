import video from '../data/video'
import React, {useState} from "react"

function Header(){

        const [likes, setLikes] = useState(video.upvotes)
        const [disLikes, setDisLikes] = useState(video.downvotes)

        const [commentShowing, setShowing] = useState(false)


    return(
        <div>
            <h1> {video.title} </h1>
            <h2> {video.views} | {video.createdAt} </h2>
            <button onClick = {()=> setLikes(likes + 1)}>{likes} 👍</button>
            <button onClick={()=> setDisLikes(disLikes - 1)}>{disLikes} 👎</button>
            <div>
            <button onClick={setShowing}> show comments </button>
            </div>
            <br></br>
        </div> 
        )
}

export default Header
