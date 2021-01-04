import React from "react";
import Game from "../components/xo-game/Game";
import { Link } from "gatsby";
import "./css/xo.css"

function XO(props) {
    return (
        <div id="xo" style={{marginTop: "30px"}}>
            <Link to="/" style={{position: "absolute", top: "0", left: "0", padding: "20px"}}>Go Back</Link>
            <Game/>
        </div>
    )
}

export default XO;