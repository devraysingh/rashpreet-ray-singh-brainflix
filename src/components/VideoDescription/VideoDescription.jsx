import "./VideoDescription.scss";
import views from "../../assets/images/icons/views.svg"
import likes from "../../assets/images/icons/likes.svg"

const VideoDescription = (props) => {
    //VideoDescription Component 
    let videoDate = new Date(props.data.timestamp);    
    return (
        <div className="video-info">
            <h1 className="video-info__title">{props.data.title}</h1>
            <div className="video-info__details">
                <div className="video-info__left-container">
                    <p className="video-info__author">By {props.data.channel}</p>
                    <p className="video-info__date">{videoDate.toLocaleDateString('en-us')}</p>
                </div>
                <div className="video-info__right-container">
                    <div className="video-info__views-container">
                        <img className="video-info__views-icon" src={views} alt="View Count icon to support text"/>
                        <p className="video-info__views">{props.data.views}</p>
                    </div>
                    <div className="video-info__likes-container">
                        <img className="video-info__likes-icon" src={likes} alt="Heart icon for likes count text"/>
                        <p className="video-info__likes">{props.data.likes}</p>
                    </div>
                </div>
            </div>
            <div className="video-info__description-container">
                <p className="video-info__description">{props.data.description}</p>
            </div>
            <p className="video-info__comments">{props.data.comments.length} Comments</p>
        </div>
    );

};

export default VideoDescription;