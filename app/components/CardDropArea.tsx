import { useState } from "react";

export function CardDropArea() {
  const [showDropArea, setShowDropArea] = useState(false);

  console.log(showDropArea);

  return (
    <div
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      className={`${
        showDropArea
          ? `opacity-100 mt-4 mb-4 w-full h-[100px]`
          : "opacity-0 p-0 mb-0"
      } bg-__white-50 rounded-md border border-dashed border-__white-400 flex items-center justify-center transition-all duration-300 ease-in-out`
    }
    >
      {showDropArea && <p className="text-__white-600">Drop here</p>}
    </div>
  );
}
