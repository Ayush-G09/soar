import React from "react";
import Label from "../Label";

function Preferences() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Label color="black" weight={500} size="20px">
        Preferences
      </Label>
    </div>
  );
}

export default Preferences;
