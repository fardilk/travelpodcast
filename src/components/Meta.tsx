import React from 'react'
import { Helmet } from 'react-helmet-async'
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

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <link rel="icon" href={metaFavicon} />
      <meta name="description" content={finalDescription} />
      {focusKeyphrase && <meta name="keywords" content={focusKeyphrase} />}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  )
}

export default Meta
