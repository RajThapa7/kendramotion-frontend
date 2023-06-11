export default function ArtistProfileCard({ artist }) {
  return (
    <div className="flex items-center gap-x-10">
      <img
        src={artist?.profileImage}
        alt="profile"
        className="ring-1 ring-gray-600 rounded-full"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-xl md:text-2xl text-gray-900">
          {artist?.name}
        </h1>
        <p>{artist?.designation}</p>
      </div>
    </div>
  );
}
