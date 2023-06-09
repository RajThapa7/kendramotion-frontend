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
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ArtistListPage from "./features/artist-profile/components/ArtistListPage/ArtistListPage";
import ArtistInfoPage from "./features/artist-profile/components/ArtistInfoPage/ArtistInfoPage";
import OurTeamSection from "./features/OurTeamSection/OurTeamSection";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/videos"
            element={<VideoLibrary className="mt-28" heading="Videos" />}
          />
          <Route
            path="/artists"
            element={<ArtistListPage className="mt-28" />}
          />
          <Route
            path="/artist/:id"
            element={<ArtistInfoPage className="mt-28" />}
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
      <RoadBlock />
      <HeroSection />
      <Carousel />
      <LatestWorkSection />
      <ArtistProfileSection />
      <VideoLibrary maxItems={8} />
      <AudioLibrary />
      <WantToBeNext />
      <MovieLibrary />
      <OurTeamSection />
      <div className="border-b border-black w-full mb-20" /> {/* Divider */}
      <FeedbackAndMapSection />
      <Footer />
    </>
  );
}

function RoadBlock() {
  const [currentRoadblock, setCurrentRoadblock] = useSessionStorage(
    "currentRoadblock",
    0
  );

  //array of roadblocks image links
  const imgLink = useFetchBannerList().data?.filter(
    (item) => item.roadBlock === true
  );

  //close modal and increment the current roadblock index by one
  const closeModal = () => {
    setCurrentRoadblock(currentRoadblock + 1);
  };

  return (
    <>
      {imgLink?.length !== 0 &&
        imgLink?.map(({ _id, url }, index) => (
          <Roadblock
            key={_id}
            isOpen={currentRoadblock === index}
            closeModal={(e) => closeModal(e)}
            imgLink={url}
          />
        ))}
    </>
  );
}

export default App;
