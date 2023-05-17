// eslint-disable-next-line react/prop-types
export default function Title({ children }) {
  return (
    <h1 className="font-bold text-2xl text-gray-900 flex items-center">
      {children}
    </h1>
  );
}
