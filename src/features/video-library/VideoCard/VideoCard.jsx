export default function VideoCard({ title, videoId, date, onClick }) {
  return (
    <div
      onClick={() => onClick(videoId)}
      className="px-2 w-full group cursor-pointer transition-all"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={title}
        className="rounded-2xl group-hover:opacity-80 shadow-md aspect-[5/3] w-full object-cover duration-150"
      />
      <p className="text-center text-xl font-medium">{title}</p>
      <p className="text-center text-lg font-medium">{date}</p>
    </div>
  );
}
