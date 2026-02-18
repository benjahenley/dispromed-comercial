import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Error</h1>
            <p className="text-ink/70 mb-6">
              Algo salió mal. La página no pudo cargarse.
            </p>
            <a
              href="/"
              className="text-brand-300 hover:text-brand-400 font-medium">
              Volver al inicio →
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
