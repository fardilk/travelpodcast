/**
 * Utilities to compute vertical offsets (translateY) for ImageBox components.
 * Provides a small API to return transform strings or style objects, with
 * optional randomness (seeded) and custom pixel offsets.
 */

export type VAlign = 'top' | 'center' | 'bottom' | 'random' | 'custom'

type Options = {
  /** pixel offset used when align==='custom' */
  customPx?: number
  /** maximum variance in px for random offsets (applies when align==='random') */
  variance?: number
  /** base offset in px applied to non-custom alignments */
  baseOffsetPx?: number
  /** optional deterministic seed for pseudo-random generation */
  seed?: number
}

// small seeded pseudo-random (LCG) for deterministic randomness when seed provided
function seededRandom(seed: number) {
  let s = seed >>> 0
  return function () {
    // constants from Numerical Recipes
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 2 ** 32
  }
}

/**
 * Compute a translateY string (e.g. "translateY(8px)") for the given alignment.
 * - 'top' => slight upward offset (negative px)
 * - 'center' => no offset
 * - 'bottom' => slight downward offset (positive px)
 * - 'random' => random offset within +/- variance
 * - 'custom' => use options.customPx
 */
export function computeTranslateY(align: VAlign, opts: Options = {}): string {
  const { customPx = 0, variance = 8, baseOffsetPx = 8, seed } = opts

  if (align === 'custom') return `translateY(${customPx}px)`
  if (align === 'center') return `translateY(0px)`

  if (align === 'random') {
    const rnd = seed !== undefined ? seededRandom(seed)() : Math.random()
    const signed = (rnd - 0.5) * 2 // -1..1
    const px = Math.round(signed * variance)
    return `translateY(${px}px)`
  }

  // top or bottom map to baseOffsetPx
  const dir = align === 'top' ? -1 : 1
  return `translateY(${dir * baseOffsetPx}px)`
}

/**
 * Convenience: returns a React-friendly inline style object with the transform.
 */
export function computeStyle(align: VAlign, opts: Options = {}): { transform: string } {
  return { transform: computeTranslateY(align, opts) }
}

export default {
  computeTranslateY,
  computeStyle,
}
