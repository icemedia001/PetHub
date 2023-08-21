import express from "express"
import { urlShortener } from "../controllers/urlController.js"

const router = express.Router()

//the post route that handles the full url.
router.post("/short-url", urlShortener)

export default router
