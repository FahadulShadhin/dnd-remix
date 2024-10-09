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
  setActiveTask: (id: number | null) => void;
  onDrop: (status: string, position: number) => void;
}

export function TasksColumn({
  className,
  title,
  tasks,
  setActiveTask,
  onDrop,
}: TasksColumnProps) {
  return (
    <div className={`${className} p-4`}>
      <div
        className={`flex justify-between items-center p-4 rounded-md shadow-md capitalize ${
          title === "to do"
            ? "bg-peach-200"
            : title === "in progress"
            ? "bg-cream-300"
            : "bg-__green-300"
        }`}
      >
        <h1 className="text-2xl font-bold text-center w-full text-primary-600">
          {title}
        </h1>
      </div>

      <div className="mt-4 mb-4">
        <CardDropArea onDrop={() => onDrop(title, 0)} />

        {tasks.map((task, index) => task.status === title.toLowerCase() && (
          <React.Fragment key={index}>
            <TaskCard
              index={index}
              title={task.title}
              description={task.description}
              status={task.status}
              setActiveTask={setActiveTask}
              className={`mb-4`}
            />

            <CardDropArea onDrop={() => onDrop(title, index + 1)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
