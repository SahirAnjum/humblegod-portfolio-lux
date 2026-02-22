import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          color: '#e8ddd3',
          backgroundColor: '#0D0D0D',
          textAlign: 'center',
          padding: '24px',
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Something went wrong</h1>
            <p style={{ color: '#908272', marginBottom: '24px' }}>An unexpected error occurred.</p>
            <a
              href="/"
              style={{ color: '#eb5939', textDecoration: 'underline' }}
            >
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
