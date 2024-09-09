import { routes, ROUTE_TYPE_REDIRECT, ROUTE_PATH } from "routes";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "routes/Error";
import Loading from "components/Loading";
import { useAppSelector } from "store";
import { type State } from "models/state";
import Header from "components/Header";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const loading = useAppSelector((state: State) => state.loading.active);
  return (
    <Routes>
      {routes.map((route, index) => {
        switch (route.type) {
          case ROUTE_TYPE_REDIRECT:
            return (
              <Route
                key={index}
                path={route.from}
                element={<Navigate to={route.to} replace />}
              />
            );

          default:
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ErrorBoundary
                    fallback={
                      <Error title="Error" content="An error occurred." />
                    }
                  >
                    {route.header && <header />}
                    <Loading active={loading} />
                    {route.component && <route.component />}
                  </ErrorBoundary>
                }
              />
            );
        }
      })}
      <Route
        path="*"
        element={
          <Error
            title="404 Not Found"
            content="The page you're looking for does not exist."
          />
        }
      />
    </Routes>
  );
}

export default App;
