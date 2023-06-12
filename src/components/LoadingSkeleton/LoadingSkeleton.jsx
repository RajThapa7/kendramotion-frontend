import classNames from "../../utils/classNames";

export default function LoadingSkeleton({ count = 5, className }) {
  const arr = new Array(count).fill(0);
  return (
    <div
      className={classNames(
        "flex gap-5 overflow-scroll animate-pulse",
        className
      )}
    >
      {arr.map((_, index) => (
        <div
          key={index}
          className="shrink-0 w-[350px] h-[250px] bg-gray-300 rounded-md overflow-scroll"
        ></div>
      ))}
    </div>
  );
}
