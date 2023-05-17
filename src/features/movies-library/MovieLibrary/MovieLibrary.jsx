import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MovieCard from "../MovieCard/MovieCard";

const moviesData = [
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
  {
    title: "Mahaparush - New Nepali Movie Trailer 2021",
    videoId: "_4Qqg0yofWg",
  },
];

export default function MovieLibrary() {
  return (
    <div className="mb-16">
      <SectionHeader className="mb-5">Movies Library</SectionHeader>
      <div className="flex gap-5 overflow-scroll">
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.videoId}
            title={movie.title}
            videoId={movie.videoId}
          />
        ))}
      </div>
    </div>
  );
}
