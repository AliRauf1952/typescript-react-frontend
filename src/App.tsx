import "./App.css";
import { Nav } from "./components/Nav";
import { Router } from "./routes/router";

function App() {
  return (
    <main className="main">
      <Nav />
      <Router />
    </main>
  );
}

export default App;
