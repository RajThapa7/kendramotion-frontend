export default function VideoCard({ title, url, onClick }) {
  // extract the video id from the url
  const videoId = url.split("v=")[1];

  return (
    <div
      onClick={() => onClick(videoId)}
      className="px-2 w-full group cursor-pointer transition-smooth max-w-lg overflow-hidden"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={title}
        className="mb-3 group-hover:scale-105 transition-all duration-300 ease-in-out shadow-md aspect-[5/3] w-full object-cover"
      />
      <p className="text-center text-lg xl:text-xl font-semibold text-gray-900">
        {title}
      </p>
    </div>
  );
}
