import React, { useState } from "react";
import { CardDropArea } from "./CardDropArea";
import { TaskCard } from "./TaskCard";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Task } from "../types/task";
import { AddTaskForm } from "./AddTaskForm";

interface TasksColumnProps {
  className?: string;
  title: string;
  tasks: Task[];
  setActiveTask: (id: number | null) => void;
  onDrop: (status: string, position: number) => void;
  onAddTask: (task: Task) => void;
}

export function TasksColumn({
  className,
  title,
  tasks,
  setActiveTask,
  onDrop,
  onAddTask,
}: TasksColumnProps) {
  const [showForm, setShowForm] = useState(false);

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

        {tasks.map(
          (task, index) =>
            task.status === title.toLowerCase() && (
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
            )
        )}

        {showForm ? (
          <AddTaskForm
            onAddTask={(task: Task) => {
              onAddTask(task);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
            status={title.toLowerCase()}
          />
        ) : (
          <button
            className="bg-__white-100 text-primary-600 rounded-md w-full p-4 flex items-center justify-center gap-2 hover:bg-__white-200 transition-all duration-300 ease-in-out"
            onClick={() => setShowForm(true)}
          >
            Add
            <IoIosAddCircleOutline className="text-primary-600 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
}
