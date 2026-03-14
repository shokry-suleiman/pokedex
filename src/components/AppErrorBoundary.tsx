import { Component, type ReactNode } from 'react'

type AppErrorBoundaryProps = {
  children: ReactNode
}

type AppErrorBoundaryState = {
  hasError: boolean
}

export default class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container py-10">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p>Something went wrong.</p>
            <button
              type="button"
              className="mt-3 rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700"
              onClick={this.handleReload}
            >
              Reload
            </button>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
