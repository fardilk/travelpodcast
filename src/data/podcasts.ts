export interface PodcastEpisode { id: string; theme: 'pendakian'|'heritage'|'socio-culture'|'upcoming'; title: string; subtitle: string; imageUrl?: string }

const imagePool = {
  pendakian: [
    'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/ll/pakde-wiro-langkah-liar-profile.png',
    'https://images.unsplash.com/photo-1508261303786-0e0a8e8093e3?auto=format&fit=crop&w=600&q=70',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=70'
  ],
  heritage: [
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=70',
    'https://images.unsplash.com/photo-1507823690278-6a5f17d53fb6?auto=format&fit=crop&w=600&q=70',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=70'
  ],
  'socio-culture': [
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=70',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=70',
    'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=70'
  ]
  ,
  upcoming: [
    '/logo-langkah-liar.png',
    '/logo-langkah-liar.png',
    '/logo-langkah-liar.png'
  ]
}

const CDN_PROFILE_IMG = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/ll/pakde-wiro-langkah-liar-profile.png'

export const podcastEpisodes: PodcastEpisode[] = Array.from({length:18}).map((_,i)=>{
  // default theme sequence; we'll override indexes 1..3 to 'upcoming'
  let theme = (['pendakian','heritage','socio-culture'] as const)[i%3] as PodcastEpisode['theme']
  if (i >= 1 && i <= 3) theme = 'upcoming'
  const images = imagePool[theme]
  const base = {
    id: `ep-${i+1}`,
    theme,
    title: `Episode ${i+1}`,
    subtitle: 'Sample curated narrative from field recordings and interviews.',
    imageUrl: images[i % images.length]
  } as PodcastEpisode
  if (i === 0) {
    base.imageUrl = CDN_PROFILE_IMG
    base.title = 'Pencetus Kode Etik Pecinta Alam'
    base.subtitle = 'Kisah hidup Pakde Wiro, salah satu legenda yang menggagas lahirnya 7 kode etik pecinta alam Indonesia.'
  }
  if (i >= 1 && i <= 3) {
    base.subtitle = 'Upcoming'
  }
  return base
})

export function getEpisodesByTheme(theme: PodcastEpisode['theme']) { return podcastEpisodes.filter(e=>e.theme===theme) }
