import { useState } from "react";
import MyModal from "../../../components/Modal/Modal";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../VideoCard/VideoCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const cardData = [
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
    /* videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg", */
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function VideoLibrary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="mb-16">
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <h3 className="text-2xl font-medium mb-5">Video Library {">"}</h3>
      <Slider {...settings}>
        {cardData.map((item) => (
          <VideoCard
            key={item.videoId}
            videoId={item.videoId}
            title={item.title}
            date={item.date}
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
