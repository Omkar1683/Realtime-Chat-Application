import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="absolute top-2 left-4 z-50">
      <button
        onClick={handleVideoCall}
        className="btn btn-success btn-sm text-white flex items-center gap-1"
      >
        <VideoIcon className="size-4" />
        <span>Video Call</span>
      </button>
    </div>
  );
}

export default CallButton;