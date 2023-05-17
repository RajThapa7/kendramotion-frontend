import Avatar from "../Avatar/Avatar";

export default function ArtistProfileCard() {
  return (
    <div className="flex items-center gap-x-10">
      <Avatar />
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-900">
          Subash Neupane
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          suscipit.
        </p>
      </div>
    </div>
  );
}
