export default function validateUser(req, res, next) {
  const { name, email, role } = req.body;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: "Name is required and must be a string." });
  }

  if (!email || typeof email !== "string") {
    return res
      .status(400)
      .json({ error: "Email is required and must be a string." });
  }

  const validRoles = ["Admin", "Member"];
  if (role && !validRoles.includes(role)) {
    return res.status(400).json({
      error: `Role must be one of the following: ${validRoles.join(", ")}.`,
    });
  }

  next();
}
