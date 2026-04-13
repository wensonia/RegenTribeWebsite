'use client'

import React from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  /** Skip WebP/srcset — use raw <img> (e.g. for tiny icons) */
  skipOptimization?: boolean
}

/**
 * Resolves WebP path and responsive srcset from an original image path.
 * Expects optimized files alongside originals:
 *   /images/blog/photo.jpg → /images/blog/photo.webp, photo-640w.webp, photo-1024w.webp, photo-1920w.webp
 */
function getWebPPaths(src: string) {
  const lastDot = src.lastIndexOf('.')
  if (lastDot === -1) return null
  const base = src.substring(0, lastDot)
  return {
    webp: `${base}.webp`,
    srcSet: [
      `${base}-640w.webp 640w`,
      `${base}-1024w.webp 1024w`,
      `${base}-1920w.webp 1920w`,
      `${base}.webp`,
    ].join(', '),
  }
}

export default function OptimizedImage({
  src,
  alt,
  sizes,
  loading = 'lazy',
  skipOptimization = false,
  style,
  ...rest
}: OptimizedImageProps) {
  if (skipOptimization || !src) {
    return <img src={src} alt={alt} loading={loading} style={style} {...rest} />
  }

  const paths = getWebPPaths(src)
  if (!paths) {
    return <img src={src} alt={alt} loading={loading} style={style} {...rest} />
  }

  return (
    <picture style={{ display: 'block', width: '100%', height: '100%' }}>
      <source
        type="image/webp"
        srcSet={paths.srcSet}
        sizes={sizes || '100vw'}
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={style}
        {...rest}
      />
    </picture>
  )
}
