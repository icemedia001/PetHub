//import thr model from the models folder
import { ShortUrl } from "../models/urlModel.js"

//shortId is a package that shortens the url.
import shortId from "shortid"

// this is the function that does that shortening work
export const urlShortener = async (req, res) => {
	const { fullUrl } = req.body
	try {
		if (!fullUrl) {
			throw Error("Full url must be provided to get the short form")
		} else {
			const shortUrl = shortId.generate()
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
		}
	} catch (error) {
		res.status(500).json({ success: false, message: error.message })
	}
}

export const customUrlShortener = async (req, res) => {
	const { fullUrl, customUrl } = req.body
	try {
		const match = await ShortUrl.findOne({ shortUrl: customUrl })

		if (match) {
			console.log(match)
			return res.status(500).json({ success: false, message: "Short Url already in use" })
		} else {
			console.log("No match")
			const response = await ShortUrl.create({ fullUrl, shortUrl: customUrl })
			res.status(201).send({
				success: true,
				message: "Custom short url created successfully.",
				response
			})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: error.message })
	}
}
