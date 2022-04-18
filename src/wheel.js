import React from "react";

const wheel = (props) =>  {
    return(
        <div className='wheel-container'>
        <div id="wrapper">
          <div id="rotate-container">
              <div id="rotatable">
                <div className='wheel-button'></div>
              </div>
              <button id='menu'>MENU</button>
              <img id='previous' src='https://cdn-icons-png.flaticon.com/512/254/254437.png' alt='previous'></img>
              <img id='next' src='https://cdn-icons-png.flaticon.com/512/254/254428.png' alt='next'></img>
              <img id='play-pause' src='https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1649861385~hmac=f0f162c3d0b2c444379724b0fc2c45a9' alt='play-pause'></img>
          </div>
        </div>
      </div>     
    );
}



export default wheel;