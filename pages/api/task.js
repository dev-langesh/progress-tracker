import { Task } from "@/model/taskModel";

export default async function handler(req, res) {
  const { title, url } = req.body;

  const task = await Task.create({ title, url });

  res.json({ task });
}
