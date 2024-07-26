import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
console.log('REFRESH_TOKEN_SECRET:', process.env.REFRESH_TOKEN_SECRET);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port :  ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});