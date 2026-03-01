import earthGif from "../assets/earthspin-animation.gif";
import "./CSS/General.css"
import "./CSS/Home.css"

function Home() {
    const SCALE = 1 / window.devicePixelRatio;

    return (
        <>
            <center> 
                <img src={earthGif} alt="Earth spinning" className="earth1994"/> 
                <div className="title1994">BSSA</div> 
                <hr></hr>
                <p className="p1994" style={{ margin: 0 }}>
                    Beyond Science Space Administration
                </p>
                <p className="pSub1994" style={{ margin: 0 }}>©1995</p>
                <p className="p1994">Welcome to the BSSA home page.</p>
            </center>
        </>
    )
}

export default Home