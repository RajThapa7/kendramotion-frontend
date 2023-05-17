import Button from "../../../components/Button/Button";
import VideoCards from "../VideoCards/VideoCards";

export default function VideoLibrary() {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-5">Video Library {">"}</h3>
      <VideoCards />
      <div className="mt-10 flex justify-center">
        <Button>View More</Button>
      </div>
    </div>
  );
}
