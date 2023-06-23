import LoadingSkeleton from "../../../../components/LoadingSkeleton/LoadingSkeleton";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import classNames from "../../../../utils/classNames";
import useFetchArtists from "../../api/useFetchArtists";
import ArtistProfileCard from "../ArtistProfileCard/ArtistProfileCard";

export default function ArtistListPage({ className = "" }) {
  const artistQuery = useFetchArtists();

  if (artistQuery.isLoading) {
    return <LoadingSkeleton className={classNames("mb-5", className)} />;
  }

  if (artistQuery.isError) return <p></p>;

  return (
    <div className={classNames(className)}>
      <SectionHeader className="mb-10">Artists</SectionHeader>
      <div className="grid gap-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mb-10">
        {artistQuery.data?.map((artist) => (
          <ArtistProfileCard artist={artist} key={artist._id} />
        ))}
      </div>
    </div>
  );
}
