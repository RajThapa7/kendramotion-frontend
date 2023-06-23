export default function VideoCard({ title, url, onClick }) {
  // extract the video id from the url
  const videoId = url.split("v=")[1];

  return (
    <div
      onClick={() => onClick(videoId)}
      className="px-2 w-full group cursor-pointer transition-all"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={title}
        className="mb-3 group-hover:opacity-80 shadow-md aspect-[5/3] w-full object-cover duration-150"
      />
      <p className="text-center text-lg font-semibold">{title}</p>
      {/* <p className="text-center text-xl font-bold">{date}</p> */}
    </div>
  );
}
