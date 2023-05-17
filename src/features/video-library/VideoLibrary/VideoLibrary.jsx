import { useState } from "react";
import Button from "../../../components/Button/Button";
import MyModal from "../../../components/Modal/Modal";
import VideoCards from "../VideoCards/VideoCards";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function VideoLibrary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <h3 className="text-2xl font-medium mb-5">Video Library {">"}</h3>
      <VideoCards
        onClick={(id) => {
          setIsModalOpen(true);
          setSelectedVideo(id);
        }}
      />
      <div className="mt-10 flex justify-center">
        <Button>View More</Button>
      </div>
    </div>
  );
}
