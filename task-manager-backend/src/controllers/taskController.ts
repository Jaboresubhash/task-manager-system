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