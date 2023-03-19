import "./VideoUploadPage.scss";
import logo from "../../assets/images/images/upload-video-preview.jpg"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VideoUploadPage = () => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    postVideo(e)
    navigate('/uploaded', { replace: true })
  }
  const postVideo = async (e) => {
    try {
        await axios.post("http://localhost:8080/videos", {
            title: e.target.title?.value,
            description: e.target.description?.value,
        });
    } catch (error) {
      console.log("Error 404: Video Upload Post " + error);
    }
  };


  return (
    <div className="upload-form__container">
      <h1 className="upload-form__title">Upload Video</h1>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="upload-form__img-container">
          <label className="upload-form__img-label" htmlFor="thumbnail">VIDEO THUMBNAIL</label>
          <img className="upload-form__img" src={logo} alt="" name="thumbnail"/>
        </div>
        <div className="upload-form__details">
          <div className="upload-form__title-container">
            <label className="upload-form__title-label" htmlFor="title">TITLE YOUR VIDEO</label>
            <input className="upload-form__title-input" name="title" placeholder="Add a title to your video" required></input>
          </div>
          <div className="upload-form__des-container">
            <label className="upload-form__des-label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
            <input className="upload-form__des-input" name="description" placeholder="Add a description to your video" required></input>
          </div>
        </div>
        <div className="upload-form__btn-container">
          <button className="upload-form__btn-submit" >PUBLISH</button>
          <button className="upload-form__btn-cancel" onClick={() => navigate('/', { replace: true })}>CANCEL</button>
        </div> 
      </form>
    
    </div>
  );
};

export default VideoUploadPage;
