// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import LatestWorkCard from "../LatestWorkCard/LatestWorkCard";
import { useState } from "react";
import MyModal from "../Modal/Modal";
import VideoPlayer from "../../features/video-library/VideoPlayer/VideoPlayer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <>
      <MyModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <VideoPlayer videoId={selectedVideo} />
      </MyModal>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {moviesData.map(({ id, title, description, videoId }) => {
          return (
            <SwiperSlide key={id}>
              <LatestWorkCard
                {...{
                  title,
                  description,
                  videoId,
                  setSelectedVideo,
                  setIsModalOpen,
                }}
                key={id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const moviesData = [
  {
    id: 0,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
  {
    id: 1,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
  {
    id: 2,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
  {
    id: 3,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
  {
    id: 4,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
  {
    id: 5,
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
    description: "Milan Newar ft. Paul shah and Malika Mahat",
  },
];
