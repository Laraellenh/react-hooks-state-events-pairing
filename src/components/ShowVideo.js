import video from "../data/video.js";

function ShowVideo() {
    return(
        <div>
            <iframe src={video.embedUrl} width="919" height="525"></iframe>
        </div>
    )
}

export default ShowVideo
