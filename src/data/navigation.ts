export type NavItem = {
  label: string
  key: string
  path: string
  hoverOpens?: boolean
}

export const mainNavItems: NavItem[] = [
  { label:'Tentang Kami', key:'about', path:'/about', hoverOpens:true },
  { label:'Tayangan', key:'podcasts', path:'/podcasts' },
  { label:'Artikel', key:'artikel', path:'/artikel' },
  { label:'Trip', key:'trips', path:'/trips' },
  { label:'Inquiry', key:'inquiry', path:'/inquiry' },
  { label:'Shop', key:'shop', path:'/shop' },
]

export type AboutSection = { id: string; label: string }

export const aboutSections: AboutSection[] = [
  { id:'our-story', label:'Our Story' },
  { id:'vision', label:'Vision' },
  { id:'mission', label:'Mission' },
  { id:'team', label:'Our Team' },
]
