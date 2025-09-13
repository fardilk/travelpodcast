 
import { useMemo } from 'react'

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

const buildPath = (amp: number) => {
  // a compact, readable generation of the path used for the visual waveform
  const center = 30
  const span = 20 * amp
  // repeated C segments across the viewbox
  const seg = (x1: number, x2: number, x3: number) => `C${x1} ${center - span} ${x2} ${center + span} ${x3} ${center}`

  return `M0 ${center} ${seg(50,100,150)} ${seg(200,250,300)} ${seg(350,400,450)} ${seg(500,550,600)}`
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
  const path = useMemo(() => buildPath(amp), [amp])
  const basePeriod = useMemo(() => toDurationSec(frequency), [frequency])

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
        strokeDasharray: 240,
        strokeDashoffset: -200,
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
                strokeDasharray={cfg.strokeDasharray}
                strokeDashoffset={cfg.strokeDashoffset}
                filter="url(#wf-glow)"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
