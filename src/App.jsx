import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";
import FeedbackandMapSection from "./features/FeedbackandMapSection/FeedbackandMapSection";

function App() {
  return (
    <AppLayout>
      <HeroSection />
      <VideoLibrary />
      <div className="w-full h-[1px] mt-12 mb-0 bg-gray-400 bg-black rounded-full"></div>
      <FeedbackandMapSection />
      <Footer />
    </AppLayout>
  );
}

export default App;
