import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/images/upload-video-preview.jpg"
import "./UploadForm.scss"

export default function UploadForm({ handleSubmit }) {
    //Instance of useNavigate for Cancel Button
    const navigate = useNavigate();

    return (
        //Form JSX Component
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
                <button className="upload-form__btn-submit">PUBLISH</button>
                <button className="upload-form__btn-cancel" onClick={() => navigate('/', { replace: true })}>CANCEL</button>
            </div> 
        </form>
    )
}
