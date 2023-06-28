import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import LatestWorkCard from "../LatestWorkCard/LatestWorkCard";
import MyModal from "../Modal/Modal";
import VideoPlayer from "../../features/video-library/VideoPlayer/VideoPlayer";
import useFetchLatestWork from "../../features/LatestWorkSection/api/useFetchLatestWork";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

export default function LatestWorkSlider() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    // autoplay: true,
    pauseonhover: true,
    autoplayspeed: 7000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const latestWorkQuery = useFetchLatestWork();

  if (latestWorkQuery.isLoading) {
    return <LoadingSkeleton />;
  }

  if (latestWorkQuery.isError) {
    return <div></div>;
  }

  const latestWorks = latestWorkQuery.data;

  return (
    <div id="latest-work-slider">
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <Slider {...settings}>
        {latestWorks.map(({ id, title, url }) => (
          <LatestWorkCard
            key={id}
            {...{ title, url, setIsModalOpen, setSelectedVideo }}
            className={"px-3"}
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
