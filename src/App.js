
import './App.css';
import React from 'react';
import ZingTouch from "zingtouch";
import Menu from './Menu';
import Games from './Games';
import Setting from './Setting';
import Music from './Music';


class App extends React.Component {
  constructor (){
    super();
    this.state ={
       deg:0,
       pdeg:0,
       menu:false,
       games:false,
       setting: false,
       music: false
    }
    
  }

  //Using Zingtouch Rotate function to select menu list item using menu touch
  deggree = () => {
    var deggree =0;
    var myElement = document.getElementById('rotatable');
    var myTapGesture = new ZingTouch.Rotate();
    var myRegion = new ZingTouch.Region(document.body);

    myRegion.bind(myElement, myTapGesture, (e) => {
        deggree = Math.floor(e.detail.distanceFromOrigin);
        if(this.state.deg + 20 < deggree || deggree < this.state.deg -20 ){
        this.setState({
          pdeg:this.state.deg,
          deg:deggree
        })}
    }, false);
  }


  //menu button display handler
  menuButtonHandle = () => {
    if(this.state.menu){
      this.setState({
        menu:false,
        games:false,
        setting: false,
        music: false
      })
      
    }else{
      this.setState({
        menu:true,
        games:false,
        setting: false,
        music: false
      })
    }
  }

  menuItemHandle = () => {
      var active = document.getElementById('active');
      // console.log(active)
      if(active != null && active.innerText === "All Music"){
        // console.log("aLL mUSIC CLICKED");
        this.setState({
          menu:false,
          games:false,
          setting: false,
          music: true

        })
      }
      if(active != null && active.innerText === "Games"){
        // console.log("gAMES CLICKED");
        this.setState({
          menu:false,
          games:true,
          setting: false,
          music: false

        })
      }
      if(active != null && active.innerText === "Setting"){
        // console.log("sETTING CLICKED");
        this.setState({
          menu:false,
          games:false,
          setting: true,
          music: false
        })
      }
    }
    



  render(){
      return (
        <div className="App">
          <div className='ipod-container'>
              <div className='ipod-display'>
                  {this.state.menu && <Menu degree = { this.state} />}
                  {this.state.games && <Games />}
                  {this.state.setting && <Setting />}
                  {this.state.music && <Music />}
              </div>
              
              
              <div className='wheel-container'>
                <div id="wrapper">
                  <div id="rotate-container">
                      <div onMouseDown ={ this.deggree } id="rotatable">
                        <div onClick={ this.menuItemHandle } className='wheel-button'></div>
                      </div>
                      <button id='menu' onClick={this.menuButtonHandle}>MENU</button>
                      <img id='previous' src='https://cdn-icons-png.flaticon.com/512/254/254437.png' alt='previous'></img>
                      <img id='next' src='https://cdn-icons-png.flaticon.com/512/254/254428.png' alt='next'></img>
                      <img id='play-pause' src='https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1649861385~hmac=f0f162c3d0b2c444379724b0fc2c45a9' alt='play-pause'></img>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
      );
    }
  
}

export default App;
