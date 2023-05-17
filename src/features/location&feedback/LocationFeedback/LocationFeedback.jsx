import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Map from "../Map/Map";

export default function LocationFeedback() {
  return (
    <div className="flex gap-8 lg:gap-16 mb-10 flex-wrap">
      <Map className="flex-1 min-w-[300px]" />
      <FeedbackForm className="flex-1 min-w-[300px]" />
    </div>
  );
}
