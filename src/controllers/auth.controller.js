import jwt from "jsonwebtoken";


const default_user = {
  id: 1,
  email: "user_ANA@email.com",
  password: "Password12345",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  console.log("Email recibido:", email);
  console.log("Password recibido:", password);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  if (email === default_user.email && password === default_user.password) {
    const payload = { id: default_user.id };
    const expiration = { expiresIn: "1h" };

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);

    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }
};