import express from "express"
import { customUrlShortener, urlShortener } from "../controllers/urlController.js"

const router = express.Router()

//the post route that handles the full url.
router.post("/short-url", urlShortener)
router.post("/custom-url", customUrlShortener)

export default router
