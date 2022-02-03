// import React, {useState} from "React"
import video from '../data/video'



function Comments() {

    function totalComments() {
        const numberCo = video.comments.length
        return(
            <h1>{numberCo} Comments</h1>
        )
    }


    const comment = video.comments.map( comment => {
        return (
        <div>
            <h1 key={comment.id}>{comment.comment}</h1>
            <h2 key={comment.user}>{comment.user}</h2>
        </div>
        )
})

    return(
        <div>
            <h1>{totalComments()}</h1>
            {comment}
        </div>
    )
}

export default Comments