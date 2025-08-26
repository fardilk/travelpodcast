export interface EncyclopediaEntry { id:string; province:'jawa'|'sumatera'|'nusa-tenggara'; title:string; snippet:string }

export const encyclopediaEntries: EncyclopediaEntry[] = Array.from({length:30}).map((_,i)=>({
  id:`entry-${i+1}`,
  province: (['jawa','sumatera','nusa-tenggara'] as const)[i%3],
  title:`Entry ${i+1}`,
  snippet:'Concise summary of geography, culture, or ecology.'
}))

export function getEntriesByProvince(province: EncyclopediaEntry['province']) { return encyclopediaEntries.filter(e=>e.province===province) }
