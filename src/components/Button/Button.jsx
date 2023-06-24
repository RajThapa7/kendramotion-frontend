import classNames from "../../utils/classNames";

export default function Button({ children, className, ...props }) {
  if (props.loading) props.disabled = true;

  return (
    <button
      {...props}
      className={classNames(
        props.loading
          ? "opacity-50 cursor-progress"
          : "hover:bg-transparent hover:text-[#042760]",
        className,
        "inline-block rounded-xl border border-[#042760] bg-[#042760] px-6 py-2 font-bold text-lg text-white  focus:outline-none shadow-md shadow-gray-600 focus:ring active:text-[#042760] transition-all duration-200 ease-in-out"
      )}
    >
      {children}
    </button>
  );
}
