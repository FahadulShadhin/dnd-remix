import { TaskCard } from "./TaskCard";

interface Task {
  title: string;
  description: string;
  status: string;
}

interface TasksRowProps {
  className?: string;
  title: string;
  tasks: Task[];
}

export function TasksRow({ className, title, tasks }: TasksRowProps) {
  return (
    <div className={`${className} p-4`}>
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold text-center w-full text-primary-600">
          {title}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}
