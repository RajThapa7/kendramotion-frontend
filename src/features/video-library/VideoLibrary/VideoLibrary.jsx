import { useState } from "react";
import MyModal from "../../../components/Modal/Modal";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../VideoCard/VideoCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useFetchVideos from "../api/useFetchVideos";

export default function VideoLibrary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoQuery = useFetchVideos();

  if (videoQuery.isLoading) return <p>Loading...</p>;

  const numMovies = videoQuery.data.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numMovies < 4 ? numMovies : 4,
    slidesToScroll: 2,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: numMovies < 2 ? numMovies : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: numMovies < 3 ? numMovies : 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-16">
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <h3 className="text-2xl font-medium mb-5">Video Library {">"}</h3>
      <Slider {...settings}>
        {videoQuery.data.map((item) => (
          <VideoCard
            key={item.videoId}
            url={item.url}
            title={item.title}
            date={"2023"}
            onClick={(id) => {
              setIsModalOpen(true);
              setSelectedVideo(id);
            }}
          />
        ))}
      </Slider>
    </div>
  );
}

function RightArrow(props) {
  return (
    <button
      className="absolute -right-2 top-[45%] z-10 -translate-y-[50%] rounded-full 
      bg-gray-200 p-1 shadow-md transition-colors hover:bg-gray-300"
      onClick={props.onClick}
    >
      <BiChevronRight size={25} />
    </button>
  );
}

function LeftArrow(props) {
  return (
    <button
      className="absolute -left-2 top-[45%] z-10 -translate-y-[50%] rounded-full 
      bg-gray-200 p-1 shadow-md transition-colors hover:bg-gray-300"
      onClick={props.onClick}
    >
      <BiChevronLeft size={25} />
    </button>
  );
}
