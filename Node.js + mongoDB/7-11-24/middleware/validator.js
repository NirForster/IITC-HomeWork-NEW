export default function validateUser(req, res, next) {
  if (!req.body.name || !req.body.email || typeof req.body.name === "number") {
    return res.status(400).send({
      message: "Missing Fileds",
    });
  }

  next();
}
