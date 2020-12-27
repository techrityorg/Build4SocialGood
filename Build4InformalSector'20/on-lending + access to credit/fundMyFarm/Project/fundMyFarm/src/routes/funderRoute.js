const express = require("express");
const app = express();
const router = express.Router();
const checkToken = require("../middlewares/verifyToken")

const {
    funderLogin,
    funderApplication,
    forgotPassword,
    resetPassword,
    updatePassword,
    updatePasswordViaEmail,
    getFunders,
    findUser,
    deleteUser,
    updateUser
} = require("../controllers/fundersControllers")


// owners routes ownersControllers
router.get('/', checkToken, getFunders);
router.post('/signup', funderApplication);
router.post('/signin', funderLogin);
router.get('/find-user', findUser);
router.get('/forgot-password', forgotPassword);
router.get('/reset-password', resetPassword);
router.get('/update-password', updatePassword);
router.get('/update-password-via-email', updatePasswordViaEmail);
router.delete('/delete-user', deleteUser)
router.put('/updateUser', updateUser)

module.exports = router;
