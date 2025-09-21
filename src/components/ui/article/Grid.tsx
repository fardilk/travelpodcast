import type { ArticleItem } from './classification'

type GridProps = { items: ArticleItem[]; title: string; hrefBase?: string }

// 1) Podcaster Stories: feature a large lead card + two small stacked
export function PodcasterStoriesGrid({ items, title }: GridProps) {
	const [lead, ...rest] = items
	return (
		<section className="mt-10">
			<h2 className="text-xl font-semibold">{title}</h2>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
				{lead && (
					<a href={lead.href} className="md:col-span-2 group rounded-xl overflow-hidden bg-neutral-800/30 border border-white/10">
						<img src={lead.image} alt={lead.title} className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
						<div className="p-4">
							<h3 className="text-lg font-medium">{lead.title}</h3>
							{lead.excerpt && <p className="text-sm text-neutral-300 mt-1">{lead.excerpt}</p>}
						</div>
					</a>
				)}
				<div className="space-y-4">
					{rest.slice(0, 2).map((it) => (
						<a key={it.id} href={it.href} className="group flex items-center gap-3 rounded-xl overflow-hidden bg-neutral-800/30 border border-white/10 p-2">
							<img src={it.image} alt={it.title} className="w-24 h-16 object-cover rounded-md" />
							<div>
								<h4 className="font-medium leading-tight">{it.title}</h4>
								{it.excerpt && <p className="text-xs text-neutral-400 line-clamp-2">{it.excerpt}</p>}
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

// 2) Ensiklopedi Traveler: uniform 2xN grid of compact cards
export function EnsiklopediTravelerGrid({ items, title }: GridProps) {
	return (
		<section className="mt-10">
			<h2 className="text-xl font-semibold">{title}</h2>
			<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
				{items.map((it) => (
					<a key={it.id} href={it.href} className="group rounded-xl overflow-hidden bg-neutral-800/30 border border-white/10">
						<img src={it.image} alt={it.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
						<div className="p-3">
							<h3 className="font-medium">{it.title}</h3>
							{it.excerpt && <p className="text-sm text-neutral-400 mt-1 line-clamp-2">{it.excerpt}</p>}
						</div>
					</a>
				))}
			</div>
		</section>
	)
}

// 3) Insight Langkah Liar: list with large left thumbnails and meta
export function InsightLangkahLiarGrid({ items, title }: GridProps) {
	return (
		<section className="mt-10">
			<h2 className="text-xl font-semibold">{title}</h2>
			<div className="mt-4 space-y-4">
				{items.map((it) => (
					<a key={it.id} href={it.href} className="group flex gap-4 rounded-xl bg-neutral-800/30 border border-white/10 p-3">
						<img src={it.image} alt={it.title} className="w-36 h-24 md:w-48 md:h-28 object-cover rounded-md" />
						<div className="flex-1">
							<h3 className="font-medium">{it.title}</h3>
							{it.excerpt && <p className="text-sm text-neutral-400 mt-1 line-clamp-2">{it.excerpt}</p>}
							{(it.author || it.date) && (
								<p className="text-xs text-neutral-500 mt-1">{[it.author, it.date].filter(Boolean).join(' • ')}</p>
							)}
						</div>
					</a>
				))}
			</div>
		</section>
	)
}

// Simple banner for Top Picks
export function TopPicksBanner({ items }: { items: ArticleItem[] }) {
	if (!items.length) return null
	const top = items[0]
	return (
		<section className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-red-600/20 via-rose-500/10 to-transparent border border-white/10">
			<a href={top.href} className="block">
				<img src={top.image} alt={top.title} className="w-full h-56 md:h-72 object-cover" />
				<div className="p-5">
					<h2 className="text-2xl font-semibold">Pilihan Utama</h2>
					<p className="text-neutral-300 mt-1">{top.title}</p>
				</div>
			</a>
		</section>
	)
}

// New Articles list (simple)
export function NewArticles({ items }: { items: ArticleItem[] }) {
	if (!items.length) return null
	return (
		<section className="mt-12">
			<h2 className="text-xl font-semibold">Artikel Terbaru</h2>
			<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{items.map((it) => (
					<a key={it.id} href={it.href} className="group rounded-xl overflow-hidden bg-neutral-800/30 border border-white/10">
						<img src={it.image} alt={it.title} className="w-full h-40 object-cover" />
						<div className="p-3">
							<h3 className="font-medium">{it.title}</h3>
							{it.excerpt && <p className="text-sm text-neutral-400 mt-1 line-clamp-2">{it.excerpt}</p>}
						</div>
					</a>
				))}
			</div>
		</section>
	)
}

export default {
	PodcasterStoriesGrid,
	EnsiklopediTravelerGrid,
	InsightLangkahLiarGrid,
	TopPicksBanner,
	NewArticles,
}

