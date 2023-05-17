import VideoCard from "../VideoCard/VideoCard";

const cardData = [
  {
    id: 1,
    title: "Babari Sad Version",
    date: "2023",
    videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg",
  },
  {
    id: 2,
    title: "Babari Sad Version",
    date: "2023",
    videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg",
  },
  {
    id: 3,
    title: "Babari Sad Version",
    date: "2023",
    videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg",
  },
  {
    id: 4,
    title: "Babari Sad Version",
    date: "2023",
    videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg",
  },
  {
    id: 5,
    title: "Babari Sad Version",
    date: "2023",
    videoURL: "https://www.youtube.com/watch?v=qkIqjh-kCjg",
    thumbnailURL: "https://img.youtube.com/vi/qkIqjh-kCjg/0.jpg",
  },
];

export default function VideoCards() {
  return (
    <div className="flex gap-8 flex-wrap">
      {cardData.map((item) => (
        <VideoCard
          key={item.key}
          title={item.title}
          thumbnailURL={item.thumbnailURL}
          date={item.date}
        />
      ))}
    </div>
  );
}
