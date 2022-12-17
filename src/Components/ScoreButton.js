import React from "react";

const ScoreUI = ({ finScore, publicScore, privateScore, total }) => {
  if (
    finScore === "NA" ||
    publicScore === "NA" ||
    privateScore === "NA" ||
    total === "NA"
  ) {
    return (
      <button
        style={{ background: "lightgrey", width: "100%", height: "100%" }}
      >
        NA
      </button>
    );
  } else if (
    finScore <= 5 ||
    publicScore <= 5 ||
    privateScore <= 5 ||
    total <= 5
  ) {
    return (
      <button
        style={{
          background: "lightgreen",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        Low
      </button>
    );
  } else if (
    finScore <= 10 ||
    publicScore <= 10 ||
    privateScore <= 10 ||
    total <= 10
  ) {
    return (
      <button
        style={{
          background: " #FFBF00",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        Medium
      </button>
    );
  } else if (
    finScore <= 15 ||
    publicScore <= 15 ||
    privateScore <= 15 ||
    total <= 15
  ) {
    return (
      <button
        style={{
          background: "red",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        High
      </button>
    );
  }
};

export default ScoreUI;
