import "./Video.scss"
//Video Component 
function Video(props){
    return(
        //Returning a Video Container, with Video Player with in it.
        <div className="video">
            <video className="video__player" poster={props.data.image} controls></video>
        </div>
    );
};

export default Video;