const { User } = require("@/model/user.model");

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        let users;

        const email = req.query.email;

        if (email) {
          users = await User.find({ email });
        } else {
          users = await User.find({});
        }

        return res.json(users);
      case "POST":
        const isUser = await User.findOne({ email: req.body.email });

        if (isUser) {
          return res.json({ user: isUser });
        }
        const user = await User.create(req.body);

        res.json({ user });
    }
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}
