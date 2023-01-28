import { User } from "@/model/user.model";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const completedTasks = await User.findOne({
          email: req.params.email,
        }).select("completed");

        return res.json({ completedTasks });

      case "POST":
        const { email, id } = req.body;

        const user = await User.findOneAndUpdate(
          { email },
          { $push: { completed: id } }
        );

        return res.json({ message: "Marked as completed" });
    }
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}
