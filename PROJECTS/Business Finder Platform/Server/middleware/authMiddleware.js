const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Cookies received in request:", req.headers.cookie); // Log cookies

  const token = req.cookies.authToken; // Extract token from cookies
  if (!token) {
    console.log("No token found in cookies"); // Log missing token
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    console.log("Token to verify:", token); // Log token being verified
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    console.log("Verified user from token:", verified); // Log decoded token data
    req.user = verified; // Attach user info to the request
    next();
  } catch (err) {
    console.error("Token verification failed:", err); // Log error details
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken };

// הבעיה זה שהוא לא מגיע אפילו לשורה 2 הוא ישר מחזיר invalid token.
// מצד שני כן נשלח לפרונט הקוקי טוקן פשוט כנראה למקום הלא נכון?
// ה cookie token appers in the devtools Network when sending a req
//  but not in the application cookie storage??
