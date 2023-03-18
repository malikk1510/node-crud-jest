const UserModal = require("../../models/users/user.model");
require("dotenv").config({ path: "../../.env" });

exports.createUserController = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const isExist = await UserModal.findOne({ email: req.body.email });

    if (isExist) {
      return res.status(400).json({
        error: "User already exists",
        data: null,
        code: 400,
      });
    }
    const newUser = new UserModal({
      email: req.body.email,
      userName: req.body.userName,
      contact: req.body.contact,
    });

    await newUser.save();
    res.status(201).json({ data: newUser, err: null, code: 201 });
  } catch (err) {
    console.log("err: ", err);
    res
      .status(500)
      .json({ error: "Something went wrong", data: null, code: 500 });
  }
};

exports.getUsersController = async (req, res) => {
  try {
    const users = await UserModal.find({});
    res.status(200).json({ data: users, err: null, code: 200 });
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: "Something went wrong", data: null, code: 500 });
  }
};

exports.updateUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModal.findOneAndUpdate(
      { email },
      { ...req?.body },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ data: null, err: "User not found", code: 404 });
    }
    res.status(200).json({ data: user, err: null, code: 200 });
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: "Something went wrong", data: null, code: 500 });
  }
};

exports.deleteUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModal.findOneAndDelete({ email });
    if (!user) {
      return res
        .status(404)
        .json({ data: null, err: "User not found", code: 404 });
    }
    res.status(200).json({ data: "User deleted", err: null, code: 200 });
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: "Something went wrong", data: null, code: 500 });
  }
};

exports.searchUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const users = await UserModal.find({ email });

    res.status(200).json({ data: users, err: null, code: 200 });
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: "Something went wrong", data: null, code: 500 });
  }
};
