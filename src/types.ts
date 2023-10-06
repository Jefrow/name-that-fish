// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type TGameInfo = {
  correctGuesses: number; 
  incorrectGuesses: number;  
  remainingAnswers: []; 
  isLast: boolean; 
}