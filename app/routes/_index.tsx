import { TasksRow } from "~/components/TasksRow";
import { tasks } from "~/data/tesks";

export default function Index() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-screen gap-4 max-w-7xl mx-auto p-4">
        <TasksRow
          className="flex-1"
          title="To do"
          tasks={tasks.filter((task) => task.status === "to do")}
        />
        <TasksRow
          className="flex-1"
          title="In progress"
          tasks={tasks.filter((task) => task.status === "in progress")}
        />
        <TasksRow
          className="flex-1"
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </div>
  );
}
