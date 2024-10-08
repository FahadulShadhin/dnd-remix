import React from "react";
import { CardDropArea } from "./CardDropArea";
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
  setActiveTask: (taskId: number | null) => void;
}

export function TasksColumn({
  className,
  title,
  tasks,
  setActiveTask,
}: TasksColumnProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  return (
    <div className={`${className} p-4`}>
      <div
        className={`flex justify-between items-center p-4 rounded-md shadow-md ${
          title === "To do"
            ? "bg-peach-200"
            : title === "In progress"
            ? "bg-cream-300"
            : "bg-__green-300"
        }`}
      >
        <h1 className="text-2xl font-bold text-center w-full text-primary-600">
          {title} ({tasks.length})
        </h1>
      </div>

      <CardDropArea />

      <div className="">
        {tasks.map((task, index) => (
          <React.Fragment key={task.id}>
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              onDragStart={handleDragStart}
              setActiveTask={setActiveTask}
              className={`mb-4 ${index === 0 ? "mt-4" : ""}`}
            />

            <CardDropArea />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
