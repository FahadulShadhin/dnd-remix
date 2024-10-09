import { useEffect, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

interface TaskCardProps {
  className?: string;
  title: string;
  description: string;
  status: string;
  index: number;
  setActiveTask: (index: number | null) => void;
}

export function TaskCard({
  className,
  title,
  description,
  index,
  setActiveTask,
}: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [description]);

  return (
    <div
      className={`${className} p-4 rounded-md cursor-grab shadow-md bg-__white-200 active:opacity-50`}
      draggable="true"
      onDragStart={() => setActiveTask(index)}
      onDragEnd={() => setActiveTask(null)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-primary-600">{title}</h2>
        <button
          className="cursor-pointer focus:outline-none transition-transform duration-300 ease-in-out"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaChevronUp className={`transform ${isExpanded ? "rotate-0" : "rotate-180"} text-primary-600`} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ maxHeight: isExpanded ? `${contentHeight + 10}px` : "0" }}
      >
        <p ref={contentRef} className="text-md text-primary-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
