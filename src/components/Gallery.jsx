import { ImageWithFallback } from './ImageWithFallback'

export function Gallery({ data }) {
  return (
    <section className="section gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.galleryEyebrow}</p>
          <h2 id="gallery-title">{data.ui.galleryTitle}</h2>
        </div>
        <div className="gallery-grid">
          {data.gallery.map((image, index) => (
            <ImageWithFallback
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`gallery-item gallery-item-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
