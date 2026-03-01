import earthGif from "../assets/earthspin-animation.gif";
import "./CSS/Home.css"

function Home() {
    const SCALE = 1 / window.devicePixelRatio;

    return (
        <>
            <center> 
                <img src={earthGif} alt="Earth spinning" className="earth1994"/> 
                <div className="title1994">BSSA</div> 
                <p className="p1994">
                    BSSA or Beyond Science Space Administration is a 
                </p>
            </center>
        </>
    )
}

export default Home