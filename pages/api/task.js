import { connectDb } from "@/lib/connectDb";
import { Task } from "@/model/taskModel";
import { User } from "@/model/user.model";

export default async function handler(req, res) {
  const { title, url } = req.body;

  const id = req.query.id;

  connectDb();

  try {
    switch (req.method) {
      case "GET":
        const tasks = await Task.find({}).sort({ _id: "desc" });

        return res.json(tasks);
      case "POST":
        const task = await Task.create({ title, url });

        return res.json({ task });

      case "DELETE":
        const deletedTask = await Task.findByIdAndDelete(id);

        await User.updateMany({}, { $pull: { completed: id } });

        return res.json({ deletedTask });

      default:
        return res.json({});
    }
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}
