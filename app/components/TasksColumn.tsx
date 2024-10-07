import { TaskCard } from "./TaskCard";

interface Task {
  title: string;
  description: string;
  status: string;
  id: number;
}

interface TasksColumnProps {
  className?: string;
  title: string;
  tasks: Task[];
}

export function TasksColumn({ className, title, tasks }: TasksColumnProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  return (
    <div className={`${className} p-4`}>
      <div
        className={`flex justify-between items-center p-4 mb-4 rounded-md shadow-md ${
          title === "To do"
            ? "bg-peach-200"
            : title === "In progress"
            ? "bg-cream-300"
            : "bg-dndGreen-300"
        }`}
      >
        <h1 className="text-2xl font-bold text-center w-full text-primary-600">
          {title} ({tasks.length})
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
}
