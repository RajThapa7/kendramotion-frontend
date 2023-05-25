export default function MovieCard({ title, url }) {
  return (
    <div className="px-1 max-w-lg">
      <img
        src={url}
        alt="movie thumbnail"
        className="w-full aspect-[16/9] mb-2 rounded-2xl object-cover"
      />
      <p className="font-medium text-lg">{title}</p>
    </div>
  );
}
