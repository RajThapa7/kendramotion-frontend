import Title from "../../components/Title/Title";
import { MdOutlineNavigateNext } from "react-icons/md";
import LatestWorkSlider from "../../components/LatestWorkSlider/LatestWorkSlider";

export default function LatestWorkSection() {
  return (
    <div className="flex flex-col gap-y-3 pb-20">
      <Title>
        Our latest Work <MdOutlineNavigateNext />{" "}
      </Title>
      <p className="text-lg text-gray-600 mb-12">
        Most recent Music and Video Projects
      </p>
      <LatestWorkSlider />
    </div>
  );
}
