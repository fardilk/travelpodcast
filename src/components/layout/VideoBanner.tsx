
import SpeakerStrip from '@/components/ui/banner-profile/SpeakerStrip'
import Waveform from '../ui/banner-profile/Waveform'

export default function VideoBanner() {
  return (
    <section className="bg-gradient-to-br from-black/80 via-neutral-900 to-black text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold">Launching Soon: Langkah Liar Video Podcast on YouTube</h1>
            <p className="mt-3 text-neutral-300">Dive into raw stories and wild journeys with inspiring guests.</p>
            <div className="mt-6 flex items-center gap-4">
              <a className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md shadow" href="https://youtube.com" target="_blank" rel="noreferrer">▶ Watch on YouTube</a>
              <a className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md" href="#">Subscribe</a>
            </div>
            <div className="mt-6">
              <Waveform frequency={1.2} amplitude={0.45} thickness={2.2} layers={2} className="text-teal-300" />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="mt-4">
              <div className="text-sm uppercase tracking-wider text-red-400 font-semibold mb-2">Sedang Tayang</div>
              <SpeakerStrip />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
