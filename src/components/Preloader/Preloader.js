import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

const Preloader = () => {
  const [preloaderShown, setPreloaderVisiblity] = useState(true);

  let randomLoadingTime = 3000 + Math.round(Math.random() * 3) * 1000;

  setTimeout(() => {
    setPreloaderVisiblity(false);
  }, randomLoadingTime);

  return preloaderShown ? (
    <div className="Preloader">
      <Spinner></Spinner>
    </div>
  ) : (
    ""
  );
};

export default Preloader;
