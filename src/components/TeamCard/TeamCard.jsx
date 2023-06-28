export default function TeamCard({ img, name, designation }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-48 h-48 object-fill">
        <img src={img} alt="" className="rounded-full w-full h-full" />
      </div>
      <div className="flex mt-4 flex-col items-center w-full">
        <p className="font-semibold text-xl">{name}</p>
        <p className="text-xl">{designation}</p>
      </div>
    </div>
  );
}
