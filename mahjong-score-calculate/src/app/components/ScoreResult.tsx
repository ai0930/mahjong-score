import React from "react";

type Props = {
  score: number;
};

const ScoreResult: React.FC<Props> = ({ score }) => {
  return (
    <div>
      <h3>計算結果</h3>
      <p>点数: {score} 点</p>
    </div>
  );
};

export default ScoreResult;
