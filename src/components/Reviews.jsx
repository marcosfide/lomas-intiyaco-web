import { ImageWithFallback } from './ImageWithFallback'

function Stars({ className = '' }) {
  return (
    <span className={`stars ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" focusable="false">
          <path
            fill="currentColor"
            d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8L12 2.8Z"
          />
        </svg>
      ))}
    </span>
  )
}

// Reviews over the panoramic photo (replaces the old scenic break, keeping the image/plain rhythm).
export function Reviews({ data }) {
  const { reviews, scenic } = data

  return (
    <section className="reviews-section" id="resenas" aria-labelledby="reviews-title">
      <ImageWithFallback src={scenic.image} alt={scenic.imageAlt} className="reviews-media" />
      <div className="reviews-overlay" />
      <div className="section-shell reviews-content">
        <p className="eyebrow">{data.ui.reviewsEyebrow}</p>
        <h2 id="reviews-title">{data.ui.reviewsTitle}</h2>

        <div className="rating-summary">
          <span className="rating-score">{reviews.rating}</span>
          <Stars className="rating-stars" />
          <span className="rating-count">{reviews.count} reseñas en Google</span>
        </div>

        {reviews.items.length ? (
          <div className="reviews-grid">
            {reviews.items.map((review) => (
              <figure className="review-card" key={`${review.author}-${review.text.slice(0, 20)}`}>
                <Stars className="review-stars" />
                <blockquote>“{review.text}”</blockquote>
                <figcaption>
                  <span className="review-author">{review.author}</span>
                  {review.date ? <span className="review-date">{review.date}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="reviews-text">{data.ui.reviewsText}</p>
        )}

        <div className="rating-actions">
          <a className="btn btn-primary" href={reviews.writeUrl} target="_blank" rel="noreferrer">
            {data.ui.reviewsWrite}
          </a>
          <a className="btn btn-secondary" href={reviews.readUrl} target="_blank" rel="noreferrer">
            {data.ui.reviewsRead}
          </a>
        </div>
      </div>
    </section>
  )
}
