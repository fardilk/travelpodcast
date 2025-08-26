
export default function ShopLanding() {
  return (
    <div>
      {/* sticky top announcement / hero strip */}
      <div className="sticky top-0 z-50">
        <div className="bg-gold text-black">
          <div className="mx-auto max-w-7xl px-4 py-2 text-center text-xs tracking-wider">FREE SHIPPING ON ALL ORDERS OVER £150</div>
        </div>
        <div className="bg-neutral-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">SUARA PEJALAN SHOP</h1>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="sr-only">Shop</h2>
        <p className="mt-2 text-muted-foreground max-w-prose">Curated gear and media (coming soon).</p>
        {/* placeholder grid for products */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-card rounded-md p-4 shadow-sm">
              <div className="aspect-square bg-muted rounded-md" />
              <h3 className="mt-3 font-medium">Product {i}</h3>
              <p className="text-sm text-muted-foreground">Short description</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
