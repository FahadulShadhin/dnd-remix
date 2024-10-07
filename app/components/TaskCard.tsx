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
  const transformedDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div
      className={`${className} p-4 ${
        status === "to do"
          ? "bg-peach-200"
          : status === "in progress"
          ? "bg-cream-300"
          : "bg-dndGreen-300"
      } rounded-md shadow-md cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-primary-600">{title}</h2>
        <div className="cursor-grab">
          <img src="icons/drag.svg" alt="Drag icon" width={20} height={20} />
        </div>
      </div>
      <p className="text-sm text-primary-500">{transformedDescription}</p>
    </div>
  );
}
