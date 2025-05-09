import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
  console.log("Generated token:", token);
  return token;
};

export default generateToken;
