import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import Carousel from "./features/Carousel/Carousel";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";
import AudioLibrary from "./features/audio-library/AudioLibrary/AudioLibrary";
import MovieLibrary from "./features/movies-library/MovieLibrary/MovieLibrary";
import FeedbackAndMapSection from "./features/feedback-and-map/FeedbackAndMapSection/FeedbackAndMapSection";
import Roadblock from "./features/roadblock/roadblock";
import useSessionStorage from "../hooks/useSessionStorage";
import WantToBeNext from "./features/video-submission/WantToBeNext/WantToBeNext";
import useFetchBannerList from "./features/Carousel/api/useFetchBanner";
import ArtistProfileSection from "./features/artist-profile/components/ArtistProfileSection/ArtistProfileSection";
import LatestWorkSection from "./features/LatestWorkSection/LatestWorkSection";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopIcon from "./components/ScrollToTop/ScrollToTop";

function App() {
  //we can set multiple roadblocks and track them based on index
  const [currentRoadblock, setCurrentRoadblock] = useSessionStorage(
    "currentRoadblock",
    0
  );

  //array of roadblocks image links
  const imgLink = useFetchBannerList()?.filter(
    (item) => item.roadBlock === true
  );

  //close modal and increment the current roadblock index by one
  const closeModal = () => {
    setCurrentRoadblock(currentRoadblock + 1);
  };

  return (
    <AppLayout>
      <div className="opacity-60 hover:opacity-100 transition-smooth hidden lg:flex">
        <ScrollToTop smooth component={<ScrollToTopIcon />} />
      </div>
      {/* roadblock  */}
      {imgLink?.length !== 0 &&
        imgLink?.map(({ _id, url }, index) => (
          <Roadblock
            key={_id}
            isOpen={currentRoadblock === index}
            closeModal={(e) => closeModal(e)}
            imgLink={url}
          />
        ))}
      {/* roadblock  */}
      <HeroSection />
      <Carousel />
      <LatestWorkSection />
      <VideoLibrary />
      <AudioLibrary />
      <ArtistProfileSection />
      <WantToBeNext />
      <MovieLibrary />
      <div className="border-b border-black w-full mb-20" /> {/* Divider */}
      <FeedbackAndMapSection />
      <Footer />
    </AppLayout>
  );
}

export default App;
