const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require("multer");
const upload = multer();

// auth
router.post("/register", authController.signUp);        // OK :)
router.post('/login', authController.signIn);           // OK :)
router.post('/logout', authController.logout);          // OK :)

//user display: 'block',
router.get('/', userController.getAllUsers);            // OK :)
router.get('/:id', userController.userInfo);            // OK :)
router.put("/:id", userController.updateUser);          // Error -_-
router.delete('/:id', userController.deleteUser);       // OK :)
router.patch('/follow/:id', userController.follow);     // Error : ID Unknown -_-
router.patch('/unfollow/:id', userController.unfollow); // Error : ID Unknown -_-

//upload
router.post('/upload', upload.single("file"), uploadController.uploadProfil); // Error : Comment faire ? -_-

module.exports = router;