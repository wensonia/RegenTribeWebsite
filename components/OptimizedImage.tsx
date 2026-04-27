'use client'

import React from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  /** Skip WebP/srcset – use raw <img> (e.g. for tiny icons) */
  skipOptimization?: boolean
  /** Extra width variants that exist alongside the base -640w.webp (e.g. [1024, 1920]) */
  extraWidths?: number[]
}

/**
 * Resolves WebP path and responsive srcset from an original image path.
 * All images are expected to have: photo.webp and photo-640w.webp
 * Larger breakpoints (1024w, 1920w) are optional – pass them via the
 * `extraWidths` prop so we never reference files that don't exist.
 */
function getWebPPaths(src: string, extraWidths?: number[]) {
  const lastDot = src.lastIndexOf('.')
  if (lastDot === -1) return null
  const base = src.substring(0, lastDot)
  const entries = [`${base}-640w.webp 640w`]
  for (const w of extraWidths ?? []) {
    entries.push(`${base}-${w}w.webp ${w}w`)
  }
  // base webp as the largest fallback
  entries.push(`${base}.webp 2000w`)
  return {
    webp: `${base}.webp`,
    srcSet: entries.join(', '),
  }
}

export default function OptimizedImage({
  src,
  alt,
  sizes,
  loading = 'eager',
  skipOptimization = false,
  extraWidths,
  style,
  ...rest
}: OptimizedImageProps) {
  if (skipOptimization || !src) {
    return <img src={src} alt={alt} loading={loading} style={style} {...rest} />
  }

  const paths = getWebPPaths(src, extraWidths)
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
