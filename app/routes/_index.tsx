import { TasksRow } from "~/components/TasksRow";
import { tasks } from "~/data/tesks";

export default function Index() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-screen gap-4 max-w-7xl mx-auto p-4">
        <TasksRow
          className="bg-peach-100 flex-1 shadow-md md:shadow-xl"
          title="To do"
          tasks={tasks.filter((task) => task.status === "to do")}
        />
        <TasksRow
          className="bg-cream-100 flex-1 shadow-md md:shadow-xl"
          title="In progress"
          tasks={tasks.filter((task) => task.status === "in progress")}
        />
        <TasksRow
          className="bg-dndGreen-100 flex-1 shadow-md md:shadow-xl"
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </div>
  );
}
