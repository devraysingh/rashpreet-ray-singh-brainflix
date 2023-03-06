import "./VideosSelection.scss";
import VideoCard from "./VideoCard";

const  VideosSelection = (props) => {

    const videoCards = props.data.map((videoCard, i) => {
        return (
            <VideoCard
                key={videoCard.id}
                id={videoCard.id}
                author={videoCard.channel}
                title={videoCard.title}
                image={videoCard.image}
                handleVideo={props.handleVideo}
            />
        );
    });

    return (
        <div className="videos-selection">
            <p className="videos-selection__title">NEXT VIDEO</p>
            {videoCards}
        </div>
    );

};

export default VideosSelection;