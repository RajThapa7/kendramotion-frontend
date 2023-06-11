import image from "../../../../assets/placeholder.png";

export default function Avatar() {
  return (
    <img
      src={image}
      alt="avatar"
      className="ring-1 ring-gray-600 rounded-full"
      width={80}
      height={80}
    />
  );
}
