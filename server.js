require("dotenv").config({path: "./config.env"})
const passport = require("passport");
require("./utils/passportSetup");

let express = require("express");
let app = express();
const connectdb = require("./config/db.js");

const PORT = process.env.PORT || 5000;
const server=app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
connectdb();

app.use(passport.initialize());
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/private",require("./routes/private"));
app.use ("/api/oAuth" , require("./routes/oAuth"))

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success:false,
        error: err.message,
    })
});

process.on("unhandledRejection",(error,promise)=>{
    console.log("logged error: "+ error);
    server.close(()=>process.exit(1))
})
