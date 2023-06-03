import classNames from "../../utils/classNames";
import useFetchSpotifyLink from "./api/useFetchSpotifyLink";

export default function LatestWorkCard({
  url,
  title,
  setSelectedVideo,
  setIsModalOpen,
  className,
}) {
  const isYoutubeLink = url.includes("youtube");
  const videoId = url.split("v=")[1];

  const imageUrl = isYoutubeLink
    ? `https://img.youtube.com/vi/${videoId}/0.jpg`
    : url;

  return (
    <div
      href="#"
      className={classNames(className, `group relative block overflow-hidden`)}
    >
      <img
        src={imageUrl}
        alt=""
        className={`${
          isYoutubeLink
            ? "aspect-[16/9] object-cover"
            : "aspect-[4/4] object-fill"
        }
         w-full  transition duration-500 group-hover:scale-105 `}
      />

      <div className="relative bg-white py-2 flex flex-col items-center gap-y-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}
