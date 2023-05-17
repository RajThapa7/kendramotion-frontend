/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function SocialLinks({ data }) {
  return (
    <div className="inline-flex gap-x-6 w-fit">
      {data.map(({ img, link, id }) => (
        <a href={link} target="_blank" key={id} rel="noreferrer">
          <div className="object-contain w-12 rounded-full shadow-lg shadow-gray-400">
            <img
              className="transition-smooth text-4xl hover:scale-110 rounded-full"
              src={img}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
