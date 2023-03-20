import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadForm from "../../components/UploadForm/UploadForm";

const VideoUploadPage = () => {
  const navigate = useNavigate();

  const postVideo = async (e) => {
    try {
        await axios.post("http://localhost:8080/videos", {
            title: e.target.title?.value,
            description: e.target.description?.value,
        });
    } catch (error) {
      console.log("Video Upload Post Error:" + error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postVideo(e)
    navigate('/uploaded', { replace: true })
  }

  return (
    <div className="upload-form__container">
      <h1 className="upload-form__title">Upload Video</h1>
      <UploadForm handleSubmit={handleSubmit}/>
    </div>
  );
};

export default VideoUploadPage;
