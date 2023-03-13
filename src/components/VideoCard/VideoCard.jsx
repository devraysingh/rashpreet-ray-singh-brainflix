 import "./VideoCard.scss";
 import { Link } from "react-router-dom";

const VideoCard = ({id, image, title, author}) => {
    return (
        <Link to={`/video/${id}`} key={id} className="video-card" >
            <img className="video-card__image" src={image} alt={`${title} video thumbnail`}/>
            <div className="video-card__info">
                <p className="video-card__title">{title}</p>
                <p className="video-card__author">{author}</p>
            </div>
        </Link>
    );

};

export default VideoCard;