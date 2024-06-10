function readAuthData(req, res, next) {
  let authData = null;
  if (req.body.auth || req.headers.authorization) {
    authData = req.body.auth || req.headers.authorization;
  }

  if (authData) {
    console.log("Auth data provided: " + authData);
    req.authMiddleware = {};
    req.authMiddleware.data = authData;
    next();
  } else {
    res.json({
      message: "Please login before continuing",
    });
  }
}

function verifyAuthData(req, res, next) {
  let localCopyOfAuthData = req.authMiddleware.data;

  console.log(localCopyOfAuthData);
  next();
}
module.exports = { readAuthData, verifyAuthData };
