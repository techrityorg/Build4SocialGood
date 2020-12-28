const dotEnv = require('dotenv')
const dotEnvFound = dotEnv.config();

if(!dotEnvFound) throw new Error("Could not find dotEnv file")

module.exports = {
    port: process.env.PORT || 2021,
    // databaseURI : process.env.MONGODB_URI || "mongodb://localhost/tractive_db",
    databaseURI : process.env.NODE_ENV==='production' ? process.env.MONGODB_URI : process.env.MONGODB_URI,
    publicKey: process.env.SECRET_TOKEN,
    email: process.env.EMAIL_ADRESS,
    password: process.env.EMAIL_PASSWORD,
    sessionKey: process.env.SESSIONKEY || 'f3e29360-dd0e-438c-80b8-b33c00ee6d8c'
}
