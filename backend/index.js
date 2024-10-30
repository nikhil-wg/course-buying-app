const express = require("express")
const { courseRouter}= require("./routes/courseRouter")
const { adminRouter}= require("./routes/adminRouter")
const { userRouter}= require("./routes/userRoute")
const app = express()

app.use("api/v1/users",userRouter)
app.use("api/v1/admin", adminRouter)
app.use("api/v1/courses",courseRouter)

app.listen(3000)