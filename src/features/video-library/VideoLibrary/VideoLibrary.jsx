import { useState } from "react";
import MyModal from "../../../components/Modal/Modal";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../VideoCard/VideoCard";
import useFetchVideos from "../api/useFetchVideos";
import LoadingSkeleton from "../../../components/LoadingSkeleton/LoadingSkeleton";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import classNames from "../../../utils/classNames";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

export default function VideoLibrary({ maxItems, className = "", heading }) {
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoQuery = useFetchVideos();

  if (videoQuery.isLoading) {
    return <LoadingSkeleton className={classNames("mb-5", className)} />;
  }

  if (videoQuery.isError) {
    return <p></p>;
  }

  const videos = videoQuery?.data;

  let newVideos;
  // limit videos upto maxItems if provided
  if (maxItems) {
    // change maxItems based on screen size
    if (width < 640) {
      maxItems = 3;
    } else if (width < 1024) {
      maxItems = 6;
    }
    newVideos = videoQuery?.data?.slice(0, maxItems);
  } else {
    newVideos = videoQuery?.data;
  }

  return (
    <div className={classNames(className, "mb-20")}>
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <SectionHeader className="mb-10">
        {heading || "Video Library"}
      </SectionHeader>
      <div className="grid gap-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mb-10">
        {newVideos?.map((item) => (
          <VideoCard
            key={item._id}
            url={item.url}
            title={item.title}
            date={"2023"}
            onClick={(id) => {
              setIsModalOpen(true);
              setSelectedVideo(id);
            }}
          />
        ))}
      </div>
      {maxItems && videos?.length > maxItems && (
        <div className="flex justify-center">
          <Button onClick={() => navigate("/videos")}>View More</Button>
        </div>
      )}
    </div>
  );
}
