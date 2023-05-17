export default function VideoCard({ title, videoId, date, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 cursor-pointer transition-all"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={title}
        className="shadow-md border border-black aspect-[5/3] w-full object-cover"
      />
      <p className="text-center text-xl font-medium">{title}</p>
      <p className="text-center text-lg font-medium">{date}</p>
    </div>
  );
}
