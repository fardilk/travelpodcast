export interface Trip { id: string; type: 'hiking'|'sailing'|'heritage'; title: string; subtitle: string; imageUrl?: string }

export const trips: Trip[] = Array.from({length:15}).map((_,i)=>({
  id: `trip-${i+1}`,
  type: (['hiking','sailing','heritage'] as const)[i%3],
  title: `Trip Option ${i+1}`,
  subtitle: 'A sample itinerary description focusing on safety and immersion.',
  imageUrl: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=400&auto=format&fit=crop'
}))

export function getTripsByType(type: Trip['type']) { return trips.filter(t=>t.type===type) }
