export const metaTitle = "Langkah Liar — Traveler podcast & stories";
// <= 120 characters for succinct search snippets
export const metaDescription = "Langkah Liar: Podcast & stories from Indonesian travelers — tips, trail tales, and local wisdom for adventurous journeys.";

export const metaImage = "/vite.svg" // replace with a production image path if available
export const metaFavicon = "/favicon.ico" // served from public/favicon.ico

// Focus keyphrases (primary suggestions for homepage)
export const focusKeyphrases = [
	"podcast traveler",
	"podcast pendaki",
	"cerita traveler",
	"cerita pendaki",
	"travel podcast"
]

// Per-page meta suggestions (title, description, focusKeyphrase)
export const pageMetaSuggestions: Record<string, { title: string; description: string; focusKeyphrase: string }> = {
	home: {
		title: metaTitle,
		description: metaDescription,
		focusKeyphrase: "podcast traveler"
	},
	podcasts: {
		title: "Tayangan — Langkah Liar Podcasts",
		description: "Listen to field stories, interviews, and audio guides from local travelers and experts.",
		focusKeyphrase: "podcast traveler"
	},
	trips: {
		title: "Trip — Langkah Liar",
		description: "Discover upcoming trips, itineraries, and responsible travel experiences.",
		focusKeyphrase: "trip pendaki"
	},
	artikel: {
		title: "Artikel — Langkah Liar",
		description: "Cultural and natural reference entries from across the Indonesian archipelago.",
		focusKeyphrase: "cerita traveler"
	},
	about: {
		title: "About — Langkah Liar",
		description: "Who we are, our mission to preserve local stories, and how to partner with us.",
		focusKeyphrase: "cerita pendaki"
	},
	shop: {
		title: "Shop — Langkah Liar Shop",
		description: "Curated gear, media, and artisan goods supporting local communities.",
		focusKeyphrase: "travel podcast"
	}
}
