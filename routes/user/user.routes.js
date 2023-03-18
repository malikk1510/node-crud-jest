const router = require("express").Router();

//controllers
const {
  createUserController,
  getUsersController,
  updateUserController,
  deleteUserController,
  searchUserController,
} = require("../../controllers/user/user.controller");

//routes

router.post("/api/create/user", createUserController);
router.get("/api/get/users", getUsersController);
router.patch("/api/update/user", updateUserController);
router.delete("/api/delete/user", deleteUserController);
router.get("/api/search/user", searchUserController);

module.exports = router;
