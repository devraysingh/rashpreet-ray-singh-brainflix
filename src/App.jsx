import './App.scss';
import Header from "./components/Header/Header"
import videosData from "./data/videos.json"
import videosDetailsData from "./data/video-details.json"
import Video from "./components/Video/Video"
import VideoDescription from "./components/VideoDescription/VideoDescription"
import VideosSelection from './components/VideosSelection/VideosSelection';
import CommentsSection from './components/CommentsSection/CommentsSections';
import { useState, useEffect } from 'react';

function App() {
  //App State 
  const [video, setVideo] = useState(videosData[0]); 
  const [videoComment, setVideoComment] = useState(videosDetailsData[0]); 
  const [videoLibrary, setVideoLibrary] = useState(videosData);

  //Handles New Video Click
  const newMainVideo = (id) => {
    const newVideo = videosData.find(v => v.id === id);
    const newComments = videosDetailsData.find(v => v.id === id);
    setVideo(newVideo);
    setVideoLibrary(videosData.filter(v => v.id !== id));
    setVideoComment(newComments);
  };
  //useEffect is call back hook for when video state changes for scroll top animation
  useEffect(() => {
    const scrollToTop = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 25);
      }
  };
  scrollToTop();
  }, [video]);

  //React re-rendering the app 
  return (
    <div className="App">
        {/* App Child Components for the App */}
        <Header />
        <Video data={video} />
        <div className="row">
          <div className="desktop">
            <VideoDescription className="desktop__description" data={videoComment} />
            <CommentsSection className="desktop__comments" data={videoComment}/>
          </div>
          <VideosSelection className="row__videos" data={videoLibrary} handleVideo={newMainVideo}/>
        </div>
    </div>
  );
}

export default App;
