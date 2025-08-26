import React from 'react'
import { Link } from 'react-router-dom'

interface ErrorBoundaryState { hasError: boolean; error?: Error }

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App error boundary caught:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Something went wrong</h1>
            <p className="mt-4 text-muted-foreground max-w-md">An unexpected error occurred. You can try again or return to the homepage.</p>
            {this.state.error && <pre className="mt-6 max-w-xl overflow-auto rounded bg-muted p-4 text-left text-xs text-muted-foreground"><code>{this.state.error.message}</code></pre>}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button onClick={this.handleReset} className="inline-flex items-center rounded bg-primary px-4 py-2 text-primary-foreground text-sm font-medium shadow hover:bg-primary/90">Try Again</button>
              <Link to="/" className="inline-flex items-center rounded border px-4 py-2 text-sm font-medium hover:bg-muted">Go Home</Link>
            </div>
        </div>
      )
    }
    return this.props.children
  }
}
