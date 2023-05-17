import "./App.css";
import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BackgroundImg from "./assets/kendra.jpg";

function App() {
  return (
    <AppLayout>
      <img
        src={BackgroundImg}
        alt="background-img"
        className="absolute left-0 right-0 w-full h-[80vh] object-cover"
      />
      <Navbar />
      {/* Creates spacing*/}
      <div className="h-[75vh]" />
      <VideoLibrary />
      <Footer />
    </AppLayout>
  );
}

export default App;
