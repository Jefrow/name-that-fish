// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type GameScoreProps = {
  correctCount: number;
  incorrectCount: number;
}

export type GameInfoProps = {
  round: number;
  onAnswer: (isCorrect: boolean) => void;
  initialFishes: Array<{ name: string, url: string }>;
}