const bcrypt = require("bcrypt");
const jwtSecret = require("./jwtConfig");

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Fundee = require("../models/fundeesModel");

// fundee
passport.use(
    'registerFundee',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        session: false,
      },
      (req, email, password, done) => {
        console.log(email);
        console.log(req.body.email);

        try {
          Fundee.findOne({
                email: email
          }).then(user => {
            if (user != null) {
              console.log('email already taken');
              return done(null, false, {
                message: 'email already taken',
              });
            }
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                const { title, address, town, state, farmSize, farmAddress, crops, fullName, gender, email, phone,  country, password, image, password2   } = req.body
              Fundee.create({
                email, title, address, town, state, farmSize, farmAddress, crops, fullName, gender, phone,  country, image,
                password: hashedPassword,
                email: req.body.email,
              }).then(user => {
                console.log('user created');
                return done(null, user);
              });
            });
          });
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  passport.use(
    'loginFundee',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: false,
      },
      (email, password, done) => {
        try {
          Fundee.findOne({
              email,
          }).then(user => {
            if (user === null) {
              return done(null, false, { message: 'Incorrect Email' });
            }
            bcrypt.compare(password, user.password).then(response => {
              if (response !== true) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              return done(null, user);
            });
          });
        } catch (err) {
          done(err);
        }
      },
    ),
  );


  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWTF'),
    secretOrKey: jwtSecret.secret,
  };

  passport.use(
    'jwtFundee',
    new JWTstrategy(opts, (jwt_payload, done) => {
      try {
        Fundee.findById(
            jwt_payload.id
        ).then(user => {
          if (user) {
            console.log('user found!');
            done(null, user);
          } else {
            console.log('user not found');
            done(null, false);
          }
        });
      } catch (err) {
        done(err);
      }
    }),
  );
