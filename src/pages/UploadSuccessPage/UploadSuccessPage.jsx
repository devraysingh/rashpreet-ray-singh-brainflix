import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadSuccessPage.scss"

function UploadSuccessPage() {
    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
    
       navigate("/");
    }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="upload-success">
            <h1 className="upload-success__emoji">✅</h1>
            <h2 className="upload-success__message">Upload Successful</h2>
            <h2 className="upload-success__redirect">You will be redirected to the home page.</h2>
        </div>
    )
}

export default UploadSuccessPage;