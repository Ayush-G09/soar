import React from "react";
import Skeleton from "react-loading-skeleton";

function CardsLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Skeleton width={350} height={235} style={{ borderRadius: "25px" }} />
      <Skeleton width={350} height={235} style={{ borderRadius: "25px" }} />
    </div>
  );
}

export default CardsLoading;
