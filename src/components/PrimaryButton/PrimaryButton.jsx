import { classNames } from "../../utils/classNames";

export default function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={classNames(
        className,
        "text-white bg-purple-900 rounded-md px-5 py-2 font-medium hover:bg-purple-800 transition duration-300"
      )}
    >
      {children}
    </button>
  );
}
