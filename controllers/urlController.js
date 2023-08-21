//import thr model from the models folder
import { ShortUrl } from "../models/urlModel.js"

//shortId is a package that shortens the url.
import shortId from "shortid"

// this is the function that does that shortening work
export const urlShortener = async (req, res) => {
	const { fullUrl } = req.body
	const shortUrl = shortId.generate()
	try {
		const match = await ShortUrl.findOne({ shortUrl })
		if (match == null) {
			const response = await ShortUrl.create({ fullUrl, shortUrl })
			res.status(201).send({
				success: true,
				message: "Shortened a url successfully.",
				response
			})
		} else {
			throw Error("Url already in use")
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: "Something went wrong" })
	}
}
