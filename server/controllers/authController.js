const { User } = require("../models");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const nodemailer = require("nodemailer");
class AuthController {
  static async googleLogin(req, res, next) {
    try {
      const { token } = req.headers;
      const client = new OAuth2Client();
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "123456",
          username: payload.name,
        },
        hooks: false,
      });
      const access_token = createToken({ id: user.id });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "qurizziz@gmail.com",
          pass: process.env.APP_PASSWORD,
        },
      });
      const sendEmail = transporter.sendMail({
        from: "noreply",
        to: user.email,
        subject: "Welcome to Qurizziz",
        text: "Thank you for sign in",
      });
      res.status(200).json({ access_token });
      // console.log("email berhasil dikirim");
    } catch (error) {
      next(error);
      // console.log(error, 44);
    }
  }
}

module.exports = AuthController;
