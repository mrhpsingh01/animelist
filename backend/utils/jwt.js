const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    "sada9429ada9d2r9qafda"
  );
  return token;
};

module.exports = { generateToken };
