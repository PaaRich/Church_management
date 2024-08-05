import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "flex",
};

function Loader() {
  return (
    <div className="flex absolute top-0 left-0">
      <div className="sweet-loading flex items-center justify-center w-full h-screen bg-black/25 fixed z-[999]">
        <BounceLoader
          color={"dodgerblue"}
          // loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
