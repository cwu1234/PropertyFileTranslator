import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import Translatorpage from "./routes/Translatorpage.tsx";
import "./i18n.tsx";

import { RecoilRoot } from "recoil";
import Uploadpage from "./routes/Uploadpage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="translator" element={<Translatorpage />} />
            <Route path="upload" element={<Uploadpage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
