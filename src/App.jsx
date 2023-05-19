import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import Carousel from "./features/Carousel/Carousel";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";
import AudioLibrary from "./features/audio-library/AudioLibrary/AudioLibrary";
import MovieLibrary from "./features/movies-library/MovieLibrary/MovieLibrary";
import FeedbackAndMapSection from "./features/feedback-and-map/FeedbackAndMapSection/FeedbackAndMapSection";
import LatestWorkSection from "./features/LatestWorkSection/LatestWorkSection";
import WantToBeNextSection from "./features/WantToBeNextSection/WantToBeNext";
import Roadblock from "./features/roadblock/roadblock";
import useSessionStorage from "../hooks/useSessionStorage";
import roadblock2 from "./assets/ad.jpg";
import roadblock from "./assets/roadblock.webp";

function App() {
  //we can set multiple roadblocks and track them based on index
  const [currentRoadblock, setCurrentRoadblock] = useSessionStorage(
    "currentRoadblock",
    0
  );

  //array of roadblocks image links
  const imgLink = [roadblock, roadblock2];

  //close modal and increment the current roadblock index by one
  const closeModal = (e) => {
    e.stopPropagation();
    setCurrentRoadblock(currentRoadblock + 1);
  };

  return (
    <AppLayout>
      {/* roadblock  */}
      {imgLink.length !== 0 &&
        imgLink.map((img, index) => (
          <Roadblock
            key={index}
            isOpen={currentRoadblock === index}
            closeModal={(e) => closeModal(e)}
            imgLink={img}
          />
        ))}
      {/* roadblock  */}
      <HeroSection />
      <Carousel />
      <LatestWorkSection />
      <VideoLibrary />
      <AudioLibrary />
      <WantToBeNextSection />
      <MovieLibrary />
      <div className="border-b border-black w-full mb-10" /> {/* Divider */}
      <FeedbackAndMapSection />
      <Footer />
    </AppLayout>
  );
}

export default App;
