import classNames from "../../utils/classNames";

export default function LatestWorkCard({
  url,
  title,
  setSelectedVideo,
  setIsModalOpen,
  className,
}) {
  const videoId = url.split("v=")[1];

  const imageUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div
      href="#"
      className={classNames(className, `group relative block overflow-hidden`)}
      onClick={() => {
        setIsModalOpen(true);
        setSelectedVideo(videoId);
      }}
    >
      <img
        src={imageUrl}
        alt="img-latest-work"
        className={`aspect-[16/9] object-cover w-full  transition duration-500 group-hover:scale-105 `}
      />

      <div className="relative bg-white py-2 flex flex-col items-center gap-y-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
