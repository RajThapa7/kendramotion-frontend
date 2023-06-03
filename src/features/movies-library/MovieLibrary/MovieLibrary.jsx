import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MovieCard from "../MovieCard/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useFetchMovies from "../api/useFetchMovies";

export default function MovieLibrary() {
  const movieQuery = useFetchMovies();

  if (movieQuery.isLoading) return <p>Loading...</p>;
  if (movieQuery.isError) return <p></p>;

  const numMovies = movieQuery.data.length;

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
      <SectionHeader className="mb-5">Movies Library</SectionHeader>
      <div className="mb-5">
        <Slider {...settings}>
          {movieQuery.data.map((movie) => (
            <MovieCard key={movie._id} title={movie.title} url={movie.url} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function RightArrow(props) {
  return (
    <button
      className="absolute -right-2 top-[40%] z-10 -translate-y-[50%] rounded-full 
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
      className="absolute -left-2 top-[40%] z-10 -translate-y-[50%] rounded-full 
      bg-gray-200 p-1 shadow-md transition-colors hover:bg-gray-300"
      onClick={props.onClick}
    >
      <BiChevronLeft size={25} />
    </button>
  );
}
