const express = require("express");
const Controller = require("../controllers/controller");
const { authentication } = require("../middlewares/auth");
const AuthController = require("../controllers/authController");
const router = express.Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.post("/google-login", AuthController.googleLogin);
router.use(authentication);
router.get("/surah", Controller.guessSurahBySurah);
router.get("/verse", Controller.guessVerseBySurah);
router.get("/users", Controller.fetchUsers);
router.patch("/user-points", Controller.updateUserPoints);

module.exports = router;
