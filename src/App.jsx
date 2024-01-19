// App.js
import React, { lazy, Suspense } from "react";
import AnimationCompent from "./AnimationCompent";

// Define a component to be loaded lazily
const LazyComponent = lazy(() => import("./LazyComponent"));

const App = () => {
  return (
    <div  style={{backgroundColor:"#fff"}}>
      <Suspense fallback={<AnimationCompent />}>
        <LazyComponent  />
      </Suspense>
    </div>
  );
};

export default App;
