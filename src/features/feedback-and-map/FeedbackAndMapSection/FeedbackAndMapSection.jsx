import Feedback from "../Feedback/Feedback";
import SocialLinks from "../SocialIcons/SocialIcons";
import facebook from "../../../assets/facebook.webp";
import instagram from "../../../assets/insta.png";
import youtube from "../../../assets/youtube.png";
import tiktok from "../../../assets/tiktok.webp";
import Map from "../Map/Map";

const data = [
  {
    id: 0,
    img: facebook,
    link: "https://www.facebook.com/Kendramotionpictures/",
  },
  {
    id: 1,
    img: instagram,
    link: "https://www.instagram.com/kendramotionpictures/?hl=en",
  },
  {
    id: 2,
    img: youtube,
    link: "https://www.youtube.com/@KendraMotionPictures",
  },
  {
    id: 3,
    img: tiktok,
    link: "https://www.tiktok.com/@kendramotionpictures",
  },
];

const FeedbackandMapSection = () => {
  return (
    <div className="flex flex-col gap-y-12 xl:flex-row gap-x-20 mb-12">
      <Map className="flex-1" />
      <div className="flex-1 w-full gap-y-6 flex flex-col">
        <Feedback />
        <SocialLinks {...{ data }} />
      </div>
    </div>
  );
};

export default FeedbackandMapSection;
