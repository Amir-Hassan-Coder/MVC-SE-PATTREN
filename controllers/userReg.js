import { User } from "../Models/user.js";

  export const userRegister =  async (req, res) => {
  console.log('Body Data:', req.body);

  try {
    const user = await User.create(req.body);
    res.json({
      msg: "User Created Successfully",
      newUser: user,
      success: true
    });
  } catch (error) {
    console.log("User model error:", error);
    res.json({ msg: "User model error", error });
  }
}
