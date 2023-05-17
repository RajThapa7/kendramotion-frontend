import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MovieCard from "../MovieCard/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const moviesData = [
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
];

export default function MovieLibrary() {
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

  return (
    <div className="mb-16">
      <SectionHeader className="mb-5">Movies Library</SectionHeader>
      {/* <div className="flex gap-5 overflow-scroll"> */}
      <div className="mb-5">
        <Slider {...settings}>
          {moviesData.map((movie) => (
            <MovieCard
              key={movie.videoId}
              title={movie.title}
              videoId={movie.videoId}
            />
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
}

function RightArrow(props) {
  return (
    <button
      className="absolute -right-2 top-1/2 z-10 -translate-y-[50%] rounded-full 
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
      className="absolute -left-2 top-1/2 z-10 -translate-y-[50%] rounded-full 
      bg-gray-200 p-1 shadow-md transition-colors hover:bg-gray-300"
      onClick={props.onClick}
    >
      <BiChevronLeft size={25} />
    </button>
  );
}
