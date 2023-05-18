// 🔥🔥
// const test = "https://www.youtube.com/embed/Kbj2Zss-5GY";

{
  /* <div className="bg-white min-w-full sm:w-[700px] pt-[56.25%] relative"> */
}
export default function VideoPlayer({ videoId }) {
  return (
    <div className="bg-white rounded-md w-[95vw] sm:w-[80vw] pt-[56.25%] max-w-4xl">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-md"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
}
