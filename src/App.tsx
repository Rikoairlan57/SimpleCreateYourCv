import { Generator } from "./Generator";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";

export function App() {
  return (
    <div className="bg-gray-800">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Generator" element={<Generator />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

// bg - gray - 900;
