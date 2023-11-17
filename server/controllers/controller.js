const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
const { guessSurah, guessVerse } = require("quran-quiz");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(req.user);
      let user = await User.create({
        email,
        password,
      });
      res.status(201).json({
        msg: `User id ${user.id} successfully created`,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please Input Email/Password");
      }
      let user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("Invalid Login");
      }
      const isValid = comparePassword(password, user.password);
      if (!isValid) {
        throw new Error("Invalid Email/Password");
      }
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = createToken(payload);
      res.status(200).json({
        id: user.id,
        access_token: token,
      });
    } catch (error) {
      //   console.log(error, 49);
      next(error);
    }
  }

  // Fungsi untuk mendapatkan data tebak surah berdasarkan rentang surah tertentu
  static guessSurahBySurah(req, res, next) {
    try {
      async function getQuizData(startSurah, endSurah, amount) {
        const surahRange = [];
        for (let i = startSurah; i <= endSurah; i++) {
          surahRange.push(i);
        }
        // console.log(surahRange, 63);
        const data = await guessSurah.bySurah({
          amount: amount,
          select: surahRange,
        });
        // console.log(data);
        res.status(200).json({
          data,
        });
      }
      getQuizData(78, 114, 5);
    } catch (error) {
      console.log(error);
    }
  }

  static guessVerseBySurah(req, res, next) {
    try {
      async function getQuizData(startSurah, endSurah, amount) {
        const surahRange = [];
        for (let i = startSurah; i <= endSurah; i++) {
          surahRange.push(i);
        }
        const data = await guessVerse.bySurah({
          amount: amount,
          select: surahRange,
        });
        // console.log(data);
        res.status(200).json({
          data,
        });
      }
      getQuizData(46, 114, 5);
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchUsers(req, res, next) {
    try {
      const data = await User.findAll({
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        order: [["points", "DESC"]],
      });
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUserPoints(req, res, next) {
    // console.log("masuk ga");
    try {
      const { totalPoints } = req.body;
      // console.log(req.body);
      const user = await User.findByPk(req.user.userId);
      if (user) {
        await User.update(
          {
            points: user.points + totalPoints,
          },
          {
            where: {
              id: user.id,
            },
          }
        );
        res.status(200).json({
          message: "sfdgfghjjk",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
