import React from "react"
import memesData from "../memesData"

export default function Meme() {
    function getMemeImage() {
        
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>            
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🆕</button>
            </div>
        </main>
    )
}