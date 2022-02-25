
import useSound from "use-sound";
import sound from './sound/Scoreboard-horn.mp3'

const Geluid = () =>{
    const[play] = useSound(sound);
 
return <button onClick={play}>lawaai</button>}
export default Geluid
