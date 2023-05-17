// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="inline-block rounded-xl border border-[#042760] bg-[#042760] px-12 py-3  font-bold text-xl text-white hover:bg-transparent hover:text-[#042760] focus:outline-none shadow-md shadow-gray-600 focus:ring active:text-[#042760] transition-all duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
