import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import ArtistProfileCard from "../../components/ArtistProfileCard/ArtistProfileCard.jsx";

export default function ArtistProfileSection() {
  return (
    <div className="flex flex-col gap-y-16 py-12 pb-20 lg:flex-row gap-x-16">
      <div className="gap-y-4 flex flex-grow flex-col basis-0">
        <Title>Artist Profile</Title>
        <p className="text-lg text-gray-600">
          An artist is a person engaged in an activity related to creating art,
          practicing the arts, or demonstrating an art. Special Section for
          Show-casting profile of Artists.
        </p>
        <div className="mt-3">
          <Button>View All</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 flex-grow basis-0">
        <ArtistProfileCard />
        <ArtistProfileCard />
        <ArtistProfileCard />
        <ArtistProfileCard />
      </div>
    </div>
  );
}
