import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import useFetchBannerList from "./api/useFetchBanner";
import { useRef } from "react";

export default function App() {
  const data = useFetchBannerList();

  const swiperRef = useRef();

  return (
    <div className="py-20 pt-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        style={{
          paddingBottom: "50px",
        }}
      >
        {data?.map(({ _id, url, title }) => (
          <SwiperSlide
            key={_id}
            style={{
              height: "100%",
            }}
          >
            <img
              src={url}
              alt={title}
              style={{
                aspectRatio: "16/9",
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
