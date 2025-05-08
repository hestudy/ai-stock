import Spin from "./spin";

export default function Loading() {
  return (
    <div className="flex items-center space-x-2">
      <Spin />
      <span className="text-sm">Loading...</span>
    </div>
  );
}
