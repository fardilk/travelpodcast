import { podcastEpisodes } from '@/data/podcasts'
import { getTripsByType } from '@/data/trips'
import { getEntriesByProvince } from '@/data/artikel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ImageCard } from '@/components/common/ImageCard'
import { Headphones } from 'lucide-react'
import React from 'react'
import Meta from '@/components/Meta'
import VideoBanner from '@/components/layout/VideoBanner'

function SectionWrapper({ children, index }: { children: React.ReactNode; index: number }) {
	const palette = [
		'bg-white',
		'bg-gradient-to-b from-slate-50 to-slate-100',
		'bg-white',
		'bg-gradient-to-b from-emerald-50/60 to-emerald-100/40',
		'bg-gradient-to-br from-primary/90 to-primary'
	]
	const zebra = palette[index] || 'bg-background'
	return (
		<section className={`${zebra} py-20 relative overflow-hidden`}>{children}
			{index !== 4 && <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.15),transparent_70%)]" />}
		</section>
	)
}

function SectionHeader({ eyebrow, title, cta }: { eyebrow?: string; title: string; cta?: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-6xl px-4 mb-10 flex items-end justify-between flex-wrap gap-6">
			<div>
				{eyebrow && <p className="text-xs uppercase tracking-wider text-primary font-medium mb-2 animate-bounce">{eyebrow}</p>}
				<h2 className="text-3xl md:text-4xl font-semibold tracking-tight drop-shadow-sm">{title}</h2>
			</div>
			{cta}
		</div>
	)
}

function PodcastPreview() {
		const sample = podcastEpisodes.slice(0, 4)
		return (
		<div className="mx-auto max-w-6xl px-4">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{sample.map(ep => (
								<ImageCard
									key={ep.id}
									image={ep.imageUrl}
									fallbackImage={ep.imageUrl}
									badge={ep.theme}
									title={ep.title}
									subtitle={ep.subtitle}
									ctaLabel={<><Headphones className="h-4 w-4" /> Listen</>}
									ctaHref={`/podcasts/${ep.theme}`}
									aspect="portrait"
									imageContainerClassName={ep.theme === 'upcoming' ? 'bg-black' : undefined}
									imageClassName={ep.theme === 'upcoming' ? 'object-contain p-8' : undefined}
								/>
							))}
			</div>
		</div>
	)
}

function UpcomingTripsPreview() {
			const sample = [getTripsByType('hiking')[0], getTripsByType('sailing')[0], getTripsByType('heritage')[0]].filter(Boolean)
	return (
		<div className="mx-auto max-w-6xl px-4">
			<div className="grid gap-6 md:grid-cols-3">
				{sample.map(t => (
							<ImageCard
								key={t.id}
								image={t.imageUrl}
								fallbackImage={t.imageUrl}
								badge={t.type}
								title={t.title}
								subtitle={t.subtitle}
								ctaLabel="Details"
								ctaHref={`/trips/${t.type}`}
								aspect="landscape"
							/>
				))}
			</div>
		</div>
	)
}

function ArtikelPreview() {
	const sample = [
		...getEntriesByProvince('jawa').slice(0, 2),
		...getEntriesByProvince('sumatera').slice(0, 1)
	]
	return (
		<div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
			{sample.map(e => (
				<Card key={e.id} className="shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
					<CardContent className="p-5">
						<h3 className="font-medium">{e.title}</h3>
						<p className="mt-2 text-sm text-muted-foreground line-clamp-3">{e.snippet}</p>
						<Button size="sm" variant="link" className="px-0 mt-2">Read →</Button>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

function ShopPreview() {
	const items = [
		{ id: 'gear', title: 'Technical Gear', desc: 'Layering, packs, hydration, safety essentials.', img: 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/ll/pakde-wiro-langkah-liar-profile.png' },
		{ id: 'media', title: 'Field Media', desc: 'Zines, map prints, narrative audio bundles.', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=70' },
		{ id: 'artisan', title: 'Artisan Goods', desc: 'Community-made textiles & crafts.', img: 'https://images.unsplash.com/photo-1601046331744-c54e670ac9d4?auto=format&fit=crop&w=600&q=70' }
	]
	return (
		<div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
			{items.map(i => (
				<ImageCard
					key={i.id}
					image={i.img}
					fallbackImage={i.img}
					title={i.title}
					subtitle={i.desc}
					ctaLabel="Explore"
					ctaHref="/shop"
					aspect="square"
				/>
			))}
		</div>
	)
}

function PartnerCTA() {
	return (
		<div className="mx-auto max-w-5xl px-4 text-center">
			<div className="rounded-2xl bg-gradient-to-br from-primary/90 to-primary shadow-xl p-12 text-primary-foreground relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
				<h2 className="relative text-3xl md:text-4xl font-semibold tracking-tight drop-shadow">Become Our Partner</h2>
				<p className="relative mt-4 text-primary-foreground/90 max-w-2xl mx-auto">Collaborate on sustainable itineraries, conservation initiatives, content syndication, or gear partnerships that center reciprocity and regeneration.</p>
				<div className="relative mt-8 flex flex-wrap justify-center gap-4">
					<Button size="lg" variant="secondary" className="animate-bounce">Partner Inquiry</Button>
					<Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">Download Deck</Button>
				</div>
			</div>
		</div>
	)
}

export default function HomePage() {
	return (
		<>
			<Meta pageKey="home" />
			<VideoBanner />
			<SectionWrapper index={0}>
			<SectionHeader eyebrow="Listen" title="Tayangan Terbaru" cta={<Button variant="outline" size="sm" asChild><a href="/podcasts">All Episodes</a></Button>} />
				<PodcastPreview />
			</SectionWrapper>
			<SectionWrapper index={1}>
			<SectionHeader eyebrow="Explore" title="Upcoming Trips" cta={<Button variant="outline" size="sm" asChild><a href="/trips">View Trips</a></Button>} />
				<UpcomingTripsPreview />
			</SectionWrapper>
			<SectionWrapper index={2}>
			<SectionHeader eyebrow="Reference" title="From the Artikel" cta={<Button variant="outline" size="sm" asChild><a href="/artikel">Browse All</a></Button>} />
				<ArtikelPreview />
			</SectionWrapper>
			<SectionWrapper index={3}>
			<SectionHeader eyebrow="Shop" title="Curated Collections" cta={<Button variant="outline" size="sm" asChild><a href="/shop">Visit Shop</a></Button>} />
				<ShopPreview />
			</SectionWrapper>
			<SectionWrapper index={4}>
				<PartnerCTA />
			</SectionWrapper>
		</>
	)
}
