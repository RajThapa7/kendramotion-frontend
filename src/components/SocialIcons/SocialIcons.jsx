/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function SocialLinks({ data }) {
  return (
    <div className="inline-flex gap-x-6">
      {data.map(({ icon, link, id }) => (
        <a href={link} target="_blank" key={id} rel="noreferrer">
          <p className="transition-smooth text-4xl hover:scale-110">{icon}</p>
        </a>
      ))}
    </div>
  );
}
