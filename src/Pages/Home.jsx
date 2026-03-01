import earthGif from "../assets/earthspin-animation.gif";
import "./CSS/Home.css"

function Home() {

    return (
        <>
            <div className="center"> 
                <img src={earthGif} alt="Earth spinning" className="earth"/> 
                <div className="title">BSSA</div> 
            </div>
        </>
    )
}

export default Home