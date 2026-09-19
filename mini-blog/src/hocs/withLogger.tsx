import { useEffect, type ComponentType } from "react";

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  const WithLogger = (props: P) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => console.log(`${WrappedComponent.name} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithLogger;
}

export default withLogger;