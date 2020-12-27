const passport = require("passport")
const crypto = require('crypto');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtConfig");
const Fundee = require("../models/fundeesModel");

require('dotenv').config();
const nodemailer = require('nodemailer');
const BCRYPT_SALT_ROUNDS = 12;


const getFundees = async (req, res, next) => {
  Fundee.find()
  .then((data) => {
   jwt.verify(req.token, jwtSecret.secret, data, (err, authorizedData) => {
       if(err){
           //If error send Forbidden (403)
           console.log('ERROR: Could not connect to the fleets route');
           res.sendStatus(403);
       } else {
           //If token is successfully verified, we can send the autorized data
           res.status(200).json(
               // message: '',
               // authorizedData,
               data,
           );
           console.log('SUCCESS: Connected to farmers');
       }
   })
});
};

// register
const fundeeApplication = async (req, res, next) => {
    passport.authenticate('registerFundee', (err, user, info) => {
      if (err) {
        res.status(403).json({err: "Error! Please try again or check you inputs"});
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        req.logIn(user, error => {

          console.log("user");
          console.log(user);

          const { title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone,  country, image, password, password2   } = req.body

          const data = {
            title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone,  country, image,
            email: user.email,
          };
          console.log("data");
          console.log(data);
          Fundee.findOne({
              email: data.email
          }).then(user => {
            console.log(user);
            // const { title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone,  country, password, password2   } = data
            user
              .update({
                title: data.title,
                address: data.address,
                town: data.town,
                state: data.state,
                farmSize: data.farmSize,
                farmAddress: data.farmAddress,
                crops: data.crops,
                fullName: data.fullName,
                gender: data.gender,
                email: data.email,
                phone: data.phone,
                country: data.country,
                image: data.image,
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).json({ message: `Dear ${title} ${user.fullName}, You are successully registered, Thanks`});
                req.flash("success", "You are successfully logged In!");
                res.locals.message = req.flash();
              });
          });
        });
      }
    })(req, res, next);
};

// sign-in
const fundeeLogin = async (req, res, next) => {
      passport.authenticate('loginFundee', (err, users, info) => {
        if (err) {
          console.error(`error ${err}`);
        }
        if (info !== undefined) {
          console.error(info.message);
          if (info.message === 'Incorrect Email') {
            res.status(401).send(info.message);
          } else {
            res.status(403).send(info.message);
          }
        } else {
          req.logIn(users, () => {
            Fundee.findOne({
                email: req.body.email,
            }).then(user => {
              const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
                expiresIn: 60 * 60,
              })
              const {id, title, fullName, email, image} = user
              res.status(200).json({
                auth: true,
                token,
                user:{id, title, fullName, email, image },
                message: `You are successfully logged in`,
              });
            });
          });
        }
      })(req, res, next);
  };

  // find user
