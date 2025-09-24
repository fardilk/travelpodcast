import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SiteLayout } from '@/layout/SiteLayout'
import HomePage from '@/pages/home'
import { ErrorBoundary } from './ErrorBoundary'
import NotFound from '@/pages/NotFound'

// Lazy-loaded route components
const PodcastsLanding = lazy(()=>import('@/pages/podcasts'))
const MountainPodcasts = lazy(()=>import('@/pages/podcasts/mountain'))
const PendakianPodcasts = lazy(()=>import('@/pages/podcasts/pendakian'))
const HeritagePodcasts = lazy(()=>import('@/pages/podcasts/heritage'))
const SocioCulturePodcasts = lazy(()=>import('@/pages/podcasts/socio-culture'))
const TripsLanding = lazy(()=>import('@/pages/trips'))
const HikingTrips = lazy(()=>import('@/pages/trips/hiking'))
const SailingTrips = lazy(()=>import('@/pages/trips/sailing'))
const HeritageTrips = lazy(()=>import('@/pages/trips/heritage'))
const ArtikelLanding = lazy(()=>import('@/pages/artikel'))
const JawaEntries = lazy(()=>import('@/pages/artikel/jawa'))
const SumateraEntries = lazy(()=>import('@/pages/artikel/sumatera'))
const NusaTenggaraEntries = lazy(()=>import('@/pages/artikel/nusa-tenggara'))
const InquiryLanding = lazy(()=>import('@/pages/inquiry'))
const ShareStory = lazy(()=>import('@/pages/inquiry/share-story'))
const PrivateTripInquiry = lazy(()=>import('@/pages/inquiry/private-trip'))
const InvestUs = lazy(()=>import('@/pages/inquiry/invest'))
const ShopLanding = lazy(()=>import('@/pages/shop/shopCatalogue'))
const AboutPage = lazy(()=>import('@/pages/about'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div className="p-8 text-sm text-muted-foreground">Loading...</div>}>
          <Routes>
            {/* Shop route renders without the global SiteLayout (no header/footer) */}
            <Route path="/shop" element={<ShopLanding />} />

            {/* All other routes use the SiteLayout */}
            <Route element={<SiteLayout />}> 
              <Route path="/" element={<HomePage />} />
              <Route path="/podcasts" element={<PodcastsLanding />} />
              <Route path="/podcasts/mountain" element={<MountainPodcasts />} />
              <Route path="/podcasts/pendakian" element={<PendakianPodcasts />} />
              <Route path="/podcasts/heritage" element={<HeritagePodcasts />} />
              <Route path="/podcasts/socio-culture" element={<SocioCulturePodcasts />} />
              <Route path="/trips" element={<TripsLanding />} />
              <Route path="/trips/hiking" element={<HikingTrips />} />
              <Route path="/trips/sailing" element={<SailingTrips />} />
              <Route path="/trips/heritage" element={<HeritageTrips />} />
              <Route path="/artikel" element={<ArtikelLanding />} />
              {/* legacy route - redirect to new /artikel path */}
              <Route path="/encyclopedia" element={<Navigate to="/artikel" replace />} />
              <Route path="/artikel/jawa" element={<JawaEntries />} />
              <Route path="/artikel/sumatera" element={<SumateraEntries />} />
              <Route path="/artikel/nusa-tenggara" element={<NusaTenggaraEntries />} />
              <Route path="/inquiry" element={<InquiryLanding />} />
              <Route path="/inquiry/share-story" element={<ShareStory />} />
              <Route path="/inquiry/private-trip" element={<PrivateTripInquiry />} />
              <Route path="/inquiry/invest" element={<InvestUs />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
