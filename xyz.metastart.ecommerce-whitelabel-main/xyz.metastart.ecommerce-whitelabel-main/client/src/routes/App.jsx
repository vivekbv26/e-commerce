// Pages
import { Home, Error } from "../pages";

// Layouts
import { DefaultLayout } from "../layouts";

// Router Config
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
