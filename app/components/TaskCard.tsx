import { useState } from "react";

interface TaskCardProps {
  className?: string;
  title: string;
  description: string;
  status: string;
}

export function TaskCard({
  className,
  title,
  description,
  status,
}: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${className} p-4 ${
        status === "to do"
          ? "bg-peach-200"
          : status === "in progress"
          ? "bg-cream-300"
          : "bg-dndGreen-300"
      } rounded-md shadow-md cursor-grab`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-primary-600">{title}</h2>
        <button
          className="cursor-pointer focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <img
              src="icons/chevron-up.svg"
              alt="Drag icon"
              width={15}
              height={15}
            />
          ) : (
            <img
              src="icons/chevron-down.svg"
              alt="Drag icon"
              width={15}
              height={15}
            />
          )}
        </button>
      </div>
      {isExpanded && (
        <p className="text-md text-primary-500">{description}</p>
      )}
    </div>
  );
}
