import "./video.css"


function Video (){
    return (
        <video controls muted autoPlay>
            <source src="./img/video.mp4" type="video/mp4"/> 
        </video>
    ) ;
}

export default Video 