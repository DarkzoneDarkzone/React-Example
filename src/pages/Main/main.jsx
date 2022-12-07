import React, { useEffect } from 'react'
// import Hls from 'hls.js'
// import Plyr from 'plyr'
import Navbar from '../../components/layouts/navbar.jsx'
import './main.css'

function Main() {

  useEffect(() => {
    // const player = new Plyr('#player');
  }, [])

  return (
    <React.Fragment>
      <Navbar/>
      <div className="main-content">
        <div className='w-1/2 mx-auto'>
            <h1>main page</h1>
            <video id="player" muted autoPlay controls>
              <source src="http://192.168.1.54:3000/streaming/video/2022/07/Transformers2007.mp4" type="video/mp4" size='1080'/>
              <source src="http://192.168.1.54:3000/streaming/video/2022/07/Transformers2007.mp4" type="video/mp4" size="720"/>
            </video>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main