import dotenv from "dotenv"
import express from "express"
// import bodyParser from "body-parser"
import shortUrlRoute from "./Routes/shortUrlRoute.js"
import connectDB from "./config/db.js"

dotenv.config()

//connect to database
connectDB()

const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

//API route for to handle the full urls
app.use("/api", shortUrlRoute)

const port = 4000
app.listen(port, () => {
	console.log(`App is listening on port ${port}.`)
})
