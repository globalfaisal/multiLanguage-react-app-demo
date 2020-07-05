import React, { Suspense } from "react";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Header />
      <Hero />
    </Suspense>
  );
}

export default App;
