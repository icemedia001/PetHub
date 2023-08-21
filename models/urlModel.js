import mongoose from "mongoose"

const shortUrlSchema = new mongoose.Schema({
	fullUrl: {
		type: String,
		required: true
	},
	shortUrl: {
		type: String,
		required: true,
		unique: true
	}
})
export const ShortUrl = mongoose.model("shortUrl", shortUrlSchema)
