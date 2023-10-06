import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react"
import { TGameInfo } from "../../types";

export function FunctionalApp() {

  const [gameInfo, setGameInfo] = useState<null | TGameInfo>(null); 

  return (
    <>
      <FunctionalScoreBoard/>
      <FunctionalGameBoard 
        handleGameInfo = {(gameInfo) => {
          setGameInfo(gameInfo)
        }}
      />
      {false && <FunctionalFinalScore />}
    </>
  );
}
