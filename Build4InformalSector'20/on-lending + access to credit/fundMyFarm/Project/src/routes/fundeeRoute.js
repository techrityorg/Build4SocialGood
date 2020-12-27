const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/verifyToken")

const {
    fundeeLogin, fundeeApplication, forgotPassword, resetPassword, updatePassword, updatePasswordViaEmail, getFundees, findUser, deleteUser, updateProfile, farmerLogout
} = require("../controllers/fundeesControllers")

// user routes farmersControllers
router.get('/', checkToken, getFundees);
router.post('/signup', fundeeApplication);
router.post('/signin', fundeeLogin);
router.get('/find-user', findUser);
router.post('/forgot-password', forgotPassword);
router.get('/reset', resetPassword);
router.put('/update-password', updatePassword);
router.put('/update-password-via-email', updatePasswordViaEmail);
router.delete('/delete-user', deleteUser)
router.put('/updateUser', updateProfile)


module.exports = router;
