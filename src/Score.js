import React, {useState} from 'react';
function Score() {
  const [score, setScore] = useState(0);
  // console.log(score);
  const [score2, setScore2] = useState(0);
  // console.log(score2);
  return (
   <>
<div className="flex flex-row" >
<div className="w-1/2">
<p className="text-3xl ">Thuis</p>
<p className="text-9xl" onClick={() => setScore(score+1)}>{score} </p>
{/* <button onClick={() => setScore(score+1)} className=" bg-green-800 rounded text-white m-1 py-2 px-4 font-bold">
  +1
</button> */}
<button onClick={() => setScore(score-1)} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">
  -1
</button>
</div>
<div className="w-1/2">
<p className="text-3xl">Bezoekers</p>
<p className="text-9xl" onClick={() => setScore2(score2+1)}> {score2}</p>
{/* <button onClick={() => setScore2(score2+1)} className=" bg-green-800 rounded text-white m-1 py-2 px-4 font-bold">
  +1
</button> */}
<button onClick={() => setScore2(score2-1)} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">
  -1
</button>
</div>
</div>
   </>
  );
}
export default Score;