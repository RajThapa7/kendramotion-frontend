import Modal from "../../../../components/Modal/Modal";
import useFetchArtistReleases from "../../api/useFetchArtistReleases";

export default function ArtistModal({ isOpen, onClose, artist }) {
  const artistQuery = useFetchArtistReleases(artist?._id);

  const latestReleases = artistQuery.data;

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="bg-white w-[90vw] max-w-screen-md p-5 rounded-md">
        <p className="text-2xl font-medium mb-5">Artist Details</p>
        <img
          src={artist?.profileImage}
          alt="profile"
          className="ring-1 ring-gray-600 rounded-full mb-4"
          width={80}
          height={80}
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
          {latestReleases?.movies?.length > 0 ? (
            latestReleases?.movies?.map((movie) => (
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
          {latestReleases?.songs?.length > 0 ? (
            latestReleases?.songs?.map((song) => (
              <div className="mb-2" key={song._id}>
                <p>{song?.name}</p>
              </div>
            ))
          ) : (
            <div>No songs</div>
          )}
        </div>
      </div>
    </Modal>
  );
}
