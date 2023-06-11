import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Title from "../../../../components/Title/Title";
import useFetchArtists from "../../api/useFetchArtists";
import ArtistProfileCard from "../ArtistProfileCard/ArtistProfileCard";

export default function ArtistProfileSection() {
  const [viewMore, setViewMore] = useState(false);

  const artistQuery = useFetchArtists();

  if (artistQuery.isLoading) return <p>Loading...</p>;
  if (artistQuery.isError) return <p></p>;

  // limit the array to 5 elements
  let artists;
  if (viewMore) {
    artists = artistQuery.data;
  } else {
    artists = artistQuery.data?.slice(0, 3);
  }

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
          <Button
            onClick={() => {
              setViewMore((prev) => !prev);
            }}
          >
            View {viewMore ? "Less" : "More"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 flex-grow basis-0">
        {artists?.map((artist) => (
          <ArtistProfileCard artist={artist} key={artist._id} />
        ))}
      </div>
    </div>
  );
}
