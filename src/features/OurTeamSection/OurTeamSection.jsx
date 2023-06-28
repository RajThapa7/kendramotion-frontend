import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import TeamCard from "../../components/TeamCard/TeamCard";
import Slider from "react-slick";
import useFetchTeamMembers from "./api/useFetchTeamMembers";

export default function OurTeamSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
    ],
  };

  const data = useFetchTeamMembers();

  return (
    <div className="mb-16">
      <SectionHeader className="mb-16">Our Team</SectionHeader>
      <div className="mt-16">
        <Slider {...settings}>
          {data.data?.data?.map(({ _id, designation, name, profileImage }) => (
            <TeamCard
              designation={designation}
              name={name}
              img={profileImage}
              key={_id}
            />
          ))}
          {/* <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} />
          <TeamCard img={image} name={"Balen Shah"} designation={"Mayor"} /> */}
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
