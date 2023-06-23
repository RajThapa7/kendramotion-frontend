import { useNavigate } from "react-router-dom";

export default function ArtistProfileCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer group items-center gap-x-10 shrink-0 w-full sm:w-[300px]"
      onClick={() => navigate(`/artist/${artist?._id}`)}
    >
      <img
        src={artist?.profileImage}
        alt="profile"
        className="ring-1 ring-gray-600 rounded-full cursor-pointer shrink-0 w-20 h-20"
      />
      <div className="flex flex-col gap-y-3 group-hover:text-gray-600 transition-colors">
        <h1 className="font-bold text-xl md:text-2xl">{artist?.name}</h1>
        <p>{artist?.designation}</p>
      </div>
    </div>
  );
}
