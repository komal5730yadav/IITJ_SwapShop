import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
export const isSameAdmin = async (req, res, next) => {
  try {
    const productCreatorId = req.body.productCreatorId; // Assuming this is how you pass the creator ID
    if (req.user._id.toString() === productCreatorId.toString()) {
      next(); // The user is the same admin who created the product
    } else {
      return res.status(401).send({
        success: false,
        message: "You are not authorized to edit this product.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in isSameAdmin middleware",
    });
  }
};
