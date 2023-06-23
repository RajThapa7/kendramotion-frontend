import Button from "../../../../components/Button/Button";
import useFetchArtists from "../../api/useFetchArtists";
import ArtistProfileCard from "../ArtistProfileCard/ArtistProfileCard";
import classNames from "../../../../../utils/classNames";
import LoadingSkeleton from "../../../../components/LoadingSkeleton/LoadingSkeleton";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { useNavigate } from "react-router-dom";

export default function ArtistProfileSection() {
  const navigate = useNavigate();

  const artistQuery = useFetchArtists();

  if (artistQuery.isLoading) return <LoadingSkeleton />;
  if (artistQuery.isError) return <p></p>;

  let artists = artistQuery.data?.slice(0, 5);

  return (
    <div
      className={classNames(
        "flex flex-col gap-y-16 py-16 pb-20 lg:flex-row gap-x-16"
      )}
    >
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
              navigate("/artists");
            }}
          >
            View More
          </Button>
        </div>
      </div>

      <div
        className={classNames(
          "flex flex-col gap-10 flex-grow basis-0 flex-wrap"
        )}
      >
        {artists?.map((artist) => (
          <ArtistProfileCard artist={artist} key={artist._id} />
        ))}
      </div>
    </div>
  );
}
