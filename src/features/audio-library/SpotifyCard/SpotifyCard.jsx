const testLink = "https://open.spotify.com/track/7ycWLEP1GsNjVvcjawXz3z";

export default function SpotifyCard({ link }) {
  const url = new URL(link || testLink);

  return (
    <div className="px-2">
      <iframe
        title="Spotify Web player"
        src={`https://open.spotify.com/embed${url.pathname}`}
        frameBorder={0}
        allow="encrypted-media"
        className="w-full max-w-72 h-72"
      />
      {/* <div className="bg-yellow-700">HELLO</div> */}
    </div>
  );
}
