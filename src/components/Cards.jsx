import React from 'react'
import { Bookmark } from 'lucide-react'
const Cards = () => {
  return (
    <div className="cards">
        <div>
          <div className="top">
            <img src="https://imgs.search.brave.com/Arw_-VusWSlLFSDoyOCqIwDqP0UNNygniVSmVgCpHFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTkxMjA1/OC5wbmc_Zj13ZWJw/Jnc9MTI4" alt="" />
            <button> Save <Bookmark size={18} /></button>

          </div>
          <div className="center">
            <h3>Amazon  <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level </h4>
            </div> 
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Cards