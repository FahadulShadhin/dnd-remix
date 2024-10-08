import { tasks } from "~/data/tesks";
import { TasksColumn } from "~/components/TasksColumn";
import { useState } from "react";

export default function Index() {
  const [activeTask, setActiveTask] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto p-4">
        <TasksColumn
          className="flex-1"
          title="To do"
          tasks={tasks.filter((task) => task.status === "to do")}
          setActiveTask={setActiveTask}
        />
        <TasksColumn
          className="flex-1"
          title="In progress"
          tasks={tasks.filter((task) => task.status === "in progress")}
          setActiveTask={setActiveTask}
        />
        <TasksColumn
          className="flex-1"
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          setActiveTask={setActiveTask}
        />
      </div>
      <h1>Active task: {activeTask}</h1>
    </div>
  );
}
