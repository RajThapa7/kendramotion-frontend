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
import useFetchLatestWork from "../../features/LatestWorkSection/api/useFetchLatestWork";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const latestWorkQuery = useFetchLatestWork();

  if (latestWorkQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  const latestWorks = latestWorkQuery.data;

  console.log(latestWorks, "lw");

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
        {latestWorks.map(({ id, title, url }) => {
          return (
            <SwiperSlide key={id}>
              <LatestWorkCard
                {...{
                  title,
                  url,
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
