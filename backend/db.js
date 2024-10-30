const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nikhilwagh:5WSn0TnVuKNfMPci@cluster0.i8ue7.mongodb.net/courses-app"
);
console.log("conneting db")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const coursesSchema = new Schema({
  title: String,
  decription: String,
  price: Number,
  imageURL: String,
  createrId: ObjectId,
});
const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", usersSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", coursesSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.export = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
