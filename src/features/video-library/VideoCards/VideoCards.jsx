import VideoCard from "../VideoCard/VideoCard";

const cardData = [
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
    /* videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg", */
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
  {
    title: "Babari Sad Version",
    date: "2023",
    videoId: "qkIqjh-kCjg",
  },
];

export default function VideoCards({ onClick }) {
  return (
    <div className="flex flex-wrap -mx-10 gap-y-5">
      {cardData.map((item) => (
        <VideoCard
          key={item.videoId}
          title={item.title}
          videoId={item.videoId}
          date={item.date}
          onClick={() => onClick(item.videoId)}
        />
      ))}
    </div>
  );
}
