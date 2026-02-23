import React from "react";
import Error500Page from "../../pages/errors/Error500Page";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Error500Page />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
