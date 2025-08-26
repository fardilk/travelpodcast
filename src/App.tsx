// Basic Toaster placeholder (replace with UI library version if added later)
export function Toaster({ position }: { position?: string }) {
  return <div data-toaster-position={position} className="sr-only">Toaster {position}</div>
}

// App acts as a provider shell (expand with context providers later)
export default function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  )
}
