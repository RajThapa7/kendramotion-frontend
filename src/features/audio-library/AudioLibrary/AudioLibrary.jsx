import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import SpotifyCard from "../SpotifyCard/SpotifyCard";
import { HiMusicNote } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useFetchAudios from "../api/useFetchAudios";
import LoadingSkeleton from "../../../components/LoadingSkeleton/LoadingSkeleton";

export default function AudioLibrary() {
  const audioQuery = useFetchAudios();

  if (audioQuery.isLoading) return <LoadingSkeleton />;
  if (audioQuery.isError) return <p></p>;

  const numAudios = audioQuery.data.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numAudios < 4 ? numAudios : 4,
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
        breakpoint: 1280,
        settings: {
          slidesToShow: numAudios < 2 ? numAudios : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: numAudios < 3 ? numAudios : 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-20 lg:mb-28">
      <SectionHeader className="mb-10">Audio Library</SectionHeader>
      <div className="relative">
        <div className="hidden lg:block absolute top-10 bg-[#efc751] h-[300px] rounded-3xl w-[630px]" />
        <div className="hidden lg:flex absolute left-10 top-[calc(2.5rem+50%)] text-3xl font-bold flex-col gap-2 -translate-y-[50%]">
          <span>Popular</span>
          <div className="flex items-center gap-x-2">
            <HiMusicNote />
            <span className="uppercase border-2 border-black inline-block text-4xl px-2">
              Music
            </span>
          </div>
          <span>Today</span>
        </div>
        <Slider {...settings} className="lg:ml-[300px] z-10">
          {audioQuery.data.map((item) => (
            <SpotifyCard key={item._id} link={item.url} />
          ))}
        </Slider>
      </div>
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
