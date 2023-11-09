import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", () => {
      console.log(
        "MongoDB Connection Error, Please make sure your Mongo is running"
      );
      process.exit();
    });
  } catch (err) {
    console.log("something went wrong");
    console.log(err);
  }
}
