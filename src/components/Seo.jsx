import { useEffect } from 'react'

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function absoluteUrl(baseUrl, path) {
  return new URL(path, baseUrl).toString()
}

function buildLocalBusinessSchema(data) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'LocalBusiness'],
    '@id': `${data.canonicalUrl}#lodging`,
    name: data.name,
    legalName: data.name,
    description: data.description,
    url: data.canonicalUrl,
    telephone: data.whatsapp.displayNumber,
    priceRange: data.schema.priceRange,
    image: absoluteUrl(data.canonicalUrl, data.images.openGraph),
    sameAs: [data.instagram.url, data.links.googleMaps],
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.location.locality,
      addressRegion: data.location.region,
      addressCountry: data.location.country,
      streetAddress: data.location.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.location.latitude,
      longitude: data.location.longitude,
    },
    areaServed: [
      data.location.locality,
      'La Cumbrecita',
      'Villa General Belgrano',
      'Valle de Calamuchita',
    ],
    amenityFeature: data.services.map((service) => ({
      '@type': 'LocationFeatureSpecification',
      name: service.title,
      value: true,
    })),
    checkinTime: data.schema.checkinTime,
    checkoutTime: data.schema.checkoutTime,
    makesOffer: data.cabins.map((cabin) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Accommodation',
        name: cabin.title,
        description: cabin.description,
        occupancy: cabin.capacity,
      },
    })),
  }
}

export function Seo({ data }) {
  useEffect(() => {
    const imageUrl = absoluteUrl(data.canonicalUrl, data.images.openGraph)

    document.documentElement.lang = 'es-AR'
    document.title = data.seoTitle

    setMeta('meta[name="description"]', {
      name: 'description',
      content: data.description,
    })
    setMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: data.keywords.join(', '),
    })
    setLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: data.canonicalUrl,
    })
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: data.seoTitle,
    })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: data.description,
    })
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: data.canonicalUrl,
    })
    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    setMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'es_AR',
    })
    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: data.seoTitle,
    })
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: data.description,
    })
    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })

    const schemaId = 'lodging-business-schema'
    let schemaElement = document.getElementById(schemaId)

    if (!schemaElement) {
      schemaElement = document.createElement('script')
      schemaElement.id = schemaId
      schemaElement.type = 'application/ld+json'
      document.head.appendChild(schemaElement)
    }

    schemaElement.textContent = JSON.stringify(buildLocalBusinessSchema(data))
  }, [data])

  return null
}
