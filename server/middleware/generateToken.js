import jwt from "jsonwebtoken";

exports.generateToken = (id, role) => {
  const token = jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  console.log(token);
  return token;
};
export default jwt;