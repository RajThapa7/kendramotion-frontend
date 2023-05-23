import { BiChevronRight } from "react-icons/bi";
import classNames from "../../utils/classNames";

export default function SectionHeader({ children, className = "" }) {
  return (
    <div className={classNames(className, "flex gap-3 items-center")}>
      <h3 className="text-2xl font-medium">{children}</h3>
      <BiChevronRight size={30} />
    </div>
  );
}
