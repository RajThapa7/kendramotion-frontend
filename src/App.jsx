import "./App.css";
import VideoLibrary from "./features/video-library/VideoLibrary/VideoLibrary";
import AppLayout from "./layouts/AppLayout/AppLayout";

function App() {
  return (
    <AppLayout>
      <VideoLibrary />
    </AppLayout>
  );
}

export default App;
