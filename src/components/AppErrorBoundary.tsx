import { Component, type ErrorInfo, type ReactNode } from 'react';

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-2xl px-4 py-16 text-slate-900">
          <section className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <h1 className="text-lg font-semibold">Something went wrong while loading this page.</h1>
            <p className="mt-2 text-sm text-slate-700">
              Please refresh the page. If it stays blank, restart the app server and try again.
            </p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
