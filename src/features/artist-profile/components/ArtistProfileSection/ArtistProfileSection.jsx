import { useState } from "react";
import Button from "../../../../components/Button/Button";
import useFetchArtists from "../../api/useFetchArtists";
import ArtistProfileCard from "../ArtistProfileCard/ArtistProfileCard";
import ArtistModal from "../ArtistModal/ArtistModal";
import classNames from "../../../../../utils/classNames";
import LoadingSkeleton from "../../../../components/LoadingSkeleton/LoadingSkeleton";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

export default function ArtistProfileSection() {
  const [viewMore, setViewMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [selectedArtist, setSelectedArtist] = useState();

  const artistQuery = useFetchArtists();

  if (artistQuery.isLoading) return <LoadingSkeleton />;
  if (artistQuery.isError) return <p></p>;

  // limit the array to 5 elements
  let artists;
  if (viewMore) {
    artists = artistQuery.data;
  } else {
    artists = artistQuery.data?.slice(0, 3);
  }

  return (
    <div
      className={classNames(
        viewMore ? "lg:flex-col" : "lg:flex-row",
        "flex flex-col gap-y-16 py-16 pb-20 lg:flex-row gap-x-16"
      )}
    >
      <ArtistModal
        artist={selectedArtist}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div className="gap-y-4 flex flex-grow flex-col basis-0">
        <SectionHeader>Artist Profile</SectionHeader>
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

      <div
        className={classNames(
          viewMore ? "sm:flex-row" : "sm:flex-col",
          "flex flex-col gap-10 flex-grow basis-0 flex-wrap"
        )}
      >
        {artists?.map((artist) => (
          <ArtistProfileCard
            onClick={() => {
              setOpenModal(true);
              setSelectedArtist(artist);
            }}
            artist={artist}
            key={artist._id}
          />
        ))}
      </div>
    </div>
  );
}
