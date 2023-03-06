 import "./VideoCard.scss";

const VideoCard = (props) => {
    return (
        <div key={props.id} className="video-card" onClick={() => props.handleVideo(props.id)}>
            <img className="video-card__image" src={props.image} alt={`${props.title} video thumbnail`}/>
            <div className="video-card__info">
                <p className="video-card__title">{props.title}</p>
                <p className="video-card__author">{props.author}</p>
            </div>
        </div>
    );

};

export default VideoCard;