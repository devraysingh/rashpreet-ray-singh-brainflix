import "./HomePage.scss";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsSection from "../../components/CommentsSection/CommentsSections";
import VideosSelection from "../../components/VideosSelection/VideosSelection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage";

const HomePage = () => {
  //App State
  const [video, setVideo] = useState(null);
  const [videoLibrary, setVideoLibrary] = useState([]);
  const { id } = useParams();
  const defaultId = !!videoLibrary.length && videoLibrary[0].id;
  const selectedId = id ? id : defaultId;

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"})
  };
  //Function Fetch Video Library
  const fetchLibrary = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/videos"
      );
      setVideoLibrary(data);
      console.log(data);
    } catch (error) {
      console.log("Video Library Fetch Error:" + error);
    }
  };
  //Function Fetch Video Details given a Id
  const fetchVideo = async (videoId) => {
    try {
      if (videoId !== "") {
        const { data } = await axios.get(
          `http://localhost:8080/videos/${videoId}/`
        );
        setVideo(data);
        scroll()
      }
    } catch (error) {
      console.log("Video Fetch Error" + error);
    }
  };
  //useEffect Function 
  useEffect(() => {
    if(videoLibrary.length === 0){
        fetchLibrary();
    } else {
      fetchVideo(selectedId)
    }
  }, [videoLibrary, selectedId]);

  //HomePage JSX
  return (
    (video === null) ? <LoadingMessage/> : ( 
      <>
        <Video data={video} />
        <div className="row">
          <div className="desktop">
            <VideoDescription className="desktop__description" data={video} />
            <CommentsSection className="desktop__comments" data={video} />
          </div>
          <VideosSelection
            className="row__videos"
            data={videoLibrary.filter(v => v.id !== selectedId)}
          />
        </div>
      </> 
    )
  );
}

export default HomePage;
