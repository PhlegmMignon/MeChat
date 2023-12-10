import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // mongoose.set('strictQuery', false);
    // const mongoDB = process.env.MONGO_URI;

    await mongoose.connect(
      "mongodb+srv://dmah:1OwJGwvO3IuHhnby@cluster0.norklw2.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Succesfully connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;

// if {!process.env.MONGODB_URL} {
//   throw new Error('Add Mongo URI to env')
// }

// function dbRequests() {
//   const getMessage = (details: object) => {
//     fetch("", {
//       method: "GET",
//       mode: "cors",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "http://localhost:5173",
//       },
//       body: JSON.stringify(details),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         // res.success ? setIsHighscore(false) : console.log("Err on score post");
//         return;
//       })
//       .catch((err) => console.log("Err on score post" + err));
//   };

//   const getLogin = () => {};

//   const postSignup = () => {};

//   const getDemo = () => {};
// }

// export default dbRequests;
