"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/src/services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[] | undefined>([]);
  const [title, setTitle] = useState("");
const [editId, setEditId] = useState<number | null>(null);

const fetchTasks = async () => {
  try {
    const response = await api.getTasks();

    console.log("FULL RESPONSE:", response);

    // 👇 SAFE EXTRACTION
    const data = response?.data ?? [];

    setTasks(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    setTasks([]); // fallback
  }
};
const handleSubmit = async () => {
  if (!title) return alert("Title required");

  try {
    if (editId) {
      await api.updateTask(editId, { title });
      setEditId(null);
    } else {
      await api.createTask({ title });
    }

    setTitle("");
    fetchTasks();
  } catch (error) {
    console.error("Error saving task:", error);
  }
};
const handleDelete = async (id: number) => {
  try {
    await api.deleteTask(id);
    fetchTasks();
  } catch (error) {
    console.error("Delete error:", error);
  }
};
const handleEdit = (task: any) => {
  setTitle(task.title);
  setEditId(task.id);
};
const toggleStatus = async (task: any) => {
  try {
    await api.updateTask(task.id, {
      status: task.status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  } catch (error) {
    console.error("Status error:", error);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6 pb-4 border-b">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          ← Back to Home
        </Link>
      </div>

 <h1 className="text-xl font-bold mb-4">Tasks</h1>

    {/* ✅ ADD TASK INPUT */}
    <div className="mb-4 flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className="border p-2 rounded w-64"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editId ? "Update" : "Add"}
      </button>
    </div>

{!Array.isArray(tasks) || tasks.length === 0 ? (
  <p>No tasks found</p>
) : (
  tasks.map((task: any) => (
    <div
      key={task.id}
      className="border p-3 mb-2 rounded flex justify-between items-center"
    >
      <div>
        <h2 className="font-semibold">{task.title}</h2>
        <p
          className={
            task.status === "completed"
              ? "text-green-600"
              : "text-yellow-600"
          }
        >
          {task.status}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleEdit(task)}
          className="bg-yellow-400 px-2 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>

        <button
          onClick={() => toggleStatus(task)}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Toggle
        </button>
      </div>
    </div>
  ))
)}
    </div>
  );
}