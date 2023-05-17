import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";
// import AudioLibrary from "./features/audio-library/AudioLibrary/AudioLibrary";
import MovieLibrary from "./features/movies-library/MovieLibrary/MovieLibrary";
import LocationFeedback from "./features/location&feedback/LocationFeedback/LocationFeedback";

function App() {
  return (
    <AppLayout>
      <HeroSection />
      <VideoLibrary />
      {/* <AudioLibrary /> */}
      <MovieLibrary />
      <div className="border-b border-black w-full mb-10" /> {/* Divider */}
      <LocationFeedback />
      <Footer />
    </AppLayout>
  );
}

export default App;
