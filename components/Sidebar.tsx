import React from 'react'
import GoogleAds from './GoogleAds'

function Sidebar() {
  return (
    <div className="sm:sticky sm:top-5 mx-auto my-4 sm:my-0 sm:mx-0 p-4 h-screen w-[95%] sm:w-[33%] rounded-lg bg-slate-100">
        {/* <div>
            Advertisements
        </div>  
        <div>
        Top Stories
        </div> */}
        <GoogleAds currentPath="mainpage" />
        <GoogleAds currentPath="mainpage2" />
        <GoogleAds currentPath="mainpage3" />
    </div>
  )
}

export default Sidebar