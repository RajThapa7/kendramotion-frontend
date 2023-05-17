export default function VideoCard({ title, thumbnailURL, date }) {
  return (
    <div>
      <div className="shadow-md border border-black">
        <img
          src={thumbnailURL}
          alt={title}
          className="w-64 h-48 object-cover"
        />
      </div>
      <p className="text-center text-xl font-medium">{title}</p>
      <p className="text-center text-lg font-medium">{date}</p>
    </div>
  );
}
