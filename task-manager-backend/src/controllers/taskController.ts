import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const createTask = async (req: any, res: Response) => {
  const { title, description } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      userId: req.user.userId,
    },
  });

  res.json(task);
};

export const getTasks = async (req: any, res: Response) => {
  const { search = "", status, page = 1, limit = 10 } = req.query;

  const tasks = await prisma.task.findMany({
    where: {
      userId: req.user.userId,
      title: { contains: search },
      ...(status && { status }),
    },
    skip: (page - 1) * limit,
    take: Number(limit),
  });

  res.json(tasks);
};

export const updateTask = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const { title, status, description } = req.body;

    const task = await prisma.task.update({
      where: {
        id: id, // UUID string
      },
      data: {
        ...(title && { title }),
        ...(status && { status }),
        ...(description && { description }),
      },
    });

    res.json(task);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update task" });
  }
};

export const deleteTask = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.task.delete({
      where: {
        id: id,
      },
    });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};

