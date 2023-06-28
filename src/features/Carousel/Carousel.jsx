// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // import required modules
// import { Navigation, Pagination, Autoplay } from "swiper";

// import useFetchBannerList from "./api/useFetchBanner";
// import { useRef } from "react";
// import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

// export default function App() {
//   const data = useFetchBannerList();

//   const swiperRef = useRef();

//   if (data?.isLoading) return <LoadingSkeleton />;

//   return (
//     <div className="py-20 pt-10">
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           1200: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         modules={[Navigation, Pagination, Autoplay]}
//         className="mySwiper"
//         loop={true}
//         style={{
//           paddingBottom: "50px",
//         }}
//       >
//         {data.data?.map(({ _id, url, title }) => (
//           <SwiperSlide
//             key={_id}
//             style={{
//               height: "100%",
//             }}
//           >
//             <img
//               src={url}
//               alt={title}
//               style={{
//                 aspectRatio: "16/9",
//                 width: "100%",
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useFetchBannerList from "./api/useFetchBanner";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

export default function Carousel() {
  const data = useFetchBannerList();

  if (data?.isLoading) return <LoadingSkeleton />;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToScroll: 2,
    slidesToShow: 3,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          // slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-4 lg:py-14">
      <Slider {...settings}>
        {data.data?.map(({ _id, title, url }) => (
          <CarouselCard key={_id} {...{ title, url }} />
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

function CarouselCard({ title, url }) {
  return (
    <div className="px-1  group cursor-pointer transition-all">
      <img
        src={url}
        alt={title}
        className="mb-10 rounded-md aspect-[16/10] w-full object-fill"
      />
    </div>
  );
}
