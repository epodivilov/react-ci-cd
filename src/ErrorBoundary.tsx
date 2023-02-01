import { Component, PropsWithChildren } from "react";

type ErrorBoundaryProps = PropsWithChildren<{
  fallback?: React.ReactNode;
}>;
type ErrorBoundaryState = {
  hasError: boolean;
};
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log("🚧 ~ ErrorBoundary ~ error", error);
    console.log("🚧 ~ ErrorBoundary ~ errorInfo", errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { fallback } = this.props;

    if (hasError === false) {
      return this.props.children;
    }

    if (fallback != null) {
      return fallback;
    }

    return null;
  }
}
