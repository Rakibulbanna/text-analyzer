const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {


  try {
    const user_id = await getUserId(req);
    if (user_id) {
      req.userId = user_id;
      next();
    } else {
      throw new Error("Unauthenticated");
    }
   
  } catch (error) {
    // console.log('error', error)
    return res.status(401).json({
      status: 401,
      message: error.message,
    });
  }
};
const getUserId = async (req) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const verify = jwt.verify(token, process.env.SECRET);
    return verify.userId;
  } catch (err) {
    return null;
  }
};
module.exports = { auth, getUserId };
