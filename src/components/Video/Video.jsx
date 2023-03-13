import "./Video.scss"
//Video Component 
function Video({data}){
    return(
        //Returning a Video Container, with Video Player with in it.
        <div className="video">
            <video className="video__player" poster={data.image} controls></video>
        </div>
    );
};

export default Video;