"use client";
import React, { useState } from "react";
import ScoreInput from "./components/ScoreInput";
import ScoreResult from "./components/ScoreResult";

export default function HomePage() {
  const [score, setScore] = useState<number | null>(null);

  const handleScoreCalculation = (calculatedScore: number) => {
    setScore(calculatedScore);
  };

  return (
    <div>
      <h2>麻雀点数計算アプリ</h2>
      <ScoreInput onCalculateScore={handleScoreCalculation} />
      {score !== null && <ScoreResult score={score} />}
    </div>
  );
}
