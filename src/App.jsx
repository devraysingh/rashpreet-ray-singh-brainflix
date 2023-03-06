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

  const [video, setVideo] = useState(videosData[0]); 
  const [videoComment, setVideoComment] = useState(videosDetailsData[0]); 
  const [videoLibrary, setVideoLibrary] = useState(videosData);

  const newMainVideo = (id) => {

    const newVideo = videosData.filter(v => v.id === id);
    const newComments = videosDetailsData.filter(v => v.id === id);
    setVideo(newVideo[0])
    setVideoLibrary(videosData.filter(v => v.id !== id))
    setVideoComment(newComments[0])


  };

  useEffect(() => {
  const scrollToTop = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 10);
    }
  };
  scrollToTop();
  }, [video]);


  return (
    <div className="App">
  
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
