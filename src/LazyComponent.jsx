// LazyComponent.js
import React, { useState, useEffect } from "react";

const LazyComponent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
    console.log("Lazy Component Loaded!");
      setLoaded(true);
    }, 5000);
	
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return <div>{loaded && <p>Lazy Component Loaded!</p>}</div>;
};

export default LazyComponent;
