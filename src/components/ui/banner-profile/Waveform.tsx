 
import { useMemo, useState, useEffect } from 'react'

type AllowedLayers = 1 | 2 | 3

type WaveformProps = {
  frequency?: number // in Hz
  amplitude?: number // 0..1 relative vertical scale
  thickness?: number // stroke width in px
  layers?: AllowedLayers
  className?: string
}

// small utilities
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

const buildRandomHeartbeatPath = (amp: number) => {
  const center = 30
  const span = 25 * amp
  const width = 600
  const step = 50

  let path = `M0 ${center}`
  let x = 0

  while (x < width) {
    const nextX = Math.min(width, x + step + Math.random() * 30)
    const dir = Math.random() > 0.5 ? -1 : 1
    const height = span * (0.7 + Math.random() * 1.2)
    path += ` L${nextX} ${center + dir * height} L${nextX + 20} ${center}`
    x = nextX + 20
  }

  path += ` L${width} ${center}`
  return path
}

const toDurationSec = (frequency: number) => {
  // frequency -> period in seconds, avoid divide-by-zero
  const f = clamp(frequency, 0.05, 10)
  return 1 / f
}

export default function Waveform({
  frequency = 0.5,
  amplitude = 0.35,
  thickness = 2,
  layers = 2,
  className = '',
}: WaveformProps) {
  // clamp inputs to safe ranges
  const amp = useMemo(() => clamp(amplitude, 0, 1), [amplitude])
  const strokeW = useMemo(() => clamp(thickness, 0.5, 12), [thickness])
  const waveLayers = useMemo(() => clamp(Math.floor(Number(layers || 1)), 1, 3) as AllowedLayers, [layers])

  // derived values memoized
  const basePeriod = useMemo(() => toDurationSec(frequency), [frequency])
  // regenerate a randomized heartbeat path each beat so spikes shift over time
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [path, setPath] = useState(() => buildRandomHeartbeatPath(amp))

  useEffect(() => {
    if (prefersReduced) return
    setPath(buildRandomHeartbeatPath(amp))
    const id = setInterval(() => {
      setPath(buildRandomHeartbeatPath(amp))
    }, basePeriod * 1000)
    return () => clearInterval(id)
  }, [amp, basePeriod, prefersReduced])

  // build a declarative configuration per layer
  const layerConfigs = useMemo(() => {
    // small phased offsets for visual parallax between layers
    const offsets = Array.from({ length: waveLayers }, (_, i) => i * 0.12)
    return offsets.map((off, idx) => {
      const opacity = 0.25 + (idx / Math.max(1, waveLayers)) * 0.35
      const duration = basePeriod * (1 + off)
      return {
        idx,
        opacity,
        duration,
      }
    })
  }, [waveLayers, basePeriod])

  return (
    <div className={`w-full h-6 overflow-hidden ${className}`}>
      <svg viewBox="0 0 600 60" className="w-full h-6" preserveAspectRatio="none" aria-hidden>
        <defs>
          {/* soft glow filter */}
          <filter id="wf-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* edge fade mask - keep center opaque */}
          <linearGradient id="wf-fade" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="8%" stopColor="#fff" stopOpacity="1" />
            <stop offset="92%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="wf-edge-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#wf-fade)" />
          </mask>
        </defs>

        <g mask="url(#wf-edge-mask)" transform="translate(0,0)">
          {layerConfigs.map((cfg) => (
            <g
              key={cfg.idx}
              className="wf-anim"
              // use CSS variable to parameterize duration
              style={{ ['--wf-dur' as unknown as string]: `${cfg.duration}s`, opacity: cfg.opacity } as React.CSSProperties}
            >
              <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeW}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#wf-glow)"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
