import { useParams } from "react-router-dom";
import useFetchArtist from "../../api/useFetchArtist";
import classNames from "../../../../utils/classNames";
import useFetchArtistReleases from "../../api/useFetchArtistReleases";

export default function ArtistInfoPage({ className = "" }) {
  const { id } = useParams();
  const artistQuery = useFetchArtist(id);

  const latestReleasesQuery = useFetchArtistReleases(id);

  if (artistQuery.isLoading || latestReleasesQuery.isLoading) {
    return <div></div>;
  }

  if (artistQuery.isError || latestReleasesQuery.isLoading) {
    return <div></div>;
  }

  const artist = artistQuery.data;

  const latestReleases = latestReleasesQuery.data;
  const movies = latestReleases?.movies;
  const songs = latestReleases?.songs;

  return (
    <div>
      <div
        className={classNames(
          className,
          "bg-white w-[90vw] max-w-screen-md p-5 rounded-md"
        )}
      >
        <p className="text-2xl font-medium mb-10">Artist Profile</p>
        <img
          src={artist?.profileImage}
          alt="profile"
          className="ring-1 ring-gray-600 rounded-full shrink-0 w-20 h-20 mb-5"
        />
        <div className="flex items-center gap-3 mb-3 justify-between flex-wrap">
          <p className="font-medium">Name: </p>
          <p>{artist?.name}</p>
        </div>
        <div className="flex items-center gap-3 mb-3 justify-between flex-wrap">
          <p className="font-medium w-[100px]">Designation: </p>
          <p>{artist?.designation}</p>
        </div>
        <hr className="my-3" />
        <div className="mb-5">
          <p className="font-medium text-xl mb-2">Latest Movies</p>
          {movies?.length > 0 ? (
            movies?.map((movie) => (
              <div className="mb-2" key={movie._id}>
                <p>{movie?.name}</p>
              </div>
            ))
          ) : (
            <div>No movies</div>
          )}
        </div>
        <div>
          <p className="font-medium text-xl mb-2">Latest Songs</p>
          {songs?.length > 0 ? (
            songs?.map((song) => (
              <div className="mb-2" key={song._id}>
                <p>{song?.name}</p>
              </div>
            ))
          ) : (
            <div>No songs</div>
          )}
        </div>
      </div>
    </div>
  );
}
