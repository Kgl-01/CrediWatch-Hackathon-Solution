import React from "react";
import ScoreUI from "./ScoreButton";

export const Posts = ({ info }) => {
  return (
    <tbody>
      {info.map((data, key) => {
        return (
          <tr key={key} style={{ background: "azure" }}>
            <td>
              <button className="expand">+</button>
            </td>
            <td>{data.display_name.toUpperCase()}</td>
            <td>
              <ScoreUI finScore={data.financial_risks.score} />
            </td>
            <td>
              <ScoreUI publicScore={data.non_financial_risks.score} />
            </td>
            <td>
              <ScoreUI privateScore={data.private_data_risks.score} />
            </td>
            <td>
              <ScoreUI total={data.score} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Posts;
