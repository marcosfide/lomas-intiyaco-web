import { useEffect } from 'react'

export function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const currentImage = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onPrev()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('lightbox-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('lightbox-open')
    }
  }, [onClose, onNext, onPrev])

  if (!currentImage) {
    return null
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería de imágenes">
      <button className="lightbox-backdrop" type="button" aria-label="Cerrar galería" onClick={onClose} />
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" aria-label="Cerrar galería" onClick={onClose}>
          X
        </button>

        <button className="lightbox-nav lightbox-nav-prev" type="button" aria-label="Imagen anterior" onClick={onPrev}>
          &lt;
        </button>

        <img className="lightbox-image" src={currentImage.src} alt={currentImage.alt} />

        <button className="lightbox-nav lightbox-nav-next" type="button" aria-label="Imagen siguiente" onClick={onNext}>
          &gt;
        </button>

        <div className="lightbox-meta">
          <p className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </p>
          <p className="lightbox-caption">{currentImage.alt}</p>
        </div>
      </div>
    </div>
  )
}
