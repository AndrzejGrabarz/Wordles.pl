import Board from "@/components/Board";
import Board_2 from "@/components/Board_2";
import Keyboard from "@/components/Keyboard";

export default function Home() {
  return (
    <>
    <div className="main">
      <Board/>
        <div className="block"></div>
      <Board_2/>
      <Keyboard/>
    </div>
     
    </>
  )
}
