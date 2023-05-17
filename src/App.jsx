import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Footer from "./components/Footer/Footer";
import HeroSection from "./features/hero-section/HeroSection/HeroSection";

function App() {
  return (
    <AppLayout>
      <HeroSection />
      <VideoLibrary />
      <Footer />
    </AppLayout>
  );
}

export default App;
