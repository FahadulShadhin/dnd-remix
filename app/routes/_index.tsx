import { tasksData } from "~/data/tasks";
import { TasksColumn } from "~/components/TasksColumn";
import { useState } from "react";
import { Task } from "~/types/task";

export default function Index() {
  const [activeTask, setActiveTask] = useState<number | null>(null);
  const [tasks, setTasks] = useState(tasksData);

  const handleOnDrop = (status: string, position: number) => {
    if (activeTask === null || activeTask === undefined) return;

    const taskToMove = tasks[activeTask];
    const updatedTasks = tasks.filter((_, index) => index !== activeTask);
    
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status,
    });

    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, {...newTask, id: Date.now()}]);
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto p-4">
        <TasksColumn
          className="flex-1"
          title="to do"
          tasks={tasks}
          setActiveTask={setActiveTask}
          onDrop={handleOnDrop}
          onAddTask={handleAddTask}
        />
        <TasksColumn
          className="flex-1"
          title="in progress"
          tasks={tasks}
          setActiveTask={setActiveTask}
          onDrop={handleOnDrop}
          onAddTask={handleAddTask}
        />
        <TasksColumn
          className="flex-1"
          title="completed"
          tasks={tasks}
          setActiveTask={setActiveTask}
          onDrop={handleOnDrop}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
}
