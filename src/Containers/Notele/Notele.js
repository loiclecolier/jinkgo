import React from 'react'
import './Notele.css'
import Reportage from './reportage-notele.mp4'
import PosterReportage from './PosterReportage.png'

export default function Notele() {
  return (
    <div id="reportage-notele">
      <video className="video-reportage-notele" controls preload="none" poster={PosterReportage}>
        <source src={Reportage} type="video/mp4" />
      </video>
    </div>
  )
}
