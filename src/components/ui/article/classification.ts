export type ArticleItem = {
	id: string
	title: string
	excerpt?: string
	image?: string
	href: string
	author?: string
	date?: string
}

export type ArticleClass =
	| 'podcaster-stories'
	| 'ensiklopedi-traveler'
	| 'insight-langkah-liar'

export const ArticleClassLabels: Record<ArticleClass, string> = {
	'podcaster-stories': 'Podcaster Stories',
	'ensiklopedi-traveler': 'Ensiklopedi Traveler',
	'insight-langkah-liar': 'Insight Langkah Liar',
}

export type ClassifiedGroup = {
	kind: ArticleClass
	label: string
	items: ArticleItem[]
}

export const samplePodcasterStories: ArticleItem[] = [
	{ id: 'ps-1', title: 'Mendaki Sebuah Hidup', excerpt: 'Obrolan intim di balik puncak gunung.', image: '/podcast1.jpg', href: '/artikel/podcaster-stories/mendaki-sebuah-hidup', author: 'Arif', date: '2025-08-10' },
	{ id: 'ps-2', title: 'Nada di Atas Ombak', excerpt: 'Musisi yang berlayar mencari inspirasi.', image: '/podcast2.jpg', href: '/artikel/podcaster-stories/nada-di-atas-ombak', author: 'Sari', date: '2025-08-18' },
	{ id: 'ps-3', title: 'Jejak Budaya', excerpt: 'Pemandu budaya bercerita tentang warisan.', image: '/podcast3.jpg', href: '/artikel/podcaster-stories/jejak-budaya', author: 'Budi', date: '2025-09-01' },
]

export const sampleEnsiklopediTraveler: ArticleItem[] = [
	{ id: 'et-1', title: 'Taman Nasional Way Kambas', excerpt: 'Habitat gajah sumatera dan rawa gambut.', image: '/hitam.png', href: '/artikel/ensiklopedi/way-kambas' },
	{ id: 'et-2', title: 'Candi Prambanan', excerpt: 'Kompleks candi Hindu abad ke-9.', image: '/hitam.png', href: '/artikel/ensiklopedi/prambanan' },
	{ id: 'et-3', title: 'Kain Tenun Sumba', excerpt: 'Teknik ikat yang diwariskan turun-temurun.', image: '/hitam.png', href: '/artikel/ensiklopedi/tenun-sumba' },
	{ id: 'et-4', title: 'Danau Toba', excerpt: 'Kaldera supervolcano terbesar.', image: '/hitam.png', href: '/artikel/ensiklopedi/danau-toba' },
]

export const sampleInsightLangkahLiar: ArticleItem[] = [
	{ id: 'il-1', title: 'Packing Ultralight 7 Hari', excerpt: 'Checklist sederhana untuk lintas pulau.', image: '/hitam.png', href: '/artikel/insight/packing-ultralight' },
	{ id: 'il-2', title: 'Etika Naik Gunung', excerpt: 'Leave No Trace versi Nusantara.', image: '/hitam.png', href: '/artikel/insight/etika-naik-gunung' },
	{ id: 'il-3', title: 'Negosiasi Homestay', excerpt: 'Tips mendapatkan harga lokal.', image: '/hitam.png', href: '/artikel/insight/negosiasi-homestay' },
]

export const classifiedGroups: ClassifiedGroup[] = [
	{ kind: 'podcaster-stories', label: ArticleClassLabels['podcaster-stories'], items: samplePodcasterStories },
	{ kind: 'ensiklopedi-traveler', label: ArticleClassLabels['ensiklopedi-traveler'], items: sampleEnsiklopediTraveler },
	{ kind: 'insight-langkah-liar', label: ArticleClassLabels['insight-langkah-liar'], items: sampleInsightLangkahLiar },
]

