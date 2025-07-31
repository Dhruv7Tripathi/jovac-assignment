import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/indexpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
