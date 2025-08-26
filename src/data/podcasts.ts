export interface PodcastEpisode { id: string; theme: 'mountain'|'heritage'|'socio-culture'; title: string; subtitle: string; imageUrl?: string }

const imagePool = {
  mountain: [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=70',
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
}

export const podcastEpisodes: PodcastEpisode[] = Array.from({length:18}).map((_,i)=>{
  const theme = (['mountain','heritage','socio-culture'] as const)[i%3]
  const images = imagePool[theme]
  return {
    id: `ep-${i+1}`,
    theme,
    title: `Episode ${i+1}`,
    subtitle: 'Sample curated narrative from field recordings and interviews.',
    imageUrl: images[i % images.length]
  }
})

export function getEpisodesByTheme(theme: PodcastEpisode['theme']) { return podcastEpisodes.filter(e=>e.theme===theme) }
