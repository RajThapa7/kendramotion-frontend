import Feedback from "../../components/Feedback/Feedback";
import Map from "../../components/Map/Map.jsx";
import SocialLinks from "../../components/SocialIcons/SocialIcons";
import facebook from "../../assets/facebook.webp";

import instagram from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";

const data = [
  {
    id: 0,
    img: facebook,
    link: "#",
  },
  {
    id: 1,
    img: instagram,
    link: "#",
  },
  {
    id: 2,
    img: youtube,
    link: "#",
  },
];

const FeedbackandMapSection = () => {
  return (
    <div className="flex flex-col gap-y-12 xl:flex-row gap-x-20 py-16">
      <Map />
      <div className="w-full gap-y-6 flex flex-col">
        <Feedback />
        <SocialLinks {...{ data }} />
      </div>
    </div>
  );
};

export default FeedbackandMapSection;
