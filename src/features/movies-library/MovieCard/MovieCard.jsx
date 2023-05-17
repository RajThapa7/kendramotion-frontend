export default function MovieCard({ title, videoId }) {
  return (
    <div className="w-full sm:w-[400px] shrink-0 mb-5">
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt="movie thumbnail"
        className="w-full aspect-[16/9] mb-2 rounded-2xl object-cover"
      />
      <p className="font-medium text-lg">{title}</p>
    </div>
  );
}
