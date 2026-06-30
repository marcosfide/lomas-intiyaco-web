import { useCallback, useMemo, useState } from 'react'

import { ImageWithFallback } from './ImageWithFallback'
import { ImageLightbox } from './ImageLightbox'

export function Gallery({ data }) {
  const [lightbox, setLightbox] = useState(null)
  const activeImages = useMemo(() => {
    if (!lightbox) {
      return []
    }

    return data.cabins.find((cabin) => cabin.id === lightbox.cabinId)?.gallery.filter((image) => image.src) ?? []
  }, [data.cabins, lightbox])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  const showPrevImage = useCallback(() => {
    setLightbox((current) => {
      if (!current) {
        return current
      }

      const images = data.cabins.find((cabin) => cabin.id === current.cabinId)?.gallery.filter((image) => image.src) ?? []
      return {
        ...current,
        index: current.index === 0 ? images.length - 1 : current.index - 1,
      }
    })
  }, [data.cabins])

  const showNextImage = useCallback(() => {
    setLightbox((current) => {
      if (!current) {
        return current
      }

      const images = data.cabins.find((cabin) => cabin.id === current.cabinId)?.gallery.filter((image) => image.src) ?? []
      return {
        ...current,
        index: current.index === images.length - 1 ? 0 : current.index + 1,
      }
    })
  }, [data.cabins])

  return (
    <section className="section gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.galleryEyebrow}</p>
          <h2 id="gallery-title">{data.ui.galleryTitle}</h2>
        </div>
        {data.cabins.map((cabin) => (
          <div className="gallery-section-group" id={cabin.galleryAnchor.replace('#', '')} key={cabin.id}>
            <div className="gallery-subheading">
              <h3>{cabin.galleryTitle}</h3>
              <p className="gallery-subtitle">{cabin.gallerySubtitle}</p>
            </div>
            <div className="gallery-grid">
              {cabin.gallery.map((image, index) => (
                <button
                  className={`gallery-image-button gallery-item gallery-item-${index + 1}`}
                  type="button"
                  key={`${cabin.id}-${index}`}
                  aria-label={`Ampliar imagen: ${image.alt}`}
                  disabled={!image.src}
                  onClick={() => {
                    const imageIndex = cabin.gallery.filter((galleryImage) => galleryImage.src).findIndex((item) => item === image)
                    setLightbox({ cabinId: cabin.id, index: imageIndex })
                  }}
                >
                  <ImageWithFallback src={image.src} alt={image.alt} className="gallery-image-frame" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {lightbox && activeImages.length > 0 ? (
        <ImageLightbox
          images={activeImages}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      ) : null}
    </section>
  )
}
