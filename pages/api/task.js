import { connectDb } from "@/lib/connectDb";
import { Task } from "@/model/taskModel";

export default async function handler(req, res) {
  const { title, url } = req.body;

  connectDb();

  try {
    switch (req.method) {
      case "GET":
        const tasks = await Task.find({});

        return res.json(tasks);
      case "POST":
        const task = await Task.create({ title, url });

        return res.json({ task });
    }

    res.json({});
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}
