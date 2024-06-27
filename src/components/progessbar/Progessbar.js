import React from 'react'

export default function Progessbar({progressBarData,}) {
    return (
        <>
        <div className={`progressbar-main-div ${progressBarData.progress}`}>

        <div className={`progressbar-text d-flex justify-content-between mb-1`}>
            <div className="left-side">
                <span>{progressBarData.name}</span>
            </div>
            <div className="right-side">
                <span>{progressBarData.percentage}%</span>
            </div>
        </div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:`${progressBarData.percentage}%`}} ></div>
            </div>

        </div>
        </>
    )
}
