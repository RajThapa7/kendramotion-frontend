import classNames from "../../../utils/classNames";

export default function Title({ children, className }) {
  return (
    <h1
      className={classNames(
        className,
        "font-bold text-2xl text-gray-900 flex items-center"
      )}
    >
      {children}
    </h1>
  );
}
