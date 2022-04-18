import React from "react";
import './Music.css';


const Music = (props) =>  {
    

   
    return(
        <div className='music-display'>
            <div id="music-display-detail">
                <div>
                    <img id="song-img" alt="song-thumbnil" src="https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/k9KNo1P63B/size_l.webp"></img>
                </div>
                <div id="song-detail">
                   <b>song Name</b><br></br>
                   <span>Song Detail</span>         
                </div>
            </div>
            <div id="song-play">
                <span id="song-start">0:00</span>
                <input id="song-range" type="range" ></input>
                <span id="song-end">3:40</span>
            </div>
        </div>     
    );
}



export default Music;