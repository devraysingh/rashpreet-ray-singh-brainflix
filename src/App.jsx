import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UploadSuccessPage from "./pages/UploadSuccessPage/UploadSuccessPage"

function App() {
  //React re-rendering the app
  return (
    <div className="App">
      {/* App Routes */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<HomePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
          <Route path="/uploaded" element={<UploadSuccessPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
