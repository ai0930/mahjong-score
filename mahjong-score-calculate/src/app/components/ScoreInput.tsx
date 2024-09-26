// src/app/components/ScoreInput.tsx
import React, { useState } from "react";

type Props = {
  onCalculateScore: (score: number) => void;
};

const ScoreInput: React.FC<Props> = ({ onCalculateScore }) => {
  const [yaku, setYaku] = useState<string>("");
  const [dora, setDora] = useState<number>(0);
  const [isParent, setIsParent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 仮の計算ロジック
    const calculatedScore = (yaku.length + dora) * (isParent ? 2 : 1);
    onCalculateScore(calculatedScore);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>役</label>
        <input
          type="text"
          value={yaku}
          onChange={(e) => setYaku(e.target.value)}
          placeholder="例: Tanyao, Pinfu"
        />
      </div>
      <div>
        <label>ドラ</label>
        <input
          type="number"
          value={dora}
          onChange={(e) => setDora(Number(e.target.value))}
          placeholder="ドラの数"
        />
      </div>
      <div>
        <label>親ですか？</label>
        <input
          type="checkbox"
          checked={isParent}
          onChange={() => setIsParent(!isParent)}
        />
      </div>
      <button type="submit">計算する</button>
    </form>
  );
};

export default ScoreInput;
