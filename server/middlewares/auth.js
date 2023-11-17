const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");
// const { ver } = require("");

async function authentication(req, res, next) {
  try {
    const { authorization } = req.headers;
    // console.log(authorization, 6);

    if (!authorization) {
      throw {
        name: "Unauthorized",
        message: "Unauthorized",
      };
    }
    const access_token = authorization.split(" ")[1];
    // console.log(access_token), 11;
    if (!access_token) {
      throw {
        name: "Unauthenticated",
        message: "tidak ada token yang ditemukan",
      };
    }

    const decoded = verifyToken(access_token);

    req.user = {
      userId: decoded.id,
      email: decoded.email,
    };

    next();
  } catch (error) {
    // console.log(error, 43);
    next(error);
  }
}

function authorization(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    const id = req.params.id;
    // console.log(id, 53);
    Cuisine.findByPk(id)
      .then((data) => {
        if (!data) {
          throw new Error();
        } else if (data.authorId === req.user.id) {
          next();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .catch((err) => {
        // console.log(err, 64);
        next(err);
      });
  }
}

function authorized(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    next({
      name: "Forbidden",
      message: "only user with role admin can add user",
    });
  }
}

module.exports = {
  authentication,
  authorization,
  authorized,
};
