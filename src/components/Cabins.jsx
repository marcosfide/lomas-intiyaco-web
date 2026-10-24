import { SELECT_CABIN_EVENT } from '../events'
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
            <article className="cabin-card" key={cabin.id}>
              <a className="cabin-image-link" href={cabin.galleryAnchor} aria-label={`Ver galería de ${cabin.title}`}>
                <ImageWithFallback src={cabin.image} alt={cabin.alt} className="cabin-image" />
              </a>
              <div className="cabin-body">
                <p className="capacity">{cabin.capacity}</p>
                <h3>{cabin.title}</h3>
                <p>{cabin.description}</p>
                <ul>
                  {cabin.amenities.map((amenity) => (
                    <li key={amenity}>{amenity}</li>
                  ))}
                </ul>
                <div className="cabin-actions">
                  <a
                    className="btn btn-primary"
                    href="#contacto"
                    onClick={() => window.dispatchEvent(new CustomEvent(SELECT_CABIN_EVENT, { detail: cabin.id }))}
                  >
                    {data.ui.cabinAvailability}
                  </a>
                  <a className="btn btn-outline" href={cabin.galleryAnchor}>
                    {data.ui.cabinButton}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
