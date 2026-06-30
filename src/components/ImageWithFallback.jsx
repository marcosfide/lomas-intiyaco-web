import { useState } from 'react'

export function ImageWithFallback({ src, alt, className = '', children }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const hasError = failedSrc === src

  return (
    <div className={`image-frame ${className} ${hasError ? 'is-placeholder' : ''}`}>
      {!hasError && src ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} />
      ) : (
        <div className="image-placeholder" aria-label={alt}>
          <span>{alt}</span>
        </div>
      )}
      {children}
    </div>
  )
}
