import "./VideosSelection.scss";
import VideoCard from "../VideoCard/VideoCard";

const  VideosSelection = ({data}) => {

    const videoCards = data.map((videoCard, i) => {
        return (
            <VideoCard
                key={videoCard.id}
                id={videoCard.id}
                author={videoCard.channel}
                title={videoCard.title}
                image={videoCard.image}
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