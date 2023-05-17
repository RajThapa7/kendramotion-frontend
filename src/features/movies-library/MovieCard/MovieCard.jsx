export default function MovieCard({ title, videoId }) {
  return (
    <div className="px-1">
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt="movie thumbnail"
        className="w-full aspect-[16/9] mb-2 rounded-2xl object-cover"
      />
      <p className="font-medium text-lg">{title}</p>
    </div>
  );
}
