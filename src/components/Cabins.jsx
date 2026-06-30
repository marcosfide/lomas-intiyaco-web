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
            <article className="cabin-card" key={cabin.title}>
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
                <a className="btn btn-primary" href={data.whatsapp.url} target="_blank" rel="noreferrer">
                  {data.ui.cabinButton}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
