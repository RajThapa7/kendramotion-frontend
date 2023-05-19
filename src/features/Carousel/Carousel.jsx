import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import img from "../../assets/ad.jpg";

export default function App() {
  const data = [img, img, img, img, img, img];

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper "
        style={{
          paddingBottom: "55px",
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "100%",
            }}
          >
            <img
              src={item}
              alt="slider-image"
              style={{
                aspectRatio: "16/10",
                width: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
