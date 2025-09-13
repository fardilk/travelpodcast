import React from 'react'
import { metaTitle, metaDescription, metaImage, metaFavicon, pageMetaSuggestions } from '@/data/meta'
import { useLocation } from 'react-router-dom'

type MetaProps = {
  pageKey?: string
  title?: string
  description?: string
  image?: string
  focusKeyphrase?: string
}

export const Meta: React.FC<MetaProps> = ({ pageKey, title, description, image, focusKeyphrase }) => {
  const loc = useLocation()
  const defaults = (pageKey ? pageMetaSuggestions[pageKey] ?? {} : {}) as { title?: string; description?: string; focusKeyphrase?: string }
  const finalTitle = title ?? defaults.title ?? metaTitle
  const finalDescription = description ?? defaults.description ?? metaDescription
  const finalImage = image ?? metaImage
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${loc.pathname}` : ''

  React.useEffect(() => {
    document.title = finalTitle
    const setMeta = (name: string, content: string | null, attr = 'name') => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', finalDescription)
    if (focusKeyphrase) setMeta('keywords', focusKeyphrase)

    setMeta('og:title', finalTitle, 'property')
    setMeta('og:description', finalDescription, 'property')
    setMeta('og:image', finalImage, 'property')
    if (canonical) setMeta('og:url', canonical, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', finalTitle)
    setMeta('twitter:description', finalDescription)
    setMeta('twitter:image', finalImage)

    // favicon
    if (metaFavicon) {
      let link = document.querySelector('link[rel~="icon"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = metaFavicon
    }
  }, [finalTitle, finalDescription, finalImage, focusKeyphrase, canonical])

  return null
}

export default Meta
