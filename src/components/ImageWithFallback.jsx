import { useState } from 'react'

export function ImageWithFallback({ src, alt, className = '', children }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`image-frame ${className} ${hasError ? 'is-placeholder' : ''}`}>
      {!hasError && src ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setHasError(true)} />
      ) : (
        <div className="image-placeholder" aria-label={alt}>
          <span>{alt}</span>
        </div>
      )}
      {children}
    </div>
  )
}
