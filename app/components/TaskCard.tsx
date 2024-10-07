import { useState } from "react";

interface TaskCardProps {
  className?: string;
  title: string;
  description: string;
  status: string;
  id: number;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

export function TaskCard({
  className,
  title,
  description,
  status,
  id,
  onDragStart,
}: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${className} p-4 rounded-md shadow-lg cursor-grab border border-primary-50`}
      draggable="true"
      onDragStart={(e) => onDragStart(e, id)}
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
      {isExpanded && <p className="text-md text-primary-500">{description}</p>}
    </div>
  );
}
