import { LoaderCircleIcon } from "lucide-react";

export default function Spin() {
  return (
    <div className="flex items-center space-x-2">
      <LoaderCircleIcon
        className="-ms-1 animate-spin"
        size={16}
        aria-hidden="true"
      />
      <span className="text-sm">Loading...</span>
    </div>
  );
}
