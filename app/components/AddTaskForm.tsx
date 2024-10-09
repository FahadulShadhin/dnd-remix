import React, { useState } from "react";
import { Task } from "../types/task";

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
  onCancel: () => void;
  status: string;
}

export function AddTaskForm({ onAddTask, onCancel, status }: AddTaskFormProps) {
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({ ...newTask, status, id: Date.now() });
    setNewTask({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-primary-200"
        required
      />
      <textarea
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-primary-200"
        required
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-primary-600 px-2 py-1 rounded-md text-sm hover:bg-gray-300 transition-all duration-300 ease-in-out"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-__green-100 text-primary-600 px-2 py-1 rounded-md text-sm hover:bg-__green-200 transition-all duration-300 ease-in-out"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
