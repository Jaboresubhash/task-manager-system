"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/src/services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
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

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task: any) => (
          <div key={task.id} className="border p-3 mb-2 rounded">
            <h2 className="font-semibold">{task.title}</h2>
            <p>{task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}