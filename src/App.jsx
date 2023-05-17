import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";
// import AudioLibrary from "./features/audio-library/AudioLibrary/AudioLibrary";
import MovieLibrary from "./features/movies-library/MovieLibrary/MovieLibrary";
import FeedbackAndMapSection from "./features/feedback-and-map/FeedbackAndMapSection/FeedbackAndMapSection";

function App() {
  return (
    <AppLayout>
      <HeroSection />
      <VideoLibrary />
      {/* <AudioLibrary /> */}
      <MovieLibrary />
      <div className="border-b border-black w-full mb-10" /> {/* Divider */}
      <FeedbackAndMapSection />
      <Footer />
    </AppLayout>
  );
}

export default App;
