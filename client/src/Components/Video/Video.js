
import React, { Component, Fragment } from 'react';
import "./Video.css";



class Video extends Component {
  state = {
    play: false,
    currently: 0,
    duration: 0,
    currentDisplayTime: 0,
    minutes: "00",
    seconds: "00",
    counter: false,
    volume: 100,
  }

  componentDidMount() {
    let video = this.refs.video;
    console.log(this.refs);
    // console.log(video.duration);

    video.focus();
    video.addEventListener('loadedmetadata', () => {
      console.log(video.volume);
      
      this.setState({ 
        duration: video.duration ,
        volume: video.volume*100,
      });
    })

    video.addEventListener('timeupdate', () => {
      let currently = video.currentTime / video.duration;
      this.updateCurrentTime(video.currentTime)
      this.setState({
        currently: currently * 100,
        currentDisplayTime: video.currentTime,
      })
      if (video.ended) {
        this.setState({ play: false })
      }
    })

    window.addEventListener('keypress', (e) => {
      if (e.key === ' ') {
        this.playVideo()
      }

    })
  }

  updateCurrentTime = (time) => {
    let {minutes} = this.state;
    let seconds = Math.floor(time);
    seconds = seconds % 60;
    seconds = seconds.toString();
    seconds = seconds.length===1 ? '0'+seconds : seconds;   
    let obj = {
      seconds
    }
    minutes = Math.floor(+time/60).toString();
    if(!(minutes < 1)) { 
      obj.minutes =  minutes.length===1 ? "0"+minutes : minutes;
    }

    this.setState(obj)

  }

  playVideo = () => {

    if (this.state.play) {
      this.refs.video.pause()
    } else {
      this.refs.video.play();
    }
    this.setState({ play: !this.state.play })
  }

  getDuration(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return `${Math.floor(hours) ? Math.floor(hours) + ':' : ''}${minutes.toString().length === 1 ? '0' + minutes : minutes}:${Math.floor(seconds)}`

  }

  onvolumechange = (e) => {
    console.log(e.target.value);
    this.refs.video.volume = e.target.value/100;
    this.setState({
      volume: e.target.value/100,
    })
  }

  render() {
    const { volume } = this.state;
    let playContainerClassName = [];
    let buttonClassName = [];

    if (this.state.play) {
      playContainerClassName.push('click-play');
      buttonClassName.push('pause-button')
    } else {
      playContainerClassName.push('play-container')
      buttonClassName.push('play-button')
    }





    return (
      <Fragment>
        <div className="wrapper">
          <div className="v-video" onClick={this.playVideo}>
            <video className="video" ref="video" src="http://localhost:4000/video/video4.mp4" ></video>
            <div className="big-buttons">
              <div className={playContainerClassName.join('')}>
                <button className="play-pause" onClick={this.playVideo}></button>
              </div>
            </div>
            <div className="controls">
              <div className="orange-bar">
                <div className="orange-juice" style={{ width: this.state.currently + '%' }}></div>
              </div>
              <div className="small-buttons">
                <div className="play-container">
                  <button className={buttonClassName.join('')}></button>
                </div>
                <div style={{ color: '#fff' }}>
                  <p>{this.state.minutes}:{this.state.seconds}/{this.getDuration(this.state.duration)}</p>
                  <input type="range" min="0" max="1" value={volume} onChange={(e) => this.onvolumechange(e)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }


}

export default Video;