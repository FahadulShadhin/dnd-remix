import { tasks } from "~/data/tesks";
import { TasksColumn } from "~/components/TasksColumn";

export default function Index() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto p-4">
        <TasksColumn
          className="flex-1"
          title="To do"
          tasks={tasks.filter((task) => task.status === "to do")}
        />
        <TasksColumn
          className="flex-1"
          title="In progress"
          tasks={tasks.filter((task) => task.status === "in progress")}
        />
        <TasksColumn
          className="flex-1"
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </div>
  );
}
