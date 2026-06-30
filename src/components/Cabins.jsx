import { ImageWithFallback } from './ImageWithFallback'

export function Cabins({ data }) {
  return (
    <section className="section cabins-section" id="cabanas" aria-labelledby="cabins-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.cabinsEyebrow}</p>
          <h2 id="cabins-title">{data.ui.cabinsTitle}</h2>
        </div>
        <div className="cabins-grid">
          {data.cabins.map((cabin) => (
            <a
              className="cabin-card cabin-card-link"
              href={cabin.galleryAnchor}
              key={cabin.id}
              aria-label={`Ver galería de ${cabin.title}`}
            >
              <ImageWithFallback src={cabin.image} alt={cabin.alt} className="cabin-image" />
              <div className="cabin-body">
                <p className="capacity">{cabin.capacity}</p>
                <h3>{cabin.title}</h3>
                <p>{cabin.description}</p>
                <ul>
                  {cabin.amenities.map((amenity) => (
                    <li key={amenity}>{amenity}</li>
                  ))}
                </ul>
                <span className="btn btn-primary cabin-card-cta" aria-hidden="true">
                  {data.ui.cabinButton}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