const findUser = async (req, res, next) => {
  passport.authenticate('jwtFundee', { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.status(401).send(info.message);
    } else if (user.email === req.query.email) {
      Fundee.findOne({
          email: req.query.email,
      }).then((userInfo) =>  {
        if (userInfo != null) {
          console.log('user found in db ');
          res.status(200).json({
            auth: true,
            title: userInfo.title,
            fullName: userInfo.fullName,
            gender: userInfo.gender,
            email: userInfo.email,
            phone: userInfo.phone,
            address: userInfo.address,
            town: userInfo.town,
            state: userInfo.state,
            country: userInfo.country,
            farmSize: userInfo.farmSize,
            farmAddress: userInfo.farmSize,
            crops: userInfo.crops,
            password: userInfo.password,
            image: userInfo.image,
            message: 'user found!',
          });
        } else {
          console.error('no user exists with that email');
          res.status(401).json('no user exists with that email');
        }
      });
    } else {
      console.error('jwt id and email do not match');
      res.status(403).json('email and jwt token do not match');
    }
  })(req, res, next);
};

  // forgot password
  const forgotPassword = async (req, res, next) => {
      if (req.body.email === '') {
        res.status(400).send('email required');
      }
      console.error(req.body.email);
      Fundee.findOne({
          email: req.body.email,
      }).then((user) => {
        if (user === null) {
          console.error('email not found!');
          res.status(403).send('email not found');
        } else {
          const token = crypto.randomBytes(20).toString('hex');
          user.update({
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000,
          });

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });

          const mailOptions = {
            from: 'ibrahim.saliman.zainab@gmail.com',
            to: `${user.email}`,
            subject: 'Link To Reset Password',
            text:
              'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
              + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
              + `http://localhost:3000/reset/${token}\n\n`
              + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
          };

          console.log('sending mail');

          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('there was an error: ', err);
            } else {
              console.log('here is the res: ', response);
              res.status(200).json('recovery email sent');
            }
          });
        }
      });
  };

  // reset password
  const resetPassword = async (req, res, next) => {
      Fundee.findOne({
          resetPasswordToken: req.query.resetPasswordToken,
          resetPasswordExpires:  Date.now() + 3600000,
      }).then((user) => {
        if (user == null) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else {
          res.status(200).send({
            email: user.email,
            message: 'password reset link sent!',
          });
        }
      });
  };


  // update password
  const updatePassword = async (req, res, next) => {
      passport.authenticate('jwtFundee', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          Fundee.findOne({
              email: req.body.email,
          }).then((userInfo) => {
            if (userInfo != null) {
              console.log('user found!');
              bcrypt
                .hash(req.body.password, BCRYPT_SALT_ROUNDS)
                .then((hashedPassword) => {
                  userInfo.update({
                    password: hashedPassword,
                  });
                })
                .then(() => {
                  console.log('password updated');
                  res
                    .status(200)
                    .send({ auth: true, message: 'password updated' });
                });
            } else {
              console.error('no user exists in db to update');
              res.status(404).json('no user exists in db to update');
            }
          });
        }
      })(req, res, next);
  };

  // update password via Email
  const updatePasswordViaEmail = async (req, res, next) => {
      Fundee.findOne({
          email: req.body.email,
          resetPasswordToken: req.body.resetPasswordToken,
          resetPasswordExpires:  Date.now(),
      }).then(user => {
        if (user == null) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else if (user != null) {
          console.log('user exists! ');
          bcrypt
            .hash(req.body.password, BCRYPT_SALT_ROUNDS)
            .then(hashedPassword => {
              user.update({
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null,
              });
            })
            .then(() => {
              console.log('password updated');
              res.status(200).send({ message: 'password updated' });
            });
        } else {
          console.error('no user exists in db to update');
          res.status(401).json('no user exists in db to update');
        }
      });
  };

  // delete user
  const deleteUser = async (req, res, next) => {
      passport.authenticate('jwtFundee', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          Fundee.destroy({
              email: req.query.email,
          })
            .then((userInfo) => {
              if (userInfo === 1) {
                console.log('user deleted from db');
                res.status(200).send('user deleted!');
              } else {
                console.error('user not found in db');
                res.status(404).send('no user with that email to delete');
              }
            })
            .catch((error) => {
              console.error('problem communicating with db');
              res.status(500).send(error);
            });
        }
      })(req, res, next);
  };

// update user
  const updateProfile = async (req, res, next) => {
      passport.authenticate('jwtFundee', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          Fundee.findOne({
              email: req.body.email,
          }).then((userInfo) => {
            if (userInfo != null) {
              console.log('user found in db');

              const { title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone, image, country,  } = req.body
              userInfo
                .update({
                  title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone, image, country,
                })
                .then(() => {
                  console.log('user updated');
                  res.status(200).send({ auth: true, message: 'user updated' });
                });
            } else {
              console.error('no user exists in db to update');
              res.status(401).send('no user exists to update');
            }
          });
        }
      })(req, res, next);

  };


module.exports = {
    fundeeLogin,
    fundeeApplication,
    forgotPassword,
    resetPassword,
    updatePassword,
    updatePasswordViaEmail,
    getFundees,
    findUser,
    deleteUser,
    updateProfile,
};
