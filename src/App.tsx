import { lazy, Suspense } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { ErrorBoundary } from "./ErrorBoundary";
import { delay } from "./utils";

const Counter = lazy(() => delay(5000).then(() => import("./Counter")));

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Our awesome application</h1>
      <div className="card">
        <ErrorBoundary fallback={<p>Ooops, something bad happened</p>}>
          <Suspense fallback={<p>Loading counter...</p>}>
            <Counter />
          </Suspense>
        </ErrorBoundary>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p>Thats all for test CI/CD on Github</p>
    </div>
  );
}

export default App;
